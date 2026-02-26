import { NextResponse } from "next/server"
import { z } from "zod"

// Simple in-memory rate limiter
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000 // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 3
const ipRequestCounts = new Map<string, { count: number, resetTime: number }>()

const contactSchema = z.object({
    name: z.string().min(2, "Numele trebuie să conțină cel puțin 2 caractere").max(100),
    phone: z.string().regex(/^(07\d{8}|\+407\d{8})$/, "Numărul de telefon nu este valid"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), "Data invalidă"),
    time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Ora invalidă"),
    guests: z.string().refine((val) => parseInt(val) >= 1 && parseInt(val) <= 20, "Număr de persoane invalid"),
    message: z.string().max(1000).optional(),
    honeypot: z.string().max(0, "Invalid submission").optional() // Honeypot must be empty
})

export async function POST(req: Request) {
    try {
        // Rate Limiting (IP-based)
        const ip = req.headers.get("x-forwarded-for") || "unknown"
        const now = Date.now()

        const ipRecord = ipRequestCounts.get(ip)
        if (ipRecord) {
            if (now > ipRecord.resetTime) {
                // reset window
                ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
            } else if (ipRecord.count >= MAX_REQUESTS_PER_WINDOW) {
                return NextResponse.json(
                    { success: false, message: "Prea multe cereri. Te rugăm să încerci mai târziu." },
                    { status: 429 }
                )
            } else {
                ipRecord.count += 1
            }
        } else {
            ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
        }

        // Parse & Validate
        const body = await req.json()

        // Honeypot check: If honeypot is filled, it's a bot
        if (body.honeypot) {
            // Fake success response to fool the bot
            return NextResponse.json({ success: true })
        }

        const result = contactSchema.safeParse(body)

        if (!result.success) {
            return NextResponse.json(
                { success: false, message: result.error.errors[0].message },
                { status: 400 }
            )
        }

        // Logic to actually notify/save reservation would go here.
        // For example, sending an email or storing in a DB.

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 500))

        return NextResponse.json({ success: true })

    } catch (e) {
        console.error("API Error in contact route:", e)
        return NextResponse.json(
            { success: false, message: "A apărut o eroare la procesarea cererii." },
            { status: 500 }
        )
    }
}

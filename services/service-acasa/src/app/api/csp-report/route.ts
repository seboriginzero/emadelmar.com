import { NextResponse } from "next/server"

// Basic endpoint to receive CSP violations
export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.warn('CSP Violation:', body['csp-report'] || body)

        // In a production environment, send these logs to Datadog / Sentry or equivalent.

        return NextResponse.json({ status: 'Report received' }, { status: 200 })
    } catch (e) {
        console.error('Error parsing CSP report:', e)
        return NextResponse.json({ status: 'Invalid report' }, { status: 400 })
    }
}

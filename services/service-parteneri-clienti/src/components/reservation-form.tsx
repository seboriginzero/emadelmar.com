"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

import { RESERVATION_FORM_TEXT, BUSINESS_HOURS_LOGIC } from "@/lib/constants"

export function ReservationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        message: ""
    })

    // Load persisted data on mount safely
    useEffect(() => {
        const savedData = localStorage.getItem("reservation_form_data")
        if (savedData) {
            try {
                setFormData(prev => ({ ...prev, ...JSON.parse(savedData) }))
            } catch (e) {
                console.error("Failed to load form data", e)
            }
        }
    }, [])

    // Persist data on change
    useEffect(() => {
        localStorage.setItem("reservation_form_data", JSON.stringify(formData))
    }, [formData])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const result = await response.json()

            if (response.ok && result.success) {
                setIsSuccess(true)
                localStorage.removeItem("reservation_form_data")
                setFormData({
                    name: "",
                    phone: "",
                    date: "",
                    time: "",
                    guests: "2",
                    message: ""
                })
            } else {
                alert("Eroare: " + (result.message || "Nu s-a putut trimite cererea."))
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            alert("Eroare de conexiune. Te rugăm să încerci din nou.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="border-none shadow-2xl bg-white dark:bg-card max-w-2xl mx-auto overflow-hidden">
            <CardContent className="p-8 sm:p-12">
                <h2 className="text-3xl font-serif font-bold mb-8 text-foreground dark:text-white text-center">{RESERVATION_FORM_TEXT.title}</h2>

                {isSuccess ? (
                    <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-8 rounded-xl text-center border border-green-100 dark:border-green-900/30">
                        <h3 className="font-bold text-2xl mb-3 font-serif">{RESERVATION_FORM_TEXT.success.title}</h3>
                        <p className="text-lg">{RESERVATION_FORM_TEXT.success.message}</p>
                        <Button
                            onClick={() => setIsSuccess(false)}
                            className="mt-6 text-green-700 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 shadow-none border-current"
                        >
                            {RESERVATION_FORM_TEXT.success.button}
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2.5">
                                <Label htmlFor="name" className="text-[15px] font-medium text-foreground/90 dark:text-gray-300">{RESERVATION_FORM_TEXT.fields.name}</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Numele tău"
                                    required
                                    className="h-12 bg-white dark:bg-background border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-foreground dark:text-white"
                                />
                            </div>
                            <div className="space-y-2.5">
                                <Label htmlFor="phone" className="text-[15px] font-medium text-foreground/90 dark:text-gray-300">{RESERVATION_FORM_TEXT.fields.phone}</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="07xx xxx xxx"
                                    required
                                    className="h-12 bg-white dark:bg-background border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-foreground dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2.5">
                                <Label htmlFor="date" className="text-[15px] font-medium text-foreground/90 dark:text-gray-300">{RESERVATION_FORM_TEXT.fields.date}</Label>
                                <Input
                                    id="date"
                                    name="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12 bg-white dark:bg-background border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-foreground dark:text-white"
                                />
                            </div>
                            <div className="space-y-2.5">
                                <Label htmlFor="time" className="text-[15px] font-medium text-foreground/90 dark:text-gray-300">{RESERVATION_FORM_TEXT.fields.time}</Label>
                                <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleInputChange}
                                    required
                                    className="h-12 w-full rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-background px-3 py-2 text-foreground dark:text-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                                >
                                    <option value="" disabled>Selectează ora</option>
                                    {BUSINESS_HOURS_LOGIC.timeSlots.map(slot => (
                                        <option key={slot} value={slot}>{slot}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2.5">
                                <Label htmlFor="guests" className="text-[15px] font-medium text-foreground/90 dark:text-gray-300">{RESERVATION_FORM_TEXT.fields.guests}</Label>
                                <Input
                                    id="guests"
                                    name="guests"
                                    type="number"
                                    min="1"
                                    max="20"
                                    value={formData.guests}
                                    onChange={handleInputChange}
                                    placeholder="2"
                                    required
                                    className="h-12 bg-white dark:bg-background border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-foreground dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <Label htmlFor="message" className="text-[15px] font-medium text-foreground/90 dark:text-gray-300">{RESERVATION_FORM_TEXT.fields.message}</Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Alte detalii..."
                                className="min-h-[120px] bg-white dark:bg-background border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-foreground dark:text-white"
                            />
                        </div>

                        <div className="flex flex-col items-center gap-8 pt-4">
                            <Button
                                type="submit"
                                size="lg"
                                className="sm:w-auto"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? RESERVATION_FORM_TEXT.fields.submitting : RESERVATION_FORM_TEXT.fields.submit}
                            </Button>

                            <div className="flex flex-col text-center items-center justify-center gap-2">
                                <span className="text-[11px] text-muted-foreground/60 font-medium tracking-wide uppercase">Evaluat de oaspeții noștri pe</span>
                                <a
                                    href="https://www.tripadvisor.com/Restaurant_Review-g298472-d5971454-Reviews-Ema_Del_Mar_Arad-Arad_Arad_County_Western_Romania_Transylvania.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all hover:opacity-80 inline-flex items-center justify-center p-2 dark:bg-white/95 dark:px-4 dark:py-2 dark:rounded-lg dark:shadow-sm"
                                    aria-label="Pagina Tripadvisor pentru Ema del Mar"
                                >
                                    <img
                                        src="https://static.tacdn.com/img2/widget/tripadvisor_logo_115x18.gif"
                                        alt="Tripadvisor"
                                        loading="lazy"
                                        className="h-[18px] w-[115px] object-contain"
                                    />
                                </a>
                            </div>
                        </div>
                    </form>
                )}
            </CardContent>
        </Card >
    )
}

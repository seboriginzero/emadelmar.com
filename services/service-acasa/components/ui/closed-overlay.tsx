"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Phone, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG, BUSINESS_HOURS_LOGIC } from "@/lib/constants"

export function ClosedOverlay({ onUnlock }: { onUnlock?: () => void }) {
    const [reopeningText, setReopeningText] = useState(`Deschidem în curând la ${BUSINESS_HOURS_LOGIC.openHour}:00`);

    useEffect(() => {
        const options: Intl.DateTimeFormatOptions = {
            timeZone: BUSINESS_HOURS_LOGIC.timezone,
            weekday: 'short',
            hour: 'numeric',
            hour12: false
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts = formatter.formatToParts(new Date());
        const weekday = parts.find(p => p.type === 'weekday')?.value;
        const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0', 10);

        if ((weekday === 'Sat' && hour >= BUSINESS_HOURS_LOGIC.closeHour) || (weekday === BUSINESS_HOURS_LOGIC.closedDay && hour < 12)) {
            setReopeningText(`Deschidem luni la ${BUSINESS_HOURS_LOGIC.openHour}:00`);
        } else if (hour >= BUSINESS_HOURS_LOGIC.closeHour || weekday === BUSINESS_HOURS_LOGIC.closedDay) {
            setReopeningText(`Deschidem mâine la ${BUSINESS_HOURS_LOGIC.openHour}:00`);
        } else {
            setReopeningText(`Deschidem astăzi la ${BUSINESS_HOURS_LOGIC.openHour}:00`);
        }
    }, []);

    const handleUnlock = useCallback(() => {
        if (typeof window !== "undefined") {
            sessionStorage.setItem("emadelmar_unlocked", "true");
        }
        if (onUnlock) onUnlock();
    }, [onUnlock]);

    return (
        <div className="fixed inset-0 z-[200] bg-transparent text-[var(--ema-dark)] font-serif font-light italic overflow-y-auto no-scrollbar">
            {/* Solid Background overlay element */}
            <div className="fixed inset-0 z-0 bg-[var(--ema-light)]/85" />

            <div className="relative z-10 min-h-full flex items-center justify-center py-12 md:py-20">
                <div className="container max-w-4xl px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center justify-center gap-4 md:gap-8 mx-auto mb-10 md:mb-12">
                            <div className="relative h-16 w-48 md:h-24 md:w-64 shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt={SITE_CONFIG.name}
                                    fill
                                    className="object-contain brightness-0"
                                    priority
                                />
                            </div>
                            <div className="relative h-16 w-24 md:h-24 md:w-32 shrink-0">
                                <Image
                                    src="/images/Redbull-emadelmar.png"
                                    alt="Red Bull"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
                            {/* Status Pill */}
                            <div className="inline-flex items-center gap-3 bg-[var(--ema-dark)] text-white/90 px-5 py-2 md:px-6 md:py-2.5 rounded-full mb-6 md:mb-8 shadow-sm">
                                <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3b30] opacity-40"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-[#ff3b30]"></span>
                                </span>
                                <span className="text-[11px] md:text-[14px] font-serif font-light italic tracking-[0.2em]">ÎNCHIS MOMENTAN</span>
                            </div>

                            {/* Dynamic Reopening Text */}
                            <h2 className="text-[22px] md:text-[34px] font-serif font-light italic text-[var(--ema-dark)] px-4">
                                {reopeningText}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 text-left max-w-3xl mx-auto">
                            <div className="bg-white border border-[var(--ema-dark)]/20 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                                <div className="flex items-center gap-4 mb-6 text-primary">
                                    <Clock className="h-6 w-6 text-[var(--ema-dark)]" />
                                    <h3 className="text-lg md:text-xl font-serif font-light italic uppercase tracking-widest text-[var(--ema-dark)]">Program</h3>
                                </div>
                                <div className="space-y-3 text-[var(--ema-dark)]">
                                    <div className="flex justify-between border-b border-[var(--ema-dark)]/20 pb-2">
                                        <span>Luni – Sâmbătă</span>
                                        <span className="font-serif font-light italic">{BUSINESS_HOURS_LOGIC.openHour}:00 – {BUSINESS_HOURS_LOGIC.closeHour}:00</span>
                                    </div>
                                    <div className="flex justify-between text-red-600">
                                        <span>Duminică</span>
                                        <span>Închis</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-[var(--ema-dark)]/20 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                                <div className="flex items-center gap-4 mb-6 text-primary">
                                    <Phone className="h-6 w-6 text-[var(--ema-dark)]" />
                                    <h3 className="text-lg md:text-xl font-serif font-light italic uppercase tracking-widest text-[var(--ema-dark)]">Rezervări</h3>
                                </div>
                                <div className="space-y-4">
                                    {SITE_CONFIG.contact.phone.map(phone => (
                                        <a
                                            key={phone}
                                            href={`tel:${phone.replace(/\s/g, "")}`}
                                            className="flex items-center justify-between group"
                                        >
                                            <span className="text-[var(--ema-dark)]/80 group-hover:text-[var(--ema-dark)] transition-colors">Telefon</span>
                                            <span className="font-serif font-light italic text-[var(--ema-dark)] group-hover:text-[var(--ema-dark)]/80 transition-colors">{phone}</span>
                                        </a>
                                    ))}
                                    <a
                                        href={`mailto:${SITE_CONFIG.contact.email}`}
                                        className="flex items-center justify-between group pt-2 border-t border-[var(--ema-dark)]/20"
                                    >
                                        <span className="text-[var(--ema-dark)]/80 group-hover:text-[var(--ema-dark)] transition-colors text-sm">Email</span>
                                        <span className="text-xs md:text-sm font-serif font-light italic text-[var(--ema-dark)] group-hover:text-[var(--ema-dark)]/80 transition-colors">{SITE_CONFIG.contact.email}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-6 mt-8 pb-12 w-full max-w-4xl mx-auto">
                            <Button
                                asChild
                                size="lg"
                                className="w-[90vw] sm:w-[320px] md:w-auto whitespace-normal break-words h-auto min-h-[56px] md:min-h-[64px] py-3 md:py-4 px-6 md:px-10 text-center text-xs sm:text-sm leading-snug md:leading-tight text-[var(--ema-dark)] bg-white hover:bg-white/90 transition-all rounded-sm md:rounded-none font-serif font-light italic"
                            >
                                <a
                                    
                                    href="/contact#rezervari"
                                    className="flex flex-col items-center justify-center gap-0.5 md:gap-1"
                                    onClick={handleUnlock}
                                >
                                    <span>ORGANIZĂM EVENIMENTUL TĂU</span>
                                </a>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                className="w-[90vw] sm:w-[320px] md:w-auto whitespace-normal break-words h-auto min-h-[56px] md:min-h-[64px] py-3 md:py-4 px-6 md:px-10 text-center text-xs sm:text-sm leading-snug md:leading-tight text-[var(--ema-dark)] bg-white hover:bg-white/90 transition-all rounded-sm md:rounded-none font-serif font-light italic mt-4"
                            >
                                <a
                                    
                                    href="/"
                                    className="flex flex-col items-center justify-center gap-0.5 md:gap-1"
                                    onClick={handleUnlock}
                                >
                                    <span>NAVIGHEAZĂ SITE</span>
                                </a>
                            </Button>

                            <a
                                href="/contact#harta"
                                className="flex items-center justify-center gap-3 text-[var(--ema-dark)]/80 hover:text-[var(--ema-dark)] transition-colors cursor-pointer group w-full mt-6"
                                onClick={handleUnlock}
                            >
                                <MapPin className="h-5 w-5 shrink-0 group-hover:-translate-y-1 transition-transform" />
                                <span className="text-[12px] md:text-sm font-serif font-light italic tracking-wide uppercase text-center">{SITE_CONFIG.contact.address}</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Cinematic Overlay Lines */}
            <div className="fixed top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
            <div className="fixed top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
    )
}

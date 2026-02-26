"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { SITE_CONFIG } from "@/lib/constants"

export function LoadingScreen() {
    // Default to false so it doesn't flash during SSR
    const [isVisible, setIsVisible] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        // Only run on client after hydration
        const hasLoaded = sessionStorage.getItem("ema_del_mar_loaded")

        if (!hasLoaded) {
            setIsVisible(true)

            // Auto-hide after 1.8 seconds
            const timer = setTimeout(() => {
                setIsVisible(false)
                sessionStorage.setItem("ema_del_mar_loaded", "true")
            }, 1800)

            return () => clearTimeout(timer)
        }
    }, [])

    if (!isMounted || !isVisible) return null

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#0a192f] lg:backdrop-blur-xl transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div className="relative flex flex-col items-center animate-in fade-in zoom-in duration-1000">
                <div
                    className="relative h-20 w-64 mb-8"
                >
                    <Image
                        src="/logo.png"
                        alt={SITE_CONFIG.name}
                        fill
                        className="object-contain dark:brightness-0 dark:invert"
                        priority
                    />
                </div>

                {/* Premium loading bar */}
                <div className="w-48 h-[1px] bg-gray-100 dark:bg-white/10 relative overflow-hidden rounded-full">
                    <div
                        className="absolute inset-0 w-1/2 bg-primary rounded-full animate-[progress_1.5s_ease-in-out_infinite]"
                    />
                </div>

                <p
                    className="mt-4 text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400 dark:text-white/40 animate-pulse"
                >
                    Experiență Mediterraneană
                </p>
            </div>
        </div>
    )
}

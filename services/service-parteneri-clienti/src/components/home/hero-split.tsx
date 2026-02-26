"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { LEFT_IMAGES, RIGHT_IMAGES, CONTENT } from "./hero-data"

export function HeroSplit() {
    const [step, setStep] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const nextStep = useCallback(() => {
        setStep((prev) => (prev + 1) % CONTENT.length)
    }, [])

    const prevStep = useCallback(() => {
        setStep((prev) => (prev - 1 + CONTENT.length) % CONTENT.length)
    }, [])

    useEffect(() => {
        const startTimer = () => {
            if (timerRef.current) clearTimeout(timerRef.current)
            timerRef.current = setTimeout(() => {
                if (!document.hidden) nextStep()
            }, 10000)
        }

        const handleVisibilityChange = () => {
            if (!document.hidden) startTimer()
            else if (timerRef.current) clearTimeout(timerRef.current)
        }

        startTimer()
        document.addEventListener("visibilitychange", handleVisibilityChange)

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
            document.removeEventListener("visibilitychange", handleVisibilityChange)
        }
    }, [step, nextStep])

    const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        setTouchStart('touches' in e ? e.targetTouches[0].clientX : e.clientX)
    }

    const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
        if (!touchStart) return
        const touchEndX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX
        const diff = touchStart - touchEndX
        if (diff > 50) nextStep()
        else if (diff < -50) prevStep()
        setTouchStart(null)
    }

    const currentContent = CONTENT[step]
    const isFull = currentContent?.isFull || false
    const subtextLines = Array.isArray(currentContent.subtext) ? currentContent.subtext : [currentContent.subtext]

    return (
        <section
            className="fixed top-0 left-0 z-0 w-full h-[100dvh] flex flex-col lg:flex-row overflow-hidden bg-black select-none cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
            aria-label="Hero Carousel"
        >
            {/* Left side or Full screen container */}
            <div
                className={`relative overflow-hidden transition-all duration-[1200ms] ease-in-out will-change-[width,height] ${isFull ? 'w-full h-full lg:w-full lg:h-full z-10' : 'w-full h-1/2 lg:w-1/2 lg:h-full'}`}
            >
                {LEFT_IMAGES.map((src, idx) => (
                    <div
                        key={`left-${idx}`}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${step === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        {/* Only render Image if it's current, adjacent, or first to save memory */}
                        {(idx === step || idx === step - 1 || idx === step + 1 || idx === 0) && (
                            <Image
                                src={src}
                                alt={`Slide content ${idx + 1}`}
                                fill
                                className={`object-cover transition-transform duration-[10000ms] ease-linear will-change-transform ${step === idx ? 'scale-105' : 'scale-100'}`}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority={idx === 0}
                                quality={85}
                                unoptimized={idx !== 0}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Right side (hidden during full screen) */}
            <div
                className={`relative overflow-hidden transition-all duration-[1200ms] ease-in-out will-change-[width,height] ${isFull ? 'w-full h-0 lg:w-0 lg:h-full opacity-0' : 'w-full h-1/2 lg:w-1/2 lg:h-full opacity-100'}`}
            >
                {RIGHT_IMAGES.map((src, idx) => (
                    <div
                        key={`right-${idx}`}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${step === idx && !isFull ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        {(idx === step || idx === step - 1 || idx === step + 1 || idx === 0) && (
                            <Image
                                src={src}
                                alt={`Right preview ${idx + 1}`}
                                fill
                                className={`object-cover transition-transform duration-[10000ms] ease-linear will-change-transform ${step === idx ? 'scale-105' : 'scale-100'}`}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority={idx === 0}
                                quality={85}
                                unoptimized={idx !== 0}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Center Moody Overlay with CSS optimization (no mix-blend-mode for mobile safety) */}
            <div className={`absolute inset-0 z-20 transition-colors duration-1000 pointer-events-none ${step === 0 ? "bg-black/50 lg:bg-black/40" : "bg-black/60 lg:bg-black/30"}`} />

            {/* Center Text Wrapper with Cinematic Diffusion - Tightened Grouping */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none p-4 md:p-6">
                <div className="container text-center pointer-events-auto">
                    {CONTENT.map((content, idx) => (
                        <div
                            key={`content-${idx}`}
                            className={`w-full max-w-[95vw] lg:max-w-[85vw] xl:max-w-[1400px] mx-auto absolute inset-0 flex flex-col justify-center transition-all duration-1000 ease-out will-change-transform ${step === idx ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none'}`}
                        >
                            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic font-normal tracking-wide leading-tight mb-4 md:mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] px-4">
                                <span>
                                    {content.headline}
                                </span>
                            </h1>
                            <div className="mb-6 w-full mx-auto flex flex-col items-center gap-1.5">
                                {(Array.isArray(content.subtext) ? content.subtext : [content.subtext]).map((line: string, lineIdx: number) => (
                                    <p
                                        key={lineIdx}
                                        className="text-[15px] sm:text-base md:text-lg lg:text-xl font-normal tracking-wide font-serif italic leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] px-2"
                                    >
                                        <span>
                                            {line}
                                        </span>
                                    </p>
                                ))}
                            </div>

                            <div className="pt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                                {content.cta}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Thin Navigation Arrows (Premium/Professional) */}
            <button
                onClick={prevStep}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-4 text-white/30 hover:text-white transition-colors duration-500 hidden sm:block pointer-events-auto"
                aria-label="Previous slide"
            >
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                    <path d="M10 2L1 10M1 10L10 18M1 10H60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <button
                onClick={nextStep}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-4 text-white/30 hover:text-white transition-colors duration-500 hidden sm:block pointer-events-auto"
                aria-label="Next slide"
            >
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                    <path d="M50 2L59 10M59 10L50 18M59 10H0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 z-40 flex justify-center gap-3 pointer-events-auto">
                {CONTENT.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setStep(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className="group relative p-2"
                    >
                        <span
                            className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${step === idx
                                ? "bg-white scale-125"
                                : "bg-white/40 scale-75 hover:bg-white/70 hover:scale-90"
                                }`}
                        />
                        <span className="absolute inset-0" />
                    </button>
                ))}
            </div>
        </section>
    )
}

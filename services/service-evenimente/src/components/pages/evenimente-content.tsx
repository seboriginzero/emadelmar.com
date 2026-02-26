"use client"

import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import React, { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Users, Wine, Volume2, VolumeX } from "lucide-react"

import { EVENTS_DATA } from "@/lib/constants"

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

function PremiumEventCard({ event, idx }: { event: any, idx: number }) {
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    // Se declanșează când intră în viewport, pentru a nu descărca bateria cu autoplay ascuns
    const isInView = useInView(containerRef, { margin: "0px 0px -200px 0px", once: false })

    useEffect(() => {
        if (!videoRef.current) return;
        if (isInView) {
            videoRef.current.play().catch(() => {
                // Autoplay was prevented by browser, safe to ignore
            });
        } else {
            videoRef.current.pause();
        }
    }, [isInView]);

    const toggleMute = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setIsMuted(videoRef.current.muted)
        }
    }

    const premiumEvent = event as typeof event & { premiumMedia: { carousel: string[], video: string } };

    return (
        <motion.div
            key={idx}
            variants={itemVariants}
            ref={containerRef}
            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full"
        >
            <div className="relative h-72 md:h-80 overflow-hidden bg-black group/image">
                <Link href="/1-mai" className="absolute inset-0 z-10 cursor-pointer" aria-label={`Vezi detalii pentru ${event.title}`} />
                {/* Premium Video */}
                <video
                    ref={videoRef}
                    loop
                    muted={isMuted}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/image:scale-110 transition-transform duration-1000 origin-center"
                >
                    <source src={`/evenimente${premiumEvent.premiumMedia.video}`} type="video/mp4" />
                </video>
                {/* Fallback image behind video */}
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                    className="object-cover -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-500 pointer-events-none" />

                <div className="absolute top-6 right-6 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full backdrop-blur-sm shadow-lg z-10 transition-transform group-hover/image:rotate-12 pointer-events-none">
                    <div className="text-primary">
                        <Wine className="w-6 h-6" />
                    </div>
                </div>

                <div className="absolute top-6 left-6 px-3 py-1 bg-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg z-10 animate-pulse pointer-events-none">
                    Premium Event
                </div>

                {/* Audio Toggle Button - isolated properly without invalid nesting */}
                <button
                    onClick={toggleMute}
                    className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all z-[20] shadow-lg group/audio focus:outline-none"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white/80 group-hover/audio:text-white transition-colors" />
                    ) : (
                        <Volume2 className="w-5 h-5 text-primary group-hover/audio:text-white transition-colors" />
                    )}
                </button>

                {/* Premium Carousel Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
                    {premiumEvent.premiumMedia.carousel.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary w-4' : 'bg-white/50'} transition-all duration-300`}
                        />
                    ))}
                </div>
            </div>

            <div className="p-8 relative flex-1 flex flex-col">
                <Link href="/1-mai" className="absolute inset-0 z-10 cursor-pointer" aria-label={`Rezervă ${event.title}`} />
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                    {event.description}
                </p>

                <div className="mt-6 pt-6 border-t border-border relative z-20 pointer-events-none">
                    <span className="inline-flex items-center text-sm font-semibold text-primary uppercase tracking-wider group/link">
                        Rezervă Experiența VIP
                        <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export function EvenimenteContent() {
    return (
        <div className="flex flex-col w-full">
            <PageHeader
                title={EVENTS_DATA.title}
                subtitle={EVENTS_DATA.subtitle}
                image={EVENTS_DATA.headerImage}
            />

            {/* Intro Section */}
            <section className="py-20 lg:py-28 bg-background">
                <div className="container px-4 mx-auto text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
                            {EVENTS_DATA.intro.tag}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-signature italic font-normal mb-8 text-foreground leading-tight">
                            {EVENTS_DATA.intro.title}
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {EVENTS_DATA.intro.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Event Types Grid */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                    >
                        {EVENTS_DATA.types.map((event, idx) => {
                            const premiumEvent = event as typeof event & { premiumMedia?: { carousel: string[], video: string } };
                            const hasPremium = !!premiumEvent.premiumMedia;

                            if (hasPremium) {
                                return <PremiumEventCard key={idx} event={event} idx={idx} />
                            }

                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full"
                                >
                                    <div className="relative h-72 md:h-80 overflow-hidden bg-black">
                                        {/* Standard Static Image */}
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            quality={85}
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-500" />

                                        <div className="absolute top-6 right-6 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full backdrop-blur-sm shadow-lg z-10 transition-transform group-hover:rotate-12">
                                            <div className="text-primary">
                                                {event.type === 'users' ? <Users className="w-6 h-6" /> :
                                                    <Calendar className="w-6 h-6" />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 relative flex-1 flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed flex-1">
                                            {event.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Inquire Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/images/others/big/mese_private.jpg"
                        alt="Background"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-60"
                        loading="lazy"
                    />
                </div>
                <div className="container relative z-10 px-4 mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-signature italic font-normal mb-8">
                            {EVENTS_DATA.cta.title}
                        </h2>
                        <p className="text-white/80 text-lg mb-10 leading-relaxed">
                            {EVENTS_DATA.cta.description}
                        </p>
                        <Button asChild size="lg" className="text-white hover:text-white/80">
                            <a href="https://emadelmar.originzero.art/contact#rezervari">
                                {EVENTS_DATA.cta.button}
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

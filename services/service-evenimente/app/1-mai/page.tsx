"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Music, GlassWater, Crown, Volume2, VolumeX } from "lucide-react"

export default function VIPExperiencePage() {
    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Fullscreen state for the left gallery image
    const [isFullscreenLeftImage, setIsFullscreenLeftImage] = useState(false);
    // Fullscreen state for the right gallery image (cocktail party)
    const [isFullscreenRightImage, setIsFullscreenRightImage] = useState(false);

    // Audio state for mobile background video
    const [isHeroMuted, setIsHeroMuted] = useState(true);
    const heroVideoRef = useRef<HTMLVideoElement>(null);

    const toggleHeroMute = () => {
        if (heroVideoRef.current) {
            heroVideoRef.current.muted = !heroVideoRef.current.muted;
            setIsHeroMuted(heroVideoRef.current.muted);
        }
    };

    // Force dark mode feeling for this page
    useEffect(() => {
        document.documentElement.classList.add("dark");
        return () => {
            document.documentElement.classList.remove("dark");
        }
    }, [])

    return (
        <>
            <div className="relative min-h-screen bg-background dark:bg-[#081220] text-foreground dark:text-white selection:bg-primary/30 overflow-x-hidden">
                {/* Cinematic Hero Section with Autoplay Video */}
                <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
                    <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0 scale-105">
                        <video
                            ref={heroVideoRef}
                            autoPlay
                            loop
                            muted={isHeroMuted}
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src="/evenimente/2026/1-mai/video/1-mai-premium-promo.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/evenimente/2026/1-mai/images/1-mai-party-hero.jpg"
                                alt="1 Mai Premium Party"
                                fill
                                className="object-cover opacity-20 dark:opacity-50 transition-transform duration-[3s] scale-105"
                                priority
                            />
                        </div>
                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10 pointer-events-none" />
                    </motion.div>

                    <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end items-center pb-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md mb-6 shadow-2xl"
                        >
                            <Crown className="w-4 h-4 text-primary" />
                            <span className="text-xs font-serif italic tracking-[0.3em] uppercase text-white shadow-black drop-shadow-md">Exclusive Access</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="group bg-black/30 backdrop-blur-xl border border-white/30 hover:bg-white/20 hover:border-white text-white active:!text-primary font-serif italic tracking-[0.2em] px-8 md:px-12 py-6 text-sm md:text-lg uppercase shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all hover:scale-[1.02] relative overflow-hidden"
                            >
                                <a href="https://emadelmar.originzero.art/contact#rezervari">
                                    <span className="relative z-10 drop-shadow-md">Confirmă Prezența VIP</span>
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile Audio Toggle */}
                    <button
                        onClick={toggleHeroMute}
                        className="md:hidden absolute bottom-12 right-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white z-50 shadow-xl"
                        aria-label={isHeroMuted ? "Unmute background video" : "Mute background video"}
                    >
                        {isHeroMuted ? <VolumeX className="w-5 h-5 text-white/80" /> : <Volume2 className="w-5 h-5 text-primary" />}
                    </button>

                    {/* Desktop Floating Video Window */}
                    <motion.div
                        className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 w-[280px] lg:w-[320px] bg-[#1C1C1E] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-50 hidden md:flex flex-col"
                        initial={{ opacity: 0, x: 50, rotateY: -10 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ delay: 1, duration: 1.2, type: "spring" }}
                        style={{ perspective: 1000 }}
                    >
                        {/* Video */}
                        <div className="w-full relative aspect-[9/16] bg-black group/floating-video">
                            <video
                                controls
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/evenimente/2026/1-mai/video/1-mai-premium-promo.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 dark:text-white/50 font-medium">Descoperă</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 dark:from-white/50 to-transparent animate-pulse" />
                    </motion.div>
                </section>

                {/* Immersive Audio/Visual Details */}
                <section className="py-24 md:py-32 relative z-10 bg-background dark:bg-[#081220]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center max-w-7xl mx-auto">

                            {/* Left Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                                    Setup Premium,<br />
                                    <span className="font-light italic text-primary">Atmosferă Electrică.</span>
                                </h2>
                                <p className="text-foreground/70 dark:text-white/70 text-lg leading-relaxed mb-10">
                                    Rezervă-ți masa chiar acum pentru un party exclusivist. Dj set-uri antrenante, cocktail-uri rafinate și o comunitate selectă pentru a marca începutul sezonului de vară 2026.
                                </p>

                                <div className="grid grid-cols-2 gap-8 mb-10">
                                    <div className="space-y-3">
                                        <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center bg-primary/10 text-primary">
                                            <Music className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-serif italic text-xl">Line-up Secret</h4>
                                        <p className="text-sm text-foreground/50 dark:text-white/50">DJs rezidenți și invitați surpriză</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center bg-primary/10 text-primary">
                                            <GlassWater className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-serif italic text-xl">Signature Drinks</h4>
                                        <p className="text-sm text-foreground/50 dark:text-white/50">Meniu creat special de mixologi</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Image Parallax */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className="relative cursor-pointer group"
                                onClick={() => setIsFullscreenRightImage(true)}
                            >
                                <motion.div layoutId="right-gallery-image" className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                                    <Image
                                        src="/evenimente/2026/1-mai/images/1-mai-cocktail-party.jpg"
                                        alt="VIP Cocktail Party"
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-10 pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-[#081220] via-transparent to-transparent opacity-80" />
                                    {/* Overlay hints */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating overlay card */}
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white dark:bg-[#121c2d] border border-black/5 dark:border-white/5 p-6 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[280px]"
                                >
                                    <div className="flex gap-4 items-start border-b border-black/5 dark:border-white/5 pb-4 mb-4">
                                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="font-serif italic text-lg leading-none mb-1 text-foreground dark:text-white">1 Mai 2026</p>
                                            <p className="text-xs text-foreground/50 dark:text-white/50 tracking-wider uppercase">Save the date</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="font-serif italic text-lg leading-none mb-1 text-foreground dark:text-white">21:00 - Târziu</p>
                                            <p className="text-xs text-foreground/50 dark:text-white/50 tracking-wider uppercase">Access exclusiv</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Expansive Gallery Section */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground dark:text-white">Mese Private & <span className="text-primary italic font-light">Lounge</span></h2>
                            <p className="text-foreground/60 dark:text-white/60 text-lg max-w-2xl mx-auto">Locuri limitate. Accesul se face strict pe bază de rezervare confirmată în prealabil.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                                onClick={() => setIsFullscreenLeftImage(true)}
                            >
                                <motion.div layoutId="left-gallery-image" className="absolute inset-0">
                                    <Image
                                        src="/evenimente/2026/1-mai/images/1-mai-book-table.jpg"
                                        alt="Book a table for 1 Mai"
                                        fill
                                        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.15]"
                                    />
                                    <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-10 pointer-events-none" />
                                </motion.div>

                                {/* Overlay texts */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />

                                {/* Magnify Icon */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/90 to-transparent z-10">
                                    <h3 className="text-4xl font-signature italic font-normal group-hover:text-primary transition-colors duration-500 text-white">Rezervări Mese</h3>
                                    <p className="text-white/70 mt-2">Pachete premium pentru grupuri</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group"
                            >
                                <Image
                                    src="/evenimente/2026/1-mai/images/1-mai-party-hero.jpg"
                                    alt="Club atmosphere"
                                    fill
                                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.15]"
                                />
                                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-10 pointer-events-none" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/90 to-transparent z-10">
                                    <h3 className="text-2xl font-serif font-bold text-white">Lounge Area</h3>
                                    <p className="text-white/70 mt-2">Vibe exclusivist și intimitate</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Strip */}
                <section className="relative py-24 z-10 bg-primary/5 border-t border-primary/20">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Crown className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
                            <h2 className="text-4xl font-serif font-bold mb-8 text-foreground dark:text-white">Asigură-ți Locul</h2>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="group border-primary text-primary hover:bg-primary active:!bg-primary/90 hover:shadow-[0_0_40px_-5px_rgba(1,173,239,0.5)] font-serif italic tracking-[0.2em] px-10 py-6 text-sm uppercase transition-all duration-500 overflow-hidden relative"
                            >
                                <a href="https://emadelmar.originzero.art/contact#rezervari">
                                    <span className="relative z-10 group-hover:text-white group-active:!text-[var(--ema-dark)] transition-colors duration-200">Solicită Ofertă VIP</span>
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* SVG Filter for Sea Wave Effect strictly for the fullscreen view */}
            <svg className="fixed pointer-events-none w-0 h-0" aria-hidden="true">
                <filter id="sea-wave-filter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.015" numOctaves="3" result="warp">
                        <animate attributeName="baseFrequency" values="0.01 0.015;0.015 0.02;0.01 0.015" dur="10s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" in2="warp" scale="15" xChannelSelector="R" yChannelSelector="B">
                        <animate attributeName="scale" values="10;25;10" dur="10s" repeatCount="indefinite" />
                    </feDisplacementMap>
                </filter>
            </svg>

            {/* Fullscreen Modal Portal for Left Image */}
            <AnimatePresence>
                {isFullscreenLeftImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md overflow-y-auto overflow-x-hidden custom-scrollbar"
                        onClick={() => setIsFullscreenLeftImage(false)}
                    >
                        <div className="min-h-screen py-10 md:py-20 px-4 flex justify-center items-start">
                            <motion.div
                                layoutId="left-gallery-image"
                                className="relative flex flex-col w-full max-w-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5 rounded-2xl overflow-hidden bg-background dark:bg-[#081220]"
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.div
                                    className="w-full relative"
                                    style={{ filter: "url(#sea-wave-filter)" }}
                                >
                                    <Image
                                        src="/evenimente/2026/1-mai/images/1-mai-book-table.jpg"
                                        alt="Book a table for 1 Mai (Fullscreen)"
                                        width={1000}
                                        height={1500}
                                        className="w-full h-auto object-cover"
                                        quality={100}
                                        priority
                                    />
                                    {/* Desktop internal gradient */}
                                    <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#081220]/90 via-transparent to-transparent pointer-events-none" />
                                </motion.div>

                                {/* Mobile internal text */}
                                <div className="block md:hidden p-6 relative z-20 text-center">
                                    <h3 className="text-[2.5rem] leading-none font-signature italic font-normal text-foreground dark:text-white mb-2">Rezervări Mese</h3>
                                    <p className="text-foreground/80 dark:text-white/80 text-base">Pachete premium pentru grupuri și petreceri exclusiviste.</p>
                                </div>

                                {/* Exit Hints */}
                                <div
                                    className="fixed top-6 right-6 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors z-[110]"
                                    onClick={() => setIsFullscreenLeftImage(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                </div>

                                {/* Desktop absolutely positioned text */}
                                <div className="hidden md:block absolute bottom-8 left-8">
                                    <h3 className="text-5xl md:text-7xl font-signature italic font-normal text-white mb-2 drop-shadow-xl">Rezervări Mese</h3>
                                    <p className="text-white/80 text-lg drop-shadow-lg font-light">Pachete premium pentru grupuri și petreceri exclusiviste.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fullscreen Modal Portal for Right Image (Cocktails) */}
            <AnimatePresence>
                {isFullscreenRightImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md overflow-y-auto overflow-x-hidden custom-scrollbar"
                        onClick={() => setIsFullscreenRightImage(false)}
                    >
                        <div className="min-h-screen py-10 md:py-20 px-4 flex justify-center items-center">
                            <motion.div
                                layoutId="right-gallery-image"
                                className="relative w-full max-w-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5 rounded-2xl overflow-hidden bg-background dark:bg-[#081220]"
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.div className="w-full relative aspect-[3/4] md:aspect-auto animate-shake-glass">
                                    <Image
                                        src="/evenimente/2026/1-mai/images/1-mai-cocktail-party.jpg"
                                        alt="VIP Cocktail Party (Fullscreen)"
                                        width={1000}
                                        height={1500}
                                        className="w-full h-auto object-cover"
                                        quality={100}
                                        priority
                                    />
                                    {/* Glass reflection overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent mix-blend-screen pointer-events-none" />
                                    {/* Ice Cubes Overlay */}
                                    <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
                                        <div className="ice-cube" style={{ top: '65%', left: '35%', width: '40px', height: '40px', animationDelay: '0s' }} />
                                        <div className="ice-cube" style={{ top: '60%', left: '42%', width: '30px', height: '30px', animationDelay: '1s' }} />
                                        <div className="ice-cube" style={{ top: '70%', left: '50%', width: '45px', height: '45px', animationDelay: '0.5s' }} />
                                        <div className="ice-cube" style={{ top: '62%', left: '55%', width: '35px', height: '35px', animationDelay: '1.5s' }} />
                                        <div className="ice-cube" style={{ top: '75%', left: '40%', width: '28px', height: '28px', animationDelay: '2s' }} />
                                    </div>
                                </motion.div>

                                {/* Exit Hint */}
                                <div
                                    className="fixed top-6 right-6 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors z-[110]"
                                    onClick={() => setIsFullscreenRightImage(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

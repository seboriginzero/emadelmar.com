"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ZoomImage } from "@/components/ui/zoom-image"
import { SITE_CONFIG, ABOUT_TEXT } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function HomeAbout() {
    return (
        <section className="py-20 md:py-32 bg-white dark:bg-background overflow-hidden relative z-10">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content (Text) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 flex flex-col items-center text-center w-full"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif italic mb-8 text-foreground leading-tight">
                            Mâncarea este grozavă!
                        </h2>

                        <div className="flex gap-4 mb-10 text-xs tracking-widest uppercase text-muted-foreground font-medium justify-center">
                            <span>SHARE ON:</span>
                            <a href={SITE_CONFIG.socials.facebook} target="_blank" className="hover:text-primary transition-colors border-b border-muted-foreground/30 pb-0.5">FACEBOOK</a>
                            <span className="opacity-30">/</span>
                            <a href="#" className="hover:text-primary transition-colors border-b border-muted-foreground/30 pb-0.5">TWITTER</a>
                            <span className="opacity-30">/</span>
                            <a href="#" className="hover:text-primary transition-colors border-b border-muted-foreground/30 pb-0.5">PINTEREST</a>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed max-w-2xl text-lg font-sans text-center">
                            <p>
                                {SITE_CONFIG.description} {ABOUT_TEXT.description[1]}
                            </p>
                            <p>
                                {ABOUT_TEXT.description[2]}
                            </p>
                        </div>

                        <div className="mt-8 w-full flex justify-center">
                            <Button asChild size="lg" className="rounded-none px-8">
                                <a  href="/despre-noi">
                                    DESPRE NOI
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Images (2 Portrait Images) */}
                    <div className="flex-1 w-full grid grid-cols-2 gap-4 lg:gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0 }}
                            className="aspect-[3/4] relative overflow-hidden group"
                        >
                            <ZoomImage
                                src="/images/acasa/01/beef001.jpg"
                                alt="Fresh raw beef on board"
                                className="w-full h-full object-cover rounded-sm"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
                            className="aspect-[3/4] relative overflow-hidden group"
                        >
                            <ZoomImage
                                src="/images/acasa/01/steak002.jpg"
                                alt="Tomahawk steak on dark surface"
                                className="w-full h-full object-cover rounded-sm"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

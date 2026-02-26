"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ZoomImage } from "@/components/ui/zoom-image"
import { Button } from "@/components/ui/button"

export function HomeRecommendations() {
    return (
        <section className="py-20 md:py-32 bg-white dark:bg-background overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                    {/* Left Images - 2x2 Grid with reduced size */}
                    <div className="w-full max-w-xl mx-auto order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0 }}
                                className="aspect-square"
                            >
                                <ZoomImage
                                    src="/images/acasa/02/steak003.jpg"
                                    alt="Delicious meat preparation"
                                    className="w-full h-full rounded-sm"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
                                className="aspect-square"
                            >
                                <ZoomImage
                                    src="/images/acasa/02/seafood002.png"
                                    alt="Seafood platter"
                                    className="w-full h-full rounded-sm"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                                className="aspect-square"
                            >
                                <ZoomImage
                                    src="/images/acasa/02/paella001.jpg"
                                    alt="Spanish Paella"
                                    className="w-full h-full rounded-sm"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                                className="aspect-square"
                            >
                                <ZoomImage
                                    src="/images/acasa/02/steak002.jpg"
                                    alt="Grilled steak with salad"
                                    className="w-full h-full rounded-sm"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center text-center lg:items-center w-full order-1 lg:order-2 mb-12 lg:mb-0"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif italic mb-10 text-foreground leading-tight">
                            Recomandarile noastre
                        </h2>

                        <div className="flex gap-4 mb-10 text-xs tracking-widest uppercase text-muted-foreground font-medium justify-center">
                            <span>Share on:</span>
                            <a href="#" className="hover:text-primary transition-colors border-b border-muted-foreground/30 pb-0.5">Facebook</a>
                            <span className="opacity-30">/</span>
                            <a href="#" className="hover:text-primary transition-colors border-b border-muted-foreground/30 pb-0.5">Twitter</a>
                            <span className="opacity-30">/</span>
                            <a href="#" className="hover:text-primary transition-colors border-b border-muted-foreground/30 pb-0.5">Pinterest</a>
                        </div>

                        <div className="mt-8 md:mt-12">
                            <Button asChild variant="default" size="lg" className="rounded-none whitespace-normal h-auto py-4 px-6 md:px-14 tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-base">
                                <a href="/meniu">CONSULTĂ MENIUL COMPLET</a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

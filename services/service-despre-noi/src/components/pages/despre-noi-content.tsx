"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/layout/page-header"
import { ABOUT_TEXT } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DespreNoiContent() {
    return (
        <div className="flex flex-col w-full bg-white dark:bg-background">
            <PageHeader
                title="Despre noi"
                subtitle={ABOUT_TEXT.philosophy}
                image="/images/desprenoi/interior-local001.jpg"
                grayscale={true}
            />

            {/* Content Section */}
            <section className="py-24 lg:py-32">
                <div className="container px-4 mx-auto max-w-4xl text-center">

                    {/* Centered Typography using constants */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-12 mb-20"
                    >
                        <div className="space-y-8 text-foreground/90 dark:text-white/90 text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed text-center">
                            <p className="font-serif text-xl md:text-2xl text-foreground dark:text-white">
                                {ABOUT_TEXT.description[0]}
                            </p>

                            <h3 className="text-xl md:text-2xl font-serif text-foreground dark:text-white leading-relaxed italic border-y border-border/50 py-8 my-12">
                                {ABOUT_TEXT.directorQuote}
                            </h3>

                            <div className="space-y-8 opacity-90">
                                <p>
                                    {ABOUT_TEXT.description[1]}
                                </p>
                                <p>
                                    {ABOUT_TEXT.description[2]}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Side-by-Side Images Grid - Top Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative aspect-[4/3] w-full overflow-hidden shadow-sm"
                        >
                            <Image
                                src="/images/desprenoi/Interio-local002.jpg"
                                alt="Ema del Mar Interior 1"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
                                loading="lazy"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative aspect-[4/3] w-full overflow-hidden shadow-sm"
                        >
                            <Image
                                src="/images/desprenoi/interior-local-003.jpg"
                                alt="Ema del Mar Interior 2"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    {/* Team Photo and Philosophy Section - Bottom Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative aspect-[4/3] w-full overflow-hidden shadow-sm"
                        >
                            <Image
                                src="/images/desprenoi/echipa-emadelmar.jpg"
                                alt="Echipa Ema del Mar"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                loading="lazy"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="flex flex-col items-center text-center space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-foreground dark:text-white">Filozofia noastră</h2>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans tracking-wide">
                                <span>Share on:</span>
                                <div className="flex gap-2">
                                    <button className="hover:text-foreground dark:hover:text-white transition-colors border-b border-border/50">Facebook</button>
                                    <span className="text-muted-foreground">/</span>
                                    <button className="hover:text-foreground dark:hover:text-white transition-colors border-b border-border/50">Twitter</button>
                                    <span className="text-muted-foreground">/</span>
                                    <button className="hover:text-foreground dark:hover:text-white transition-colors border-b border-border/50">Pinterest</button>
                                </div>
                            </div>

                            <p className="text-lg md:text-xl font-sans italic text-foreground/80 dark:text-white/80">
                                „{ABOUT_TEXT.motto}”
                            </p>
                        </motion.div>
                    </div>

                    {/* Centered CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="px-12 py-6 text-base tracking-[0.2em]"
                        >
                            <a  href="/meniu">MENIU</a>
                        </Button>
                    </motion.div>

                </div>
            </section>
        </div>
    )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { FEATURED_DISHES } from "@/lib/constants"

export function FeaturedDishes() {
    return (
        <section className="py-20 md:py-32 bg-white dark:bg-background overflow-hidden relative z-10">
            <div className="container px-4 mx-auto max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="text-sm font-medium uppercase tracking-widest text-primary mb-2"
                    >
                        Specialitățile Noastre
                    </motion.h2>
                    <motion.h3
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="text-3xl md:text-5xl font-serif italic text-foreground leading-tight"
                    >
                        Gustul Autentic Mediteranean reinterpretat într-o selecție premium.
                    </motion.h3>
                    <motion.div
                        variants={{
                            hidden: { scaleX: 0, opacity: 0 },
                            visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, delay: 0.4, ease: "circOut" } }
                        }}
                        className="w-24 h-1 bg-primary mx-auto mt-6 origin-center"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {FEATURED_DISHES.map((dish, index) => (
                        <div key={index}>
                            <a  href={dish.href} className="block group">
                                <Card className="overflow-hidden border-none shadow-[0px_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0px_12px_36px_rgba(0,0,0,0.08)] transition-all duration-500 h-full bg-white dark:bg-card cursor-pointer rounded-[4px] md:rounded-[8px]">
                                    <motion.div
                                        className="relative h-64 md:h-72 overflow-hidden"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: index * 0.15 }}
                                    >
                                        <Image
                                            src={dish.image}
                                            alt={dish.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.10]"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                    <CardContent className="p-8 md:p-10 text-center relative bg-white dark:bg-card flex flex-col justify-center min-h-[140px]">
                                        <h4 className="text-xl font-serif font-bold text-foreground mb-3 tracking-wide">{dish.title}</h4>
                                        <p className="text-muted-foreground text-[13px] leading-relaxed font-sans">{dish.description}</p>
                                    </CardContent>
                                </Card>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

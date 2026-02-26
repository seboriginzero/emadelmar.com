"use client"

import Image from "next/image"
import { PageHeader } from "@/components/layout/page-header"
import { motion } from "framer-motion"

import { PARTNERS_DATA } from "@/lib/constants"

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
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export function PSCContent() {
    return (
        <div className="flex flex-col w-full bg-background">
            <PageHeader
                title={PARTNERS_DATA.title}
                subtitle={PARTNERS_DATA.subtitle}
                image={PARTNERS_DATA.headerImage}
            />

            {/* Intro Section */}
            <section className="py-20 lg:py-28">
                <div className="container px-4 mx-auto text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
                            {PARTNERS_DATA.intro.tag}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-foreground">
                            {PARTNERS_DATA.intro.title}
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {PARTNERS_DATA.intro.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Logo Grid Section */}
            <section className="py-20 bg-muted/20">
                <div className="container px-4 mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12"
                    >
                        {PARTNERS_DATA.partners.map((partner, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="group relative flex flex-col items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="relative w-24 h-24 mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors">
                                        {partner.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {partner.category}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Gratitude Section */}
            <section className="py-24 border-t border-slate-200 dark:border-slate-800">
                <div className="container px-4 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-foreground italic">
                            &ldquo;{PARTNERS_DATA.gratitude}&rdquo;
                        </h2>
                        <div className="h-px w-16 bg-primary mx-auto mb-8" />
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

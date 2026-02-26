"use client"

import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Users, Wine } from "lucide-react"

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
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-foreground leading-tight">
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
                        {EVENTS_DATA.types.map((event, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                                    <div className="absolute top-6 right-6 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full backdrop-blur-sm shadow-lg">
                                        <div className="text-primary">
                                            {event.type === 'users' ? <Users className="w-6 h-6" /> :
                                                event.type === 'calendar' ? <Calendar className="w-6 h-6" /> :
                                                    <Wine className="w-6 h-6" />}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
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
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
                            {EVENTS_DATA.cta.title}
                        </h2>
                        <p className="text-white/80 text-lg mb-10 leading-relaxed">
                            {EVENTS_DATA.cta.description}
                        </p>
                        <Button asChild size="lg" className="text-white hover:text-white/80">
                            <a  href="/contact#rezervari">
                                {EVENTS_DATA.cta.button}
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

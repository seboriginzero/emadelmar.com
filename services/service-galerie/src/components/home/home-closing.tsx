"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { HOME_CLOSING } from "@/lib/constants"

export function HomeClosing() {
    return (
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
            <Image
                src={HOME_CLOSING.image}
                alt="Excellent seafood dishes"
                fill
                className="object-cover"
                loading="lazy"
                quality={70}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-white text-3xl md:text-6xl font-serif italic text-center max-w-4xl drop-shadow-lg"
                >
                    {HOME_CLOSING.title}
                </motion.h2>
            </div>
        </section>
    )
}

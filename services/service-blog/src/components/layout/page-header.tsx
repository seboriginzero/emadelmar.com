"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
    title: string
    subtitle?: string
    image?: string
    grayscale?: boolean
}

export function PageHeader({
    title,
    subtitle,
    image = "/images/gallery/Interior-restaurant-Ema-del-Mar.jpg",
    grayscale = false
}: PageHeaderProps) {
    return (
        <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${grayscale ? "grayscale" : ""}`}
                style={{ backgroundImage: `url('${image}')` }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-normal drop-shadow-md tracking-wide mb-4">{title}</h1>
                    {subtitle && (
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-1 bg-primary mb-4" />
                            <p className="text-lg md:text-xl font-serif italic font-normal drop-shadow-sm text-white/90 tracking-wide">
                                {subtitle}
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

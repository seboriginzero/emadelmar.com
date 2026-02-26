"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const GALLERY_ITEMS = [
    {
        src: "/images/acasa/04/001-meniuri-delicioase-platou-tomahawk.jpg",
        title: "PLATOU TOMAHAWK",
        subtitle: "Meniuri delicioase",
        href: "/meniu#steakhouse",
        className: "col-span-1 row-span-2 md:col-span-2 md:row-span-2"
    },
    {
        src: "/images/acasa/04/002-rezervari.jpg",
        title: "REZERVĂRI",
        href: "/contact#rezervari",
        className: "col-span-1 row-span-1 md:col-span-2 md:row-span-1"
    },
    {
        src: "/images/acasa/04/006-ne-place-sa-scriem-pe-blog.jpg",
        title: "NE PLACE SĂ SCRIEM PE BLOG",
        href: "/blog",
        className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1"
    },
    {
        src: "/images/acasa/04/007-contacteaza-ne.jpg",
        title: "CONTACTEAZĂ-NE",
        href: "/contact",
        className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2"
    },
    {
        src: "/images/acasa/04/003-tot-noi-dar-in-imagini.jpg",
        title: "TOT NOI, DAR ÎN IMAGINI",
        href: "/galerie",
        className: "col-span-1 row-span-1 md:col-span-2 md:row-span-1"
    },
    {
        src: "/images/acasa/04/005-sa-ne-cunoastem.jpg",
        title: "SĂ NE CUNOAȘTEM",
        href: "/despre-noi",
        className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1"
    }
]

export function HomeMasonryGallery() {
    return (
        <section className="bg-white dark:bg-background pb-0">
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 grid-flow-row-dense auto-rows-[250px] md:auto-rows-[320px] lg:auto-rows-[380px]">
                    {GALLERY_ITEMS.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative group overflow-hidden ${item.className}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <a href={item.href} className="block w-full h-full">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

                                <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col justify-end h-full">
                                    {item.subtitle && (
                                        <span className="font-serif italic text-white/90 text-[15px] md:text-lg mb-2 md:mb-3 drop-shadow-md pb-1">
                                            {item.subtitle}
                                        </span>
                                    )}
                                    <div className="inline-flex self-start flex-col">
                                        <h3 className="text-white text-[11px] md:text-xs tracking-[0.15em] font-medium leading-loose drop-shadow-md pb-1 border-b border-white/60">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Tripadvisor Certificate of Excellence */}
                <div className="mt-16 flex justify-center">
                    <a
                        href="https://www.tripadvisor.com/Restaurant_Review-g298472-d5971454-Reviews-Ema_Del_Mar_Arad-Arad_Arad_County_Western_Romania_Transylvania.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all hover:opacity-80 inline-flex items-center justify-center p-2 dark:bg-white/95 dark:px-4 dark:py-2 dark:rounded-lg dark:shadow-sm"
                        aria-label="Pagina Tripadvisor pentru Ema del Mar"
                    >
                        <img
                            src="/images/tripadvisor2019certificate.png"
                            alt="Certificate of Excellence"
                            loading="lazy"
                            className="h-auto w-[160px] md:w-[200px] object-contain rounded-sm shadow-sm"
                        />
                    </a>
                </div>
            </div>
            {/* Tripadvisor gets some padding back at the bottom since we removed container padding */}
            <div className="pb-20 bg-white dark:bg-background"></div>
        </section>
    )
}

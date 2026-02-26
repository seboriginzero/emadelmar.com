"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"

import { GALLERY_IMAGES } from "@/lib/constants"

export default function GaleriePage() {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [lightboxOpen])

    const openLightbox = (index: number) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
    }

    const showPrevious = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1))
    }

    const showNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="flex flex-col w-full">
            <PageHeader
                title="Galerie Foto"
                subtitle="Ema del Mar în imagini"
                image="/images/gallery/fundalsus/emadelmar-terasa.jpg"
            />

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {GALLERY_IMAGES.map((src, index) => (
                            <motion.div
                                key={index}
                                className="break-inside-avoid relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                                initial={{ opacity: 0, clipPath: "polygon(0 100%, 0 100%, 0 100%, 0 100%)" }}
                                whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: (index % 10) * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                onClick={() => openLightbox(index)}
                            >
                                <div className="relative w-full">
                                    <Image
                                        src={src}
                                        alt={`Gallery Image ${index + 1}`}
                                        width={800}
                                        height={600}
                                        priority={index < 4}
                                        loading={index < 4 ? "eager" : "lazy"}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium tracking-widest uppercase bg-black/50 px-4 py-2 rounded">
                                            Mărește
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performant Lightbox built with pure CSS layout and lazy loading inside modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center touch-none"
                        onClick={closeLightbox}
                    >
                        {/* Moved Close Button inside the image wrapper */}

                        <button
                            onClick={showPrevious}
                            className="absolute left-4 z-50 p-3 text-white/50 hover:text-white bg-black/20 hover:bg-black/80 rounded-full transition-colors"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <button
                            onClick={showNext}
                            className="absolute right-4 z-50 p-3 text-white/50 hover:text-white bg-black/20 hover:bg-black/80 rounded-full transition-colors"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <div
                            className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 md:p-12 flex items-center justify-center pointer-events-none z-[100]"
                        >
                            <motion.div
                                className="relative w-full h-full pointer-events-auto flex items-center justify-center cursor-grab active:cursor-grabbing"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = offset.x;
                                    const swipeThreshold = 50;
                                    if (swipe < -swipeThreshold) {
                                        showNext(e as never);
                                    } else if (swipe > swipeThreshold) {
                                        showPrevious(e as never);
                                    }
                                }}
                            >
                                <Image
                                    src={GALLERY_IMAGES[currentIndex]}
                                    alt={`Gallery Image ${currentIndex + 1}`}
                                    fill
                                    className="object-contain pointer-events-none"
                                    quality={90}
                                    loading="lazy"
                                />

                                <div className="absolute top-0 right-0 z-[500] flex pointer-events-auto">
                                    <button
                                        onClick={closeLightbox}
                                        className="p-2 md:p-3 text-white bg-black/70 hover:bg-black rounded-full backdrop-blur-md transition-colors shadow-xl border border-white/20"
                                    >
                                        <X className="w-6 h-6 md:w-8 md:h-8" />
                                    </button>
                                </div>
                            </motion.div>
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono tracking-widest">
                                {currentIndex + 1} / {GALLERY_IMAGES.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

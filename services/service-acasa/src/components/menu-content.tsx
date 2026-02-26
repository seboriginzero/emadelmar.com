"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { MENU_CATEGORIES, MENU_DATA, MENU_SHARED_TEXT } from "@/lib/constants"


const TRANSLATIONS: Record<string, string> = {
    RO: "Alege limba pentru meniul complet",
    EN: "Choose the language for the full menu",
    DE: "Wählen Sie die Sprache für das komplette Menü",
    FR: "Choisissez la langue pour le menu complet",
    ES: "Elige el idioma para el menú completo",
    IT: "Scegli la lingua per il menu completo",
    HU: "Válassza ki a teljes menü nyelvét",
}

const TITLE_TRANSLATIONS: Record<string, string> = {
    RO: "MENIU COMPLET",
    EN: "FULL MENU",
    DE: "KOMPLETTES MENÜ",
    FR: "MENU COMPLET",
    ES: "MENÚ COMPLETO",
    IT: "MENU COMPLETO",
    HU: "TELJES MENÜ",
}

const LANG_ORDER = ["RO", "EN", "DE", "FR", "ES", "IT", "HU"]


const LogoTransition = ({ isVisible }: { isVisible: boolean }) => (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-40 flex items-center justify-center bg-white/80 dark:bg-background/80 backdrop-blur-sm pointer-events-none"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.1, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative h-16 w-48"
                >
                    <Image
                        src="/logo.png"
                        alt="Loading..."
                        fill
                        className="object-contain dark:brightness-0 dark:invert"
                    />
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
)

function MenuLanguageSelector() {
    const [hoveredLang, setHoveredLang] = useState<string | null>(null)
    const [autoLang, setAutoLang] = useState("RO")
    const displayLang = hoveredLang || autoLang

    useEffect(() => {
        if (hoveredLang !== null) return

        const interval = setInterval(() => {
            setAutoLang(prev => {
                const currentIndex = LANG_ORDER.indexOf(prev)
                const nextIndex = (currentIndex + 1) % LANG_ORDER.length
                return LANG_ORDER[nextIndex]
            })
        }, 3000)

        return () => clearInterval(interval)
    }, [hoveredLang])

    return (
        <div className="mt-24 mb-12 flex flex-col items-center justify-center text-center px-4">
            <div className="flex flex-col items-center gap-6 md:gap-8 bg-slate-50/50 dark:bg-white/5 p-6 md:p-12 rounded-[30px] md:rounded-[40px] border border-slate-100 dark:border-white/10 shadow-xl md:shadow-2xl shadow-slate-200/50 dark:shadow-none max-w-[90vw] md:maxw-3xl w-full">
                <div className="flex items-center justify-center text-primary opacity-80 mb-1 md:mb-2 relative min-h-[30px] md:min-h-[36px] overflow-hidden w-full">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={displayLang}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute text-lg md:text-xl font-serif italic tracking-wider flex items-center justify-center w-full"
                        >
                            {TITLE_TRANSLATIONS[displayLang] || "FULL MENU"}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                    {[
                        { code: 'RO', flag: '🇷🇴', href: '/meniu/complet/ro', label: 'Română' },
                        { code: 'EN', flag: '🇬🇧', href: '/meniu/complet/en', label: 'English' },
                        { code: 'DE', flag: '🇩🇪', href: '/meniu/complet/de', label: 'Deutsch' },
                        { code: 'FR', flag: '🇫🇷', href: '/meniu/complet/fr', label: 'Français' },
                        { code: 'ES', flag: '🇪🇸', href: '/meniu/complet/es', label: 'Español' },
                        { code: 'IT', flag: '🇮🇹', href: '/meniu/complet/it', label: 'Italiano' },
                        { code: 'HU', flag: '🇭🇺', href: '/meniu/complet/hu', label: 'Magyar' },
                    ].map((lang) => (
                        <a
                            key={lang.code}
                            href={lang.href}
                            
                            onMouseEnter={() => setHoveredLang(lang.code)}
                            onMouseLeave={() => setHoveredLang(null)}
                            className="group flex flex-col items-center gap-2 md:gap-3 transition-all duration-300"
                        >
                            <div className="relative flex items-center justify-center w-[46px] h-[46px] md:w-16 md:h-16 rounded-full bg-white dark:bg-slate-800 shadow-sm md:shadow-md group-hover:shadow-xl group-hover:-translate-y-1.5 transition-all duration-500 border border-slate-100 dark:border-white/5">
                                <span className={cn(
                                    "text-2xl md:text-3xl filter transition-all duration-500 group-hover:scale-110",
                                    displayLang === lang.code ? "saturate-[1.2] scale-105" : "saturate-[0.5] group-hover:saturate-[1]"
                                )}>
                                    {lang.flag}
                                </span>
                            </div>
                            <span className={cn(
                                "text-[10px] md:text-[11px] font-bold tracking-[0.15em] md:tracking-[0.2em] transition-colors uppercase relative pb-1",
                                displayLang === lang.code ? "text-primary dark:text-white" : "text-slate-400 group-hover:text-primary dark:group-hover:text-white"
                            )}>
                                {lang.code}
                                <span className={cn(
                                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary dark:bg-white transition-all duration-300 rounded-full",
                                    displayLang === lang.code ? "w-full opacity-100" : "w-0 opacity-0"
                                )} />
                            </span>
                        </a>
                    ))}
                </div>

                <div className="mt-2 md:mt-4 pt-6 md:pt-8 border-t border-slate-200 dark:border-white/10 w-full px-2 overflow-hidden relative min-h-[50px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={displayLang}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute text-xs md:text-sm font-medium text-slate-500 dark:text-white italic"
                        >
                            {TRANSLATIONS[displayLang] || MENU_SHARED_TEXT.languageSelect}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export function MenuContent() {
    const [activeTab, setActiveTab] = useState("starters")
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const touchStartRef = React.useRef<number | null>(null)
    const touchEndRef = React.useRef<number | null>(null)
    const isDraggingRef = React.useRef(false)
    const navRef = React.useRef<HTMLDivElement>(null)

    const scrollTimeout = React.useRef<NodeJS.Timeout | null>(null)
    const activeTabRef = React.useRef(activeTab)

    useEffect(() => {
        activeTabRef.current = activeTab
    }, [activeTab])

    const transitionTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)
    const transitionEndTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    const checkScroll = () => {
        if (!navRef.current) return

        const container = navRef.current
        const { scrollLeft, scrollWidth, clientWidth } = container

        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth)
    }

    const handleTabChange = (newTabId: string) => {
        if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
        if (transitionEndTimeoutRef.current) clearTimeout(transitionEndTimeoutRef.current)

        setIsTransitioning(true)

        transitionTimeoutRef.current = setTimeout(() => {
            setActiveTab(newTabId)

            transitionEndTimeoutRef.current = setTimeout(() => {
                setIsTransitioning(false)
            }, 400)

        }, 300)
    }

    const minSwipeDistance = 50

    const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        touchEndRef.current = null
        touchStartRef.current = 'touches' in e ? e.targetTouches[0].clientX : e.clientX
        isDraggingRef.current = 'touches' in e ? false : true
    }

    const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        if ('touches' in e) {
            touchEndRef.current = e.targetTouches[0].clientX
        } else if (isDraggingRef.current) {
            touchEndRef.current = e.clientX
        }
    }

    const onTouchEndHandler = () => {
        if (!touchStartRef.current || !touchEndRef.current) return
        const distance = touchStartRef.current - touchEndRef.current
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe || isRightSwipe) {
            const currentIndex = MENU_CATEGORIES.findIndex(c => c.id === activeTabRef.current)
            if (currentIndex === -1) return

            let targetIndex = currentIndex
            if (isLeftSwipe) {
                targetIndex = (currentIndex + 1) % MENU_CATEGORIES.length
            } else if (isRightSwipe) {
                targetIndex = (currentIndex - 1 + MENU_CATEGORIES.length) % MENU_CATEGORIES.length
            }

            const newTabId = MENU_CATEGORIES[targetIndex].id
            handleTabChange(newTabId)

            setTimeout(() => {
                const activeBtn = navRef.current?.querySelector(`[data-category-id="${newTabId}"]`)
                if (activeBtn) {
                    activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                }
            }, 50)
        }

        isDraggingRef.current = false
    }

    const onMouseLeave = () => {
        if (isDraggingRef.current) {
            onTouchEndHandler()
        }
    }

    useEffect(() => {
        checkScroll()
        window.addEventListener("resize", checkScroll, { passive: true })
        return () => {
            window.removeEventListener("resize", checkScroll)
            if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
            if (transitionEndTimeoutRef.current) clearTimeout(transitionEndTimeoutRef.current)
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
        }
    }, [])

    useEffect(() => {
        const hash = window.location.hash.replace("#", "")
        if (hash && MENU_CATEGORIES.some(c => c.id === hash)) {
            setActiveTab(hash)
            setTimeout(() => {
                const activeBtn = navRef.current?.querySelector(`[data-category-id="${hash}"]`)
                if (activeBtn) {
                    activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                }
            }, 500)
        }
    }, [])

    const activeCategory = MENU_CATEGORIES.find(c => c.id === activeTab) || MENU_CATEGORIES[0]

    return (
        <div className="w-full">
            {/* Top Section: Text and Category Navigation */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8 border-b border-gray-200 dark:border-white/20 mb-16">

                {/* Left: Descriptive Text & Social Share */}
                <div className="max-w-[480px] w-full self-start xl:self-end pb-8">
                    <h3 className="text-[25px] md:text-[28px] font-serif text-foreground dark:text-white leading-[1.3] mb-5">
                        {MENU_SHARED_TEXT.intro}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[13px] text-gray-500 font-medium">
                        <span className="mr-1">{MENU_SHARED_TEXT.shareOn}</span>
                        <a href="#" className="hover:text-foreground dark:hover:text-white transition-colors border-b border-gray-300 pb-[1px]">Facebook</a>
                        <span className="text-gray-300 mx-0.5">/</span>
                        <a href="#" className="hover:text-foreground dark:hover:text-white transition-colors border-b border-gray-300 pb-[1px]">Twitter</a>
                        <span className="text-gray-300 mx-0.5">/</span>
                        <a href="#" className="hover:text-foreground dark:hover:text-white transition-colors border-b border-gray-300 pb-[1px]">Pinterest</a>
                    </div>
                </div>

                {/* Right: Category Navigation */}
                <div className="relative w-full xl:w-auto flex items-center justify-end">
                    {/* Left Scroll Indicator */}
                    <div
                        className={cn(
                            "absolute left-0 top-0 bottom-0 w-10 z-10 flex items-center justify-start pointer-events-none xl:hidden transition-opacity duration-300 bg-gradient-to-r from-white dark:from-background to-transparent",
                            canScrollLeft ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <ChevronLeft className="h-6 w-6 text-slate-400 dark:text-slate-500" />
                    </div>

                    <nav
                        id="menu-categories-nav"
                        ref={navRef}
                        onScroll={checkScroll}
                        className="flex items-center justify-start xl:justify-end gap-x-6 md:gap-x-5 lg:gap-x-6 w-full xl:w-auto -mb-[1px] overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0 relative snap-x snap-mandatory scroll-smooth px-[10%] xl:px-0 scroll-p-0"
                    >
                        {MENU_CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                data-category-id={category.id}
                                onClick={(e) => {
                                    handleTabChange(category.id);
                                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                                }}
                                className={cn(
                                    "text-[17px] md:text-[16px] lg:text-[15px] transition-all relative pb-3 whitespace-nowrap flex-shrink-0 lg:flex-shrink-0 snap-center snap-always",
                                    activeTab === category.id
                                        ? "text-foreground dark:text-white font-medium border-b-[3px] border-foreground dark:border-white"
                                        : "text-slate-400 dark:text-slate-500 font-normal hover:text-slate-600 dark:hover:text-slate-300 border-b-[3px] border-transparent transition-colors"
                                )}
                            >
                                {category.label}
                            </button>
                        ))}
                    </nav>

                    {/* Right Scroll Indicator */}
                    <div
                        className={cn(
                            "absolute right-0 top-0 bottom-0 w-10 z-10 flex items-center justify-end pointer-events-none xl:hidden transition-opacity duration-300 bg-gradient-to-l from-white dark:from-background to-transparent",
                            canScrollRight ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <ChevronRight className="h-6 w-6 text-slate-400 dark:text-slate-500" />
                    </div>
                </div>
            </div>

            <div
                className="relative min-h-[800px] md:min-h-[600px] select-none"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEndHandler}
                onMouseDown={onTouchStart}
                onMouseMove={onTouchMove}
                onMouseUp={onTouchEndHandler}
                onMouseLeave={onMouseLeave}
            >
                <LogoTransition isVisible={isTransitioning} />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className={activeTab === 'bauturi' ? "flex flex-col gap-16 lg:gap-24" : activeTab === 'vinuri' ? "block" : "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"}
                    >
                        {activeTab === 'bauturi' ? (
                            /* New Synced Layout for Drinks */
                            MENU_DATA[activeTab]?.map((group, groupIdx) => (
                                <div key={groupIdx} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-stretch border-b border-gray-100 dark:border-white/10 pb-16 lg:pb-24 last:border-0 last:pb-0 relative">
                                    {/* Left Column: List of Drinks */}
                                    <div className="space-y-8 lg:col-span-2">
                                        <h3 className="text-[26px] md:text-[32px] font-serif font-medium text-primary border-b border-primary/20 pb-4">
                                            {group.section}
                                        </h3>
                                        <div className="space-y-8">
                                            {group.items.map((item, idx) => (
                                                <div key={idx} className="flex flex-col gap-2">
                                                    <div className="flex justify-between items-end border-b-[0.5px] border-gray-200 dark:border-white/20 pb-1.5 w-full">
                                                        <h3 className="text-xl font-medium text-foreground dark:text-white leading-tight pr-4">
                                                            {item.name}
                                                        </h3>
                                                        {item.price && (
                                                            <span className="text-lg font-medium text-foreground dark:text-white whitespace-nowrap shrink-0">
                                                                {item.price}
                                                            </span>
                                                        )}
                                                    </div>
                                                    {item.description && (
                                                        <p className="text-[17px] italic text-gray-400 dark:text-white/40 font-serif">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Column: Sticky Category Image */}
                                    <div className="hidden lg:block relative lg:col-span-1">
                                        <div className="sticky top-32 w-full mt-2">
                                            <div className="relative aspect-[4/3] xl:aspect-[3/2] max-h-[500px] w-full rounded-md overflow-hidden shadow-md shadow-black/10 bg-slate-100 dark:bg-white/5">
                                                {(group as any).image ? (
                                                    <Image
                                                        src={(group as any).image}
                                                        alt={group.section}
                                                        fill
                                                        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                                        priority={true}
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="text-slate-400 font-serif italic">Imagine indisponibilă</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : activeTab === 'vinuri' ? (
                            /* Single Sticky Image Layout for Vinuri */
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-stretch">
                                {/* Left Column: List of Wines */}
                                <div className="space-y-16 lg:col-span-2 pb-16">
                                    {MENU_DATA[activeTab]?.map((group, groupIdx) => (
                                        <div key={groupIdx} className="space-y-8 mt-2">
                                            <h3 className="text-[26px] md:text-[32px] font-serif font-medium text-primary border-b border-primary/20 pb-4">
                                                {group.section}
                                            </h3>
                                            <div className="space-y-8">
                                                {group.items.map((item, idx) => (
                                                    <div key={idx} className="flex flex-col gap-2">
                                                        <div className="flex justify-between items-end border-b-[0.5px] border-gray-200 dark:border-white/20 pb-1.5 w-full">
                                                            <h3 className="text-xl font-medium text-foreground dark:text-white leading-tight pr-4">
                                                                {item.name}
                                                            </h3>
                                                            {item.price && (
                                                                <span className="text-lg font-medium text-foreground dark:text-white whitespace-nowrap shrink-0">
                                                                    {item.price}
                                                                </span>
                                                            )}
                                                        </div>
                                                        {item.description && (
                                                            <p className="text-[17px] italic text-gray-400 dark:text-white/40 font-serif">
                                                                {item.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Right Column: Single Sticky Image for Vinuri */}
                                <div className="hidden lg:block relative lg:col-span-1">
                                    <div className="sticky top-32 w-full mt-2">
                                        <div className="relative aspect-[4/3] xl:aspect-[3/2] max-h-[500px] w-full rounded-md overflow-hidden shadow-md shadow-black/10 bg-slate-100 dark:bg-white/5">
                                            <Image
                                                src={activeCategory.image}
                                                alt={activeCategory.title}
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                                                sizes="(max-width: 1024px) 100vw, 33vw"
                                                priority={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Classic Layout for Food */
                            <>
                                {/* Left Column: Menu Items */}
                                <div>
                                    <div className="space-y-16">
                                        {MENU_DATA[activeTab]?.map((group, groupIdx) => (
                                            <div key={groupIdx} className="space-y-8">
                                                <h3 className="text-[26px] font-serif font-medium text-primary border-b border-primary/20 pb-2">
                                                    {group.section}
                                                </h3>
                                                <div className="space-y-10">
                                                    {group.items.map((item, idx) => (
                                                        <div key={idx} className="flex flex-col gap-2">
                                                            <div className="flex justify-between items-end border-b-[0.5px] border-gray-200 dark:border-white/20 pb-1.5 w-full">
                                                                <h3 className="text-xl font-medium text-foreground dark:text-white leading-tight pr-4">
                                                                    {item.name}
                                                                </h3>
                                                                {item.price && (
                                                                    <span className="text-lg font-medium text-foreground dark:text-white whitespace-nowrap shrink-0">
                                                                        {item.price}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {item.description && (
                                                                <p className="text-[17px] italic text-gray-400 dark:text-white/40 font-serif">
                                                                    {item.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column: Category Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative aspect-[4/3] lg:aspect-[3/2] w-full rounded-sm overflow-hidden shadow-sm shadow-black/5"
                                >
                                    <Image
                                        src={activeCategory.image}
                                        alt={activeCategory.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority={true}
                                    />
                                </motion.div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Complete Menu CTA with Refined Flag Layout */}
            <MenuLanguageSelector />
        </div>
    )
}

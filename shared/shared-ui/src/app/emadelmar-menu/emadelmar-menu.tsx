"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { MENU_ITEMS, SITE_CONFIG } from "@/lib/constants"

export function EmadelmarMenu() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll() // initial check
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300 will-change-transform",
                isScrolled
                    ? "bg-white/95 dark:bg-background/95 backdrop-blur-md shadow-sm border-b text-foreground dark:text-foreground"
                    : "bg-transparent border-b border-transparent text-white dark:text-white"
            )}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-12 w-48 transition-transform hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt={SITE_CONFIG.name}
                            fill
                            className={cn(
                                "object-contain transition-all duration-300",
                                !isScrolled ? "brightness-0 invert" : "dark:brightness-0 dark:invert"
                            )}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {MENU_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-[13px] font-medium uppercase tracking-[0.15em] transition-colors pb-0.5",
                                isScrolled
                                    ? "text-foreground dark:text-white/90 border-b border-foreground/40 dark:border-white/30 hover:text-primary hover:border-primary"
                                    : "text-white/90 border-b border-white/40 hover:text-white hover:border-white"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <ModeToggle className={cn(!isScrolled ? "text-white" : "text-foreground dark:text-white")} />
                </nav>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-4 md:hidden">
                    <ModeToggle className={cn(!isScrolled ? "text-white" : "text-foreground dark:text-white")} />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={cn("md:hidden", !isScrolled ? "text-white" : "text-foreground dark:text-white")}>
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                            <div className="flex flex-col gap-4 mt-6">
                                <Link href="/" className="relative h-12 w-40 mx-auto" onClick={() => setIsOpen(false)}>
                                    <Image
                                        src="/logo.png"
                                        alt={SITE_CONFIG.name}
                                        fill
                                        className="object-contain dark:brightness-0 dark:invert"
                                    />
                                </Link>
                                <nav className="flex flex-col items-center gap-4">
                                    {MENU_ITEMS.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-base font-medium uppercase tracking-wider text-foreground dark:text-white/80 hover:text-primary transition-colors py-1"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}

                                    <div className="mt-1 w-full flex flex-col items-center gap-4">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="w-full max-w-[260px] whitespace-normal text-center h-auto min-h-[50px] py-2.5 px-2 text-[11px] sm:text-xs leading-tight mx-auto break-words"
                                        >
                                            <Link
                                                
                                                href="/contact#rezervari"
                                                onClick={() => setIsOpen(false)}
                                                className="flex flex-col items-center justify-center"
                                            >
                                                <span>REZERVĂRI</span>
                                            </Link>
                                        </Button>

                                        <div className="flex flex-col items-center text-center text-[10px] tracking-[0.2em] uppercase text-muted-foreground/80 font-medium space-y-1 pb-6">
                                            <span className="text-primary/70">Program Restaurant</span>
                                            <div className="flex flex-col gap-0.5">
                                                <span>{SITE_CONFIG.displayHours.weekdays}</span>
                                                <span className="text-red-600 dark:text-red-400 font-bold">{SITE_CONFIG.displayHours.sunday}</span>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div >
            </div >
        </header >
    )
}

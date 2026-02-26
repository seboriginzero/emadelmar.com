import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Heart } from "lucide-react"

import { SITE_CONFIG, MENU_ITEMS } from "@/lib/constants"

export function Footer() {
    return (
        <footer className="bg-background relative z-10 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Brand & Address */}
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <Link href="/" className="transition-opacity hover:opacity-80">
                            <Image
                                src="/logo.png"
                                alt={SITE_CONFIG.name}
                                width={180}
                                height={60}
                                className="h-auto w-auto max-h-16 object-contain dark:brightness-0 dark:invert"
                            />
                        </Link>
                        <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                            {SITE_CONFIG.description}
                        </p>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground mt-2">
                            <p>{SITE_CONFIG.contact.address}</p>
                            {SITE_CONFIG.contact.phone.map((phone) => (
                                <a key={phone} href={`tel:${phone.replace(/\\s/g, "")}`} className="hover:text-primary transition-colors">
                                    {phone}
                                </a>
                            ))}
                            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-primary transition-colors">
                                {SITE_CONFIG.contact.email}
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-foreground/80">Navigare</h4>
                        <nav className="flex flex-col gap-2">
                            {MENU_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Socials & Hours */}
                    <div className="flex flex-col gap-4 items-center md:items-start">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-foreground/80">Social Media</h4>
                        <div className="flex gap-4">
                            <Link href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link prefetch={false} href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>

                        <div className="mt-6 flex flex-col gap-2 items-center md:items-start">
                            {/* Tripadvisor Certificate */}
                            <Link prefetch={false} href={SITE_CONFIG.socials.tripadvisor} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                                <img src="/images/tripadvisor2019certificate.png" alt="Tripadvisor Certificate 2019" className="w-36 rounded-sm shadow-sm" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p suppressHydrationWarning>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Toate drepturile rezervate.</p>
                    <p className="text-[10px] text-muted-foreground/60 flex items-center justify-center md:justify-end gap-1">
                        reBuilt with <Heart className="w-3 h-3 animate-rainbow" strokeWidth={3} /> by <a href="https://originzero.art" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors font-medium">originZero.Art</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

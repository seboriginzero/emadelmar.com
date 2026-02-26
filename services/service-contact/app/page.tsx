import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { SITE_CONFIG } from "@/lib/constants"
import { ReservationForm } from "@/components/reservation-form"

export const metadata = {
    title: "Contact",
    description: "Informații de contact și rezervări pentru Ema del Mar.",
}

// ContactPage changed to a Server Component per instruction "Avoid unnecessary client-side JS"
export default function ContactPage() {
    return (
        <div className="flex flex-col w-full font-serif">
            <PageHeader
                title="Contact și Rezervări"
                subtitle="Suntem aici pentru tine"
                image="/images/others/emadelmar/restaurant/interior001.jpg"
            />

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    {/* Contact Info - Centered */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div>
                            <h2 className="text-4xl font-serif font-bold italic mb-12">Informații de Contact</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="flex flex-col items-center p-6 rounded-2xl bg-muted/30 border border-border/50">
                                    <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Adresa</h3>
                                    <p className="text-muted-foreground">{SITE_CONFIG.contact.address}</p>
                                </div>

                                <div className="flex flex-col items-center p-6 rounded-2xl bg-muted/30 border border-border/50">
                                    <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Telefon</h3>
                                    {SITE_CONFIG.contact.phone.map(phone => (
                                        <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">{phone}</a>
                                    ))}
                                </div>

                                <div className="flex flex-col items-center p-6 rounded-2xl bg-muted/30 border border-border/50">
                                    <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Email</h3>
                                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">{SITE_CONFIG.contact.email}</a>
                                </div>

                                <div className="flex flex-col items-center p-6 rounded-2xl bg-muted/30 border border-border/50">
                                    <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Program</h3>
                                    <div className="text-muted-foreground">
                                        <p>{SITE_CONFIG.displayHours.weekdays}</p>
                                        <p className="text-red-400">{SITE_CONFIG.displayHours.sunday}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map - Centered/Wide and Styled */}
                    <div id="harta" className="max-w-6xl mx-auto px-0 md:px-4 scroll-mt-24">
                        <div className="relative w-full h-[600px] bg-[#f8f9fa] rounded-3xl overflow-hidden shadow-2xl border border-border/50 group/map">
                            {/* High-Fidelity Pinpoint Overlay */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex flex-col items-center scale-[0.35] transform origin-center">
                                {/* Ema Light Dot Marker */}
                                <div className="relative mb-1.5">
                                    <div className="h-4 w-4 bg-white rounded-full shadow-lg flex items-center justify-center border border-primary/20">
                                        <div className="h-2.5 w-2.5 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                                            <div className="h-1 w-1 bg-white rounded-full" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-x-0 -bottom-0.5 h-2 w-2 mx-auto bg-primary/40 blur-sm rounded-full" />
                                </div>

                                {/* Ema Light Bubble Label */}
                                <div className="px-2 py-1 bg-primary rounded-full shadow-2xl border border-white/20 flex items-center justify-center min-w-[56px]">
                                    <Image
                                        src="/logo.png"
                                        alt={SITE_CONFIG.name}
                                        width={42}
                                        height={14}
                                        className="h-auto w-auto object-contain brightness-0 invert"
                                    />
                                </div>
                            </div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d690.6944089085144!2d21.315141!3d46.175082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474598ff82c94a9d%3A0xdd45ab88460d1fd7!2sRestaurant%20Ema%20Del%20Mar!5e0!3m2!1sro!2sro!4v1772060803211!5m2!1sro!2sro"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    filter: 'grayscale(1) contrast(1.1) brightness(1.1)',
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="z-0 transition-transform duration-700 ease-in-out hover:scale-[1.02]"
                            ></iframe>

                            {/* Subtle Overlays */}
                            <div className="absolute inset-0 bg-blue-900/5 dark:bg-primary/20 pointer-events-none mix-blend-overlay dark:mix-blend-color z-10 transition-colors duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none z-15" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Private Events Banner Section */}
            <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/others/big/mese_private.jpg"
                        alt={SITE_CONFIG.banner.title}
                        fill
                        className="object-cover brightness-[0.5]"
                        loading="lazy"
                    />
                </div>

                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto text-white">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 italic tracking-wide">
                        {SITE_CONFIG.banner.title}
                    </h2>
                    <p className="text-lg text-white/90 font-sans max-w-xl mx-auto drop-shadow-md">
                        {SITE_CONFIG.banner.description}
                    </p>
                </div>
            </section>

            {/* Reservation Form Section */}
            <section id="rezervari" className="py-24 bg-muted/30 scroll-mt-20">
                <div className="container px-4 mx-auto">
                    <ReservationForm />
                </div>
            </section>

            {/* Premium Image Showcase Section */}
            <section className="py-12 bg-background">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[600px]">
                        <div className="md:col-span-8 relative rounded-2xl overflow-hidden h-[400px] md:h-full group">
                            <Image
                                src="/images/rezervari/gallery-1920x1080.jpg"
                                alt="Atmosferă Restaurant"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 66vw"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        <div className="md:col-span-4 flex flex-col gap-4 md:gap-6 h-[400px] md:h-full">
                            <div className="relative flex-1 rounded-2xl overflow-hidden group">
                                <Image
                                    src="/images/rezervari/mic_MG_3497.jpg"
                                    alt="Detalii Culinare"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <div className="relative flex-1 rounded-2xl overflow-hidden group">
                                <Image
                                    src="/images/rezervari/rezervari.jpg"
                                    alt="Ambianță Ema del Mar"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

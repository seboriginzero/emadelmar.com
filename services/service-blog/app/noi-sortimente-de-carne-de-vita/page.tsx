import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
    title: "Noi Sortimente De Carne De Vita - Ema del Mar",
    description: "Pentru cunoscatorii de carne de vita autentica, Ema del Mar a pregatit 3 noutati in meniu: Wagyu Beef Tenderloin, Wagyu Short Loin si Tomahawk Wagyu Steak.",
}

export default function BlogArticlePage() {
    return (
        <article className="flex flex-col min-h-[100vh] pt-24">
            {/* Hero Section: Title left, Image right */}
            <section className="container mx-auto px-4 max-w-6xl py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Title & Meta */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-foreground">
                            Noi Sortimente De Carne De Vita
                        </h1>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                        <Image
                            src="/images/blog/noi-sortimente-carne-vita.jpg"
                            alt="Noi Sortimente De Carne De Vita"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="container mx-auto px-4 max-w-3xl pb-20">
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                    <p className="text-xl font-medium text-foreground">
                        Pentru cunoscatorii de carne de vita autentica, Ema del Mar a pregatit 3 noutati in meniu:
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-baseline justify-between border-b border-border pb-4">
                            <div>
                                <h3 className="text-xl font-serif font-medium text-foreground">Wagyu Beef Tenderloin</h3>
                                <p className="text-sm text-muted-foreground mt-1">250 g</p>
                            </div>
                            <span className="text-lg font-semibold text-foreground whitespace-nowrap ml-4">175 lei</span>
                        </div>

                        <div className="flex items-baseline justify-between border-b border-border pb-4">
                            <div>
                                <h3 className="text-xl font-serif font-medium text-foreground">Wagyu Short Loin Cut of Beef</h3>
                                <p className="text-sm text-muted-foreground mt-1">100 g</p>
                            </div>
                            <span className="text-lg font-semibold text-foreground whitespace-nowrap ml-4">39 lei</span>
                        </div>

                        <div className="flex items-baseline justify-between border-b border-border pb-4">
                            <div>
                                <h3 className="text-xl font-serif font-medium text-foreground">Tomahawk Wagyu Steak</h3>
                                <p className="text-sm text-muted-foreground mt-1">100 g</p>
                            </div>
                            <span className="text-lg font-semibold text-foreground whitespace-nowrap ml-4">42 lei</span>
                        </div>
                    </div>
                </div>

                {/* Back to Blog */}
                <div className="mt-16 pt-8 border-t border-border">
                    <a
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Înapoi la Blog
                    </a>
                </div>
            </section>
        </article>
    )
}

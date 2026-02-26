import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
    title: "Paella Cu Fructe De Mare - Ema del Mar",
    description: "Paella e o mancare tipic spaniola care se face cu orez. Locuitorii regiunii Valencia o considera drept simbolul lor.",
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
                            Paella Cu Fructe De Mare
                        </h1>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                        <Image
                            src="/images/blog/paella.jpg"
                            alt="Paella Cu Fructe De Mare"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="container mx-auto px-4 max-w-3xl pb-20">
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-xl font-medium text-foreground">
                        Paella cu fructe de mare Ema del Mar
                    </p>

                    <p>
                        Paella e o mancare tipic spaniola care se face cu orez. Locuitorii regiunii Valencia o considera drept simbolul lor.
                    </p>

                    <p>
                        Exista trei feluri principale de paella: paella valenciana, paella cu fructe de mare si paella mixta.
                    </p>

                    <p>
                        In secolul al XVIII-lea, la ocazii speciale, paella valenciana era gatita in aer liber. Carnea de tipar si fasolea neagra erau ingredientele principale. In urma unor schimbari sociale de la sfarsitul secolului al XIX-lea, a fost introdusa carnea de pui, rata, iepure si chiar si melcii.
                    </p>

                    <p>
                        Saracii, pentru ca nu aveau carne, foloseau doar melci si alte ingrediente: orez alb, carne (de pui, iepure), melci (optional), fasole neagra, anghinare, rosii, rozmarin proaspat, paprika dulce, sofran, usturoi, ulei de masline, sare, apa.
                    </p>

                    <p>
                        La paella cu fructe de mare, produsele pescaresti inlocuiesc legumele verzi si carnea. Paella mixta cuprinde si fructe de mare, si carne, si legume.
                    </p>

                    <h2 className="text-2xl font-serif font-medium text-foreground !mt-10">
                        Cum se gateste paella
                    </h2>

                    <p>
                        Conform traditiei valenciene, paella e gatita de catre barbati, la foc deschis, facut din crengi de portocal si pin. Fumul rezultat da o aroma deosebita preparatului. Tot potrivit traditiei, mesenii mananca paella direct din tigaia speciala, numita paellara.
                    </p>
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

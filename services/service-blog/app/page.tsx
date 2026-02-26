import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/layout/page-header"

const BLOG_POSTS = [
    {
        id: 1,
        title: "Fructele De Mare, Farmacia Din Adancuri",
        slug: "fructele-de-mare-farmacia-din-adancuri",
        excerpt: "Crabii, racii, creveții, homarii, stridiile, melcii nu sunt doar alimente exotice, ci si surse de mangan, vitamine si acizi Omega-3.",
        image: "/images/blog/seafood.jpeg",
    },
    {
        id: 2,
        title: "Noi Sortimente De Carne De Vita",
        slug: "noi-sortimente-de-carne-de-vita",
        excerpt: "Pentru cunoscatorii de carne de vita autentica, Ema del Mar a pregatit 3 noutati in meniu: Wagyu Beef Tenderloin, Wagyu Short Loin si Tomahawk Wagyu Steak.",
        image: "/images/blog/noi-sortimente-carne-vita.jpg",
    },
    {
        id: 3,
        title: "Paella Cu Fructe De Mare",
        slug: "paella-cu-fructe-de-mare",
        excerpt: "Paella e o mancare tipic spaniola care se face cu orez. Locuitorii regiunii Valencia o considera drept simbolul lor.",
        image: "/images/blog/paella.jpg",
    }
]

export const metadata = {
    title: "Blog - Ema del Mar",
    description: "Noutăți și articole despre preparatele noastre și stilul de viață mediteranean.",
}

export default function BlogPage() {
    return (
        <div className="flex flex-col w-full">
            <PageHeader
                title="Blog"
                subtitle="Noutăți și povești culinare"
                image="/images/acasa/04/006-ne-place-sa-scriem-pe-blog.jpg"
            />

            <section className="py-20 bg-background">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="flex flex-col gap-12">
                        {BLOG_POSTS.map((post) => (
                            <div key={post.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-border pb-12 last:border-0 hover:bg-muted/10 transition-colors p-4 -mx-4 rounded-xl">
                                {/* Image Column (Left) */}
                                <div className="lg:col-span-4 relative h-64 lg:h-56 w-full overflow-hidden rounded-sm shadow-sm">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Title & Meta Column */}
                                <div className="lg:col-span-3 flex flex-col gap-3">
                                    <h2 className="text-2xl font-serif font-medium text-foreground leading-tight">
                                        {post.title}
                                    </h2>
                                </div>

                                {/* Excerpt Column */}
                                <div className="lg:col-span-3">
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Action Column (Right) */}
                                <div className="lg:col-span-2 flex justify-start lg:justify-end">
                                    <a  href={`/blog/${post.slug}`} className="p-0 h-auto text-xs font-bold tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
                                        Citește mai mult
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

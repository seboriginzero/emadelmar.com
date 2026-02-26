import { PageHeader } from "@/components/layout/page-header"
import { MenuContent } from "@/components/menu-content"

export const metadata = {
    title: "Meniu - Ema del Mar",
    description: "Descoperă aromele rafinate ale bucătăriei noastre.",
}

export default function MeniuPage() {
    return (
        <div className="flex flex-col w-full bg-white dark:bg-background">
            <PageHeader
                title="Meniul Nostru"
                subtitle="Preparate selecte pentru gusturi rafinate"
                image="/images/seafood/animation/seafood-mix-platou.jpg"
            />

            <section className="py-24">
                <div className="container px-4 mx-auto max-w-7xl">
                    <MenuContent />
                </div>
            </section>
        </div>
    )
}

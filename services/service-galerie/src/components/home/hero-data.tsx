import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const LEFT_IMAGES = [
    "/images/seafood/animation/Paella-cu-fructe-de-mare-2.jpg",
    "/images/seafood/animation/homar-proaspat.jpg",
    "/images/steak/animation/steak001.jpg",
    "/images/steak/animation/bg-image-platou-vita2.jpg",
    "/images/seafood/animation/seafood-mix-platou.jpg",
    "/images/seafood/animation/Paella-cu-fructe-de-mare-2.jpg",
]

export const RIGHT_IMAGES = [
    "/images/steak/animation/steak-and-wine.jpg",
    "/images/seafood/animation/seafood-mix-platou.jpg",
    "/images/steak/animation/steak002.jpg",
    "/images/steak/animation/bg-image-platou-vita2.jpg",
    "/images/seafood/animation/seafood-mix-platou.jpg",
    "/images/seafood/animation/Paella-cu-fructe-de-mare-2.jpg",
]

export const CONTENT = [
    {
        headline: "Două lumi. O singură experiență.",
        subtext: ["Rafinamentul mării și forța focului se întâlnesc într-o armonie perfectă."],
        cta: (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-12">
                <Button asChild size="lg" className="w-full max-w-[280px] sm:max-w-none sm:w-auto whitespace-normal text-center h-auto min-h-[64px] py-4 px-4 sm:px-6 md:px-14 text-[13px] sm:text-sm leading-normal md:leading-none text-white hover:text-white/80">
                    <a  href="/contact#rezervari" className="flex flex-col items-center justify-center">
                        <span>REZERVĂRI</span>
                    </a>
                </Button>
                <Button asChild size="lg" className="w-full max-w-[280px] sm:max-w-none sm:w-auto text-white hover:text-white/80 text-[13px] sm:text-sm">
                    <a  href="/meniu">
                        Vezi Meniul
                    </a>
                </Button>
            </div>
        )
    },
    {
        headline: "Prospețime din adâncuri.",
        subtext: ["Fructe de mare atent selecționate, preparate cu finețe și respect pentru gustul autentic."],
        cta: (
            <div className="flex justify-center mt-12">
                <Button asChild size="lg" className="w-full max-w-[280px] sm:max-w-none sm:w-auto text-white hover:text-white/80 text-[13px] sm:text-sm">
                    <a  href="/contact#rezervari">
                        DESCOPERĂ <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
        )
    },
    {
        headline: "Perfecțiune gătită la foc viu.",
        subtext: ["Steak-uri maturate, suculente, cu textură și aromă desăvârșită."],
        cta: (
            <div className="flex justify-center mt-12">
                <Button asChild size="lg" className="w-full max-w-[280px] sm:max-w-none sm:w-auto text-white hover:text-white/80 text-[13px] sm:text-sm">
                    <a  href="/contact#rezervari">
                        DESCOPERĂ <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
        )
    },
    {
        headline: "Descoperă adevăratul gust al steak-ului de vită Argentina Black Angus și Wagyu.",
        subtext: ["Vita este mai mult decât un fel de mâncare în Argentina: este un mod de viață."],
        isFull: true,
        cta: (
            <div className="flex justify-center mt-12">
                <Button asChild size="lg" className="w-full max-w-[280px] sm:max-w-none sm:w-auto text-white hover:text-white/80 text-[13px] sm:text-sm">
                    <a  href="/contact#rezervari">
                        DESCOPERĂ <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
        )
    },
    {
        headline: "Platou Royal",
        subtext: ["Scampi, creveți, caracatiță, calamar, sepie, Saint Jaques, midii, vongole..."],
        isFull: true,
        cta: (
            <div className="flex justify-center mt-12">
                <Button asChild size="lg" className="w-full max-w-[280px] sm:max-w-none sm:w-auto text-white hover:text-white/80 text-[13px] sm:text-sm">
                    <a  href="/contact#rezervari">
                        DESCOPERĂ <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
        )
    },
    {
        headline: "Paella Valenciană originală.",
        subtext: ["Gătită după o rețetă spaniolă autentică. Simbolul regiunii Valencia, acum în farfuria ta."],
        isFull: true,
        cta: (
            <div className="flex justify-center mt-12">
                <Button asChild size="lg" className="w-full max-w-[280px] sm:max-w-none sm:w-auto text-white hover:text-white/80 text-[13px] sm:text-sm">
                    <a  href="/contact#rezervari">
                        DESCOPERĂ <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
        )
    }
]

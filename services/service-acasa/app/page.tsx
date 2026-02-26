import dynamic from "next/dynamic"
import { HeroSplit } from "@/components/home/hero-split"

const FeaturedDishes = dynamic(() => import("@/components/home/featured-dishes").then(mod => mod.FeaturedDishes), { loading: () => <div className="min-h-[50vh] w-full bg-background" /> })
const HomeAbout = dynamic(() => import("@/components/home/home-about").then(mod => mod.HomeAbout), { loading: () => <div className="min-h-[60vh] w-full bg-background" /> })
const HomeRecommendations = dynamic(() => import("@/components/home/home-recommendations").then(mod => mod.HomeRecommendations), { loading: () => <div className="min-h-[50vh] w-full bg-background" /> })
const HomeMasonryGallery = dynamic(() => import("@/components/home/home-masonry-gallery").then(mod => mod.HomeMasonryGallery), { loading: () => <div className="min-h-[80vh] w-full bg-background" /> })
const HomeClosing = dynamic(() => import("@/components/home/home-closing").then(mod => mod.HomeClosing), { loading: () => <div className="min-h-[40vh] w-full bg-background" /> })

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <HeroSplit />
      {/* 
        This div is pushed down by exactly the height of the viewport (100dvh).
        When the user scrolls down, this content will slide UP over the fixed Hero.
      */}
      <div className="relative z-10 bg-background pt-1 mt-[100dvh]">
        <HomeAbout />
        <FeaturedDishes />
        <HomeRecommendations />
        <HomeMasonryGallery />
        <HomeClosing />
      </div>
    </div>
  )
}

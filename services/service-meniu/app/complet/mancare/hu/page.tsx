import { FullMenu } from "@/components/full-menu"
import { MENU_CATEGORIES_HU, MENU_DATA_HU } from "@/lib/menu-data-hu"

export const metadata = {
    title: "Teljes Menü - Ema del Mar",
    description: "Az Ema del Mar teljes étlapja",
}

export default function FullMenuHUPage() {
    return (
        <FullMenu
            categories={MENU_CATEGORIES_HU}
            data={MENU_DATA_HU}
            allergyWarning="(amennyiben allergiás bizonyos összetevőkre, kérjük, rendelés előtt egyeztessen a pincérrel az allergénekről.)"
        />
    )
}

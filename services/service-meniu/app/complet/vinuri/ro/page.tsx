import { FullMenu } from "@/components/full-menu"
import { MENU_DATA } from "@/lib/constants"
import { formatNestedMenu } from "@/lib/menu-helpers"

export const metadata = {
    title: "Meniu Vinuri - Ema del Mar",
    description: "Meniul complet de vinuri Ema del Mar",
}

export default function FullMenuVinuriROPage() {
    // Wines are always sourced from constants.ts since there's no EN wine translation usually necessary
    const winesData = MENU_DATA["vinuri"];
    const { categories, flatData } = formatNestedMenu(winesData);

    return (
        <FullMenu
            categories={categories}
            data={flatData}
            allergyWarning=""
        />
    )
}

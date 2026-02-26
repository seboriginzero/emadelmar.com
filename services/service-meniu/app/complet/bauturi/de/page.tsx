import { FullMenu } from "@/components/full-menu"
import { MENU_DATA_EN } from "@/lib/menu-data"
import { formatNestedMenu } from "@/lib/menu-helpers"
import { MENU_DATA } from "@/lib/constants"

export const metadata = {
    title: "Meniu Băuturi - Ema del Mar",
    description: "Meniul complet de băuturi Ema del Mar",
}

export default function FullMenuBauturiDEPage() {
    // Fallback to RO from constants if language specific drinks don't exist
    const drinksData = MENU_DATA_EN["bauturi"] || MENU_DATA["bauturi"];
    const { categories, flatData } = formatNestedMenu(drinksData);

    return (
        <FullMenu
            categories={categories}
            data={flatData}
            allergyWarning=""
        />
    )
}

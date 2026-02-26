import { FullMenu } from "@/components/full-menu"
import { MENU_CATEGORIES_IT, MENU_DATA_IT } from "@/lib/menu-data-it"

export const metadata = {
    title: "Menu Completo - Ema del Mar",
    description: "Il menu completo Ema del Mar con prezzi e ingredienti",
}

export default function FullMenuITPage() {
    return (
        <FullMenu
            categories={MENU_CATEGORIES_IT}
            data={MENU_DATA_IT}
            allergyWarning="(se siete allergici a determinati ingredienti, prima di ordinare dal nostro menu, consultate la lista degli allergeni chiedendo al cameriere.)"
        />
    )
}

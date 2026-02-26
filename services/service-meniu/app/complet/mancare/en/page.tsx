import { FullMenu } from "@/components/full-menu"
import { MENU_CATEGORIES_EN, MENU_DATA_EN } from "@/lib/menu-data"

export const metadata = {
    title: "Full Menu - Ema del Mar",
    description: "Ema del Mar full menu with prices and ingredients",
}

export default function FullMenuENPage() {
    return (
        <FullMenu
            categories={MENU_CATEGORIES_EN}
            data={MENU_DATA_EN}
            allergyWarning="(If you are allergic to certain ingredients, before giving the order from our menu, please see the list of allergens through the waiter.)"
        />
    )
}

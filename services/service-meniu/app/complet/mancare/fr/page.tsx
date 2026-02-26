import { FullMenu } from "@/components/full-menu"
import { MENU_CATEGORIES_FR, MENU_DATA_FR } from "@/lib/menu-data-fr"

export const metadata = {
    title: "Menu Complet - Ema del Mar",
    description: "Le menu complet du restaurant Ema del Mar",
}

export default function FullMenuFRPage() {
    return (
        <FullMenu
            categories={MENU_CATEGORIES_FR}
            data={MENU_DATA_FR}
            allergyWarning="(si vous êtes allergique à certains ingrédients, veuillez consulter la liste des allergènes avec le serveur avant de commander dans notre menu.)"
        />
    )
}

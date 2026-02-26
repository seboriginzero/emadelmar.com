import { FullMenu } from "@/components/full-menu"
import { MENU_CATEGORIES_DE, MENU_DATA_DE } from "@/lib/menu-data-de"

export const metadata = {
    title: "Komplettes Menü - Ema del Mar",
    description: "Das komplette Menü von Ema del Mar mit Preisen und Zutaten",
}

export default function FullMenuDEPage() {
    return (
        <FullMenu
            categories={MENU_CATEGORIES_DE}
            data={MENU_DATA_DE}
            allergyWarning="(Falls Sie auf bestimmte Zutaten allergisch reagieren, konsultieren Sie bitte vor der Bestellung aus unserer Speisekarte die Allergenliste beim Kellner.)"
        />
    )
}

import { FullMenu } from "@/components/full-menu"
import { MENU_CATEGORIES_RO, MENU_DATA_RO } from "@/lib/menu-data"

export const metadata = {
    title: "Meniu Complet - Ema del Mar",
    description: "Meniul complet Ema del Mar cu prețuri și ingrediente",
}

export default function FullMenuROPage() {
    return (
        <FullMenu
            categories={MENU_CATEGORIES_RO}
            data={MENU_DATA_RO}
            allergyWarning="(în cazul în care sunteți alergic la anumite ingrediente, înainte de a comanda din meniul nostru consultați lista cu alergeni prin ospătar.)"
        />
    )
}

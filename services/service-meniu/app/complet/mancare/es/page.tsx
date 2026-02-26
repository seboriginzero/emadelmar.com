import { FullMenu } from "@/components/full-menu"
import { MENU_CATEGORIES_ES, MENU_DATA_ES } from "@/lib/menu-data-es"

export const metadata = {
    title: "Menú Completo - Ema del Mar",
    description: "El menú completo de Ema del Mar con precios e ingredientes",
}

export default function FullMenuESPage() {
    return (
        <FullMenu
            categories={MENU_CATEGORIES_ES}
            data={MENU_DATA_ES}
            allergyWarning="(si es alérgico a ciertos ingredientes, antes de realizar el pedido de nuestro menú, consulte la lista de alérgenos con el camarero.)"
        />
    )
}

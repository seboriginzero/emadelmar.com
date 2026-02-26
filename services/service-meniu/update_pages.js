const fs = require('fs');
const path = require('path');

const langs = ['de', 'en', 'es', 'fr', 'hu', 'it', 'ro'];

// Update bauturi
langs.forEach(lang => {
    const uppLang = lang.toUpperCase();
    const isRoEn = lang === 'ro' || lang === 'en';
    const dataImport = isRoEn ? `MENU_DATA_${uppLang}` : `MENU_DATA_EN`;
    const importSource = isRoEn ? `"@/lib/menu-data"` : `"@/lib/menu-data"`; // Both from menu-data since translated don't have drinks

    const content = `import { FullMenu } from "@/components/full-menu"
import { ${dataImport} } from ${importSource}
import { formatNestedMenu } from "@/lib/menu-helpers"
import { MENU_DATA } from "@/lib/constants"

export const metadata = {
    title: "Meniu Băuturi - Ema del Mar",
    description: "Meniul complet de băuturi Ema del Mar",
}

export default function FullMenuBauturi${uppLang}Page() {
    // Fallback to RO from constants if language specific drinks don't exist
    const drinksData = ${isRoEn ? `${dataImport}["bauturi"]` : `MENU_DATA_EN["bauturi"]`} || MENU_DATA["bauturi"];
    const { categories, flatData } = formatNestedMenu(drinksData);

    return (
        <FullMenu
            categories={categories}
            data={flatData}
            allergyWarning=""
        />
    )
}
`;
    fs.writeFileSync(path.join(__dirname, `app/complet/bauturi/${lang}/page.tsx`), content);
});

// Update vinuri
langs.forEach(lang => {
    const uppLang = lang.toUpperCase();

    const content = `import { FullMenu } from "@/components/full-menu"
import { MENU_DATA } from "@/lib/constants"
import { formatNestedMenu } from "@/lib/menu-helpers"

export const metadata = {
    title: "Meniu Vinuri - Ema del Mar",
    description: "Meniul complet de vinuri Ema del Mar",
}

export default function FullMenuVinuri${uppLang}Page() {
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
`;
    fs.writeFileSync(path.join(__dirname, `app/complet/vinuri/${lang}/page.tsx`), content);
});

console.log("Pages updated.");

import { MenuItem, DrinkSection, MenuCategory } from "./menu-data";

export const MENU_CATEGORIES_HU: MenuCategory[] = [
    { id: "entrees", label: "Előételek", title: "Előételek" },
    { id: "salads", label: "Saláták", title: "Saláták" },
    { id: "pasta", label: "Tészta és Rizottó", title: "Tészta és Rizottó" },
    { id: "soups", label: "Krémlevesek", title: "Krémlevesek" },
    { id: "paella", label: "Paëlla", title: "Ema Paëlla" },
    { id: "fish", label: "Friss Halfilé", title: "Friss Halfilé" },
    { id: "seafood", label: "Tenger Gyümölcsei", title: "Tenger Gyümölcsei" },
    { id: "beef", label: "Marha Grill", title: "Marha Grill" },
    { id: "chicken-pig-lamb", label: "Csirke, Sertés és Bárány", title: "Csirke, Sertés és Bárány" },
    { id: "garnish", label: "Köretek", title: "Köretek" },
    { id: "dessert", label: "Desszert", title: "Desszert" },
]

export const MENU_DATA_HU: Record<string, (MenuItem | DrinkSection)[]> = {
    "beef": [
        { name: "WAGYU Tomahawk Steak", price: "143 lei / 100 g", description: "" },
        { name: "WAGYU Rib Eye Roll Steak (Rostélyos)", price: "143 lei / 100 g", description: "" },
        { name: "WAGYU Bélszín Steak", price: "220 lei / 100 g", description: "" },
        { name: "WAGYU Hátszín Steak", price: "147 lei / 100 g", description: "" },
        { name: "Black Angus USDA Bélszín Steak", price: "275 lei / 250 g", description: "" },
        { name: "Black Angus USDA Rib Eye Roll Steak", price: "66 lei / 100 g", description: "" },
        { name: "Black Angus USDA Rib Steak (Bordás rostélyos)", price: "55 lei / 100 g", description: "" },
        { name: "Black Angus USDA Tomahawk Steak Reserve", price: "66 lei / 100 g", description: "" },
        { name: "Black Angus USDA Marha Tagliata", price: "225 lei / 250 g", description: "steak, rukkola, koktélparadicsom, parmezán, fokhagyma" }
    ],
    "chicken-pig-lamb": [
        { name: "Roston sült csirkemell", price: "70 lei / 300 g", description: "csirkemell, édes-csípős chiliszósz, tepsis burgonya" },
        { name: "Sertésborda (oldalas)", price: "27 lei / 100 g", description: "" },
        { name: "Bárányborda", price: "215 lei / 400 g", description: "bárányborda 8 db, tepsis burgonya" }
    ],
    "garnish": [
        { name: "Tepsis burgonya / Zöldsaláta", price: "18 lei", description: "" },
        { name: "Grillezett zöldségek", price: "21 lei", description: "" },
        { name: "Spárga", price: "40 lei", description: "" }
    ],
    "fish": [
        { name: "Lazacfilé", price: "72 lei / 250 g", description: "" },
        { name: "Tonhal", price: "110 lei / 250 g", description: "" },
        { name: "Aranydurbincs (Dorádó) / 100 g", price: "25 lei / 100 g", description: "" },
        { name: "Sügér / (800-1000 g)", price: "35 lei / 100 g", description: "" },
        { name: "Homár", price: "Preț variabil", description: "Kérjük, ezt a halfajtát 48 órával előre rendelje meg, vagy a napi kínálat szerint alakul. Az ár a beszerzési ártól függően változhat." }
    ],
    "seafood": [
        { name: "Királyi tál - 2 személyre", price: "475 lei / 1400 g", description: "scampi, garnéla, polip, tintahal, szépia, Szent Jakab kagyló, feketekagyló, vongole kagyló" },
        { name: "Mediterrán tál", price: "345 lei / 1200 g", description: "garnéla, bébi tintahal, kagyló, vongole, langusztina farkak" },
        { name: "N°3 Osztriga", price: "88 lei / 300 g", description: "" },
        { name: "Marinara kagyló", price: "22 lei / 100 g", description: "" },
        { name: "Scampi", price: "66 lei / 100 g", description: "" },
        { name: "Tintahal (Calamari)", price: "55 lei / 100 g", description: "" },
        { name: "Polip", price: "113 lei / 100 g", description: "" },
        { name: "Szent Jakab kagyló", price: "75 lei / 100 g", description: "" },
        { name: "Garnélarák", price: "70 lei / 100 g", description: "" },
        { name: "Szépia", price: "60 lei / 100 g", description: "" }
    ],
    "paella": [
        { name: "Tenger gyümölcsei Paëlla - 2 személyre", price: "210 lei / 800 g", description: "tintahal, Szent Jakab kagyló, garnéla, kékkagyló, polip, chorizo, rizs. Kérjük, 25 perccel előre rendelje meg." },
        { name: "Paëlla a la «Madrilena» - 2 személyre", price: "185 lei / 800 g", description: "csirkehús, sertéshús, chorizo, gomba, cukkini, padlizsán, Serrano sonka, rizs. Kérjük, 25 perccel előre rendelje meg." },
        { name: "Vegetáriánus - 2 személyre", price: "145 lei / 800 g", description: "paprika, paradicsom, fokhagyma, gomba, padlizsán, rizs. Kérjük, 25 perccel előre rendelje meg." }
    ],
    "pasta": [
        { name: "Spaghetti Scoglio (Tenger gyümölcseis spagetti)", price: "115 lei / 400 g", description: "kékkagyló, vongole, garnéla, Szent Jakab kagyló, tintahal, polip, spagetti, fokhagyma" },
        { name: "Pappardelle tenger gyümölcseivel", price: "150 lei / 300 g", description: "homár, polip, garnéla, tintahal" },
        { name: "Tagliatelle vongole (kagylós metélt)", price: "105 lei / 300 g", description: "tagliatelle, vongole kagyló, fokhagyma, petrezselyem, koktélparadicsom" },
        { name: "Rizottó garnélával", price: "105 lei / 300 g", description: "rizs, friss garnélarák" },
        { name: "Rizottó tenger gyümölcseivel", price: "115 lei / 300 g", description: "rizs, tintahal, kékkagyló, vongole, garnélarák, polip" },
        { name: "Penne speck", price: "75 lei / 250 g", description: "speck sonka, tejszín, penne tészta" }
    ],
    "entrees": [
        { name: "Bruschetta (Tapas)", price: "11 lei / db", description: "paradicsom, padlizsán, fácánpástétom, füstölt lazac" },
        { name: "Burrata sajt", price: "85 lei / 250 g", description: "" },
        { name: "Szardellafilé", price: "75 lei / 58 g", description: "Szardellafilé olívaolajban, pirítóssal, vajjal, mozzarellával, bazsalikommal" },
        { name: "Padrón paprika", price: "49 lei / 200 g", description: "Sült Padrón paprika" },
        { name: "Polip", price: "122 lei / 120 g", description: "Polip burgonyaágyon édes és csípős paprikával megszórva (Pulpo a la Gallega)" },
        { name: "Hidegtál (Snackek)", price: "72 lei", description: "San Daniele sonka 20g, Italia Felino szalámi 20g, házi szalámi 20g, friss sajt/túró 50g, paradicsom, paprika, uborka 50g, olajbogyó 30g" }
    ],
    "salads": [
        { name: "Rukkolasaláta koktélparadicsommal és parmezánnal", price: "48 lei / 300 g", description: "" },
        { name: "Tonhalsaláta", price: "75 lei / 300 g", description: "tonhal, olajos tonhal, koktélparadicsom, vegyes saláta, olajbogyó, rukkola, paprika" },
        { name: "Garnélasaláta", price: "94 lei / 300 g", description: "jégsaláta, garnélarák, koktélparadicsom, öntet" },
        { name: "Tintahalsaláta", price: "94 lei / 300 g", description: "jégsaláta, szépia (tintahal), koktélparadicsom, öntet" },
        { name: "Lazacsaláta", price: "78 lei / 300 g", description: "vegyes zöldsaláta, jégsaláta, lazac, füstölt lazac, házi öntet" }
    ],
    "soups": [
        { name: "Zöldségkrémlevesek", price: "42 lei / 300 g", description: "" },
        { name: "Fácánleves tésztával", price: "42 lei / 300 g", description: "" },
        { name: "Hal és tenger gyümölcsei leves", price: "88 lei / 300 g", description: "" }
    ],
    "dessert": [
        { name: "A Séf Desszertje", price: "41 lei", description: "" },
        { name: "Lava Cake (LávASÜTI)", price: "53 lei", description: "" }
    ]
}

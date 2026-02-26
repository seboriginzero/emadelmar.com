import { MenuItem, DrinkSection, MenuCategory } from "./menu-data";

export const MENU_CATEGORIES_IT: MenuCategory[] = [
    { id: "entrees", label: "Antipasti", title: "Antipasti" },
    { id: "salads", label: "Insalate", title: "Insalate" },
    { id: "pasta", label: "Pasta e Risotto", title: "Pasta e Risotto" },
    { id: "soups", label: "Zuppe e Vellutate", title: "Zuppe - Vellutate" },
    { id: "paella", label: "Paëlla", title: "Ema Paëlla" },
    { id: "fish", label: "Filetti di Pesce Fresco", title: "Filetti di Pesce Fresco" },
    { id: "seafood", label: "Frutti di Mare", title: "Frutti di Mare" },
    { id: "beef", label: "Manzo alla Griglia", title: "Manzo alla Griglia" },
    { id: "chicken-pig-lamb", label: "Pollo, Maiale e Agnello", title: "Pollo, Maiale e Agnello" },
    { id: "garnish", label: "Contorni", title: "Contorni" },
    { id: "dessert", label: "Dessert", title: "Dessert" },
]

export const MENU_DATA_IT: Record<string, (MenuItem | DrinkSection)[]> = {
    "beef": [
        { name: "Bistecca Tomahawk WAGYU", price: "143 lei / 100 g", description: "" },
        { name: "Bistecca Rib Eye Roll WAGYU", price: "143 lei / 100 g", description: "" },
        { name: "Filetto di manzo WAGYU (Tenderloin)", price: "220 lei / 100 g", description: "" },
        { name: "Controfiletto WAGYU (Striploin)", price: "147 lei / 100 g", description: "" },
        { name: "Filetto di manzo Black Angus USDA", price: "275 lei / 250 g", description: "" },
        { name: "Bistecca Rib Eye Roll Black Angus USDA", price: "66 lei / 100 g", description: "" },
        { name: "Costata Black Angus USDA", price: "55 lei / 100 g", description: "" },
        { name: "Bistecca Tomahawk Reserve Black Angus USDA", price: "66 lei / 100 g", description: "" },
        { name: "Tagliata di manzo Black Angus USDA", price: "225 lei / 250 g", description: "bistecca, rucola, pomodorini, parmigiano, aglio" }
    ],
    "chicken-pig-lamb": [
        { name: "Petto di pollo alla griglia", price: "70 lei / 300 g", description: "petto di pollo, salsa chili dolce piccante, patate al forno" },
        { name: "Costolette di maiale", price: "27 lei / 100 g", description: "" },
        { name: "Costolette di agnello", price: "215 lei / 400 g", description: "costolette di agnello 8 pz, patate al forno" }
    ],
    "garnish": [
        { name: "Patate al forno / Insalata verde", price: "18 lei", description: "" },
        { name: "Verdure grigliate", price: "21 lei", description: "" },
        { name: "Asparagi", price: "40 lei", description: "" }
    ],
    "fish": [
        { name: "Filetti di salmone", price: "72 lei / 250 g", description: "" },
        { name: "Tonno", price: "110 lei / 250 g", description: "" },
        { name: "Orata / 100 g", price: "25 lei / 100 g", description: "" },
        { name: "Pesce persico / (800-1000 g)", price: "35 lei / 100 g", description: "" },
        { name: "Aragosta / Astice", price: "Prezzo variabile", description: "Questi tipi di pesce si ordinano con 48h di anticipo o in base all'offerta del giorno. Il prezzo può variare a seconda dell'acquisto." }
    ],
    "seafood": [
        { name: "Piatto Royale - per 2 persone", price: "475 lei / 1400 g", description: "scampi, gamberi, polpo, calamari, seppie, capesante (Saint Jacques), cozze, vongole" },
        { name: "Piatto Mediterraneo", price: "345 lei / 1200 g", description: "gamberi, calamaretti, cozze, vongole, code di scampi" },
        { name: "Ostriche N°3", price: "88 lei / 300 g", description: "" },
        { name: "Cozze alla marinara", price: "22 lei / 100 g", description: "" },
        { name: "Scampi", price: "66 lei / 100 g", description: "" },
        { name: "Calamari", price: "55 lei / 100 g", description: "" },
        { name: "Polpo", price: "113 lei / 100 g", description: "" },
        { name: "Capesante (Saint Jacques)", price: "75 lei / 100 g", description: "" },
        { name: "Gamberi", price: "70 lei / 100 g", description: "" },
        { name: "Seppie", price: "60 lei / 100 g", description: "" }
    ],
    "paella": [
        { name: "Paëlla ai frutti di mare - 2 persone", price: "210 lei / 800 g", description: "calamari, capesante, gamberi, cozze, polpo, chorizo, riso. ordinare 25 minuti prima" },
        { name: "Paëlla a la «Madrilena» - 2 persone", price: "185 lei / 800 g", description: "carne di pollo, carne di maiale, chorizo, funghi, zucchine, melanzane, prosciutto crudo Serrano, riso. ordinare 25 minuti prima" },
        { name: "Vegetariana - 2 persone", price: "145 lei / 800 g", description: "peperoni, pomodori, aglio, funghi, melanzane, riso. ordinare 25 minuti prima" }
    ],
    "pasta": [
        { name: "Spaghetti allo Scoglio", price: "115 lei / 400 g", description: "cozze, vongole, gamberi, capesante, calamari, polpo, spaghetti, aglio" },
        { name: "Pappardelle ai frutti di mare", price: "150 lei / 300 g", description: "aragosta/astice, polpo, gamberi, calamari" },
        { name: "Tagliatelle alle vongole", price: "105 lei / 300 g", description: "tagliatelle, vongole, aglio, prezzemolo, pomodorini" },
        { name: "Risotto con gamberi", price: "105 lei / 300 g", description: "riso, gamberi freschi" },
        { name: "Risotto ai frutti di mare", price: "115 lei / 300 g", description: "riso, calamari, cozze, vongole, gamberi, polpo" },
        { name: "Penne allo speck", price: "75 lei / 250 g", description: "speck, panna, penne" }
    ],
    "entrees": [
        { name: "Bruschetta (Tapas)", price: "11 lei / pz", description: "pomodoro, melanzane, paté di fagiano, salmone affumicato" },
        { name: "Formaggio Burrata", price: "85 lei / 250 g", description: "" },
        { name: "Filetto di acciuga", price: "75 lei / 58 g", description: "Filetto di acciuga sott'olio d'oliva con pane tostato, burro, mozzarella, basilico" },
        { name: "Peperoncini di Padrón", price: "49 lei / 200 g", description: "Peperoncini di Padrón fritti" },
        { name: "Polpo", price: "122 lei / 120 g", description: "Polpo su un letto di patate spolverato di peperoni paprika dolci e piccanti (Pulpo a la Gallega)" },
        { name: "Antipasti", price: "72 lei", description: "San Daniele 20g, salame Italia Felino 20g, salame della casa 20g, formaggio fresco 50g, pomodori, peperoni, cetrioli 50g, olive 30g" }
    ],
    "salads": [
        { name: "Insalata di rucola con pomodorini e parmigiano", price: "48 lei / 300 g", description: "" },
        { name: "Insalata di tonno", price: "75 lei / 300 g", description: "tonno, tonno sott'olio, pomodorini, insalata mista, olive, rucola, peperoni" },
        { name: "Insalata di gamberi", price: "94 lei / 300 g", description: "insalata iceberg, gamberi, pomodorini, condimento" },
        { name: "Insalata di seppie", price: "94 lei / 300 g", description: "insalata iceberg, seppie, pomodorini, condimento" },
        { name: "Insalata al salmone", price: "78 lei / 300 g", description: "mix di insalata verde, insalata iceberg, salmone, salmone affumicato, condimento della casa" }
    ],
    "soups": [
        { name: "Vellutate di verdure", price: "42 lei / 300 g", description: "" },
        { name: "Zuppa di fagiano con noodles", price: "42 lei / 300 g", description: "" },
        { name: "Zuppa di pesce e frutti di mare", price: "88 lei / 300 g", description: "" }
    ],
    "dessert": [
        { name: "Dessert dello Chef", price: "41 lei", description: "" },
        { name: "Tortino al cioccolato con cuore morbido (Lava Cake)", price: "53 lei", description: "" }
    ]
}

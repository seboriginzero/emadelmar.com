import { MenuItem, DrinkSection, MenuCategory } from "./menu-data";

export const MENU_CATEGORIES_DE: MenuCategory[] = [
    { id: "entrees", label: "Vorspeisen", title: "Vorspeisen" },
    { id: "salads", label: "Salate", title: "Salate" },
    { id: "pasta", label: "Pasta & Risotto", title: "Pasta & Risotto" },
    { id: "soups", label: "Suppen", title: "Suppen" },
    { id: "paella", label: "Paëlla", title: "Ema Paëlla" },
    { id: "fish", label: "Frische Fischfilets", title: "Frische Fischfilets" },
    { id: "seafood", label: "Meeresfrüchte", title: "Meeresfrüchte" },
    { id: "beef", label: "Beef Grill", title: "Beef Grill" },
    { id: "chicken-pig-lamb", label: "Geflügel, Schwein & Lamm", title: "Geflügel, Schwein & Lamm" },
    { id: "garnish", label: "Beilagen", title: "Beilagen" },
    { id: "dessert", label: "Dessert", title: "Dessert" },
]

export const MENU_DATA_DE: Record<string, (MenuItem | DrinkSection)[]> = {
    "beef": [
        { name: "WAGYU Tomahawk Steak", price: "143 lei / 100 g", description: "" },
        { name: "WAGYU Rib Eye Roll Steak", price: "143 lei / 100 g", description: "" },
        { name: "WAGYU Tenderloin Steak", price: "220 lei / 100 g", description: "" },
        { name: "WAGYU Striploin Steak", price: "147 lei / 100 g", description: "" },
        { name: "Black Angus USDA Tenderloin Steak", price: "275 lei / 250 g", description: "" },
        { name: "Black Angus USDA Rib Eye Roll Steak", price: "66 lei / 100 g", description: "" },
        { name: "Black Angus USDA Rib steak", price: "55 lei / 100 g", description: "" },
        { name: "Black Angus USDA Tomahawk Steak Reserve", price: "66 lei / 100 g", description: "" },
        { name: "Black Angus USDA Beef Tagliata", price: "225 lei / 250 g", description: "Steak, Rucola, Kirschtomaten, Parmesan, Knoblauch" }
    ],
    "chicken-pig-lamb": [
        { name: "Gegrillte Hähnchenbrust", price: "70 lei / 300 g", description: "Hähnchenbrust, süß-scharfe Chilisauce, Ofenkartoffeln" },
        { name: "Schweinerippchen", price: "27 lei / 100 g", description: "" },
        { name: "Lammkoteletts", price: "215 lei / 400 g", description: "Lammkoteletts 8 Stk, Ofenkartoffeln" }
    ],
    "garnish": [
        { name: "Ofenkartoffeln / Grüner Salat", price: "18 lei", description: "" },
        { name: "Grillgemüse", price: "21 lei", description: "" },
        { name: "Spargel", price: "40 lei", description: "" }
    ],
    "fish": [
        { name: "Lachsfilets", price: "72 lei / 250 g", description: "" },
        { name: "Thunfisch", price: "110 lei / 250 g", description: "" },
        { name: "Goldbrasse / 100 g", price: "25 lei / 100 g", description: "" },
        { name: "Barsch / (800-1000 g)", price: "35 lei / 100 g", description: "" },
        { name: "Hummer", price: "Preț variabil", description: "Dieses Gericht muss 48h im Voraus oder je nach Tagesangebot bestellt werden. Der Preis kann je nach Einkaufspreis variieren." }
    ],
    "seafood": [
        { name: "Königliche Platte - für 2 Personen", price: "475 lei / 1400 g", description: "Kaisergranat, Garnelen, Oktopus, Tintenfisch, Sepia, Jakobsmuscheln, Miesmuscheln, Vongole" },
        { name: "Mediterrane Platte", price: "345 lei / 1200 g", description: "Garnelen, Baby-Tintenfisch, Muscheln, Vongole, Langustenschwänze" },
        { name: "Austern N°3", price: "88 lei / 300 g", description: "" },
        { name: "Miesmuscheln Marinara", price: "22 lei / 100 g", description: "" },
        { name: "Kaisergranat", price: "66 lei / 100 g", description: "" },
        { name: "Tintenfisch", price: "55 lei / 100 g", description: "" },
        { name: "Oktopus", price: "113 lei / 100 g", description: "" },
        { name: "Jakobsmuscheln", price: "75 lei / 100 g", description: "" },
        { name: "Garnelen", price: "70 lei / 100 g", description: "" },
        { name: "Sepia", price: "60 lei / 100 g", description: "" }
    ],
    "paella": [
        { name: "Meeresfrüchte Paëlla - 2 Personen", price: "210 lei / 800 g", description: "Tintenfisch, Jakobsmuscheln, Garnelen, Miesmuscheln, Oktopus, Chorizo, Reis. Bitte 25 Minuten im Voraus bestellen" },
        { name: "Paëlla a la «Madrilena» - 2 Personen", price: "185 lei / 800 g", description: "Hühnerfleisch, Schweinefleisch, Chorizo, Pilze, Zucchini, Aubergine, Serrano-Schinken, Reis. Bitte 25 Minuten im Voraus bestellen" },
        { name: "Vegetariana - 2 Personen", price: "145 lei / 800 g", description: "Paprika, Tomaten, Knoblauch, Pilze, Aubergine, Reis. Bitte 25 Minuten im Voraus bestellen" }
    ],
    "pasta": [
        { name: "Spaghetti Scoglio", price: "115 lei / 400 g", description: "Miesmuscheln, Vongole, Garnelen, Jakobsmuscheln, Tintenfisch, Oktopus, Spaghetti, Knoblauch" },
        { name: "Pappardelle mit Meeresfrüchten", price: "150 lei / 300 g", description: "Hummer, Oktopus, Garnelen, Tintenfisch" },
        { name: "Tagliatelle Vongole", price: "105 lei / 300 g", description: "Tagliatelle, Vongole, Knoblauch, Petersilie, Kirschtomaten" },
        { name: "Risotto mit Garnelen", price: "105 lei / 300 g", description: "Reis, frische Garnelen" },
        { name: "Risotto mit Meeresfrüchten", price: "115 lei / 300 g", description: "Reis, Tintenfisch, Miesmuscheln, Vongole, Garnelen, Oktopus" },
        { name: "Penne Speck", price: "75 lei / 250 g", description: "Speck, Sahne, Penne" }
    ],
    "entrees": [
        { name: "Bruschetta (Tapas)", price: "11 lei / Stk.", description: "Tomate, Aubergine, Fasanenpastete, Räucherlachs" },
        { name: "Burrata", price: "85 lei / 250 g", description: "" },
        { name: "Sardellenfilet", price: "75 lei / 58 g", description: "Sardellenfilet in Olivenöl mit Toast, Butter, Mozzarella, Basilikum" },
        { name: "Padrón-Paprika", price: "49 lei / 200 g", description: "Gebratene Padrón-Paprika" },
        { name: "Oktopus", price: "122 lei / 120 g", description: "Oktopus auf Kartoffelbett, bestreut mit Paprika und scharfen Pfeffer (Pulpo a la Gallega)" },
        { name: "Snacks", price: "72 lei", description: "San Daniele 20g, Salami Italia Felino 20g, Haussalami 20g, Hüttenkäse 50g, Tomaten, Paprika, Gurke 50g, Oliven 30g" }
    ],
    "salads": [
        { name: "Rucolasalat mit Kirschtomaten und Parmesan", price: "48 lei / 300 g", description: "" },
        { name: "Thunfischsalat", price: "75 lei / 300 g", description: "Thunfisch, Thunfisch in Öl, Kirschtomaten, gemischter Salat, Oliven, Rucola, Paprika" },
        { name: "Garnelensalat", price: "94 lei / 300 g", description: "Eisbergsalat, Garnelen, Kirschtomaten, Dressing" },
        { name: "Tintenfischsalat", price: "94 lei / 300 g", description: "Eisbergsalat, Tintenfisch, Kirschtomaten, Dressing" },
        { name: "Lachssalat", price: "78 lei / 300 g", description: "Gemischter grüner Salat, Eisbergsalat, Lachs, Räucherlachs, hausgemachtes Dressing" }
    ],
    "soups": [
        { name: "Gemüsecremesuppe", price: "42 lei / 300 g", description: "" },
        { name: "Fasanensuppe mit Nudeln", price: "42 lei / 300 g", description: "" },
        { name: "Fisch- und Meeresfrüchtesuppe", price: "88 lei / 300 g", description: "" }
    ],
    "dessert": [
        { name: "The Chef's Desert", price: "41 lei", description: "" },
        { name: "Lava Cake", price: "53 lei", description: "" }
    ]
}

export interface MenuItem {
    name: string;
    price: string;
    description: string;
}

export interface DrinkSection {
    section: string;
    image?: string;
    items: MenuItem[];
}

export interface MenuCategory {
    id: string;
    label: string;
    title: string;
    image?: string;
}

export const MENU_CATEGORIES_RO: MenuCategory[] = [
    { id: "antreuri", label: "Antreuri", title: "Antreuri", image: "/images/gallery/MG_3485.jpg" },
    { id: "salate", label: "Salate", title: "Salate", image: "/images/gallery/MG_3497.jpg" },
    { id: "pasta", label: "Paste & Risotto", title: "Pasta & Risotto", image: "/images/gallery/MG_7984-1.jpg" },
    { id: "supe", label: "Supe", title: "Supe - Creme", image: "/images/gallery/Interior-restaurant-Ema-del-Mar.jpg" },
    { id: "paella", label: "Paëlla", title: "Ema Paëlla", image: "/images/gallery/da50e48b9d16a8454c3af0cdcfc90c4f_ema23-large.jpg" },
    { id: "peste", label: "Pește", title: "Pește proaspăt file", image: "/images/gallery/platou-cu-peste-proaspat.jpg" },
    { id: "seafood", label: "Seafood", title: "Seafood", image: "/images/gallery/Platou-cu-fructe-de-mare.jpg" },
    { id: "beef", label: "Beef Grill", title: "Beef Grill", image: "/images/gallery/platou-cu-carne-de-vita.jpg" },
    { id: "pui-porc-miel", label: "Pui, Porc & Miel", title: "Pui, Porc & Miel", image: "/images/gallery/MG_3489.jpg" },
    { id: "garnituri", label: "Garnituri", title: "Garnituri", image: "/images/gallery/MG_3452.jpg" },
    { id: "desert", label: "Desert", title: "Desert", image: "/images/gallery/MG_0201.jpg" },
]

export const MENU_DATA_RO: Record<string, (MenuItem | DrinkSection)[]> = {
    "beef": [
        { name: "WAGYU Tomahawk Steak", price: "143 lei / 100 g", description: "" },
        { name: "WAGYU Rib Eye Roll Steak", price: "143 lei / 100 g", description: "" },
        { name: "WAGYU Tenderloin Steak (Mușchi de vită)", price: "220 lei / 100 g", description: "" },
        { name: "WAGYU Striploin Steak", price: "147 lei / 100 g", description: "" },
        { name: "Black Angus USDA Tenderloin Steak (Mușchi de vită)", price: "275 lei / 250 g", description: "" },
        { name: "Black Angus USDA Rib Eye Roll Steak", price: "66 lei / 100 g", description: "" },
        { name: "Black Angus USDA Rib steak (Costata)", price: "55 lei / 100 g", description: "" },
        { name: "Black Angus USDA Tomahawk Steak Reserve", price: "66 lei / 100 g", description: "" },
        { name: "Black Angus USDA Beef Tagliata", price: "225 lei / 250 g", description: "steak, rucola, roșii cherry, parmezan, usturoi" }
    ],
    "pui-porc-miel": [
        { name: "Piept de pui Grill", price: "70 lei / 300 g", description: "piept de pui, sos chili dulce picant, cartofi copți" },
        { name: "Coaste de porc", price: "27 lei / 100 g", description: "" },
        { name: "Cotlet de berbecuț", price: "215 lei / 400 g", description: "cotlet de berbecuț 8 buc, cartofi copți" }
    ],
    "garnituri": [
        { name: "Cartofi copți sau Salată verde", price: "18 lei", description: "" },
        { name: "Legume grill", price: "21 lei", description: "" },
        { name: "Sparanghel", price: "40 lei", description: "" }
    ],
    "peste": [
        { name: "Somon file", price: "72 lei / 250 g", description: "" },
        { name: "Ton", price: "110 lei / 250 g", description: "" },
        { name: "Doradă (400-600 g)", price: "25 lei / 100 g", description: "" },
        { name: "Biban (800-1000 g)", price: "35 lei / 100 g", description: "" },
        { name: "Homar", price: "Preț variabil", description: "Acest sortiment se face pe bază de comandă anticipată 48 h sau în funcție de oferta zilei. Prețul poate varia în funcție de achiziție." }
    ],
    "seafood": [
        { name: "Platou Royal - pentru 2 persoane", price: "475 lei / 1400 g", description: "Scampi, Creveți, Caracatiță, Calamar, Sepie, Saint Jacques, Midii, Vongole" },
        { name: "Platou Mediteranean", price: "345 lei / 1200 g", description: "Creveți, Baby Calamar, Vongole, Midii, Cozi Langustine" },
        { name: "Stridii N°3", price: "88 lei / 300 g", description: "" },
        { name: "Midii marinara", price: "22 lei / 100 g", description: "" },
        { name: "Scampi", price: "66 lei / 100 g", description: "" },
        { name: "Calamar", price: "55 lei / 100 g", description: "" },
        { name: "Caracatiță", price: "113 lei / 100 g", description: "" },
        { name: "Saint Jacques", price: "75 lei / 100 g", description: "" },
        { name: "Creveți", price: "70 lei / 100 g", description: "" },
        { name: "Sepie", price: "60 lei / 100 g", description: "" }
    ],
    "paella": [
        { name: "Seafood Paëlla - 2 persoane", price: "210 lei / 800 g", description: "calamari, Saint Jacques, creveți, midii, caracatiță, chorizo, orez. Comandă cu 25 min anticipată" },
        { name: "Paëlla a la «Madrilena» - 2 persoane", price: "185 lei / 800 g", description: "carne de pui, carne de porc, chorizo, ciuperci, zuchini, vinete, șuncă Serano, orez. Comandă cu 25 min anticipată" },
        { name: "Vegetariana - 2 persoane", price: "145 lei / 800 g", description: "ardei, roșii, usturoi, ciuperci, vinete, orez. Comandă cu 25 min anticipată" }
    ],
    "pasta": [
        { name: "Spaghetti Scoglio", price: "115 lei / 400 g", description: "midii, vongole, creveți, calamar, caracatiță, spaghete, usturoi" },
        { name: "Pappardelle cu fructe de mare", price: "150 lei / 300 g", description: "homar, caracatiță, creveți, calamar" },
        { name: "Tagliatelle vongole", price: "105 lei / 300 g", description: "tagliatelle, vongole, usturoi, pătrunjel, roșii cherry" },
        { name: "Rissotto cu creveți", price: "105 lei / 300 g", description: "orez, creveți proaspeți, șofran" },
        { name: "Rissotto cu fructe de mare", price: "115 lei / 300 g", description: "orez, calamar, midii, vongole, creveți, caracatiță" },
        { name: "Penne speck", price: "75 lei / 250 g", description: "speck, panna, penne" }
    ],
    "antreuri": [
        { name: "Bruschetă (Tapas)", price: "11 lei / buc", description: "roșii, vinete, pate fazan, somon fume" },
        { name: "Bufala / Burrata", price: "85 lei / 250 g", description: "" },
        { name: "File de Anșoa", price: "75 lei / 58 g", description: "file de Anșoa în ulei de măsline, unt, pâine prăjită" },
        { name: "Ardei Padrón", price: "49 lei / 200 g", description: "Ardei Padrón prăjit" },
        { name: "Caracatiță", price: "122 lei / 120 g", description: "Caracatiță pe pat de cartofi presărată cu ardei dulce și ardei picant (Pulpo a la Gallega)" },
        { name: "Gustare rece", price: "72 lei", description: "San Daniele 20 g, salam Italia Felino 20 g, salam de casă 20 g, telemea 50 g, roșii, ardei, castraveți 50 g, măsline 30 g" }
    ],
    "salate": [
        { name: "Salată rucola cu roșii cherry și parmezan", price: "48 lei / 300 g", description: "" },
        { name: "Salată de ton", price: "75 lei / 300 g", description: "ton, ton în ulei, roșii cherry, salată mixtă, rucola, ardei" },
        { name: "Salată de creveți", price: "94 lei / 300 g", description: "salată eisberg, creveți, roșii cherry, dressing" },
        { name: "Salată cu sepia", price: "94 lei / 300 g", description: "mix salată, salată eisberg, sepia, roșii cherry, dressing" },
        { name: "Salată cu somon", price: "78 lei / 300 g", description: "mix salată, salată eisberg, somon, somon fume, dressing" }
    ],
    "supe": [
        { name: "Cremă de legume", price: "42 lei / 300 g", description: "" },
        { name: "Supă de fazan cu gârteni", price: "42 lei / 300 g", description: "" },
        { name: "Supă de pește și fructe de mare", price: "88 lei / 300 g", description: "" }
    ],
    "desert": [
        { name: "The Chef's Desert", price: "41 lei", description: "" },
        { name: "Lava Cake", price: "53 lei", description: "" }
    ],
    "bauturi": [
        {
            section: "Băuturi calde",
            image: "/images/menu/bauturi/coffee.png",
            items: [
                { name: "Espresso", price: "12 lei", description: "" },
                { name: "Espresso dublu", price: "18 lei", description: "" },
                { name: "Espresso macchiato", price: "13 lei", description: "" },
                { name: "Cappuccino", price: "15 lei", description: "" },
                { name: "Cappuccino vienez", price: "17 lei", description: "" },
                { name: "Caffe latte", price: "17 lei", description: "" },
                { name: "Latte machiato", price: "18 lei", description: "" },
                { name: "Flat white", price: "18 lei", description: "" },
                { name: "Iced coffee", price: "20 lei", description: "" },
                { name: "Frappe", price: "22 lei", description: "" },
                { name: "Ciocolată caldă neagră / albă", price: "18 lei", description: "" },
                { name: "Ceai infuzie", price: "15 lei", description: "diverse sortimente" }
            ]
        },
        {
            section: "Răcoritoare",
            image: "/images/menu/bauturi/soda.png",
            items: [
                { name: "Fresh portocale / gref / mix", price: "22 lei / 250 ml", description: "" },
                { name: "Limonadă clasică", price: "20 lei / 400 ml", description: "" },
                { name: "Limonadă cu mentă", price: "22 lei / 400 ml", description: "" },
                { name: "Limonadă cu fructe", price: "25 lei / 400 ml", description: "mango/fructul pasiunii/pepene/căpșuni/zmeură" },
                { name: "Coca Cola / Zero / Fanta / Sprite", price: "11 lei / 250 ml", description: "" },
                { name: "Schweppes Kinley / Mandarin / Bitter Lemon", price: "11 lei / 250 ml", description: "" },
                { name: "Fuzetea", price: "12 lei / 250 ml", description: "piersici / lămâie" },
                { name: "Santal", price: "12 lei / 250 ml", description: "portocale / mere / piersici / merișoare" },
                { name: "Burn original", price: "16 lei / 250 ml", description: "" }
            ]
        },
        {
            section: "Ape Minerale",
            image: "/images/menu/bauturi/water.png",
            items: [
                { name: "Apă minerală plată/carbogazoasă Dorna", price: "10 lei / 330 ml", description: "" },
                { name: "Apă minerală plată/carbogazoasă Dorna", price: "18 lei / 750 ml", description: "" },
                { name: "Apă minerală Aquatique", price: "11 lei / 330 ml", description: "" }
            ]
        },
        {
            section: "Vermouth / Amaro / Cocktails",
            image: "/images/menu/bauturi/cocktails.png",
            items: [
                { name: "Martini Bianco / Rosso / Fiero", price: "18 lei / 50 ml", description: "" },
                { name: "Campari", price: "22 lei / 50 ml", description: "" },
                { name: "Aperol", price: "20 lei / 50 ml", description: "" },
                { name: "Hugo", price: "35 lei / 250 ml", description: "" },
                { name: "Aperitivo spritz cu portocale", price: "35 lei / 250 ml", description: "" },
                { name: "Campari orange", price: "32 lei / 250 ml", description: "" },
                { name: "Gin tonic", price: "32 lei / 250 ml", description: "" },
                { name: "Cuba libre", price: "32 lei / 250 ml", description: "" }
            ]
        },
        {
            section: "Vodka",
            image: "/images/menu/bauturi/vodka.png",
            items: [
                { name: "Absolut Blue", price: "16 lei / 50 ml", description: "" },
                { name: "Finlandia", price: "16 lei / 50 ml", description: "" },
                { name: "Grey Goose", price: "35 lei / 50 ml", description: "" },
                { name: "Belvedere", price: "35 lei / 50 ml", description: "" }
            ]
        },
        {
            section: "Whisky / Bourbon",
            image: "/images/menu/bauturi/whisky.png",
            items: [
                { name: "Jack Daniel's", price: "21 lei / 50 ml", description: "" },
                { name: "Jameson", price: "19 lei / 50 ml", description: "" },
                { name: "Chivas Regal 12 YO", price: "25 lei / 50 ml", description: "" },
                { name: "Glenfiddich 12 YO", price: "30 lei / 50 ml", description: "" },
                { name: "Macallan 12 YO", price: "45 lei / 50 ml", description: "" }
            ]
        },
        {
            section: "Cognac / Vinars",
            image: "/images/menu/bauturi/cognac.png",
            items: [
                { name: "Courvoisier VS", price: "26 lei / 50 ml", description: "" },
                { name: "Hennessy VS", price: "26 lei / 50 ml", description: "" },
                { name: "Martell VS", price: "26 lei / 50 ml", description: "" },
                { name: "Brâncoveanu XO", price: "32 lei / 50 ml", description: "" },
                { name: "Jidvei VSOP", price: "22 lei / 50 ml", description: "" }
            ]
        },
        {
            section: "Tequila / Lichior / Rom",
            image: "/images/menu/bauturi/liqueur.png",
            items: [
                { name: "Jose Cuervo Silver / Gold", price: "18 lei / 50 ml", description: "" },
                { name: "Bacardi Carta Blanca / Oro", price: "18 lei / 50 ml", description: "" },
                { name: "Captain Morgan Spiced", price: "18 lei / 50 ml", description: "" },
                { name: "Baileys Irish Cream", price: "18 lei / 50 ml", description: "" },
                { name: "Sheridan's", price: "20 lei / 50 ml", description: "" },
                { name: "Limoncello", price: "16 lei / 50 ml", description: "" }
            ]
        },
        {
            section: "Digestive",
            image: "/images/menu/bauturi/digestif.png",
            items: [
                { name: "Jägermeister", price: "18 lei / 50 ml", description: "" },
                { name: "Amaretto Disaronno", price: "20 lei / 50 ml", description: "" },
                { name: "Fernet Branca", price: "18 lei / 50 ml", description: "" },
                { name: "Unicum", price: "18 lei / 50 ml", description: "" },
                { name: "Grappa", price: "22 lei / 50 ml", description: "" }
            ]
        }
    ]
}


export const MENU_CATEGORIES_EN: MenuCategory[] = [
    { id: "entrees", label: "Entrees", title: "Entrees" },
    { id: "salads", label: "Salads", title: "Salads" },
    { id: "pasta", label: "Pasta & Risotto", title: "Pasta & Risotto" },
    { id: "soups", label: "Cream - Soups", title: "Cream - Soups" },
    { id: "paella", label: "Paëlla", title: "Ema Paëlla" },
    { id: "fish", label: "Fresh Fish Fillets", title: "Fresh Fish Fillets" },
    { id: "seafood", label: "Seafood", title: "Seafood" },
    { id: "beef", label: "Beef Grill", title: "Beef Grill" },
    { id: "chicken-pig-lamb", label: "Chicken & Pig & Lamb", title: "Chicken & Pig & Lamb" },
    { id: "garnish", label: "Garnish", title: "Garnish" },
    { id: "dessert", label: "Dessert", title: "Dessert" },
]

export const MENU_DATA_EN: Record<string, (MenuItem | DrinkSection)[]> = {
    "beef": [
        { name: "WAGYU Tomahawk Steak", price: "143 lei / 100 g", description: "" },
        { name: "WAGYU Rib Eye Roll Steak", price: "143 lei / 100 g", description: "" },
        { name: "WAGYU Tenderloin Steak", price: "220 lei / 100 g", description: "" },
        { name: "WAGYU Striploin Steak", price: "147 lei / 100 g", description: "" },
        { name: "Black Angus USDA Tenderloin Steak", price: "275 lei / 250 g", description: "" },
        { name: "Black Angus USDA Rib Eye Roll Steak", price: "66 lei / 100 g", description: "" },
        { name: "Black Angus USDA Rib steak (Costata)", price: "55 lei / 100 g", description: "" },
        { name: "Black Angus USDA Tomahawk Steak Reserve", price: "66 lei / 100 g", description: "" },
        { name: "Black Angus USDA Beef Tagliata", price: "225 lei / 250 g", description: "steak, rucola, cherry tomatoes, parmesan, garlic" }
    ],
    "chicken-pig-lamb": [
        { name: "Grilled chicken breast", price: "70 lei / 300 g", description: "chicken breast, sweet spicy chili sauce, baked potatoes" },
        { name: "Pork ribs", price: "27 lei / 100 g", description: "" },
        { name: "Lamb chops", price: "215 lei / 400 g", description: "cotlet de berbecuț 8 buc, baked potatoes" }
    ],
    "garnish": [
        { name: "Baked potatoes / Green salad", price: "18 lei", description: "" },
        { name: "Grilled vegetables", price: "21 lei", description: "" },
        { name: "Asparagus", price: "40 lei", description: "" }
    ],
    "fish": [
        { name: "Salmon fillets", price: "72 lei / 250 g", description: "" },
        { name: "Tuna", price: "110 lei / 250 g", description: "" },
        { name: "Gilt-head bram / 100 g", price: "25 lei / 100 g", description: "" },
        { name: "Perch / (800-1000 g)", price: "35 lei / 100 g", description: "" },
        { name: "Lobster", price: "Preț variabil", description: "These type of fish are ordering with 48h before or according to the day offer. The price may vary depending on the purchase price." }
    ],
    "seafood": [
        { name: "Royal Plateau - for 2 persons", price: "475 lei / 1400 g", description: "scampi, shrimps, octopus, calamari, cuttlefish, Saint Jacques, mussels, vongole" },
        { name: "Platou Mediterranean", price: "345 lei / 1200 g", description: "shrimp, baby squid, mussels, vongole, langostine tails" },
        { name: "Oyster N°3", price: "88 lei / 300 g", description: "" },
        { name: "Marinara mussels", price: "22 lei / 100 g", description: "" },
        { name: "Scampi", price: "66 lei / 100 g", description: "" },
        { name: "Calamari", price: "55 lei / 100 g", description: "" },
        { name: "Octopus", price: "113 lei / 100 g", description: "" },
        { name: "Saint Jacques", price: "75 lei / 100 g", description: "" },
        { name: "Shrimps", price: "70 lei / 100 g", description: "" },
        { name: "Cuttlefish", price: "60 lei / 100 g", description: "" }
    ],
    "paella": [
        { name: "Seafood Paëlla - 2 persons", price: "210 lei / 800 g", description: "calamari, Saint Jacques, shrimps, mussels, octopus, chorizo, rice. order with 25 minutes early" },
        { name: "Paëlla a la «Madrilena» - 2 persons", price: "185 lei / 800 g", description: "chiken meat, pig meat, chorizo, mushrooms, zucchini, eggplant, Serano ham, rice. order with 25 minutes early" },
        { name: "Vegetariana - 2 persons", price: "145 lei / 800 g", description: "pepper, tomatoes, garlic, mushrooms, eggplant, rice. order with 25 minutes early" }
    ],
    "pasta": [
        { name: "Spaghetti Scoglio", price: "115 lei / 400 g", description: "mussels, vongole, shrimps, Saint Jaques, calamari, octopus, spaghetti, garlic" },
        { name: "Pappardelle with seafood", price: "150 lei / 300 g", description: "lobster, octopus, shrimp, squid" },
        { name: "Tagliatelle vongole", price: "105 lei / 300 g", description: "tagliatelle, vongole, garlic, parsley, cherry tomatoes" },
        { name: "Rissotto with shrimps", price: "105 lei / 300 g", description: "rice, fresh shrimps" },
        { name: "Rissotto with seafood", price: "115 lei / 300 g", description: "rice, calamari, mussels, vongole, shrimps, octopus" },
        { name: "Penne speck", price: "75 lei / 250 g", description: "speck, panna, penne" }
    ],
    "entrees": [
        { name: "Bruschetta (Tapas)", price: "11 lei / buc", description: "tomato, eggplant, pheasant páté, salmon fume" },
        { name: "Buratta cheese", price: "85 lei / 250 g", description: "" },
        { name: "Anchovy fillet", price: "75 lei / 58 g", description: "Anchovy fillet in olive oil with toast, butter, mozareline, basil" },
        { name: "Padrón peppers", price: "49 lei / 200 g", description: "Fried Padrón peppers" },
        { name: "Octopus", price: "122 lei / 120 g", description: "Octopus on a bed of potatoes sprinkled with peppers and spicky peppers (Pulpo a la Gallega)" },
        { name: "Snacks", price: "72 lei", description: "San Danielle 20 gr Italia Felino salami 20 g, home salami 20 g, cottage 50 g, tomatoes, pepper, cuccumber 50 g, olive 30 g" }
    ],
    "salads": [
        { name: "Rucola salad with cherry tomatoes and parmesan", price: "48 lei / 300 g", description: "" },
        { name: "Tuna salad", price: "75 lei / 300 g", description: "tuna, tuna in oil, cherry tomatoes, mixt salad, olive, rucola, pepper" },
        { name: "Shrimps salad", price: "94 lei / 300 g", description: "eisberg salad, shrimps, cherry tomatoes, dressing" },
        { name: "Cuttlefish salad", price: "94 lei / 300 g", description: "eisberg salad, cuttlefish, cherry tomatoes, dressing" },
        { name: "Salmon salad", price: "78 lei / 300 g", description: "mix green salad, eisberg salad, salmon, fume salmon, homemade dressing" }
    ],
    "soups": [
        { name: "Vegetable cream soups", price: "42 lei / 300 g", description: "" },
        { name: "Pheasant soup with noodles", price: "42 lei / 300 g", description: "" },
        { name: "Fish and seafood soup", price: "88 lei / 300 g", description: "" }
    ],
    "dessert": [
        { name: "The Chef's Desert", price: "41 lei", description: "" },
        { name: "Lava Cake", price: "53 lei", description: "" }
    ],
    "bauturi": [
        {
            section: "Hot Drinks",
            image: "/images/menu/bauturi/coffee.png",
            items: [
                { name: "Espresso Coffee", price: "", description: "" },
                { name: "Cappuccino", price: "", description: "" },
                { name: "Latte Macchiato", price: "", description: "" },
                { name: "Hot Chocolate", price: "", description: "" },
                { name: "Tea", price: "", description: "" }
            ]
        },
        {
            section: "Soft Drinks",
            image: "/images/menu/bauturi/soda.png",
            items: [
                { name: "Cola Range", price: "", description: "" },
                { name: "Santal", price: "", description: "" },
                { name: "Lemonade", price: "", description: "" },
                { name: "Fresh Fruit Juice", price: "", description: "" },
                { name: "Nestea", price: "", description: "" },
                { name: "Red Bull", price: "", description: "" }
            ]
        },
        {
            section: "Mineral / Still Water",
            image: "/images/menu/bauturi/water.png",
            items: [
                { name: "Perier", price: "", description: "" },
                { name: "Perenna 750ml", price: "", description: "" },
                { name: "Perenna 330ml", price: "", description: "" }
            ]
        },
        {
            section: "Vermouth / Bitter / Cocktails",
            image: "/images/menu/bauturi/cocktails.png",
            items: [
                { name: "Martini Bianco", price: "", description: "" },
                { name: "Campari", price: "", description: "" },
                { name: "Aperol Spritz", price: "", description: "" },
                { name: "Aperol Clasico", price: "", description: "" }
            ]
        },
        {
            section: "Whisky",
            image: "/images/menu/bauturi/whisky.png",
            items: [
                { name: "Johnnie Walker - Red Label", price: "", description: "" },
                { name: "Chardu", price: "", description: "" },
                { name: "Chivas Regal", price: "", description: "" },
                { name: "Gentleman Jack", price: "", description: "" },
                { name: "Jameson", price: "", description: "" }
            ]
        },
        {
            section: "Vodka",
            image: "/images/menu/bauturi/vodka.png",
            items: [
                { name: "Absolut Blue", price: "", description: "" },
                { name: "Finlandia", price: "", description: "" },
                { name: "Beluga", price: "", description: "" },
                { name: "Grey Goose", price: "", description: "" }
            ]
        },
        {
            section: "Cognac / Brandy / Vinars",
            image: "/images/menu/bauturi/cognac.png",
            items: [
                { name: "Curvoisier VSOP", price: "", description: "" },
                { name: "Henessy XO", price: "", description: "" },
                { name: "Martel VS", price: "", description: "" },
                { name: "Miorita", price: "", description: "" },
                { name: "Jidvei", price: "", description: "" }
            ]
        },
        {
            section: "Tequila / Liqueur / Rum",
            image: "/images/menu/bauturi/liqueur.png",
            items: [
                { name: "Camino Tequila", price: "", description: "" },
                { name: "Bacardi Rum", price: "", description: "" },
                { name: "Sherridan's", price: "", description: "" },
                { name: "Bailey's", price: "", description: "" },
                { name: "Cointreau", price: "", description: "" },
                { name: "Limoncello", price: "", description: "" }
            ]
        },
        {
            section: "Digestives",
            image: "/images/menu/bauturi/digestif.png",
            items: [
                { name: "Jagermeister", price: "", description: "" },
                { name: "Amaretto Disarono", price: "", description: "" },
                { name: "Fernet Branca", price: "", description: "" },
                { name: "Grappa", price: "", description: "" }
            ]
        }
    ]
}

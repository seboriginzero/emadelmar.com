import { MenuItem, DrinkSection, MenuCategory } from "./menu-data";

export const MENU_CATEGORIES_ES: MenuCategory[] = [
    { id: "entrees", label: "Entrantes", title: "Entrantes" },
    { id: "salads", label: "Ensaladas", title: "Ensaladas" },
    { id: "pasta", label: "Pasta y Risotto", title: "Pasta y Risotto" },
    { id: "soups", label: "Sopas", title: "Sopas - Cremas" },
    { id: "paella", label: "Paëlla", title: "Ema Paëlla" },
    { id: "fish", label: "Filetes de Pescado Fresco", title: "Filetes de Pescado Fresco" },
    { id: "seafood", label: "Mariscos", title: "Mariscos" },
    { id: "beef", label: "Diferentes Cortes de Ternera", title: "Diferentes Cortes de Ternera" },
    { id: "chicken-pig-lamb", label: "Pollo, Cerdo y Cordero", title: "Pollo, Cerdo y Cordero" },
    { id: "garnish", label: "Guarniciones", title: "Guarniciones" },
    { id: "dessert", label: "Postre", title: "Postre" },
]

export const MENU_DATA_ES: Record<string, (MenuItem | DrinkSection)[]> = {
    "beef": [
        { name: "Filete Tomahawk WAGYU", price: "143 lei / 100 g", description: "" },
        { name: "Filete de Lomo (Ojo de Bife) WAGYU", price: "143 lei / 100 g", description: "" },
        { name: "Solomillo de Ternera WAGYU", price: "220 lei / 100 g", description: "" },
        { name: "Filete de Lomo WAGYU", price: "147 lei / 100 g", description: "" },
        { name: "Solomillo de Ternera Black Angus USDA", price: "275 lei / 250 g", description: "" },
        { name: "Filete de Lomo (Ojo de Bife) Black Angus USDA", price: "66 lei / 100 g", description: "" },
        { name: "Costilla de Ternera Black Angus USDA", price: "55 lei / 100 g", description: "" },
        { name: "Filete Tomahawk Reserve Black Angus USDA", price: "66 lei / 100 g", description: "" },
        { name: "Tagliata de Ternera Black Angus USDA", price: "225 lei / 250 g", description: "filete, rúcula, tomates cherry, parmesano, ajo" }
    ],
    "chicken-pig-lamb": [
        { name: "Pechuga de pollo a la parrilla", price: "70 lei / 300 g", description: "pechuga de pollo, salsa de chile agridulce, patatas al horno" },
        { name: "Costillas de cerdo", price: "27 lei / 100 g", description: "" },
        { name: "Chuletas de cordero", price: "215 lei / 400 g", description: "chuletas de cordero 8 uds, patatas al horno" }
    ],
    "garnish": [
        { name: "Patatas al horno / Ensalada verde", price: "18 lei", description: "" },
        { name: "Verduras a la parrilla", price: "21 lei", description: "" },
        { name: "Espárragos", price: "40 lei", description: "" }
    ],
    "fish": [
        { name: "Filetes de salmón", price: "72 lei / 250 g", description: "" },
        { name: "Atún", price: "110 lei / 250 g", description: "" },
        { name: "El besugo / 100 g", price: "25 lei / 100 g", description: "" },
        { name: "Perca / (800-1000 g)", price: "35 lei / 100 g", description: "" },
        { name: "Langosta", price: "Preț variabil", description: "Este tipo de pescado se pide con 48h de antelación o según la oferta del día. El precio puede variar dependiendo del precio de compra." }
    ],
    "seafood": [
        { name: "Meseta Real - para 2 personas", price: "475 lei / 1400 g", description: "cigalas, gambas, pulpo, calamares, sepia, vieiras (Saint Jacques), mejillones, almejas (vongole)" },
        { name: "Platou Mediterráneo", price: "345 lei / 1200 g", description: "gambas, calamares baby, mejillones, almejas (vongole), colas de langostino" },
        { name: "Ostra N°3", price: "88 lei / 300 g", description: "" },
        { name: "Mejillones marinera", price: "22 lei / 100 g", description: "" },
        { name: "Cigalas", price: "66 lei / 100 g", description: "" },
        { name: "Calamares", price: "55 lei / 100 g", description: "" },
        { name: "Pulpo", price: "113 lei / 100 g", description: "" },
        { name: "Vieiras (Saint Jacques)", price: "75 lei / 100 g", description: "" },
        { name: "Gambas", price: "70 lei / 100 g", description: "" },
        { name: "Sepia", price: "60 lei / 100 g", description: "" }
    ],
    "paella": [
        { name: "Paëlla de Mariscos - 2 personas", price: "210 lei / 800 g", description: "calamares, vieiras, gambas, mejillones, pulpo, chorizo, arroz. pida con 25 minutos de antelación" },
        { name: "Paëlla a la «Madrilena» - 2 personas", price: "185 lei / 800 g", description: "carne de pollo, carne de cerdo, chorizo, champiñones, calabacín, berenjena, jamón serrano, arroz. pida con 25 minutos de antelación" },
        { name: "Vegetariana - 2 personas", price: "145 lei / 800 g", description: "pimiento, tomates, ajo, champiñones, berenjena, arroz. pida con 25 minutos de antelación" }
    ],
    "pasta": [
        { name: "Spaghetti Scoglio (Frutos del mar)", price: "115 lei / 400 g", description: "mejillones, almejas, gambas, vieiras, calamares, pulpo, espaguetis, ajo" },
        { name: "Pappardelle con marisco", price: "150 lei / 300 g", description: "langosta, pulpo, gambas, calamares" },
        { name: "Tagliatelle vongole (almejas)", price: "105 lei / 300 g", description: "tallarines, almejas, ajo, perejil, tomates cherry" },
        { name: "Risotto con gambas", price: "105 lei / 300 g", description: "arroz, gambas frescas" },
        { name: "Risotto con marisco", price: "115 lei / 300 g", description: "arroz, calamares, mejillones, almejas, gambas, pulpo" },
        { name: "Penne speck", price: "75 lei / 250 g", description: "speck, nata, penne" }
    ],
    "entrees": [
        { name: "Bruschetta (Tapas)", price: "11 lei / ud", description: "tomate, berenjena, paté de faisán, salmón ahumado" },
        { name: "Queso burrata", price: "85 lei / 250 g", description: "" },
        { name: "Filete de anchoa", price: "75 lei / 58 g", description: "Filete de anchoa en aceite de oliva con pan tostado, mantequilla, mozzarella, albahaca" },
        { name: "Pimientos de Padrón", price: "49 lei / 200 g", description: "Pimientos de Padrón fritos" },
        { name: "Pulpo a la Gallega", price: "122 lei / 120 g", description: "Pulpo sobre cama de patatas espolvoreado con pimentón dulce y picante" },
        { name: "Aperitivos", price: "72 lei", description: "San Danielle 20g, salami Italia Felino 20g, salami de la casa 20g, requesón 50g, tomates, pimiento, pepino 50g, aceitunas 30g" }
    ],
    "salads": [
        { name: "Ensalada de rúcula con tomates cherry y parmesano", price: "48 lei / 300 g", description: "" },
        { name: "Ensalada de atún", price: "75 lei / 300 g", description: "atún, atún en aceite, tomates cherry, ensalada mixta, aceitunas, rúcula, pimiento" },
        { name: "Ensalada de gambas", price: "94 lei / 300 g", description: "ensalada iceberg, gambas, tomates cherry, aderezo" },
        { name: "Ensalada de sepia", price: "94 lei / 300 g", description: "ensalada iceberg, sepia, tomates cherry, aderezo" },
        { name: "Ensalada de salmón", price: "78 lei / 300 g", description: "mezcla de ensalada verde, ensalada iceberg, salmón, salmón ahumado, aderezo de la casa" }
    ],
    "soups": [
        { name: "Sopas de crema de verduras", price: "42 lei / 300 g", description: "" },
        { name: "Sopa de faisán con fideos", price: "42 lei / 300 g", description: "" },
        { name: "Sopa de pescado y marisco", price: "88 lei / 300 g", description: "" }
    ],
    "dessert": [
        { name: "El Postre del Chef", price: "41 lei", description: "" },
        { name: "Volcán de Chocolate (Lava Cake)", price: "53 lei", description: "" }
    ]
}

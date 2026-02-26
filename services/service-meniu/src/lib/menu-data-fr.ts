import { MenuItem, DrinkSection, MenuCategory } from "./menu-data";

export const MENU_CATEGORIES_FR: MenuCategory[] = [
    { id: "entrees", label: "Entrées", title: "Entrées" },
    { id: "salads", label: "Salades", title: "Salades" },
    { id: "pasta", label: "Pâtes et Risotto", title: "Pâtes et Risotto" },
    { id: "soups", label: "Soupes", title: "Soupes - Crèmes" },
    { id: "paella", label: "Paëlla", title: "Ema Paëlla" },
    { id: "fish", label: "Filets de Poisson Frais", title: "Filets de Poisson Frais" },
    { id: "seafood", label: "Fruits de Mer", title: "Fruits de Mer" },
    { id: "beef", label: "Bœuf Grillé", title: "Bœuf Grillé" },
    { id: "chicken-pig-lamb", label: "Poulet, Porc et Agneau", title: "Poulet, Porc et Agneau" },
    { id: "garnish", label: "Accompagnements", title: "Accompagnements" },
    { id: "dessert", label: "Dessert", title: "Dessert" },
]

export const MENU_DATA_FR: Record<string, (MenuItem | DrinkSection)[]> = {
    "beef": [
        { name: "Steak Tomahawk WAGYU", price: "143 lei / 100 g", description: "" },
        { name: "Steak Faux-filet WAGYU", price: "143 lei / 100 g", description: "" },
        { name: "Filet de bœuf WAGYU", price: "220 lei / 100 g", description: "" },
        { name: "Steak Contre-filet WAGYU", price: "147 lei / 100 g", description: "" },
        { name: "Filet de bœuf Black Angus USDA", price: "275 lei / 250 g", description: "" },
        { name: "Steak Faux-filet Black Angus USDA", price: "66 lei / 100 g", description: "" },
        { name: "Entrecôte Black Angus USDA", price: "55 lei / 100 g", description: "" },
        { name: "Steak Tomahawk Reserve Black Angus USDA", price: "66 lei / 100 g", description: "" },
        { name: "Tagliata de Bœuf Black Angus USDA", price: "225 lei / 250 g", description: "steak, roquette, tomates cerises, parmesan, ail" }
    ],
    "chicken-pig-lamb": [
        { name: "Blanc de poulet grillé", price: "70 lei / 300 g", description: "blanc de poulet, sauce chili douce et épicée, pommes de terre au four" },
        { name: "Travers de porc", price: "27 lei / 100 g", description: "" },
        { name: "Côtelettes d'agneau", price: "215 lei / 400 g", description: "côtelettes d'agneau 8 pcs, pommes de terre au four" }
    ],
    "garnish": [
        { name: "Pommes de terre au four / Salade verte", price: "18 lei", description: "" },
        { name: "Légumes grillés", price: "21 lei", description: "" },
        { name: "Asperges", price: "40 lei", description: "" }
    ],
    "fish": [
        { name: "Filets de saumon", price: "72 lei / 250 g", description: "" },
        { name: "Thon", price: "110 lei / 250 g", description: "" },
        { name: "Daurade / 100 g", price: "25 lei / 100 g", description: "" },
        { name: "Perche / (800-1000 g)", price: "35 lei / 100 g", description: "" },
        { name: "Homard", price: "Preț variabil", description: "Ce plat nécessite une commande 48h à l'avance ou selon l'offre du jour. Le prix peut varier en fonction de l'achat." }
    ],
    "seafood": [
        { name: "Plateau Royal - pour 2 personnes", price: "475 lei / 1400 g", description: "langoustines, crevettes, poulpe, calamars, seiche, Saint Jacques, moules, palourdes" },
        { name: "Plateau Méditerranéen", price: "345 lei / 1200 g", description: "crevettes, jeunes calamars, moules, palourdes, queues de langoustines" },
        { name: "Huîtres N°3", price: "88 lei / 300 g", description: "" },
        { name: "Moules marinières", price: "22 lei / 100 g", description: "" },
        { name: "Langoustines", price: "66 lei / 100 g", description: "" },
        { name: "Calamars", price: "55 lei / 100 g", description: "" },
        { name: "Poulpe", price: "113 lei / 100 g", description: "" },
        { name: "Saint Jacques", price: "75 lei / 100 g", description: "" },
        { name: "Crevettes", price: "70 lei / 100 g", description: "" },
        { name: "Seiche", price: "60 lei / 100 g", description: "" }
    ],
    "paella": [
        { name: "Paëlla aux fruits de mer - 2 personnes", price: "210 lei / 800 g", description: "calamars, Saint Jacques, crevettes, moules, poulpe, chorizo, riz. commander 25 minutes à l'avance" },
        { name: "Paëlla a la «Madrilena» - 2 personnes", price: "185 lei / 800 g", description: "poulet, porc, chorizo, champignons, courgettes, aubergines, jambon Serrano, riz. commander 25 minutes à l'avance" },
        { name: "Paëlla Végétarienne - 2 personnes", price: "145 lei / 800 g", description: "poivrons, tomates, ail, champignons, aubergines, riz. commander 25 minutes à l'avance" }
    ],
    "pasta": [
        { name: "Spaghetti Scoglio", price: "115 lei / 400 g", description: "moules, palourdes, crevettes, Saint Jacques, calamars, poulpe, spaghettis, ail" },
        { name: "Pappardelle aux fruits de mer", price: "150 lei / 300 g", description: "homard, poulpe, crevettes, calmars" },
        { name: "Tagliatelles aux palourdes", price: "105 lei / 300 g", description: "tagliatelles, palourdes, ail, persil, tomates cerises" },
        { name: "Risotto aux crevettes", price: "105 lei / 300 g", description: "riz, crevettes fraîches" },
        { name: "Risotto aux fruits de mer", price: "115 lei / 300 g", description: "riz, calamars, moules, palourdes, crevettes, poulpe" },
        { name: "Penne au speck", price: "75 lei / 250 g", description: "speck, crème fraîche, penne" }
    ],
    "entrees": [
        { name: "Bruschetta (Tapas)", price: "11 lei / pc", description: "tomates, aubergines, pâté de faisan, saumon fumé" },
        { name: "Fromage Burrata", price: "85 lei / 250 g", description: "" },
        { name: "Filet d'anchois", price: "75 lei / 58 g", description: "Filet d'anchois à l'huile d'olive avec pain grillé, beurre, mozzarella, basilic" },
        { name: "Poivrons de Padrón", price: "49 lei / 200 g", description: "Poivrons de Padrón frits" },
        { name: "Poulpe", price: "122 lei / 120 g", description: "Poulpe sur un lit de pommes de terre saupoudré de poivrons et de piments (Pulpo a la Gallega)" },
        { name: "Amuse-gueules", price: "72 lei", description: "San Daniele 20g, saucisson Italia Felino 20g, saucisson maison 20g, fromage frais 50g, tomates, poivrons, concombre 50g, olives 30g" }
    ],
    "salads": [
        { name: "Salade de roquette avec tomates cerises et parmesan", price: "48 lei / 300 g", description: "" },
        { name: "Salade de thon", price: "75 lei / 300 g", description: "thon, thon à l'huile, tomates cerises, salade mixte, olives, roquette, poivrons" },
        { name: "Salade de crevettes", price: "94 lei / 300 g", description: "salade iceberg, crevettes, tomates cerises, vinaigrette" },
        { name: "Salade de seiche", price: "94 lei / 300 g", description: "salade iceberg, seiche, tomates cerises, vinaigrette" },
        { name: "Salade au saumon", price: "78 lei / 300 g", description: "mélange de salade verte, salade iceberg, saumon, saumon fumé, vinaigrette maison" }
    ],
    "soups": [
        { name: "Soupes à la crème de légumes", price: "42 lei / 300 g", description: "" },
        { name: "Soupe de faisan aux nouilles", price: "42 lei / 300 g", description: "" },
        { name: "Soupe de poisson et fruits de mer", price: "88 lei / 300 g", description: "" }
    ],
    "dessert": [
        { name: "The Chef's Desert", price: "41 lei", description: "" },
        { name: "Lava Cake", price: "53 lei", description: "" }
    ]
}

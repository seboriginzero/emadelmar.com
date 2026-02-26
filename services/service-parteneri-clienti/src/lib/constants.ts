export const SITE_CONFIG = {
    name: "Ema del Mar",
    description: "Dacă vrei să servești cina într-un restaurant exclusivist, cochet, într-o atmosferă liniștită, atunci Ema del Mar e alegerea perfectă.",
    contact: {
        phone: ["+40 746 611 113", "+40 748 811 113"],
        email: "contact@emadelmar.originzero.art",
        address: "Strada Episcopiei 9, 310023 Arad",
    },
    socials: {
        facebook: "https://www.facebook.com/emadelmarrestaurant",
        instagram: "https://www.instagram.com/emadelmar_arad",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g298472-d5971454-Reviews-Ema_Del_Mar_Arad-Arad_Arad_County_Western_Romania_Transylvania.html",
    },
    openingHours: {
        mon: { open: "18:00", close: "23:00" },
        tue: { open: "18:00", close: "23:00" },
        wed: { open: "18:00", close: "23:00" },
        thu: { open: "18:00", close: "23:00" },
        fri: { open: "18:00", close: "23:00" },
        sat: { open: "18:00", close: "23:00" },
        sun: null, // Closed
    },
    displayHours: {
        weekdays: "Luni – Sâmbătă: 18:00 – 23:00",
        sunday: "Duminică: Închis"
    },
    banner: {
        title: "Mese și evenimente private",
        description: "Interesat de un eveniment privat impresionant? Suntem echipa de care ai nevoie. Dă-ne un telefon la +40 746 611 113."
    }
};

export const MENU_ITEMS = [
    { label: "Acasă", href: "/" },
    { label: "Despre Noi", href: "/despre-noi" },
    { label: "Meniu", href: "/meniu" },
    { label: "Evenimente", href: "/evenimente" },
    { label: "P&C", href: "/parteneri-clienti" },
    { label: "Galerie Foto", href: "/galerie" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];


export const ABOUT_TEXT = {
    title: "Povestea Noastră",
    philosophy: "Restaurant deschis din 2013",
    motto: "Ești ceea ce mănânci",
    description: [
        "Restaurantul și-a câștigat renumele în scurt timp, fiind unicul loc din Arad, unde se servește una din cele mai bune cărnuri de vită, Black Angus, gătită în diferite rețete.",
        "Nu în ultimul rând, alături de o selecție de vinuri internaționale renumite, pot fi servite diferite meniuri cu fructe de mare, precum și o Paella originală, gătită după o rețeta Spaniolă."
    ],
    directorQuote: "“Ema del Mar este un restaurant mic și cochet, cu o terasă pe timp de vară, cunoscut însă mai ales pentru calitatea excepțională a mâncării și a serviciilor. Ținta noastră este să oferim invitaților noștri o experiență de neuitat” – Nicolae Chiș, director general.",
};

export const FEATURED_DISHES = [
    {
        title: "Platou Royal",
        description: "O selecție premium de fructe de mare, ideală pentru 2 persoane.",
        image: "/images/seafood/animation/seafood-mix-platou.jpg",
        href: "/meniu#seafood",
    },
    {
        title: "Paella Valenciana",
        description: "Rețeta originală spaniolă cu orez, safran, pui și fructe de mare.",
        image: "/images/seafood/animation/Paella-cu-fructe-de-mare-2.jpg",
        href: "/meniu#paella",
    },
    {
        title: "Steak Black Angus",
        description: "Carne de vită maturată, gătită la perfecțiune pe grill.",
        image: "/images/steak/animation/steak002.jpg",
        href: "/meniu#steakhouse",
    },
];

export const EVENTS_DATA = {
    title: "Evenimente",
    subtitle: "Momente speciale, trăite cu stil",
    headerImage: "/images/events/wedding-venue.png",
    intro: {
        tag: "Servicii Premium",
        title: "Locul unde evenimentele tale prind viață",
        description: "Fie că plănuiești o cină restrânsă cu familia sau un eveniment corporate de anvergură, echipa Ema del Mar este aici pentru a se asigura că fiecare detaliu este impecabil.",
    },
    types: [
        {
            title: "Evenimente private",
            description: "Transformăm cele mai importante momente din viața ta în amintiri de neuitat. Un cadru intim, elegant și preparate rafinate pentru o celebrare perfectă.",
            image: "/images/events/wedding-venue.png",
            type: "users",
        },
        {
            title: "Evenimente Corporate",
            description: "Lansări de produse, cine de afaceri sau team-building-uri. Oferim un mediu profesionist și discret, completat de servicii de catering de top.",
            image: "/images/events/corporate-dinner.png",
            type: "calendar",
        },
        {
            title: "Evenimente anuale",
            description: "Seri tematice dedicate culturii vinului și gastronomiei fine, acompaniate de artiști locali și atmosferă relaxantă.",
            image: "/images/events/wine-tasting.png",
            type: "wine",
        }
    ],
    cta: {
        title: "Ești gata să organizezi un eveniment?",
        description: "Contactează-ne astăzi pentru a discuta detaliile și pentru a primi o ofertă personalizată care să răspundă nevoilor tale.",
        button: "Solicită Ofertă"
    }
};

export const PARTNERS_DATA = {
    title: "Parteneri și Clienți",
    subtitle: "Calitate susținută de parteneriate de încredere",
    headerImage: "/images/others/emadelmar/restaurant/interior001.jpg",
    intro: {
        tag: "Echipa Extinsă",
        title: "Excelența este un efort colectiv",
        description: "Succesul nostru se bazează pe colaborarea strânsă cu furnizori și parteneri care împărtășesc aceleași valori: prospețime, integritate și pasiune pentru excelență culinară.",
    },
    partners: [
        { name: "Valea Viilor", category: "Vinuri Premium", logo: "/images/partners/winery.png" },
        { name: "Grădina Bunicii", category: "Produse Locale", logo: "/images/partners/farm.png" },
        { name: "Elite Distillers", category: "Băuturi Fine", logo: "/images/partners/spirits.png" },
        { name: "Marea Azur", category: "Distribuție Fructe de Mare", logo: "/images/partners/winery.png" },
        { name: "Arta Gustului", category: "Carmangerie", logo: "/images/partners/farm.png" },
        { name: "Spirit of Med", category: "Ulei de Măsline", logo: "/images/partners/spirits.png" },
    ],
    gratitude: "Le mulțumim partenerilor noștri pentru că mențin standardul ridicat al ingredientelor ce ajung pe masa dumneavoastră."
};

export const RESERVATION_FORM_TEXT = {
    title: "REZERVĂRI:",
    success: {
        title: "Mulțumim!",
        message: "Cererea ta de rezervări a fost trimisă. Te vom contacta în curând pentru confirmare.",
        button: "Trimite altă cerere"
    },
    fields: {
        name: "Nume",
        phone: "Telefon",
        date: "Data",
        time: "Ora",
        guests: "Nr. Persoane",
        message: "Mesaj (Opțional)",
        submit: "REZERVĂ",
        submitting: "Se trimite..."
    }
};

export const BUSINESS_HOURS_LOGIC = {
    timezone: "Europe/Bucharest",
    openHour: 18,
    closeHour: 23,
    closedDay: "Sun",
    timeSlots: [
        "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
    ]
};

export const GALLERY_IMAGES = [
    "/images/gallery/12688133_1055842667810199_2170772423850630575_n-1.jpg",
    "/images/gallery/Dulap-condimente-Ema-del-Mar.jpg",
    "/images/gallery/Element-de-design-interior-Ema-del-Mar.jpg",
    "/images/gallery/Interior-restaurant-Ema-del-Mar-2.jpg",
    "/images/gallery/Interior-restaurant-Ema-del-Mar-3.jpg",
    "/images/gallery/Interior-restaurant-Ema-del-Mar.jpg",
    "/images/gallery/MG_0201.jpg",
    "/images/gallery/MG_3452.jpg",
    "/images/gallery/MG_3485.jpg",
    "/images/gallery/MG_3489.jpg",
    "/images/gallery/MG_3497.jpg",
    "/images/gallery/MG_3521.jpg",
    "/images/gallery/MG_4722.jpg",
    "/images/gallery/MG_4730.jpg",
    "/images/gallery/MG_4732.jpg",
    "/images/gallery/MG_4748.jpg",
    "/images/gallery/MG_4750.jpg",
    "/images/gallery/MG_4756.jpg",
    "/images/gallery/MG_4774.jpg",
    "/images/gallery/MG_4775.jpg",
    "/images/gallery/MG_4807.jpg",
    "/images/gallery/MG_4843.jpg",
    "/images/gallery/MG_4859.jpg",
    "/images/gallery/MG_4861.jpg",
    "/images/gallery/MG_4896.jpg",
    "/images/gallery/MG_4910.jpg",
    "/images/gallery/MG_4922.jpg",
    "/images/gallery/MG_4945.jpg",
    "/images/gallery/MG_4956.jpg",
    "/images/gallery/MG_4960.jpg",
    "/images/gallery/MG_4973.jpg",
    "/images/gallery/MG_5759.jpg",
    "/images/gallery/MG_5842.jpg",
    "/images/gallery/MG_7948.jpg",
    "/images/gallery/MG_7965.jpg",
    "/images/gallery/MG_7980.jpg",
    "/images/gallery/MG_7984-1.jpg",
    "/images/gallery/MG_8127.jpg",
    "/images/gallery/MG_8207-2.jpg",
    "/images/gallery/MG_8208-2.jpg",
    "/images/gallery/Platou-Tomahawk-reserve-2.jpg",
    "/images/gallery/Platou-Tomahawk-reserve-3.jpg",
    "/images/gallery/Platou-Tomahawk-reserve.jpg",
    "/images/gallery/Platou-cu-carne-de-vita-2.jpg",
    "/images/gallery/Platou-cu-carne-de-vita-3.jpg",
    "/images/gallery/Platou-cu-fructe-de-mare-2.jpg",
    "/images/gallery/Platou-cu-fructe-de-mare.jpg",
    "/images/gallery/Produse-din-oferta-Ema-del-Mar.jpg",
    "/images/gallery/Terasa-2.jpg",
    "/images/gallery/Terasa-3.jpg",
    "/images/gallery/Terasa-4.jpg",
    "/images/gallery/Terasa.jpg",
    "/images/gallery/WhatsApp-Image-2017-06-30-at-17.25.35.jpeg",
    "/images/gallery/WhatsApp-Image-2017-06-30-at-17.25.42.jpeg",
    "/images/gallery/da50e48b9d16a8454c3af0cdcfc90c4f_ema23-large.jpg",
    "/images/gallery/platou-cu-carne-de-vita-4.jpg",
    "/images/gallery/platou-cu-carne-de-vita.jpg",
    "/images/gallery/platou-cu-peste-proaspat-2.jpg",
    "/images/gallery/platou-cu-peste-proaspat.jpg"
];

export const MENU_CATEGORIES = [
    { id: "starters", label: "Aperitive & Salate", title: "Aperitive & Salate", image: "/images/menu/starters_premium.png" },
    { id: "pasta", label: "Pasta & Risotto", title: "Pasta & Risotto", image: "/images/menu/pasta_premium.png" },
    { id: "soups", label: "Supe", title: "Supe - Creme", image: "/images/menu/soups_premium.png" },
    { id: "paella", label: "Ema Paëlla", title: "Ema Paëlla", image: "/images/seafood/animation/Paella-cu-fructe-de-mare-2.jpg" },
    { id: "seafood", label: "Seafood & Fish", title: "Sea Delicacies", image: "/images/seafood/animation/seafood-mix-platou.jpg" },
    { id: "steakhouse", label: "Steakhouse", title: "Steakhouse Selections", image: "/images/steak/animation/steak002.jpg" },
    { id: "desert", label: "Desert", title: "Desert", image: "/images/menu/desert_premium.png" },
    { id: "bauturi", label: "Băuturi", title: "Băuturi", image: "/images/gallery/MG_8127.jpg" },
    { id: "vinuri", label: "Vinuri", title: "Vinuri", image: "/images/gallery/MG_8127.jpg" }
];

export const MENU_DATA: Record<string, { section: string, image?: string, items: any[] }[]> = {
    "paella": [
        {
            section: "Ema Paëlla",
            items: [
                { name: "Seafood Paëlla - 2 persoane", price: "210 lei / 800 g", description: "calamari, Saint Jacques, creveți, midii, caracatiță, chorizo, orez. Comandă cu 25 min anticipată" },
                { name: "Paëlla a la «Madrilena» - 2 persoane", price: "185 lei / 800 g", description: "carne de pui, carne de porc, chorizo, ciuperci, zuchini, vinete, șuncă Serano, orez. Comandă cu 25 min anticipată" },
                { name: "Vegetariana - 2 persoane", price: "145 lei / 800 g", description: "ardei, roșii, usturoi, ciuperci, vinete, orez. Comandă cu 25 min anticipată" }
            ]
        }
    ],
    "seafood": [
        {
            section: "Seafood",
            items: [
                { name: "Platou Royal - pentru 2 persoane", price: "475 lei / 1400 g", description: "Scampi, Creveți, Caracatiță, Calamar, Sepie, Saint Jacques, Midii, Vongole" },
                { name: "Platou Mediteranean", price: "345 lei / 1200 g", description: "Creveți, Baby Calamar, Vongole, Midii, Cozi Langustine" },
                { name: "Stridii N°3", price: "88 lei / 300 g", description: "" },
                { name: "Midii marinara", price: "22 lei / 100 g", description: "" },
                { name: "Scampi", price: "66 lei / 100 g", description: "" },
                { name: "Calamar", price: "55 lei / 100 g", description: "" },
                { name: "Caracatiță", price: "113 lei / 100 g", description: "" },
                { name: "Saint Jacques", price: "75 lei / 100 g", description: "" },
                { name: "Creveți", price: "70 lei / 100 g", description: "" },
                { name: "Sepie", price: "60 lei / 100 g", description: "" },
                { name: "Homar", price: "Preț variabil", description: "Acest sortiment se face pe bază de comandă anticipată 48 h sau în funcție de oferta zilei. Prețul poate varia în funcție de achiziție." }
            ]
        },
        {
            section: "Pește Proaspăt File",
            items: [
                { name: "Somon file", price: "72 lei / 250 g", description: "" },
                { name: "Ton", price: "110 lei / 250 g", description: "" },
                { name: "Doradă (400-600 g)", price: "25 lei / 100 g", description: "" },
                { name: "Biban (800-1000 g)", price: "35 lei / 100 g", description: "" }
            ]
        }
    ],
    "steakhouse": [
        {
            section: "Beef Grill",
            items: [
                { name: "WAGYU Tomahawk Steak", price: "143 lei / 100 g", description: "" },
                { name: "WAGYU Rib Eye Roll Steak", price: "143 lei / 100 g", description: "" },
                { name: "WAGYU Tenderloin Steak (Mușchi de vită)", price: "220 lei / 100 g", description: "" },
                { name: "WAGYU Striploin Steak", price: "147 lei / 100 g", description: "" },
                { name: "Black Angus USDA Tenderloin Steak (Mușchi de vită)", price: "275 lei / 250 g", description: "" },
                { name: "Black Angus USDA Rib Eye Roll Steak", price: "66 lei / 100 g", description: "" },
                { name: "Black Angus USDA Rib steak (Costata)", price: "55 lei / 100 g", description: "" },
                { name: "Black Angus USDA Tomahawk Steak Reserve", price: "66 lei / 100 g", description: "" },
                { name: "Black Angus USDA Beef Tagliata", price: "225 lei / 250 g", description: "steak, rucola, roșii cherry, parmezan, usturoi" }
            ]
        },
        {
            section: "Pui, Porc & Miel",
            items: [
                { name: "Piept de pui Grill", price: "70 lei / 300 g", description: "piept de pui, sos chili dulce picant, cartofi copți" },
                { name: "Coaste de porc", price: "27 lei / 100 g", description: "" },
                { name: "Cotlet de berbecuț", price: "215 lei / 400 g", description: "cotlet de berbecuț 8 buc, cartofi copți" }
            ]
        },
        {
            section: "Garnituri",
            items: [
                { name: "Cartofi copți sau Salată verde", price: "18 lei", description: "" },
                { name: "Legume grill", price: "21 lei", description: "" },
                { name: "Sparanghel", price: "40 lei", description: "" }
            ]
        }
    ],
    "pasta": [
        {
            section: "Paste & Risotto",
            items: [
                { name: "Spaghetti Scoglio", price: "115 lei / 400 g", description: "midii, vongole, creveți, calamar, caracatiță, spaghete, usturoi" },
                { name: "Pappardelle cu fructe de mare", price: "150 lei / 300 g", description: "homar, caracatiță, creveți, calamar" },
                { name: "Tagliatelle vongole", price: "105 lei / 300 g", description: "tagliatelle, vongole, usturoi, pătrunjel, roșii cherry" },
                { name: "Rissotto cu creveți", price: "105 lei / 300 g", description: "orez, creveți proaspeți, șofran" },
                { name: "Rissotto cu fructe de mare", price: "115 lei / 300 g", description: "orez, calamar, midii, vongole, creveți, caracatiță" },
                { name: "Penne speck", price: "75 lei / 250 g", description: "speck, panna, penne" }
            ]
        }
    ],
    "starters": [
        {
            section: "Antreuri",
            items: [
                { name: "Bruschetă (Tapas)", price: "11 lei / buc", description: "roșii, vinete, pate fazan, somon fume" },
                { name: "Bufala / Burrata", price: "85 lei / 250 g", description: "" },
                { name: "File de Anșoa", price: "75 lei / 58 g", description: "file de Anșoa în ulei de măsline, unt, pâine prăjită" },
                { name: "Ardei Padrón", price: "49 lei / 200 g", description: "Ardei Padrón prăjit" },
                { name: "Caracatiță", price: "122 lei / 120 g", description: "Caracatiță pe pat de cartofi presărată cu ardei dulce și ardei picant (Pulpo a la Gallega)" },
                { name: "Gustare rece", price: "72 lei", description: "San Daniele 20 g, salam Italia Felino 20 g, salam de casă 20 g, telemea 50 g, roșii, ardei, castraveți 50 g, măsline 30 g" }
            ]
        },
        {
            section: "Salate",
            items: [
                { name: "Salată rucola cu roșii cherry și parmezan", price: "48 lei / 300 g", description: "" },
                { name: "Salată de ton", price: "75 lei / 300 g", description: "ton, ton în ulei, roșii cherry, salată mixtă, rucola, ardei" },
                { name: "Salată de creveți", price: "94 lei / 300 g", description: "salată eisberg, creveți, roșii cherry, dressing" },
                { name: "Salată cu sepia", price: "94 lei / 300 g", description: "mix salată, salată eisberg, sepia, roșii cherry, dressing" },
                { name: "Salată cu somon", price: "78 lei / 300 g", description: "mix salată, salată eisberg, somon, somon fume, dressing" }
            ]
        }
    ],
    "soups": [
        {
            section: "Supe - Creme",
            items: [
                { name: "Cremă de legume", price: "42 lei / 300 g", description: "" },
                { name: "Supă de fazan cu gârteni", price: "42 lei / 300 g", description: "" },
                { name: "Supă de pește și fructe de mare", price: "88 lei / 300 g", description: "" }
            ]
        }
    ],
    "desert": [
        {
            section: "Desert",
            items: [
                { name: "The Chef's Desert", price: "41 lei", description: "" },
                { name: "Lava Cake", price: "53 lei", description: "" }
            ]
        }
    ],
    "bauturi": [
        {
            section: "Băuturi calde",
            image: "/images/menu/bauturi/coffee.png",
            items: [
                { name: "Cafea Expresso", price: "", description: "" },
                { name: "Cappuccino", price: "", description: "" },
                { name: "Latte Macchiato", price: "", description: "" },
                { name: "Ciocolată Caldă", price: "", description: "" },
                { name: "Ceai", price: "", description: "" }
            ]
        },
        {
            section: "Băuturi răcoritoare",
            image: "/images/menu/bauturi/soda.png",
            items: [
                { name: "Gama Cola", price: "", description: "" },
                { name: "Santal", price: "", description: "" },
                { name: "Limonadă", price: "", description: "" },
                { name: "Fresh De Fructe", price: "", description: "" },
                { name: "Nestea", price: "", description: "" },
                { name: "Red Bull", price: "", description: "" }
            ]
        },
        {
            section: "Apă minerală / plată",
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
                { name: "Henessy Fine De Cognac", price: "", description: "" },
                { name: "Cardenal Mendoza", price: "", description: "" }
            ]
        },
        {
            section: "Lichior / Tequilla",
            image: "/images/menu/bauturi/liqueur.png",
            items: [
                { name: "Baileys", price: "", description: "" },
                { name: "Sheridan's", price: "", description: "" },
                { name: "Limoncello", price: "", description: "" },
                { name: "Tequilla Jose Cuervo", price: "", description: "" }
            ]
        },
        {
            section: "Digestiv / Grappa",
            image: "/images/menu/bauturi/digestif.png",
            items: [
                { name: "Amaretto Disaronno", price: "", description: "" },
                { name: "Unicum", price: "", description: "" },
                { name: "Jagermeister", price: "", description: "" },
                { name: "Grappa Di Brunello", price: "", description: "" }
            ]
        }
    ],
    "vinuri": [
        {
            section: "Vinuri",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Selecție Vinuri Premium", price: "La cerere", description: "Vă rugăm să solicitați lista de vinuri ospătarului dumneavoastră." }
            ]
        }
    ]
};

export const MENU_SHARED_TEXT = {
    intro: "Toate meniurile noastre, sunt bazate pe produse proaspete și de o calitate superioară.",
    shareOn: "Share on:",
    languageSelect: "Alege limba pentru meniul complet",
    fullMenuButton: "Full Menu"
};

export const HOME_CLOSING = {
    title: "Preparate excelente, ingrediente proaspete.",
    image: "/images/acasa/03/seafood001.jpg"
};

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
            section: "WHISKY",
            image: "/images/menu/bauturi/whisky.png",
            items: [
                { name: "Chivas Regal 18 ani", price: "55,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Jack Daniel's", price: "20,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Jameson", price: "20,00 lei", description: "40 ml, 45% Conc. Alc." }
            ]
        },
        {
            section: "SINGLE MALT",
            image: "/images/menu/bauturi/whisky.png",
            items: [
                { name: "Laphroaig (Scoția)", price: "45,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Amrut (India)", price: "45,00 lei", description: "40 ml, 46% Conc. Alc." },
                { name: "Glenfiddich 15 ani (Scoția)", price: "55,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Kavalan (Taiwan)", price: "55,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Glenmorangie 10 ani (Scoția)", price: "45,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Glenmorangie 14 ani (Scoția)", price: "50,00 lei", description: "40 ml, 46% Conc. Alc." },
                { name: "Glenmorangie 16 ani (Scoția)", price: "65,00 lei", description: "40 ml, 46% Conc. Alc." },
                { name: "Macallan 12 ani (Scoția)", price: "55,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Macallan Quest (Scoția)", price: "60,00 lei", description: "40 ml, 40% Conc. Alc." }
            ]
        },
        {
            section: "VODCA",
            image: "/images/menu/bauturi/vodka.png",
            items: [
                { name: "Beluga", price: "31,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Finlandia", price: "17,00 lei", description: "40 ml, 40% Conc. Alc." }
            ]
        },
        {
            section: "COGNAC / BRANDY / RUM / ȚUICĂ",
            image: "/images/menu/bauturi/cognac.png",
            items: [
                { name: "Curvoisier VSOP", price: "35,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Henessy XO", price: "85,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Henessy Fine de Cognac", price: "35,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Matusalem", price: "50,00 lei", description: "40 ml, 50% Conc. Alc." },
                { name: "Botucal Reserva (Venezuela)", price: "47,00 lei", description: "40 ml, 50% Conc. Alc." },
                { name: "Montosa (Eu.)", price: "40,00 lei", description: "40 ml, 50% Conc. Alc." },
                { name: "Eminente 10 ani (Cuba)", price: "55,00 lei", description: "40 ml, 43.5% Conc. Alc." },
                { name: "Matusalem 10 ani (Rep. Dominicană)", price: "47,00 lei", description: "40 ml, 50% Conc. Alc." }
            ]
        },
        {
            section: "DIGESTIV / GRAPPA",
            image: "/images/menu/bauturi/digestif.png",
            items: [
                { name: "Amaretto Disaronno", price: "26,00 lei", description: "40 ml, 28% Conc. Alc." },
                { name: "Unicum", price: "26,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Jägermeister", price: "26,00 lei", description: "40 ml, 35% Conc. Alc." },
                { name: "Fernet Branca", price: "26,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Amaro Montenegro", price: "26,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Amaro Ramazzotti", price: "26,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Amaro Lucano", price: "26,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Amaro Averna", price: "26,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Grappa Romania", price: "26,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Grappa Italia", price: "49,00 lei", description: "40 ml, 40% Conc. Alc." }
            ]
        },
        {
            section: "LICHIOR / TEQUILA",
            image: "/images/menu/bauturi/liqueur.png",
            items: [
                { name: "Baileys", price: "22,00 lei", description: "40 ml, 17% Conc. Alc." },
                { name: "Sheridan's", price: "22,00 lei", description: "40 ml, 15.5% Conc. Alc." },
                { name: "Limoncello", price: "22,00 lei", description: "40 ml, 32% Conc. Alc." },
                { name: "Tequila Jose Cuervo", price: "22,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Tequila Aha Toro (Mexic) - 100% agave", price: "40,00 lei", description: "40 ml, 40% Conc. Alc." },
                { name: "Afinată", price: "22,00 lei", description: "40 ml, 28% Conc. Alc." },
                { name: "Vișinată", price: "22,00 lei", description: "40 ml, 28% Conc. Alc." }
            ]
        },
        {
            section: "VERMOUTH / BITTER",
            image: "/images/menu/bauturi/cocktails.png",
            items: [
                { name: "Martini Bianco", price: "20,00 lei", description: "40 ml, 16% Conc. Alc." },
                { name: "Campari", price: "22,00 lei", description: "40 ml, 28.5% Conc. Alc." }
            ]
        },
        {
            section: "COCKTAILS",
            image: "/images/menu/bauturi/cocktails.png",
            items: [
                { name: "Mojito", price: "50,00 lei", description: "300 ml, Rom alb, lime, mentă, zahăr, apă minerală" },
                { name: "Negroni", price: "50,00 lei", description: "110 ml, Gin, Campari, vermut roșu dulce, portocală" },
                { name: "Amaretto Sour", price: "50,00 lei", description: "120 ml, Amaretto, lămâie, sirop de zahăr, spumă fină" },
                { name: "Espresso Martini", price: "50,00 lei", description: "100 ml, Vodkă, lichior de cafea, espresso proaspăt" },
                { name: "Old Fashioned", price: "50,00 lei", description: "90 ml, Bourbon, bitter aromat, zahăr, coajă de portocală" },
                { name: "Royal refresher", price: "50,00 lei", description: "300 ml, Gin, castravete, mentă, lime, zahăr, prosecco" },
                { name: "Aperol Spritz", price: "50,00 lei", description: "350 ml, Aperol, prosecco, apă minerală, portocală" },
                { name: "Limoncello Spritz", price: "50,00 lei", description: "350 ml, Limoncello, prosecco, apă minerală, lămâie" },
                { name: "Hugo Spritz", price: "50,00 lei", description: "350 ml, Prosecco, sirop de soc, apă minerală, lime & mentă" }
            ]
        },
        {
            section: "SANGRIA",
            image: "/images/menu/bauturi/cocktails.png",
            items: [
                { name: "Sangria Roja", price: "65,00 lei", description: "1L, Vin roșu, brandy, portocală, măr, lămâie, apă minerală" },
                { name: "Sangria Blanca", price: "65,00 lei", description: "1L, Vin alb, lichior de portocale, piersică, lime, mentă, apă minerală" },
                { name: "Sangria pahar", price: "35,00 lei", description: "250 ml" }
            ]
        },
        {
            section: "BERE",
            image: "/images/menu/bauturi/bere.jpg",
            items: [
                { name: "Ciuc", price: "18,00 lei", description: "330 ml, 5.00% Conc. Alc." },
                { name: "Ciuc radler", price: "18,00 lei", description: "330 ml, 1.90% Conc. Alc." },
                { name: "Ciuc - draught 400ml", price: "18,00 lei", description: "400 ml, 5.00% Conc. Alc." },
                { name: "Ciuc - draught 300ml", price: "16,00 lei", description: "300 ml, 5.00% Conc. Alc." },
                { name: "Heineken", price: "18,00 lei", description: "330 ml, 5.00% Conc. Alc." },
                { name: "Ursus", price: "18,00 lei", description: "330 ml, 5.00% Conc. Alc." },
                { name: "Corona", price: "22,00 lei", description: "330 ml, 4.60% Conc. Alc." },
                { name: "Paulaner Hefe - Weissbier", price: "25,00 lei", description: "500 ml, 5.50% Conc. Alc." },
                { name: "Augustiner Hell", price: "25,00 lei", description: "500 ml, 5.20% Conc. Alc." },
                { name: "Clausthaler - fără alcool", price: "20,00 lei", description: "330 ml" }
            ]
        },
        {
            section: "BĂUTURI RĂCORITOARE",
            image: "/images/menu/bauturi/soda.png",
            items: [
                { name: "Gama Cola", price: "19,00 lei", description: "330 ml" },
                { name: "Limonada", price: "22,00 lei", description: "500 ml" },
                { name: "Fresh de fructe", price: "22,00 lei", description: "250 ml" },
                { name: "Nestea", price: "19,00 lei", description: "500 ml" },
                { name: "Red Bull", price: "22,00 lei", description: "250 ml" }
            ]
        },
        {
            section: "APĂ MINERALĂ / PLATĂ",
            image: "/images/menu/bauturi/water.png",
            items: [
                { name: "Perier", price: "19,00 lei", description: "330 ml" },
                { name: "Perenna 330ml", price: "16,00 lei", description: "330 ml" },
                { name: "Perenna 750ml", price: "19,00 lei", description: "750 ml" },
                { name: "Apă naturală Nazzuro 500 ml", price: "10,00 lei", description: "500 ml" },
                { name: "Apă naturală Nazzuro 700 ml", price: "13,00 lei", description: "700 ml" },
                { name: "Apă naturală Nazzuro 750 ml", price: "15,00 lei", description: "750 ml" },
                { name: "Apă naturală Nazzuro 1 litru", price: "17,00 lei", description: "1 litru" }
            ]
        },
        {
            section: "BĂUTURI CALDE",
            image: "/images/menu/bauturi/coffee.png",
            items: [
                { name: "Cafea expresso", price: "15,00 lei", description: "" },
                { name: "Cappuccino", price: "17,00 lei", description: "" },
                { name: "Latte macchiato", price: "17,00 lei", description: "" },
                { name: "Ciocolată caldă", price: "19,00 lei", description: "" },
                { name: "Ceai", price: "15,00 lei", description: "" }
            ]
        }
    ],
    "vinuri": [
        {
            section: "VIN LA PAHAR - 0,15 L (ALB)",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Pinot Grigio Tenuta Ulisse", price: "36,00 lei", description: "" },
                { name: "Bianco Tenuta Ulisse", price: "36,00 lei", description: "" },
                { name: "Chardonnay", price: "36,00 lei", description: "" },
                { name: "Fetească Regală", price: "36,00 lei", description: "" },
                { name: "Sauvignon Blanc", price: "36,00 lei", description: "" },
                { name: "Mustoasă", price: "40,00 lei", description: "" }
            ]
        },
        {
            section: "VIN LA PAHAR - 0,15 L (ROSÉ)",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Rosé Tenuta Ulisse", price: "36,00 lei", description: "" },
                { name: "Rosa Marina Sardegna", price: "32,00 lei", description: "" },
                { name: "Rosé Five Roses - Puglia", price: "35,00 lei", description: "" },
                { name: "Villa Santera - Puglia", price: "32,00 lei", description: "" }
            ]
        },
        {
            section: "VIN LA PAHAR - 0,15 L (ROȘU)",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Merlot - Friuli", price: "38,00 lei", description: "" },
                { name: "Cabernet Dradara", price: "40,00 lei", description: "" },
                { name: "Fetească Neagră Dradara", price: "40,00 lei", description: "" }
            ]
        },
        {
            section: "PROSECCO LA PAHAR - 0,15 L",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Prosecco Valdobbiadene", price: "26,00 lei", description: "" },
                { name: "Prosecco 0.0% (fără alcool)", price: "26,00 lei", description: "" }
            ]
        },

        {
            section: "VIN ALB STICLĂ 0.75L - ROMÂNIA",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Fetească Regală", price: "180,00 lei", description: "Crama Dradara" },
                { name: "Sauvignon Blanc", price: "180,00 lei", description: "Crama Dradara" },
                { name: "Mustoasă", price: "200,00 lei", description: "Crama Dradara" },
                { name: "Chardonnay White Queen", price: "225,00 lei", description: "Crama Ferdi" }
            ]
        },
        {
            section: "VIN ALB STICLĂ 0.75L - IMPORT ITALIA",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Sauvignon Blanc", price: "195,00 lei", description: "Crama Tunela - Friuli" },
                { name: "Pinot Grigio", price: "195,00 lei", description: "Crama Tunela - Friuli" },
                { name: "Bianco", price: "180,00 lei", description: "Crama Tenuta Ulisse" },
                { name: "Pinot Grigio", price: "180,00 lei", description: "Crama Tenuta Ulisse" },
                { name: "Pecorino 10 Vendemmie", price: "245,00 lei", description: "Crama Tenuta Ulisse" }
            ]
        },
        {
            section: "VINURI ROSÉ 0.75L",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Villa Santera - Puglia", price: "160,00 lei", description: "" },
                { name: "Five Roses - Puglia", price: "175,00 lei", description: "" },
                { name: "Tenuta Ulisse Rosé", price: "180,00 lei", description: "" },
                { name: "Rosa Marina - Sardegna", price: "160,00 lei", description: "" },
                { name: "Minuty", price: "195,00 lei", description: "" }
            ]
        },
        {
            section: "VIN ROȘU STICLĂ 0.75L - ROMÂNIA",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Cabernet Sauvignon", price: "200,00 lei", description: "Crama Dradara" },
                { name: "Fetească Neagră", price: "200,00 lei", description: "Crama Dradara" },
                { name: "Cuvée Tania", price: "490,00 lei", description: "Crama Ferdi – Dealu Mare" },
                { name: "Senior Malbec", price: "350,00 lei", description: "Crama Ferdi – Dealu Mare" },
                { name: "Mister S Legend Sirah", price: "340,00 lei", description: "Crama Ferdi – Dealu Mare" },
                { name: "Red King Legend Cabernet", price: "275,00 lei", description: "Crama Ferdi – Dealu Mare" },
                { name: "Grand Cru", price: "750,00 lei", description: "Petrovaselo - Crama" },
                { name: "Ovas", price: "250,00 lei", description: "Petrovaselo - Crama" }
            ]
        },
        {
            section: "VIN ROȘU STICLĂ 0.75L - INTERNAȚIONAL",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Cabernet Marion", price: "250,00 lei", description: "Crama Marion Veneto" },
                { name: "Amarone", price: "375,00 lei", description: "Crama Marion Veneto" },
                { name: "Corte Level Amarone", price: "250,00 lei", description: "Crama Marion Veneto" },
                { name: "Ripasso Valpolicella", price: "150,00 lei", description: "Crama Marion Veneto" },
                { name: "Amarone", price: "490,00 lei", description: "Fratelli Giuliari" },
                { name: "Rosso Veneto", price: "370,00 lei", description: "Fratelli Giuliari" },
                { name: "10 Vendemmie", price: "285,00 lei", description: "Abruzzo" },
                { name: "Negroamaro San Marzano", price: "300,00 lei", description: "Puglia" },
                { name: "Primitivo di Manduria", price: "300,00 lei", description: "Puglia" }
            ]
        },
        {
            section: "ȘAMPANIE",
            image: "/images/gallery/MG_8127.jpg",
            items: [
                { name: "Spumant Rosé Sardegna", price: "40,00 lei", description: "0,15 l" },
                { name: "Spumant Franciacorta", price: "58,00 lei", description: "0,15 l" },
                { name: "Spumant Cava", price: "26,00 lei", description: "0,15 l" }
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

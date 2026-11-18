let foodCategories = [
    "Starters",
    "Mains",
    "Sides",
    "Dessert"
];

let starters = [
    {
        "name": "Bruschetta",
        "description": "gewürzte Tomatenwürfel auf leckerem Baguette",
        "price": 6.95,
        "inBasket": false,
    },
    {
        "name": "Carpaccio",
        "description": "zartes Beef mit hochwertigem Olivenöl gewürzt",
        "price": 9.95,
        "inBasket": false,
    },
    {
        "name": "Vitello Tonnato",
        "description": "zartes Beef mit leckerer Tuna-Creme & Kapern",
        "price": 9.95,
        "inBasket": false,
    },
    {
        "name": "gemischter Beilagensalat",
        "description": "knackiger Salat mit Honig-Senf-Dressing",
        "price": 7.95,
        "inBasket": false,
    }

];

let mains = [
    {
        "subcategoryName": "Pizza",
        "details": [
            {
                "name": "Margherita",
                "description": "frische Tomatensauce, Mozzarella",
                "price": 8.95,
                "inBasket": false,
            },
            {
                "name": "Tonno",
                "description": "frische Tomatensauce, Mozzarella, Thunfisch, Zwiebeln",
                "price": 11.95,
                "inBasket": false,
            },
            {
                "name": "Hawaii",
                "description": "frische Tomatensauce, Mozzarella, Schinken, Ananas",
                "price": 11.95,
                "inBasket": false,
            },
            {
                "name": "Capriciosa",
                "description": "frische Tomatensauce, Mozzarella, Schinken, Pilze, Thunfisch",
                "price": 12.95,
                "inBasket": false,
            }
        ]
    },

    {
        "subcategoryName": "Pasta",
        "details": [
            {
                "name": "Pomodoro",
                "description": "Penne, frische Tomatensauce, Parmesan",
                "price": 9.95,
                "inBasket": false,
            },
            {
                "name": "Bolognese",
                "description": "Spaghetti, frische Hackfleischsauce, Parmesan",
                "price": 9.95,
                "inBasket": false,
            },
            {
                "name": "Carbonara",
                "description": "Spaghetti, Sahnesauce, Schinken, Parmesan",
                "price": 9.95,
                "inBasket": false,
            },
        ]
    },

    {
        "subcategoryName": "Burger",
        "details": [
            {
                "name": "All Meat Burger",
                "description": "Rind, Speck, Gurken, Käse, Ketchup, BBQ sauce",
                "price": 15.95,
                "inBasket": false,
            },
            {
                "name": "Beef Red Burger",
                "description": "Rind, Käse, Tomaten, Salat, Zwiebeln",
                "price": 14.95,
                "inBasket": false,
            },
            {
                "name": "Big Chicken Burger",
                "description": "Hähnchen, Käse, Tomaten, Salat, Zwiebeln, Pfeffer",
                "price": 14.95,
                "inBasket": false,
            }
        ]
    },

    {
        "subcategoryName": "Salad",
        "details": [
            {
                "name": "Warm Beef Rucola Salad",
                "description": "Rind, Rucola, Salat, Feta, Cherry Tomaten, getrocknete Tomaten, Balsamico-Dressing",
                "price": 15.95,
                "inBasket": false,
            },
            {
                "name": "Ceasar Salad",
                "description": "knackiger Salat mit zartem Hähnchen & Parmesan",
                "price": 10.95,
                "inBasket": false,
            },
            {
                "name": "Salat mit Meeresfrüchten",
                "description": "Salat, Cherry Tomaten, Zwiebeln, Muscheln, Tintenfisch, Shrimps, Honig-Senf-Dressing",
                "price": 14.95,
                "inBasket": false,
            },
            {
                "name": "Salat mit Tofu",
                "description": "Salat, Cherry Tomaten, Gurke, Spinat, Edamame, Tofu, Erdnüsse",
                "price": 14.95,
                "inBasket": false,
            }
        ]
    }

];

let dessert = [
    {
        "name": "Tiramisu",
        "price": 7.95,
        "inBasket": false,
    },
    {
        "name": "American Cheesecake",
        "price": 5.95,
        "inBasket": false,
    },
    {
        "name": "Mascarpone mit Erdbeersauce",
        "price": 6.95,
        "inBasket": false,
    },
    {
        "name": "Carrot Cake",
        "price": 3.95,
        "inBasket": false,
    },
];

let sides = [
    {
        "name": "Pommes",
        "price": 3.95,
        "inBasket": false,
    },
    {
        "name": "Süßkartoffelpommes",
        "price": 4.95,
        "inBasket": false,
    },
    {
        "name": "Kartoffelspalten",
        "price": 3.95,
        "inBasket": false,
    },
    {
        "name": "Gemüsesticks",
        "price": 3.95,
        "inBasket": false,
    }
]

let startersImages = [
    "ImgBruschetta.jpg", "ImgCarpaccio.jpg", "ImgVitelloTonnato.jpeg", "ImgBeilagensalat.jpg"
];

let sidesImages = [
    "ImgPommes.jpg", "ImgSweetPotatoes.jpg", "ImgKartoffelspalten.jpg", "ImgGemuesesticks.jpeg"
];

let dessertImages = [
    "ImgTiramisu.jpg", "ImgCheesecake.jpeg", "ImgMascarpone.jpeg", "ImgCarrotCake.jpg"
];


let pizzaImages = [
    "ImgMargherita.jpg", "ImgTonno.jpeg", "ImgHawaii.jpeg", "ImgCapriciosa.jpeg" 
];

let pastaImages = [
    "ImgPomodoro.jpeg", "ImgBolognese.jpeg", "ImgCarbonara.jpeg"
];

let burgerImages = [
    "ImgAllMeat.jpg", "ImgBeefRed.jpg", "ImgBigChicken.jpg"
];

let saladImages = [
    "ImgWarmBeefRucola.jpg", "ImgCaesarSalad.jpeg", "ImgSeafood.jpg", "ImgTofu.jpg"
];

let allMainDishImages = [
    pizzaImages, pastaImages, burgerImages, saladImages
]

let basket = []
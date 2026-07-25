export const drinkCategories = [
  {
    id: "wasser",
    title: "Wasser",
    group: "Alkoholfrei",
    priceLabels: ["0,3 l", "0,5 l"],
    items: [
      {
        name: "Wasser still",
        prices: ["2,90 €", "5,90 €"],
      },
      {
        name: "Wasser spritzig",
        prices: ["2,90 €", "5,90 €"],
      },
    ],
  },

  {
    id: "softdrinks",
    title: "Softdrinks",
    group: "Alkoholfrei",
    note: "Größe laut aktueller Karte noch nicht eindeutig",
    items: [
      {
        name: "Cola",
        price: "4,30 €",
      },
      {
        name: "Cola Zero",
        price: "4,30 €",
      },
      {
        name: "Cola-Mix",
        price: "4,30 €",
      },
      {
        name: "Orangenlimo",
        price: "4,30 €",
      },
      {
        name: "Zitronenlimo",
        price: "4,30 €",
      },
    ],
  },

  {
    id: "saefte",
    title: "Säfte",
    group: "Alkoholfrei",
    size: "0,5 l",
    items: [
      {
        name: "Apfel trüb",
        price: "4,80 €",
      },
      {
        name: "Orange",
        price: "4,80 €",
      },
      {
        name: "Johannisbeere",
        price: "4,80 €",
      },
      {
        name: "Maracuja",
        price: "4,80 €",
      },
      {
        name: "Saftschorle",
        price: "4,30 €",
      },
    ],
  },

  {
    id: "eistee",
    title: "Trade-Island-Eistee",
    group: "Alkoholfrei",
    size: "0,33-l-Flasche",
    items: [
      {
        name: "Peach",
        price: "3,90 €",
      },
      {
        name: "Peach Zero",
        price: "3,90 €",
      },
      {
        name: "Lemon-Lime",
        price: "3,90 €",
      },
      {
        name: "Blueberry",
        price: "3,90 €",
      },
      {
        name: "Mango-Passion",
        price: "3,90 €",
      },
      {
        name: "Raspberry-Peach",
        price: "3,90 €",
      },
    ],
  },

  {
    id: "homemade-limos",
    title: "Homemade Limos",
    group: "Alkoholfrei",
    items: [
      {
        name: "Brombeere – Limette",
        price: "5,90 €",
      },
      {
        name: "Passion – Ananas",
        price: "5,90 €",
      },
      {
        name: "Holunder – Minze",
        price: "5,90 €",
      },
    ],
  },

  {
    id: "effect",
    title: "Effect Energy",
    group: "Alkoholfrei",
    size: "0,33-l-Dose",
    items: [
      {
        name: "Classic",
        price: "3,50 €",
      },
      {
        name: "Zero",
        price: "3,50 €",
      },
      {
        name: "Black Acai",
        price: "3,50 €",
      },
      {
        name: "Coconut Blueberry",
        price: "3,50 €",
      },
    ],
  },

  {
    id: "bier",
    title: "Bier",
    group: "Vom Fass & aus der Flasche",
    priceLabels: ["Größe", "Preis"],
    items: [
      {
        name: "Maisel’s Weisse Original",
        prices: ["0,5 l", "4,50 €"],
      },
      {
        name: "Maisel’s Weisse alkoholfrei",
        prices: ["0,5 l", "4,50 €"],
      },
      {
        name: "Maisel’s Weisse Kristall",
        prices: ["0,5 l", "4,50 €"],
      },
      {
        name: "Bayreuther Hell vom Fass",
        prices: ["0,5 l", "4,20 €"],
      },
      {
        name: "Bayreuther Hell alkoholfrei",
        prices: ["0,5 l", "4,20 €"],
      },
      {
        name: "Aktien Zwick’l vom Fass",
        prices: ["0,5 l", "4,20 €"],
      },
      {
        name: "Aktien Landbier Dunkel",
        prices: ["0,5 l", "4,50 €"],
      },
      {
        name: "Radler",
        prices: ["0,5 l", "4,00 €"],
      },
      {
        name: "Maisel & Friends Pale Ale",
        prices: ["0,33 l", "4,50 €"],
      },
      {
        name: "Maisel & Friends Urban IPA alkoholfrei",
        prices: ["0,33 l", "4,50 €"],
      },
      {
        name: "Maisel & Friends West Coast IPA",
        prices: ["0,33 l", "4,50 €"],
      },
      {
        name: "Maisel & Friends Indian Pale Ale",
        prices: ["0,33 l", "4,50 €"],
      },
    ],
  },

  {
    id: "salitos",
    title: "Salitos",
    group: "Bier",
    size: "0,33 l",
    note: "Special Bucket: 5 bezahlen, 6 trinken",
    items: [
      {
        name: "Original",
        price: "4,50 €",
      },
      {
        name: "Ice",
        price: "4,50 €",
      },
      {
        name: "Blue",
        price: "4,50 €",
      },
      {
        name: "Mojito",
        price: "4,50 €",
      },
    ],
  },

  {
    id: "aperitif",
    title: "Aperitif",
    group: "Spritz & Secco",
    size: "0,3 l",
    items: [
      {
        name: "Aperol Spritz",
        description: "Aperol, Soda, Secco und Orange",
        price: "6,90 €",
        alcoholFreePrice: "Alkoholfrei: 5,90 €",
      },
      {
        name: "Lillet Wildberry",
        description:
          "Lillet Blanc, Wildberry und gemischte Beeren",
        price: "6,90 €",
        alcoholFreePrice: "Alkoholfrei: 5,90 €",
      },
      {
        name: "Limoncello Spritz",
        description:
          "Limoncello, Secco, Soda, Minze und Zitrone",
        price: "6,90 €",
      },
      {
        name: "Sarti Spritz",
        description: "Sarti Rosa, Secco, Soda und Limette",
        price: "6,90 €",
      },
      {
        name: "Monty’s Spritz",
        description:
          "Zutaten sind in der aktuellen Getränkekarte nicht angegeben.",
        price: "6,90 €",
      },
      {
        name: "Spritz Tower",
        description:
          "6 Spritz eurer Wahl im Aperitif-Ständer",
        price: "30,00 €",
        featured: true,
      },
      {
        name: "Scavi & Ray Prosecco DOC Frizzante",
        description: "0,1 l",
        price: "4,00 €",
      },
    ],
  },

  {
    id: "weisswein",
    title: "Weißwein",
    group: "Wein",
    size: "0,2 l",
    items: [
      {
        name: "Hammel & Cie Blaue Stunde „Sauvignon Blanc“",
        price: "6,90 €",
      },
      {
        name: "Zur Schwane „Silvaner“",
        price: "6,90 €",
      },
    ],
  },

  {
    id: "rotwein",
    title: "Rotwein",
    group: "Wein",
    size: "0,2 l",
    items: [
      {
        name: "Merlot Rocca Veneto",
        price: "7,10 €",
      },
      {
        name: "Doppio Passo Primitivo Salento",
        price: "7,10 €",
      },
    ],
  },

  {
    id: "rose",
    title: "Rosé",
    group: "Wein",
    size: "0,2 l",
    items: [
      {
        name: "Epicuro Rosato Puglia",
        price: "6,90 €",
      },
      {
        name: "Hammel & Cie „New Chicks on the Block“",
        price: "6,90 €",
      },
    ],
  },

  {
    id: "weinschorle",
    title: "Weinschorle",
    group: "Wein",
    note: "Süß oder sauer",
    priceLabels: ["Größe", "Preis"],
    items: [
      {
        name: "Weinschorle",
        prices: ["0,4 l", "5,80 €"],
      },
      {
        name: "Weinschorle",
        prices: ["1,0 l", "13,50 €"],
      },
    ],
  },

  {
    id: "cocktails",
    title: "Cocktails",
    group: "Cocktails",
    items: [
      {
        name: "Mojito",
        description:
          "Rum, Minze, brauner Zucker, Limettensaft und Soda",
        price: "8,50 €",
      },
      {
        name: "Espresso Martini",
        description:
          "9 Mile Vodka, Espresso, Kahlua und Zuckersirup",
        price: "8,50 €",
      },
      {
        name: "Pornstar Martini",
        description:
          "9 Mile Vodka, Vanillesirup, Passoa, Limettensaft und Secco",
        price: "8,50 €",
      },
      {
        name: "Touchdown",
        description:
          "9 Mile Vodka, Apricot Brandy, Zitronensaft, Maracujasaft und Grenadine",
        price: "8,50 €",
      },
      {
        name: "Quetschn Mule",
        description:
          "9 Mile Vodka, Ginger Beer, Limettensaft und Pfirsichlikör",
        price: "8,50 €",
      },
      {
        name: "Monty’s Garden",
        description: "Gin, Zitronensaft und Basilikum",
        price: "8,50 €",
      },
      {
        name: "Long Island Iced Tea",
        description:
          "Weißer Rum, 9 Mile Vodka, Tequila, Gin, Orangenlikör, Limettensaft, Zuckersirup und Cola",
        price: "9,80 €",
      },
      {
        name: "Bayreuth Sour",
        description:
          "Gin, Zitronensaft, Zuckersirup, Eiweiß und Angostura",
        price: "8,50 €",
      },
    ],
  },

  {
    id: "alkoholfreie-cocktails",
    title: "Alkoholfreie Cocktails",
    group: "Cocktails",
    items: [
      {
        name: "Virgin Mojito",
        description:
          "Limettensaft, brauner Zucker, Minze und Ginger Ale",
        price: "6,80 €",
      },
      {
        name: "Ipanema",
        description:
          "Ginger Ale, Maracujanektar, brauner Zucker, Limette und Minze",
        price: "6,80 €",
      },
    ],
  },

  {
    id: "longdrinks",
    title: "Longdrinks",
    group: "Spirituose und Filler nach Wahl",
    price: "Je 7,80 €",
    spirits: [
      "9 Mile Vodka",
      "Sears Gin",
      "Havanna Club",
      "Jack (Y) Daniels",
      "Salitos Tequila Silver",
    ],
    fillers: [
      "Cola",
      "Cola Zero",
      "Effect Energy – alle Sorten",
      "Granini Säfte – alle Sorten",
      "Goldberg Ginger Ale",
      "Goldberg Ginger Beer",
      "Goldberg Bitter Lemon",
      "Goldberg Tonic – Tonic, Hibiskus oder Yuzu",
      "Goldberg Pink Grapefruit",
      "Goldberg Wild Berry",
    ],
  },

  {
    id: "shots",
    title: "Shots",
    group: "Kurze",
    note: "Je Shot 2,50 €",
    items: [
      {
        name: "9 Mile Vodka",
        price: "2,50 €",
      },
      {
        name: "Salitos Tequila Gold",
        price: "2,50 €",
      },
      {
        name: "Salitos Tequila Silver",
        price: "2,50 €",
      },
      {
        name: "Salitos Tequila Tropical Chili",
        price: "2,50 €",
      },
      {
        name: "Jägermeister",
        price: "2,50 €",
      },
      {
        name: "Berliner Luft",
        price: "2,50 €",
      },
      {
        name: "Gurkenschnaps",
        price: "2,50 €",
      },
      {
        name: "Ficken Likör",
        price: "2,50 €",
      },
      {
        name: "Mexikaner",
        price: "2,50 €",
      },
      {
        name: "Käsekuchen",
        price: "2,50 €",
      },
      {
        name: "Ramazotti",
        price: "2,50 €",
      },
      {
        name: "Schnapskrake",
        description: "8 Shots",
        price: "16,00 €",
        featured: true,
      },
    ],
  },

  {
    id: "edelbraende",
    title: "Edel-Brände",
    group: "Spirituosen",
    items: [
      {
        name: "Williams-Christ",
        price: "4,90 €",
      },
      {
        name: "Rosen-Marille",
        price: "6,50 €",
      },
      {
        name: "Haus-Zwetschge",
        price: "4,90 €",
      },
      {
        name: "Sauer-Kirsche",
        price: "4,90 €",
      },
      {
        name: "Kräuter-Segen",
        price: "4,90 €",
      },
    ],
  },

  {
    id: "kaffee",
    title: "Kaffee & Co",
    group: "Heißgetränke",
    items: [
      {
        name: "Espresso",
        price: "2,40 €",
      },
      {
        name: "Espresso Doppio",
        price: "3,40 €",
      },
      {
        name: "Café Crema",
        description: "Auch koffeinfrei möglich",
        price: "3,50 €",
      },
      {
        name: "Cappuccino",
        price: "4,20 €",
      },
      {
        name: "Latte Macchiato",
        price: "4,50 €",
      },
      {
        name: "Heiße Schoki",
        price: "3,80 €",
      },
      {
        name: "Hafermilch oder laktosefreie Milch",
        price: "+ 0,50 €",
      },
    ],
  },

  {
    id: "tee",
    title: "Tee",
    group: "Heißgetränke",
    items: [
      {
        name: "Frischer Minztee",
        price: "3,60 €",
      },
      {
        name: "Frischer Rosmarientee",
        price: "3,60 €",
      },
      {
        name: "Frischer Ingwertee",
        price: "3,60 €",
      },
      {
        name: "Kamillentee",
        price: "3,40 €",
      },
    ],
  },

  {
    id: "milchshakes",
    title: "Milchshakes",
    group: "Süßes",
    items: [
      {
        name: "Classic Vanille",
        price: "Preis folgt",
        pricePending: true,
      },
      {
        name: "Schoko Deluxe",
        price: "Preis folgt",
        pricePending: true,
      },
      {
        name: "Erdbeer Cream",
        price: "Preis folgt",
        pricePending: true,
      },
      {
        name: "Oreo Overload",
        price: "Preis folgt",
        pricePending: true,
      },
    ],
  },
];

export const drinkNavigation = [
  {
    href: "#alkoholfrei",
    label: "Alkoholfrei",
  },
  {
    href: "#bier",
    label: "Bier",
  },
  {
    href: "#aperitif",
    label: "Aperitif & Wein",
  },
  {
    href: "#cocktails",
    label: "Cocktails",
  },
  {
    href: "#longdrinks",
    label: "Longdrinks",
  },
  {
    href: "#shots",
    label: "Shots",
  },
  {
    href: "#kaffee",
    label: "Kaffee & Tee",
  },
  {
    href: "#milchshakes",
    label: "Milchshakes",
  },
];
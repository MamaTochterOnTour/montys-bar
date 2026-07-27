export const drinkHighlights = [
  {
    number: "01",
    title: "Frisch gezapft",
    text: "Bayreuther Hell und Aktien Zwickl direkt vom Fass.",
  },
  {
    number: "02",
    title: "Hausgemachte Limos",
    text: "Fruchtige Kombinationen mit Brombeere, Ananas, Holunder und Minze.",
  },
  {
    number: "03",
    title: "Cocktails & Spritz",
    text: "Klassiker, eigene Kreationen und alkoholfreie Alternativen.",
  },
  {
    number: "04",
    title: "Für lange Abende",
    text: "Longdrinks, Shots und besondere Drinks für gemeinsame Abende.",
  },
];

export const drinkCategories = [
  {
    id: "alkoholfrei",
    navigationLabel: "Alkoholfrei",
    eyebrow: "Erfrischend ohne Alkohol",
    title: "Alkoholfreie Getränke",
    description:
      "Von Wasser und klassischen Softdrinks bis zu Eistee, Energy und hausgemachten Limonaden.",
    groups: [
      {
        title: "Wasser",
        columns: ["0,3 l", "0,5 l"],
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
        title: "Softdrinks",
        volume: "0,5 l",
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
            name: "Orangenlimonade",
            price: "4,30 €",
          },
          {
            name: "Zitronenlimonade",
            price: "4,30 €",
          },
        ],
      },
      {
        title: "Säfte",
        volume: "0,5 l",
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
        title: "Trade Island Eistee",
        volume: "0,33 l Flasche",
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
        title: "Homemade Limos",
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
        title: "Effect Energy",
        volume: "0,33 l Dose",
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
            name: "Black Açaí",
            price: "3,50 €",
          },
          {
            name: "Coconut Blueberry",
            price: "3,50 €",
          },
        ],
      },
    ],
  },

  {
    id: "bier",
    navigationLabel: "Bier",
    eyebrow: "Vom Fass und aus der Flasche",
    title: "Bier",
    description:
      "Regionale Klassiker, Weizen, Craft Beer und verschiedene Salitos-Sorten.",
    groups: [
      {
        title: "Bier",
        volume: "0,5 l",
        items: [
          {
            name: "Maisel’s Weisse Original",
            price: "4,50 €",
          },
          {
            name: "Maisel’s Weisse alkoholfrei",
            price: "4,50 €",
          },
          {
            name: "Maisel’s Weisse Kristall",
            price: "4,50 €",
          },
          {
            name: "Bayreuther Hell vom Fass",
            price: "4,20 €",
          },
          {
            name: "Bayreuther Hell alkoholfrei",
            price: "4,20 €",
          },
          {
            name: "Aktien Zwickl vom Fass",
            price: "4,20 €",
          },
          {
            name: "Aktien Landbier dunkel",
            price: "4,50 €",
          },
          {
            name: "Radler",
            price: "4,00 €",
          },
        ],
      },
      {
        title: "Maisel & Friends",
        volume: "0,33 l",
        items: [
          {
            name: "Pale Ale",
            price: "4,50 €",
          },
          {
            name: "Urban IPA alkoholfrei",
            price: "4,50 €",
          },
          {
            name: "West Coast IPA",
            price: "4,50 €",
          },
          {
            name: "Indian Pale Ale",
            price: "4,50 €",
          },
        ],
      },
      {
        title: "Salitos",
        volume: "0,33 l",
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
        special: {
          title: "Special Bucket",
          text: "6 Salitos erhalten, nur 5 bezahlen.",
        },
      },
    ],
  },

  {
    id: "aperitif",
    navigationLabel: "Aperitif",
    eyebrow: "Spritzig in den Abend",
    title: "Aperitif",
    description:
      "Spritzige Klassiker, alkoholfreie Alternativen und unser Spritz Tower für die ganze Runde.",
    groups: [
      {
        title: "Spritz",
        volume: "0,3 l",
        items: [
          {
            name: "Aperol Spritz",
            description:
              "Aperol, Soda, Secco und Orange",
            price: "6,90 €",
            secondaryPrice:
              "Alkoholfrei 5,90 €",
          },
          {
            name: "Lillet Wildberry",
            description:
              "Lillet Blanc, Wildberry und gemischte Beeren",
            price: "6,90 €",
            secondaryPrice:
              "Alkoholfrei 5,90 €",
          },
          {
            name: "Limoncello Spritz",
            description:
              "Limoncello, Secco, Soda, Minze und Zitrone",
            price: "6,90 €",
          },
          {
            name: "Sarti Spritz",
            description:
              "Sarti Rosa, Secco, Soda und Limette",
            price: "6,90 €",
          },
          {
            name: "Monty’s Spritz",
            price: "6,90 €",
          },
        ],
        special: {
          title: "Spritz Tower",
          text: "6 Spritz eurer Wahl im Aperitif-Ständer.",
          price: "30,00 €",
        },
      },
      {
        title: "Prosecco",
        volume: "0,1 l",
        items: [
          {
            name: "Scavi & Ray Prosecco DOC Frizzante",
            price: "4,00 €",
          },
        ],
      },
    ],
  },

  {
    id: "wein",
    navigationLabel: "Wein",
    eyebrow: "Weiß, Rot oder Rosé",
    title: "Wein",
    description:
      "Ausgewählte Weine und klassische Weinschorlen.",
    groups: [
      {
        title: "Weißwein",
        volume: "0,2 l",
        items: [
          {
            name: "Hammel & Cie Blaue Stunde",
            description: "Sauvignon Blanc",
            price: "6,90 €",
          },
          {
            name: "Zur Schwane",
            description: "Silvaner",
            price: "6,90 €",
          },
        ],
      },
      {
        title: "Rotwein",
        volume: "0,2 l",
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
        title: "Rosé",
        volume: "0,2 l",
        items: [
          {
            name: "Epicuro Rosato Puglia",
            price: "6,90 €",
          },
          {
            name: "Hammel & Cie New Chicks on the Block",
            price: "6,90 €",
          },
        ],
      },
      {
        title: "Weinschorle süß oder sauer",
        items: [
          {
            name: "Weinschorle",
            description: "0,4 l",
            price: "5,80 €",
          },
          {
            name: "Weinschorle",
            description: "1,0 l",
            price: "13,50 €",
          },
        ],
      },
    ],
  },

  {
    id: "cocktails",
    navigationLabel: "Cocktails",
    eyebrow: "Geschüttelt, gerührt und gemixt",
    title: "Cocktails",
    description:
      "Bekannte Klassiker und besondere Drinks mit Gin, Rum, Vodka und frischen Zutaten.",
    groups: [
      {
        title: "Cocktails",
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
              "9 Mile Vodka, Espresso, Kahlúa und Zuckersirup",
            price: "8,50 €",
          },
          {
            name: "Pornstar Martini",
            description:
              "9 Mile Vodka, Vanillesirup, Passoã, Limettensaft und Secco",
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
            description:
              "Gin, Zitronensaft und Basilikum",
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
        title: "Alkoholfreie Cocktails",
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
    ],
  },

  {
    id: "longdrinks",
    navigationLabel: "Longdrinks",
    eyebrow: "Spirituose trifft Mixer",
    title: "Longdrinks",
    description:
      "Wählt eure Spirituose und kombiniert sie mit einem Mixer eurer Wahl.",
    priceNote: "Alle Longdrinks je 7,80 €",
    groups: [
      {
        title: "Spirituosen",
        items: [
          {
            name: "9 Mile Vodka",
          },
          {
            name: "Sears Gin",
          },
          {
            name: "Havana Club",
          },
          {
            name: "Jack Daniel’s",
          },
          {
            name: "Salitos Tequila Silver",
          },
        ],
      },
      {
        title: "Mixer",
        items: [
          {
            name: "Cola",
          },
          {
            name: "Cola Zero",
          },
          {
            name: "Effect Energy",
            description: "Alle Sorten",
          },
          {
            name: "Granini Säfte",
            description: "Alle Sorten",
          },
          {
            name: "Goldberg Ginger Ale",
          },
          {
            name: "Goldberg Ginger Beer",
          },
          {
            name: "Goldberg Bitter Lemon",
          },
          {
            name: "Goldberg Tonic",
            description:
              "Tonic, Hibiskus oder Yuzu",
          },
          {
            name: "Goldberg Pink Grapefruit",
          },
          {
            name: "Goldberg Wild Berry",
          },
        ],
      },
    ],
  },

  {
    id: "shots",
    navigationLabel: "Shots",
    eyebrow: "Für die nächste Runde",
    title: "Shots & Edelbrände",
    description:
      "Klassische Shots, besondere Sorten und ausgewählte Edelbrände.",
    groups: [
      {
        title: "Shots",
        priceNote: "Je Shot 2,50 €",
        items: [
          {
            name: "9 Mile Vodka",
          },
          {
            name: "Salitos Tequila Gold",
          },
          {
            name: "Salitos Tequila Silver",
          },
          {
            name: "Salitos Tequila Tropical Chili",
          },
          {
            name: "Jägermeister",
          },
          {
            name: "Berliner Luft",
          },
          {
            name: "Gurkenschnaps",
          },
          {
            name: "Ficken Likör",
          },
          {
            name: "Mexikaner",
          },
          {
            name: "Käsekuchen",
          },
          {
            name: "Ramazzotti",
          },
        ],
        special: {
          title: "Schnapskrake",
          text: "8 Shots für die ganze Runde.",
          price: "16,00 €",
        },
      },
      {
        title: "Edelbrände",
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
    ],
  },

  {
    id: "heissgetraenke",
    navigationLabel: "Kaffee & Tee",
    eyebrow: "Warm und gemütlich",
    title: "Kaffee & Co.",
    description:
      "Kaffeespezialitäten, heiße Schokolade und verschiedene frische Tees.",
    groups: [
      {
        title: "Kaffee & Schokolade",
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
            description:
              "Auch koffeinfrei möglich",
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
            name: "Heiße Schokolade",
            price: "3,80 €",
          },
          {
            name: "Hafermilch oder laktosefreie Milch",
            price: "+ 0,50 €",
          },
        ],
      },
      {
        title: "Tee",
        items: [
          {
            name: "Frischer Minztee",
            price: "3,60 €",
          },
          {
            name: "Frischer Rosmarintee",
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
    ],
  },

  {
  id: "milkshakes",
  navigationLabel: "Milchshakes",
  eyebrow: "Cremig und süß",
  title: "Milchshakes",
  description:
    "Cremige Milchshakes in verschiedenen Sorten für den süßen Abschluss.",
  groups: [
    {
      title: "Milchshakes",
      items: [
        {
          name: "Classic Vanille",
          price: null,
        },
        {
          name: "Schoko Deluxe",
          price: null,
        },
        {
          name: "Erdbeer Cream",
          price: null,
        },
        {
          name: "Oreo Overload",
          price: null,
        },
      ],
    },
  ],
},
];
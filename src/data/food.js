export const sideChoices = [
  {
    name: "Pommes",
    extraPrice: null,
  },
  {
    name: "Süßkartoffel Fries",
    extraPrice: "1,00 €",
  },
  {
    name: "Onion Rings",
    extraPrice: null,
  },
  {
    name: "Kroketten",
    extraPrice: null,
  },
  {
    name: "Kleiner Beilagensalat",
    extraPrice: null,
  },
  {
    name: "Coleslaw",
    extraPrice: null,
  },
  {
    name: "Knoblauchbrot",
    extraPrice: null,
  },
];

export const foodCategories = [
  {
    id: "burger",
    title: "Burger",
    note: "Wähle deine Beilage",
    priceLabels: ["180 g", "380 g"],
    items: [
      {
        name: "Monty’s Burger – Special",
        prices: ["–", "16,50 €"],
      },
      {
        name: "Hamburger",
        prices: ["10,50 €", "13,50 €"],
      },
      {
        name: "Original Cheeseburger",
        prices: ["11,50 €", "14,50 €"],
      },
      {
        name: "Pulled Pork BBQ Burger",
        prices: ["13,90 €", "16,90 €"],
      },
      {
        name: "Crispy Chicken Burger",
        prices: ["12,90 €", "15,90 €"],
      },
      {
        name: "Chili Cheeseburger",
        prices: ["12,90 €", "15,90 €"],
      },
      {
        name: "Veganer Burger",
        prices: ["12,90 €", "16,90 €"],
        vegan: true,
      },
    ],
  },
  {
    id: "schnitzel",
    title: "Schnitzel",
    note: "Wähle deine Beilage",
    items: [
      {
        name: "Schnitzel Wiener Art",
        price: "14,90 €",
      },
      {
        name: "Schnitzel Barbecue Style",
        price: "16,90 €",
      },
      {
        name: "Schnitzel Western Style",
        price: "16,90 €",
      },
      {
        name: "Schnitzel Pilzrahm",
        price: "16,90 €",
      },
      {
        name: "Veganes Schnitzel",
        price: "15,90 €",
        vegan: true,
      },
      {
        name: "Pub-Trio Platte – unser Klassiker",
        price: "24,90 €",
        description:
          "Drei Schnitzel: Barbecue Style, Western Style und Pilzrahm, serviert mit Pommes.",
        featured: true,
      },
    ],
  },
  {
    id: "pulled-pork",
    title: "Pulled Pork",
    note: "Wähle deine Beilage",
    items: [
      {
        name: "Pulled Pork",
        price: "16,90 €",
      },
    ],
  },
  {
    id: "pub-snacks",
    title: "Pub Snacks",
    items: [
      {
        name: "Chicken Wings",
        price: "6,90 €",
      },
      {
        name: "Loaded Nachos",
        price: "5,90 €",
      },
      {
        name: "Chicken Stripes",
        price: "6,90 €",
      },
      {
        name: "Aufstrich mit Brot",
        price: "8,90 €",
      },
    ],
  },
  {
    id: "salate",
    title: "Salate",
    items: [
      {
        name: "Crispy Chicken Salad",
        price: "13,90 €",
      },
      {
        name: "Brotsalat",
        price: "9,90 €",
      },
      {
        name: "Veganer Salat",
        price: "9,90 €",
        vegan: true,
      },
    ],
  },
  {
    id: "loaded-fries",
    title: "Loaded Fries",
    items: [
      {
        name: "Chili Cheese Fries",
        price: "5,90 €",
      },
      {
        name: "Cheese Fries",
        price: "5,90 €",
      },
      {
        name: "Street Fries",
        price: "5,90 €",
      },
      {
        name: "Trüffel Parmesan Fries",
        price: "5,90 €",
      },
    ],
  },
  {
    id: "extra-beilagen",
    title: "Extra Beilagen",
    items: [
      {
        name: "Pommes",
        price: "4,00 €",
      },
      {
        name: "Süßkartoffel Fries",
        price: "5,00 €",
      },
      {
        name: "Onion Rings",
        price: "4,00 €",
      },
      {
        name: "Kroketten",
        price: "4,00 €",
      },
      {
        name: "Kleiner Beilagensalat",
        price: "4,00 €",
      },
      {
        name: "Coleslaw",
        price: "4,00 €",
      },
      {
        name: "Knoblauchbrot",
        price: "4,00 €",
      },
    ],
  },
  {
    id: "clubsandwiches",
    title: "Clubsandwiches",
    items: [
      {
        name: "Classic Club",
        price: "12,90 €",
      },
      {
        name: "BBQ Chicken Club",
        price: "13,90 €",
      },
      {
        name: "Veggie Club",
        price: "12,90 €",
        vegan: true,
      },
    ],
  },
  {
    id: "spare-ribs",
    title: "Spare Ribs",
    items: [
      {
        name: "Spare Ribs",
        price: "16,90 €",
        description:
          "Jeden zweiten Donnerstag – frisch für dich zubereitet.",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Frische Waffeln mit Vanilleeis & Sahne",
        price: "6,90 €",
      },
      {
        name: "American Cheesecake mit Blaubeeren",
        price: "6,90 €",
      },
    ],
  },
];
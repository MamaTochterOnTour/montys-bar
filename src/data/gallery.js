import montyImage from "../assets/images/monty.jpg";
import burgerImage from "../assets/images/food-burger.jpg";
import ribsImage from "../assets/images/food-ribs.jpg";

export const galleryCategories = [
  {
    id: "all",
    label: "Alle",
  },
  {
    id: "atmosphaere",
    label: "Atmosphäre",
  },
  {
    id: "essen",
    label: "Essen",
  },
  {
    id: "getraenke",
    label: "Getränke",
  },
  {
    id: "monty",
    label: "Monty",
  },
];

export const galleryItems = [
  {
    id: 1,
    src: montyImage,
    alt: "Monty, der Namensgeber von Monty's Pub & Kitchen",
    title: "Der Chef des Hauses",
    subtitle: "Monty",
    category: "monty",
    size: "large",
  },
  {
    id: 2,
    src: burgerImage,
    alt: "Frisch zubereiteter Burger bei Monty's",
    title: "Herzhafte Pub-Küche",
    subtitle: "Frisch zubereitet",
    category: "essen",
    size: "portrait",
  },
  {
    id: 3,
    src: ribsImage,
    alt: "Spare Ribs mit Beilagen bei Monty's",
    title: "Ehrlich serviert",
    subtitle: "Aus unserer Küche",
    category: "essen",
    size: "wide",
  },
  {
    id: 4,
    src: "",
    alt: "Gemütliche Atmosphäre bei Monty's",
    title: "Warme Pub-Atmosphäre",
    subtitle: "Bild folgt",
    category: "atmosphaere",
    size: "wide",
    placeholder: true,
  },
  {
    id: 5,
    src: "",
    alt: "Getränke an der Bar von Monty's",
    title: "Frisch gezapft",
    subtitle: "Bild folgt",
    category: "getraenke",
    size: "portrait",
    placeholder: true,
  },
  {
    id: 6,
    src: "",
    alt: "Innenbereich von Monty's Pub & Kitchen",
    title: "Ein Ort zum Bleiben",
    subtitle: "Bild folgt",
    category: "atmosphaere",
    size: "standard",
    placeholder: true,
  },
  {
    id: 7,
    src: "",
    alt: "Cocktail bei Monty's",
    title: "Cocktails & Longdrinks",
    subtitle: "Bild folgt",
    category: "getraenke",
    size: "standard",
    placeholder: true,
  },
  {
    id: 8,
    src: "",
    alt: "Team von Monty's Pub & Kitchen",
    title: "Die Menschen hinter Monty's",
    subtitle: "Teamfoto folgt",
    category: "atmosphaere",
    size: "wide",
    placeholder: true,
  },
];
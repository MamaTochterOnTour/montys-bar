import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowDown,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiCoffee,
  FiDroplet,
  FiStar,
} from "react-icons/fi";

import {
  LuBeer,
  LuCupSoda,
  LuGlassWater,
  LuMartini,
  LuWine,
} from "react-icons/lu";

import "../styles/menu.css";
import "../styles/drinks.css";

/* ======================================================
   HIGHLIGHTS
====================================================== */

const drinkFacts = [
  {
    icon: <LuBeer />,
    title: "Biere aus Bayreuth",
    text: "Helles, Zwickl, Weißbier und ausgewählte Craft-Biere.",
  },
  {
    icon: <LuMartini />,
    title: "Cocktails",
    text: "Klassiker, Monty’s Specials und alkoholfreie Alternativen.",
  },
  {
    icon: <FiClock />,
    title: "Lange Abende",
    text: "Freitags und samstags haben wir bis 3 Uhr geöffnet.",
  },
  {
    icon: <FiCoffee />,
    title: "Kaffee & Tee",
    text: "Espresso, Cappuccino, heiße Schokolade und frische Tees.",
  },
];

/* ======================================================
   KATEGORIEN
====================================================== */

const drinkCategories = [
  {
    label: "Alkoholfrei",
    id: "alkoholfrei",
  },
  {
    label: "Eistee & Limos",
    id: "eistee-limos",
  },
  {
    label: "Bier",
    id: "bier",
  },
  {
    label: "Aperitif",
    id: "aperitif",
  },
  {
    label: "Wein",
    id: "wein",
  },
  {
    label: "Cocktails",
    id: "cocktails",
  },
  {
    label: "Longdrinks",
    id: "longdrinks",
  },
  {
    label: "Shots",
    id: "shots",
  },
  {
    label: "Kaffee & Tee",
    id: "kaffee-tee",
  },
];

/* ======================================================
   GETRÄNKEDATEN
====================================================== */

const water = [
  {
    name: "Wasser still",
    smallPrice: "2,90 €",
    largePrice: "5,90 €",
  },
  {
    name: "Wasser spritzig",
    smallPrice: "2,90 €",
    largePrice: "5,90 €",
  },
];

const softdrinks = [
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
];

const juices = [
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
];

const iceTeas = [
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
];

const homemadeLimos = [
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
];

const effectEnergy = [
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
];

const beersHalfLiter = [
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
    featured: true,
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
    name: "Aktien Landbier Dunkel",
    price: "4,50 €",
  },
  {
    name: "Radler",
    price: "4,00 €",
  },
];

const craftBeers = [
  {
    name: "Maisel & Friends Pale Ale",
    price: "4,50 €",
  },
  {
    name: "Maisel & Friends Urban IPA alkoholfrei",
    price: "4,50 €",
  },
  {
    name: "Maisel & Friends West Coast IPA",
    price: "4,50 €",
  },
  {
    name: "Maisel & Friends Indian Pale Ale",
    price: "4,50 €",
  },
];

const salitos = [
  {
    name: "Salitos Original",
    price: "4,50 €",
  },
  {
    name: "Salitos Ice",
    price: "4,50 €",
  },
  {
    name: "Salitos Blue",
    price: "4,50 €",
  },
  {
    name: "Salitos Mojito",
    price: "4,50 €",
  },
];

const aperitifs = [
  {
    name: "Aperol Spritz",
    price: "6,90 €",
    description:
      "Aperol, Soda, Secco und Orange. Auch alkoholfrei für 5,90 €.",
  },
  {
    name: "Lillet Wildberry",
    price: "6,90 €",
    description:
      "Lillet Blanc, Wildberry und gemischte Beeren. Auch alkoholfrei für 5,90 €.",
  },
  {
    name: "Limoncello Spritz",
    price: "6,90 €",
    description:
      "Limoncello, Secco, Soda, Minze und Zitrone.",
  },
  {
    name: "Sarti Spritz",
    price: "6,90 €",
    description:
      "Sarti Rosa, Secco, Soda und Limette.",
  },
  {
    name: "Monty’s Spritz",
    price: "6,90 €",
    featured: true,
  },
  {
    name: "Scavi & Ray Prosecco DOC Frizzante",
    price: "4,00 €",
    description: "0,1 l",
  },
];

const wines = [
  {
    name: "Hammel & Cie Blaue Stunde Sauvignon Blanc",
    price: "6,90 €",
    description: "Weißwein · 0,2 l",
  },
  {
    name: "Zur Schwane Silvaner",
    price: "6,90 €",
    description: "Weißwein · 0,2 l",
  },
  {
    name: "Merlot Rocca Veneto",
    price: "7,10 €",
    description: "Rotwein · 0,2 l",
  },
  {
    name: "Doppio Passo Primitivo Salento",
    price: "7,10 €",
    description: "Rotwein · 0,2 l",
  },
  {
    name: "Epicuro Rosato Puglia",
    price: "6,90 €",
    description: "Rosé · 0,2 l",
  },
  {
    name: "Hammel & Cie New Chicks on the Block",
    price: "6,90 €",
    description: "Rosé · 0,2 l",
  },
];

const wineSpritzers = [
  {
    name: "Weinschorle süß oder sauer · 0,4 l",
    price: "5,80 €",
  },
  {
    name: "Weinschorle süß oder sauer · 1,0 l",
    price: "13,50 €",
  },
];

const cocktails = [
  {
    name: "Mojito",
    price: "8,50 €",
    description:
      "Rum, Minze, brauner Zucker, Limettensaft und Soda.",
  },
  {
    name: "Espresso Martini",
    price: "8,50 €",
    description:
      "9 Mile Vodka, Espresso, Kahlúa und Zuckersirup.",
  },
  {
    name: "Pornstar Martini",
    price: "8,50 €",
    description:
      "9 Mile Vodka, Vanillesirup, Passoã, Limettensaft und Secco.",
  },
  {
    name: "Touchdown",
    price: "8,50 €",
    description:
      "9 Mile Vodka, Apricot Brandy, Zitronensaft, Maracujasaft und Grenadine.",
  },
  {
    name: "Quetschn Mule",
    price: "8,50 €",
    description:
      "9 Mile Vodka, Ginger Beer, Limettensaft und Pfirsichlikör.",
  },
  {
    name: "Monty’s Garden",
    price: "8,50 €",
    description: "Gin, Zitronensaft und Basilikum.",
    featured: true,
  },
  {
    name: "Long Island Iced Tea",
    price: "9,80 €",
    description:
      "Weißer Rum, Vodka, Tequila, Gin, Orangenlikör, Limettensaft, Zuckersirup und Cola.",
  },
  {
    name: "Bayreuth Sour",
    price: "8,50 €",
    description:
      "Gin, Zitronensaft, Zuckersirup, Eiweiß und Angostura.",
  },
];

const alcoholFreeCocktails = [
  {
    name: "Virgin Mojito",
    price: "6,80 €",
    description:
      "Limettensaft, brauner Zucker, Minze und Ginger Ale.",
  },
  {
    name: "Ipanema",
    price: "6,80 €",
    description:
      "Ginger Ale, Maracujanektar, brauner Zucker, Limette und Minze.",
  },
];

const longdrinkSpirits = [
  "9 Mile Vodka",
  "Sears Gin",
  "Havana Club",
  "Jack Daniel’s",
  "Salitos Tequila Silver",
];

const longdrinkMixers = [
  "Cola",
  "Cola Zero",
  "Effect Energy",
  "Granini Säfte",
  "Ginger Ale",
  "Ginger Beer",
  "Bitter Lemon",
  "Tonic",
  "Pink Grapefruit",
  "Wild Berry",
];

const shots = [
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
    name: "Ramazzotti",
    price: "2,50 €",
  },
];

const premiumSpirits = [
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
];

const coffee = [
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
    price: "3,50 €",
    description: "Auch koffeinfrei möglich.",
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
];

const teas = [
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
];

/* ======================================================
   KOMPONENTEN
====================================================== */

function Reveal({
  children,
  className = "",
  stagger = false,
  as: Tag = "div",
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={elementRef}
      className={[
        "menu-reveal",
        "menu-reveal--up",
        stagger ? "menu-reveal--stagger" : "",
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}

function DrinkList({ items }) {
  return (
    <div className="menu-dish-list">
      {items.map((item) => (
        <div
          className={[
            "menu-dish",
            item.featured ? "menu-dish--featured" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          key={`${item.name}-${item.price}`}
        >
          <div className="menu-dish__top">
            <div className="menu-dish__name">
              <span>{item.name}</span>
            </div>

            <span
              className="menu-dish__dots"
              aria-hidden="true"
            />

            <strong>{item.price}</strong>
          </div>

          {item.description && (
            <p className="menu-dish__description">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function DrinkSizeList({ items }) {
  return (
    <div className="drink-size-list">
      <div className="drink-size-list__heading">
        <span>Getränk</span>
        <strong>0,3 l</strong>
        <strong>0,5 l</strong>
      </div>

      {items.map((item) => (
        <div
          className="drink-size-row"
          key={item.name}
        >
          <span>{item.name}</span>
          <strong>{item.smallPrice}</strong>
          <strong>{item.largePrice}</strong>
        </div>
      ))}
    </div>
  );
}

function MenuCard({
  title,
  eyebrow,
  note,
  icon,
  children,
  className = "",
}) {
  return (
    <article className={`menu-card ${className}`}>
      <header className="menu-card__header">
        <div className="menu-card__heading">
          {icon && (
            <div className="menu-card__icon">
              {icon}
            </div>
          )}

          <div>
            {eyebrow && (
              <p className="menu-card__eyebrow">
                {eyebrow}
              </p>
            )}

            <h2>{title}</h2>
          </div>
        </div>

        {note && (
          <p className="menu-card__note">
            {note}
          </p>
        )}
      </header>

      {children}
    </article>
  );
}

function LongdrinkSelection() {
  return (
    <div className="drink-longdrink-selection">
      <div>
        <p className="menu-card__eyebrow">
          1. Spirituose wählen
        </p>

        <ul>
          {longdrinkSpirits.map((spirit) => (
            <li key={spirit}>
              <FiCheck />
              {spirit}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="menu-card__eyebrow">
          2. Filler wählen
        </p>

        <ul>
          {longdrinkMixers.map((mixer) => (
            <li key={mixer}>
              <FiCheck />
              {mixer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ======================================================
   SEITE
====================================================== */

function DrinksMenu() {
  const [activeCategory, setActiveCategory] =
    useState("alkoholfrei");

  const scrollToDrinks = () => {
    document
      .getElementById("drinks-start")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="menu-page drinks-page">
      {/* HERO */}

      <section className="menu-hero drinks-hero">
        <div
          className="menu-hero__grain"
          aria-hidden="true"
        />

        <div className="menu-hero__container">
          <div className="menu-hero__content menu-load-animation menu-load-animation--left">
            <h1>
              Unsere
              <span>Getränkekarte</span>
            </h1>

            <p className="menu-hero__lead">
              Kalte Drinks. Gute Gespräche. Lange
              Abende.
            </p>

            <p className="menu-hero__text">
              Von Bayreuther Bier und hausgemachten
              Limonaden bis zu Cocktails, Spritz,
              Longdrinks und heißen Klassikern.
            </p>

            <div className="menu-hero__buttons">
              <button
                type="button"
                className="menu-button menu-button--primary"
                onClick={scrollToDrinks}
              >
                Getränkekarte entdecken
                <FiArrowDown />
              </button>

              <Link
                to="/reservierung"
                className="menu-button menu-button--secondary"
              >
                Tisch reservieren
                <FiArrowRight />
              </Link>
            </div>

            <div className="menu-hero__facts">
              <div>
                <LuBeer />

                <span>
                  Bier vom Fass
                  <small>
                    Bayreuther Hell und Aktien Zwickl
                  </small>
                </span>
              </div>

              <div>
                <LuMartini />

                <span>
                  Alkoholfreie Auswahl
                  <small>
                    Limos, Cocktails, Bier und Spritz
                  </small>
                </span>
              </div>
            </div>
          </div>

          {/* HERO OHNE BILD */}

          <div className="drinks-hero__visual menu-load-animation menu-load-animation--right">
            <div className="drinks-hero__card">
              <span className="drinks-hero__number">
                17:00
              </span>


              <h2>
                Cheers auf einen guten Abend.
              </h2>

              <div className="drinks-hero__lines">
                <span>
                  <LuBeer />
                  Bier
                </span>

                <span>
                  <LuMartini />
                  Cocktails
                </span>

                <span>
                  <LuWine />
                  Wein
                </span>

                <span>
                  <FiCoffee />
                  Kaffee
                </span>
              </div>

              <p className="drinks-hero__note">
                Freitags und samstags bis 3 Uhr
                geöffnet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}

      <section className="menu-highlights">
        <Reveal
          className="menu-highlights__container"
          stagger
        >
          {drinkFacts.map((fact) => (
            <article
              className="menu-highlight-card"
              key={fact.title}
            >
              <div className="menu-highlight-card__icon">
                {fact.icon}
              </div>

              <h2>{fact.title}</h2>
              <p>{fact.text}</p>
            </article>
          ))}
        </Reveal>
      </section>

      {/* TABS */}

      <nav
        className="menu-category-nav"
        aria-label="Kategorien der Getränkekarte"
      >
        <div
          className="menu-category-nav__inner"
          role="tablist"
        >
          {drinkCategories.map((category) => {
            const isActive =
              activeCategory === category.id;

            return (
              <button
                type="button"
                role="tab"
                id={`drink-tab-${category.id}`}
                aria-selected={isActive}
                aria-controls="drink-tab-panel"
                className={
                  isActive
                    ? "menu-category-tab is-active"
                    : "menu-category-tab"
                }
                onClick={() =>
                  setActiveCategory(category.id)
                }
                key={category.id}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* TAB-INHALT */}

      <section
        className="menu-tabs-section"
        id="drinks-start"
      >
        <div className="menu-section-container">
          <div
            id="drink-tab-panel"
            className="menu-tab-panel"
            role="tabpanel"
            aria-labelledby={`drink-tab-${activeCategory}`}
          >
            <div
              className="menu-tab-panel__content"
              key={activeCategory}
            >
              {/* ALKOHOLFREI */}

              {activeCategory === "alkoholfrei" && (
                <div className="drinks-card-grid">
                  <MenuCard
                    title="Wasser"
                    eyebrow="Still oder spritzig"
                    icon={<FiDroplet />}
                    note="0,3 l / 0,5 l"
                  >
                    <DrinkSizeList items={water} />
                  </MenuCard>

                  <MenuCard
                    title="Softdrinks"
                    eyebrow="Erfrischend kalt"
                    icon={<LuCupSoda />}
                    note="0,5 l"
                    className="menu-card--green"
                  >
                    <DrinkList items={softdrinks} />
                  </MenuCard>

                  <MenuCard
                    title="Säfte"
                    eyebrow="Fruchtig"
                    icon={<LuGlassWater />}
                    note="0,5 l"
                    className="drinks-card-grid__wide"
                  >
                    <DrinkList items={juices} />
                  </MenuCard>
                </div>
              )}

              {/* EISTEE UND LIMOS */}

              {activeCategory ===
                "eistee-limos" && (
                <div className="drinks-card-grid">
                  <MenuCard
                    title="Trade Island Eistee"
                    eyebrow="0,33-l-Flasche"
                    icon={<LuCupSoda />}
                  >
                    <DrinkList items={iceTeas} />
                  </MenuCard>

                  <MenuCard
                    title="Homemade Limos"
                    eyebrow="Hausgemacht"
                    icon={<FiStar />}
                    className="menu-card--green"
                  >
                    <DrinkList
                      items={homemadeLimos}
                    />
                  </MenuCard>

                  <MenuCard
                    title="Effect Energy"
                    eyebrow="0,33-l-Dose"
                    icon={<FiStar />}
                    className="drinks-card-grid__wide"
                  >
                    <DrinkList
                      items={effectEnergy}
                    />
                  </MenuCard>
                </div>
              )}

              {/* BIER */}

              {activeCategory === "bier" && (
                <div className="drinks-card-grid">
                  <MenuCard
                    title="Bier"
                    eyebrow="Klassiker und Fassbier"
                    note="0,5 l"
                    icon={<LuBeer />}
                  >
                    <DrinkList
                      items={beersHalfLiter}
                    />
                  </MenuCard>

                  <MenuCard
                    title="Craft-Biere"
                    eyebrow="Maisel & Friends"
                    note="0,33 l"
                    icon={<FiStar />}
                    className="menu-card--green"
                  >
                    <DrinkList items={craftBeers} />
                  </MenuCard>

                  <MenuCard
                    title="Salitos"
                    eyebrow="0,33-l-Flasche"
                    icon={<LuBeer />}
                    className="drinks-card-grid__wide"
                  >
                    <DrinkList items={salitos} />

                    <div className="menu-card__bottom-note">
                      <FiCheck />

                      <p>
                        Special Bucket: Sechs trinken
                        und fünf bezahlen.
                      </p>
                    </div>
                  </MenuCard>
                </div>
              )}

              {/* APERITIF */}

              {activeCategory === "aperitif" && (
                <div className="menu-tab-single">
                  <MenuCard
                    title="Aperitif"
                    eyebrow="Spritz und Secco"
                    note="Spritz · 0,3 l"
                    icon={<LuMartini />}
                    className="menu-card--green"
                  >
                    <DrinkList items={aperitifs} />

                    <div className="drink-special-offer">
                      <div>
                        <p className="menu-card__eyebrow">
                          Für die Runde
                        </p>

                        <h3>Spritz Tower</h3>

                        <p>
                          Sechs Spritz eurer Wahl im
                          Aperitif-Ständer.
                        </p>
                      </div>

                      <strong>30,00 €</strong>
                    </div>
                  </MenuCard>
                </div>
              )}

              {/* WEIN */}

              {activeCategory === "wein" && (
                <div className="drinks-card-grid">
                  <MenuCard
                    title="Wein"
                    eyebrow="Weiß, Rot und Rosé"
                    icon={<LuWine />}
                  >
                    <DrinkList items={wines} />
                  </MenuCard>

                  <MenuCard
                    title="Weinschorle"
                    eyebrow="Süß oder sauer"
                    icon={<LuGlassWater />}
                    className="menu-card--green"
                  >
                    <DrinkList
                      items={wineSpritzers}
                    />
                  </MenuCard>
                </div>
              )}

              {/* COCKTAILS */}

              {activeCategory === "cocktails" && (
                <div className="drinks-card-grid">
                  <MenuCard
                    title="Cocktails"
                    eyebrow="Klassiker und Specials"
                    icon={<LuMartini />}
                  >
                    <DrinkList items={cocktails} />
                  </MenuCard>

                  <MenuCard
                    title="Alkoholfreie Cocktails"
                    eyebrow="Ohne Alkohol"
                    icon={<LuGlassWater />}
                    className="menu-card--green"
                  >
                    <DrinkList
                      items={alcoholFreeCocktails}
                    />
                  </MenuCard>
                </div>
              )}

              {/* LONGDRINKS */}

              {activeCategory ===
                "longdrinks" && (
                <div className="menu-tab-single">
                  <MenuCard
                    title="Longdrinks"
                    eyebrow="Spirituose und Filler auswählen"
                    note="Je 7,80 €"
                    icon={<LuGlassWater />}
                  >
                    <LongdrinkSelection />
                  </MenuCard>
                </div>
              )}

              {/* SHOTS */}

              {activeCategory === "shots" && (
                <div className="drinks-card-grid">
                  <MenuCard
                    title="Shots"
                    eyebrow="Je Shot"
                    note="2,50 €"
                    icon={<FiStar />}
                  >
                    <DrinkList items={shots} />

                    <div className="drink-special-offer">
                      <div>
                        <p className="menu-card__eyebrow">
                          Für die Runde
                        </p>

                        <h3>Schnapskrake</h3>

                        <p>
                          Acht Shots für eure Gruppe.
                        </p>
                      </div>

                      <strong>16,00 €</strong>
                    </div>
                  </MenuCard>

                  <MenuCard
                    title="Edel-Brände"
                    eyebrow="Ausgewählte Spezialitäten"
                    icon={<FiStar />}
                    className="menu-card--green"
                  >
                    <DrinkList
                      items={premiumSpirits}
                    />
                  </MenuCard>
                </div>
              )}

              {/* KAFFEE UND TEE */}

              {activeCategory ===
                "kaffee-tee" && (
                <div className="drinks-card-grid">
                  <MenuCard
                    title="Kaffee & Co."
                    eyebrow="Heiß serviert"
                    icon={<FiCoffee />}
                  >
                    <DrinkList items={coffee} />
                  </MenuCard>

                  <MenuCard
                    title="Tee"
                    eyebrow="Klassisch oder frisch"
                    icon={<LuCupSoda />}
                    className="menu-card--green"
                  >
                    <DrinkList items={teas} />
                  </MenuCard>
                </div>
              )}
            </div>
          </div>

          {/* RESERVIERUNG */}

          <div className="menu-tabs-reservation">
            <div className="menu-tabs-reservation__text">
              <p className="menu-eyebrow">
                Lust auf einen guten Abend?
              </p>

              <h2>
                Dann reserviert euch einen Tisch.
              </h2>
            </div>

            <Link
              to="/reservierung"
              className="menu-tabs-reservation__button"
            >
              Tisch reservieren
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* HINWEISE */}

      <section className="menu-legal">
        <div className="menu-section-container menu-legal__inner">
          <p>
            Alle Preise verstehen sich inklusive
            gesetzlicher Mehrwertsteuer.
          </p>

          <p>
            Änderungen, Irrtümer und
            Angebotsänderungen vorbehalten.
          </p>
        </div>
      </section>
    </main>
  );
}

export default DrinksMenu;
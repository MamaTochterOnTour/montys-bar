import burgerImage from "../assets/images/food-burger.jpg";
import ribsImage from "../assets/images/food-ribs.jpg";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowDown,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiStar,
} from "react-icons/fi";

import {
  LuChefHat,
  LuLeaf,
} from "react-icons/lu";

import "../styles/menu.css";

const quickFacts = [
  {
    icon: <LuChefHat />,
    title: "Frisch zubereitet",
    text: "Ehrliche Pub-Küche mit guten Zutaten und viel Sorgfalt.",
  },
  {
    icon: <FiClock />,
    title: "Warme Küche",
    text: "Bis 23 Uhr – freitags und samstags sogar bis 2 Uhr nachts.",
  },
  {
  icon: <LuLeaf />,
  title: "Vegane Auswahl",
  text: "Auch vegane Burger, Schnitzel und Salate stehen auf der Karte.",
},
  {
    icon: <FiStar />,
    title: "Spare-Ribs-Abend",
    text: "Jeden ersten und dritten Donnerstag im Monat.",
  },
];

const categoryLinks = [
  {
    label: "Burger",
    id: "burger",
  },
  {
    label: "Schnitzel",
    id: "schnitzel",
  },
  {
    label: "Pulled Pork",
    id: "pulled-pork",
  },
  {
    label: "Pub Snacks",
    id: "pub-snacks",
  },
  {
    label: "Salate",
    id: "salate",
  },
  {
    label: "Loaded Fries",
    id: "loaded-fries",
  },
  {
    label: "Beilagen",
    id: "extra-beilagen",
  },
  {
    label: "Club Sandwiches",
    id: "club-sandwiches",
  },
  {
    label: "Spare Ribs",
    id: "spare-ribs",
  },
  {
    label: "Kinder",
    id: "kinder",
  },
  {
    label: "Desserts",
    id: "desserts",
  },
];

const sideChoices = [
  {
    name: "Pommes",
  },
  {
    name: "Süßkartoffel Fries",
    extra: "+ 1,00 €",
  },
  {
    name: "Onion Rings",
  },
  {
    name: "Kroketten",
  },
  {
    name: "Kleiner Beilagensalat",
  },
  {
    name: "Kartoffelsalat",
  },
  {
    name: "Coleslaw",
  },
  {
    name: "Knoblauchbrot",
  },
];

const burgers = [
  {
    name: "Monty’s Burger – Special",
    smallPrice: "–",
    largePrice: "16,50 €",
    featured: true,
  },
  {
    name: "Hamburger",
    smallPrice: "10,50 €",
    largePrice: "13,50 €",
  },
  {
    name: "Original Cheeseburger",
    smallPrice: "11,50 €",
    largePrice: "14,50 €",
  },
  {
    name: "Pulled Pork BBQ Burger",
    smallPrice: "13,90 €",
    largePrice: "16,90 €",
  },
  {
    name: "Crispy Chicken Burger",
    smallPrice: "12,90 €",
    largePrice: "15,90 €",
  },
  {
    name: "Chili Cheeseburger",
    smallPrice: "12,90 €",
    largePrice: "15,90 €",
  },
  {
    name: "Veganer Burger",
    smallPrice: "12,90 €",
    largePrice: "16,90 €",
    vegan: true,
  },
];

const schnitzel = [
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
    name: "Pub-Trio Platte",
    price: "24,90 €",
    description:
      "Drei Schnitzel: Barbecue Style, Western Style und Pilzrahm, serviert mit Pommes.",
    featured: true,
  },
];

const pulledPork = [
  {
    name: "Pulled Pork",
    price: "16,90 €",
    description:
      "Zartes Pulled Pork, frisch zubereitet und serviert.",
  },
];

const pubSnacks = [
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
];

const salads = [
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
];

const loadedFries = [
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
];

const extraSides = [
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
    name: "Kartoffelsalat",
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
];

const clubSandwiches = [
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
];

const desserts = [
  {
    name: "Frische Waffeln mit Vanilleeis & Sahne",
    price: "6,90 €",
  },
  {
    name: "American Cheesecake mit Blaubeeren",
    price: "6,90 €",
  },
];

const kidsMenu = [
  {
    name: "Cheeseburger mit Pommes",
    price: "7,90 €",
  },
  {
    name: "Chicken Nuggets",
    description: "ohne Pommes",
    price: "4,00 €",
  },
  {
    name: "Chicken Nuggets",
    description: "mit Pommes",
    price: "6,50 €",
  },
  {
    name: "Kleines Schnitzel",
    description: "mit Pommes",
    price: "7,90 €",
  },
  {
    name: "Fischstäbchen",
    description: "mit Pommes",
    price: "6,90 €",
  },
  {
    name: "3 Kugeln Eis",
    description:
      "Vanille, Schokolade oder Erdbeere mit Smarties",
    price: "3,50 €",
  },
];

function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
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
        `menu-reveal--${direction}`,
        stagger ? "menu-reveal--stagger" : "",
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--menu-reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

function DishList({ items }) {
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
          key={item.name}
        >
          <div className="menu-dish__top">
            <div className="menu-dish__name">
              <span>{item.name}</span>

              {item.vegan && (
                <LuLeaf
  className="menu-dish__leaf"
  aria-label="Veganes Gericht"
  title="Vegan"
/>
              )}
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

function BurgerList() {
  return (
    <div className="menu-burger-list">
      <div className="menu-burger-list__heading">
        <span>Gericht</span>
        <strong>180 g</strong>
        <strong>380 g</strong>
      </div>

      {burgers.map((burger) => (
        <div
          className={[
            "menu-burger-row",
            burger.featured
              ? "menu-burger-row--featured"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          key={burger.name}
        >
          <div className="menu-burger-row__name">
            <span>{burger.name}</span>

            {burger.vegan && (
              <LuLeaf
  className="menu-dish__leaf"
  aria-label="Veganer Burger"
  title="Vegan"
/>
            )}
          </div>

          <strong>{burger.smallPrice}</strong>
          <strong>{burger.largePrice}</strong>
        </div>
      ))}
    </div>
  );
}

function SideChoiceCard() {
  return (
    <aside className="menu-tab-sides">
      <p className="menu-card__eyebrow">
        Beilage inklusive
      </p>

      <h2>Wählt eure Beilage</h2>

      <p className="menu-tab-sides__intro">
        Gebt eure gewünschte Beilage einfach beim
        Bestellen mit an.
      </p>

      <div className="menu-tab-sides__list">
        {sideChoices.map((side) => (
          <div
            className="menu-tab-side"
            key={side.name}
          >
            <FiCheck />

            <span>
              {side.name}

              {side.extra && (
                <small>{side.extra}</small>
              )}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function MenuCard({
  id,
  title,
  eyebrow,
  note,
  icon,
  children,
  className = "",
}) {
  return (
    <article
      id={id}
      className={`menu-card ${className}`}
    >
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

function FoodMenu() {
  const [activeCategory, setActiveCategory] =
    useState("burger");

  const scrollToMenu = () => {
    document
      .getElementById("menu-start")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="menu-page">
      {/* HERO */}

      <section className="menu-hero">
        <div
          className="menu-hero__grain"
          aria-hidden="true"
        />

        <div className="menu-hero__container">
          <div className="menu-hero__content menu-load-animation menu-load-animation--left">
           

            <h1>
              Unsere
              <span>Speisekarte</span>
            </h1>

            <p className="menu-hero__lead">
              Ehrliche Pub-Küche. Frisch zubereitet.
              Mit Liebe serviert.
            </p>

            <p className="menu-hero__text">
              Von saftigen Burgern und Schnitzeln
              bis zu Loaded Fries, Club Sandwiches
              und süßen Klassikern: Bei Monty&apos;s
              findet jeder etwas für einen guten Abend.
            </p>


            <div className="menu-hero__facts">
              <div>
                <FiClock />

                <span>
                  Warme Küche bis 23 Uhr
                  <small>
                    Freitags und samstags bis 2 Uhr
                    nachts
                  </small>
                </span>
              </div>

              <div>
                <FiStar />

                <span>
                  Spare-Ribs-Abend
                  <small>
                    Jeden 1. und 3. Donnerstag im Monat
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="menu-hero__visual menu-load-animation menu-load-animation--right">
  <figure className="menu-hero__image menu-hero__image--main">
    <img
      src={burgerImage}
      alt="Burger bei Monty's Pub & Kitchen"
    />

    <figcaption>
      <strong>Frisch für euch</strong>
    </figcaption>
  </figure>

</div>
        </div>
      </section>

      {/* HELLE HIGHLIGHT-LEISTE */}

      <section className="menu-highlights">
        <Reveal
          className="menu-highlights__container"
          stagger
        >
          {quickFacts.map((fact) => (
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

      {/* KATEGORIE-TABS */}

<nav
  className="menu-category-nav"
  aria-label="Kategorien der Speisekarte"
>
  <div
    className="menu-category-nav__inner"
    role="tablist"
  >
    {categoryLinks.map((category) => {
      const isActive =
        activeCategory === category.id;

      return (
        <button
          type="button"
          role="tab"
          id={`menu-tab-${category.id}`}
          aria-selected={isActive}
          aria-controls="menu-tab-panel"
          className={
            isActive
              ? "menu-category-tab is-active"
              : "menu-category-tab"
          }
          onClick={() => setActiveCategory(category.id)}
          key={category.id}
        >
          {category.label}
        </button>
      );
    })}
  </div>
</nav>

{/* AKTIVE KATEGORIE */}

<section
  className="menu-tabs-section"
  id="menu-start"
>
  <div className="menu-section-container">
    <div
      id="menu-tab-panel"
      className="menu-tab-panel"
      role="tabpanel"
      aria-labelledby={`menu-tab-${activeCategory}`}
    >
      <div
        className="menu-tab-panel__content"
        key={activeCategory}
      >
        {/* BURGER */}

        {activeCategory === "burger" && (
          <div className="menu-tab-layout menu-tab-layout--with-sides menu-tab-layout--natural-height">
            <MenuCard
              title="Burger"
              eyebrow="Wählt eure Größe"
              note="Beilage inklusive"
              icon={<FiStar />}
              className="menu-card--burger"
            >
              <BurgerList />

              <div className="menu-card__bottom-note">
                <FiCheck />

                <p>
                  Zu jedem Burger könnt ihr eine
                  Beilage aus unserer Auswahl wählen.
                </p>
              </div>
            </MenuCard>

            <SideChoiceCard />
          </div>
        )}

        {/* SCHNITZEL */}

        {activeCategory === "schnitzel" && (
  <div className="menu-tab-layout menu-tab-layout--with-sides menu-tab-layout--natural-height">
    <MenuCard
      title="Schnitzel"
      eyebrow="Frisch zubereitet"
      note="Beilage inklusive"
      icon={<LuChefHat />}
    >
      <DishList items={schnitzel} />
    </MenuCard>

    <SideChoiceCard />
  </div>
)}

        {/* PULLED PORK */}

        {activeCategory === "pulled-pork" && (
  <div className="menu-tab-layout menu-tab-layout--with-sides menu-tab-layout--natural-height">
    <MenuCard
      title="Pulled Pork"
      eyebrow="Pub-Klassiker"
      note="Beilage inklusive"
      icon={<FiStar />}
    >
      <DishList items={pulledPork} />

      <div className="menu-card__bottom-note">
        <FiCheck />
        <p>
          Zu jedem Pulled Pork könnt ihr eine
          Beilage aus unserer Auswahl wählen.
        </p>
      </div>
    </MenuCard>

    <SideChoiceCard />
  </div>
)}

        {/* PUB SNACKS */}

        {activeCategory === "pub-snacks" && (
          <div className="menu-tab-single">
            <MenuCard
              title="Pub Snacks"
              eyebrow="Für den kleinen Hunger"
              icon={<FiStar />}
            >
              <DishList items={pubSnacks} />
            </MenuCard>
          </div>
        )}

        {/* SALATE */}

        {activeCategory === "salate" && (
          <div className="menu-tab-single">
            <MenuCard
              title="Salate"
              eyebrow="Frisch und knackig"
              icon={<LuLeaf />}
              className="menu-card--green"
            >
              <DishList items={salads} />
            </MenuCard>
          </div>
        )}

        {/* LOADED FRIES */}

        {activeCategory === "loaded-fries" && (
          <div className="menu-tab-single">
            <MenuCard
              title="Loaded Fries"
              eyebrow="Knusprig und herzhaft"
              icon={<FiStar />}
            >
              <DishList items={loadedFries} />
            </MenuCard>
          </div>
        )}

        {/* EXTRA BEILAGEN */}

        {activeCategory === "extra-beilagen" && (
          <div className="menu-tab-single">
            <MenuCard
              title="Extra Beilagen"
              eyebrow="Darf es noch etwas dazu sein?"
              icon={<FiCheck />}
              className="menu-card--green"
            >
              <DishList items={extraSides} />
            </MenuCard>
          </div>
        )}

        {/* CLUB SANDWICHES */}

        {activeCategory === "club-sandwiches" && (
  <div className="menu-tab-layout menu-tab-layout--with-sides menu-tab-layout--natural-height">
    <MenuCard
      title="Club Sandwiches"
      eyebrow="Knusprig, frisch und ordentlich belegt"
      note="Wähle deine Beilage"
      icon={<FiStar />}
      className="menu-card--clubs"
    >
      <DishList items={clubSandwiches} />

      <div className="menu-card__bottom-note">
        <FiCheck />

        <p>
          Zu jedem Club Sandwich könnt ihr eine
          Beilage aus unserer Auswahl wählen.
        </p>
      </div>
    </MenuCard>

    <SideChoiceCard />
  </div>
)}

        {/* SPARE RIBS */}

        {activeCategory === "spare-ribs" && (
  <div className="menu-ribs-wrapper">
    <article className="menu-ribs">
      <div className="menu-ribs__image">
        <img
          src={ribsImage}
          alt="Spare Ribs bei Monty's"
        />
      </div>

      <div className="menu-ribs__content">
        <p className="menu-eyebrow">
          Jeden 1. und 3. Donnerstag im Monat
        </p>

        <h2>Spare-Ribs-Abend</h2>

        <p>
          Freut euch auf saftige Spare Ribs,
          frisch zubereitet und in gemütlicher
          Pub-Atmosphäre serviert.
        </p>

        <div className="menu-ribs__bottom">
          <strong>16,90 €</strong>

          <Link
            to="/reservierung"
            className="menu-text-link"
          >
            Tisch reservieren
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </article>

    <SideChoiceCard />
  </div>
)}

        {/* KINDER */}

        {activeCategory === "kinder" && (
  <div className="menu-tab-single">
    <MenuCard
      title="Kindergerichte"
      eyebrow="Für unsere kleinen Gäste"
      icon={<FiStar />}
      className="menu-card--green"
    >
      <DishList items={kidsMenu} />

      <div className="menu-card__bottom-note">
        <FiCheck />

        <p>
          Informationen zu Allergenen erhaltet ihr
          jederzeit bei unserem Team.
        </p>
      </div>
    </MenuCard>
  </div>
)}

        {/* DESSERTS */}

        {activeCategory === "desserts" && (
          <div className="menu-tab-single">
            <MenuCard
              title="Desserts"
              eyebrow="Für den süßen Abschluss"
              icon={<FiStar />}
            >
              <DishList items={desserts} />
            </MenuCard>
          </div>
        )}
      </div>
    </div>

    <div className="menu-tabs-reservation">
  <div className="menu-tabs-reservation__text">
    <p className="menu-eyebrow">
      Schon einen Favoriten gefunden?
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
            Informationen zu Allergenen und
            Zusatzstoffen erhaltet ihr bei unserem
            Team.
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

export default FoodMenu;
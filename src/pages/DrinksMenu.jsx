import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FiArrowDown,
  FiArrowRight,
  FiCheck,
  FiCoffee,
  FiDroplet,
  FiMoon,
  FiStar,
} from "react-icons/fi";

import {
  LuBeer,
  LuGlassWater,
  LuMartini,
  LuWine,
} from "react-icons/lu";

import {
  drinkCategories,
  drinkHighlights,
} from "../data/drinks";

import "../styles/drinks.css";

const categoryIcons = {
  alkoholfrei: <LuGlassWater />,
  bier: <LuBeer />,
  aperitif: <LuMartini />,
  wein: <LuWine />,
  cocktails: <LuMartini />,
  longdrinks: <FiMoon />,
  shots: <FiDroplet />,
  whisky: <FiDroplet />,
  heissgetraenke: <FiCoffee />,
  milkshakes: <FiStar />,
};

function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  stagger = false,
  as: Tag = "div",
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        },
        {
          threshold: 0.1,
          rootMargin:
            "0px 0px -60px 0px",
        }
      );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={elementRef}
      className={[
        "drinks-reveal",
        `drinks-reveal--${direction}`,
        stagger
          ? "drinks-reveal--stagger"
          : "",
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--drinks-reveal-delay":
          `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

function DrinksMenu() {
  const scrollToMenu = () => {
    document
      .getElementById("drinks-menu")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const scrollToCategory = (categoryId) => {
    document
      .getElementById(categoryId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="drinks-page">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="drinks-hero">
        <div
          className="drinks-hero__grain"
          aria-hidden="true"
        />

        <div
          className="drinks-hero__background-word"
          aria-hidden="true"
        >
          Drinks
        </div>

        <div className="drinks-hero__container">
          <div className="drinks-hero__content drinks-load-animation drinks-load-animation--left">
           

            <h1>
              Kalte Drinks.
              <span>Lange Nächte.</span>
            </h1>

            <p className="drinks-hero__lead">
              Von frisch gezapftem Bier über
              hausgemachte Limonaden bis zu
              Cocktails und Longdrinks.
            </p>

            <p className="drinks-hero__text">
              Entdeckt unsere Auswahl an
              alkoholfreien Getränken,
              Bieren, Weinen, Aperitifs,
              Cocktails, Shots und warmen
              Getränken.
            </p>

            <div className="drinks-hero__buttons">
              <button
                type="button"
                className="drinks-button drinks-button--primary"
                onClick={scrollToMenu}
              >
                Getränkekarte ansehen
                <FiArrowDown />
              </button>

              <Link
                to="/reservierung"
                className="drinks-button drinks-button--secondary"
              >
                Tisch reservieren
                <FiArrowRight />
              </Link>
            </div>

            <div className="drinks-hero__facts">
              <div>
                <LuBeer />

                <span>
                  Frisch gezapft
                  <small>
                    Regionale Biere und
                    ausgewählte Sorten
                  </small>
                </span>
              </div>

              <div>
                <LuMartini />

                <span>
                  Cocktails & Spritz
                  <small>
                    Klassiker und eigene
                    Kreationen
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="drinks-hero__visual drinks-load-animation drinks-load-animation--right">
            <div className="drinks-hero__panel">
         

              <p className="drinks-hero__panel-eyebrow">
                Was darf es sein?
              </p>

              <h2>
                Für jeden Abend
                <span>der passende Drink.</span>
              </h2>

              <div className="drinks-hero__panel-list">
                <div>
                  <FiCheck />
                  Alkoholfreie Getränke
                </div>

                <div>
                  <FiCheck />
                  Bier vom Fass
                </div>

                <div>
                  <FiCheck />
                  Aperitifs und Wein
                </div>

                <div>
                  <FiCheck />
                  Cocktails und Longdrinks
                </div>

                <div>
                  <FiCheck />
                  Kaffee und Tee
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          HIGHLIGHTS
      ================================================== */}

      <section className="drinks-highlights">
        <Reveal
          className="drinks-highlights__grid"
          stagger
        >
          {drinkHighlights.map(
            (highlight) => (
              <article
                className="drinks-highlight-card"
                key={highlight.number}
              >
                <span>
                  {highlight.number}
                </span>

                <h2>
                  {highlight.title}
                </h2>

                <p>
                  {highlight.text}
                </p>
              </article>
            )
          )}
        </Reveal>
      </section>

      {/* ==================================================
          KATEGORIE-NAVIGATION
      ================================================== */}

      <section
        className="drinks-navigation"
        id="drinks-menu"
      >
        <div className="drinks-section-container">
          <Reveal className="drinks-navigation__heading">
            <p className="drinks-eyebrow">
              Unsere Auswahl
            </p>

            <h2>
              Was möchtet ihr trinken?
            </h2>

            <p>
              Wählt eine Kategorie und
              springt direkt zum gewünschten
              Bereich.
            </p>
          </Reveal>

          <Reveal
            className="drinks-navigation__grid"
            stagger
          >
            {drinkCategories.map(
              (category) => (
                <button
                  type="button"
                  key={category.id}
                  className="drinks-navigation__button"
                  onClick={() =>
                    scrollToCategory(
                      category.id
                    )
                  }
                >
                  <span className="drinks-navigation__icon">
                    {categoryIcons[
                      category.id
                    ]}
                  </span>

                  <strong>
                    {category.navigationLabel}
                  </strong>

                  <FiArrowDown />
                </button>
              )
            )}
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          GETRÄNKE-KATEGORIEN
      ================================================== */}

      {drinkCategories.map(
        (category, categoryIndex) => (
          <section
            className={`drinks-category ${
              categoryIndex % 2 !== 0
                ? "drinks-category--alternate"
                : ""
            }`}
            id={category.id}
            key={category.id}
          >
            <div
              className="drinks-category__background-word"
              aria-hidden="true"
            >
              {category.navigationLabel}
            </div>

            <div className="drinks-section-container">
              <Reveal className="drinks-category__heading">
                <div>
                  <p className="drinks-eyebrow">
                    {category.eyebrow}
                  </p>

                  <h2>
                    {category.title}
                  </h2>
                </div>

                <div className="drinks-category__introduction">
                  <p>
                    {category.description}
                  </p>

                  {category.priceNote && (
                    <strong>
                      {category.priceNote}
                    </strong>
                  )}
                </div>
              </Reveal>

              <Reveal
                className="drinks-category__groups"
                stagger
              >
                {category.groups.map(
                  (group) => (
                    <article
                      className="drinks-group"
                      key={`${category.id}-${group.title}`}
                    >
                      <header className="drinks-group__header">
                        <div>
                          <span className="drinks-group__icon">
                            {categoryIcons[
                              category.id
                            ]}
                          </span>

                          <h3>
                            {group.title}
                          </h3>
                        </div>

                        {group.volume && (
                          <span className="drinks-group__volume">
                            {group.volume}
                          </span>
                        )}

                        {group.priceNote && (
                          <span className="drinks-group__volume">
                            {group.priceNote}
                          </span>
                        )}
                      </header>

                      {group.columns && (
                        <div className="drinks-group__columns">
                          <span />

                          {group.columns.map(
                            (column) => (
                              <strong
                                key={column}
                              >
                                {column}
                              </strong>
                            )
                          )}
                        </div>
                      )}

                      <div className="drinks-group__items">
                        {group.items.map(
                          (item, itemIndex) => (
                            <div
                              className={`drinks-item ${
                                item.prices
                                  ? "drinks-item--multiple"
                                  : ""
                              }`}
                              key={`${item.name}-${itemIndex}`}
                            >
                              <div className="drinks-item__information">
                                <strong>
                                  {item.name}
                                </strong>

                                {item.description && (
                                  <small>
                                    {
                                      item.description
                                    }
                                  </small>
                                )}

                                {item.secondaryPrice && (
                                  <small className="drinks-item__secondary-price">
                                    {
                                      item.secondaryPrice
                                    }
                                  </small>
                                )}
                              </div>

                              {item.prices ? (
  <div className="drinks-item__prices">
    {item.prices.map(
      (price, priceIndex) => (
        <span
          key={`${price}-${priceIndex}`}
        >
          {price}
        </span>
      )
    )}
  </div>
) : item.price ? (
  <span className="drinks-item__price">
    {item.price}
  </span>
) : null}
                            </div>
                          )
                        )}
                      </div>

                      {group.special && (
                        <div className="drinks-group__special">
                          <FiStar />

                          <div>
                            <small>
                              Unser Special
                            </small>

                            <strong>
                              {
                                group.special
                                  .title
                              }
                            </strong>

                            <p>
                              {
                                group.special
                                  .text
                              }
                            </p>
                          </div>

                          {group.special
                            .price && (
                            <span>
                              {
                                group.special
                                  .price
                              }
                            </span>
                          )}
                        </div>
                      )}
                    </article>
                  )
                )}
              </Reveal>
            </div>
          </section>
        )
      )}

      {/* ==================================================
          ABSCHLUSS
      ================================================== */}

      <section className="drinks-cta">
        <div
          className="drinks-cta__background-word"
          aria-hidden="true"
        >
          Cheers
        </div>

        <Reveal className="drinks-cta__content">
          <LuBeer />

          <p className="drinks-eyebrow">
            Schon etwas gefunden?
          </p>

          <h2>
            Dann fehlt nur noch
            der passende Tisch.
          </h2>

          <p>
            Reserviert euren Tisch und
            verbringt einen gemütlichen
            Abend mit guten Drinks, leckerem
            Essen und euren Lieblingsmenschen
            bei Monty&apos;s.
          </p>

          <div className="drinks-cta__buttons">
            <Link
              to="/reservierung"
              className="drinks-button drinks-button--primary"
            >
              Tisch reservieren
              <FiArrowRight />
            </Link>

            <Link
              to="/speisekarte"
              className="drinks-button drinks-button--secondary"
            >
              Speisekarte ansehen
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default DrinksMenu;
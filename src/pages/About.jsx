import montyImage from "../assets/images/monty.jpg";
import montyImage2 from "../assets/images/monty2.jpg";
import montyImage3 from "../assets/images/monty3.jpg";
import atmosphereImage from "../assets/images/atmosphere.jpg";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowDown,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiHeart,
  FiHome,
  FiMapPin,
  FiMusic,
  FiStar,
  FiUsers,
} from "react-icons/fi";

import {
  LuBeer,
  LuChefHat,
  LuDog,
} from "react-icons/lu";

import "../styles/about.css";

const aboutHighlights = [
  {
    icon: <FiHeart />,
    title: "Mit Herz geführt",
    text: "Ein Pub, in dem persönliche Gastfreundschaft und ein herzliches Miteinander im Mittelpunkt stehen.",
  },
  {
    icon: <LuChefHat />,
    title: "Ehrliche Küche",
    text: "Frisch zubereitete Gerichte, gute Zutaten und eine Küche ohne unnötigen Schnickschnack.",
  },
  {
    icon: <LuBeer />,
    title: "Kalt gezapft",
    text: "Ausgewählte Biere, kalte Getränke und gemütliche Abende in entspannter Atmosphäre.",
  },
  {
    icon: <FiUsers />,
    title: "Für alle da",
    text: "Ein Ort für Freunde, Familien, Stammgäste und alle, die einen guten Abend verbringen möchten.",
  },
];

const values = [
  {
    number: "01",
    icon: <FiHeart />,
    title: "Herzlichkeit",
    text: "Unsere Gäste sollen sich nicht wie irgendeine Reservierung fühlen, sondern vom ersten Moment an willkommen sein.",
  },
  {
    number: "02",
    icon: <LuChefHat />,
    title: "Qualität",
    text: "Wir möchten ehrliches Essen servieren, das frisch zubereitet wird und bei dem Geschmack und Sorgfalt zählen.",
  },
  {
    number: "03",
    icon: <FiUsers />,
    title: "Gemeinschaft",
    text: "Monty’s soll ein Treffpunkt sein, an dem Menschen zusammenkommen, sich austauschen und gerne länger bleiben.",
  },
  {
    number: "04",
    icon: <FiStar />,
    title: "Charakter",
    text: "Kein steriles Restaurant, sondern ein Pub mit eigener Persönlichkeit, Wärme und einem unverwechselbaren Gefühl.",
  },
];

const pubFacts = [
  {
    icon: <FiMapPin />,
    title: "Mitten in Bayreuth",
    text: "Wölfelstraße 18 · 95444 Bayreuth · im Innenhof",
  },
  {
    icon: <FiClock />,
    title: "Lange Küchenzeiten",
    text: "Warme Küche bis 23 Uhr, freitags und samstags sogar bis 2 Uhr nachts.",
  },
  {
    icon: <FiMusic />,
    title: "Besondere Abende",
    text: "Kneipenquiz, Spare-Ribs-Abende und gelegentliche Live-Musik.",
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
        "about-reveal",
        `about-reveal--${direction}`,
        stagger ? "about-reveal--stagger" : "",
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--about-reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

function About() {
  const scrollToStory = () => {
    document
      .getElementById("about-story")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="about-page">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="about-hero">
        <div
          className="about-hero__grain"
          aria-hidden="true"
        />

        <div className="about-hero__background-word" aria-hidden="true">
          Monty&apos;s
        </div>

        <div className="about-hero__container">
          <div className="about-hero__content about-load-animation about-load-animation--left">

            <h1>
              Ein Ort
              <span>mit Charakter.</span>
            </h1>

            <p className="about-hero__lead">
              Ehrliche Gastfreundschaft, gutes Essen und
              eine Atmosphäre, in der man gerne noch ein
              bisschen länger bleibt.
            </p>

            <p className="about-hero__text">
              Monty&apos;s soll mehr sein als nur ein Ort
              zum Essen und Trinken. Es soll ein Pub sein,
              an dem Menschen zusammenkommen, abschalten
              und sich vom ersten Moment an wohlfühlen.
            </p>


            <div className="about-hero__facts">
              <div>
                <FiHome />

                <span>
                  Pub & Kitchen
                  <small>
                    Gemütlich, persönlich und mit eigener Handschrift
                  </small>
                </span>
              </div>

              <div>
                <LuDog />

                <span>
                  Benannt nach Monty
                  <small>
                    Unserem vierbeinigen Chef des Hauses
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="about-hero__visual about-load-animation about-load-animation--right">
            <figure className="about-hero__image">
              <img
                src={montyImage}
                alt="Monty, der Namensgeber von Monty's Pub & Kitchen"
              />

              <figcaption>
                <span>Der Namensgeber</span>
                <strong>Monty</strong>
              </figcaption>
            </figure>

            <div className="about-hero__seal">
              <span>Chef</span>
              <strong>des Hauses</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          HIGHLIGHT-LEISTE
      ================================================== */}

      <section className="about-highlights">
        <Reveal
          className="about-highlights__container"
          stagger
        >
          {aboutHighlights.map((highlight) => (
            <article
              className="about-highlight-card"
              key={highlight.title}
            >
              <div className="about-highlight-card__icon">
                {highlight.icon}
              </div>

              <h2>{highlight.title}</h2>

              <p>{highlight.text}</p>
            </article>
          ))}
        </Reveal>
      </section>

      {/* ==================================================
          UNSERE GESCHICHTE
      ================================================== */}

      <section
        className="about-story"
        id="about-story"
      >
        <div className="about-story__background-word" aria-hidden="true">
          Geschichte
        </div>

        <div className="about-section-container">
          <div className="about-story__layout">
            <Reveal
              className="about-story__content"
              direction="left"
            >
              <p className="about-eyebrow">
                Wie alles begann
              </p>

              <h2>
                Die Idee für einen Ort, an dem man wirklich
                gerne zusammenkommt.
              </h2>

              <p className="about-story__lead">
                Monty&apos;s entstand aus dem Wunsch, einen
                gemütlichen Pub mit ehrlicher Küche,
                persönlicher Gastfreundschaft und einer
                besonderen Atmosphäre zu schaffen.
              </p>

              <div className="about-story__text">
                <p>
                  Einen Ort, an dem man nach einem langen
                  Tag ankommt, mit Freunden zusammensitzt,
                  gut isst und bei einem kalten Getränk
                  einfach abschalten kann.
                </p>

                <p>
                  Dabei geht es nicht um steife Abläufe oder
                  eine sterile Restaurantatmosphäre.
                  Monty&apos;s soll Persönlichkeit haben:
                  warm, rustikal, hochwertig und gleichzeitig
                  unkompliziert.
                </p>

                <p>
                  Gute Küche, kalte Getränke und herzliche
                  Menschen gehören für uns zusammen. Genau
                  dieses Gefühl möchten wir unseren Gästen
                  bei jedem Besuch vermitteln.
                </p>
              </div>

              <blockquote className="about-story__quote">
                <p>
                  „Ein guter Pub ist nicht nur ein Raum.
                  Es ist ein Gefühl von Ankommen.“
                </p>
              </blockquote>
            </Reveal>

            <Reveal
              className="about-story__visual"
              direction="right"
              delay={120}
            >
              <figure className="about-story__image">
                <img
                  src={atmosphereImage}
                  alt="Warme und gemütliche Pub-Atmosphäre bei Monty's"
                />
              </figure>

              <div className="about-story__note">
                <FiHeart />

                <div>
                  <small>Unser Anspruch</small>

                  <strong>
                    Jeder Gast soll sich bei uns willkommen
                    und gut aufgehoben fühlen.
                  </strong>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================
          UNSERE WERTE
      ================================================== */}

      <section className="about-values">
        <div className="about-section-container">
          <Reveal className="about-values__heading">
            <div>
              <p className="about-eyebrow">
                Wofür wir stehen
              </p>

              <h2>
                Die Werte hinter Monty&apos;s.
              </h2>
            </div>

            <p>
              Unser Pub soll nicht nur durch sein Aussehen
              überzeugen. Entscheidend ist, wie sich ein
              Besuch bei uns anfühlt.
            </p>
          </Reveal>

          <Reveal
            className="about-values__grid"
            stagger
          >
            {values.map((value) => (
              <article
                className="about-value-card"
                key={value.number}
              >
                <div className="about-value-card__top">
                  <span>{value.number}</span>

                  <div className="about-value-card__icon">
                    {value.icon}
                  </div>
                </div>

                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

            {/* ==================================================
          MONTY
      ================================================== */}

      <section className="about-monty">
        <div className="about-section-container">
          <div className="about-monty__layout">
            <Reveal
              className="about-monty__gallery"
              direction="left"
            >
              <figure className="about-monty__image about-monty__image--large">
                <img
                  src={montyImage2}
                  alt="Monty im Pub"
                />
              </figure>

              <figure className="about-monty__image about-monty__image--small">
                <img
                  src={montyImage3}
                  alt="Akita Inu Monty"
                />
              </figure>
            </Reveal>

            <Reveal
              className="about-monty__content"
              direction="right"
              delay={120}
            >
              <p className="about-eyebrow">
                Der Chef des Hauses
              </p>

              <h2>
                Ohne ihn gäbe es
                Monty&apos;s wahrscheinlich gar nicht.
              </h2>

              <p className="about-monty__lead">
                Unser Pub trägt seinen Namen nicht ohne Grund.
                Monty gehört einfach dazu und steht für genau
                das Gefühl, das wir unseren Gästen vermitteln
                möchten.
              </p>

              <div className="about-monty__text">
                <p>
                  Der vierjährige Akita Inu ist ruhig,
                  freundlich und immer mit ganzem Herzen dabei.
                  Genau diese Eigenschaften spiegeln sich auch
                  in unserem Pub wider.
                </p>

                <p>
                  Natürlich übernimmt Monty weder den Service
                  noch zapft er Bier. Trotzdem hat der Chef des
                  Hauses bei wichtigen Entscheidungen immer das
                  letzte Wort.
                </p>
              </div>

              <ul className="about-monty__list">
                <li>
                  <FiCheck />
                  Ehrlicher Charakter
                </li>

                <li>
                  <FiCheck />
                  Herzlicher Empfang
                </li>

                <li>
                  <FiCheck />
                  Ganz viel Persönlichkeit
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================
          FAKTEN
      ================================================== */}

      <section className="about-facts">
        <div className="about-section-container">
          <Reveal
            className="about-facts__grid"
            stagger
          >
            {pubFacts.map((fact) => (
              <article
                key={fact.title}
                className="about-fact-card"
              >
                <div className="about-fact-card__icon">
                  {fact.icon}
                </div>

                <h3>{fact.title}</h3>

                <p>{fact.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          CTA
      ================================================== */}

      <section className="about-cta">
        <Reveal className="about-cta__content">
          <p className="about-eyebrow">
            Wir freuen uns auf euch
          </p>

          <h2>
            Kommt vorbei und erlebt
            Monty&apos;s selbst.
          </h2>

          <p>
            Ob zum Abendessen, auf ein frisch gezapftes Bier
            oder einfach auf einen gemütlichen Abend mit
            Freunden – wir freuen uns darauf, euch bald bei
            uns begrüßen zu dürfen.
          </p>

          <div className="about-cta__buttons">
            <Link
              to="/reservierung"
              className="about-button about-button--primary"
            >
              Tisch reservieren
              <FiArrowRight />
            </Link>

            <Link
              to="/speisekarte"
              className="about-button about-button--secondary"
            >
              Speisekarte ansehen
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default About;
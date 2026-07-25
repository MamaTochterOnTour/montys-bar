import montyImage from "../assets/images/monty.jpg";
import montyImage2 from "../assets/images/monty2.jpg";
import montyImage3 from "../assets/images/monty3.jpg";
import burgerImage from "../assets/images/food-burger.jpg";
import ribsImage from "../assets/images/food-ribs.jpg";
import heroImage from "../assets/images/hero.jpg";
import atmosphereImage from "../assets/images/atmosphere.jpg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiFacebook,
  FiHeart,
  FiImage,
  FiInstagram,
  FiMapPin,
  FiMusic,
  FiUsers,
} from "react-icons/fi";
import { LuBeer, LuChefHat } from "react-icons/lu";

import "../styles/home.css";

const highlights = [
  {
    icon: <LuBeer />,
    title: "Frisch gezapft",
    text: "Kalte Getränke, ausgewählte Biere und eine entspannte Pub-Atmosphäre.",
  },
  {
    icon: <LuChefHat />,
    title: "Frisch zubereitet",
    text: "Ehrliche Küche, mit Sorgfalt, Herz und guten Zutaten zubereitet.",
  },
  {
    icon: <FiUsers />,
    title: "Gemeinsam genießen",
    text: "Ein Ort für Freunde, Familien, gute Gespräche und lange Abende.",
  },
  {
    icon: <FiMusic />,
    title: "Events & Live-Musik",
    text: "Kneipenquiz und gelegentliche Live-Musik sorgen für besondere Abende.",
  },
  {
    icon: <FiHeart />,
    title: "Herzlich willkommen",
    text: "Persönliche Gastfreundschaft, bei der sich jeder wohlfühlen soll.",
  },
];

const events = [
  {
    number: "01",
    icon: <FiCalendar />,
    kicker: "Regelmäßig",
    title: "Kneipenquiz",
    text: "Gemeinsam knobeln, lachen und mit eurem Team einen unterhaltsamen Abend bei Monty’s verbringen.",
  },
  {
    number: "02",
    icon: <LuChefHat />,
    kicker: "Jeden zweiten Donnerstag",
    title: "Spare-Ribs-Abend",
    text: "Freut euch auf saftige Spare Ribs, frisch zubereitet und in gemütlicher Pub-Atmosphäre serviert.",
  },
  {
    number: "03",
    icon: <FiMusic />,
    kicker: "Gelegentlich",
    title: "Live-Musik",
    text: "Ausgewählte Live-Musik-Abende sorgen für besondere Stimmung, gute Gespräche und gemeinsame Erlebnisse.",
  },
];

const partners = [
  {
    id: 1,
    name: "Brauerei Bayreuth",
    logo: "",
    website: "",
  },
  {
    id: 2,
    name: "MBT",
    logo: "",
    website: "",
  },
  {
    id: 3,
    name: "Weiterer Partner",
    logo: "",
    website: "",
  },
];

function ImagePlaceholder({
  label,
  description,
  className = "",
}) {
  return (
    <div className={`home-image-placeholder ${className}`}>
      <FiImage />

      <strong>{label}</strong>

      {description && <span>{description}</span>}
    </div>
  );
}

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={elementRef}
      className={[
        "reveal",
        `reveal--${direction}`,
        stagger ? "reveal--stagger" : "",
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__grain" />

        <div className="home-hero__container">
          <div className="home-hero__content home-load-animation home-load-animation--left">

            <h1>
              Monty&apos;s
              <span>Pub & Kitchen</span>
            </h1>

            <p className="home-hero__lead">
              Gutes Essen. Kalte Getränke. Gute Zeit.
            </p>

            <p className="home-hero__text">
              Ehrliche Gastfreundschaft, frisch zubereitete Küche und eine
              gemütliche Atmosphäre, in der man ankommt, abschaltet und gerne
              noch etwas länger bleibt.
            </p>

            <div className="home-hero__buttons">
              <Link
                to="/reservierung"
                className="home-button home-button--primary"
              >
                Tisch reservieren
                <FiArrowRight />
              </Link>

              <Link
                to="/speisekarte"
                className="home-button home-button--secondary"
              >
                Speisekarte ansehen
              </Link>
            </div>

            <div className="home-hero__facts">
              <div>
                <FiMapPin />

                <span>
                  Wölfelstraße 18
                  <small>95444 Bayreuth · im Innenhof</small>
                </span>
              </div>

              <div>
                <FiClock />

                <span>
                  Ab 17 Uhr geöffnet
                  <small>Mittwoch Ruhetag</small>
                </span>
              </div>
            </div>
          </div>

          <div className="home-hero__visual home-load-animation home-load-animation--right">
  <img
    src={heroImage}
    alt="Gemütlicher Innenbereich von Monty's Pub & Kitchen"
    className="home-hero__image"
  />
</div>
        </div>
      </section>

      {/* HIGHLIGHT-LEISTE */}
      <section className="home-highlights">
        <Reveal
  className="home-highlights__container"
  stagger
>
  {highlights.map((highlight) => (
    <article
      className="home-highlight-card"
      key={highlight.title}
    >
      <div className="home-highlight-card__icon">
        {highlight.icon}
      </div>

      <div>
        <h2>{highlight.title}</h2>
        <p>{highlight.text}</p>
      </div>
    </article>
  ))}
</Reveal>
      </section>

      {/* WILLKOMMEN */}
      <section className="home-welcome">

          <div className="home-welcome__layout">
            <Reveal
  className="home-welcome__text"
  direction="left"
>
              <p>
                Bei uns treffen ehrliche Gastfreundschaft, frisch zubereitete
                Küche und eine gemütliche Atmosphäre aufeinander. Wir legen
                großen Wert darauf, dass jedes Gericht mit Sorgfalt und Herz
                zubereitet wird und sich unsere Gäste vom ersten Moment an
                wohlfühlen.
              </p>

              <p>
                Ob auf ein frisch gezapftes Bier, ein gutes Essen oder einfach
                einen entspannten Abend mit Freunden: Bei uns soll man
                ankommen, abschalten und gerne noch etwas länger bleiben.
              </p>

              <p>
                Wir möchten ein Ort sein, an den man nicht nur einmal kommt,
                sondern immer wieder gerne zurückkehrt.
              </p>

              <div className="home-welcome__quote">
                <span>Frisch gekocht.</span>
                <span>Kalt gezapft.</span>
                <span>Mit Liebe serviert.</span>
              </div>
            </Reveal>

            <Reveal
  className="home-welcome__image-wrapper"
  direction="up"
  delay={100}
>
  <img
    src={atmosphereImage}
    alt="Warme Pub-Atmosphäre bei Monty's"
    className="home-welcome__image"
  />
</Reveal>

       <aside className="home-welcome__panel">
  <Reveal className="home-welcome__panel-heading">
    <p className="home-eyebrow">
      Was euch erwartet
    </p>

    <h3>
      Mehr als nur ein Platz zum Essen.
    </h3>

    <p>
      Bei Monty&apos;s gehören gutes Essen, kalte Getränke und
      gemeinsame Abende einfach zusammen.
    </p>
  </Reveal>

  <Reveal
  as="ul"
  className="home-welcome__features"
  stagger
>
  <li>
    <span>01</span>
    <strong>Frisch zubereitete Pub-Küche</strong>
  </li>

  <li>
    <span>02</span>
    <strong>Ausgewählte Biere und Drinks</strong>
  </li>

  <li>
    <span>03</span>
    <strong>Kneipenquiz und Live-Musik</strong>
  </li>

  <li>
    <span>04</span>
    <strong>Spare Ribs jeden zweiten Donnerstag</strong>
  </li>
</Reveal>

  <Reveal
  className="home-welcome__special"
  direction="right"
  delay={250}
>
  <span>05</span>

  <div>
    <small>Unser Extra</small>

    <strong>
      Warme Küche, wenn andere schon schließen
    </strong>

    <p>
      Bei uns bekommt ihr bis 23 Uhr und freitags sowie samstags sogar bis 2 Uhr nachts noch warmes Essen.
    </p>
  </div>
</Reveal>

  <Reveal
  className="home-welcome__panel-footer"
  delay={200}
>
  <p>
    Lust auf einen gemütlichen Abend?
  </p>

  <Link
    to="/reservierung"
    className="home-welcome__panel-button"
  >
    Tisch reservieren
    <FiArrowRight />
  </Link>
</Reveal>
</aside>
          </div>
      </section>

      {/* MONTY */}
<section className="home-monty">
  <div className="home-monty__background-word" aria-hidden="true">
    Monty
  </div>

  <div className="home-section-container">
    <div className="home-monty__layout">
      <Reveal
  className="home-monty__gallery"
  direction="left"
>
        <figure className="home-monty__image home-monty__image--main">
          <img
            src={montyImage}
            alt="Monty, der Namensgeber von Monty's Pub & Kitchen"
          />

          <figcaption>
            <span>Der Namensgeber</span>
            <strong>Monty</strong>
          </figcaption>
        </figure>

        <div className="home-monty__secondary-images">
          <figure className="home-monty__image home-monty__image--small">
            <img
              src={montyImage2}
              alt="Monty, der vierbeinige Chef des Hauses"
            />
          </figure>

          <figure className="home-monty__image home-monty__image--small home-monty__image--offset">
            <img
              src={montyImage3}
              alt="Akita Inu Monty"
            />
          </figure>
        </div>

        <div className="home-monty__seal">
          <span>Chef</span>
          <strong>des Hauses</strong>
        </div>
      </Reveal>

      <Reveal
  className="home-monty__content"
  direction="right"
  delay={120}
>
        <p className="home-eyebrow">
          Die Geschichte hinter unserem Namen
        </p>

        <h2>
          Ein Pub mit Charakter. Und einem ganz besonderen Chef.
        </h2>

        <p className="home-monty__lead">
          Monty ist nicht einfach nur der Namensgeber unseres Pubs. Er gehört
          zur Geschichte und zum Gefühl, das diesen Ort ausmachen soll.
        </p>

        <div className="home-monty__story">
          <p>
            Der vierjährige Akita Inu steht für Ruhe, Persönlichkeit und eine
            herzliche Art – genau die Eigenschaften, die auch unsere Gäste bei
            Monty&apos;s erleben sollen.
          </p>

          <p>
            Offiziell kümmert er sich weder um die Küche noch um die Getränke.
            Bei wichtigen Entscheidungen hat der Chef des Hauses natürlich
            trotzdem ein Wörtchen mitzureden.
          </p>
        </div>

        <Link
          to="/ueber-uns"
          className="home-text-link home-monty__link"
        >
          Montys Geschichte entdecken
          <FiArrowRight />
        </Link>
      </Reveal>
    </div>
  </div>
</section>

    </main>
  );
}

export default Home;
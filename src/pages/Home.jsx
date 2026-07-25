import montyImage from "../assets/images/monty.jpg";
import montyImage2 from "../assets/images/monty2.jpg";
import montyImage3 from "../assets/images/monty3.jpg";
import burgerImage from "../assets/images/food-burger.jpg";
import ribsImage from "../assets/images/food-ribs.jpg";
import heroImage from "../assets/images/hero.jpg";
import atmosphereImage from "../assets/images/atmosphere.jpg";
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

function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__grain" />

        <div className="home-hero__container">
          <div className="home-hero__content">

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

          <div className="home-hero__visual">
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
        <div className="home-highlights__container">
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
        </div>
      </section>

      {/* WILLKOMMEN */}
      <section className="home-welcome">

          <div className="home-welcome__layout">
            <div className="home-welcome__text">
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
                <span>Gutes Essen.</span>
                <span>Gute Freunde.</span>
                <span>Gute Zeit.</span>
              </div>
            </div>

            <div className="home-welcome__image-wrapper">
  <img
    src={atmosphereImage}
    alt="Warme Pub-Atmosphäre bei Monty's"
    className="home-welcome__image"
  />
</div>

            <aside className="home-welcome__panel">
  <div className="home-welcome__panel-heading">
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
  </div>

  <ul className="home-welcome__features">
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

    <li>
      <span>05</span>
      <strong>Gemütliche Atmosphäre im Innenhof</strong>
    </li>
  </ul>

  <div className="home-welcome__panel-footer">
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
  </div>
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
      <div className="home-monty__gallery">
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
      </div>

      <div className="home-monty__content">
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
      </div>
    </div>
  </div>
</section>

    </main>
  );
}

export default Home;
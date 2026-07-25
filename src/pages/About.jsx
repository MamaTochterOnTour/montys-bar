import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiHome,
  FiUsers,
} from "react-icons/fi";
import { LuBeer, LuChefHat } from "react-icons/lu";

import montyImage from "../assets/images/monty.jpg";
import "../styles/about.css";

const values = [
  {
    icon: <FiHeart />,
    title: "Ehrliche Gastfreundschaft",
    text: "Wir möchten, dass sich unsere Gäste vom ersten Moment an willkommen und wohlfühlen.",
  },
  {
    icon: <LuChefHat />,
    title: "Frisch zubereitete Küche",
    text: "Unsere Gerichte werden mit Sorgfalt, Herz und einem hohen Anspruch an Qualität zubereitet.",
  },
  {
    icon: <LuBeer />,
    title: "Gute Getränke",
    text: "Vom frisch gezapften Bier bis zum Cocktail gehört ein gutes Getränk für uns zu einem gelungenen Abend.",
  },
  {
    icon: <FiUsers />,
    title: "Gemeinsame Zeit",
    text: "Monty's soll ein Ort für Freunde, gute Gespräche und Abende sein, die gerne etwas länger dauern dürfen.",
  },
];

function About() {
  return (
    <main className="about-page">
      {/* KOMPAKTER SEITENKOPF */}
      <section className="about-intro">
        <div className="about-container">
          <p className="about-eyebrow">
            Monty&apos;s Pub & Kitchen
          </p>

          <div className="about-intro__content">
            <h1>Über uns</h1>

            <p>
              Ein gemütlicher Pub, ehrliche Küche und ein ganz besonderer
              Namensgeber: Bei Monty&apos;s geht es um Gastfreundschaft,
              gemeinsame Zeit und das Gefühl, gerne noch ein bisschen länger
              bleiben zu wollen.
            </p>
          </div>
        </div>
      </section>

      {/* UNSERE IDEE */}
      <section className="about-story">
        <div className="about-container">
          <div className="about-story__layout">
            <div className="about-story__content">
              <p className="about-eyebrow">
                Die Idee hinter Monty&apos;s
              </p>

              <h2>
                Ein Ort zum Ankommen, Abschalten und Genießen.
              </h2>

              <p className="about-story__lead">
                Monty&apos;s Pub & Kitchen verbindet die gemütliche Atmosphäre
                eines klassischen Pubs mit frisch zubereiteter Küche und
                persönlicher Gastfreundschaft.
              </p>

              <p>
                Unser Ziel ist es, einen Ort zu schaffen, an dem man sich nicht
                nur für ein schnelles Getränk oder ein gutes Essen trifft.
                Monty&apos;s soll ein Treffpunkt für Freunde, Familien und alle
                sein, die einen entspannten Abend in angenehmer Atmosphäre
                verbringen möchten.
              </p>

              <p>
                Dunkelgrüne Akzente, warme Holz- und Ledertöne sowie eine
                gemütliche Beleuchtung prägen den Charakter unserer Bar.
                Modern, aber nicht steril. Rustikal, aber trotzdem hochwertig
                und einladend.
              </p>

              <p className="about-story__placeholder">
                Die persönliche Entstehungsgeschichte von Monty&apos;s und
                weitere Informationen über die Betreiber ergänzen wir hier,
                sobald uns die finalen Angaben vorliegen.
              </p>
            </div>

            <div className="about-story__visual" aria-hidden="true">
              <div className="about-story__visual-inner">
                <FiHome className="about-story__icon" />

                <span>Monty&apos;s</span>

                <small>Pub & Kitchen · Bayreuth</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WERTE */}
      <section className="about-values">
        <div className="about-container">
          <div className="about-values__heading">
            <div>
              <p className="about-eyebrow">
                Dafür stehen wir
              </p>

              <h2>
                Gute Zeit beginnt mit einer guten Atmosphäre.
              </h2>
            </div>

            <p>
              Für uns gehören gutes Essen, passende Getränke und ein
              herzlicher Umgang miteinander zusammen. Genau dieses Gefühl
              möchten wir unseren Gästen bei jedem Besuch vermitteln.
            </p>
          </div>

          <div className="about-values__grid">
            {values.map((value) => (
              <article
                className="about-value-card"
                key={value.title}
              >
                <div className="about-value-card__icon">
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MONTY */}
      <section className="about-monty">
        <div className="about-container">
          <div className="about-monty__layout">
            <div className="about-monty__image-wrapper">
              <div className="about-monty__image-frame">
                <img
                  src={montyImage}
                  alt="Monty, der Namensgeber von Monty's Pub & Kitchen"
                  className="about-monty__image"
                />
              </div>

              <div className="about-monty__badge">
                <strong>Chef</strong>
                <span>des Hauses</span>
              </div>
            </div>

            <div className="about-monty__content">
              <p className="about-eyebrow">
                Unser Namensgeber
              </p>

              <h2>
                Monty – der vierbeinige Chef des Hauses.
              </h2>

              <p className="about-monty__lead">
                Hinter dem Namen unserer Bar steckt ein ganz besonderer
                Namensgeber: Monty, ein vierjähriger Akita Inu.
              </p>

              <p>
                Monty ist nicht nur der Namensgeber, sondern gehört fest zur
                Geschichte und Persönlichkeit der Bar. Er steht für Ruhe,
                Charakter und die herzliche Atmosphäre, die unsere Gäste bei
                uns erleben sollen.
              </p>

              <p>
                Offiziell kümmert er sich zwar weder um die Küche noch um die
                Getränke – bei wichtigen Entscheidungen hat der Chef des
                Hauses aber natürlich trotzdem ein Wörtchen mitzureden.
              </p>

              <div className="about-monty__facts">
                <div>
                  <strong>4 Jahre</strong>
                  <span>Alter</span>
                </div>

                <div>
                  <strong>Akita Inu</strong>
                  <span>Rasse</span>
                </div>

                <div>
                  <strong>Monty</strong>
                  <span>Namensgeber</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / BETREIBER */}
      <section className="about-team">
        <div className="about-container">
          <div className="about-team__layout">
            <div className="about-team__content">
              <p className="about-eyebrow">
                Die Menschen hinter Monty&apos;s
              </p>

              <h2>
                Persönlich, herzlich und mit viel Leidenschaft.
              </h2>

              <p>
                Hinter einem guten Pub stehen Menschen, die Gastfreundschaft
                leben. Unser Team sorgt mit Herz, Sorgfalt und persönlichem
                Einsatz dafür, dass sich unsere Gäste willkommen fühlen.
              </p>

              <p>
                Sobald uns die Betreiber ihre persönliche Geschichte,
                Teamnamen und passende Bilder zur Verfügung stellen, ergänzen
                wir diesen Bereich um die echten Personen hinter Monty&apos;s.
              </p>
            </div>

            <div className="about-team__placeholder">
              <FiUsers />

              <strong>Teamfoto folgt</strong>

              <span>
                Hier kann später ein gemeinsames Foto der Betreiber oder des
                Teams eingebunden werden.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABSCHLUSS / CTA */}
      <section className="about-cta">
        <div className="about-cta__decoration" />

        <div className="about-container">
          <div className="about-cta__content">
            <p className="about-eyebrow">
              Lernt uns persönlich kennen
            </p>

            <h2>
              Am besten erlebt ihr Monty&apos;s direkt vor Ort.
            </h2>

            <p>
              Reserviert euren Tisch und verbringt einen gemütlichen Abend mit
              gutem Essen, kalten Getränken und ehrlicher Gastfreundschaft.
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
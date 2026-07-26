import atmosphereImage from "../assets/images/hero.jpg";

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
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiNavigation,
  FiSend,
  FiStar,
} from "react-icons/fi";

import {
  LuBeer,
  LuCalendarCheck,
} from "react-icons/lu";

import "../styles/contact.css";

/* ======================================================
   HIER SPÄTER EURE ECHTEN DATEN EINTRAGEN
====================================================== */

const CONTACT_EMAIL =
  "info@montys-bar-bayreuth.de";


  "https://formspree.io/f/DEINE_FORM_ID";

const REVIEW_URL =
  "https://g.page/r/Cd1ZgBoPbiJwECE/review";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=W%C3%B6lfelstra%C3%9Fe%2018%2C%2095444%20Bayreuth";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=W%C3%B6lfelstra%C3%9Fe%2018%2C%2095444%20Bayreuth&output=embed";

/*
  Hier nur noch die echten Öffnungszeiten einsetzen.
  Die Küchenzeiten habe ich aus deinen bisherigen Angaben
  übernommen.
*/

const openingHours = [
  {
    day: "Montag",
    pub: "17:00–00:00 Uhr",
    kitchen: "bis 23:00 Uhr",
  },
  {
    day: "Dienstag",
    pub: "17:00–00:00 Uhr",
    kitchen: "bis 23:00 Uhr",
  },
  {
    day: "Mittwoch",
    pub: "Ruhetag",
    kitchen: "geschlossen",
  },
  {
    day: "Donnerstag",
    pub: "17:00–00:00 Uhr",
    kitchen: "bis 23:00 Uhr",
  },
  {
    day: "Freitag",
    pub: "17:00–03:00 Uhr",
    kitchen: "bis 02:00 Uhr",
  },
  {
    day: "Samstag",
    pub: "17:00–03:00 Uhr",
    kitchen: "bis 02:00 Uhr",
  },
  {
    day: "Sonntag",
    pub: "17:00–00:00 Uhr",
    kitchen: "bis 23:00 Uhr",
  },
];

const contactOptions = [
  {
    icon: <FiMapPin />,
    eyebrow: "Vor Ort",
    title: "Unsere Adresse",
    text: "Wölfelstraße 18 · 95444 Bayreuth · im Innenhof",
    action: "Route planen",
    href: DIRECTIONS_URL,
    external: true,
  },
  {
    icon: <FiMail />,
    eyebrow: "Schreibt uns",
    title: "Per E-Mail",
    text: CONTACT_EMAIL,
    action: "E-Mail schreiben",
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: <LuCalendarCheck />,
    eyebrow: "Euer Besuch",
    title: "Tisch reservieren",
    text: "Sichert euch direkt einen Tisch für euren nächsten Abend bei Monty’s.",
    action: "Jetzt reservieren",
    href: "/reservierung",
    internal: true,
  },
  {
    icon: <FiStar />,
    eyebrow: "Eure Meinung",
    title: "Google-Bewertung",
    text: "Ihr wart bei uns? Dann freuen wir uns sehr über eure ehrliche Bewertung.",
    action: "Bewertung abgeben",
    href: REVIEW_URL,
    external: true,
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
          threshold: 0.12,
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
        "contact-reveal",
        `contact-reveal--${direction}`,
        stagger
          ? "contact-reveal--stagger"
          : "",
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--contact-reveal-delay":
          `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

function Contact() {

  const scrollToContactForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const subject = formData.get("subject")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  const emailSubject = `Kontaktanfrage über die Website: ${subject}`;

  const emailBody = [
    "Neue Kontaktanfrage über die Monty's Website",
    "",
    `Name: ${name}`,
    `E-Mail-Adresse: ${email}`,
    `Telefonnummer: ${phone || "Nicht angegeben"}`,
    `Betreff: ${subject}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");

  const mailtoLink =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(emailSubject)}` +
    `&body=${encodeURIComponent(emailBody)}`;

  window.location.href = mailtoLink;
};

  return (
    <main className="contact-page">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="contact-hero">
        <div
          className="contact-hero__grain"
          aria-hidden="true"
        />

        <div
          className="contact-hero__background-word"
          aria-hidden="true"
        >
          Hallo
        </div>

        <div className="contact-hero__container">
          <div className="contact-hero__content contact-load-animation contact-load-animation--left">
           

            <h1>
              Wir sind
              <span>für euch da.</span>
            </h1>

            <p className="contact-hero__lead">
              Fragen, Wünsche oder eine
              Nachricht an unser Team?
              Schreibt uns oder kommt direkt
              bei Monty&apos;s vorbei.
            </p>

            <p className="contact-hero__text">
              Ihr findet uns in der
              Wölfelstraße 18 in Bayreuth,
              im Innenhof.
              Für Reservierungen gelangt ihr
              über den Button direkt zu
              unserer Reservierungsseite.
            </p>

            <div className="contact-hero__buttons">
              <button
                type="button"
                className="contact-button contact-button--primary"
                onClick={scrollToContactForm}
              >
                Nachricht schreiben
                <FiArrowDown />
              </button>

              <Link
                to="/reservierung"
                className="contact-button contact-button--secondary"
              >
                Tisch reservieren
                <FiArrowRight />
              </Link>
            </div>

            <div className="contact-hero__facts">
              <div>
                <FiMapPin />

                <span>
                  Mitten in Bayreuth
                  <small>
                    Wölfelstraße 18 · im
                    Innenhof
                  </small>
                </span>
              </div>

              <div>
                <LuBeer />

                <span>
                  Pub & Kitchen
                  <small>
                    Gute Küche, kalte
                    Getränke und gemütliche
                    Abende
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="contact-hero__visual contact-load-animation contact-load-animation--right">
            <figure className="contact-hero__image">
              <img
                src={atmosphereImage}
                alt="Gemütliche Atmosphäre bei Monty's Pub und Kitchen"
              />

              <figcaption>
                <span>
                  Monty&apos;s Pub & Kitchen
                </span>

                <strong>
                  Bayreuth
                </strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ==================================================
          KONTAKT-MÖGLICHKEITEN
      ================================================== */}

      <section className="contact-options">
        <Reveal
          className="contact-options__grid"
          stagger
        >
          {contactOptions.map(
            (option) => {
              const content = (
                <>
                  <div className="contact-option-card__icon">
                    {option.icon}
                  </div>

                  <p className="contact-option-card__eyebrow">
                    {option.eyebrow}
                  </p>

                  <h2>
                    {option.title}
                  </h2>

                  <p className="contact-option-card__text">
                    {option.text}
                  </p>

                  <span className="contact-option-card__action">
                    {option.action}
                    <FiArrowRight />
                  </span>
                </>
              );

              if (option.internal) {
                return (
                  <Link
                    key={option.title}
                    to={option.href}
                    className="contact-option-card"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <a
                  key={option.title}
                  href={option.href}
                  className="contact-option-card"
                  target={
                    option.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    option.external
                      ? "noreferrer"
                      : undefined
                  }
                >
                  {content}
                </a>
              );
            }
          )}
        </Reveal>
      </section>

      {/* ==================================================
          ÖFFNUNGSZEITEN & FORMULAR
      ================================================== */}

      <section
        className="contact-main"
        id="contact-form"
      >
        <div
          className="contact-main__background-word"
          aria-hidden="true"
        >
          Kontakt
        </div>

        <div className="contact-section-container">
          <div className="contact-main__layout">
            <Reveal
              className="contact-hours"
              direction="left"
            >
              <p className="contact-eyebrow">
                Wann ihr uns erreicht
              </p>

              <h2>
                Öffnungszeiten
              </h2>

              <p className="contact-hours__intro">
                Kommt auf ein gutes Essen,
                ein frisch gezapftes Bier
                oder einen entspannten
                Abend mit Freunden vorbei.
              </p>

              <div className="contact-hours__table">
  <div className="contact-hours__row contact-hours__row--heading">
    <span>Tag</span>
    <span>Pub</span>
    <span>Küche</span>
  </div>

  {openingHours.map((openingTime) => (
    <div
      className="contact-hours__row"
      key={openingTime.day}
    >
      <strong className="contact-hours__day">
        {openingTime.day}
      </strong>

      <span className="contact-hours__time">
        {openingTime.pub}
      </span>

      <span className="contact-hours__time">
        {openingTime.kitchen}
      </span>
    </div>
  ))}
</div>

<p className="contact-hours__notice">
  An Feiertagen oder bei Veranstaltungen können
  abweichende Öffnungszeiten gelten.
</p>

            </Reveal>

            <Reveal
              className="contact-form-panel"
              direction="right"
              delay={120}
            >
              <div className="contact-form-panel__heading">
                <div className="contact-form-panel__icon">
                  <FiMessageSquare />
                </div>

                <div>
                  <p className="contact-eyebrow">
                    Nachricht senden
                  </p>

                  <h2>
                    Wie können wir helfen?
                  </h2>
                </div>
              </div>

              <p className="contact-form-panel__intro">
                Nutzt das Formular für
                allgemeine Fragen,
                Veranstaltungen,
                Anregungen oder andere
                Anliegen. Für eine direkte
                Tischbuchung verwendet bitte
                unsere Reservierungsseite.
              </p>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="contact-name">
                      Name
                      <span>*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Vor- und Nachname"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-email">
                      E-Mail-Adresse
                      <span>*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="name@beispiel.de"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="contact-phone">
                      Telefonnummer
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Optional"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-subject">
                      Betreff
                      <span>*</span>
                    </label>

                    <select
                      id="contact-subject"
                      name="subject"
                      defaultValue=""
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Bitte auswählen
                      </option>

                      <option value="Allgemeine Frage">
                        Allgemeine Frage
                      </option>

                      <option value="Reservierung">
                        Frage zu einer
                        Reservierung
                      </option>

                      <option value="Veranstaltung">
                        Veranstaltung oder
                        Feier
                      </option>

                      <option value="Karriere">
                        Karriere und
                        Bewerbung
                      </option>

                      <option value="Sonstiges">
                        Sonstiges
                      </option>
                    </select>
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-message">
                    Nachricht
                    <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="7"
                    placeholder="Wie können wir euch helfen?"
                    required
                  />
                </div>

                <label className="contact-form__privacy">
                  <input
                    type="checkbox"
                    name="privacy"
                    value="accepted"
                    required
                  />

                  <span>
                    Ich habe die{" "}
                    <Link to="/datenschutz">
                      Datenschutzerklärung
                    </Link>{" "}
                    gelesen und stimme der
                    Verarbeitung meiner
                    Angaben zur Bearbeitung
                    meiner Anfrage zu.
                  </span>
                </label>

                <button
  type="submit"
  className="contact-button contact-button--primary contact-form__submit"
>
  E-Mail vorbereiten
  <FiSend />
</button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================
          KARTE
      ================================================== */}

      <section className="contact-map">
        <div className="contact-section-container">
          <Reveal className="contact-map__heading">
            <div>
              <p className="contact-eyebrow">
                Direkt zu Monty&apos;s
              </p>

              <h2>
                So findet ihr uns.
              </h2>
            </div>

          </Reveal>

          <Reveal
            className="contact-map__frame"
            delay={100}
          >
            <iframe
              src={MAP_EMBED_URL}
              title="Standort von Monty's Pub und Kitchen in Bayreuth"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            
          </Reveal>
        </div>
      </section>

    </main>
  );
}

export default Contact;
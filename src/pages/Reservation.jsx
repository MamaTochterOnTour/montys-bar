import atmosphereImage from "../assets/images/atmosphere.jpg";

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
  FiCalendar,
  FiCheck,
  FiClock,
  FiMail,
  FiMapPin,
  FiNavigation,
  FiUsers,
} from "react-icons/fi";

import {
  LuBeer,
  LuCalendarCheck,
  LuChefHat,
} from "react-icons/lu";

import "../styles/reservation.css";

const RESMIO_WIDGET_URL =
  "https://app.resmio.com/montys/widget";

const CONTACT_EMAIL =
  "info@montys-bar-bayreuth.de";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=W%C3%B6lfelstra%C3%9Fe%2018%2C%2095444%20Bayreuth";

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

const reservationHighlights = [
  {
    icon: <LuCalendarCheck />,
    title: "Direkt online",
    text: "Wählt euren Wunschtermin und reserviert direkt über unser Buchungssystem.",
  },
  {
    icon: <FiClock />,
    title: "Sofort verfügbar",
    text: "Freie Zeiten und verfügbare Plätze werden direkt im Reservierungsformular angezeigt.",
  },
  {
    icon: <FiUsers />,
    title: "Für euren Abend",
    text: "Ob zu zweit, mit Freunden oder mit der Familie – sichert euch rechtzeitig euren Tisch.",
  },
  {
    icon: <LuChefHat />,
    title: "Küche bis spät",
    text: "Warme Küche bis 23 Uhr, freitags und samstags sogar bis 2 Uhr nachts.",
  },
];

const reservationNotes = [
  "Bitte reserviert nur für die Anzahl an Personen, die tatsächlich teilnehmen.",
  "Bei Verspätungen oder Änderungen gebt uns bitte rechtzeitig Bescheid.",
  "Für größere Gruppen oder besondere Anlässe schreibt uns am besten direkt eine E-Mail.",
  "An Feiertagen und bei Veranstaltungen können abweichende Zeiten gelten.",
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
        "reservation-reveal",
        `reservation-reveal--${direction}`,
        stagger
          ? "reservation-reveal--stagger"
          : "",
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--reservation-reveal-delay":
          `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

function Reservation() {
  const [isResmioLoaded, setIsResmioLoaded] =
    useState(false);

  const scrollToWidget = () => {
    document
      .getElementById("reservation-widget")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="reservation-page">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="reservation-hero">
        <div
          className="reservation-hero__grain"
          aria-hidden="true"
        />

        <div
          className="reservation-hero__background-word"
          aria-hidden="true"
        >
          Reservieren
        </div>

        <div className="reservation-hero__container">
          <div className="reservation-hero__content reservation-load-animation reservation-load-animation--left">

            <h1>
              Tisch
              <span>reservieren.</span>
            </h1>

            <p className="reservation-hero__lead">
              Sichert euch euren Platz für
              gutes Essen, kalte Getränke und
              einen gemütlichen Abend bei
              Monty&apos;s.
            </p>

            <p className="reservation-hero__text">
              Über unser Reservierungsformular
              könnt ihr euren Wunschtermin
              direkt auswählen und die
              Reservierung bequem online
              abschließen.
            </p>

            <div className="reservation-hero__buttons">
              <button
                type="button"
                className="reservation-button reservation-button--primary"
                onClick={scrollToWidget}
              >
                Termin auswählen
                <FiArrowDown />
              </button>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "Frage zu einer Reservierung bei Monty's"
                )}`}
                className="reservation-button reservation-button--secondary"
              >
                Frage stellen
                <FiArrowRight />
              </a>
            </div>

            <div className="reservation-hero__facts">
              <div>
                <FiMapPin />

                <span>
                  Wölfelstraße 18
                  <small>
                    95444 Bayreuth · im Innenhof
                  </small>
                </span>
              </div>

              <div>
                <FiClock />

                <span>
                  Ab 17 Uhr geöffnet
                  <small>
                    Mittwoch ist Ruhetag
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className="reservation-hero__visual reservation-load-animation reservation-load-animation--right">
            <figure className="reservation-hero__image">
              <img
                src={atmosphereImage}
                alt="Gemütliche Atmosphäre bei Monty's Pub und Kitchen"
              />

              <figcaption>
                <span>
                  Monty&apos;s Pub & Kitchen
                </span>

                <strong>
                  Euer Tisch
                </strong>
              </figcaption>
            </figure>


          </div>
        </div>
      </section>

      {/* ==================================================
          VORTEILE
      ================================================== */}

      <section className="reservation-highlights">
        <Reveal
          className="reservation-highlights__grid"
          stagger
        >
          {reservationHighlights.map(
            (highlight) => (
              <article
                className="reservation-highlight-card"
                key={highlight.title}
              >
                <div className="reservation-highlight-card__icon">
                  {highlight.icon}
                </div>

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
          RESMIO-WIDGET UND ÖFFNUNGSZEITEN
      ================================================== */}

      <section
        className="reservation-booking"
        id="reservation-widget"
      >
        <div
          className="reservation-booking__background-word"
          aria-hidden="true"
        >
          Termin
        </div>

        <div className="reservation-section-container">
          <div className="reservation-booking__heading">
            <Reveal direction="left">
              <p className="reservation-eyebrow">
                Online reservieren
              </p>

              <h2>
                Wann dürfen wir euch
                begrüßen?
              </h2>
            </Reveal>

            <Reveal
              direction="right"
              delay={100}
            >
              <p className="reservation-booking__heading-text">
                Wählt im Formular das Datum,
                die Uhrzeit und die
                Personenzahl aus. Die
                Reservierung wird direkt über
                Resmio bearbeitet.
              </p>
            </Reveal>
          </div>

          <div className="reservation-booking__layout">
            {/* RESMIO */}

            <Reveal
              className="reservation-widget-panel"
              direction="left"
            >
              <div className="reservation-widget-panel__heading">
                <div className="reservation-widget-panel__icon">
                  <LuCalendarCheck />
                </div>

                <div>
                  <p className="reservation-eyebrow reservation-eyebrow--mobile-break">
  <span>Reservierungs-</span>
  <span>formular</span>
</p>

                  <h3>
                    Euren Tisch auswählen
                  </h3>
                </div>
              </div>

              <div className="reservation-widget-panel__frame">
  {isResmioLoaded ? (
    <div className="reservation-widget-panel__loaded">
      <iframe
        src={RESMIO_WIDGET_URL}
        title="Tischreservierung bei Monty's über Resmio"
        loading="lazy"
        allow="payment"
      />

      <button
        type="button"
        className="reservation-widget-panel__revoke"
        onClick={() => setIsResmioLoaded(false)}
      >
        Resmio wieder deaktivieren
      </button>
    </div>
  ) : (
    <div className="reservation-widget-panel__consent">
      <LuCalendarCheck aria-hidden="true" />

      <p className="reservation-eyebrow">
        Externes Reservierungssystem
      </p>

      <h4 className="reservation-consent-title">
  <span>Reservierungsformular</span>
  <span>laden</span>
</h4>

      <p>
        Für die Online-Reservierung verwenden
        wir den externen Dienst Resmio. Beim
        Laden des Formulars wird eine Verbindung
        zu Resmio hergestellt. Dabei können
        insbesondere eure IP-Adresse sowie
        Browser-, Geräte- und Zugriffsinformationen
        an Resmio übermittelt werden.
      </p>

      <p>
        Das Reservierungsformular wird erst
        geladen, wenn ihr aktiv zustimmt.
      </p>

      <div className="reservation-widget-panel__consent-actions">
        <button
          type="button"
          className="reservation-button reservation-button--primary"
          onClick={() => setIsResmioLoaded(true)}
        >
          Resmio laden
          <FiCalendar />
        </button>

        <a
          href={RESMIO_WIDGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reservation-button reservation-button--secondary"
        >
          Reservierung extern öffnen
          <FiArrowRight />
        </a>
      </div>

      <small>
        Weitere Informationen findet ihr in
        unserer{" "}
        <Link to="/datenschutz">
          Datenschutzerklärung
        </Link>
        .
      </small>
    </div>
  )}
</div>

              {isResmioLoaded && (
  <div className="reservation-widget-panel__fallback">
    <p>
      Das Formular wird nicht richtig angezeigt?
    </p>

    <a
      href={RESMIO_WIDGET_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Reservierung direkt öffnen
      <FiArrowRight />
    </a>
  </div>
)}
            </Reveal>

            {/* ÖFFNUNGSZEITEN */}

            <Reveal
              className="reservation-hours"
              direction="right"
              delay={120}
            >
              <p className="reservation-eyebrow">
                Wann wir geöffnet haben
              </p>

              <h3>
                Öffnungszeiten
              </h3>

              <p className="reservation-hours__intro">
                Kommt zum Abendessen, auf ein
                frisch gezapftes Bier oder
                verbringt einen langen Abend
                mit Freunden bei uns.
              </p>

              <div className="reservation-hours__table">
                <div className="reservation-hours__row reservation-hours__row--heading">
                  <span>Tag</span>
                  <span>Pub</span>
                  <span>Küche</span>
                </div>

                {openingHours.map(
                  (openingTime) => (
                    <div
                      className={`reservation-hours__row ${
                        openingTime.pub === "Ruhetag"
                          ? "reservation-hours__row--closed"
                          : ""
                      }`}
                      key={openingTime.day}
                    >
                      <strong>
                        {openingTime.day}
                      </strong>

                      <span>
                        {openingTime.pub}
                      </span>

                      <span>
                        {openingTime.kitchen}
                      </span>
                    </div>
                  )
                )}
              </div>

              <p className="reservation-hours__notice">
                An Feiertagen und bei
                Veranstaltungen können
                abweichende Öffnungszeiten
                gelten.
              </p>

              <div className="reservation-hours__address">
                <FiMapPin />

                <div>
                  <small>
                    Unsere Adresse
                  </small>

                  <strong>
                    Wölfelstraße 18
                  </strong>

                  <span>
                    95444 Bayreuth · im
                    Innenhof
                  </span>
                </div>
              </div>

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="reservation-text-link"
              >
                Route zu Monty&apos;s
                <FiNavigation />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Reservation;
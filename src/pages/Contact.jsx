import { useState } from "react";
import {
  FiClock,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import "../styles/contact.css";

const openingHours = [
  {
    day: "Montag",
    bar: "17:00–00:00 Uhr",
    kitchen: "bis 23:00 Uhr",
  },
  {
    day: "Dienstag",
    bar: "17:00–00:00 Uhr",
    kitchen: "bis 23:00 Uhr",
  },
  {
    day: "Mittwoch",
    bar: "Ruhetag",
    kitchen: "geschlossen",
    closed: true,
  },
  {
    day: "Donnerstag",
    bar: "17:00–00:00 Uhr",
    kitchen: "bis 23:00 Uhr",
  },
  {
    day: "Freitag",
    bar: "17:00–03:00 Uhr",
    kitchen: "bis 02:00 Uhr",
  },
  {
    day: "Samstag",
    bar: "17:00–03:00 Uhr",
    kitchen: "bis 02:00 Uhr",
  },
  {
    day: "Sonntag",
    bar: "17:00–00:00 Uhr",
    kitchen: "bis 23:00 Uhr",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacyAccepted: false,
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setError("Bitte fülle alle Pflichtfelder aus.");
      return;
    }

    if (!formData.privacyAccepted) {
      setError(
        "Bitte bestätige, dass du die Datenschutzerklärung gelesen hast.",
      );
      return;
    }

    const subject = encodeURIComponent(
      `Kontaktanfrage über die Website – ${formData.subject}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `E-Mail: ${formData.email}`,
        `Telefon: ${formData.phone || "Keine Angabe"}`,
        `Thema: ${formData.subject}`,
        "",
        "Nachricht:",
        formData.message,
      ].join("\n"),
    );

    window.location.href =
      `mailto:info@montys-bar-bayreuth.de?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">
      {/* SEITENKOPF */}
      <section className="contact-intro">
        <div className="contact-container">
          <p className="contact-eyebrow">
            Monty&apos;s Pub & Kitchen
          </p>

          <div className="contact-intro__content">
            <h1>Kontakt & Öffnungszeiten</h1>

            <p>
              Ihr habt eine Frage, möchtet eine größere Gruppe anmelden oder
              braucht weitere Informationen? Hier findet ihr unsere
              Kontaktdaten und Öffnungszeiten.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKTDATEN */}
      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info-grid">
            <article className="contact-info-card">
              <FiMapPin />

              <div>
                <p className="contact-eyebrow">Adresse</p>
                <h2>Monty&apos;s Pub & Kitchen</h2>

                <address>
                  Straße und Hausnummer folgen
                  <br />
                  95444 Bayreuth
                </address>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bayreuth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Route öffnen
                </a>
              </div>
            </article>

            <article className="contact-info-card">
              <FiPhone />

              <div>
                <p className="contact-eyebrow">Telefon</p>
                <h2>Direkt erreichbar</h2>

                <p>
                  Für allgemeine Fragen, Gruppenanfragen und kurzfristige
                  Anliegen.
                </p>

                <a href="tel:+490000000000">
                  Telefonnummer folgt
                </a>
              </div>
            </article>

            <article className="contact-info-card">
              <FiMail />

              <div>
                <p className="contact-eyebrow">E-Mail</p>
                <h2>Schreibt uns</h2>

                <p>
                  Wir melden uns so schnell wie möglich auf eure Nachricht
                  zurück.
                </p>

                <a href="mailto:info@montys-bar-bayreuth.de">
                  info@montys-bar-bayreuth.de
                </a>
              </div>
            </article>

            <article className="contact-info-card">
              <FiClock />

              <div>
                <p className="contact-eyebrow">Reservierung</p>
                <h2>Tisch reservieren</h2>

                <p>
                  Reservierungen laufen bequem und direkt über unser
                  Online-Reservierungssystem.
                </p>

                <a href="/reservierung">
                  Zur Reservierung
                </a>
              </div>
            </article>
          </div>

          {/* ÖFFNUNGSZEITEN UND FORMULAR */}
          <div className="contact-main-layout">
            <section className="contact-hours">
              <div className="contact-section-heading">
                <p className="contact-eyebrow">
                  Wann wir für euch da sind
                </p>

                <h2>Öffnungszeiten</h2>

                <p>
                  Die Küchenzeiten richten sich nach dem jeweiligen
                  Öffnungstag.
                </p>
              </div>

              <div className="contact-hours__table">
                <div className="contact-hours__header">
                  <span>Tag</span>
                  <span>Pub</span>
                  <span>Küche</span>
                </div>

                {openingHours.map((entry) => (
                  <div
                    key={entry.day}
                    className={
                      entry.closed
                        ? "contact-hours__row contact-hours__row--closed"
                        : "contact-hours__row"
                    }
                  >
                    <strong>{entry.day}</strong>
                    <span>{entry.bar}</span>
                    <span>{entry.kitchen}</span>
                  </div>
                ))}
              </div>

              <div className="contact-hours__note">
                <p>
                  An Feiertagen oder bei Veranstaltungen können abweichende
                  Öffnungszeiten gelten.
                </p>
              </div>

              <div className="contact-socials">
                <div>
                  <p className="contact-eyebrow">
                    Bleibt auf dem Laufenden
                  </p>

                  <h2>Folgt Monty&apos;s</h2>
                </div>

                <div className="contact-socials__links">
                  <a
                    href="https://www.instagram.com/montys_bayreuth"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Monty's auf Instagram"
                  >
                    <FiInstagram />
                    Instagram
                  </a>

                  <a
                    href="https://www.facebook.com/share/1Cny7UK2BS/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Monty's auf Facebook"
                  >
                    <FiFacebook />
                    Facebook
                  </a>
                </div>
              </div>
            </section>

            <section className="contact-form-card">
              <div className="contact-section-heading">
                <p className="contact-eyebrow">
                  Nachricht senden
                </p>

                <h2>Wie können wir helfen?</h2>

                <p>
                  Für Tischreservierungen nutzt bitte die Reservierungsseite.
                  Dieses Formular ist für allgemeine Fragen und Anfragen
                  gedacht.
                </p>
              </div>

              {error && (
                <div className="contact-form__error">
                  {error}
                </div>
              )}

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form__grid">
                  <div className="contact-form__group">
                    <label htmlFor="contact-name">
                      Name <span>*</span>
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vor- und Nachname"
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="contact-email">
                      E-Mail <span>*</span>
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="deine@email.de"
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="contact-phone">
                      Telefonnummer
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Optional"
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="contact-subject">
                      Thema <span>*</span>
                    </label>

                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">
                        Bitte auswählen
                      </option>

                      <option value="Allgemeine Anfrage">
                        Allgemeine Anfrage
                      </option>

                      <option value="Gruppenanfrage">
                        Gruppenanfrage
                      </option>

                      <option value="Veranstaltung">
                        Veranstaltung
                      </option>

                      <option value="Speise- oder Getränkekarte">
                        Speise- oder Getränkekarte
                      </option>

                      <option value="Feedback">
                        Feedback
                      </option>

                      <option value="Sonstiges">
                        Sonstiges
                      </option>
                    </select>
                  </div>

                  <div className="contact-form__group contact-form__group--full">
                    <label htmlFor="contact-message">
                      Nachricht <span>*</span>
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Schreibt uns hier eure Nachricht."
                      rows="8"
                    />
                  </div>

                  <div className="contact-form__privacy contact-form__group--full">
                    <label>
                      <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                      />

                      <span>
                        Ich habe die{" "}
                        <a href="/datenschutz">
                          Datenschutzerklärung
                        </a>{" "}
                        gelesen und stimme der Verarbeitung meiner Angaben zur
                        Bearbeitung der Anfrage zu. *
                      </span>
                    </label>
                  </div>
                </div>

                <p className="contact-form__note">
                  * Pflichtfelder. Nach dem Absenden öffnet sich das
                  E-Mail-Programm.
                </p>

                <button
                  type="submit"
                  className="contact-form__button"
                >
                  <FiSend />
                  Nachricht vorbereiten
                </button>
              </form>
            </section>
          </div>

          {/* KARTENPLATZHALTER */}
          <section className="contact-map">
            <div className="contact-map__content">
              <FiMapPin />

              <p className="contact-eyebrow">
                Standort in Bayreuth
              </p>

              <h2>Kartenansicht folgt</h2>

              <p>
                Sobald die vollständige Adresse feststeht, kann hier eine
                interaktive Google-Maps-Karte eingebunden werden.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Contact;
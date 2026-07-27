import { Link } from "react-router-dom";

import {
  FiArrowLeft,
  FiBriefcase,
  FiExternalLink,
  FiFileText,
  FiMail,
  FiMapPin,
  FiShield,
  FiUser,
} from "react-icons/fi";

import "../styles/legal.css";

function Imprint() {
  return (
    <main className="legal-page">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="legal-hero">
        <div
          className="legal-hero__grain"
          aria-hidden="true"
        />

        <div
          className="legal-hero__background-word"
          aria-hidden="true"
        >
          Rechtliches
        </div>

        <div className="legal-hero__container">
          <p className="legal-eyebrow">
            Rechtliche Informationen
          </p>

          <h1>Impressum</h1>

          <p className="legal-hero__lead">
            Anbieterkennzeichnung und rechtliche Angaben
            zur Website von Monty&apos;s Pub &amp; Kitchen.
          </p>

          <Link
            to="/"
            className="legal-back-link"
          >
            <FiArrowLeft />
            Zurück zur Startseite
          </Link>
        </div>
      </section>

      {/* ==================================================
          INHALT
      ================================================== */}

      <section className="legal-content">
        <div className="legal-section-container">
          <div className="legal-content__layout">
            {/* HAUPTINHALT */}

            <article className="legal-document">
              <header className="legal-document__header">
                <div className="legal-document__icon">
                  <FiFileText />
                </div>

                <div>
                  <p className="legal-eyebrow">
                    Anbieterkennzeichnung
                  </p>

                  <h2>
                    Angaben gemäß § 5 DDG
                  </h2>
                </div>
              </header>

              {/* UNTERNEHMEN */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiBriefcase />

                  <h3>Unternehmen</h3>
                </div>

                <address className="legal-address">
                  <strong>
                    Monty&apos;s Operations GmbH
                  </strong>

                  <span>Wölfelstraße 18</span>
                  <span>95444 Bayreuth</span>
                  <span>Deutschland</span>
                </address>
              </section>

              {/* VERTRETUNG */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiUser />

                  <h3>Vertretungsberechtigung</h3>
                </div>

                <p>
                  Vertreten durch die Geschäftsführerin:
                </p>

                <p>
                  <strong>
                    Ann-Kathrin Waltes
                  </strong>
                </p>
              </section>

              {/* KONTAKT */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiMail />

                  <h3>Kontakt</h3>
                </div>

                <dl className="legal-details">
                  <div>
                    <dt>E-Mail-Adresse</dt>

                    <dd>
                      <a href="mailto:info@montys-bar-bayreuth.de">
                        info@montys-bar-bayreuth.de
                      </a>
                    </dd>
                  </div>
                </dl>
              </section>

              {/* HANDELSREGISTER */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiFileText />

                  <h3>Handelsregister</h3>
                </div>

                <dl className="legal-details">
                  <div>
                    <dt>Registergericht</dt>

                    <dd>
                      Amtsgericht Bayreuth
                    </dd>
                  </div>

                  <div>
                    <dt>Registernummer</dt>

                    <dd>HRB 8663</dd>
                  </div>
                </dl>
              </section>

              {/* UMSATZSTEUER */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiShield />

                  <h3>
                    Umsatzsteuer-Identifikationsnummer
                  </h3>
                </div>

                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß
                  § 27a Umsatzsteuergesetz:
                </p>

                <p>
                  <strong>DE461811638</strong>
                </p>
              </section>

              {/* VERBRAUCHERSTREITBEILEGUNG */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiShield />

                  <h3>
                    Verbraucherstreitbeilegung
                  </h3>
                </div>

                {/*
                  WICHTIG:

                  Der folgende Satz darf nur angezeigt werden,
                  wenn die Monty's Operations GmbH tatsächlich
                  weder bereit noch verpflichtet ist, an einem
                  Streitbeilegungsverfahren teilzunehmen.

                  Bitte von der Geschäftsführung bestätigen lassen.
                */}

                <p>
                  Die Monty&apos;s Operations GmbH ist nicht
                  bereit und nicht verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              {/* HAFTUNG FÜR INHALTE */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiFileText />

                  <h3>Inhalte dieser Website</h3>
                </div>

                <p>
                  Die Inhalte dieser Website wurden mit
                  größtmöglicher Sorgfalt erstellt. Wir
                  übernehmen jedoch keine Gewähr für die
                  Richtigkeit, Vollständigkeit und Aktualität
                  der bereitgestellten Informationen.
                </p>

                <p>
                  Gesetzliche Verpflichtungen zur Entfernung
                  oder Sperrung der Nutzung von Informationen
                  bleiben hiervon unberührt.
                </p>
              </section>

              {/* EXTERNE LINKS */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiExternalLink />

                  <h3>Externe Links</h3>
                </div>

                <p>
                  Diese Website enthält Verknüpfungen zu
                  externen Websites und Diensten Dritter.
                  Auf deren Inhalte und Datenverarbeitung
                  haben wir keinen unmittelbaren Einfluss.
                </p>

                <p>
                  Für die Inhalte der verlinkten Seiten ist
                  stets der jeweilige Anbieter oder Betreiber
                  verantwortlich.
                </p>
              </section>

              {/* URHEBERRECHT */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiShield />

                  <h3>Urheberrecht</h3>
                </div>

                <p>
                  Die auf dieser Website veröffentlichten
                  Inhalte, Texte, Fotografien, Grafiken und
                  sonstigen Werke unterliegen dem deutschen
                  Urheberrecht, soweit sie urheberrechtlich
                  geschützt sind.
                </p>

                <p>
                  Jede Verwertung außerhalb der gesetzlichen
                  Grenzen des Urheberrechts bedarf der
                  vorherigen Zustimmung des jeweiligen
                  Rechteinhabers.
                </p>

                <p>
                  Inhalte Dritter werden als solche
                  gekennzeichnet, sofern sie nicht von der
                  Monty&apos;s Operations GmbH stammen.
                </p>
              </section>
            </article>

            {/* SEITENLEISTE */}

            <aside className="legal-sidebar">
              <div className="legal-sidebar__card">
                <div className="legal-sidebar__icon">
                  <FiMapPin />
                </div>

                <p className="legal-eyebrow">
                  Betreiber der Website
                </p>

                <h2>
                  Monty&apos;s Operations GmbH
                </h2>

                <address>
                  Wölfelstraße 18
                  <br />
                  95444 Bayreuth
                  <br />
                  Deutschland
                </address>

                <a
                  href="mailto:info@montys-bar-bayreuth.de"
                  className="legal-sidebar__link"
                >
                  <FiMail />
                  E-Mail schreiben
                </a>
              </div>

              <div className="legal-sidebar__navigation">
                <p className="legal-eyebrow">
                  Weitere Informationen
                </p>

                <Link to="/datenschutz">
                  Datenschutzerklärung
                  <FiExternalLink />
                </Link>

                <Link to="/kontakt">
                  Kontakt
                  <FiExternalLink />
                </Link>

                <Link to="/reservierung">
                  Tisch reservieren
                  <FiExternalLink />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ==================================================
          ABSCHLUSS
      ================================================== */}

      <section className="legal-footer-section">
        <div
          className="legal-footer-section__background-word"
          aria-hidden="true"
        >
          Monty&apos;s
        </div>

        <div className="legal-footer-section__content">
          <p className="legal-eyebrow">
            Monty&apos;s Pub &amp; Kitchen
          </p>

          <h2>
            Rechtlich transparent.
            <span>Persönlich für euch da.</span>
          </h2>

          <p>
            Bei Fragen zu dieser Website oder zu den
            enthaltenen Informationen erreicht ihr uns
            jederzeit per E-Mail.
          </p>

          <a
            href="mailto:info@montys-bar-bayreuth.de"
            className="legal-button"
          >
            <FiMail />
            E-Mail schreiben
          </a>
        </div>
      </section>
    </main>
  );
}

export default Imprint;
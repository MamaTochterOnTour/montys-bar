import "../styles/legal.css";

function Imprint() {
  return (
    <main className="legal-page">
      <section className="legal-intro">
        <div className="legal-container">
          <p className="legal-eyebrow">
            Rechtliche Informationen
          </p>

          <div className="legal-intro__content">
            <h1>Impressum</h1>

            <p>
              Angaben zur verantwortlichen Betreiberin beziehungsweise zum
              verantwortlichen Betreiber dieser Website.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          <article className="legal-card">
            <section className="legal-section">
              <p className="legal-section__number">01</p>

              <div>
                <h2>Angaben gemäß § 5 DDG</h2>

                <address className="legal-address">
                  <strong>[Vollständiger Unternehmensname]</strong>
                  <br />
                  [Vorname und Nachname des Inhabers / der Inhaberin]
                  <br />
                  [Straße und Hausnummer]
                  <br />
                  [Postleitzahl und Ort]
                </address>
              </div>
            </section>

            <section className="legal-section">
              <p className="legal-section__number">02</p>

              <div>
                <h2>Vertreten durch</h2>

                <p>
                  [Vorname und Nachname der vertretungsberechtigten Person]
                </p>

                <p className="legal-hint">
                  Bei einem Einzelunternehmen kann dieser Abschnitt entfallen,
                  wenn die Inhaberin oder der Inhaber bereits oben eindeutig
                  genannt ist.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <p className="legal-section__number">03</p>

              <div>
                <h2>Kontakt</h2>

                <p>
                  Telefon:{" "}
                  <a href="tel:+490000000000">
                    [Telefonnummer]
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:info@montys-bar-bayreuth.de">
                    [E-Mail-Adresse]
                  </a>
                </p>
              </div>
            </section>

            <section className="legal-section">
              <p className="legal-section__number">04</p>

              <div>
                <h2>Registereintrag</h2>

                <p>
                  Eintragung im Handelsregister:
                  <br />
                  Registergericht: [zuständiges Registergericht]
                  <br />
                  Registernummer: [Registernummer]
                </p>

                <p className="legal-hint">
                  Diesen Abschnitt vollständig entfernen, falls kein
                  Registereintrag besteht.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <p className="legal-section__number">05</p>

              <div>
                <h2>Umsatzsteuer</h2>

                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a
                  Umsatzsteuergesetz:
                  <br />
                  [Umsatzsteuer-Identifikationsnummer]
                </p>

                <p className="legal-hint">
                  Nicht mit der persönlichen Steuernummer verwechseln. Falls
                  keine Umsatzsteuer-Identifikationsnummer vergeben wurde,
                  diesen Abschnitt entfernen.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <p className="legal-section__number">06</p>

              <div>
                <h2>Zuständige Aufsichtsbehörde</h2>

                <p>
                  [Name der zuständigen Behörde]
                  <br />
                  [Anschrift der Behörde]
                  <br />
                  [Internetseite der Behörde]
                </p>

                <p className="legal-hint">
                  Dieser Abschnitt ist nur einzufügen, wenn für die ausgeübte
                  Tätigkeit eine behördliche Zulassung erforderlich ist und
                  die entsprechende Angabe rechtlich verlangt wird.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <p className="legal-section__number">07</p>

              <div>
                <h2>
                  Verantwortlich für redaktionelle Inhalte
                </h2>

                <address className="legal-address">
                  [Vorname und Nachname]
                  <br />
                  [Straße und Hausnummer]
                  <br />
                  [Postleitzahl und Ort]
                </address>

                <p className="legal-hint">
                  Dieser Abschnitt ist insbesondere relevant, wenn auf der
                  Website journalistisch-redaktionell gestaltete Inhalte
                  veröffentlicht werden. Bei einer reinen Gastronomie-Website
                  ohne solchen redaktionellen Bereich kann er häufig
                  entfallen.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <p className="legal-section__number">08</p>

              <div>
                <h2>Verbraucherstreitbeilegung</h2>

                <p>
                  Wir sind nicht bereit und nicht verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <p className="legal-hint">
                  Dieser Text darf nur verwendet werden, wenn er tatsächlich
                  der Haltung des Unternehmens entspricht. Besteht eine
                  Verpflichtung oder Bereitschaft zur Teilnahme, muss stattdessen
                  die zuständige Verbraucherschlichtungsstelle mit Anschrift
                  und Website genannt werden.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <p className="legal-section__number">09</p>

              <div>
                <h2>Haftung für Inhalte</h2>

                <p>
                  Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Eine
                  Verpflichtung zur Überwachung übermittelter oder
                  gespeicherter fremder Informationen besteht nur im Rahmen
                  der gesetzlichen Vorgaben.
                </p>

                <p>
                  Sollten uns konkrete Rechtsverletzungen bekannt werden,
                  entfernen wir die betreffenden Inhalte im Rahmen der
                  gesetzlichen Verpflichtungen unverzüglich.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <p className="legal-section__number">10</p>

              <div>
                <h2>Haftung für Links</h2>

                <p>
                  Diese Website kann Links zu externen Websites enthalten, auf
                  deren Inhalte wir keinen unmittelbaren Einfluss haben. Für
                  die Inhalte der verlinkten Seiten ist der jeweilige Anbieter
                  oder Betreiber verantwortlich.
                </p>

                <p>
                  Werden uns konkrete Rechtsverletzungen auf verlinkten Seiten
                  bekannt, entfernen wir die betreffenden Links im Rahmen der
                  gesetzlichen Verpflichtungen.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <p className="legal-section__number">11</p>

              <div>
                <h2>Urheberrecht</h2>

                <p>
                  Die auf dieser Website erstellten Inhalte und Werke
                  unterliegen dem deutschen Urheberrecht. Jede
                  urheberrechtlich relevante Nutzung außerhalb der
                  gesetzlichen Schranken bedarf der vorherigen Zustimmung der
                  jeweiligen Rechteinhaber.
                </p>

                <p>
                  Soweit Inhalte auf dieser Website nicht von uns erstellt
                  wurden, werden die Rechte Dritter beachtet und entsprechende
                  Quellen oder Rechteinhaber kenntlich gemacht.
                </p>
              </div>
            </section>
          </article>

          <aside className="legal-warning">
            <strong>Vor Veröffentlichung ausfüllen</strong>

            <p>
              Alle Angaben in eckigen Klammern sind Platzhalter. Nicht
              zutreffende Abschnitte müssen entfernt und die übrigen Angaben
              anhand der tatsächlichen Unternehmensunterlagen geprüft werden.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Imprint;
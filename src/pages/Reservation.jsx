import { useEffect } from "react";
import { FiClock, FiInfo, FiPhone } from "react-icons/fi";
import "../styles/reservation.css";

function Reservation() {
  useEffect(() => {
    const widgetContainer = document.getElementById("resmio-montys");

    if (!widgetContainer) {
      return;
    }

    widgetContainer.innerHTML = "";

    const existingScript = document.querySelector(
      'script[data-resmio-widget="montys"]'
    );

    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");

    script.src =
      "https://static.resmio.com/static/de/widget.js#id=montys&width=100%25&height=650px";
    script.async = true;
    script.dataset.resmioWidget = "montys";

    document.body.appendChild(script);

    return () => {
      script.remove();
      widgetContainer.innerHTML = "";
    };
  }, []);

  return (
    <main className="reservation-page">
      <section className="reservation-intro">
        <div className="reservation-container">
          <p className="reservation-eyebrow">Monty&apos;s Bar Bayreuth</p>

          <div className="reservation-intro__content">
            <h1>Tisch reservieren</h1>

            <p>
              Reserviert euren Tisch ganz bequem online und freut euch auf
              gutes Essen, kalte Getränke und einen gemütlichen Abend bei
              Monty&apos;s.
            </p>
          </div>
        </div>
      </section>

      <section className="reservation-content">
        <div className="reservation-container">
          <div className="reservation-layout">
            <div className="reservation-widget-card">
              <div className="reservation-widget-card__header">
                <div>
                  <p className="reservation-eyebrow">Online reservieren</p>
                  <h2>Wählt euren Wunschtermin</h2>
                </div>

                <span className="reservation-widget-card__status">
                  Direkt verfügbar
                </span>
              </div>

              <div className="reservation-widget-wrapper">
                <div id="resmio-montys" />
              </div>
            </div>

            <aside className="reservation-info">
              <div className="reservation-info__card">
                <FiClock />

                <div>
                  <h2>Öffnungszeiten</h2>

                  <p>
                    Montag, Dienstag, Donnerstag und Sonntag:
                    <br />
                    17:00–00:00 Uhr
                  </p>

                  <p>
                    Freitag und Samstag:
                    <br />
                    17:00–03:00 Uhr
                  </p>

                  <p>Mittwoch ist Ruhetag.</p>
                </div>
              </div>

              <div className="reservation-info__card">
                <FiInfo />

                <div>
                  <h2>Gut zu wissen</h2>

                  <p>
                    Eure Reservierung ist erst verbindlich, sobald sie über
                    Resmio bestätigt wurde.
                  </p>

                  <p>
                    Für größere Gruppen oder besondere Wünsche meldet euch
                    bitte direkt bei uns.
                  </p>
                </div>
              </div>

              <div className="reservation-info__card">
                <FiPhone />

                <div>
                  <h2>Persönlich reservieren</h2>

                  <p>
                    Telefonische Reservierungen sind ebenfalls möglich.
                  </p>

                  <a href="tel:+490000000000">
                    Telefonnummer folgt
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Reservation;
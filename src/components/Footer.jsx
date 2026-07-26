import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import logo from "../assets/logos/montys-logo.png";

import partnerLogo1 from "../assets/images/logo1.png";
import partnerLogo2 from "../assets/images/logo2.png";
import partnerLogo3 from "../assets/images/logo3.png";
import partnerLogo4 from "../assets/images/logo4.png";

import "../styles/footer.css";

const footerNavigation = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Speisekarte",
    path: "/speisekarte",
  },
  {
    label: "Getränkekarte",
    path: "/getraenkekarte",
  },
  {
    label: "Über uns",
    path: "/ueber-uns",
  },
  {
    label: "Karriere",
    path: "/karriere",
  },
  {
    label: "Kontakt",
    path: "/kontakt",
  },
];

const partners = [
  {
    id: 1,
    name: "Bayreuther Brauhaus",
    logo: partnerLogo1,
    website: "",
  },
  {
    id: 2,
    name: "Maisel’s Weisse",
    logo: partnerLogo2,
    website: "",
  },
  {
    id: 3,
    name: "MBC",
    logo: partnerLogo3,
    website: "",
  },
  {
    id: 4,
    name: "GRAPOS",
    logo: partnerLogo4,
    website: "",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* HAUPTBEREICH */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-main__grid">
            {/* LOGO UND KURZTEXT */}
            <div className="footer-brand">
              <Link
                to="/"
                className="footer-brand__logo"
                aria-label="Zur Startseite von Monty's"
              >
                <img
                  src={logo}
                  alt="Monty's Pub & Kitchen Bayreuth"
                />
              </Link>

              <p>
                Ehrliche Gastfreundschaft, frisch zubereitete Küche und eine
                gemütliche Pub-Atmosphäre mitten in Bayreuth.
              </p>

              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/montys_bayreuth"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Monty's auf Instagram"
                >
                  <FiInstagram />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/share/1Cny7UK2BS/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Monty's auf Facebook"
                >
                  <FiFacebook />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="footer-column">
              <p className="footer-column__title">
                Entdecken
              </p>

              <nav
                className="footer-navigation"
                aria-label="Navigation im Footer"
              >
                {footerNavigation.map((item) => (
                  <Link
                    to={item.path}
                    key={item.path}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* KONTAKT */}
            <div className="footer-column">
              <p className="footer-column__title">
                Kontakt
              </p>

              <div className="footer-contact">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Wölfelstraße+18+95444+Bayreuth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact__item"
                >
                  <FiMapPin />

                  <span>
                    <strong>Monty&apos;s Pub & Kitchen</strong>
                    Wölfelstraße 18
                    <br />
                    95444 Bayreuth
                    <small>Im Innenhof</small>
                  </span>
                </a>

                <a
                  href="mailto:info@montys-bar-bayreuth.de"
                  className="footer-contact__item"
                >
                  <FiMail />

                  <span>
                    <strong>E-Mail</strong>
                    info@montys-bar-bayreuth.de
                  </span>
                </a>
              </div>
            </div>

            {/* ÖFFNUNGSZEITEN */}
<div className="footer-column">
  <p className="footer-column__title">
    Öffnungszeiten
  </p>

  <div className="footer-opening">
    <div className="footer-opening__heading">
      <FiClock />

      <span>
        Ab 17 Uhr geöffnet
      </span>
    </div>

    <dl>
      <div>
        <dt>Montag</dt>
        <dd>17:00–00:00 Uhr</dd>
      </div>

      <div>
        <dt>Dienstag</dt>
        <dd>17:00–00:00 Uhr</dd>
      </div>

      <div className="footer-opening__closed">
        <dt>Mittwoch</dt>
        <dd>Ruhetag</dd>
      </div>

      <div>
        <dt>Donnerstag</dt>
        <dd>17:00–00:00 Uhr</dd>
      </div>

      <div>
        <dt>Freitag</dt>
        <dd>17:00–03:00 Uhr</dd>
      </div>

      <div>
        <dt>Samstag</dt>
        <dd>17:00–03:00 Uhr</dd>
      </div>

      <div>
        <dt>Sonntag</dt>
        <dd>17:00–00:00 Uhr</dd>
      </div>
    </dl>

    <div className="footer-opening__kitchen">
      <strong>Küchenzeiten</strong>

      <p>
        Montag, Dienstag, Donnerstag und Sonntag
        <span>bis 23:00 Uhr</span>
      </p>

      <p>
        Freitag und Samstag
        <span>bis 02:00 Uhr</span>
      </p>
    </div>
  </div>
</div>
          </div>

          {/* PARTNER */}
          <section className="footer-partners">
            <div className="footer-partners__heading">
              <p className="footer-column__title">
                Unsere Partner
              </p>

              <p>
                Gemeinsam mit ausgewählten Partnern sorgen wir für gute
                Produkte und besondere Genussmomente.
              </p>
            </div>

            <div className="footer-partners__logos">
              {partners.map((partner) => {
                const content = partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                  />
                ) : (
                  <span>{partner.name}</span>
                );

                if (partner.website) {
                  return (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-partner"
                      key={partner.id}
                      aria-label={`Website von ${partner.name}`}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    className="footer-partner"
                    key={partner.id}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* UNTERER BEREICH */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom__inner">
          <p>
            © {currentYear} Monty&apos;s Pub & Kitchen. Alle Rechte
            vorbehalten.
          </p>

          <div className="footer-legal">
            <Link to="/impressum">
              Impressum
            </Link>

            <Link to="/datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
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
  FiBriefcase,
  FiCheck,
  FiClock,
  FiFileText,
  FiHeart,
  FiMail,
  FiSend,
  FiUploadCloud,
  FiUsers,
} from "react-icons/fi";

import {
  LuBeer,
  LuChefHat,
} from "react-icons/lu";

import "../styles/career.css";

const CAREER_EMAIL =
  "info@montys-bar-bayreuth.de";

const careerHighlights = [
  {
    icon: <FiHeart />,
    title: "Herzliches Team",
    text: "Ein persönliches Arbeitsumfeld, in dem gegenseitiger Respekt und ein gutes Miteinander zählen.",
  },
  {
    icon: <FiClock />,
    title: "Flexible Einsätze",
    text: "Je nach Bereich sind unterschiedliche Arbeitszeitmodelle und flexible Einsätze möglich.",
  },
  {
    icon: <FiUsers />,
    title: "Echte Gemeinschaft",
    text: "Bei Monty’s soll sich nicht nur jeder Gast, sondern auch jedes Teammitglied willkommen fühlen.",
  },
  {
    icon: <FiBriefcase />,
    title: "Mitgestalten",
    text: "Eigene Ideen, Zuverlässigkeit und persönlicher Einsatz sind bei uns ausdrücklich willkommen.",
  },
];

const careerAreas = [
  {
    number: "01",
    icon: <LuBeer />,
    title: "Service & Bar",
    text: "Du gehst gerne auf Menschen zu, behältst auch an lebhaften Abenden den Überblick und sorgst dafür, dass sich unsere Gäste willkommen fühlen.",
    features: [
      "Freundlicher Gästekontakt",
      "Service im Pub",
      "Getränke und Bar",
    ],
  },
  {
    number: "02",
    icon: <LuChefHat />,
    title: "Küche",
    text: "Du arbeitest gerne mit Lebensmitteln, bist zuverlässig und möchtest gemeinsam mit dem Team ehrliche Gerichte für unsere Gäste zubereiten.",
    features: [
      "Vor- und Zubereitung",
      "Sauberes Arbeiten",
      "Zusammenarbeit im Team",
    ],
  },
  {
    number: "03",
    icon: <FiUsers />,
    title: "Aushilfe & Minijob",
    text: "Du suchst einen Nebenjob und möchtest unser Team abends, am Wochenende oder bei besonderen Veranstaltungen unterstützen.",
    features: [
      "Flexible Einsätze",
      "Neben Studium oder Beruf",
      "Verschiedene Aufgaben",
    ],
  },
  {
    number: "04",
    icon: <FiMail />,
    title: "Initiativbewerbung",
    text: "Dein gewünschter Bereich ist nicht aufgeführt? Dann erzähl uns einfach, wie du Monty’s mit deinen Erfahrungen unterstützen möchtest.",
    features: [
      "Eigene Stärken einbringen",
      "Unkompliziert bewerben",
      "Persönlich kennenlernen",
    ],
  },
];

const applicationSteps = [
  {
    number: "01",
    title: "Bewerbung vorbereiten",
    text: "Fülle das Formular aus und wähle optional deinen Lebenslauf oder weitere Unterlagen aus.",
  },
  {
    number: "02",
    title: "E-Mail versenden",
    text: "Deine E-Mail-App öffnet sich mit allen Angaben. Dort fügst du die ausgewählten Dateien manuell als Anhang hinzu.",
  },
  {
    number: "03",
    title: "Persönlich kennenlernen",
    text: "Wir prüfen deine Bewerbung und melden uns bei dir, um die nächsten Schritte persönlich zu besprechen.",
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
        "career-reveal",
        `career-reveal--${direction}`,
        stagger
          ? "career-reveal--stagger"
          : "",
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--career-reveal-delay":
          `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

function Career() {
  const [selectedFiles, setSelectedFiles] =
    useState([]);

  const [formStatus, setFormStatus] =
    useState("");

  const scrollToApplication = () => {
    document
      .getElementById("career-application")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleFileChange = (event) => {
    const files = Array.from(
      event.target.files || []
    );

    setSelectedFiles(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData =
      new FormData(event.currentTarget);

    const name =
      formData
        .get("name")
        ?.toString()
        .trim() || "";

    const email =
      formData
        .get("email")
        ?.toString()
        .trim() || "";

    const phone =
      formData
        .get("phone")
        ?.toString()
        .trim() || "";

    const area =
      formData
        .get("area")
        ?.toString()
        .trim() || "";

    const employment =
      formData
        .get("employment")
        ?.toString()
        .trim() || "";

    const startDate =
      formData
        .get("startDate")
        ?.toString()
        .trim() || "";

    const experience =
      formData
        .get("experience")
        ?.toString()
        .trim() || "";

    const message =
      formData
        .get("message")
        ?.toString()
        .trim() || "";

    const fileNames =
      selectedFiles.length > 0
        ? selectedFiles
            .map((file) => file.name)
            .join(", ")
        : "Keine Dateien ausgewählt";

    const emailSubject =
      `Bewerbung über die Website – ${area} – ${name}`;

    const emailBody = [
      "Neue Bewerbung über die Monty's Website",
      "",
      `Name: ${name}`,
      `E-Mail-Adresse: ${email}`,
      `Telefonnummer: ${phone || "Nicht angegeben"}`,
      "",
      `Gewünschter Bereich: ${area}`,
      `Beschäftigungsart: ${employment}`,
      `Frühester Start: ${startDate || "Nicht angegeben"}`,
      "",
      "Erfahrung:",
      experience || "Keine Angabe",
      "",
      "Nachricht:",
      message,
      "",
      "Ausgewählte Bewerbungsunterlagen:",
      fileNames,
      "",
      "WICHTIG:",
      "Die oben genannten Dateien müssen in der E-Mail-App noch manuell als Anhang hinzugefügt werden.",
    ].join("\n");

    const mailtoLink =
      `mailto:${CAREER_EMAIL}` +
      `?subject=${encodeURIComponent(
        emailSubject
      )}` +
      `&body=${encodeURIComponent(
        emailBody
      )}`;

    if (selectedFiles.length > 0) {
      setFormStatus(
        `Deine E-Mail-App wird geöffnet. Bitte füge dort noch ${selectedFiles.length === 1 ? "die ausgewählte Datei" : "die ausgewählten Dateien"} als Anhang hinzu: ${fileNames}`
      );
    } else {
      setFormStatus(
        "Deine E-Mail-App wird geöffnet. Du kannst dort bei Bedarf noch deinen Lebenslauf oder weitere Unterlagen anhängen."
      );
    }

    window.setTimeout(() => {
      window.location.href = mailtoLink;
    }, 300);
  };

  return (
    <main className="career-page">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="career-hero">
        <div
          className="career-hero__grain"
          aria-hidden="true"
        />


       <div className="career-hero__container">
  {/* LINKE SEITE */}

  <div className="career-hero__content career-load-animation career-load-animation--left">
    <p className="career-eyebrow">
      Karriere bei Monty&apos;s
    </p>

    <h1>
      Werde Teil
      <span>unseres Teams.</span>
    </h1>

    <p className="career-hero__lead">
      Du bist herzlich, zuverlässig und hast Lust auf gute
      Gastronomie mit Persönlichkeit? Dann möchten wir dich
      kennenlernen.
    </p>

    <p className="career-hero__text">
      Bei Monty&apos;s zählen nicht nur Lebenslauf und Erfahrung.
      Wichtig sind uns vor allem ein ehrliches Miteinander,
      Verantwortungsbewusstsein und Freude am Umgang mit Menschen.
    </p>

    <div className="career-hero__buttons">
      <button
        type="button"
        className="career-button career-button--primary"
        onClick={scrollToApplication}
      >
        Jetzt bewerben
        <FiArrowDown />
      </button>

      <a
        href={`mailto:${CAREER_EMAIL}?subject=${encodeURIComponent(
          "Frage zur Karriere bei Monty's"
        )}`}
        className="career-button career-button--secondary"
      >
        Frage stellen
        <FiArrowRight />
      </a>
    </div>

    <div className="career-hero__facts">
      <div>
        <FiUsers />

        <span>
          Persönliches Team
          <small>Gemeinsam statt gegeneinander</small>
        </span>
      </div>

      <div>
        <FiHeart />

        <span>
          Echte Gastfreundschaft
          <small>Mit Herz und Charakter</small>
        </span>
      </div>
    </div>
  </div>

  {/* RECHTE SEITE */}

  <div className="career-hero__visual career-load-animation career-load-animation--right">
    <div className="career-hero__panel">

      <h2>
        Vielleicht fehlst genau
        <span>du in unserem Team.</span>
      </h2>

      <p className="career-hero__panel-text">
        Wir freuen uns über Menschen, die zuverlässig sind,
        gerne mit anderen zusammenarbeiten und unseren Gästen
        einen richtig guten Abend bereiten möchten.
      </p>

      <div className="career-hero__panel-lines">
        <div>
          <FiCheck />
          <span>Service & Bar</span>
        </div>

        <div>
          <FiCheck />
          <span>Küche</span>
        </div>

        <div>
          <FiCheck />
          <span>Aushilfe & Minijob</span>
        </div>

        <div>
          <FiCheck />
          <span>Initiativbewerbung</span>
        </div>
      </div>

      <button
        type="button"
        className="career-hero__panel-link"
        onClick={scrollToApplication}
      >
        Bewerbung starten
        <FiArrowRight />
      </button>
    </div>

  </div>
</div>
      </section>

      {/* ==================================================
          VORTEILE
      ================================================== */}

      <section className="career-highlights">
        <Reveal
          className="career-highlights__grid"
          stagger
        >
          {careerHighlights.map(
            (highlight) => (
              <article
                className="career-highlight-card"
                key={highlight.title}
              >
                <div className="career-highlight-card__icon">
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
          EINLEITUNG
      ================================================== */}

      <section className="career-intro">
        <div
          className="career-intro__background-word"
          aria-hidden="true"
        >
          Charakter
        </div>

        <div className="career-section-container">
          <div className="career-intro__layout">
            <Reveal
              className="career-intro__content"
              direction="left"
            >
              <p className="career-eyebrow">
                Das passt zu uns
              </p>

              <h2>
                Wir suchen Menschen,
                nicht nur Lebensläufe.
              </h2>

              <p className="career-intro__lead">
                Gastronomie lebt von den
                Menschen, die jeden Abend
                dafür sorgen, dass Gäste
                gerne kommen und gerne
                wiederkommen.
              </p>

              <div className="career-intro__text">
                <p>
                  Erfahrung ist natürlich
                  hilfreich, aber nicht immer
                  entscheidend. Viele
                  Aufgaben können gelernt
                  werden. Wichtiger sind uns
                  Zuverlässigkeit,
                  Aufmerksamkeit und ein
                  freundlicher Umgang.
                </p>

                <p>
                  Du solltest gerne im Team
                  arbeiten, auch in
                  lebhaften Situationen
                  ruhig bleiben und bereit
                  sein, Verantwortung zu
                  übernehmen.
                </p>
              </div>
            </Reveal>

            <Reveal
              className="career-intro__quote"
              direction="right"
              delay={120}
            >
              <FiHeart />

              <blockquote>
                „Ein guter Abend entsteht
                nicht nur durch gutes Essen,
                sondern durch ein Team, das
                gerne zusammenarbeitet.“
              </blockquote>

              <span>
                Monty&apos;s Pub & Kitchen
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================
          BEREICHE
      ================================================== */}

      <section className="career-areas">
        <div className="career-section-container">
          <Reveal className="career-areas__heading">
            <div>
              <p className="career-eyebrow">
                Mögliche Einsatzbereiche
              </p>

              <h2>
                Wo du uns unterstützen
                kannst.
              </h2>
            </div>

            <p>
              Auch ohne aktuell
              ausgeschriebene Stelle freuen
              wir uns über eine ehrliche
              Initiativbewerbung.
            </p>
          </Reveal>

          <Reveal
            className="career-areas__grid"
            stagger
          >
            {careerAreas.map((area) => (
              <article
                className="career-area-card"
                key={area.number}
              >
                <div className="career-area-card__top">
                  <span>
                    {area.number}
                  </span>

                  <div className="career-area-card__icon">
                    {area.icon}
                  </div>
                </div>

                <h3>
                  {area.title}
                </h3>

                <p>
                  {area.text}
                </p>

                <ul>
                  {area.features.map(
                    (feature) => (
                      <li key={feature}>
                        <FiCheck />
                        {feature}
                      </li>
                    )
                  )}
                </ul>

                <button
                  type="button"
                  onClick={scrollToApplication}
                  className="career-area-card__link"
                >
                  Dafür bewerben
                  <FiArrowRight />
                </button>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          ABLAUF
      ================================================== */}

      <section className="career-process">
        <div className="career-section-container">
          <Reveal className="career-process__heading">
            <p className="career-eyebrow">
              So funktioniert es
            </p>

            <h2>
              Deine Bewerbung in drei
              Schritten.
            </h2>
          </Reveal>

          <Reveal
            className="career-process__grid"
            stagger
          >
            {applicationSteps.map(
              (step) => (
                <article
                  className="career-process-card"
                  key={step.number}
                >
                  <span>
                    {step.number}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>
                </article>
              )
            )}
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          BEWERBUNG
      ================================================== */}

      <section
        className="career-application"
        id="career-application"
      >
        <div
          className="career-application__background-word"
          aria-hidden="true"
        >
          Bewerbung
        </div>

        <div className="career-section-container">
          <div className="career-application__layout">
            <Reveal
              className="career-application__information"
              direction="left"
            >
              <p className="career-eyebrow">
                Bewirb dich bei uns
              </p>

              <h2>
                Erzähl uns etwas über dich.
              </h2>

              <p className="career-application__lead">
                Fülle das Formular aus.
                Anschließend öffnet sich
                deine E-Mail-App mit allen
                Angaben.
              </p>

              <div className="career-application__notice">
                <FiUploadCloud />

                <div>
                  <strong>
                    Wichtig zu den Anhängen
                  </strong>

                  <p>
                    Ausgewählte Dateien
                    können technisch nicht
                    automatisch an eine
                    Mailto-E-Mail angehängt
                    werden. Füge sie deshalb
                    in deiner E-Mail-App
                    manuell als Anhang hinzu.
                  </p>
                </div>
              </div>

              <div className="career-application__details">
                <div>
                  <FiMail />

                  <span>
                    Bewerbung per E-Mail
                    <strong>
                      {CAREER_EMAIL}
                    </strong>
                  </span>
                </div>

                <div>
                  <FiFileText />

                  <span>
                    Geeignete Unterlagen
                    <strong>
                      Lebenslauf, Zeugnisse
                      oder kurze Vorstellung
                    </strong>
                  </span>
                </div>
              </div>

              <a
                href={`mailto:${CAREER_EMAIL}?subject=${encodeURIComponent(
                  "Bewerbung bei Monty's"
                )}`}
                className="career-text-link"
              >
                Direkt per E-Mail bewerben
                <FiArrowRight />
              </a>
            </Reveal>

            <Reveal
              className="career-form-panel"
              direction="right"
              delay={120}
            >
              <div className="career-form-panel__heading">
                <div className="career-form-panel__icon">
                  <FiBriefcase />
                </div>

                <div>
                  <p className="career-eyebrow">
                    Bewerbungsformular
                  </p>

                  <h2>
                    Deine Bewerbung
                  </h2>
                </div>
              </div>

              <p className="career-form-panel__intro">
                Die Bewerbung wird nicht auf
                unserer Website gespeichert.
                Mit dem Absenden wird
                lediglich deine E-Mail-App
                geöffnet und eine Nachricht
                vorbereitet.
              </p>

              <form
                className="career-form"
                onSubmit={handleSubmit}
              >
                <div className="career-form__row">
                  <div className="career-form__field">
                    <label htmlFor="career-name">
                      Name
                      <span>*</span>
                    </label>

                    <input
                      id="career-name"
                      name="name"
                      type="text"
                      placeholder="Vor- und Nachname"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="career-form__field">
                    <label htmlFor="career-email">
                      E-Mail-Adresse
                      <span>*</span>
                    </label>

                    <input
                      id="career-email"
                      name="email"
                      type="email"
                      placeholder="name@beispiel.de"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="career-form__row">
                  <div className="career-form__field">
                    <label htmlFor="career-phone">
                      Telefonnummer
                    </label>

                    <input
                      id="career-phone"
                      name="phone"
                      type="tel"
                      placeholder="Optional"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="career-form__field">
                    <label htmlFor="career-area">
                      Wunschbereich
                      <span>*</span>
                    </label>

                    <select
                      id="career-area"
                      name="area"
                      defaultValue=""
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Bitte auswählen
                      </option>

                      <option value="Service und Bar">
                        Service & Bar
                      </option>

                      <option value="Küche">
                        Küche
                      </option>

                      <option value="Aushilfe oder Minijob">
                        Aushilfe & Minijob
                      </option>

                      <option value="Initiativbewerbung">
                        Initiativbewerbung
                      </option>
                    </select>
                  </div>
                </div>

                <div className="career-form__row">
                  <div className="career-form__field">
                    <label htmlFor="career-employment">
                      Beschäftigungsart
                      <span>*</span>
                    </label>

                    <select
                      id="career-employment"
                      name="employment"
                      defaultValue=""
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Bitte auswählen
                      </option>

                      <option value="Vollzeit">
                        Vollzeit
                      </option>

                      <option value="Teilzeit">
                        Teilzeit
                      </option>

                      <option value="Minijob">
                        Minijob
                      </option>

                      <option value="Aushilfe">
                        Aushilfe
                      </option>

                      <option value="Praktikum">
                        Praktikum
                      </option>

                      <option value="Flexibel">
                        Flexibel
                      </option>
                    </select>
                  </div>

                  <div className="career-form__field">
                    <label htmlFor="career-start">
                      Frühester Start
                    </label>

                    <input
                      id="career-start"
                      name="startDate"
                      type="date"
                    />
                  </div>
                </div>

                <div className="career-form__field">
                  <label htmlFor="career-experience">
                    Bisherige Erfahrung
                  </label>

                  <textarea
                    id="career-experience"
                    name="experience"
                    rows="4"
                    placeholder="Erzähl uns kurz, ob und wo du bereits gearbeitet hast."
                  />
                </div>

                <div className="career-form__field">
                  <label htmlFor="career-message">
                    Deine Nachricht
                    <span>*</span>
                  </label>

                  <textarea
                    id="career-message"
                    name="message"
                    rows="6"
                    placeholder="Warum möchtest du Teil unseres Teams werden?"
                    required
                  />
                </div>

                

               <label className="career-form__privacy">
  <input
    type="checkbox"
    name="privacy"
    value="acknowledged"
    required
  />

  <span>
    Ich habe die Hinweise zur Verarbeitung
    meiner Bewerbungsdaten in der{" "}
    <Link to="/datenschutz">
      Datenschutzerklärung
    </Link>{" "}
    zur Kenntnis genommen.
  </span>
</label>
<p className="career-form__privacy-note">
  Mit „E-Mail vorbereiten“ werden deine Angaben
  ausschließlich lokal in das auf deinem Gerät
  eingerichtete E-Mail-Programm übernommen.
  Eine Übermittlung an Monty&apos;s erfolgt erst,
  wenn du die vorbereitete E-Mail selbst absendest.
</p>

                {formStatus && (
                  <div
                    className="career-form__status"
                    role="status"
                  >
                    <FiMail />
                    {formStatus}
                  </div>
                )}

                <button
                  type="submit"
                  className="career-button career-button--primary career-form__submit"
                >
                  E-Mail vorbereiten
                  <FiSend />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Career;
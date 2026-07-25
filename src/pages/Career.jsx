import { useState } from "react";
import {
  FiBriefcase,
  FiClock,
  FiHeart,
  FiUsers,
} from "react-icons/fi";
import "../styles/career.css";

function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    availability: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [cvFile, setCvFile] = useState(null);
const [additionalFile, setAdditionalFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleFileChange = (event) => {
  const { name, files } = event.target;
  const selectedFile = files?.[0] ?? null;

  if (!selectedFile) {
    if (name === "cv") {
      setCvFile(null);
    }

    if (name === "additionalDocuments") {
      setAdditionalFile(null);
    }

    return;
  }

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const maximumFileSize = 5 * 1024 * 1024;

  if (!allowedTypes.includes(selectedFile.type)) {
    setError(
      "Bitte lade nur Dateien im Format PDF, DOC oder DOCX hoch.",
    );
    event.target.value = "";
    return;
  }

  if (selectedFile.size > maximumFileSize) {
    setError("Die ausgewählte Datei darf maximal 5 MB groß sein.");
    event.target.value = "";
    return;
  }

  if (name === "cv") {
    setCvFile(selectedFile);
  }

  if (name === "additionalDocuments") {
    setAdditionalFile(selectedFile);
  }

  setError("");
};

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = [
      formData.name,
      formData.email,
      formData.position,
      formData.message,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      setError(
        "Bitte fülle alle Pflichtfelder aus.",
      );
      return;
    }

    if (!cvFile) {
  setError("Bitte lade deinen Lebenslauf hoch.");
  return;
}

    const subject = encodeURIComponent(
      `Bewerbung bei Monty's – ${formData.position}`,
    );

    const body = encodeURIComponent(
      [
  `Name: ${formData.name}`,
  `E-Mail: ${formData.email}`,
  `Telefon: ${formData.phone || "Keine Angabe"}`,
  `Gewünschte Position: ${formData.position}`,
  `Verfügbarkeit: ${formData.availability || "Keine Angabe"}`,
  `Lebenslauf: ${cvFile?.name || "Nicht ausgewählt"}`,
  `Weitere Unterlagen: ${
    additionalFile?.name || "Keine weiteren Unterlagen"
  }`,
  "",
  "Nachricht:",
  formData.message,
  "",
  "WICHTIG:",
  "Bitte den Lebenslauf und gegebenenfalls weitere Unterlagen vor dem Absenden manuell an diese E-Mail anhängen.",
].join("\n"),
    );

    window.location.href =
      `mailto:info@montys-bar-bayreuth.de?subject=${subject}&body=${body}`;
  };

  return (
    <main className="career-page">
      <section className="career-intro">
        <div className="career-container">
          <p className="career-eyebrow">
            Arbeiten bei Monty&apos;s
          </p>

          <div className="career-intro__content">
            <h1>Werde Teil unseres Teams.</h1>

            <p>
              Du hast Freude an Gastronomie,
              arbeitest gerne mit Menschen und
              möchtest Teil eines herzlichen Teams
              werden? Dann freuen wir uns darauf,
              dich kennenzulernen.
            </p>
          </div>
        </div>
      </section>

      <section className="career-content">
        <div className="career-container">
          <div className="career-layout">
            <div className="career-main">
              <section className="career-benefits">
                <article className="career-benefit-card">
                  <FiUsers />

                  <div>
                    <h2>Ein echtes Team</h2>

                    <p>
                      Bei uns zählt ein respektvoller,
                      unkomplizierter und herzlicher
                      Umgang miteinander.
                    </p>
                  </div>
                </article>

                <article className="career-benefit-card">
                  <FiHeart />

                  <div>
                    <h2>Gastfreundschaft mit Herz</h2>

                    <p>
                      Wir möchten, dass sich Gäste und
                      Mitarbeitende bei uns vom ersten
                      Moment an wohlfühlen.
                    </p>
                  </div>
                </article>

                <article className="career-benefit-card">
                  <FiClock />

                  <div>
                    <h2>Flexible Einsatzbereiche</h2>

                    <p>
                      Ob Service, Küche oder Bar:
                      Gemeinsam schauen wir, welcher
                      Bereich zu dir passt.
                    </p>
                  </div>
                </article>

                <article className="career-benefit-card">
                  <FiBriefcase />

                  <div>
                    <h2>Mitgestalten statt nur mitlaufen</h2>

                    <p>
                      Ideen, Eigeninitiative und
                      Verlässlichkeit sind bei uns
                      ausdrücklich willkommen.
                    </p>
                  </div>
                </article>
              </section>

              <section className="career-form-card">
                <div className="career-form-card__header">
                  <p className="career-eyebrow">
                    Kurzbewerbung
                  </p>

                  <h2>Erzähl uns etwas über dich.</h2>

                  <p>
  Fülle das Formular aus und wähle deinen Lebenslauf sowie optional
  weitere Unterlagen aus. Nach dem Klick öffnet sich dein E-Mail-Programm,
  in dem du die Dateien noch als Anhänge hinzufügen kannst.
</p>
                </div>

                {error && (
                  <div className="career-form__error">
                    {error}
                  </div>
                )}

                <form
                  className="career-form"
                  onSubmit={handleSubmit}
                >
                  <div className="career-form__grid">
                    <div className="career-form__group">
                      <label htmlFor="career-name">
                        Name <span>*</span>
                      </label>

                      <input
                        id="career-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Vor- und Nachname"
                      />
                    </div>

                    <div className="career-form__group">
                      <label htmlFor="career-email">
                        E-Mail <span>*</span>
                      </label>

                      <input
                        id="career-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="deine@email.de"
                      />
                    </div>

                    <div className="career-form__group">
                      <label htmlFor="career-phone">
                        Telefonnummer
                      </label>

                      <input
                        id="career-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Optional"
                      />
                    </div>

                    <div className="career-form__group">
                      <label htmlFor="career-position">
                        Gewünschte Position <span>*</span>
                      </label>

                      <select
                        id="career-position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                      >
                        <option value="">
                          Bitte auswählen
                        </option>
                        <option value="Service">
                          Service
                        </option>
                        <option value="Bar">
                          Bar
                        </option>
                        <option value="Küche">
                          Küche
                        </option>
                        <option value="Spülkraft">
                          Spülkraft
                        </option>
                        <option value="Aushilfe">
                          Aushilfe
                        </option>
                        <option value="Initiativbewerbung">
                          Initiativbewerbung
                        </option>
                      </select>
                    </div>

                    <div className="career-form__group career-form__group--full">
                      <label htmlFor="career-availability">
                        Verfügbarkeit
                      </label>

                      <input
                        id="career-availability"
                        type="text"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        placeholder="Zum Beispiel ab sofort oder ähnliches"
                      />
                    </div>

                    <div className="career-form__group career-form__group--full">
  <label htmlFor="career-cv">
    Lebenslauf <span>*</span>
  </label>

  <input
    id="career-cv"
    type="file"
    name="cv"
    accept=".pdf,.doc,.docx"
    onChange={handleFileChange}
  />

  <small className="career-form__file-hint">
    Erlaubte Formate: PDF, DOC oder DOCX. Maximale Dateigröße: 5 MB.
  </small>

  {cvFile && (
    <span className="career-form__selected-file">
      Ausgewählt: {cvFile.name}
    </span>
  )}
</div>

<div className="career-form__group career-form__group--full">
  <label htmlFor="career-documents">
    Weitere Unterlagen
  </label>

  <input
    id="career-documents"
    type="file"
    name="additionalDocuments"
    accept=".pdf,.doc,.docx"
    onChange={handleFileChange}
  />

  <small className="career-form__file-hint">
    Optional, zum Beispiel Anschreiben oder Zeugnisse. Maximal 5 MB.
  </small>

  {additionalFile && (
    <span className="career-form__selected-file">
      Ausgewählt: {additionalFile.name}
    </span>
  )}
</div>

                    <div className="career-form__group career-form__group--full">
                      <label htmlFor="career-message">
                        Nachricht <span>*</span>
                      </label>

                      <textarea
                        id="career-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Erzähl uns kurz etwas über dich, deine Erfahrung und warum du gerne bei Monty's arbeiten möchtest."
                        rows="7"
                      />
                    </div>
                  </div>

                  <p className="career-form__note">
  * Pflichtfelder. Nach dem Klick öffnet sich dein E-Mail-Programm.
  Bitte füge dort den zuvor ausgewählten Lebenslauf und gegebenenfalls
  weitere Unterlagen noch einmal als Anhang hinzu.
</p>

                  <button
                    type="submit"
                    className="career-form__button"
                  >
                    Bewerbung vorbereiten
                  </button>
                </form>
              </section>
            </div>

            <aside className="career-aside">
              <div className="career-aside__card">
                <p className="career-eyebrow">
                  Aktuell gesucht
                </p>

                <h2>Wir freuen uns über Verstärkung.</h2>

                <ul>
                  <li>Servicekräfte</li>
                  <li>Mitarbeitende für die Bar</li>
                  <li>Küchenpersonal</li>
                  <li>Aushilfen auf Minijob-Basis</li>
                </ul>

                <p>
                  Auch wenn deine Wunschposition nicht
                  aufgeführt ist, kannst du dich gerne
                  initiativ bewerben.
                </p>
              </div>

              <div className="career-aside__card">
                <p className="career-eyebrow">
                  Bewerbung per E-Mail
                </p>

                <h2>Lieber direkt schreiben?</h2>

                <p>
                  Sende deine Bewerbung mit Lebenslauf
                  einfach per E-Mail an:
                </p>

                <a href="mailto:info@montys-bar-bayreuth.de">
                  info@montys-bar-bayreuth.de
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Career;
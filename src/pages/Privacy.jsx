import { Link } from "react-router-dom";

import {
  FiArrowLeft,
  FiBriefcase,
  FiCalendar,
  FiDatabase,
  FiExternalLink,
  FiFileText,
  FiGlobe,
  FiLock,
  FiMail,
  FiMapPin,
  FiServer,
  FiShield,
  FiUser,
} from "react-icons/fi";

import "../styles/legal.css";

function Privacy() {
  return (
    <main className="legal-page legal-page--privacy">
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
          Datenschutz
        </div>

        <div className="legal-hero__container">
          <p className="legal-eyebrow">
            Schutz eurer Daten
          </p>

          <h1>Datenschutzerklärung</h1>

          <p className="legal-hero__lead">
            Informationen über die Verarbeitung
            personenbezogener Daten beim Besuch der
            Website von Monty&apos;s Pub &amp; Kitchen.
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
                  <FiShield />
                </div>

                <div>
                  <p className="legal-eyebrow">
                    Informationen gemäß DSGVO
                  </p>

                  <h2>
                    Datenschutz auf dieser Website
                  </h2>
                </div>
              </header>

              {/* ALLGEMEINE HINWEISE */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiFileText />

                  <h3>1. Allgemeine Hinweise</h3>
                </div>

                <p>
                  Der Schutz eurer personenbezogenen Daten
                  ist uns wichtig. Personenbezogene Daten
                  sind alle Informationen, mit denen eine
                  natürliche Person direkt oder indirekt
                  identifiziert werden kann.
                </p>

                <p>
                  Diese Datenschutzerklärung informiert
                  darüber, welche Daten beim Besuch dieser
                  Website verarbeitet werden, zu welchen
                  Zwecken die Verarbeitung erfolgt und
                  welche Rechte betroffene Personen haben.
                </p>

                <p>
                  Wir verarbeiten personenbezogene Daten
                  nur, soweit dies gesetzlich zulässig,
                  zur Bereitstellung dieser Website
                  erforderlich oder durch eine Einwilligung
                  gestattet ist.
                </p>
              </section>

              {/* VERANTWORTLICHER */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiUser />

                  <h3>
                    2. Verantwortlicher
                  </h3>
                </div>

                <p>
                  Verantwortlicher im Sinne der
                  Datenschutz-Grundverordnung ist:
                </p>

                <address className="legal-address">
                  <strong>
                    Monty&apos;s Operations GmbH
                  </strong>

                  <span>Wölfelstraße 18</span>
                  <span>95444 Bayreuth</span>
                  <span>Deutschland</span>
                </address>

                <dl className="legal-details">
                  <div>
                    <dt>Geschäftsführung</dt>

                    <dd>
                      Ann-Kathrin Waltes
                    </dd>
                  </div>

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

              {/* DATENSCHUTZBEAUFTRAGTER */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiShield />

                  <h3>
                    3. Datenschutzbeauftragter
                  </h3>
                </div>

                <p>
                  Ein betrieblicher Datenschutzbeauftragter
                  wurde nicht benannt.
                </p>

                <p>
                  Fragen zum Datenschutz können direkt an
                  folgende E-Mail-Adresse gerichtet werden:
                </p>

                <p>
                  <a href="mailto:info@montys-bar-bayreuth.de">
                    <strong>
                      info@montys-bar-bayreuth.de
                    </strong>
                  </a>
                </p>
              </section>

              {/* HOSTING */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiServer />

                  <h3>
                    4. Hosting durch STRATO
                  </h3>
                </div>

                <p>
                  Diese Website wird bei folgendem
                  Dienstleister gehostet:
                </p>

                <address className="legal-address">
                  <strong>STRATO GmbH</strong>

                  <span>Otto-Ostrowski-Straße 7</span>
                  <span>10249 Berlin</span>
                  <span>Deutschland</span>
                </address>

                <p>
                  Beim Aufruf dieser Website werden durch
                  den Hostinganbieter technisch notwendige
                  Daten verarbeitet und in sogenannten
                  Server-Logfiles gespeichert.
                </p>

                <p>
                  Dabei können insbesondere folgende Daten
                  verarbeitet werden:
                </p>

                <ul className="legal-list">
                  <li>
                    IP-Adresse des verwendeten Endgeräts
                  </li>

                  <li>
                    Datum und Uhrzeit des Zugriffs
                  </li>

                  <li>
                    aufgerufene Seite oder Datei
                  </li>

                  <li>
                    übertragene Datenmenge
                  </li>

                  <li>
                    verwendeter Browser und Browserversion
                  </li>

                  <li>
                    verwendetes Betriebssystem
                  </li>

                  <li>
                    Referrer-URL
                  </li>

                  <li>
                    Zugriffsstatus beziehungsweise
                    HTTP-Statuscode
                  </li>
                </ul>

                <p>
                  Die Verarbeitung erfolgt zur sicheren,
                  stabilen und fehlerfreien Bereitstellung
                  der Website sowie zur Erkennung und
                  Abwehr von Angriffen.
                </p>

                <p>
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
                  DSGVO. Unser berechtigtes Interesse liegt
                  in der sicheren und technisch
                  funktionsfähigen Bereitstellung unseres
                  Internetangebots.
                </p>

                <p>
  Die Speicherdauer der Server-Logfiles richtet
  sich nach den technischen und vertraglichen
  Einstellungen des Hostinganbieters. Die Daten
  werden gelöscht oder anonymisiert, sobald sie
  für die genannten Zwecke nicht mehr erforderlich
  sind und keine gesetzlichen oder sicherheitsbezogenen
  Gründe für eine weitere Speicherung bestehen.
</p>

                <p>
  Soweit STRATO personenbezogene Daten in
  unserem Auftrag verarbeitet, erfolgt die
  Verarbeitung auf Grundlage eines mit STRATO
  abgeschlossenen Vertrags zur
  Auftragsverarbeitung gemäß Art. 28 DSGVO.
</p>

                <a
                  href="https://www.strato.de/datenschutz/"
                  target="_blank"
                  rel="noreferrer"
                  className="legal-external-link"
                >
                  Datenschutzhinweise von STRATO
                  <FiExternalLink />
                </a>
              </section>

              {/* SSL */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiLock />

                  <h3>
                    5. SSL- beziehungsweise
                    TLS-Verschlüsselung
                  </h3>
                </div>

                <p>
                  Diese Website nutzt aus
                  Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte eine
                  SSL- beziehungsweise TLS-Verschlüsselung.
                </p>

                <p>
                  Eine verschlüsselte Verbindung ist
                  insbesondere daran erkennbar, dass die
                  Adresszeile des Browsers mit
                  „https://“ beginnt.
                </p>

                <p>
                  Bei aktivierter Verschlüsselung können
                  übermittelte Daten grundsätzlich nicht
                  ohne Weiteres von unbefugten Dritten
                  mitgelesen werden.
                </p>
              </section>

              {/* TECHNISCH NOTWENDIGE SPEICHERUNG */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiDatabase />

                  <h3>
                    6. Technisch notwendige Speicherung
                    im Browser
                  </h3>
                </div>

                <p>
                  Auf der Startseite wird vorübergehend im
                  sogenannten Session Storage gespeichert,
                  ob der Hinweis zur Eröffnung von
                  Monty&apos;s bereits geschlossen wurde.
                </p>

                <p>
                  Dabei wird ausschließlich eine technische
                  Information im Browser gespeichert. Sie
                  wird nicht an unseren Server übertragen
                  und normalerweise mit dem Ende der
                  Browsersitzung gelöscht.
                </p>

                <p>
                  Die Speicherung dient dazu, dass der
                  Hinweis während derselben Browsersitzung
                  nach dem Schließen nicht erneut angezeigt
                  wird.
                </p>

                <p>
                  Rechtsgrundlage für die damit
                  verbundene Datenverarbeitung ist
                  Art. 6 Abs. 1 lit. f DSGVO. Die
                  Speicherung ist zur nutzerfreundlichen
                  Bereitstellung der Website erforderlich.
                </p>
              </section>

              {/* E-MAIL */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiMail />

                  <h3>
                    7. Kontaktaufnahme per E-Mail
                  </h3>
                </div>

                <p>
                  Auf dieser Website werden Links
                  bereitgestellt, über die das auf dem
                  jeweiligen Endgerät eingerichtete
                  E-Mail-Programm geöffnet werden kann.
                </p>

                <p>
                  Durch das bloße Anklicken eines
                  Mailto-Links wird noch keine Nachricht
                  an uns versendet. Eine Übermittlung
                  erfolgt erst, wenn die vorbereitete
                  E-Mail über das eigene E-Mail-Programm
                  tatsächlich abgesendet wird.
                </p>

                <p>
                  Bei einer Kontaktaufnahme per E-Mail
                  verarbeiten wir insbesondere:
                </p>

                <ul className="legal-list">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>gegebenenfalls Telefonnummer</li>
                  <li>Inhalt der Nachricht</li>
                  <li>
                    freiwillig übermittelte Anlagen und
                    sonstige Angaben
                  </li>
                </ul>

                <p>
                  Die Verarbeitung erfolgt zur Bearbeitung
                  und Beantwortung der jeweiligen Anfrage.
                </p>

                <p>
                  Bezieht sich die Anfrage auf einen
                  Vertrag oder vorvertragliche Maßnahmen,
                  erfolgt die Verarbeitung auf Grundlage
                  von Art. 6 Abs. 1 lit. b DSGVO.
                </p>

                <p>
                  Bei sonstigen Anfragen erfolgt die
                  Verarbeitung auf Grundlage von
                  Art. 6 Abs. 1 lit. f DSGVO. Unser
                  berechtigtes Interesse liegt in der
                  Bearbeitung und Beantwortung der Anfrage.
                </p>

                <p>
                  Übermittelte Daten werden gelöscht,
                  sobald die jeweilige Anfrage vollständig
                  bearbeitet wurde und keine gesetzlichen
                  Aufbewahrungspflichten oder sonstigen
                  berechtigten Gründe für eine weitere
                  Speicherung bestehen.
                </p>
              </section>

              {/* BEWERBUNGEN */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiBriefcase />

                  <h3>
                    8. Bewerbungen per E-Mail
                  </h3>
                </div>

                <p>
                  Auf der Karriereseite können Angaben für
                  eine Bewerbung vorbereitet werden.
                  Beim Absenden wird das E-Mail-Programm
                  der bewerbenden Person geöffnet.
                </p>

                <p>
                  Die Angaben werden nicht durch ein
                  eigenes Bewerbungsformular auf unserem
                  Webserver gespeichert. Die Übermittlung
                  erfolgt erst durch den Versand der
                  E-Mail über das jeweils verwendete
                  E-Mail-Programm.
                </p>

                <p>
                  Im Rahmen einer Bewerbung können
                  insbesondere folgende Daten verarbeitet
                  werden:
                </p>

                <ul className="legal-list">
                  <li>
                    Stamm- und Kontaktdaten
                  </li>

                  <li>
                    Angaben zur gewünschten Tätigkeit
                  </li>

                  <li>
                    Angaben zum möglichen Eintrittstermin
                  </li>

                  <li>
                    berufliche Qualifikationen und
                    Erfahrungen
                  </li>

                  <li>
                    Bewerbungsunterlagen wie Lebenslauf
                    oder Zeugnisse
                  </li>

                  <li>
                    weitere freiwillig mitgeteilte Angaben
                  </li>
                </ul>

                <p>
                  Die Verarbeitung erfolgt zur Entscheidung
                  über die Begründung eines
                  Beschäftigungsverhältnisses auf Grundlage
                  von § 26 Abs. 1 BDSG in Verbindung mit
                  Art. 6 Abs. 1 lit. b DSGVO.
                </p>

                <p>
                  Kommt kein Beschäftigungsverhältnis
                  zustande, werden Bewerbungsunterlagen
                  grundsätzlich spätestens sechs Monate
                  nach Abschluss des Bewerbungsverfahrens
                  gelöscht, sofern keine Einwilligung in
                  eine längere Speicherung erteilt wurde
                  oder gesetzliche beziehungsweise
                  berechtigte Gründe entgegenstehen.
                </p>

                <p>
                  Kommt ein Beschäftigungsverhältnis
                  zustande, können die Daten zur
                  Durchführung des
                  Beschäftigungsverhältnisses
                  weiterverarbeitet werden.
                </p>
              </section>

              {/* RESMIO */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiCalendar />

                  <h3>
                    9. Tischreservierungen über Resmio
                  </h3>
                </div>

                <p>
                  Für Online-Tischreservierungen wird der
                  Dienst Resmio verwendet.
                </p>

                <address className="legal-address">
                  <strong>resmio GmbH</strong>

                  <span>Katzwanger Straße 150</span>
                  <span>90461 Nürnberg</span>
                  <span>Deutschland</span>
                </address>

                <p>
                  Beim Aufruf und bei der Nutzung des
                  Resmio-Reservierungswidgets können
                  personenbezogene Daten an Resmio
                  übermittelt werden.
                </p>

                <p>
                  Hierzu können insbesondere gehören:
                </p>

                <ul className="legal-list">
                  <li>IP-Adresse</li>

                  <li>
                    Informationen über Browser und
                    Endgerät
                  </li>

                  <li>
                    Datum und Uhrzeit des Zugriffs
                  </li>

                  <li>Name</li>

                  <li>E-Mail-Adresse</li>

                  <li>Telefonnummer</li>

                  <li>
                    gewünschtes Reservierungsdatum und
                    gewünschte Uhrzeit
                  </li>

                  <li>Anzahl der Gäste</li>

                  <li>
                    freiwillig übermittelte Wünsche oder
                    Bemerkungen
                  </li>
                </ul>

                <p>
                  Die im Reservierungsformular
                  eingegebenen Daten werden zur Bearbeitung,
                  Verwaltung und Bestätigung der
                  Tischreservierung verwendet.
                </p>

                <p>
                  Rechtsgrundlage für die Bearbeitung
                  einer konkret angefragten Reservierung
                  ist Art. 6 Abs. 1 lit. b DSGVO.
                </p>

                <p>
  Soweit Resmio personenbezogene Daten in
  unserem Auftrag verarbeitet, erfolgt die
  Verarbeitung auf Grundlage eines mit Resmio
  abgeschlossenen Vertrags zur
  Auftragsverarbeitung gemäß Art. 28 DSGVO.
</p>

                <p>
  Das Resmio-Reservierungswidget wird nicht
  automatisch beim Aufruf der Reservierungsseite
  geladen. Zunächst wird lediglich ein Hinweis
  angezeigt.
</p>

<p>
  Erst nachdem die nutzende Person das Laden des
  Reservierungswidgets ausdrücklich freigibt,
  wird eine Verbindung zu den Servern von Resmio
  hergestellt. Dabei können insbesondere die
  IP-Adresse sowie Browser-, Geräte- und
  Zugriffsinformationen an Resmio übermittelt
  werden. Die Einbindung dient der Bereitstellung
  einer komfortablen Online-Tischreservierung.
</p>

                <p>
                  Für die weitere Verarbeitung innerhalb
                  des Resmio-Reservierungssystems gelten
                  ergänzend die Datenschutzhinweise von
                  Resmio.
                </p>

                <a
                  href="https://www.resmio.com/datenschutz/"
                  target="_blank"
                  rel="noreferrer"
                  className="legal-external-link"
                >
                  Datenschutzhinweise von Resmio
                  <FiExternalLink />
                </a>
              </section>

              {/* GOOGLE MAPS */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiMapPin />

                  <h3>
                    10. Google Maps
                  </h3>
                </div>

                <p>
                  Auf der Kontaktseite wird eine Karte des
                  Dienstes Google Maps eingebunden.
                  Anbieter für Nutzerinnen und Nutzer im
                  Europäischen Wirtschaftsraum ist:
                </p>

                <address className="legal-address">
                  <strong>
                    Google Ireland Limited
                  </strong>

                  <span>Gordon House</span>
                  <span>Barrow Street</span>
                  <span>Dublin 4</span>
                  <span>Irland</span>
                </address>

                <p>
                  Durch die Einbindung von Google Maps
                  können insbesondere folgende Daten an
                  Google übermittelt werden:
                </p>

                <ul className="legal-list">
                  <li>IP-Adresse</li>

                  <li>
                    Browser- und Geräteinformationen
                  </li>

                  <li>
                    Datum und Uhrzeit des Zugriffs
                  </li>

                  <li>
                    aufgerufene Website beziehungsweise
                    Unterseite
                  </li>

                  <li>
                    gegebenenfalls Standortinformationen
                  </li>

                  <li>
                    Daten aus einem vorhandenen
                    Google-Konto, sofern die Person dort
                    angemeldet ist
                  </li>
                </ul>

                <p>
                  Die Karte dient dazu, den Standort von
                  Monty&apos;s anschaulich darzustellen und
                  die Anfahrt zu erleichtern.
                </p>

                <p>
  Die Google-Maps-Karte wird nicht automatisch
  geladen. Zunächst wird lediglich ein Hinweis
  angezeigt.
</p>

<p>
  Erst nachdem die nutzende Person das Laden der
  Karte ausdrücklich freigibt, wird eine
  Verbindung zu den Servern von Google
  hergestellt. Dabei können insbesondere die
  IP-Adresse sowie Browser-, Geräte- und
  Zugriffsinformationen an Google übermittelt
  werden. Die Einbindung dient der
  Standortdarstellung und erleichtert die
  Anfahrt.
</p>

                <p>
                  Es kann nicht ausgeschlossen werden, dass
                  personenbezogene Daten auch an
                  Gesellschaften von Google außerhalb der
                  Europäischen Union oder des Europäischen
                  Wirtschaftsraums übermittelt und dort
                  verarbeitet werden.
                </p>

                <p>
                  Weitere Informationen zur Verarbeitung
                  personenbezogener Daten durch Google
                  befinden sich in der
                  Datenschutzerklärung von Google.
                </p>

                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noreferrer"
                  className="legal-external-link"
                >
                  Datenschutzerklärung von Google
                  <FiExternalLink />
                </a>
              </section>

              {/* GOOGLE BEWERTUNG */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiGlobe />

                  <h3>
                    11. Link zur Google-Bewertung
                  </h3>
                </div>

                <p>
                  Auf dieser Website befinden sich Links,
                  über die eine Bewertung für Monty&apos;s
                  bei Google abgegeben werden kann.
                </p>

                <p>
                  Der Bewertungsdienst ist nicht unmittelbar
                  in die Website eingebettet. Eine
                  Verbindung zu Google wird grundsätzlich
                  erst hergestellt, wenn der entsprechende
                  Link angeklickt wird.
                </p>

                <p>
                  Beim Öffnen der verlinkten Google-Seite
                  können insbesondere die IP-Adresse,
                  Browserinformationen, Geräteinformationen,
                  Zeitpunkt des Zugriffs und die zuvor
                  besuchte Seite an Google übermittelt
                  werden.
                </p>

                <p>
                  Ist die betroffene Person bei einem
                  Google-Konto angemeldet, kann Google den
                  Seitenaufruf gegebenenfalls dem
                  jeweiligen Konto zuordnen.
                </p>

                <p>
                  Für die Verarbeitung auf der externen
                  Google-Seite ist grundsätzlich Google
                  verantwortlich.
                </p>

                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noreferrer"
                  className="legal-external-link"
                >
                  Datenschutzerklärung von Google
                  <FiExternalLink />
                </a>
              </section>

              {/* EXTERNE LINKS */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiExternalLink />

                  <h3>
                    12. Externe Links
                  </h3>
                </div>

                <p>
                  Diese Website enthält Links zu externen
                  Websites und Diensten Dritter.
                </p>

                <p>
                  Beim bloßen Anzeigen unserer Website
                  findet durch einen normalen externen Link
                  grundsätzlich noch keine Verbindung zu
                  der verlinkten Website statt. Erst nach
                  dem Anklicken wird die jeweilige externe
                  Seite aufgerufen.
                </p>

                <p>
                  Ab diesem Zeitpunkt gelten die
                  Datenschutzbestimmungen des jeweiligen
                  externen Anbieters. Auf Art und Umfang
                  der dortigen Datenverarbeitung haben wir
                  keinen unmittelbaren Einfluss.
                </p>
              </section>

              {/* RECHTSGRUNDLAGEN */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiFileText />

                  <h3>
                    13. Allgemeine Rechtsgrundlagen
                  </h3>
                </div>

                <p>
                  Je nach Art der Verarbeitung werden
                  personenbezogene Daten insbesondere auf
                  Grundlage der folgenden Vorschriften
                  verarbeitet:
                </p>

                <ul className="legal-list">
                  <li>
                    Art. 6 Abs. 1 lit. a DSGVO bei einer
                    erteilten Einwilligung
                  </li>

                  <li>
                    Art. 6 Abs. 1 lit. b DSGVO zur
                    Erfüllung eines Vertrags oder zur
                    Durchführung vorvertraglicher
                    Maßnahmen
                  </li>

                  <li>
                    Art. 6 Abs. 1 lit. c DSGVO zur
                    Erfüllung rechtlicher Verpflichtungen
                  </li>

                  <li>
                    Art. 6 Abs. 1 lit. f DSGVO zur
                    Wahrung berechtigter Interessen
                  </li>

                  <li>
                    § 26 BDSG bei der Verarbeitung von
                    Bewerber- und Beschäftigtendaten
                  </li>

                  <li>
                    § 25 TDDDG beim Speichern oder Auslesen
                    von Informationen auf Endgeräten
                  </li>
                </ul>
              </section>

              {/* SPEICHERDAUER */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiDatabase />

                  <h3>
                    14. Speicherdauer
                  </h3>
                </div>

                <p>
                  Personenbezogene Daten werden nur so
                  lange gespeichert, wie dies zur
                  Erreichung des jeweiligen Zwecks
                  erforderlich ist.
                </p>

                <p>
                  Anschließend werden die Daten gelöscht,
                  sofern keine gesetzlichen
                  Aufbewahrungsfristen, vertraglichen
                  Pflichten, behördlichen Anforderungen
                  oder berechtigten Interessen einer
                  Löschung entgegenstehen.
                </p>

                <p>
                  Bestehen gesetzliche
                  Aufbewahrungspflichten, werden die
                  betreffenden Daten für deren Dauer
                  gesperrt und ausschließlich zur
                  Erfüllung dieser Verpflichtungen
                  gespeichert.
                </p>
              </section>

              {/* EMPFÄNGER */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiGlobe />

                  <h3>
                    15. Empfänger personenbezogener Daten
                  </h3>
                </div>

                <p>
                  Personenbezogene Daten werden nur an
                  externe Empfänger übermittelt, wenn dies
                  zur Erfüllung eines Vertrags, zur
                  Bereitstellung der Website, zur Erfüllung
                  einer gesetzlichen Verpflichtung oder
                  auf Grundlage einer Einwilligung
                  erforderlich ist.
                </p>

                <p>
                  Als mögliche Empfänger kommen
                  insbesondere in Betracht:
                </p>

                <ul className="legal-list">
                  <li>Hosting- und IT-Dienstleister</li>

                  <li>
                    Anbieter des
                    Tischreservierungssystems
                  </li>

                  <li>
                    Anbieter eingebundener Karten- und
                    Standortdienste
                  </li>

                  <li>
                    E-Mail- und
                    Kommunikationsdienstleister
                  </li>

                  <li>
                    Behörden und sonstige öffentliche
                    Stellen bei einer gesetzlichen
                    Verpflichtung
                  </li>

                  <li>
                    Rechts-, Steuer- oder sonstige Berater,
                    soweit dies erforderlich ist
                  </li>
                </ul>
              </section>

              {/* DRITTLAND */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiGlobe />

                  <h3>
                    16. Datenübermittlung in Drittländer
                  </h3>
                </div>

                <p>
                  Bei der Nutzung bestimmter externer
                  Dienste kann eine Verarbeitung
                  personenbezogener Daten außerhalb der
                  Europäischen Union beziehungsweise des
                  Europäischen Wirtschaftsraums nicht
                  vollständig ausgeschlossen werden.
                </p>

                <p>
                  In diesen Fällen erfolgt eine Übermittlung
                  nur, wenn die gesetzlichen Voraussetzungen
                  der Art. 44 ff. DSGVO erfüllt sind.
                </p>

                <p>
                  Dies kann insbesondere auf Grundlage
                  eines Angemessenheitsbeschlusses der
                  Europäischen Kommission, geeigneter
                  Garantien wie
                  EU-Standardvertragsklauseln oder einer
                  ausdrücklichen Einwilligung erfolgen.
                </p>
              </section>

              {/* BETROFFENENRECHTE */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiShield />

                  <h3>
                    17. Rechte betroffener Personen
                  </h3>
                </div>

                <p>
                  Betroffene Personen haben im Rahmen der
                  gesetzlichen Voraussetzungen
                  insbesondere folgende Rechte:
                </p>

                <ul className="legal-list">
                  <li>
                    Recht auf Auskunft gemäß Art. 15 DSGVO
                  </li>

                  <li>
                    Recht auf Berichtigung gemäß
                    Art. 16 DSGVO
                  </li>

                  <li>
                    Recht auf Löschung gemäß
                    Art. 17 DSGVO
                  </li>

                  <li>
                    Recht auf Einschränkung der
                    Verarbeitung gemäß Art. 18 DSGVO
                  </li>

                  <li>
                    Recht auf Datenübertragbarkeit gemäß
                    Art. 20 DSGVO
                  </li>

                  <li>
                    Recht auf Widerspruch gemäß
                    Art. 21 DSGVO
                  </li>

                  <li>
                    Recht auf Widerruf einer Einwilligung
                    gemäß Art. 7 Abs. 3 DSGVO
                  </li>

                  <li>
                    Recht auf Beschwerde bei einer
                    Datenschutzaufsichtsbehörde gemäß
                    Art. 77 DSGVO
                  </li>
                </ul>

                <p>
                  Der Widerruf einer Einwilligung wirkt nur
                  für die Zukunft. Die Rechtmäßigkeit der
                  bis zum Widerruf erfolgten Verarbeitung
                  wird dadurch nicht berührt.
                </p>

                <p>
                  Zur Ausübung dieser Rechte genügt eine
                  formlose Nachricht an:
                </p>

                <p>
                  <a href="mailto:info@montys-bar-bayreuth.de">
                    <strong>
                      info@montys-bar-bayreuth.de
                    </strong>
                  </a>
                </p>
              </section>

              {/* WIDERSPRUCH */}

              <section className="legal-block legal-block--highlight">
                <div className="legal-block__heading">
                  <FiShield />

                  <h3>
                    18. Widerspruchsrecht
                  </h3>
                </div>

                <p>
                  Werden personenbezogene Daten auf
                  Grundlage von Art. 6 Abs. 1 lit. e oder
                  lit. f DSGVO verarbeitet, besteht aus
                  Gründen, die sich aus der besonderen
                  Situation der betroffenen Person ergeben,
                  jederzeit das Recht, gegen die
                  Verarbeitung Widerspruch einzulegen.
                </p>

                <p>
                  Nach einem Widerspruch verarbeiten wir
                  die betroffenen personenbezogenen Daten
                  grundsätzlich nicht mehr, es sei denn,
                  wir können zwingende schutzwürdige
                  Gründe für die Verarbeitung nachweisen,
                  die die Interessen, Rechte und Freiheiten
                  der betroffenen Person überwiegen.
                </p>

                <p>
                  Eine weitere Verarbeitung kann außerdem
                  erfolgen, wenn sie der Geltendmachung,
                  Ausübung oder Verteidigung von
                  Rechtsansprüchen dient.
                </p>
              </section>

              {/* BESCHWERDE */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiShield />

                  <h3>
                    19. Beschwerderecht bei der
                    Aufsichtsbehörde
                  </h3>
                </div>

                <p>
                  Betroffene Personen haben das Recht, sich
                  bei einer Datenschutzaufsichtsbehörde zu
                  beschweren, wenn sie der Ansicht sind,
                  dass die Verarbeitung ihrer
                  personenbezogenen Daten gegen die DSGVO
                  verstößt.
                </p>

                <p>
                  Die für private Unternehmen in Bayern
                  zuständige Aufsichtsbehörde ist:
                </p>

                <address className="legal-address">
                  <strong>
                    Bayerisches Landesamt für
                    Datenschutzaufsicht
                  </strong>

                  <span>Promenade 18</span>
                  <span>91522 Ansbach</span>
                  <span>Deutschland</span>
                </address>

                <a
                  href="https://www.lda.bayern.de/"
                  target="_blank"
                  rel="noreferrer"
                  className="legal-external-link"
                >
                  Website des BayLDA
                  <FiExternalLink />
                </a>
              </section>

              {/* PFLICHT ZUR BEREITSTELLUNG */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiFileText />

                  <h3>
                    20. Pflicht zur Bereitstellung von Daten
                  </h3>
                </div>

                <p>
                  Die Bereitstellung personenbezogener Daten
                  ist grundsätzlich weder gesetzlich noch
                  vertraglich vorgeschrieben.
                </p>

                <p>
                  Für bestimmte Leistungen, insbesondere
                  Tischreservierungen, die Bearbeitung von
                  Anfragen oder Bewerbungen, sind einzelne
                  Angaben jedoch erforderlich.
                </p>

                <p>
                  Ohne diese Angaben kann die jeweilige
                  Anfrage, Reservierung oder Bewerbung
                  möglicherweise nicht bearbeitet werden.
                </p>
              </section>

              {/* AUTOMATISIERTE ENTSCHEIDUNGEN */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiDatabase />

                  <h3>
                    21. Automatisierte Entscheidungen und
                    Profiling
                  </h3>
                </div>

                <p>
                  Es findet keine ausschließlich
                  automatisierte Entscheidungsfindung im
                  Sinne von Art. 22 DSGVO statt, die
                  gegenüber betroffenen Personen
                  rechtliche Wirkung entfaltet oder sie in
                  ähnlicher Weise erheblich beeinträchtigt.
                </p>

                <p>
                  Auf dieser Website findet durch die
                  Monty&apos;s Operations GmbH kein
                  Profiling statt.
                </p>
              </section>

              {/* ÄNDERUNGEN */}

              <section className="legal-block">
                <div className="legal-block__heading">
                  <FiFileText />

                  <h3>
                    22. Aktualisierung dieser
                    Datenschutzerklärung
                  </h3>
                </div>

                <p>
                  Diese Datenschutzerklärung kann
                  angepasst werden, wenn sich rechtliche
                  Anforderungen, technische Funktionen
                  oder eingesetzte Dienste ändern.
                </p>

                <p>
                  Es gilt die jeweils auf dieser Website
                  veröffentlichte Fassung.
                </p>

                <p>
                  <strong>
                    Stand: August 2026
                  </strong>
                </p>
              </section>
            </article>

            {/* SEITENLEISTE */}

            <aside className="legal-sidebar">
              <div className="legal-sidebar__card">
                <div className="legal-sidebar__icon">
                  <FiShield />
                </div>

                <p className="legal-eyebrow">
                  Verantwortlicher
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
                  Datenschutzanfrage senden
                </a>
              </div>

              <div className="legal-sidebar__navigation">
                <p className="legal-eyebrow">
                  Schnellnavigation
                </p>

                <a href="#top">
                  Nach oben
                  <FiExternalLink />
                </a>

                <Link to="/impressum">
                  Impressum
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

              <div className="legal-sidebar__notice">
                <FiLock />

                <p>
                  Personenbezogene Daten werden nur
                  verarbeitet, soweit dies für die
                  Bereitstellung der Website, die
                  Bearbeitung einer Anfrage oder die
                  Durchführung einer Reservierung
                  erforderlich ist.
                </p>
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
          Vertrauen
        </div>

        <div className="legal-footer-section__content">
          <p className="legal-eyebrow">
            Fragen zum Datenschutz?
          </p>

          <h2>
            Eure Daten.
            <span>Transparent verarbeitet.</span>
          </h2>

          <p>
            Bei Fragen zur Verarbeitung personenbezogener
            Daten oder zur Ausübung eurer Rechte könnt ihr
            euch jederzeit direkt an uns wenden.
          </p>

          <a
            href="mailto:info@montys-bar-bayreuth.de?subject=Datenschutzanfrage%20zur%20Website"
            className="legal-button"
          >
            <FiMail />
            Datenschutzanfrage senden
          </a>
        </div>
      </section>
    </main>
  );
}

export default Privacy;
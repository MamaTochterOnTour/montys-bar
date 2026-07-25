import "../styles/legal.css";

function Privacy() {
  return (
    <main className="legal-page">
      <section className="legal-intro">
        <div className="legal-container">
          <p className="legal-eyebrow">
            Rechtliche Informationen
          </p>

          <div className="legal-intro__content">
            <h1>Datenschutz</h1>

            <p>
              Informationen über die Verarbeitung personenbezogener Daten
              beim Besuch und bei der Nutzung dieser Website.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          <article className="legal-card">
            {/* 01 */}
            <section className="legal-section">
              <p className="legal-section__number">01</p>

              <div>
                <h2>Verantwortlicher</h2>

                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website
                  ist:
                </p>

                <address className="legal-address">
                  <strong>[Vollständiger Unternehmensname]</strong>
                  <br />
                  [Vorname und Nachname des Inhabers / der Inhaberin]
                  <br />
                  [Straße und Hausnummer]
                  <br />
                  [Postleitzahl und Ort]
                  <br />
                  <br />
                  Telefon:{" "}
                  <a href="tel:+490000000000">
                    [Telefonnummer]
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:info@montys-bar-bayreuth.de">
                    [E-Mail-Adresse]
                  </a>
                </address>
              </div>
            </section>

            {/* 02 */}
            <section className="legal-section">
              <p className="legal-section__number">02</p>

              <div>
                <h2>Datenschutzbeauftragter</h2>

                <p>
                  Ein betrieblicher Datenschutzbeauftragter ist derzeit nicht
                  benannt.
                </p>

                <p className="legal-hint">
                  Diesen Text nur beibehalten, wenn tatsächlich keine
                  Verpflichtung zur Benennung eines Datenschutzbeauftragten
                  besteht. Falls ein Datenschutzbeauftragter vorhanden ist,
                  müssen dessen Kontaktdaten hier eingetragen werden.
                </p>
              </div>
            </section>

            {/* 03 */}
            <section className="legal-section">
              <p className="legal-section__number">03</p>

              <div>
                <h2>Allgemeine Hinweise zur Datenverarbeitung</h2>

                <p>
                  Wir verarbeiten personenbezogene Daten nur, soweit dies zur
                  Bereitstellung einer funktionsfähigen Website, zur
                  Bearbeitung von Anfragen, zur Durchführung von
                  Reservierungen oder zur Erfüllung gesetzlicher Pflichten
                  erforderlich ist.
                </p>

                <p>
                  Personenbezogene Daten sind alle Informationen, die sich auf
                  eine identifizierte oder identifizierbare natürliche Person
                  beziehen. Hierzu gehören beispielsweise Name,
                  E-Mail-Adresse, Telefonnummer, IP-Adresse und Angaben im
                  Rahmen einer Reservierung oder Bewerbung.
                </p>
              </div>
            </section>

            {/* 04 */}
            <section className="legal-section">
              <p className="legal-section__number">04</p>

              <div>
                <h2>Rechtsgrundlagen</h2>

                <p>
                  Je nach Art der Verarbeitung stützen wir die Verarbeitung
                  personenbezogener Daten insbesondere auf folgende
                  Rechtsgrundlagen:
                </p>

                <ul className="legal-list">
                  <li>
                    Art. 6 Abs. 1 lit. a DSGVO, wenn eine Einwilligung erteilt
                    wurde.
                  </li>

                  <li>
                    Art. 6 Abs. 1 lit. b DSGVO, wenn die Verarbeitung zur
                    Durchführung vorvertraglicher Maßnahmen oder zur Erfüllung
                    eines Vertrages erforderlich ist.
                  </li>

                  <li>
                    Art. 6 Abs. 1 lit. c DSGVO, wenn die Verarbeitung zur
                    Erfüllung einer rechtlichen Verpflichtung erforderlich
                    ist.
                  </li>

                  <li>
                    Art. 6 Abs. 1 lit. f DSGVO, wenn die Verarbeitung zur
                    Wahrung unserer berechtigten Interessen oder der
                    berechtigten Interessen eines Dritten erforderlich ist
                    und keine überwiegenden Interessen der betroffenen Person
                    entgegenstehen.
                  </li>
                </ul>
              </div>
            </section>

            {/* 05 */}
            <section className="legal-section">
              <p className="legal-section__number">05</p>

              <div>
                <h2>Hosting und Server-Protokolldateien</h2>

                <p>
                  Diese Website wird bei folgendem Hostinganbieter betrieben:
                </p>

                <address className="legal-address">
                  STRATO GmbH
                  <br />
                  Otto-Ostrowski-Straße 7
                  <br />
                  10249 Berlin
                </address>

                <p>
                  Beim Aufruf der Website kann der Hostinganbieter
                  insbesondere folgende Daten in Server-Protokolldateien
                  verarbeiten:
                </p>

                <ul className="legal-list">
                  <li>IP-Adresse des aufrufenden Geräts</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>aufgerufene Seite oder Datei</li>
                  <li>übertragene Datenmenge</li>
                  <li>verwendeter Browser und Betriebssystem</li>
                  <li>Referrer-URL</li>
                  <li>HTTP-Statuscode</li>
                </ul>

                <p>
                  Die Verarbeitung erfolgt zur sicheren und stabilen
                  Bereitstellung der Website, zur Fehleranalyse und zur
                  Abwehr missbräuchlicher Zugriffe. Rechtsgrundlage ist
                  Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
                  liegt in einem sicheren, störungsfreien und technisch
                  zuverlässigen Betrieb der Website.
                </p>

                <p>
                  Mit dem Hostinganbieter ist, soweit erforderlich, ein
                  Vertrag über die Verarbeitung personenbezogener Daten im
                  Auftrag gemäß Art. 28 DSGVO abzuschließen.
                </p>
              </div>
            </section>

            {/* 06 */}
            <section className="legal-section">
              <p className="legal-section__number">06</p>

              <div>
                <h2>Kontaktaufnahme per E-Mail oder Telefon</h2>

                <p>
                  Wenn ihr uns per E-Mail oder Telefon kontaktiert, verarbeiten
                  wir die von euch übermittelten Angaben zur Bearbeitung und
                  Beantwortung der Anfrage.
                </p>

                <p>
                  Je nach Inhalt der Anfrage erfolgt die Verarbeitung auf
                  Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung
                  vorvertraglicher Maßnahmen oder auf Grundlage von
                  Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
                  liegt in der Bearbeitung und Beantwortung eingehender
                  Anfragen.
                </p>

                <p>
                  Die Daten werden gelöscht, sobald die Anfrage abschließend
                  bearbeitet wurde und keine gesetzlichen
                  Aufbewahrungspflichten oder sonstigen berechtigten Gründe
                  für eine weitere Speicherung bestehen.
                </p>
              </div>
            </section>

            {/* 07 */}
            <section className="legal-section">
              <p className="legal-section__number">07</p>

              <div>
                <h2>Kontaktformular</h2>

                <p>
                  Das derzeit auf dieser Website dargestellte Kontaktformular
                  versendet die eingegebenen Daten nicht unmittelbar über
                  einen eigenen Website-Server. Nach dem Betätigen des
                  Absende-Buttons wird über einen sogenannten
                  <code> mailto:</code>-Link das auf dem Endgerät eingerichtete
                  E-Mail-Programm geöffnet.
                </p>

                <p>
                  Die eigentliche Übermittlung erfolgt anschließend über den
                  vom Nutzer eingesetzten E-Mail-Anbieter. Auf dessen
                  Datenverarbeitung haben wir keinen Einfluss.
                </p>

                <p>
                  Erst wenn die vorbereitete E-Mail tatsächlich abgesendet
                  wird, erhalten wir die darin enthaltenen Angaben.
                </p>

                <p className="legal-hint">
                  Dieser Abschnitt muss geändert werden, sobald das Formular
                  später über Formspree, EmailJS, Web3Forms, einen eigenen
                  Server oder einen anderen Formularanbieter versendet wird.
                </p>
              </div>
            </section>

            {/* 08 */}
            <section className="legal-section">
              <p className="legal-section__number">08</p>

              <div>
                <h2>Bewerbungen</h2>

                <p>
                  Wenn ihr euch bei uns bewerbt, verarbeiten wir die im Rahmen
                  der Bewerbung mitgeteilten personenbezogenen Daten zur
                  Entscheidung über die Begründung eines
                  Beschäftigungsverhältnisses.
                </p>

                <p>
                  Rechtsgrundlage ist § 26 Abs. 1 BDSG in Verbindung mit
                  Art. 6 Abs. 1 lit. b DSGVO. Soweit eine Einwilligung erteilt
                  wurde, erfolgt die Verarbeitung zusätzlich auf Grundlage von
                  Art. 6 Abs. 1 lit. a DSGVO.
                </p>

                <p>
                  Dazu können insbesondere folgende Daten gehören:
                </p>

                <ul className="legal-list">
                  <li>Name und Kontaktdaten</li>
                  <li>gewünschte Tätigkeit und Verfügbarkeit</li>
                  <li>beruflicher Werdegang und Qualifikationen</li>
                  <li>Lebenslauf, Anschreiben und Zeugnisse</li>
                  <li>weitere freiwillig mitgeteilte Angaben</li>
                </ul>

                <p>
                  Kommt kein Beschäftigungsverhältnis zustande, werden die
                  Bewerbungsunterlagen grundsätzlich gelöscht, sobald ihre
                  weitere Speicherung nicht mehr zur Geltendmachung,
                  Ausübung oder Verteidigung von Rechtsansprüchen erforderlich
                  ist. Üblicherweise erfolgt die Löschung spätestens sechs
                  Monate nach Abschluss des Bewerbungsverfahrens, sofern keine
                  Einwilligung in eine längere Speicherung erteilt wurde.
                </p>

                <p>
                  Das derzeitige Bewerbungsformular übermittelt keine Dateien
                  über die Website. Ausgewählte Dateien müssen vom Bewerber im
                  geöffneten E-Mail-Programm selbst als Anhang hinzugefügt
                  werden.
                </p>
              </div>
            </section>

            {/* 09 */}
            <section className="legal-section">
              <p className="legal-section__number">09</p>

              <div>
                <h2>Online-Reservierungen über Resmio</h2>

                <p>
                  Auf unserer Reservierungsseite ist ein
                  Online-Reservierungswidget der folgenden Anbieterin
                  eingebunden:
                </p>

                <address className="legal-address">
                  resmio GmbH
                  <br />
                  Katzwanger Straße 150
                  <br />
                  Gebäude 1C
                  <br />
                  90461 Nürnberg
                </address>

                <p>
                  Über das Widget können Gäste einen Tisch reservieren. Dabei
                  können insbesondere folgende Angaben verarbeitet werden:
                </p>

                <ul className="legal-list">
                  <li>Name</li>
                  <li>E-Mail-Adresse und Telefonnummer</li>
                  <li>Datum und Uhrzeit der Reservierung</li>
                  <li>Anzahl der Gäste</li>
                  <li>Reservierungs- und Kontaktdaten</li>
                  <li>besondere Wünsche und freiwillige Anmerkungen</li>
                  <li>
                    Angaben etwa zu Hund, Kinderwagen, Hochstuhl oder
                    Barrierefreiheit, sofern diese abgefragt werden
                  </li>
                  <li>technische Verbindungsdaten</li>
                </ul>

                <p>
                  Die Verarbeitung erfolgt zur Entgegennahme und Durchführung
                  der Reservierung auf Grundlage von Art. 6 Abs. 1 lit. b
                  DSGVO.
                </p>

                <p>
                  Soweit Resmio Daten in unserem Auftrag verarbeitet, erfolgt
                  dies auf Grundlage eines Vertrages zur Auftragsverarbeitung
                  gemäß Art. 28 DSGVO. Soweit Resmio für einzelne
                  Verarbeitungen selbst verantwortlich ist, gelten ergänzend
                  die Datenschutzinformationen von Resmio.
                </p>

                <p>
                  Nach Angaben von Resmio verwendet das eingebundene Widget
                  technisch notwendige Cookies beziehungsweise
                  Session-Technologien, die für die Bereitstellung des
                  Reservierungsvorgangs erforderlich sind. Resmio gibt an, in
                  seinen Widgets keine Cookies zu Tracking- oder
                  Werbezwecken einzusetzen.
                </p>
              </div>
            </section>

            {/* 10 */}
            <section className="legal-section">
              <p className="legal-section__number">10</p>

              <div>
                <h2>Cookies und ähnliche Technologien</h2>

                <p>
                  Diese Website setzt nach aktuellem Stand selbst keine
                  Analyse-, Marketing- oder Werbe-Cookies ein.
                </p>

                <p>
                  Beim Aufruf der Reservierungsseite können durch das
                  eingebundene Resmio-Widget technisch notwendige Cookies oder
                  vergleichbare Speichertechnologien eingesetzt werden. Diese
                  dienen der technischen Durchführung der vom Nutzer
                  ausdrücklich gewünschten Reservierung.
                </p>

                <p>
                  Soweit der Zugriff auf Informationen im Endgerät für einen
                  ausdrücklich gewünschten digitalen Dienst unbedingt
                  erforderlich ist, kann dieser ohne vorherige Einwilligung
                  zulässig sein. Für nicht notwendige Technologien ist
                  grundsätzlich eine vorherige Einwilligung erforderlich.
                </p>

                <p className="legal-hint">
                  Sobald Analyse-, Marketing-, Karten-, Video- oder sonstige
                  nicht notwendige Dienste eingebunden werden, müssen ein
                  Einwilligungsmanagement und diese Datenschutzerklärung
                  entsprechend ergänzt werden.
                </p>
              </div>
            </section>

            {/* 11 */}
            <section className="legal-section">
              <p className="legal-section__number">11</p>

              <div>
                <h2>Instagram und Facebook</h2>

                <p>
                  Auf dieser Website befinden sich Links zu unseren Auftritten
                  bei Instagram und Facebook. Dabei handelt es sich derzeit
                  lediglich um externe Verlinkungen.
                </p>

                <p>
                  Beim bloßen Aufruf unserer Website werden über diese Links
                  keine Daten automatisch an die Betreiber der sozialen
                  Netzwerke übertragen. Erst wenn ihr einen der Links
                  anklickt, wird die jeweilige externe Plattform aufgerufen.
                </p>

                <p>
                  Ab diesem Zeitpunkt kann der jeweilige Plattformbetreiber
                  personenbezogene Daten verarbeiten. Dies gilt insbesondere,
                  wenn ihr bei der Plattform angemeldet seid. Auf Art und
                  Umfang der dortigen Datenverarbeitung haben wir keinen
                  Einfluss.
                </p>

                <p>
                  Anbieter der Plattformen sind insbesondere:
                </p>

                <ul className="legal-list">
                  <li>
                    Meta Platforms Ireland Limited, Merrion Road, Dublin 4,
                    D04 X2K5, Irland
                  </li>
                  <li>
                    Instagram ist ein Angebot der Meta Platforms Ireland
                    Limited.
                  </li>
                </ul>
              </div>
            </section>

            {/* 12 */}
            <section className="legal-section">
              <p className="legal-section__number">12</p>

              <div>
                <h2>Google Maps</h2>

                <p>
                  Nach aktuellem Stand ist auf dieser Website keine
                  interaktive Google-Maps-Karte eingebunden.
                </p>

                <p>
                  Soweit ein externer Link zu Google Maps verwendet wird,
                  werden erst nach dem Anklicken des Links Daten an Google
                  übertragen. Für die Datenverarbeitung auf der externen
                  Google-Maps-Seite ist der dortige Anbieter verantwortlich.
                </p>

                <p className="legal-hint">
                  Wird später eine interaktive Karte direkt in die Website
                  eingebunden, muss dieser Abschnitt angepasst werden. Je nach
                  Einbindungsart kann außerdem eine vorherige Einwilligung
                  erforderlich sein.
                </p>
              </div>
            </section>

            {/* 13 */}
            <section className="legal-section">
              <p className="legal-section__number">13</p>

              <div>
                <h2>Schriftarten und Icons</h2>

                <p>
                  Die Website verwendet Systemschriftarten sowie innerhalb des
                  Website-Projekts bereitgestellte Symbole und Icons. Nach
                  aktuellem Stand werden keine Schriftarten beim Aufruf der
                  Website von Servern von Google Fonts oder vergleichbaren
                  externen Schriftdiensten nachgeladen.
                </p>

                <p className="legal-hint">
                  Falls später externe Google Fonts, Adobe Fonts oder andere
                  externe Schriftendienste eingebunden werden, muss dieser
                  Abschnitt angepasst werden.
                </p>
              </div>
            </section>

            {/* 14 */}
            <section className="legal-section">
              <p className="legal-section__number">14</p>

              <div>
                <h2>Empfänger personenbezogener Daten</h2>

                <p>
                  Personenbezogene Daten können im Rahmen der beschriebenen
                  Zwecke insbesondere an folgende Empfänger oder Kategorien
                  von Empfängern übermittelt werden:
                </p>

                <ul className="legal-list">
                  <li>Hosting- und IT-Dienstleister</li>
                  <li>Resmio im Zusammenhang mit Online-Reservierungen</li>
                  <li>E-Mail- und Telekommunikationsanbieter</li>
                  <li>
                    Behörden und öffentliche Stellen, soweit eine gesetzliche
                    Verpflichtung besteht
                  </li>
                  <li>
                    Rechts-, Steuer- oder sonstige Berater, soweit dies
                    erforderlich ist
                  </li>
                </ul>

                <p>
                  Eine Weitergabe zu Werbezwecken erfolgt nicht, sofern keine
                  ausdrückliche Einwilligung vorliegt.
                </p>
              </div>
            </section>

            {/* 15 */}
            <section className="legal-section">
              <p className="legal-section__number">15</p>

              <div>
                <h2>Übermittlung in Drittländer</h2>

                <p>
                  Eine Übermittlung personenbezogener Daten in Staaten
                  außerhalb der Europäischen Union oder des Europäischen
                  Wirtschaftsraums erfolgt nur, wenn hierfür die gesetzlichen
                  Voraussetzungen erfüllt sind.
                </p>

                <p>
                  Beim Aufruf externer Dienste oder sozialer Netzwerke kann
                  nicht ausgeschlossen werden, dass Daten auch in Drittländer,
                  insbesondere in die USA, übermittelt werden.
                </p>

                <p>
                  Soweit eine solche Übermittlung erfolgt, stützt sie sich je
                  nach Anbieter auf einen Angemessenheitsbeschluss,
                  geeignete Garantien wie Standardvertragsklauseln oder eine
                  andere gesetzliche Grundlage.
                </p>
              </div>
            </section>

            {/* 16 */}
            <section className="legal-section">
              <p className="legal-section__number">16</p>

              <div>
                <h2>Speicherdauer</h2>

                <p>
                  Personenbezogene Daten werden nur so lange gespeichert, wie
                  dies für den jeweiligen Verarbeitungszweck erforderlich ist
                  oder gesetzliche Aufbewahrungspflichten bestehen.
                </p>

                <p>
                  Nach Wegfall des Verarbeitungszwecks werden die Daten
                  gelöscht oder anonymisiert, sofern keine gesetzlichen
                  Aufbewahrungspflichten, berechtigten Interessen oder
                  laufenden Rechtsansprüche einer Löschung entgegenstehen.
                </p>
              </div>
            </section>

            {/* 17 */}
            <section className="legal-section">
              <p className="legal-section__number">17</p>

              <div>
                <h2>Pflicht zur Bereitstellung von Daten</h2>

                <p>
                  Die Bereitstellung personenbezogener Daten ist grundsätzlich
                  freiwillig.
                </p>

                <p>
                  Bestimmte Angaben können jedoch erforderlich sein, um eine
                  Reservierung, Kontaktanfrage oder Bewerbung bearbeiten zu
                  können. Ohne die erforderlichen Angaben kann die jeweilige
                  Leistung gegebenenfalls nicht erbracht werden.
                </p>
              </div>
            </section>

            {/* 18 */}
            <section className="legal-section">
              <p className="legal-section__number">18</p>

              <div>
                <h2>Automatisierte Entscheidungsfindung</h2>

                <p>
                  Eine ausschließlich automatisierte Entscheidungsfindung
                  einschließlich Profiling gemäß Art. 22 DSGVO findet durch
                  uns nicht statt.
                </p>
              </div>
            </section>

            {/* 19 */}
            <section className="legal-section">
              <p className="legal-section__number">19</p>

              <div>
                <h2>Rechte der betroffenen Personen</h2>

                <p>
                  Betroffene Personen haben im Rahmen der gesetzlichen
                  Voraussetzungen insbesondere folgende Rechte:
                </p>

                <ul className="legal-list">
                  <li>
                    Recht auf Auskunft über die verarbeiteten
                    personenbezogenen Daten gemäß Art. 15 DSGVO
                  </li>
                  <li>
                    Recht auf Berichtigung unrichtiger Daten gemäß
                    Art. 16 DSGVO
                  </li>
                  <li>
                    Recht auf Löschung gemäß Art. 17 DSGVO
                  </li>
                  <li>
                    Recht auf Einschränkung der Verarbeitung gemäß
                    Art. 18 DSGVO
                  </li>
                  <li>
                    Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO
                  </li>
                  <li>
                    Recht auf Widerspruch gegen bestimmte Verarbeitungen gemäß
                    Art. 21 DSGVO
                  </li>
                  <li>
                    Recht auf Widerruf einer erteilten Einwilligung mit Wirkung
                    für die Zukunft gemäß Art. 7 Abs. 3 DSGVO
                  </li>
                </ul>

                <p>
                  Der Widerruf einer Einwilligung berührt nicht die
                  Rechtmäßigkeit der Verarbeitung, die bis zum Widerruf auf
                  Grundlage der Einwilligung erfolgt ist.
                </p>
              </div>
            </section>

            {/* 20 */}
            <section className="legal-section">
              <p className="legal-section__number">20</p>

              <div>
                <h2>Widerspruchsrecht</h2>

                <p>
                  Erfolgt eine Datenverarbeitung auf Grundlage von
                  Art. 6 Abs. 1 lit. e oder lit. f DSGVO, habt ihr das Recht,
                  aus Gründen, die sich aus eurer besonderen Situation
                  ergeben, jederzeit Widerspruch gegen diese Verarbeitung
                  einzulegen.
                </p>

                <p>
                  Werden personenbezogene Daten zum Zweck der Direktwerbung
                  verarbeitet, kann dieser Verarbeitung jederzeit ohne Angabe
                  besonderer Gründe widersprochen werden.
                </p>
              </div>
            </section>

            {/* 21 */}
            <section className="legal-section">
              <p className="legal-section__number">21</p>

              <div>
                <h2>Beschwerderecht bei einer Aufsichtsbehörde</h2>

                <p>
                  Betroffene Personen haben das Recht, sich bei einer
                  Datenschutzaufsichtsbehörde zu beschweren, wenn sie der
                  Ansicht sind, dass die Verarbeitung ihrer
                  personenbezogenen Daten gegen die DSGVO verstößt.
                </p>

                <p>
                  Für nicht öffentliche Stellen mit Sitz in Bayern ist
                  grundsätzlich folgende Behörde zuständig:
                </p>

                <address className="legal-address">
                  Bayerisches Landesamt für Datenschutzaufsicht
                  <br />
                  Promenade 18
                  <br />
                  91522 Ansbach
                </address>

                <p>
                  Das Beschwerderecht besteht unbeschadet anderweitiger
                  verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>
              </div>
            </section>

            {/* 22 */}
            <section className="legal-section">
              <p className="legal-section__number">22</p>

              <div>
                <h2>Datensicherheit</h2>

                <p>
                  Wir treffen angemessene technische und organisatorische
                  Maßnahmen, um personenbezogene Daten vor Verlust,
                  Manipulation, unbefugtem Zugriff und sonstigem Missbrauch zu
                  schützen.
                </p>

                <p>
                  Die Website soll verschlüsselt über HTTPS übertragen werden.
                  Eine verschlüsselte Verbindung erkennt ihr insbesondere an
                  der Anzeige von „https://“ in der Adresszeile des Browsers.
                </p>
              </div>
            </section>

            {/* 23 */}
            <section className="legal-section">
              <p className="legal-section__number">23</p>

              <div>
                <h2>Aktualität und Änderung dieser Datenschutzerklärung</h2>

                <p>
                  Diese Datenschutzerklärung entspricht dem derzeit geplanten
                  technischen Stand der Website.
                </p>

                <p>
                  Wir behalten uns vor, sie anzupassen, wenn sich eingesetzte
                  Dienste, gesetzliche Anforderungen oder die
                  Datenverarbeitung auf dieser Website ändern.
                </p>

                <p>
                  Stand: [Monat und Jahr der Veröffentlichung]
                </p>
              </div>
            </section>
          </article>

          <aside className="legal-warning">
            <strong>Vor Veröffentlichung prüfen und ausfüllen</strong>

            <p>
              Die Angaben zum Verantwortlichen, zu Kontaktmöglichkeiten,
              Datenschutzbeauftragtem und Veröffentlichungsstand sind noch
              Platzhalter. Die Datenschutzerklärung muss vor Veröffentlichung
              anhand der tatsächlich eingesetzten Dienste, Verträge und
              Unternehmenseigenschaften abschließend geprüft werden.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Privacy;
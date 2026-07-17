import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";

const Datenschutz = () => (
  <PageLayout>
    <SEOHead title="Datenschutzerklärung | Sentinel Services" description="Datenschutzerklärung der Sentinel Services – Informationen zur Erhebung und Verarbeitung personenbezogener Daten." />

    <PageHero
      title="Datenschutzerklärung"
      subtitle="Informationen zur Erhebung und Verarbeitung personenbezogener Daten gemäß DSGVO."
    />

    <section className="section-light">
      <div className="reading-shell">
        <div className="space-y-10" style={{ color: "hsl(var(--section-light-fg))" }}>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>1. Verantwortlicher</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):<br /><br />
              Sentinel Services<br />
              Inh. Tim Fitzlaff<br />
              Grusonstraße 9<br />
              39112 Magdeburg<br />
              E-Mail: info@sentinel-services.de
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Beim Besuch unserer Website werden automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
            </p>
            <ul className="text-sm text-muted-fg space-y-1 ml-4 list-disc">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              <li>Name Ihres Access-Providers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>3. Kontaktformular</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>4. Formularverarbeitung über FormSubmit (Drittland-Übermittlung USA)</h2>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Zur technischen Verarbeitung und Zustellung der über unser Kontaktformular abgesendeten Anfragen nutzen wir den Dienst <strong>FormSubmit</strong> (Archieboy Holdings, LLC, USA),
              erreichbar unter <a href="https://formsubmit.co" target="_blank" rel="noopener noreferrer" className="underline">formsubmit.co</a>. FormSubmit nimmt die übermittelten
              Formularinhalte entgegen und leitet sie als E-Mail an unsere Postfachadresse weiter.
            </p>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Verarbeitet werden dabei die von Ihnen aktiv eingegebenen Angaben (Name, ggf. Unternehmen, E-Mail-Adresse, Telefonnummer, gewünschte Leistung, Einsatzort, Zeitraum, Nachricht
              sowie die optionalen Häkchen „Rückruf erwünscht" und „Kurzfristiger Einsatzbedarf"). Technisch unvermeidlich übermittelt Ihr Browser zusätzlich Ihre IP-Adresse und einen Zeitstempel
              an die Server von FormSubmit.
            </p>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur Anbahnung eines möglichen Vertragsverhältnisses (Art. 6 Abs. 1 lit. b DSGVO) sowie auf Grundlage unseres berechtigten
              Interesses an einer verlässlichen und spam-resistenten Formularzustellung (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              FormSubmit verarbeitet die Daten in den USA. Für die USA besteht kein genereller Angemessenheitsbeschluss der Europäischen Kommission, der mit dem Schutzniveau der DSGVO
              uneingeschränkt vergleichbar wäre. Die Übermittlung erfolgt daher zusätzlich auf Grundlage Ihrer ausdrücklichen Einwilligung gemäß <strong>Art. 49 Abs. 1 lit. a DSGVO</strong>,
              die Sie durch Setzen des entsprechenden Häkchens vor dem Absenden des Formulars erteilen. Sie wurden darüber informiert, dass für die USA derzeit kein Angemessenheitsbeschluss
              vorliegt und mögliche Risiken einer Datenverarbeitung durch US-Behörden bestehen können (z. B. Zugriffsrechte nach US-Überwachungsgesetzen, eingeschränkte Betroffenenrechte).
            </p>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft per E-Mail an
              {" "}<a href="mailto:info@sentinel-services.de" className="underline">info@sentinel-services.de</a> widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
              bleibt davon unberührt. Möchten Sie keine Übermittlung an FormSubmit, nutzen Sie bitte alternativ den direkten E-Mail-Kontakt.
            </p>
            <p className="text-sm leading-relaxed text-muted-fg">
              Die übermittelten Inhalte werden nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist; gesetzliche Aufbewahrungsfristen bleiben unberührt. Weitere
              Informationen zum Datenumgang durch FormSubmit finden Sie unter{" "}
              <a href="https://formsubmit.co/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">formsubmit.co/legal/privacy-policy</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>5. Anfrage per E-Mail</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>6. Ihre Rechte</h2>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="text-sm text-muted-fg space-y-1 ml-4 list-disc">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>Der Verarbeitung Ihrer Daten zu widersprechen (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>7. SSL-/TLS-Verschlüsselung</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>8. Cookies</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gesetzt. Wir haben ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung unserer Website. Darüber hinaus setzen wir Cookies im Rahmen von Google Analytics ein (siehe Ziffer 9).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>9. Google Analytics</h2>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google"). Google Analytics verwendet sogenannte „Cookies", Textdateien, die auf Ihrem Endgerät gespeichert werden und eine Analyse der Benutzung der Website durch Sie ermöglichen.
            </p>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Wir setzen Google Analytics mit aktivierter IP-Anonymisierung ein (<em>anonymize_ip</em>). Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
            </p>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
            </p>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer statistischen Auswertung des Nutzerverhaltens zur Optimierung unseres Angebots). Sofern eine Einwilligung erforderlich ist (z. B. bei nicht zwingend erforderlichen Cookies), erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO sowie § 25 Abs. 1 TDDDG.
            </p>
            <p className="text-sm leading-relaxed text-muted-fg mb-3">
              Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Außerdem können Sie die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="underline">tools.google.com/dlpage/gaoptout</a>.
            </p>
            <p className="text-sm leading-relaxed text-muted-fg">
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google:{" "}
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="underline">policies.google.com/privacy</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>10. Hosting</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>11. Änderung der Datenschutzerklärung</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </div>

          <p className="text-xs text-muted-fg pt-6 border-t border-border/40">
            Stand: Mai 2026
          </p>

        </div>
      </div>
    </section>
  </PageLayout>
);

export default Datenschutz;

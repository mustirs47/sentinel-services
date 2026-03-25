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
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-10" style={{ color: "hsl(var(--section-light-fg))" }}>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>1. Verantwortlicher</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):<br /><br />
              Sentinel Services<br />
              [Vorname Nachname]<br />
              [Straße und Hausnummer]<br />
              [PLZ Ort]<br />
              Telefon: +49 (0) 208 935 799 70<br />
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
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>4. Anfrage per E-Mail oder Telefon</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>5. Ihre Rechte</h2>
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
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>6. SSL-/TLS-Verschlüsselung</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>7. Cookies</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Unsere Website verwendet derzeit keine Cookies, die einer Einwilligung bedürfen. Technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gesetzt. Wir haben ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung unserer Website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>8. Hosting</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>9. Änderung der Datenschutzerklärung</h2>
            <p className="text-sm leading-relaxed text-muted-fg">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </div>

          <div className="rounded-lg p-4" style={{ background: "hsl(205 90% 55% / 0.05)" }}>
            <p className="text-xs text-muted-fg">
              <span className="font-semibold text-primary">Hinweis:</span> Diese Datenschutzerklärung enthält Platzhalter [in eckigen Klammern], die vor dem Launch durch die tatsächlichen Unternehmensdaten ersetzt werden müssen.
            </p>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Datenschutz;

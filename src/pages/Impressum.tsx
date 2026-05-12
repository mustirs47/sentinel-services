import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";

const Impressum = () => (
  <PageLayout>
    <SEOHead title="Impressum | Sentinel Services" description="Impressum der Sentinel Services – Angaben gemäß § 5 TMG." />

    <PageHero
      title="Impressum"
      subtitle="Angaben gemäß § 5 TMG"
    />

    <section className="section-light">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div
          role="note"
          className="mb-8 rounded-lg border-l-4 border-primary p-4"
          style={{
            background: "hsl(205 90% 55% / 0.08)",
            borderColor: "hsl(var(--primary))",
          }}
        >
          <p className="text-sm font-semibold mb-1" style={{ color: "hsl(var(--section-light-fg))" }}>
            Hinweis: Diese Seite befindet sich im Aufbau
          </p>
          <p className="text-xs leading-relaxed text-muted-fg">
            Die vollständigen Pflichtangaben werden derzeit ergänzt. Für rechtsverbindliche
            Auskünfte erreichen Sie uns per E-Mail an{" "}
            <a href="mailto:info@sentinel-services.de" className="text-primary hover:underline">
              info@sentinel-services.de
            </a>
            .
          </p>
        </div>
        <div className="prose prose-sm max-w-none" style={{ color: "hsl(var(--section-light-fg))" }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
            Angaben gemäß § 5 TMG
          </h2>
          <p className="text-sm leading-relaxed text-muted-fg mb-6">
            Sentinel Services<br />
            Inhaber Tim Fitzlaff<br />
            Magdeburg<br />
            Deutschland
          </p>

          <h2 className="text-lg font-semibold mb-4 mt-8" style={{ color: "hsl(var(--section-light-fg))" }}>
            Kontakt
          </h2>
          <p className="text-sm leading-relaxed text-muted-fg mb-6">
            E-Mail: info@sentinel-services.de
          </p>

          <h2 className="text-lg font-semibold mb-4 mt-8" style={{ color: "hsl(var(--section-light-fg))" }}>
            Gewerberechtliche Erlaubnis
          </h2>
          <p className="text-sm leading-relaxed text-muted-fg mb-6">
            Bewachungsgewerbe gemäß § 34a Gewerbeordnung (GewO)<br />
            Zuständige Aufsichtsbehörde: Ordnungsamt Magdeburg
          </p>

          <h2 className="text-lg font-semibold mb-4 mt-8" style={{ color: "hsl(var(--section-light-fg))" }}>
            Umsatzsteuer-Identifikationsnummer
          </h2>
          <p className="text-sm leading-relaxed text-muted-fg mb-6">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            *folgt*
          </p>

          <h2 className="text-lg font-semibold mb-4 mt-8" style={{ color: "hsl(var(--section-light-fg))" }}>
            Streitschlichtung
          </h2>
          <p className="text-sm leading-relaxed text-muted-fg mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="text-sm leading-relaxed text-muted-fg mb-6">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-lg font-semibold mb-4 mt-8" style={{ color: "hsl(var(--section-light-fg))" }}>
            Haftung für Inhalte
          </h2>
          <p className="text-sm leading-relaxed text-muted-fg mb-6">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
            der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
            diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>

          <h2 className="text-lg font-semibold mb-4 mt-8" style={{ color: "hsl(var(--section-light-fg))" }}>
            Haftung für Links
          </h2>
          <p className="text-sm leading-relaxed text-muted-fg mb-6">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
            verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
            Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h2 className="text-lg font-semibold mb-4 mt-8" style={{ color: "hsl(var(--section-light-fg))" }}>
            Urheberrecht
          </h2>
          <p className="text-sm leading-relaxed text-muted-fg">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir
            um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
            umgehend entfernen.
          </p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Impressum;

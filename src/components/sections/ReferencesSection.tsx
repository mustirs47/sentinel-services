import { Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scenarios = [
  {
    title: "Baustellensicherung – Nachtbewachung",
    situation: "Großbaustelle mit hochwertigem Baumaterial, kein Zaun, offener Zugang nach Baustellenschluss.",
    einsatz: "Feste Nachtwache ab 18 Uhr, dokumentierte Kontrollrundgänge alle 90 Minuten, Zugangskontrolle und Sofortmeldung an den Bauleiter bei Unregelmäßigkeiten.",
  },
  {
    title: "Firmenevent – 500 Gäste, VIP-Bereich",
    situation: "Sommerfest mit offener Gästeliste, separatem VIP-Bereich und Cateringflächen im Außenbereich.",
    einsatz: "Einlasssteuerung mit Gästelistenabgleich, diskrete Präsenz im VIP-Bereich, Koordination mit dem Veranstaltungsteam über Funk, Deeskalationsbereitschaft.",
  },
  {
    title: "Empfangsservice – Bürokomplex",
    situation: "Mehrmieterobjekt mit täglichem Besucheraufkommen, keine einheitliche Zugangskontrolle.",
    einsatz: "Feste Empfangskraft mit Besucherregistrierung, Schlüsselverwaltung und Abstimmung mit den Mietern. Professionelles Auftreten als Teil des Gebäudemanagements.",
  },
];

const ReferencesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Typische Einsatzbilder
          </h2>
          <p className="mt-3 text-muted-fg max-w-2xl mx-auto">
            Keine erfundenen Referenzen – drei realistische Szenarien, für die wir aufgestellt sind.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {scenarios.map(({ title, situation, einsatz }) => (
            <div
              key={title}
              className="rounded-xl p-6 flex flex-col"
              style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="text-sm font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h3>
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Ausgangslage</p>
                  <p className="text-sm text-muted-fg">{situation}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Unser Einsatz</p>
                  <p className="text-sm text-muted-fg">{einsatz}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
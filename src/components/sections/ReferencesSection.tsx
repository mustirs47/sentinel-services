import { Shield, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scenarios = [
  {
    title: "Baustellensicherung über Nacht",
    challenge: "Wiederholter Materialdiebstahl auf einer Großbaustelle außerhalb der Arbeitszeiten.",
    solution: "Regelmäßige Kontrollgänge, sichtbare Präsenz und dokumentierte Zugangskontrollen reduzierten Vorfälle auf null.",
  },
  {
    title: "Veranstaltungsschutz bei Firmenevent",
    challenge: "Großes Firmenjubiläum mit 500+ Gästen und VIP-Bereich.",
    solution: "Einlassmanagement, Besucherlenkung und diskrete Präsenz – reibungsloser Ablauf ohne Zwischenfälle.",
  },
  {
    title: "Empfangsservice in Bürokomplex",
    challenge: "Professioneller Empfang und Zugangskontrolle in einem Mehrmieterobjekt.",
    solution: "Feste Empfangskräfte mit Schlüsselverwaltung und Besucherregistrierung – repräsentativ und zuverlässig.",
  },
];

const ReferencesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Typische Einsatzszenarien
          </h2>
          <p className="mt-3 text-muted-fg max-w-2xl mx-auto">
            Beispielhafte Situationen, für die wir aufgestellt sind.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {scenarios.map(({ title, challenge, solution }) => (
            <div
              key={title}
              className="rounded-xl p-6 flex flex-col"
              style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="text-sm font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h3>
              </div>
              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Herausforderung</p>
                  <p className="text-sm text-muted-fg">{challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Lösung</p>
                  <p className="text-sm text-muted-fg">{solution}</p>
                </div>
              </div>
              <a href="#kontakt" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Ähnliche Anfrage stellen <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;

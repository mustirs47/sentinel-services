import { Scale, GraduationCap, HeartPulse, Settings } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const groups = [
  {
    icon: Scale,
    title: "Gewerberechtliche Grundlage",
    items: [
      "Gewerbeerlaubnis nach §34a GewO",
      "Sachkundeprüfung nach §34a GewO (IHK)",
      "Unterrichtungsverfahren nach §34a GewO",
    ],
    relevance: "Gesetzliche Voraussetzung für gewerbliche Sicherheitstätigkeit. Stellt sicher, dass unser Personal fachlich und rechtlich geprüft ist.",
  },
  {
    icon: GraduationCap,
    title: "Fachliche Qualifikation",
    items: [
      "Geprüfte Schutz- und Sicherheitskräfte",
      "Schulung in Rechtsgrundlagen und Eingriffsrecht",
      "Regelmäßige Auffrischungslehrgänge",
    ],
    relevance: "Gewährleistet, dass Einsatzkräfte rechtssicher handeln und in kritischen Situationen korrekt reagieren.",
  },
  {
    icon: HeartPulse,
    title: "Zusatzqualifikationen",
    items: [
      "Erste-Hilfe-Ausbildung (regelmäßig aufgefrischt)",
      "Brandschutzhelfer-Ausbildung",
      "Deeskalationstraining",
    ],
    relevance: "Ermöglicht schnelles Handeln bei Notfällen und reduziert Eskalationsrisiken im Einsatz.",
  },
  {
    icon: Settings,
    title: "Betriebliche Standards",
    items: [
      "Lückenlose Einsatzdokumentation",
      "Standardisierte Übergabe- und Meldeprotokolle",
      "Interne Qualitätskontrollen und Audits",
    ],
    relevance: "Transparenz für den Auftraggeber. Jeder Einsatz ist nachvollziehbar, überprüfbar und auswertbar.",
  },
];

const QualificationsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="qualifikationen" className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Qualifikationen & Nachweise
          </h2>
          <p className="mt-3 text-muted-fg max-w-2xl mx-auto">
            Konkrete Nachweisgruppen, die zeigen, auf welcher fachlichen Grundlage wir arbeiten.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map(({ icon: Icon, title, items, relevance }) => (
            <div
              key={title}
              className="rounded-xl p-6 sm:p-8"
              style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "hsl(var(--section-light-fg))" }}>
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg p-3" style={{ background: "hsl(205 90% 55% / 0.05)" }}>
                <p className="text-xs leading-relaxed text-muted-fg">
                  <span className="font-semibold text-primary">Relevanz für Kunden:</span> {relevance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
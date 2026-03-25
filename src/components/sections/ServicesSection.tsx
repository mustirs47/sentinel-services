import { Building2, PartyPopper, HardHat, DoorOpen, Route, Settings, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Building2,
    title: "Objektschutz",
    desc: "Schutz von Gewerbeobjekten, Immobilien und Betriebsstätten – zuverlässig und abgestimmt auf Ihre Anforderungen.",
    points: ["Zugangskontrollen", "Präsenz vor Ort", "Schichtbetrieb nach Bedarf"],
  },
  {
    icon: PartyPopper,
    title: "Veranstaltungsschutz",
    desc: "Zugangskontrolle, Besucherlenkung und sichtbare Präsenz bei Events jeder Größenordnung.",
    points: ["Einlassmanagement", "Deeskalation", "Koordination mit Veranstalter"],
  },
  {
    icon: HardHat,
    title: "Baustellenbewachung",
    desc: "Prävention von Diebstahl, Vandalismus und unbefugtem Zutritt auf Baustellen und Projektflächen.",
    points: ["Nacht- und Wochenendbewachung", "Dokumentierte Kontrollgänge", "Zugangskontrolle"],
  },
  {
    icon: DoorOpen,
    title: "Empfangs- und Pfortendienste",
    desc: "Repräsentativ, kontrolliert und serviceorientiert – der erste Eindruck zählt.",
    points: ["Besucherempfang", "Schlüsselverwaltung", "Telefonzentrale"],
  },
  {
    icon: Route,
    title: "Kontroll- und Streifendienste",
    desc: "Regelmäßige Kontrollgänge und dokumentierte Prüfungen für maximale Sicherheit.",
    points: ["Revierdienst", "Alarmverfolgung", "Schließdienste"],
  },
  {
    icon: Settings,
    title: "Individuelle Sicherheitskonzepte",
    desc: "Abgestimmt auf Objekt, Risiko und Betriebsablauf – keine Lösung von der Stange.",
    points: ["Risikoanalyse", "Maßnahmenplanung", "Laufende Optimierung"],
  },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="leistungen" className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Sicherheitslösungen für unterschiedliche Einsatzbereiche
          </h2>
          <p className="mt-3 text-muted-fg max-w-2xl mx-auto">
            Von Objektschutz bis zum individuellen Sicherheitskonzept – wir decken ein breites Spektrum ab.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, points }) => (
            <div
              key={title}
              className="group rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              style={{
                background: "hsl(var(--section-light-card))",
                borderColor: "hsl(var(--section-light-border))",
              }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg">{desc}</p>
              <ul className="mt-4 space-y-1.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-fg">
                    <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:underline">
                Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

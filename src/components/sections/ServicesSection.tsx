import { Building2, PartyPopper, HardHat, DoorOpen, Route, Settings, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Building2,
    title: "Objektschutz",
    context: "Für Betriebsstätten mit Publikumsverkehr oder erhöhtem Schutzbedarf außerhalb der Geschäftszeiten.",
    desc: "Zugangskontrollen, Schichtbetrieb und sichtbare Präsenz – abgestimmt auf Objekt und Risikoprofil.",
    points: ["Zugangs- und Zutrittskontrolle", "Schließ- und Kontrolldienste", "Dokumentierte Rundgänge"],
  },
  {
    icon: PartyPopper,
    title: "Veranstaltungsschutz",
    context: "Für Events mit Besucherströmen, VIP-Bereichen oder erhöhtem Koordinationsbedarf.",
    desc: "Einlassmanagement, Besucherlenkung und Deeskalation – in direkter Abstimmung mit dem Veranstalter.",
    points: ["Personalisiertes Einlassmanagement", "Deeskalation und Intervention", "Abstimmung mit Ordnungsbehörden"],
  },
  {
    icon: HardHat,
    title: "Baustellenbewachung",
    context: "Für Projektflächen mit hohem Materialwert oder Zugang außerhalb der Bauzeiten.",
    desc: "Nacht- und Wochenendbewachung mit dokumentierten Kontrollgängen und Zugangssicherung.",
    points: ["Nacht-/Wochenendpräsenz", "Materialschutz und Zufahrtskontrolle", "Sofortmeldung bei Vorfällen"],
  },
  {
    icon: DoorOpen,
    title: "Empfangs- und Pfortendienste",
    context: "Für repräsentative Eingangsbereiche, die Sicherheitsfunktion und Servicequalität verbinden.",
    desc: "Professioneller Besucherempfang, Schlüsselverwaltung und Telefonzentrale.",
    points: ["Besucherregistrierung", "Schlüssel- und Zutrittsverwaltung", "Repräsentativer erster Eindruck"],
  },
  {
    icon: Route,
    title: "Kontroll- und Streifendienste",
    context: "Für Areale, die regelmäßige Überprüfung erfordern – ohne permanente Besetzung.",
    desc: "Revierdienst, Alarmverfolgung und Schließdienste nach festgelegtem Kontrollplan.",
    points: ["Revierfahrten nach Einsatzplan", "Alarm- und Störungsverfolgung", "Protokollierte Schließrunden"],
  },
  {
    icon: Settings,
    title: "Individuelle Sicherheitskonzepte",
    context: "Für komplexe Anforderungen, die keine Standardlösung abdeckt.",
    desc: "Risikoanalyse, Maßnahmenplanung und laufende Optimierung – zugeschnitten auf Ihr Objekt.",
    points: ["Objektspezifische Risikoanalyse", "Maßnahmen- und Einsatzplanung", "Regelmäßige Konzeptüberprüfung"],
  },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="leistungen" className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Unsere Sicherheitsdienstleistungen
          </h2>
          <p className="mt-3 text-muted-fg max-w-2xl mx-auto">
            Jede Leistung wird auf Objekt, Einsatzlage und Kundenanforderung abgestimmt – keine Standardpakete.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, context, desc, points }) => (
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
              <p className="mt-1 text-xs font-medium text-primary">{context}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-fg">{desc}</p>
              <ul className="mt-4 space-y-1.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-fg">
                    <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:underline">
                Anfrage stellen <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { Search, UserCheck, Radio, ClipboardCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phases = [
  {
    icon: Search,
    step: "01",
    title: "Analyse vor Einsatz",
    desc: "Jeder Auftrag beginnt mit einer Bestandsaufnahme: Objekt, Risikoprofil, betriebliche Abläufe, Kundenerwartung. Kein Einsatz ohne fundierte Grundlage.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Auswahl & Briefing Personal",
    desc: "Wir setzen gezielt Personal ein, das zum Einsatz passt – nach Qualifikation, Erfahrung und Auftreten. Jede Einsatzkraft wird vorab eingewiesen.",
  },
  {
    icon: Radio,
    step: "03",
    title: "Führung im Einsatz",
    desc: "Feste Einsatzleitung, direkte Kommunikationswege und definierte Eskalationsstufen. Kein Einsatz ohne klare Verantwortung vor Ort.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Dokumentation & Reporting",
    desc: "Lückenlose Einsatzdokumentation, regelmäßige Berichte und Nachsteuerung bei Abweichungen. Volle Transparenz für den Auftraggeber.",
  },
];

const WhyUsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            So arbeiten wir – unser Betriebsmodell
          </h2>
          <p className="mt-3 text-muted-fg max-w-2xl mx-auto">
            Sicherheit ist kein Produkt, sondern ein Prozess. Vier Phasen, die jeden Einsatz tragen.
          </p>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="relative p-6 lg:p-8">
              {/* Connector line */}
              {i < phases.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 w-px h-8 bg-primary/20" style={{ right: 0, top: "2.5rem", height: "calc(100% - 5rem)" }}>
                  <div className="absolute top-1/2 -right-3 w-6 h-px bg-primary/30" />
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary tracking-wider">{step}</span>
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h3>
              <p className="text-sm leading-relaxed text-muted-fg">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
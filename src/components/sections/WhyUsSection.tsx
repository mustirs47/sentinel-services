import { Link } from "react-router-dom";
import { Search, UserCheck, Radio, ClipboardCheck, ArrowRight } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phases = [
  {
    icon: Search,
    step: "01",
    title: "Analyse vor Einsatz",
    desc: "Bestandsaufnahme von Objekt, Risikoprofil und Kundenerwartung.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Personal & Briefing",
    desc: "Gezielte Personalauswahl nach Qualifikation und objektspezifische Einweisung.",
  },
  {
    icon: Radio,
    step: "03",
    title: "Führung im Einsatz",
    desc: "Feste Einsatzleitung, direkte Kommunikation und definierte Eskalationsstufen.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Dokumentation",
    desc: "Lückenlose Protokolle, Berichte und Nachsteuerung. Volle Transparenz.",
  },
];

const WhyUsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="bg-background">
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">4 Phasen</span>
          <h2 className="h-section text-foreground">So arbeiten wir</h2>
          <p className="section-intro">
            Sicherheit ist kein Produkt, sondern ein Prozess – vier Phasen, die jeden Einsatz tragen.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />

          {phases.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="relative flex flex-col items-center text-center p-6 lg:p-8">
              <div className="icon-tile-lg relative z-10 mb-5 border-2 border-primary/30 !bg-background">
                <Icon />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {step}
                </span>
              </div>
              <h3 className="h-card text-foreground mb-2">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/arbeitsweise" className="link-arrow">
            Mehr über unsere Arbeitsweise <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

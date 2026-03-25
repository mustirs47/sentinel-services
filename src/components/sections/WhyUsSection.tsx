import { Users, Target, MessageCircle, Sliders, ClipboardCheck, BadgeCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: Users, title: "Qualifiziertes Personal", desc: "Geschulte Fachkräfte mit nachgewiesener Eignung und regelmäßiger Fortbildung." },
  { icon: Target, title: "Klare Einsatzführung", desc: "Strukturierte Abläufe von der Planung bis zur Durchführung." },
  { icon: MessageCircle, title: "Direkte Kommunikation", desc: "Feste Ansprechpartner, kurze Wege, schnelle Abstimmung." },
  { icon: Sliders, title: "Anpassung an Objekt und Risiko", desc: "Keine Standardlösungen – jedes Konzept wird individuell erarbeitet." },
  { icon: ClipboardCheck, title: "Dokumentierte Abläufe", desc: "Lückenlose Einsatzdokumentation für volle Transparenz." },
  { icon: BadgeCheck, title: "Seriöses Auftreten", desc: "Professionelle Präsenz, die Vertrauen schafft – beim Kunden und Besucher." },
];

const WhyUsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Warum Sentinel Services
          </h2>
          <p className="mt-3 text-muted-fg max-w-2xl mx-auto">
            Sicherheit ist kein Standardschema – sondern saubere Vorbereitung und verlässliche Ausführung.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-xl p-5 transition-colors" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h3>
                <p className="mt-1 text-sm text-muted-fg">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

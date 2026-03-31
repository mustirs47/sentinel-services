import { Shield, HardHat, PartyPopper, DoorOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scenarios = [
  {
    icon: HardHat,
    title: "Baustellensicherung – Nachtbewachung",
    situation: "Großbaustelle mit hochwertigem Material, offener Zugang nach Baustellenschluss.",
    einsatz: "Feste Nachtwache, dokumentierte Kontrollgänge alle 90 Min., Sofortmeldung bei Unregelmäßigkeiten.",
  },
  {
    icon: PartyPopper,
    title: "Firmenevent – 500 Gäste, VIP-Bereich",
    situation: "Sommerfest mit offener Gästeliste und separatem VIP-Bereich.",
    einsatz: "Einlasssteuerung, diskrete VIP-Präsenz, Funk-Koordination, Deeskalationsbereitschaft.",
  },
  {
    icon: DoorOpen,
    title: "Empfangsservice – Bürokomplex",
    situation: "Mehrmieterobjekt mit täglichem Besucheraufkommen, keine einheitliche Zugangskontrolle.",
    einsatz: "Feste Empfangskraft mit Registrierung, Schlüsselverwaltung und professionellem Auftreten.",
  },
];

const ReferencesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="bg-background">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Praxis</p>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Typische Einsatzbilder
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
            Drei realistische Szenarien, für die wir aufgestellt sind.
          </p>
        </div>

        <div className="stagger-children grid gap-6 sm:grid-cols-3">
          {scenarios.map(({ icon: Icon, title, situation, einsatz }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg overflow-hidden"
            >
              {/* Left accent stripe */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-primary to-accent" />

              <div className="pl-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Ausgangslage</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{situation}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Unser Einsatz</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{einsatz}</p>
                  </div>
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

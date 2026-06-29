import { Shield, HardHat, PartyPopper, DoorOpen } from "@/lib/icons";
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
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">Praxis</span>
          <h2 className="h-section text-foreground">Typische Einsatzbilder</h2>
          <p className="section-intro">Drei realistische Szenarien, für die wir aufgestellt sind.</p>
        </div>

        <div className="stagger-children grid gap-6 sm:grid-cols-3">
          {scenarios.map(({ icon: Icon, title, situation, einsatz }) => (
            <div key={title} className="surface-card surface-card--hover group overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-primary to-accent" />

              <div className="pl-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="icon-tile-sm"><Icon /></span>
                  <h3 className="h-card text-foreground">{title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="eyebrow !mb-1 !text-[12px]">Ausgangslage</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{situation}</p>
                  </div>
                  <div>
                    <p className="eyebrow !mb-1 !text-[12px]">Unser Einsatz</p>
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

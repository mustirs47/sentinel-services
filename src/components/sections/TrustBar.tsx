import { Building2, Users, FileCheck, MapPin } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Building2, value: "4 Bereiche", label: "Reinigung · FM · Grün · Sicherheit" },
  { icon: Users, value: "Feste Teams", label: "Persönliche Ansprechpartner" },
  { icon: FileCheck, value: "100 %", label: "Dokumentierte Leistung" },
  { icon: MapPin, value: "Bundesweit", label: "Auf Anfrage einsatzbereit" },
];

const TrustBar = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light border-y" style={{ borderColor: "hsl(var(--section-light-border))" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:py-14 xl:py-16">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8 xl:gap-10">
          {items.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="icon-tile-sm"><Icon /></span>
              <div>
                <p className="text-sm lg:text-base font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>{value}</p>
                <p className="text-xs lg:text-sm text-muted-fg">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
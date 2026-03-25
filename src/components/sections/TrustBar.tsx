import { Award, GraduationCap, FileCheck, UserCheck, EyeOff, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Award, label: "Zulassungen", desc: "Behördlich geprüft und zugelassen" },
  { icon: GraduationCap, label: "Ausbildungen", desc: "Fachlich geschultes Personal" },
  { icon: FileCheck, label: "Einsatzdokumentation", desc: "Lückenlose Nachverfolgung" },
  { icon: UserCheck, label: "Feste Ansprechpartner", desc: "Direkte Kommunikation" },
  { icon: EyeOff, label: "Diskretes Auftreten", desc: "Professionell und unauffällig" },
  { icon: Zap, label: "Schnelle Reaktionswege", desc: "Kurzfristige Einsatzbereitschaft" },
];

const TrustBar = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light border-y" style={{ borderColor: "hsl(var(--section-light-border))" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-fg mb-10">
          Vertrauen durch Qualifikation, Erfahrung und klare Prozesse
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {items.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center text-center px-2 py-4">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{label}</p>
              <p className="mt-1 text-xs text-muted-fg">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

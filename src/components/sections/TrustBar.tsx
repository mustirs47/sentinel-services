import { Award, GraduationCap, FileCheck, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Award, value: "§34a GewO", label: "Gewerberechtliche Zulassung" },
  { icon: GraduationCap, value: "Sachkundeprüfung", label: "Geprüftes Fachpersonal" },
  { icon: FileCheck, value: "100 %", label: "Einsatzdokumentation" },
  { icon: Zap, value: "< 24 h", label: "Rückmeldung auf Anfragen" },
];

const TrustBar = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-light border-y" style={{ borderColor: "hsl(var(--section-light-border))" }}>
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>{value}</p>
                <p className="text-xs text-muted-fg">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
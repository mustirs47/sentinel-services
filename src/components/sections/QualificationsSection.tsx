import { CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const qualifications = [
  "Relevante behördliche Zulassungen",
  "Fachausbildungen nach §34a GewO",
  "Branchenspezifische Schulungen",
  "Zusatzqualifikationen (Erste Hilfe, Brandschutz)",
  "Dokumentierte Standards und Prozesse",
];

const QualificationsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="qualifikationen" className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Qualifikationen & Nachweise
          </h2>
          <p className="mt-3 text-muted-fg max-w-2xl mx-auto">
            Fachliche Nachweise, die Vertrauen schaffen – keine Marketingversprechen.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Left – list */}
          <div className="rounded-xl p-6 sm:p-8" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}>
            <h3 className="text-sm font-semibold mb-5" style={{ color: "hsl(var(--section-light-fg))" }}>
              Unsere Nachweise im Überblick
            </h3>
            <ul className="space-y-3">
              {qualifications.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm" style={{ color: "hsl(var(--section-light-fg))" }}>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – explanation + downloads */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
              Was das für Sie bedeutet
            </h3>
            <p className="text-sm leading-relaxed text-muted-fg mb-6">
              Jede Qualifikation und jeder Nachweis steht für ein konkretes Leistungsversprechen.
              Unsere Mitarbeiter werden regelmäßig geschult, geprüft und auf aktuelle Standards
              gebracht. Sie erhalten auf Anfrage Einsicht in relevante Unterlagen.
            </p>

            <div className="rounded-xl p-5" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}>
              <h4 className="text-sm font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>
                Downloads
              </h4>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2 text-sm" disabled>
                  <Download className="h-4 w-4" />
                  Unternehmensprofil (PDF) – in Kürze verfügbar
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2 text-sm" disabled>
                  <Download className="h-4 w-4" />
                  Leistungsübersicht (PDF) – in Kürze verfügbar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;

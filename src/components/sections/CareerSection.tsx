import { ArrowRight, CheckCircle } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const requirements = [
  "Mindestalter 18 Jahre",
  "Sachkundeprüfung nach §34a GewO (oder Bereitschaft zur Absolvierung)",
  "Einwandfreies Führungszeugnis",
  "Gute Deutschkenntnisse in Wort und Schrift",
  "Zuverlässigkeit, Pünktlichkeit, professionelles Auftreten",
];

const benefits = [
  "Einsätze in verschiedenen Bereichen: Objekt, Event, Empfang, Revier",
  "Feste Ansprechpartner und strukturierte Einarbeitung",
  "Regelmäßige Weiterbildung: Deeskalation, Brandschutz, Erste Hilfe",
  "Langfristige Einsatzplanung statt kurzfristiger Abrufarbeit",
];

const CareerSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="karriere" className="bg-background border-y border-border/50">
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">Karriere</span>
          <h2 className="h-section text-foreground">Arbeiten bei Sentinel Services</h2>
          <p className="section-intro">
            Wir suchen Menschen, die Verantwortung übernehmen – nicht nur einen Job suchen.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="surface-card">
            <h3 className="h-card text-foreground mb-4">Was wir erwarten</h3>
            <ul className="space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card">
            <h3 className="h-card text-foreground mb-4">Was wir bieten</h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="surface-card mt-10">
          <h3 className="h-card text-foreground mb-3">So bewerben Sie sich</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Senden Sie Ihre Bewerbung per E-Mail an{" "}
            <a href="mailto:karriere@sentinel-services.de" className="text-primary hover:underline font-medium">
              karriere@sentinel-services.de
            </a>{" "}
            – mit kurzem Lebenslauf, Angabe Ihrer Qualifikationen und gewünschtem Einsatzbereich.
            Auch Initiativbewerbungen sind willkommen.
          </p>
          <Button asChild size="lg">
            <a href="mailto:karriere@sentinel-services.de">
              Jetzt bewerben
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
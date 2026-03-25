import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustFacts = [
  "Qualifiziertes Team",
  "Branchenrelevante Zulassungen",
  "Klare Einsatzkommunikation",
  "Maßgeschneiderte Sicherheitskonzepte",
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background">
    {/* Subtle gradient overlay */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 20%, hsl(205 90% 55% / 0.08), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, hsl(205 90% 55% / 0.04), transparent 60%)",
      }}
    />

    <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-primary" strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
              Sentinel Services
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.15 }}>
            Sicherheitsdienstleistungen mit Struktur, Verlässlichkeit und{" "}
            <span className="text-primary">qualifiziertem Personal</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-xl">
            Sentinel Services schützt Objekte, Veranstaltungen und betriebliche Abläufe
            mit geschultem Personal, klaren Prozessen und festen Ansprechpartnern.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#kontakt">
                Jetzt Anfrage senden
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#leistungen">Leistungen ansehen</a>
            </Button>
          </div>
        </div>

        {/* Trust Facts */}
        <div className="rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-8 backdrop-blur-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5">
            Darauf können Sie sich verlassen
          </h3>
          <ul className="space-y-4">
            {trustFacts.map((fact) => (
              <li key={fact} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

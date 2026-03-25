import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const trustFacts = [
  "Qualifiziertes Team",
  "Branchenrelevante Zulassungen",
  "Klare Einsatzkommunikation",
  "Maßgeschneiderte Sicherheitskonzepte",
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, hsl(220 20% 10% / 0.95) 40%, hsl(220 20% 10% / 0.6) 100%)",
        }}
      />
    </div>

    <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
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

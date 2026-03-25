import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  "Zuverlässigkeit",
  "Professionelles Auftreten",
  "Teamfähigkeit",
  "Verantwortungsbewusstsein",
];

const CareerSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="karriere" className="bg-background border-y border-border/50">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">Karriere</span>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Arbeiten bei Sentinel Services
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Wir suchen Menschen, die Verantwortung übernehmen wollen – nicht nur einen Job.
              Bei Sentinel Services arbeiten Sie in einem Team, das auf Verlässlichkeit, klare
              Kommunikation und professionelles Auftreten setzt.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <a href="mailto:karriere@sentinel-services.de">
                  Jetzt bewerben
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-foreground mb-4">Worauf wir Wert legen</h3>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;

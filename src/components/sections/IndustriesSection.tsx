import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { industries } from "@/data/industries";

const IndustriesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="branchen" className="bg-background">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Branchen, die wir absichern
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Jede Branche hat eigene Risiken, Abläufe und Erwartungen. Wir kennen die operativen Besonderheiten.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title, detail }) => (
            <div
              key={title}
              className="rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:border-primary/30"
            >
              <Icon className="h-5 w-5 text-primary mb-2" />
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/branchen"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Alle Branchen & Lösungen <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

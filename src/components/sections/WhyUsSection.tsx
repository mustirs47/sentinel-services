import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, FileText, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Target,
    title: "Analyse & Bedarfsermittlung",
    description: "Wir erfassen Ihre spezifischen Sicherheitsanforderungen und analysieren potenzielle Risikofelder vor Ort."
  },
  {
    icon: Users,
    title: "Personal-Briefing",
    description: "Auswahl und gezielte Einweisung unseres Sicherheitspersonals auf Ihre individuellen Gegebenheiten."
  },
  {
    icon: ShieldCheck,
    title: "Operative Einsatzführung",
    description: "Professionelle Umsetzung der Sicherheitsmaßnahmen durch geschultes Personal unter ständiger Aufsicht."
  },
  {
    icon: FileText,
    title: "Dokumentation & Reporting",
    description: "Transparente Protokollierung aller Vorkommnisse und regelmäßige Berichterstattung an Sie."
  }
];

const WhyUsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 bg-secondary/30">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Unser Betriebsmodell</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Sicherheit ist kein Zufall, sondern das Ergebnis strukturierter Prozesse. So garantieren wir Ihnen zuverlässigen Schutz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 bg-background rounded-xl border border-border/50 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/arbeitsweise" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Mehr über unsere Arbeitsweise erfahren <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

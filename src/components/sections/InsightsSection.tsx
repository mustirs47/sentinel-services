import { FileText, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const articles = [
  {
    title: "Checkliste: Veranstaltungssicherheit",
    desc: "Was Veranstalter bei der Sicherheitsplanung beachten sollten – von der Risikoanalyse bis zum Einsatzplan.",
    tag: "Checkliste",
  },
  {
    title: "Worauf Unternehmen bei Objektschutz achten sollten",
    desc: "Die häufigsten Fehler bei der Absicherung von Gewerbeimmobilien – und wie man sie vermeidet.",
    tag: "Fachartikel",
  },
  {
    title: "Typische Schwachstellen bei Baustellen",
    desc: "Warum Baustellen besonders anfällig für Diebstahl sind und welche Maßnahmen wirklich helfen.",
    tag: "Praxistipp",
  },
  {
    title: "Sicherheitskonzepte sauber vorbereiten",
    desc: "Wie ein professionelles Sicherheitskonzept aufgebaut ist und warum Standardlösungen selten funktionieren.",
    tag: "Fachartikel",
  },
];

const InsightsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="bg-background">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Fachbeiträge & Insights
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Wissen teilen, Kompetenz zeigen – praxisnahe Beiträge aus dem Sicherheitsalltag.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map(({ title, desc, tag }) => (
            <div key={title} className="rounded-xl border border-border/60 bg-card/50 p-5 flex flex-col group hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{tag}</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground flex-1">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
                Weiterlesen <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

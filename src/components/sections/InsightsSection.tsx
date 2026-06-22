import { FileText, ArrowRight } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const articles = [
  {
    title: "Reinigungspläne, die wirklich gelebt werden",
    desc: "Wie ein belastbares Leistungsverzeichnis für Unterhaltsreinigung aufgebaut sein muss – mit Frequenzen, Kontrollen und Nachweisen.",
    tag: "Fachartikel",
  },
  {
    title: "Facility Management bündeln statt verteilen",
    desc: "Warum ein Ansprechpartner für Reinigung, Pflege und Sicherheit Schnittstellen reduziert und Kosten transparenter macht.",
    tag: "Praxistipp",
  },
  {
    title: "Grünpflege im Pflegekalender",
    desc: "Wie sich Außenanlagen ganzjährig planen lassen – von Rasenmahd und Heckenschnitt bis Laubentfernung und Winterdienst.",
    tag: "Checkliste",
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
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">Wissen</span>
          <h2 className="h-section text-foreground">Fachbeiträge & Insights</h2>
          <p className="section-intro">
            Wissen teilen, Kompetenz zeigen – praxisnahe Beiträge aus Reinigung, Facility Management, Grünpflege und Sicherheit.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map(({ title, desc, tag }) => (
            <div key={title} className="surface-card surface-card--hover flex flex-col group">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-4 w-4 text-primary" />
                <span className="eyebrow !mb-0 !text-[10px]">{tag}</span>
              </div>
              <h3 className="h-card text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{desc}</p>
              <span className="link-arrow mt-4">
                Weiterlesen <ArrowRight />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

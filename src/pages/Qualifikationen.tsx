import { Link } from "react-router-dom";
import { Scale, GraduationCap, HeartPulse, Settings, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const groups = [
  {
    icon: Scale,
    title: "Gewerberechtliche Grundlage",
    items: ["Gewerbeerlaubnis nach §34a GewO", "Sachkundeprüfung nach §34a GewO (IHK)", "Unterrichtungsverfahren nach §34a GewO"],
    relevance: "Gesetzliche Voraussetzung für gewerbliche Sicherheitstätigkeit.",
    count: 3,
  },
  {
    icon: GraduationCap,
    title: "Fachliche Qualifikation",
    items: ["Geprüfte Schutz- und Sicherheitskräfte", "Schulung in Rechtsgrundlagen und Eingriffsrecht", "Regelmäßige Auffrischungslehrgänge"],
    relevance: "Rechtssicheres Handeln und korrekte Reaktion in kritischen Situationen.",
    count: 3,
  },
  {
    icon: HeartPulse,
    title: "Zusatzqualifikationen",
    items: ["Erste-Hilfe-Ausbildung (regelmäßig aufgefrischt)", "Brandschutzhelfer-Ausbildung", "Deeskalationstraining"],
    relevance: "Schnelles Handeln bei Notfällen, reduziertes Eskalationsrisiko.",
    count: 3,
  },
  {
    icon: Settings,
    title: "Betriebliche Standards",
    items: ["Lückenlose Einsatzdokumentation", "Standardisierte Übergabe- und Meldeprotokolle", "Interne Qualitätskontrollen und Audits"],
    relevance: "Transparenz und Nachvollziehbarkeit jedes Einsatzes.",
    count: 3,
  },
];

const qualFaqs = [
  { question: "Sind alle Mitarbeiter §34a-geprüft?", answer: "Ja, alle unsere Einsatzkräfte verfügen über die Sachkundeprüfung nach §34a GewO (IHK)." },
  { question: "Wie stellen Sie die Qualität sicher?", answer: "Durch regelmäßige interne Audits, Auffrischungsschulungen und standardisierte Einsatzdokumentation." },
  { question: "Welche Zusatzausbildungen hat Ihr Personal?", answer: "Erste-Hilfe, Brandschutzhelfer und Deeskalationstraining – regelmäßig aufgefrischt." },
];

const QualifikationenPage = () => {
  const ref = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Qualifikationen & Nachweise | Sentinel Services"
        description="Alle Qualifikationen und Nachweise von Sentinel Services: §34a GewO, Sachkundeprüfung, Erste Hilfe, Brandschutz, Deeskalation. Geprüftes Sicherheitspersonal."
      />

      <PageHero
        badge="Qualifikationen"
        title="Qualifikationen & Nachweise"
        subtitle="Auf welcher fachlichen Grundlage wir arbeiten – und warum das für Sie als Auftraggeber relevant ist."
      />

      {/* Summary stats */}
      <section className="section-light border-b" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="stat-number">4</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Qualifikationsgruppen</p>
            </div>
            <div>
              <p className="stat-number">12+</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Einzelnachweise</p>
            </div>
            <div>
              <p className="stat-number">100%</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>§34a-geprüft</p>
            </div>
            <div>
              <p className="stat-number">∞</p>
              <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>Regelmäßige Schulungen</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="stagger-children grid gap-6 sm:grid-cols-2">
            {groups.map(({ icon: Icon, title, items, relevance, count }) => (
              <div
                key={title}
                className="card-accent rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg"
                style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-base font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {count}
                  </span>
                </div>
                <ul className="space-y-2.5 mb-5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "hsl(var(--section-light-fg))" }}>
                      <Award className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg p-3" style={{ background: "hsl(205 90% 55% / 0.05)" }}>
                  <p className="text-xs leading-relaxed text-muted-fg">
                    <span className="font-bold text-primary">Relevanz:</span> {relevance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            Überzeugt von unserer Qualifikation?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Lassen Sie sich unverbindlich beraten – wir zeigen Ihnen, wie wir Ihre Sicherheitsanforderungen professionell umsetzen.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Jetzt beraten lassen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/arbeitsweise">Unsere Arbeitsweise</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection faqs={qualFaqs} title="Häufige Fragen zu Qualifikationen" />
    </PageLayout>
  );
};

export default QualifikationenPage;

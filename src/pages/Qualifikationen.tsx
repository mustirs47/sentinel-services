import { Link } from "react-router-dom";
import { Scale, GraduationCap, HeartPulse, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";

const groups = [
  {
    icon: Scale,
    title: "Gewerberechtliche Grundlage",
    items: ["Gewerbeerlaubnis nach §34a GewO", "Sachkundeprüfung nach §34a GewO (IHK)", "Unterrichtungsverfahren nach §34a GewO"],
    relevance: "Gesetzliche Voraussetzung für gewerbliche Sicherheitstätigkeit. Stellt sicher, dass unser Personal fachlich und rechtlich geprüft ist.",
  },
  {
    icon: GraduationCap,
    title: "Fachliche Qualifikation",
    items: ["Geprüfte Schutz- und Sicherheitskräfte", "Schulung in Rechtsgrundlagen und Eingriffsrecht", "Regelmäßige Auffrischungslehrgänge"],
    relevance: "Gewährleistet, dass Einsatzkräfte rechtssicher handeln und in kritischen Situationen korrekt reagieren.",
  },
  {
    icon: HeartPulse,
    title: "Zusatzqualifikationen",
    items: ["Erste-Hilfe-Ausbildung (regelmäßig aufgefrischt)", "Brandschutzhelfer-Ausbildung", "Deeskalationstraining"],
    relevance: "Ermöglicht schnelles Handeln bei Notfällen und reduziert Eskalationsrisiken im Einsatz.",
  },
  {
    icon: Settings,
    title: "Betriebliche Standards",
    items: ["Lückenlose Einsatzdokumentation", "Standardisierte Übergabe- und Meldeprotokolle", "Interne Qualitätskontrollen und Audits"],
    relevance: "Transparenz für den Auftraggeber. Jeder Einsatz ist nachvollziehbar, überprüfbar und auswertbar.",
  },
];

const QualifikationenPage = () => (
  <PageLayout>
    <SEOHead
      title="Qualifikationen & Nachweise | Sentinel Services"
      description="Alle Qualifikationen und Nachweise von Sentinel Services: §34a GewO, Sachkundeprüfung, Erste Hilfe, Brandschutz, Deeskalation. Geprüftes Sicherheitspersonal."
    />

    <section className="section-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Qualifikationen & Nachweise
          </h1>
          <p className="mt-4 text-muted-fg max-w-2xl mx-auto">
            Konkrete Nachweisgruppen, die zeigen, auf welcher fachlichen Grundlage wir arbeiten – und warum das für Sie als Auftraggeber relevant ist.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map(({ icon: Icon, title, items, relevance }) => (
            <div
              key={title}
              className="rounded-xl p-6 sm:p-8"
              style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-base font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
              </div>
              <ul className="space-y-2 mb-4">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "hsl(var(--section-light-fg))" }}>
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg p-3" style={{ background: "hsl(205 90% 55% / 0.05)" }}>
                <p className="text-xs leading-relaxed text-muted-fg">
                  <span className="font-semibold text-primary">Relevanz für Kunden:</span> {relevance}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/kontakt">
              Jetzt beraten lassen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default QualifikationenPage;

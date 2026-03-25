import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { FAQPageJsonLd } from "@/components/StructuredData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services } from "@/data/services";

const defaultFaqs = [
  { question: "Welche Zulassungen hat Sentinel Services?", answer: "Wir verfügen über die Gewerbeerlaubnis nach §34a GewO. Alle Einsatzkräfte haben die Sachkundeprüfung nach §34a GewO (IHK) abgelegt." },
  { question: "Wie schnell können Sie auf eine Anfrage reagieren?", answer: "Wir melden uns innerhalb von 24 Stunden auf Ihre Anfrage. Bei kurzfristigem Einsatzbedarf können wir häufig innerhalb von 24–48 Stunden einsatzbereit sein." },
  { question: "In welchem Gebiet sind Sie tätig?", answer: "Wir sind bundesweit einsatzbereit. Kontaktieren Sie uns für eine unverbindliche Bedarfsanalyse." },
];

const LeistungenPage = () => {
  const ref = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Sicherheitsdienstleistungen | Sentinel Services"
        description="Professionelle Sicherheitsdienstleistungen: Objektschutz, Veranstaltungsschutz, Baustellenbewachung, Empfangsdienste, Streifendienste & individuelle Konzepte."
      />
      <FAQPageJsonLd faqs={defaultFaqs} />

      <PageHero
        badge="Leistungen"
        title="Unsere Sicherheitsdienstleistungen"
        subtitle="Jede Leistung wird auf Objekt, Einsatzlage und Kundenanforderung abgestimmt – keine Standardpakete, sondern maßgeschneiderte Sicherheitslösungen."
      />

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, icon: Icon, title, context, desc, points }) => (
              <div
                key={slug}
                className="group rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 flex flex-col"
                style={{
                  background: "hsl(var(--section-light-card))",
                  borderColor: "hsl(var(--section-light-border))",
                }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                <p className="mt-1 text-xs font-medium text-primary">{context}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-fg">{desc}</p>
                <ul className="mt-4 space-y-1.5 flex-1">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-muted-fg">
                      <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/leistungen/${slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:underline"
                >
                  Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            Individuelle Sicherheitslösung gesucht?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Beschreiben Sie Ihren Bedarf – wir erstellen ein maßgeschneidertes Konzept mit transparenter Kostenübersicht.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Kostenlose Erstberatung
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+4920893579970">Sofort anrufen</a>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection light />
    </PageLayout>
  );
};

export default LeistungenPage;

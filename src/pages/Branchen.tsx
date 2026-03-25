import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

const BranchenPage = () => {
  const ref = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Branchen | Sentinel Services – Sicherheit für Ihre Branche"
        description="Sicherheitsdienstleistungen für Gewerbe, Industrie, Baustellen, Einzelhandel, Veranstaltungen, Hotels, Wohnanlagen und öffentliche Einrichtungen."
      />

      <PageHero
        badge="Branchen"
        title="Branchen, die wir absichern"
        subtitle="Jede Branche hat eigene Risiken, Abläufe und Erwartungen. Wir kennen die operativen Besonderheiten und passen unsere Sicherheitslösungen gezielt an."
      />

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-2">
            {industries.map(({ icon: Icon, title, detail, relatedServices, slug }) => (
              <div
                key={slug}
                className="rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "hsl(var(--section-light-card))",
                  border: "1px solid hsl(var(--section-light-border))",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-base font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-fg mb-4">{detail}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Relevante Leistungen</p>
                  <div className="flex flex-wrap gap-2">
                    {relatedServices.map((rs) => {
                      const svc = services.find((s) => s.slug === rs);
                      if (!svc) return null;
                      return (
                        <Link
                          key={rs}
                          to={`/leistungen/${rs}`}
                          className="rounded-md px-2.5 py-1 text-xs font-medium transition-colors hover:text-primary"
                          style={{
                            border: "1px solid hsl(var(--section-light-border))",
                            color: "hsl(var(--section-light-fg))",
                          }}
                        >
                          {svc.title}
                        </Link>
                      );
                    })}
                  </div>
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
            Branchenlösung für Ihr Unternehmen
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Wir analysieren die spezifischen Sicherheitsanforderungen Ihrer Branche und entwickeln eine passgenaue Lösung.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Jetzt Branchenlösung anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/leistungen">Alle Leistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BranchenPage;

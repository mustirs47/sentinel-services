import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

const BranchenPage = () => (
  <PageLayout>
    <SEOHead
      title="Branchen | Sentinel Services – Sicherheit für Ihre Branche"
      description="Sicherheitsdienstleistungen für Gewerbe, Industrie, Baustellen, Einzelhandel, Veranstaltungen, Hotels, Wohnanlagen und öffentliche Einrichtungen."
    />

    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Branchen, die wir absichern
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Jede Branche hat eigene Risiken, Abläufe und Erwartungen. Wir kennen die operativen Besonderheiten.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {industries.map(({ icon: Icon, title, detail, relatedServices, slug }) => (
            <div
              key={slug}
              className="rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-base font-semibold text-foreground">{title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">{detail}</p>
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
                        className="rounded-md border border-border/60 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
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

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/kontakt">
              Jetzt Branchenlösung anfragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default BranchenPage;

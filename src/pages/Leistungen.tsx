import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
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

const trustPoints = [
  { icon: Shield, text: "§34a GewO – geprüftes Personal" },
  { icon: Clock, text: "Rückmeldung innerhalb von 24 h" },
  { icon: CheckCircle, text: "Individuelle Konzepte statt Standardpakete" },
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
        subtitle="Jede Leistung wird auf Objekt, Einsatzlage und Kundenanforderung abgestimmt – maßgeschneiderte Sicherheitslösungen."
      />

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, icon: Icon, title, context, desc }) => (
              <Link
                key={slug}
                to={`/leistungen/${slug}`}
                className="card-accent group rounded-xl border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
                style={{
                  background: "hsl(var(--section-light-card))",
                  borderColor: "hsl(var(--section-light-border))",
                }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-lg font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                <p className="mt-1 text-xs font-semibold text-primary">{context}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-fg flex-1">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {/* Trust points row */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {trustPoints.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-xl p-4"
                style={{ background: "hsl(205 90% 55% / 0.05)" }}
              >
                <Icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium" style={{ color: "hsl(var(--section-light-fg))" }}>{text}</span>
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

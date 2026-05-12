import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, Users, FileCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { FAQPageJsonLd } from "@/components/StructuredData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services } from "@/data/services";
import { serviceIllustrations } from "@/data/serviceIllustrations";
import heroIllustration from "@/assets/illustrations/hero-security.webp";

const defaultFaqs = [
  { question: "Welche Zulassungen hat Sentinel Services?", answer: "Wir verfügen über die Gewerbeerlaubnis nach §34a GewO. Alle Einsatzkräfte haben die Sachkundeprüfung nach §34a GewO (IHK) abgelegt." },
  { question: "Wie schnell können Sie auf eine Anfrage reagieren?", answer: "Wir melden uns schnellstmöglich auf Ihre Anfrage. Bei kurzfristigem Einsatzbedarf können wir häufig zügig einsatzbereit sein." },
  { question: "In welchem Gebiet sind Sie tätig?", answer: "Wir sind bundesweit einsatzbereit. Kontaktieren Sie uns für eine unverbindliche Bedarfsanalyse." },
  { question: "Kann ich mehrere Leistungen kombinieren?", answer: "Ja, die meisten unserer Kunden nutzen eine Kombination aus mehreren Leistungsbausteinen. Wir erstellen ein individuelles Paket, das genau auf Ihre Anforderungen zugeschnitten ist." },
  { question: "Was kostet eine Sicherheitsdienstleistung?", answer: "Die Kosten hängen von Umfang, Einsatzzeiten und Anforderungen ab. Wir erstellen Ihnen ein transparentes Angebot nach einer kostenlosen Erstberatung – ohne versteckte Kosten." },
];

const trustPoints = [
  { icon: Shield, text: "§34a GewO – geprüftes Personal" },
  { icon: CheckCircle, text: "Individuelle Konzepte statt Standardpakete" },
  { icon: FileCheck, text: "Lückenlose Einsatzdokumentation" },
];

const stats = [
  { value: "6", label: "Leistungsbereiche" },
  { value: "100%", label: "§34a-geprüft" },
  { value: "DE", label: "Bundesweit einsetzbar" },
  { value: "∞", label: "Individuelle Lösungen" },
];

const approach = [
  { icon: Zap, title: "Bedarfsanalyse", desc: "Wir erfassen Ihre Anforderungen, Risiken und Rahmenbedingungen." },
  { icon: Users, title: "Personalauswahl", desc: "Gezielte Auswahl nach Qualifikation, Erfahrung und Einsatzpassung." },
  { icon: FileCheck, title: "Einsatz & Reporting", desc: "Strukturierter Einsatz mit lückenloser Dokumentation." },
];

const LeistungenPage = () => {
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();

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
        illustration={heroIllustration}
      />

      {/* Stats bar */}
      <section className="section-light border-b" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="stat-number">{value}</p>
                <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--section-light-fg))" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro text */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
              Sicherheit, die zu Ihrem Bedarf passt
            </h2>
            <p className="text-base leading-relaxed text-muted-fg">
              Wir bieten keine Standardpakete – jede Sicherheitslösung wird individuell auf Ihr Objekt, Ihre Branche und Ihre 
              spezifischen Risiken zugeschnitten. Von der einmaligen Veranstaltungsabsicherung bis zum dauerhaften Objektschutz 
              entwickeln wir ein Konzept, das Ihre Anforderungen exakt abbildet. Alle Einsatzkräfte sind §34a-geprüft, 
              regelmäßig geschult und werden objektspezifisch eingewiesen.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, icon: Icon, title, context, desc, points }) => (
              <Link
                key={slug}
                to={`/leistungen/${slug}`}
                className="card-accent group rounded-xl border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
                style={{
                  background: "hsl(var(--section-light-card))",
                  borderColor: "hsl(var(--section-light-border))",
                }}
              >
              {serviceIllustrations[slug] ? (
                <img
                  src={serviceIllustrations[slug]}
                  alt={title}
                  className="h-28 w-auto object-contain mb-4 -ml-2"
                  loading="lazy"
                  width={112}
                  height={112}
                />
              ) : (
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              )}
                <h2 className="text-lg font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                <p className="mt-1 text-xs font-semibold text-primary">{context}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-fg flex-1">{desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {points.slice(0, 3).map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-muted-fg">
                      <CheckCircle className="h-3 w-3 text-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
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

      {/* How we approach every service */}
      <section className="bg-background border-t border-border/50">
        <div ref={ref2} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Unser Ansatz</p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              So gehen wir jede Leistung an
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Unabhängig von der gewählten Leistung folgen wir einem strukturierten Prozess – für planbare Qualität und messbare Ergebnisse.
            </p>
          </div>
          <div className="stagger-children grid gap-8 sm:grid-cols-3">
            {approach.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="text-center relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-5 relative">
                  <Icon className="h-7 w-7 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/arbeitsweise" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Mehr zu unserer Arbeitsweise <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ref3} className="fade-in-section section-light border-t" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
            Individuelle Sicherheitslösung gesucht?
          </h2>
          <p className="text-muted-fg max-w-xl mx-auto mb-8">
            Beschreiben Sie Ihren Bedarf – wir erstellen ein maßgeschneidertes Konzept mit transparenter Kostenübersicht. 
            Kostenlos und unverbindlich.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Kostenlose Erstberatung
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection faqs={defaultFaqs} title="Häufige Fragen zu unseren Leistungen" />
    </PageLayout>
  );
};

export default LeistungenPage;

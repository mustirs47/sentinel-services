import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, Shield, Users, FileCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { ServiceJsonLd, FAQPageJsonLd } from "@/components/StructuredData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getServiceBySlug, services } from "@/data/services";

const trustItems = [
  { icon: Shield, text: "§34a GewO – geprüftes Personal" },
  { icon: Users, text: "Feste Ansprechpartner" },
  { icon: FileCheck, text: "Lückenlose Dokumentation" },
  { icon: Clock, text: "Rückmeldung innerhalb von 24 h" },
];

const LeistungDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) return <Navigate to="/leistungen" replace />;

  const { icon: Icon, title, h1, metaTitle, metaDescription, longDesc, typicalClients, points, context, faqs } = service;
  const ref = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead title={metaTitle} description={metaDescription} />
      <ServiceJsonLd
        name={title}
        description={metaDescription}
        url={`https://sentinel-services.lovable.app/leistungen/${slug}`}
      />
      <FAQPageJsonLd faqs={faqs} />

      <PageHero
        backLink={{ label: "Alle Leistungen", href: "/leistungen" }}
        title={h1}
        subtitle={context}
      >
        <div className="flex items-center gap-3 mt-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary">{title}</span>
        </div>
      </PageHero>

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          {/* Two-column layout */}
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left: Main content */}
            <div className="lg:col-span-2 space-y-8">
              <p className="text-base leading-relaxed text-muted-fg">
                {longDesc}
              </p>

              <div
                className="card-accent rounded-xl p-6"
                style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
              >
                <h2 className="text-lg font-bold mb-5" style={{ color: "hsl(var(--section-light-fg))" }}>
                  Leistungsumfang
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm" style={{ color: "hsl(var(--section-light-fg))" }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/kontakt">
                    {title} anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+4920893579970">
                    <Phone className="mr-2 h-4 w-4" />
                    Kurzfristigen Einsatz anfragen
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              <div
                className="rounded-xl p-6 sticky top-24"
                style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Auf einen Blick</h3>

                <div className="mb-5">
                  <p className="text-xs font-semibold mb-2" style={{ color: "hsl(var(--section-light-fg))" }}>Typische Auftraggeber</p>
                  <p className="text-sm text-muted-fg leading-relaxed">{typicalClients}</p>
                </div>

                <div className="border-t pt-4 mb-5" style={{ borderColor: "hsl(var(--section-light-border))" }}>
                  <p className="text-xs font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>Vertrauen Sie auf</p>
                  <ul className="space-y-2.5">
                    {trustItems.map(({ icon: TrustIcon, text }) => (
                      <li key={text} className="flex items-center gap-2.5">
                        <TrustIcon className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-fg">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link to="/kontakt">
                    Jetzt anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`Häufige Fragen zu ${title}`} />

      {/* Related services */}
      <section className="section-light border-t" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="text-lg font-bold mb-6" style={{ color: "hsl(var(--section-light-fg))" }}>
            Weitere Leistungen
          </h2>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/leistungen/${s.slug}`}
                  className="group rounded-xl border p-4 text-center transition-all hover:border-primary/30 hover:shadow-md"
                  style={{ borderColor: "hsl(var(--section-light-border))", background: "hsl(var(--section-light-card))" }}
                >
                  <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <span className="text-sm font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{s.title}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LeistungDetail;

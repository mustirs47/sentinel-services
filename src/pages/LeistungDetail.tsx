import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { ServiceJsonLd, FAQPageJsonLd } from "@/components/StructuredData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getServiceBySlug, services } from "@/data/services";

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
        <div ref={ref} className="fade-in-section mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-base leading-relaxed text-muted-fg mb-10 max-w-3xl">
            {longDesc}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 mb-10">
            <div
              className="rounded-xl p-6"
              style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
            >
              <h2 className="text-base font-semibold mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
                Leistungsumfang
              </h2>
              <ul className="space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm" style={{ color: "hsl(var(--section-light-fg))" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
            >
              <h2 className="text-base font-semibold mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
                Typische Auftraggeber
              </h2>
              <p className="text-sm leading-relaxed text-muted-fg">{typicalClients}</p>

              <h2 className="text-base font-semibold mb-3 mt-6" style={{ color: "hsl(var(--section-light-fg))" }}>
                Vertrauen Sie auf
              </h2>
              <ul className="space-y-2 text-sm text-muted-fg">
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary shrink-0" /> §34a GewO – geprüftes Personal</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary shrink-0" /> Feste Ansprechpartner</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary shrink-0" /> Lückenlose Dokumentation</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary shrink-0" /> Rückmeldung innerhalb von 24 h</li>
              </ul>
            </div>
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
      </section>

      <FAQSection faqs={faqs} title={`Häufige Fragen zu ${title}`} />

      {/* Related services */}
      <section className="section-light border-t" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="text-lg font-semibold mb-6" style={{ color: "hsl(var(--section-light-fg))" }}>
            Weitere Leistungen
          </h2>
          <div className="flex flex-wrap gap-3">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/leistungen/${s.slug}`}
                  className="rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/30 hover:text-primary"
                  style={{ borderColor: "hsl(var(--section-light-border))", color: "hsl(var(--section-light-fg))" }}
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LeistungDetail;

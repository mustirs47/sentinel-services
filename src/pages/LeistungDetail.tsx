import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { getServiceBySlug, services } from "@/data/services";

const LeistungDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) return <Navigate to="/leistungen" replace />;

  const { icon: Icon, title, h1, metaTitle, metaDescription, longDesc, typicalClients, points, context, faqs } = service;

  return (
    <PageLayout>
      <SEOHead title={metaTitle} description={metaDescription} />

      <section className="section-light">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-1.5 text-sm text-muted-fg hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Alle Leistungen
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium text-primary">{context}</p>
            </div>
          </div>

          <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl mb-6" style={{ color: "hsl(var(--section-light-fg))" }}>
            {h1}
          </h1>

          <p className="text-base leading-relaxed text-muted-fg mb-8 max-w-3xl">
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
              <a href="tel:+4920893579970">Kurzfristigen Einsatz anfragen</a>
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
              .slice(0, 3)
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

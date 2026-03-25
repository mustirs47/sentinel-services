import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services } from "@/data/services";

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="leistungen" className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Unsere Sicherheitsdienstleistungen
          </h2>
          <p className="mt-3 text-muted-fg max-w-2xl mx-auto">
            Jede Leistung wird auf Objekt, Einsatzlage und Kundenanforderung abgestimmt – keine Standardpakete.
          </p>
        </div>

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
              <h3 className="text-lg font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h3>
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

        <div className="mt-10 text-center">
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Alle Leistungen im Detail <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

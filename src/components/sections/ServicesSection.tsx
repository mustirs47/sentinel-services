import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services } from "@/data/services";

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="leistungen" className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">6 Leistungsbereiche</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Unsere Sicherheitsdienstleistungen
          </h2>
          <p className="mt-4 text-muted-fg max-w-2xl mx-auto text-base">
            Jede Leistung wird auf Objekt, Einsatzlage und Kundenanforderung abgestimmt.
          </p>
        </div>

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
              <h3 className="text-lg font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h3>
              <p className="mt-1 text-xs font-semibold text-primary">{context}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-fg flex-1">{desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Alle Leistungen im Detail <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

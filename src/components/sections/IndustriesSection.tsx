import { Link } from "react-router-dom";
import { ArrowRight } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { industries } from "@/data/industries";

const IndustriesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="branchen" className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">8 Branchen</p>
          <h2 className="text-2xl font-extrabold sm:text-4xl break-words hyphens-auto" style={{ color: "hsl(var(--section-light-fg))" }}>
            Branchen, die wir absichern
          </h2>
        </div>

        <div className="stagger-children grid gap-3 grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title, slug }) => (
            <Link
              key={slug}
              to="/branchen"
              className="group flex items-center gap-3 rounded-xl border p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              style={{
                background: "hsl(var(--section-light-card))",
                borderColor: "hsl(var(--section-light-border))",
              }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/branchen"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Alle Branchen & Lösungen <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

import { Link } from "react-router-dom";
import { ArrowRight } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { divisions } from "@/data/divisions";

const PillarsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="leistungen" className="section-light">
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">Vier Geschäftsbereiche</span>
          <h2 className="h-section">Schutz, Sauberkeit und Werterhalt – aus einer Hand</h2>
          <p className="section-intro">
            Sicherheit, Gebäudereinigung, Grünanlagen und Facility Management.
            Eigenständige Bereiche, ein Ansprechpartner, gemeinsame Standards.
          </p>
        </div>

        <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {divisions.map(({ slug, icon: Icon, title, claim, services }) => (
            <Link
              key={slug}
              to={`/${slug}`}
              className="card-accent surface-card surface-card--hover group flex flex-col"
            >
              <span className="icon-tile mb-5">
                <Icon />
              </span>
              <h3 className="h-card">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg flex-1">{claim}</p>
              <p className="mt-4 text-xs text-muted-fg/80">
                {services.length} Leistungen
              </p>
              <span className="link-arrow mt-4">
                Bereich ansehen <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
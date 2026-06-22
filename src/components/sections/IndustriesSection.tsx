import { Link } from "react-router-dom";
import { ArrowRight } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { industries } from "@/data/industries";

const IndustriesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="branchen" className="section-light">
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">8 Branchen</span>
          <h2 className="h-section">Branchen, die wir absichern</h2>
        </div>

        <div className="stagger-children grid gap-3 grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title, slug }) => (
            <Link
              key={slug}
              to="/branchen"
              className="surface-card surface-card--hover group flex items-center gap-3 !p-4"
            >
              <span className="icon-tile-sm"><Icon /></span>
              <span className="text-sm font-semibold">{title}</span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/branchen" className="link-arrow">
            Alle Branchen & Lösungen <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

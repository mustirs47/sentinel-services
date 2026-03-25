import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backLink?: { label: string; href: string };
  badge?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, backLink, badge, children }: PageHeroProps) => (
  <section className="bg-background border-b border-border/50">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      {backLink && (
        <Link
          to={backLink.href}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {backLink.label}
        </Link>
      )}
      {badge && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
          {badge}
        </span>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.15 }}>
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
        {subtitle}
      </p>
      {children}
    </div>
  </section>
);

export default PageHero;

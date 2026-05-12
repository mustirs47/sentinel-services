import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backLink?: { label: string; href: string };
  badge?: string;
  children?: ReactNode;
  illustration?: string;
}

const PageHero = ({ title, subtitle, backLink, badge, children, illustration }: PageHeroProps) => (
  <section className="bg-background bg-slate-50 text-slate-950 border-b border-border/50">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className={illustration ? "flex flex-col lg:flex-row lg:items-center lg:gap-12" : ""}>
        <div className={illustration ? "flex-1" : ""}>
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
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl break-words hyphens-auto" style={{ lineHeight: 1.15 }}>
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
            {subtitle}
          </p>
          {children}
        </div>
        {illustration && (
          <div className="hidden lg:flex lg:w-80 xl:w-96 shrink-0 items-center justify-center">
            <img
              src={illustration}
              alt={`Isometrische Illustration: ${title}`}
              className="w-full h-auto max-h-72 object-contain drop-shadow-lg"
              loading="lazy"
              decoding="async"
              width={384}
              height={288}
            />
          </div>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;

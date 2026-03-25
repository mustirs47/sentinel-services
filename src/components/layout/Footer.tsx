import { Shield } from "lucide-react";

const footerNav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Branchen", href: "#branchen" },
  { label: "Karriere", href: "#karriere" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const Footer = () => (
  <footer className="bg-background border-t border-border/50">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <Shield className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground">
              Sentinel Services
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
            Sicherheitsdienstleistungen mit Struktur, Verlässlichkeit und qualifiziertem Personal.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Navigation</h4>
          <ul className="space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+49 (0) 000 000 000</li>
            <li>info@sentinel-services.de</li>
            <li className="pt-2">24/7 erreichbar</li>
          </ul>
        </div>

        {/* Managed by */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Partner</h4>
          <p className="text-sm text-muted-foreground">
            Managed by{" "}
            <a
              href="https://www.ovarna.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Ovarna
            </a>
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-border/40 pt-6 text-center">
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Sentinel Services. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

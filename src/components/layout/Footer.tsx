import logoGrayscale from "@/assets/logo-grayscale.png";

const footerNav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Branchen", href: "#branchen" },
  { label: "Über uns", href: "#team" },
  { label: "Karriere", href: "#karriere" },
  { label: "Kontakt", href: "#kontakt" },
];

const legalNav = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const Footer = () => (
  <footer className="bg-background border-t border-border/50">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <img src={logoGrayscale} alt="Sentinel Services" className="h-8 w-auto mb-4 opacity-80" />
          <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
            Sicherheitsdienstleistungen mit Struktur, Verlässlichkeit und qualifiziertem Personal.
          </p>
          <p className="mt-3 text-xs text-muted-foreground/60">
            Einsatzgebiet: Nordrhein-Westfalen und angrenzende Regionen
          </p>
        </div>

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

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:info@sentinel-services.de" className="hover:text-primary transition-colors">
                info@sentinel-services.de
              </a>
            </li>
            <li>24/7 erreichbar per E-Mail</li>
          </ul>
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Rechtliches</h4>
            <ul className="space-y-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border/40 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Sentinel Services. Alle Rechte vorbehalten.
        </p>
        <p className="text-xs text-muted-foreground/40">
          Webdesign:{" "}
          <a href="https://www.ovarna.de" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground/60 transition-colors">
            Ovarna
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
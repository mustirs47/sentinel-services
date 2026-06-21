import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import logoColor from "@/assets/logo-color-lockup.png";

const navItems = [
  { label: "Sicherheit", href: "/sicherheit" },
  { label: "Reinigung", href: "/reinigung" },
  { label: "Grünanlagen", href: "/gruenanlagen" },
  { label: "Facility", href: "/facility-management" },
  { label: "Branchen", href: "/branchen" },
  { label: "Kontakt", href: "/kontakt" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border/60 bg-background/95 backdrop-blur-lg shadow-lg shadow-black/20"
            : "border-transparent bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-3">
          <Link to="/" className="flex items-center min-w-0 shrink-0" aria-label="Sentinel Services – Startseite">
            <img
              src={logoColor}
              alt="Sentinel Services"
              className="h-7 sm:h-8 lg:h-9 w-auto"
              width={776}
              height={94}
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:info@sentinel-services.de"
              aria-label="E-Mail an info@sentinel-services.de"
              className="hidden sm:inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/kontakt">Anfrage stellen</Link>
            </Button>
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary lg:hidden"
              aria-label="Menü öffnen"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} items={navItems} />
    </>
  );
};

export default Header;

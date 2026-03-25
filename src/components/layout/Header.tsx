import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import logoColor from "@/assets/logo-color.png";

const navItems = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Branchen", href: "/branchen" },
  { label: "Arbeitsweise", href: "/arbeitsweise" },
  { label: "Qualifikationen", href: "/qualifikationen" },
  { label: "Karriere", href: "/karriere" },
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link to="/" className="flex items-center">
            <img src={logoColor} alt="Sentinel Services" className="h-9 sm:h-10 w-auto" />
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
              href="tel:+4920893579970"
              className="hidden lg:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+49 (0) 208 935 799 70</span>
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

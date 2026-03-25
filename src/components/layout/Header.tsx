import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import logoColor from "@/assets/logo-color.png";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Branchen", href: "#branchen" },
  { label: "Über uns", href: "#team" },
  { label: "Qualifikationen", href: "#qualifikationen" },
  { label: "Karriere", href: "#karriere" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
            ? "border-border/60 bg-background/90 backdrop-blur-lg shadow-lg shadow-black/10"
            : "border-transparent bg-background/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#" className="flex items-center">
            <img src={logoColor} alt="Sentinel Services" className="h-7 sm:h-8 w-auto" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#kontakt">Anfrage stellen</a>
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

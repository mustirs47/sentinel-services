import { Mail, Clock, Phone } from "lucide-react";

const Topbar = () => (
  <div className="bg-background border-b border-border/50 text-xs">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
      <div className="flex items-center gap-4 text-muted-foreground">
        <a href="tel:+4920893579970" className="flex items-center gap-1.5 transition-colors hover:text-primary">
          <Phone className="h-3 w-3 text-primary" />
          <span className="hidden sm:inline">+49 (0) 208 935 799 70</span>
          <span className="sm:hidden">Anrufen</span>
        </a>
        <span className="hidden md:flex items-center gap-1.5">
          <Clock className="h-3 w-3 text-primary" />
          Mo–Fr 10–18 Uhr
        </span>
      </div>
      <div className="flex items-center gap-4 text-muted-foreground">
        <a href="mailto:info@sentinel-services.de" className="flex items-center gap-1.5 transition-colors hover:text-primary">
          <Mail className="h-3 w-3" />
          <span className="hidden md:inline">info@sentinel-services.de</span>
        </a>
      </div>
    </div>
  </div>
);

export default Topbar;

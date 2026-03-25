import { Mail, Clock } from "lucide-react";

const Topbar = () => (
  <div className="bg-background border-b border-border/50 text-xs">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Clock className="h-3.5 w-3.5 text-primary" />
        <span className="hidden sm:inline">24/7 erreichbar per E-Mail</span>
        <span className="sm:hidden">24/7 erreichbar</span>
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
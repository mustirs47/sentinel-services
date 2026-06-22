import { Mail } from "@/lib/icons";

const Topbar = () => (
  <div className="bg-background border-b border-border/50 text-xs">
    <div className="mx-auto flex max-w-7xl items-center justify-end px-4 py-2 sm:px-6">
      <a
        href="mailto:info@sentinel-services.de"
        className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
      >
        <Mail className="h-3 w-3" />
        <span>info@sentinel-services.de</span>
      </a>
    </div>
  </div>
);

export default Topbar;

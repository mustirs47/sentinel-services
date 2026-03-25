import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logoColor from "@/assets/logo-color.png";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
}

const MobileMenu = ({ open, onClose, items }: MobileMenuProps) => (
  <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
    <SheetContent side="left" className="w-72 bg-background border-border">
      <SheetHeader className="mb-6">
        <SheetTitle>
          <img src={logoColor} alt="Sentinel Services" className="h-6 w-auto" />
        </SheetTitle>
      </SheetHeader>

      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={onClose}
            className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-8 px-3 space-y-3">
        <Button asChild className="w-full">
          <Link to="/kontakt" onClick={onClose}>Anfrage stellen</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <a href="tel:+4920893579970" onClick={onClose}>Jetzt anrufen</a>
        </Button>
      </div>
    </SheetContent>
  </Sheet>
);

export default MobileMenu;

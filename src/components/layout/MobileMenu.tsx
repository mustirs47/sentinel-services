import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
}

const MobileMenu = ({ open, onClose, items }: MobileMenuProps) => (
  <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
    <SheetContent side="left" className="w-72 bg-background border-border">
      <SheetHeader className="mb-6">
        <SheetTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <span className="text-sm tracking-[0.15em] uppercase">Sentinel Services</span>
        </SheetTitle>
      </SheetHeader>

      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-8 px-3">
        <Button asChild className="w-full">
          <a href="#kontakt" onClick={onClose}>Anfrage stellen</a>
        </Button>
      </div>
    </SheetContent>
  </Sheet>
);

export default MobileMenu;

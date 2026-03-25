import { Phone } from "lucide-react";

const StickyCallButton = () => (
  <a
    href="tel:+4920893579970"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-110 lg:hidden"
    aria-label="Jetzt anrufen"
  >
    <Phone className="h-6 w-6" />
  </a>
);

export default StickyCallButton;

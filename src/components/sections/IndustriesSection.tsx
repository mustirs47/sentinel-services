import { Building, Factory, HardHat, ShoppingBag, PartyPopper, Hotel, Home, Landmark, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  { icon: Building, title: "Gewerbe & Büroimmobilien", desc: "Zugangskontrollen und Präsenz in Geschäftsgebäuden und Bürokomplexen." },
  { icon: Factory, title: "Industrie & Logistik", desc: "Schutz sensibler Produktions- und Lagerflächen rund um die Uhr." },
  { icon: HardHat, title: "Baustellen & Projektflächen", desc: "Schutz außerhalb der Betriebszeiten, Zugangskontrolle und sichtbare Präsenz." },
  { icon: ShoppingBag, title: "Einzelhandel", desc: "Ladendetektive, Zugangskontrollen und Präsenz in Verkaufsflächen." },
  { icon: PartyPopper, title: "Veranstaltungen & Messen", desc: "Sicherheitskonzepte für Events jeder Größe – von der Messe bis zum Firmenfest." },
  { icon: Hotel, title: "Hotels & Empfangsbereiche", desc: "Diskreter Empfangsservice und Nachtportier für das Gastgewerbe." },
  { icon: Home, title: "Wohnanlagen", desc: "Sicherheitsservice für Eigentümergemeinschaften und Wohnkomplexe." },
  { icon: Landmark, title: "Öffentliche Einrichtungen", desc: "Schutz sensibler Gebäude und öffentlicher Bereiche." },
];

const IndustriesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="branchen" className="bg-background">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Für welche Branchen wir arbeiten
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Jede Branche hat eigene Anforderungen an Sicherheit. Wir kennen die Unterschiede.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <Icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              <a href="#kontakt" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                Anfrage <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

import { Building, Factory, HardHat, ShoppingBag, PartyPopper, Hotel, Home, Landmark } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  { icon: Building, title: "Gewerbe & Büro", detail: "Zugangskontrollen, Schließdienste, Alarmverfolgung in Mehrmieter-Objekten." },
  { icon: Factory, title: "Industrie & Logistik", detail: "Schichtbegleitend, Torkontrolle, Schutz sensibler Produktions- und Lagerflächen." },
  { icon: HardHat, title: "Baustellen", detail: "Nacht-/Wochenendlage, Materialschutz, Zugangskontrolle außerhalb der Bauzeiten." },
  { icon: ShoppingBag, title: "Einzelhandel", detail: "Store-Detektive, Präsenzdienste, Zugangssteuerung in Verkaufsflächen." },
  { icon: PartyPopper, title: "Veranstaltungen", detail: "Einlassmanagement, Besucherlenkung, Abstimmung mit Ordnungsamt und Veranstalter." },
  { icon: Hotel, title: "Hotels & Gastronomie", detail: "Diskreter Empfangsdienst, Nachtportier, Gästekontakt auf hohem Niveau." },
  { icon: Home, title: "Wohnanlagen", detail: "Revierfahrten, Schließdienste, Ansprechpartner für Eigentümergemeinschaften." },
  { icon: Landmark, title: "Öffentliche Einrichtungen", detail: "Objektschutz für sensible Gebäude, Zugangssicherung, Besuchersteuerung." },
];

const IndustriesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="branchen" className="bg-background">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Branchen, die wir absichern
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Jede Branche hat eigene Risiken, Abläufe und Erwartungen. Wir kennen die operativen Besonderheiten.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title, detail }) => (
            <div
              key={title}
              className="rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:border-primary/30"
            >
              <Icon className="h-5 w-5 text-primary mb-2" />
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
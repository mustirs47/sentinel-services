import { Building, Factory, HardHat, ShoppingBag, PartyPopper, Hotel, Home, Landmark } from "lucide-react";

export interface IndustryData {
  slug: string;
  icon: typeof Building;
  title: string;
  detail: string;
  relatedServices: string[];
}

export const industries: IndustryData[] = [
  {
    slug: "gewerbe-und-buero",
    icon: Building,
    title: "Gewerbe & Büro",
    detail: "Zugangskontrollen, Schließdienste, Alarmverfolgung in Mehrmieter-Objekten.",
    relatedServices: ["objektschutz", "empfangs-und-pfortendienst", "kontroll-und-streifendienst"],
  },
  {
    slug: "industrie-und-logistik",
    icon: Factory,
    title: "Industrie & Logistik",
    detail: "Schichtbegleitend, Torkontrolle, Schutz sensibler Produktions- und Lagerflächen.",
    relatedServices: ["objektschutz", "kontroll-und-streifendienst", "sicherheitskonzepte"],
  },
  {
    slug: "baustellen",
    icon: HardHat,
    title: "Baustellen",
    detail: "Nacht-/Wochenendlage, Materialschutz, Zugangskontrolle außerhalb der Bauzeiten.",
    relatedServices: ["baustellenbewachung", "kontroll-und-streifendienst"],
  },
  {
    slug: "einzelhandel",
    icon: ShoppingBag,
    title: "Einzelhandel",
    detail: "Store-Detektive, Präsenzdienste, Zugangssteuerung in Verkaufsflächen.",
    relatedServices: ["objektschutz", "sicherheitskonzepte"],
  },
  {
    slug: "veranstaltungen",
    icon: PartyPopper,
    title: "Veranstaltungen",
    detail: "Einlassmanagement, Besucherlenkung, Abstimmung mit Ordnungsamt und Veranstalter.",
    relatedServices: ["veranstaltungsschutz", "sicherheitskonzepte"],
  },
  {
    slug: "hotels-und-gastronomie",
    icon: Hotel,
    title: "Hotels & Gastronomie",
    detail: "Diskreter Empfangsdienst, Nachtportier, Gästekontakt auf hohem Niveau.",
    relatedServices: ["empfangs-und-pfortendienst", "objektschutz"],
  },
  {
    slug: "wohnanlagen",
    icon: Home,
    title: "Wohnanlagen",
    detail: "Revierfahrten, Schließdienste, Ansprechpartner für Eigentümergemeinschaften.",
    relatedServices: ["kontroll-und-streifendienst", "objektschutz"],
  },
  {
    slug: "oeffentliche-einrichtungen",
    icon: Landmark,
    title: "Öffentliche Einrichtungen",
    detail: "Objektschutz für sensible Gebäude, Zugangssicherung, Besuchersteuerung.",
    relatedServices: ["objektschutz", "empfangs-und-pfortendienst", "sicherheitskonzepte"],
  },
];

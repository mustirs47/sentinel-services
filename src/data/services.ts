import { Building2, PartyPopper, HardHat, DoorOpen, Route, Settings } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: typeof Building2;
  title: string;
  context: string;
  desc: string;
  points: string[];
  longDesc: string;
  typicalClients: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "objektschutz",
    icon: Building2,
    title: "Objektschutz",
    context: "Für Betriebsstätten mit Publikumsverkehr oder erhöhtem Schutzbedarf außerhalb der Geschäftszeiten.",
    desc: "Zugangskontrollen, Schichtbetrieb und sichtbare Präsenz – abgestimmt auf Objekt und Risikoprofil.",
    points: ["Zugangs- und Zutrittskontrolle", "Schließ- und Kontrolldienste", "Dokumentierte Rundgänge"],
    longDesc: "Professioneller Objektschutz und Werkschutz für Gebäude, Betriebsstätten und Industrieanlagen – rund um die Uhr durch §34a-geprüftes Personal. Ob Bürokomplex, Produktionsstätte, Lager oder öffentliches Gebäude: Wir setzen auf sichtbare Präsenz, lückenlose Zugangs- und Zutrittskontrolle sowie dokumentierte Kontrollgänge. Als Objektschutz-Dienstleister entwickeln wir Wachschutz-Konzepte, die auf Risikoprofil, Betriebszeiten und interne Abläufe Ihres Objekts abgestimmt sind.",
    typicalClients: "Hausverwaltungen, Unternehmen mit Büro- und Gewerbeflächen, öffentliche Einrichtungen, Industriebetriebe.",
    h1: "Objektschutz & Werkschutz – Gebäudebewachung bundesweit",
    metaTitle: "Objektschutz & Werkschutz bundesweit | Sentinel Services",
    metaDescription: "Objektschutz, Werkschutz und Wachschutz für Gebäude, Industrie und Gewerbe. §34a-geprüftes Personal, Zugangskontrolle, dokumentierte Rundgänge. Jetzt Angebot anfordern.",
    faqs: [
      { question: "Welche Qualifikationen haben Ihre Objektschutzkräfte?", answer: "Alle Einsatzkräfte verfügen über die Sachkundeprüfung nach §34a GewO, regelmäßige Schulungen in Deeskalation und Erste Hilfe sowie objektspezifische Einweisungen." },
      { question: "Wie schnell kann ein Objektschutz-Einsatz starten?", answer: "Bei kurzfristigem Bedarf können wir zügig einsatzbereit sein. Für planbare Einsätze erstellen wir vorab ein individuelles Konzept." },
      { question: "Bieten Sie auch Nacht- und Wochenendbewachung an?", answer: "Ja, wir bieten Objektschutz rund um die Uhr, einschließlich Nacht-, Wochenend- und Feiertagsdiensten." },
      { question: "Was ist der Unterschied zwischen Objektschutz und Werkschutz?", answer: "Werkschutz ist eine Sonderform des Objektschutzes für Industriebetriebe und Produktionsstätten – mit zusätzlichem Fokus auf Werkstor-Kontrolle, Brandwache und Schutz sensibler Anlagen. Beides sichern wir mit demselben qualifizierten Personal ab." },
    ],
  },
  {
    slug: "veranstaltungsschutz",
    icon: PartyPopper,
    title: "Veranstaltungsschutz",
    context: "Für Events mit Besucherströmen, VIP-Bereichen oder erhöhtem Koordinationsbedarf.",
    desc: "Einlassmanagement, Besucherlenkung und Deeskalation – in direkter Abstimmung mit dem Veranstalter.",
    points: ["Personalisiertes Einlassmanagement", "Deeskalation und Intervention", "Abstimmung mit Ordnungsbehörden"],
    longDesc: "Veranstaltungsschutz und Eventsecurity für Konzerte, Messen, Firmenevents und Stadtfeste – mit qualifizierten Türstehern und erfahrener Einsatzleitung. Wir liefern Einlasssteuerung, Besucherlenkung, VIP-Betreuung und Deeskalationsbereitschaft, immer in enger Abstimmung mit dem Veranstalter und den zuständigen Ordnungsbehörden. Unser Sicherheitsdienst für Veranstaltungen passt Personalstärke und Konzept exakt an Besucherzahl und Risikoprofil an.",
    typicalClients: "Veranstalter, Agenturen, Unternehmen mit Firmenevents, Kommunen und öffentliche Träger.",
    h1: "Veranstaltungsschutz & Eventsecurity – Türsteher und Einlasskontrolle",
    metaTitle: "Veranstaltungsschutz & Eventsecurity bundesweit | Sentinel Services",
    metaDescription: "Veranstaltungsschutz mit erfahrenen Türstehern: Einlasskontrolle, Besucherlenkung und Deeskalation. Eventsecurity für Firmenevents, Messen und Großveranstaltungen.",
    faqs: [
      { question: "Ab welcher Veranstaltungsgröße bieten Sie Schutz an?", answer: "Wir sichern Veranstaltungen jeder Größe – von Firmenfeiern mit 50 Gästen bis zu Großveranstaltungen mit mehreren tausend Besuchern." },
      { question: "Übernehmen Sie auch die Abstimmung mit dem Ordnungsamt?", answer: "Ja, wir unterstützen bei der Erstellung von Sicherheitskonzepten und koordinieren uns direkt mit den zuständigen Behörden." },
      { question: "Wie kurzfristig können Sie Veranstaltungssicherheit bereitstellen?", answer: "In dringenden Fällen können wir auch sehr kurzfristig Personal bereitstellen. Für optimale Planung empfehlen wir eine Vorlaufzeit von mindestens einer Woche." },
      { question: "Stellen Sie auch Türsteher für einzelne Abendveranstaltungen?", answer: "Ja, wir stellen geprüfte Türsteher und Ordner sowohl für einmalige Abendveranstaltungen als auch für laufende Diskotheken- und Clubbetriebe – inklusive Einlasskontrolle, Alterskontrolle und Konfliktbewältigung." },
    ],
  },
  {
    slug: "baustellenbewachung",
    icon: HardHat,
    title: "Baustellenbewachung",
    context: "Für Projektflächen mit hohem Materialwert oder Zugang außerhalb der Bauzeiten.",
    desc: "Nacht- und Wochenendbewachung mit dokumentierten Kontrollgängen und Zugangssicherung.",
    points: ["Nacht-/Wochenendpräsenz", "Materialschutz und Zufahrtskontrolle", "Sofortmeldung bei Vorfällen"],
    longDesc: "Baustellenbewachung, Brandwache und Nachtwache schützen Ihre Projektflächen genau dann, wenn keine Bauleitung vor Ort ist. Bei hohem Materialwert, offenen Zugängen und steigendem Risiko durch Metalldiebstahl sichern wir Zufahrten, kontrollieren Zugänge, dokumentieren Kontrollgänge und schützen Baumaterial sowie Gerätschaften. Bei Bedarf stellen wir auch zertifizierte Brandwachen für Schweißarbeiten und nach Bränden.",
    typicalClients: "Bauunternehmen, Projektentwickler, Generalunternehmer, kommunale Bauträger.",
    h1: "Baustellenbewachung, Brandwache & Nachtwache",
    metaTitle: "Baustellenbewachung & Brandwache bundesweit | Sentinel Services",
    metaDescription: "Baustellenbewachung in Nacht- und Wochenendlage, Brandwache nach DGUV und zuverlässige Nachtwache. §34a-geprüftes Personal, schnelle Meldekette bei Vorfällen.",
    faqs: [
      { question: "Welche Baustellen sichern Sie?", answer: "Wir sichern Baustellen jeder Größe – vom Einfamilienhaus bis zur Großbaustelle. Der Fokus liegt auf Flächen mit hohem Materialwert oder offenem Zugang." },
      { question: "Was passiert bei einem Vorfall auf der Baustelle?", answer: "Unsere Einsatzkräfte melden jeden Vorfall sofort an den Bauleiter und dokumentieren den Sachverhalt lückenlos. Bei Bedarf werden Polizei oder Rettungskräfte verständigt." },
      { question: "Können Sie auch kurzfristig Baustellenbewachung bereitstellen?", answer: "Ja, wir können bei akutem Bedarf zügig einsatzbereit sein." },
      { question: "Übernehmen Sie auch Brandwachen?", answer: "Ja, wir stellen Brandwachen für Schweiß- und Heißarbeiten sowie als Sicherheitswache nach Bränden – mit entsprechend geschultem Personal nach DGUV-Vorgaben." },
    ],
  },
  {
    slug: "empfangs-und-pfortendienst",
    icon: DoorOpen,
    title: "Empfangs- und Pfortendienste",
    context: "Für repräsentative Eingangsbereiche, die Sicherheitsfunktion und Servicequalität verbinden.",
    desc: "Professioneller Besucherempfang, Schlüsselverwaltung und Telefonzentrale.",
    points: ["Besucherregistrierung", "Schlüssel- und Zutrittsverwaltung", "Repräsentativer erster Eindruck"],
    longDesc: "Der Empfangsbereich ist die Visitenkarte Ihres Unternehmens. Unser Empfangsdienst und Pfortendienst verbindet professionelle Sicherheitsfunktion mit erstklassigem Serviceauftritt – ähnlich einem klassischen Doorman: Besucherregistrierung, Schlüsselverwaltung, Telefonzentrale und diskreter Zutrittsschutz. Das Empfangspersonal wird auf Ihr Objekt, Ihre Unternehmenskultur und Ihre Sicherheitsstandards eingewiesen.",
    typicalClients: "Unternehmen mit Empfangsbereich, Mehrmieterobjekte, Kanzleien, Arztpraxen, Behörden.",
    h1: "Empfangsdienst & Pfortendienst – Doorman für Unternehmen",
    metaTitle: "Empfangsdienst & Pfortendienst bundesweit | Sentinel Services",
    metaDescription: "Empfangsdienst, Pfortendienst und Doorman-Service für Unternehmen: Besucherempfang, Schlüsselverwaltung, Telefonzentrale, Zutrittsprüfung – professionell und serviceorientiert.",
    faqs: [
      { question: "Kann Ihr Empfangspersonal auch Telefonanrufe entgegennehmen?", answer: "Ja, unser Personal übernimmt auf Wunsch die Telefonzentrale und leitet Anrufe nach Ihren Vorgaben weiter." },
      { question: "Wie wird das Empfangspersonal eingearbeitet?", answer: "Vor Einsatzbeginn erhalten unsere Kräfte eine objektspezifische Einweisung in Abläufe, Ansprechpartner und Hausordnung." },
      { question: "Was unterscheidet einen Pfortendienst vom klassischen Empfang?", answer: "Der Pfortendienst hat einen stärkeren Sicherheitsfokus – Zugangskontrolle, Ausweisprüfung, Werkschutz-Aufgaben. Der Empfangsdienst betont das Repräsentative. Wir kombinieren beide Aufgabenbilder nach Ihrem Bedarf." },
    ],
  },
  {
    slug: "kontroll-und-streifendienst",
    icon: Route,
    title: "Kontroll- und Streifendienste",
    context: "Für Areale, die regelmäßige Überprüfung erfordern – ohne permanente Besetzung.",
    desc: "Revierdienst, Alarmverfolgung und Schließdienste nach festgelegtem Kontrollplan.",
    points: ["Revierfahrten nach Einsatzplan", "Alarm- und Störungsverfolgung", "Protokollierte Schließrunden"],
    longDesc: "Nicht jedes Objekt braucht permanente Besetzung – aber regelmäßige Kontrolle. Unser Revierdienst und Streifendienst umfasst geplante Revierfahrten, Alarm- und Störungsverfolgung, Nachtwache sowie dokumentierte Schließrunden. Die Kontrollpläne werden individuell auf Ihr Objekt, Ihre Betriebszeiten und Ihre Risikoschwerpunkte abgestimmt – kostengünstiger als permanente Bewachung und trotzdem zuverlässig.",
    typicalClients: "Hausverwaltungen, Gewerbegebiete, Wohnanlagen, Industrieparks.",
    h1: "Revierdienst, Streifendienst & Nachtwache",
    metaTitle: "Revierdienst & Streifendienst bundesweit | Sentinel Services",
    metaDescription: "Revierdienst, Streifendienst und Nachtwache mit geplanten Kontrollfahrten, Alarmverfolgung und Schließrunden. Bewachung ohne permanente Besetzung – effizient und dokumentiert.",
    faqs: [
      { question: "Wie oft finden die Kontrollfahrten statt?", answer: "Die Häufigkeit wird individuell festgelegt – von einmal täglich bis zu mehrfachen Kontrollen pro Nacht, je nach Risikoprofil und Bedarf." },
      { question: "Werden die Kontrollgänge dokumentiert?", answer: "Ja, jeder Kontrollgang wird lückenlos dokumentiert. Sie erhalten regelmäßige Berichte über durchgeführte Kontrollen und festgestellte Abweichungen." },
      { question: "Was ist der Unterschied zwischen Revier- und Streifendienst?", answer: "Im Revierdienst fährt eine Einsatzkraft mehrere Objekte nach festem Plan ab. Der Streifendienst beschreibt eher die Kontrolle eines einzelnen größeren Areals zu Fuß oder per Fahrzeug. Beide Modelle bieten wir je nach Bedarf an." },
    ],
  },
  {
    slug: "sicherheitskonzepte",
    icon: Settings,
    title: "Individuelle Sicherheitskonzepte",
    context: "Für komplexe Anforderungen, die keine Standardlösung abdeckt.",
    desc: "Risikoanalyse, Maßnahmenplanung und laufende Optimierung – zugeschnitten auf Ihr Objekt.",
    points: ["Objektspezifische Risikoanalyse", "Maßnahmen- und Einsatzplanung", "Regelmäßige Konzeptüberprüfung"],
    longDesc: "Ein professionelles Sicherheitskonzept ist mehr als die Summe einzelner Wachschichten: Wir analysieren Ihr Risikoprofil per strukturierter Risikoanalyse, entwickeln Maßnahmen aus einem Guss und setzen sie mit qualifiziertem Personal um. Als Bewachungsunternehmen mit §34a-Zulassung verantworten wir Konzepterstellung, Umsetzung und laufende Optimierung – nachhaltiger Schutz statt kurzfristiger Symptombehandlung.",
    typicalClients: "Unternehmen mit komplexen Sicherheitsanforderungen, sensible Infrastruktur, Konzernstandorte.",
    h1: "Sicherheitskonzept erstellen – Risikoanalyse & Umsetzung",
    metaTitle: "Sicherheitskonzept erstellen lassen | Sentinel Services",
    metaDescription: "Sicherheitskonzept aus einer Hand: Risikoanalyse, Maßnahmenplan, Personalmodell und Reporting – durch ein zugelassenes Bewachungsunternehmen mit §34a-Erlaubnis.",
    faqs: [
      { question: "Was umfasst eine Risikoanalyse?", answer: "Wir bewerten Ihr Objekt hinsichtlich Lage, Zugänge, Betriebsabläufe, bekannter Risiken und vorhandener Schutzmaßnahmen – als Grundlage für ein passgenaues Sicherheitskonzept." },
      { question: "Wie oft wird das Sicherheitskonzept überprüft?", answer: "In der Regel vierteljährlich oder bei wesentlichen Änderungen der Rahmenbedingungen. Die Intervalle werden im Vertrag festgelegt." },
      { question: "Was kostet ein Sicherheitskonzept?", answer: "Die Kosten richten sich nach Objektgröße, Risikoprofil und Tiefe der Analyse. Nach einem unverbindlichen Vorgespräch erhalten Sie ein transparentes Angebot mit klaren Leistungsbausteinen." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);

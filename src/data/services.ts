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
    longDesc: "Unser Objektschutz sichert Ihre Betriebsstätten rund um die Uhr – mit geschultem Personal, das Ihr Objekt kennt und Risiken frühzeitig erkennt. Ob Bürokomplex, Produktionsstätte oder öffentliches Gebäude: Wir setzen auf sichtbare Präsenz, lückenlose Zugangskontrollen und dokumentierte Kontrollgänge. Jedes Einsatzkonzept wird individuell auf Ihr Risikoprofil, Ihre Betriebszeiten und Ihre internen Abläufe abgestimmt.",
    typicalClients: "Hausverwaltungen, Unternehmen mit Büro- und Gewerbeflächen, öffentliche Einrichtungen, Industriebetriebe.",
    h1: "Objektschutz – Professionelle Bewachung für Ihre Betriebsstätten",
    metaTitle: "Objektschutz | Sentinel Services – Professionelle Gebäudebewachung",
    metaDescription: "Professioneller Objektschutz mit Zugangskontrollen, Schließdiensten und dokumentierten Rundgängen. §34a-zugelassen, feste Ansprechpartner. Jetzt anfragen.",
    faqs: [
      { question: "Welche Qualifikationen haben Ihre Objektschutzkräfte?", answer: "Alle Einsatzkräfte verfügen über die Sachkundeprüfung nach §34a GewO, regelmäßige Schulungen in Deeskalation und Erste Hilfe sowie objektspezifische Einweisungen." },
      { question: "Wie schnell kann ein Objektschutz-Einsatz starten?", answer: "Bei kurzfristigem Bedarf können wir innerhalb von 24–48 Stunden einsatzbereit sein. Für planbare Einsätze erstellen wir vorab ein individuelles Konzept." },
      { question: "Bieten Sie auch Nacht- und Wochenendbewachung an?", answer: "Ja, wir bieten Objektschutz rund um die Uhr, einschließlich Nacht-, Wochenend- und Feiertagsdiensten." },
    ],
  },
  {
    slug: "veranstaltungsschutz",
    icon: PartyPopper,
    title: "Veranstaltungsschutz",
    context: "Für Events mit Besucherströmen, VIP-Bereichen oder erhöhtem Koordinationsbedarf.",
    desc: "Einlassmanagement, Besucherlenkung und Deeskalation – in direkter Abstimmung mit dem Veranstalter.",
    points: ["Personalisiertes Einlassmanagement", "Deeskalation und Intervention", "Abstimmung mit Ordnungsbehörden"],
    longDesc: "Veranstaltungen erfordern Sicherheitskonzepte, die auf Besucherströme, Raumlogistik und potenzielle Risiken abgestimmt sind. Unser Veranstaltungsschutz umfasst Einlasssteuerung, Besucherlenkung, VIP-Betreuung und Deeskalationsbereitschaft – immer in enger Abstimmung mit dem Veranstalter und den zuständigen Ordnungsbehörden.",
    typicalClients: "Veranstalter, Agenturen, Unternehmen mit Firmenevents, Kommunen und öffentliche Träger.",
    h1: "Veranstaltungsschutz – Sicherheit für Events jeder Größe",
    metaTitle: "Veranstaltungsschutz | Sentinel Services – Security für Events",
    metaDescription: "Professioneller Veranstaltungsschutz: Einlassmanagement, Besucherlenkung & Deeskalation. Erfahrene Security für Firmenevents, Konzerte & Messen. Jetzt anfragen.",
    faqs: [
      { question: "Ab welcher Veranstaltungsgröße bieten Sie Schutz an?", answer: "Wir sichern Veranstaltungen jeder Größe – von Firmenfeiern mit 50 Gästen bis zu Großveranstaltungen mit mehreren tausend Besuchern." },
      { question: "Übernehmen Sie auch die Abstimmung mit dem Ordnungsamt?", answer: "Ja, wir unterstützen bei der Erstellung von Sicherheitskonzepten und koordinieren uns direkt mit den zuständigen Behörden." },
      { question: "Wie kurzfristig können Sie Veranstaltungssicherheit bereitstellen?", answer: "In dringenden Fällen können wir innerhalb von 24 Stunden Personal bereitstellen. Für optimale Planung empfehlen wir eine Vorlaufzeit von mindestens einer Woche." },
    ],
  },
  {
    slug: "baustellenbewachung",
    icon: HardHat,
    title: "Baustellenbewachung",
    context: "Für Projektflächen mit hohem Materialwert oder Zugang außerhalb der Bauzeiten.",
    desc: "Nacht- und Wochenendbewachung mit dokumentierten Kontrollgängen und Zugangssicherung.",
    points: ["Nacht-/Wochenendpräsenz", "Materialschutz und Zufahrtskontrolle", "Sofortmeldung bei Vorfällen"],
    longDesc: "Baustellen sind besonders gefährdet: hoher Materialwert, offene Zugänge und keine Präsenz außerhalb der Arbeitszeiten. Unsere Baustellenbewachung schützt Ihre Projektflächen durch Nacht- und Wochenendbewachung, dokumentierte Kontrollgänge und sofortige Meldeketten bei Unregelmäßigkeiten. Wir sichern Zufahrten, kontrollieren Zugänge und schützen Baumaterial und Gerätschaften.",
    typicalClients: "Bauunternehmen, Projektentwickler, Generalunternehmer, kommunale Bauträger.",
    h1: "Baustellenbewachung – Nacht- und Wochenendschutz für Projektflächen",
    metaTitle: "Baustellenbewachung | Sentinel Services – Schutz für Baustellen",
    metaDescription: "Professionelle Baustellenbewachung: Nacht- & Wochenenddienst, Materialschutz, dokumentierte Kontrollgänge. §34a-zugelassen. Jetzt Baustellenschutz anfragen.",
    faqs: [
      { question: "Welche Baustellen sichern Sie?", answer: "Wir sichern Baustellen jeder Größe – vom Einfamilienhaus bis zur Großbaustelle. Der Fokus liegt auf Flächen mit hohem Materialwert oder offenem Zugang." },
      { question: "Was passiert bei einem Vorfall auf der Baustelle?", answer: "Unsere Einsatzkräfte melden jeden Vorfall sofort an den Bauleiter und dokumentieren den Sachverhalt lückenlos. Bei Bedarf werden Polizei oder Rettungskräfte verständigt." },
      { question: "Können Sie auch kurzfristig Baustellenbewachung bereitstellen?", answer: "Ja, wir können bei akutem Bedarf innerhalb von 24 Stunden einsatzbereit sein." },
    ],
  },
  {
    slug: "empfangs-und-pfortendienst",
    icon: DoorOpen,
    title: "Empfangs- und Pfortendienste",
    context: "Für repräsentative Eingangsbereiche, die Sicherheitsfunktion und Servicequalität verbinden.",
    desc: "Professioneller Besucherempfang, Schlüsselverwaltung und Telefonzentrale.",
    points: ["Besucherregistrierung", "Schlüssel- und Zutrittsverwaltung", "Repräsentativer erster Eindruck"],
    longDesc: "Der Empfangsbereich ist die Visitenkarte Ihres Unternehmens. Unsere Empfangs- und Pfortendienste verbinden professionelle Sicherheitsfunktionen mit erstklassigem Serviceauftritt: Besucherregistrierung, Schlüsselverwaltung, Telefonzentrale und diskreter Zutrittsschutz. Unser Personal wird auf Ihr Objekt und Ihre Unternehmenskultur eingestimmt.",
    typicalClients: "Unternehmen mit Empfangsbereich, Mehrmieterobjekte, Kanzleien, Arztpraxen, Behörden.",
    h1: "Empfangs- und Pfortendienst – Sicherheit mit Servicequalität",
    metaTitle: "Empfangs- & Pfortendienst | Sentinel Services",
    metaDescription: "Professioneller Empfangs- und Pfortendienst: Besucherregistrierung, Schlüsselverwaltung, Telefonzentrale. Sicherheit und Servicequalität vereint. Jetzt anfragen.",
    faqs: [
      { question: "Kann Ihr Empfangspersonal auch Telefonanrufe entgegennehmen?", answer: "Ja, unser Personal übernimmt auf Wunsch die Telefonzentrale und leitet Anrufe nach Ihren Vorgaben weiter." },
      { question: "Wie wird das Empfangspersonal eingearbeitet?", answer: "Vor Einsatzbeginn erhalten unsere Kräfte eine objektspezifische Einweisung in Abläufe, Ansprechpartner und Hausordnung." },
    ],
  },
  {
    slug: "kontroll-und-streifendienst",
    icon: Route,
    title: "Kontroll- und Streifendienste",
    context: "Für Areale, die regelmäßige Überprüfung erfordern – ohne permanente Besetzung.",
    desc: "Revierdienst, Alarmverfolgung und Schließdienste nach festgelegtem Kontrollplan.",
    points: ["Revierfahrten nach Einsatzplan", "Alarm- und Störungsverfolgung", "Protokollierte Schließrunden"],
    longDesc: "Nicht jedes Objekt braucht permanente Besetzung – aber regelmäßige Kontrolle. Unsere Kontroll- und Streifendienste umfassen geplante Revierfahrten, Alarm- und Störungsverfolgung sowie dokumentierte Schließrunden. Die Kontrollpläne werden individuell auf Ihr Objekt, Ihre Zeiten und Ihre Risikoschwerpunkte abgestimmt.",
    typicalClients: "Hausverwaltungen, Gewerbegebiete, Wohnanlagen, Industrieparks.",
    h1: "Kontroll- und Streifendienst – Regelmäßige Sicherheitspräsenz",
    metaTitle: "Kontroll- & Streifendienst | Sentinel Services – Revierdienst",
    metaDescription: "Kontroll- und Streifendienste: Revierfahrten, Alarmverfolgung, dokumentierte Schließrunden. Regelmäßige Sicherheitspräsenz ohne permanente Besetzung. Jetzt anfragen.",
    faqs: [
      { question: "Wie oft finden die Kontrollfahrten statt?", answer: "Die Häufigkeit wird individuell festgelegt – von einmal täglich bis zu mehrfachen Kontrollen pro Nacht, je nach Risikoprofil und Bedarf." },
      { question: "Werden die Kontrollgänge dokumentiert?", answer: "Ja, jeder Kontrollgang wird lückenlos dokumentiert. Sie erhalten regelmäßige Berichte über durchgeführte Kontrollen und festgestellte Abweichungen." },
    ],
  },
  {
    slug: "sicherheitskonzepte",
    icon: Settings,
    title: "Individuelle Sicherheitskonzepte",
    context: "Für komplexe Anforderungen, die keine Standardlösung abdeckt.",
    desc: "Risikoanalyse, Maßnahmenplanung und laufende Optimierung – zugeschnitten auf Ihr Objekt.",
    points: ["Objektspezifische Risikoanalyse", "Maßnahmen- und Einsatzplanung", "Regelmäßige Konzeptüberprüfung"],
    longDesc: "Komplexe Sicherheitslagen erfordern maßgeschneiderte Lösungen. Wir analysieren Ihr Risikoprofil, entwickeln ein umfassendes Sicherheitskonzept und setzen es mit qualifiziertem Personal um. Das Konzept wird regelmäßig überprüft und an veränderte Rahmenbedingungen angepasst – für nachhaltigen Schutz statt kurzfristiger Symptombehandlung.",
    typicalClients: "Unternehmen mit komplexen Sicherheitsanforderungen, sensible Infrastruktur, Konzernstandorte.",
    h1: "Individuelle Sicherheitskonzepte – Maßgeschneiderter Schutz",
    metaTitle: "Sicherheitskonzepte | Sentinel Services – Individuelle Lösungen",
    metaDescription: "Individuelle Sicherheitskonzepte: Risikoanalyse, Maßnahmenplanung & laufende Optimierung. Maßgeschneiderter Schutz für komplexe Anforderungen. Jetzt beraten lassen.",
    faqs: [
      { question: "Was umfasst eine Risikoanalyse?", answer: "Wir bewerten Ihr Objekt hinsichtlich Lage, Zugänge, Betriebsabläufe, bekannter Risiken und vorhandener Schutzmaßnahmen – als Grundlage für ein passgenaues Sicherheitskonzept." },
      { question: "Wie oft wird das Sicherheitskonzept überprüft?", answer: "In der Regel vierteljährlich oder bei wesentlichen Änderungen der Rahmenbedingungen. Die Intervalle werden im Vertrag festgelegt." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);

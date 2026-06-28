import {
  Shield,
  SprayCan,
  Leaf,
  Building2,
  PartyPopper,
  HardHat,
  DoorOpen,
  Route,
  Settings,
  Sparkles,
  Brush,
  GlassWater,
  Hammer,
  Trees,
  TreePine,
  Snowflake,
  Wrench,
  ClipboardList,
  Calculator,
  type LucideIcon,
} from "@/lib/icons";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
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

export type DivisionSlug =
  | "sicherheit"
  | "reinigung"
  | "gruenanlagen"
  | "facility-management";

export interface DivisionData {
  slug: DivisionSlug;
  shortLabel: string;
  title: string;
  claim: string;
  icon: LucideIcon;
  intro: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  primaryKeyword: string;
  services: ServiceData[];
}

const sicherheitServices: ServiceData[] = [
  {
    slug: "objektschutz",
    icon: Building2,
    title: "Objektschutz",
    context: "Für Betriebsstätten mit Publikumsverkehr oder erhöhtem Schutzbedarf außerhalb der Geschäftszeiten.",
    desc: "Zugangskontrollen, Schichtbetrieb und sichtbare Präsenz – abgestimmt auf Objekt und Risikoprofil.",
    points: ["Zugangs- und Zutrittskontrolle", "Schließ- und Kontrolldienste", "Dokumentierte Rundgänge"],
    longDesc:
      "Professioneller Objektschutz und Werkschutz für Gebäude, Betriebsstätten und Industrieanlagen – rund um die Uhr durch §34a-geprüftes Personal. Ob Bürokomplex, Produktionsstätte, Lager oder öffentliches Gebäude: Wir setzen auf sichtbare Präsenz, lückenlose Zugangs- und Zutrittskontrolle sowie dokumentierte Kontrollgänge. Als Objektschutz-Dienstleister entwickeln wir Wachschutz-Konzepte, die auf Risikoprofil, Betriebszeiten und interne Abläufe Ihres Objekts abgestimmt sind.",
    typicalClients: "Hausverwaltungen, Unternehmen mit Büro- und Gewerbeflächen, öffentliche Einrichtungen, Industriebetriebe.",
    h1: "Objektschutz & Werkschutz – Gebäudebewachung",
    metaTitle: "Objektschutz & Werkschutz | Sentinel Services",
    metaDescription:
      "Objektschutz, Werkschutz und Wachschutz für Gebäude, Industrie und Gewerbe – §34a-geprüftes Personal, Zugangskontrolle, dokumentierte Rundgänge.",
    faqs: [
      { question: "Welche Qualifikationen haben Ihre Objektschutzkräfte?", answer: "Alle Einsatzkräfte verfügen über die Sachkundeprüfung nach §34a GewO, regelmäßige Schulungen in Deeskalation und Erste Hilfe sowie objektspezifische Einweisungen." },
      { question: "Wie schnell kann ein Objektschutz-Einsatz starten?", answer: "Bei kurzfristigem Bedarf können wir zügig einsatzbereit sein. Für planbare Einsätze erstellen wir vorab ein individuelles Konzept." },
      { question: "Bieten Sie auch Nacht- und Wochenendbewachung an?", answer: "Ja, wir bieten Objektschutz rund um die Uhr, einschließlich Nacht-, Wochenend- und Feiertagsdiensten." },
      { question: "Was ist der Unterschied zwischen Objektschutz und Werkschutz?", answer: "Werkschutz ist eine Sonderform des Objektschutzes für Industriebetriebe und Produktionsstätten – mit zusätzlichem Fokus auf Werkstor-Kontrolle, Brandwache und Schutz sensibler Anlagen." },
    ],
  },
  {
    slug: "veranstaltungsschutz",
    icon: PartyPopper,
    title: "Veranstaltungsschutz",
    context: "Für Events mit Besucherströmen, VIP-Bereichen oder erhöhtem Koordinationsbedarf.",
    desc: "Einlassmanagement, Besucherlenkung und Deeskalation – in direkter Abstimmung mit dem Veranstalter.",
    points: ["Personalisiertes Einlassmanagement", "Deeskalation und Intervention", "Abstimmung mit Ordnungsbehörden"],
    longDesc:
      "Veranstaltungsschutz und Eventsecurity für Konzerte, Messen, Firmenevents und Stadtfeste – mit qualifizierten Türstehern und erfahrener Einsatzleitung. Wir liefern Einlasssteuerung, Besucherlenkung, VIP-Betreuung und Deeskalationsbereitschaft, immer in enger Abstimmung mit dem Veranstalter und den zuständigen Ordnungsbehörden.",
    typicalClients: "Veranstalter, Agenturen, Unternehmen mit Firmenevents, Kommunen und öffentliche Träger.",
    h1: "Veranstaltungsschutz & Eventsecurity",
    metaTitle: "Veranstaltungsschutz & Eventsecurity | Sentinel Services",
    metaDescription:
      "Veranstaltungsschutz mit erfahrenen Türstehern: Einlasskontrolle, Besucherlenkung, Deeskalation – für Firmenevents, Messen und Großveranstaltungen.",
    faqs: [
      { question: "Ab welcher Veranstaltungsgröße bieten Sie Schutz an?", answer: "Wir sichern Veranstaltungen jeder Größe – von Firmenfeiern mit 50 Gästen bis zu Großveranstaltungen mit mehreren tausend Besuchern." },
      { question: "Übernehmen Sie auch die Abstimmung mit dem Ordnungsamt?", answer: "Ja, wir unterstützen bei der Erstellung von Sicherheitskonzepten und koordinieren uns direkt mit den zuständigen Behörden." },
      { question: "Stellen Sie auch Türsteher für einzelne Abendveranstaltungen?", answer: "Ja, wir stellen geprüfte Türsteher und Ordner – inklusive Einlasskontrolle, Alterskontrolle und Konfliktbewältigung." },
    ],
  },
  {
    slug: "baustellenbewachung",
    icon: HardHat,
    title: "Baustellenbewachung",
    context: "Für Projektflächen mit hohem Materialwert oder Zugang außerhalb der Bauzeiten.",
    desc: "Nacht- und Wochenendbewachung mit dokumentierten Kontrollgängen und Zugangssicherung.",
    points: ["Nacht-/Wochenendpräsenz", "Materialschutz und Zufahrtskontrolle", "Sofortmeldung bei Vorfällen"],
    longDesc:
      "Baustellenbewachung, Brandwache und Nachtwache schützen Ihre Projektflächen genau dann, wenn keine Bauleitung vor Ort ist. Bei hohem Materialwert, offenen Zugängen und steigendem Risiko durch Metalldiebstahl sichern wir Zufahrten, kontrollieren Zugänge, dokumentieren Kontrollgänge und schützen Baumaterial sowie Gerätschaften.",
    typicalClients: "Bauunternehmen, Projektentwickler, Generalunternehmer, kommunale Bauträger.",
    h1: "Baustellenbewachung, Brandwache & Nachtwache",
    metaTitle: "Baustellenbewachung & Brandwache | Sentinel Services",
    metaDescription:
      "Baustellenbewachung in Nacht- und Wochenendlage, Brandwache nach DGUV und zuverlässige Nachtwache. §34a-geprüftes Personal, schnelle Meldekette bei Vorfällen.",
    faqs: [
      { question: "Welche Baustellen sichern Sie?", answer: "Wir sichern Baustellen jeder Größe – vom Einfamilienhaus bis zur Großbaustelle. Der Fokus liegt auf Flächen mit hohem Materialwert oder offenem Zugang." },
      { question: "Was passiert bei einem Vorfall auf der Baustelle?", answer: "Unsere Einsatzkräfte melden jeden Vorfall sofort an den Bauleiter und dokumentieren den Sachverhalt lückenlos." },
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
    longDesc:
      "Unser Empfangsdienst und Pfortendienst verbindet professionelle Sicherheitsfunktion mit erstklassigem Serviceauftritt – ähnlich einem klassischen Doorman: Besucherregistrierung, Schlüsselverwaltung, Telefonzentrale und diskreter Zutrittsschutz. Das Empfangspersonal wird auf Ihr Objekt, Ihre Unternehmenskultur und Ihre Sicherheitsstandards eingewiesen.",
    typicalClients: "Unternehmen mit Empfangsbereich, Mehrmieterobjekte, Kanzleien, Arztpraxen, Behörden.",
    h1: "Empfangsdienst & Pfortendienst",
    metaTitle: "Empfangsdienst & Pfortendienst | Sentinel Services",
    metaDescription:
      "Empfangsdienst, Pfortendienst und Doorman-Service: Besucherempfang, Schlüsselverwaltung, Telefonzentrale, Zutrittsprüfung – professionell und serviceorientiert.",
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
    longDesc:
      "Nicht jedes Objekt braucht permanente Besetzung – aber regelmäßige Kontrolle. Unser Revierdienst und Streifendienst umfasst geplante Revierfahrten, Alarm- und Störungsverfolgung, Nachtwache sowie dokumentierte Schließrunden. Die Kontrollpläne werden individuell auf Ihr Objekt, Ihre Betriebszeiten und Ihre Risikoschwerpunkte abgestimmt.",
    typicalClients: "Hausverwaltungen, Gewerbegebiete, Wohnanlagen, Industrieparks.",
    h1: "Revierdienst, Streifendienst & Nachtwache",
    metaTitle: "Revierdienst & Streifendienst | Sentinel Services",
    metaDescription:
      "Revierdienst, Streifendienst und Nachtwache mit geplanten Kontrollfahrten, Alarmverfolgung und Schließrunden – Bewachung ohne permanente Besetzung.",
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
    longDesc:
      "Ein professionelles Sicherheitskonzept ist mehr als die Summe einzelner Wachschichten: Wir analysieren Ihr Risikoprofil per strukturierter Risikoanalyse, entwickeln Maßnahmen aus einem Guss und setzen sie mit qualifiziertem Personal um. Als Bewachungsunternehmen mit §34a-Zulassung verantworten wir Konzepterstellung, Umsetzung und laufende Optimierung.",
    typicalClients: "Unternehmen mit komplexen Sicherheitsanforderungen, sensible Infrastruktur, Konzernstandorte.",
    h1: "Sicherheitskonzept erstellen – Risikoanalyse & Umsetzung",
    metaTitle: "Sicherheitskonzept erstellen lassen | Sentinel Services",
    metaDescription:
      "Sicherheitskonzept aus einer Hand: Risikoanalyse, Maßnahmenplan, Personalmodell und Reporting – durch ein zugelassenes Bewachungsunternehmen mit §34a-Erlaubnis.",
    faqs: [
      { question: "Was umfasst eine Risikoanalyse?", answer: "Wir bewerten Ihr Objekt hinsichtlich Lage, Zugänge, Betriebsabläufe, bekannter Risiken und vorhandener Schutzmaßnahmen – als Grundlage für ein passgenaues Sicherheitskonzept." },
      { question: "Wie oft wird das Sicherheitskonzept überprüft?", answer: "In der Regel vierteljährlich oder bei wesentlichen Änderungen der Rahmenbedingungen." },
    ],
  },
];

const reinigungServices: ServiceData[] = [
  {
    slug: "unterhaltsreinigung",
    icon: Sparkles,
    title: "Unterhaltsreinigung",
    context: "Tägliche oder regelmäßige Pflege von Büros, Praxen und Gewerbeobjekten.",
    desc: "Strukturierte Reinigungspläne nach Hygiene- und Arbeitsschutzvorgaben – mit dokumentierter Leistung.",
    points: ["Büro-, Sanitär- und Verkehrsflächen", "Festgelegter Reinigungsplan", "Einweisung & Qualitätskontrolle"],
    longDesc:
      "Unterhaltsreinigung in Büros, Praxen, Verwaltungsgebäuden und Gewerbeobjekten. Wir reinigen nach klaren Leistungsverzeichnissen, mit eingewiesenem Personal und nachvollziehbarer Qualitätssicherung. Reinigungsmittel und Frequenzen werden auf Objektart, Nutzung und Hygieneanforderungen abgestimmt.",
    typicalClients: "Büros, Verwaltungen, Praxen, Kanzleien, Mehrmieterobjekte.",
    h1: "Unterhaltsreinigung für Büro und Gewerbe",
    metaTitle: "Unterhaltsreinigung Büro & Gewerbe | Sentinel Services",
    metaDescription:
      "Zuverlässige Unterhaltsreinigung für Büros, Praxen und Gewerbeobjekte. Festes Personal, klare Leistungsverzeichnisse, dokumentierte Qualität.",
    faqs: [
      { question: "Wie oft wird gereinigt?", answer: "Die Reinigungsfrequenz richtet sich nach Nutzung und Hygieneanforderungen – von täglich bis wöchentlich. Wir erstellen einen passenden Reinigungsplan." },
      { question: "Setzen Sie umweltfreundliche Reinigungsmittel ein?", answer: "Ja, wir bevorzugen ökologisch verträgliche Reinigungsmittel und dosieren materialschonend." },
    ],
  },
  {
    slug: "glas-und-fensterreinigung",
    icon: GlassWater,
    title: "Glas- und Fensterreinigung",
    context: "Für Fenster, Glasfassaden, Wintergärten und Innenverglasungen.",
    desc: "Streifenfreie Reinigung mit Osmoseverfahren, Hebearbeitsbühnen oder klassischer Technik – je nach Objekt.",
    points: ["Innen- und Außenseiten", "Rahmen, Bänke und Beschattung", "Sichere Höhenarbeit"],
    longDesc:
      "Fensterreinigung und Glasreinigung für Bürogebäude, Ladenflächen, Wintergärten und private Objekte. Wir arbeiten mit Osmose-Wassersystemen, Teleskoptechnik oder Hebebühne – je nach Höhe und Zugänglichkeit. Rahmen, Fensterbänke und Beschattungselemente werden auf Wunsch mitgereinigt.",
    typicalClients: "Bürogebäude, Einzelhandel, Hotellerie, Wohnanlagen.",
    h1: "Fensterreinigung & Glasreinigung",
    metaTitle: "Fensterreinigung & Glasreinigung | Sentinel Services",
    metaDescription:
      "Professionelle Fensterreinigung und Glasreinigung für Gewerbe und Wohnobjekte. Streifenfreies Ergebnis, sichere Höhenarbeit, planbare Intervalle.",
    faqs: [
      { question: "Reinigen Sie auch in großen Höhen?", answer: "Ja, mit Hebebühnen, Teleskopstangen oder Industriekletter-Partnern – je nach Objekt und Sicherheitsanforderung." },
      { question: "In welchen Intervallen empfehlen Sie die Reinigung?", answer: "Für Bürogebäude meist quartalsweise, für Ladenfassaden monatlich. Wir erstellen einen Vorschlag passend zu Lage und Verschmutzungsgrad." },
    ],
  },
  {
    slug: "grundreinigung",
    icon: Brush,
    title: "Grundreinigung",
    context: "Intensive Reinigung von Bodenbelägen, Sanitär und Oberflächen – einmalig oder periodisch.",
    desc: "Tiefenreinigung mit professioneller Maschinen- und Chemietechnik, abgestimmt auf den Belag.",
    points: ["Bodenpflege & Einpflege", "Sanitärgrundreinigung", "Sonderreinigung nach Bedarf"],
    longDesc:
      "Grundreinigung als Tiefenreinigung von Bodenbelägen, Sanitärbereichen und Oberflächen – mit auf das Material abgestimmter Maschinen- und Reinigungsmitteltechnik. Klassisch ergänzend zur Unterhaltsreinigung in festen Intervallen oder einmalig nach Bedarf.",
    typicalClients: "Verwaltungen, Industrie, Hotellerie, Wohnanlagen.",
    h1: "Grundreinigung für Gewerbe & Verwaltung",
    metaTitle: "Grundreinigung Gewerbe & Industrie | Sentinel Services",
    metaDescription:
      "Grundreinigung für Böden, Sanitär und Oberflächen – mit passender Maschinen- und Chemietechnik. Sichtbare Ergebnisse, planbare Intervalle.",
    faqs: [
      { question: "Wann ist eine Grundreinigung sinnvoll?", answer: "Ergänzend zur Unterhaltsreinigung in festen Intervallen (z. B. jährlich) oder einmalig nach Mieterwechsel, Renovierung oder bei stark beanspruchten Belägen." },
      { question: "Welche Bodenbeläge reinigen Sie?", answer: "PVC, Linoleum, Naturstein, Fliesen, Teppich und mehr – jeweils mit passender Maschinen- und Pflegetechnik." },
    ],
  },
  {
    slug: "bauschluss-und-sonderreinigung",
    icon: Hammer,
    title: "Bauschluss- und Sonderreinigung",
    context: "Reinigung nach Umbau, Renovierung oder Mieterwechsel.",
    desc: "Entfernung von Bauschmutz, Klebe- und Farbresten – inklusive Erstreinigung vor Bezug.",
    points: ["Bauend- und Bauzwischenreinigung", "Erstreinigung vor Übergabe", "Sonderreinigung nach Vorfall"],
    longDesc:
      "Bauschluss- und Sonderreinigung nach Umbau, Renovierung oder Mieterwechsel: Entfernung von Bauschmutz, Klebe- und Farbresten, Erstreinigung vor Bezug sowie anlassbezogene Sonderreinigung nach Wasserschäden oder Vorfällen.",
    typicalClients: "Bauunternehmen, Projektentwickler, Hausverwaltungen, Vermieter.",
    h1: "Bauschlussreinigung & Sonderreinigung",
    metaTitle: "Bauschlussreinigung & Sonderreinigung | Sentinel Services",
    metaDescription:
      "Bauschluss-, Bauend- und Sonderreinigung: Bauschmutz, Klebe- und Farbreste entfernen, Erstreinigung vor Übergabe.",
    faqs: [
      { question: "Wie schnell können Sie nach Bauende reinigen?", answer: "Wir richten uns nach Ihrem Bauzeitplan und reinigen termingerecht vor Übergabe oder Bezug." },
    ],
  },
];

const gruenServices: ServiceData[] = [
  {
    slug: "pflege",
    icon: Trees,
    title: "Grünanlagenpflege",
    context: "Regelmäßige Pflege von Außenanlagen, Beeten und Rasenflächen.",
    desc: "Mähen, Heckenschnitt, Beetpflege und Laubentfernung – nach festem Pflegeplan.",
    points: ["Rasenmahd & Vertikutieren", "Hecken- und Strauchschnitt", "Beet- und Wegepflege"],
    longDesc:
      "Pflege von Grün- und Außenanlagen für Gewerbe-, Wohn- und öffentliche Objekte: Rasenmahd, Vertikutieren, Hecken- und Strauchschnitt, Beetpflege, Laubentfernung und Wegepflege. Wir arbeiten nach einem auf Ihr Objekt abgestimmten Jahres-Pflegeplan.",
    typicalClients: "Hausverwaltungen, Wohnanlagen, Gewerbeparks, Kommunen.",
    h1: "Grünanlagenpflege & Gartenpflege",
    metaTitle: "Grünanlagenpflege & Gartenpflege | Sentinel Services",
    metaDescription:
      "Pflege von Grünanlagen, Rasen und Hecken für Gewerbe- und Wohnobjekte. Fester Pflegeplan, dokumentierte Leistung, verlässliche Intervalle.",
    faqs: [
      { question: "Übernehmen Sie auch die Entsorgung des Grünschnitts?", answer: "Ja, der gesamte Grünschnitt wird fachgerecht abtransportiert und entsorgt." },
      { question: "Pflegen Sie auch das ganze Jahr?", answer: "Ja, wir bieten ganzjährige Pflegeverträge mit saisonal angepassten Leistungen." },
    ],
  },
  {
    slug: "baumpflege",
    icon: TreePine,
    title: "Baumpflege & Baumkontrolle",
    context: "Sachkundige Pflege, Schnitt und Verkehrssicherungsprüfung.",
    desc: "Kronenpflege, Totholzentfernung und Baumkontrolle nach FLL-Richtlinie.",
    points: ["Kronen- und Erziehungsschnitt", "Totholzentfernung", "Baumkontrolle (Verkehrssicherung)"],
    longDesc:
      "Baumpflege und Baumkontrolle durch geschultes Personal: Kronen- und Erziehungsschnitt, Totholzentfernung sowie regelmäßige Baumkontrollen zur Verkehrssicherungspflicht – nach den Vorgaben der FLL-Baumkontroll­richtlinie.",
    typicalClients: "Kommunen, Wohnungsunternehmen, Industriegelände, Hotellerie.",
    h1: "Baumpflege & Baumkontrolle",
    metaTitle: "Baumpflege & Baumkontrolle | Sentinel Services",
    metaDescription:
      "Baumpflege, Kronenschnitt und Baumkontrollen zur Verkehrssicherung – nach FLL-Richtlinie und mit dokumentiertem Ergebnis.",
    faqs: [
      { question: "Erstellen Sie Baumkataster?", answer: "Ja, auf Wunsch übernehmen wir auch die digitale Erfassung und Pflege Ihres Baumbestands." },
    ],
  },
  {
    slug: "winterdienst",
    icon: Snowflake,
    title: "Winterdienst",
    context: "Räum- und Streupflicht zuverlässig erfüllt.",
    desc: "Schneeräumung und Streudienst auf Wegen, Zufahrten und Parkflächen – rechtzeitig vor Arbeitsbeginn.",
    points: ["Schneeräumung", "Streudienst gemäß Vorgaben", "Dokumentation der Einsätze"],
    longDesc:
      "Winterdienst zur sicheren Erfüllung Ihrer Räum- und Streupflicht: Schnee räumen, Streumittel ausbringen, Wege und Zufahrten frei halten – vor Arbeits- und Schulbeginn und mit lückenloser Einsatzdokumentation als Nachweis.",
    typicalClients: "Hausverwaltungen, Gewerbeobjekte, Logistik, öffentliche Träger.",
    h1: "Winterdienst – Räum- und Streupflicht zuverlässig erfüllt",
    metaTitle: "Winterdienst für Gewerbe & Wohnobjekte | Sentinel Services",
    metaDescription:
      "Zuverlässiger Winterdienst: Schnee räumen, streuen, dokumentieren – pünktlich vor Arbeitsbeginn, mit Nachweis Ihrer Räum- und Streupflicht.",
    faqs: [
      { question: "Ab wann werden Sie aktiv?", answer: "Wir richten uns nach den gesetzlichen Vorgaben und Ihrem Objekt – in der Regel vor Arbeits- oder Schulbeginn." },
      { question: "Liefern Sie auch das Streugut?", answer: "Ja, Streumittel und Geräte gehören zum Leistungsumfang." },
    ],
  },
];

const facilityServices: ServiceData[] = [
  {
    slug: "technisches-fm",
    icon: Wrench,
    title: "Technisches Facility Management",
    context: "Betrieb, Wartung und Instandhaltung technischer Anlagen.",
    desc: "Inspektion, Wartung und Störungsbeseitigung – koordiniert mit Ihren Fachfirmen oder eigenen Kräften.",
    points: ["Inspektion & Wartung", "Störungsmanagement", "Koordination von Fachfirmen"],
    longDesc:
      "Technisches Facility Management für Gebäude und Anlagen: Inspektion, Wartung, Instandsetzung und Störungsbeseitigung. Wir koordinieren eigene Kräfte und Fachfirmen, dokumentieren Leistungen lückenlos und stellen Betreiberpflichten sicher.",
    typicalClients: "Eigentümer, Verwalter, Unternehmen mit eigenen Liegenschaften.",
    h1: "Technisches Facility Management",
    metaTitle: "Technisches Facility Management | Sentinel Services",
    metaDescription:
      "Technisches FM: Inspektion, Wartung, Instandhaltung und Störungsmanagement für Gebäude und Anlagen. Dokumentiert, terminsicher, betreiberkonform.",
    faqs: [
      { question: "Übernehmen Sie auch Wartungsverträge?", answer: "Ja, wir steuern Wartungsverträge mit Fachfirmen oder übernehmen Leistungen selbst." },
    ],
  },
  {
    slug: "infrastrukturelles-fm",
    icon: ClipboardList,
    title: "Infrastrukturelles Facility Management",
    context: "Reinigung, Sicherheit, Grünpflege und Winterdienst aus einer Hand.",
    desc: "Bündelung aller objektbezogenen Services über einen Ansprechpartner.",
    points: ["Reinigung & Hygiene", "Sicherheit & Empfang", "Außenanlagen & Winterdienst"],
    longDesc:
      "Infrastrukturelles Facility Management bündelt die operativen Services rund um Ihr Objekt: Reinigung, Sicherheit, Empfang, Grünpflege und Winterdienst – koordiniert über einen Ansprechpartner, mit einheitlichen Standards und gemeinsamer Reporting-Struktur.",
    typicalClients: "Unternehmen mit mehreren Standorten, Hausverwaltungen, Eigentümergemeinschaften.",
    h1: "Infrastrukturelles Facility Management",
    metaTitle: "Infrastrukturelles Facility Management | Sentinel Services",
    metaDescription:
      "Reinigung, Sicherheit, Grünpflege und Winterdienst aus einer Hand – ein Ansprechpartner, einheitliche Standards, gebündeltes Reporting.",
    faqs: [
      { question: "Was ist der Vorteil eines Komplettanbieters?", answer: "Weniger Schnittstellen, einheitliche Standards, ein Ansprechpartner und konsolidierte Berichte." },
    ],
  },
  {
    slug: "kaufmaennisches-fm",
    icon: Calculator,
    title: "Kaufmännisches Facility Management",
    context: "Vertrags-, Kosten- und Dienstleistersteuerung.",
    desc: "Transparente Steuerung von Verträgen, Kosten und externen Dienstleistern.",
    points: ["Vertrags- und Dienstleistersteuerung", "Reporting & Controlling", "Betreiberpflichten"],
    longDesc:
      "Kaufmännisches Facility Management: Steuerung von Verträgen und externen Dienstleistern, Reporting und Kostencontrolling, Unterstützung bei Betreiberpflichten – die wirtschaftliche Klammer um das technische und infrastrukturelle FM.",
    typicalClients: "Eigentümer, Investoren, Verwaltungen.",
    h1: "Kaufmännisches Facility Management",
    metaTitle: "Kaufmännisches Facility Management | Sentinel Services",
    metaDescription:
      "Kaufmännisches FM: Vertrags- und Dienstleistersteuerung, Reporting, Controlling, Betreiberpflichten – wirtschaftlich transparent und nachvollziehbar.",
    faqs: [
      { question: "Arbeiten Sie mit vorhandenen Dienstleistern?", answer: "Ja, wir steuern Ihre bestehenden Verträge oder bringen geprüfte Partner ein – je nach Bedarf." },
    ],
  },
];

export const divisions: DivisionData[] = [
  {
    slug: "sicherheit",
    shortLabel: "Sicherheit",
    title: "Sicherheit & Bewachung",
    claim: "Geprüftes Personal, klare Konzepte, dokumentierte Einsätze.",
    icon: Shield,
    primaryKeyword: "Sicherheitsdienst",
    intro:
      "Sicherheitsdienst und Wachdienst mit §34a-geprüftem Personal: Objektschutz, Veranstaltungsschutz, Baustellenbewachung, Empfangs- und Streifendienst sowie individuelle Sicherheitskonzepte – in einer Hand, mit fester Einsatzleitung.",
    h1: "Sicherheit & Bewachung – Sicherheitsdienst mit §34a",
    metaTitle: "Sicherheitsdienst & Wachdienst | Sentinel Services",
    metaDescription:
      "Sicherheitsdienst & Wachdienst: Objektschutz, Veranstaltungsschutz, Baustellenbewachung, Empfangs- und Streifendienst – §34a-geprüft, bundesweit.",
    keywords: "Sicherheitsdienst, Wachdienst, Sicherheitsfirma, Objektschutz, Werkschutz, Veranstaltungsschutz, Baustellenbewachung, Empfangsdienst, Streifendienst, Sicherheitskonzept, §34a",
    services: sicherheitServices,
  },
  {
    slug: "reinigung",
    shortLabel: "Reinigung",
    title: "Gebäudereinigung",
    claim: "Sauberkeit nach Plan – mit eingewiesenem Personal und nachvollziehbarer Qualität.",
    icon: SprayCan,
    primaryKeyword: "Gebäudereinigung",
    intro:
      "Gebäudereinigung für Büro, Gewerbe und Wohnobjekte: Unterhaltsreinigung, Glas- und Fensterreinigung, Grundreinigung sowie Bauschluss- und Sonderreinigung. Klare Leistungsverzeichnisse, eingewiesenes Personal und dokumentierte Qualität.",
    h1: "Gebäudereinigung – Unterhalt, Glas, Grund- und Sonderreinigung",
    metaTitle: "Gebäudereinigung für Büro & Gewerbe | Sentinel Services",
    metaDescription:
      "Gebäudereinigung aus einer Hand: Unterhaltsreinigung, Glas- & Fensterreinigung, Grundreinigung sowie Bauschluss- und Sonderreinigung – mit dokumentierter Qualität.",
    keywords: "Gebäudereinigung, Unterhaltsreinigung, Fensterreinigung, Glasreinigung, Grundreinigung, Bauschlussreinigung, Sonderreinigung",
    services: reinigungServices,
  },
  {
    slug: "gruenanlagen",
    shortLabel: "Grünanlagen",
    title: "Garten & Grünanlagen",
    claim: "Gepflegte Außenanlagen – ganzjährig, planbar, dokumentiert.",
    icon: Leaf,
    primaryKeyword: "Grünanlagenpflege",
    intro:
      "Pflege von Garten- und Grünanlagen für Gewerbe-, Wohn- und öffentliche Objekte: Rasen, Hecken, Beete, Baumpflege und Winterdienst – in festen Intervallen und nach klarem Pflegeplan.",
    h1: "Garten- & Grünanlagenpflege",
    metaTitle: "Grünanlagenpflege, Baumpflege & Winterdienst | Sentinel Services",
    metaDescription:
      "Pflege von Grünanlagen, Baumpflege nach FLL und zuverlässiger Winterdienst. Ganzjährige Pflegeverträge mit dokumentierter Leistung.",
    keywords: "Grünanlagenpflege, Gartenpflege gewerblich, Landschaftspflege, Baumpflege, Baumkontrolle, Winterdienst",
    services: gruenServices,
  },
  {
    slug: "facility-management",
    shortLabel: "Facility Management",
    title: "Facility Management",
    claim: "Ein Ansprechpartner für alle objektbezogenen Services.",
    icon: Building2,
    primaryKeyword: "Facility Management",
    intro:
      "Facility Management als Klammer über Sicherheit, Reinigung und Außenanlagen: technisches, infrastrukturelles und kaufmännisches FM aus einer Hand – mit einem Ansprechpartner und konsolidiertem Reporting.",
    h1: "Facility Management – Gebäudemanagement aus einer Hand",
    metaTitle: "Facility Management & Gebäudemanagement | Sentinel Services",
    metaDescription:
      "Facility Management aus einer Hand: technisches, infrastrukturelles & kaufmännisches FM – Reinigung, Sicherheit, Grünpflege und Vertragssteuerung.",
    keywords: "Facility Management, Gebäudemanagement, FM Dienstleister, technisches FM, infrastrukturelles FM, kaufmännisches FM",
    services: facilityServices,
  },
];

export const getDivision = (slug: string): DivisionData | undefined =>
  divisions.find((d) => d.slug === slug);

export const getDivisionAndService = (
  divisionSlug: string,
  serviceSlug: string,
): { division: DivisionData; service: ServiceData } | undefined => {
  const division = getDivision(divisionSlug);
  if (!division) return undefined;
  const service = division.services.find((s) => s.slug === serviceSlug);
  if (!service) return undefined;
  return { division, service };
};

export const findServiceAnywhere = (
  serviceSlug: string,
): { division: DivisionData; service: ServiceData } | undefined => {
  for (const d of divisions) {
    const s = d.services.find((x) => x.slug === serviceSlug);
    if (s) return { division: d, service: s };
  }
  return undefined;
};

export const allServices = (): { division: DivisionData; service: ServiceData }[] =>
  divisions.flatMap((d) => d.services.map((s) => ({ division: d, service: s })));
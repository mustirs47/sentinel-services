

# Sentinel Services – Komplette Website

## Überblick

Die bestehende "Coming Soon"-Platzhalterseite wird durch eine vollständige, professionelle Sicherheitsdienstleister-Website ersetzt. Das Design folgt dem Prinzip: **dunkler Hero, helle Inhaltsflächen, blaue Akzente** – seriös, nicht generisch.

## Farbschema-Anpassung

Das aktuelle Theme ist komplett dunkel. Für die neue Seite wird ein **duales Farbschema** eingeführt:
- **Dunkle Bereiche**: Hero, Footer, CTA-Bänder (bestehendes Dark-Theme)
- **Helle Inhaltsflächen**: Weißer/Off-White Hintergrund mit dunklem Text für die Hauptsektionen
- **Primärfarbe bleibt**: Das kräftige Blau (`205 90% 55%`)

## Seitenstruktur (Single Page zunächst, Unterseiten als Routing vorbereitet)

### Komponenten die erstellt werden:

1. **Topbar** – Schmaler Streifen oben: "24/7 erreichbar" | Telefon | E-Mail | Rückruf anfordern
2. **Header/Navigation** – Logo + Nav (Leistungen, Branchen, Über uns, Qualifikationen, Karriere, Kontakt) + CTA "Anfrage stellen", mobil als Hamburger-Menü
3. **HeroSection** – Dunkler Hintergrund, H1 + Subline + 2 CTAs + Trust-Facts (4 Punkte)
4. **TrustBar** – 6 Kacheln (Zulassungen, Ausbildungen, Einsatzdokumentation, feste Ansprechpartner, diskretes Auftreten, schnelle Reaktionswege)
5. **ServicesSection** – 6 Leistungskarten mit je Titel, Beschreibung, 3 Stichpunkte, "Mehr erfahren"-Link
6. **IndustriesSection** – 8 Branchenkacheln mit Herausforderung + Leistung
7. **WhyUsSection** – 6 Qualitätsmerkmale in 2x3 oder 3x2 Grid
8. **TeamSection** – Platzhalter-Porträts + Kompetenzfelder + Rollen
9. **QualificationsSection** – 2-Spalten: Liste der Nachweise + Bedeutung für Kunden + Download-Bereich
10. **ProcessSection** – 4 Schritte: Anfrage → Bedarfsermittlung → Angebot → Umsetzung
11. **ReferencesSection** – "Typische Einsatzszenarien" (Variante B, ehrlich)
12. **InsightsSection** – 3-4 Fachbeitrags-Karten (Checklisten, Tipps)
13. **CareerSection** – Arbeitgeberbotschaft + Werte + CTA "Jetzt bewerben"
14. **ContactSection** – 2 Spalten: Kontaktinfos links, Formular rechts (Name, Unternehmen, Einsatzort, Leistung, Zeitraum, Nachricht + Optionen)
15. **Footer** – Logo, Kurzclaim, Navigation, Impressum, Datenschutz

### Routing

- `/` – Startseite (alle Sektionen)
- `/impressum` – Impressum (Platzhalter)
- `/datenschutz` – Datenschutz (Platzhalter)
- Weitere Unterseiten (Leistungen, Branchen etc.) werden als Navigation-Anker auf der Startseite vorbereitet

## Dateien

```text
src/
├── components/
│   ├── layout/
│   │   ├── Topbar.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TrustBar.tsx
│       ├── ServicesSection.tsx
│       ├── IndustriesSection.tsx
│       ├── WhyUsSection.tsx
│       ├── TeamSection.tsx
│       ├── QualificationsSection.tsx
│       ├── ProcessSection.tsx
│       ├── ReferencesSection.tsx
│       ├── InsightsSection.tsx
│       ├── CareerSection.tsx
│       └── ContactSection.tsx
├── pages/
│   ├── Index.tsx (komplett neu: montiert alle Sektionen)
│   ├── Impressum.tsx
│   └── Datenschutz.tsx
└── index.css (erweitert um helle Section-Variablen)
```

## Design-Prinzipien

- **Sprache**: Konkret, ruhig, einsatznah. Keine leeren Superlative.
- **Abwechslung**: Dunkle Sektionen (Hero, Warum Sentinel, Karriere, Footer) wechseln mit hellen (Leistungen, Branchen, Team, Kontakt)
- **Platzhalter-Bilder**: Lucide-Icons statt Stock-Fotos, mit Hinweis wo echte Bilder eingesetzt werden sollten
- **Responsive**: Mobile-first, Hamburger-Menü, gestapelte Grids auf kleinen Screens
- **Scroll-Animationen**: Dezente Fade-in per Intersection Observer (wie bisher)
- **Formulare**: Client-side Validierung, aber kein Backend – Formular sendet per `mailto:` oder zeigt Bestätigung

## Technische Details

- Neue CSS-Variablen für helle Sektionen (inline Tailwind-Klassen, z.B. `bg-white text-gray-900`)
- Smooth-Scroll für Anker-Navigation
- Sticky Header mit Backdrop-Blur
- Mobile Hamburger-Menü mit Sheet-Komponente
- Alle Platzhalter-Texte exakt wie in der Vorgabe


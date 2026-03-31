

# Redesign: Landingpage straffen + Unterseiten aufwerten + visuelles Design modernisieren

## Kernprobleme

1. **Landingpage**: Zu viele Sektionen mit Textwänden, monotones Kartenraster, keine visuelle Abwechslung
2. **Unterseiten**: Zu kurz, nur ein Kartenraster + CTA, kein Storytelling, keine Tiefe
3. **Überall**: Gleicher visueller Rhythmus (Icon + Text + Bullet-Liste), keine Akzente, keine Spannung

## Designstrategie

### A. Landingpage straffen und visuell auflockern

**Homepage besteht aktuell aus 11 Sektionen** -- zu viel. Reduzierung auf 8 Sektionen, die visuell abwechslungsreicher sind:

1. **Hero** -- bleibt, wird kompakter (weniger Padding)
2. **TrustBar** -- bleibt als schmale Zeile
3. **ServicesSection** -- bleibt als 3er-Grid, aber mit Hover-Animationen und visuell stärkeren Karten (farbiger Top-Border, größere Icons)
4. **WhyUsSection (Betriebsmodell)** -- visuelles Redesign: horizontale Timeline mit Nummern statt gleichförmiger Textblöcke, mit einem farbigen Connector-Line zwischen den Schritten
5. **IndustriesSection** -- kompakter: 2-Zeilen-Grid mit Icons, kein Fließtext, nur Titel + "Mehr erfahren"-Link
6. **ReferencesSection (Einsatzbilder)** -- Redesign als "Spotlight"-Karten mit farbigem Seitenstreifen und visueller Hierarchie
7. **ContactSection** -- bleibt
8. **FAQSection** -- bleibt

**Entfernt von der Homepage** (leben nur noch als Unterseiten):
- TeamSection (lebt auf /arbeitsweise)
- QualificationsSection (lebt auf /qualifikationen)
- ProcessSection (lebt auf /kontakt als "So läuft es ab")
- CareerSection (lebt auf /karriere)

### B. Unterseiten deutlich aufwerten

Jede Unterseite bekommt **mehr Tiefe und visuellen Rhythmus**:

**Leistungen.tsx**: 
- Hero mit kurzem Intro-Text
- 6er-Grid mit hover-fähigen Karten (gradient top-border, shadow on hover)
- Darunter: "Warum Sentinel"-Vertrauenszeile (3 Punkte nebeneinander)
- CTA-Block

**LeistungDetail.tsx**:
- Hero mit Breadcrumb
- Zweispaltiges Layout: links Fließtext + Bullet-Punkte, rechts "Auf einen Blick"-Sidebar mit typischen Kunden, Trust-Signalen und CTA
- FAQ-Accordion
- Verknüpfte Leistungen als Karten-Row

**Branchen.tsx**:
- Größere Karten mit mehr Detail-Text pro Branche
- Jede Karte bekommt einen farbigen Akzentstreifen links
- Pro Branche: typische Risiken + passende Leistungen als Chips
- CTA-Block am Ende

**Qualifikationen.tsx**:
- Visuelleres Layout: große Zahlen/Badges statt nur Bullet-Listen
- Fortschrittsbalken-artige Darstellung der Qualifikationsgruppen
- "Relevanz für Kunden"-Box mit hellem Hintergrund und Icon
- Zusätzlich: Zusammenfassungs-Karte oben ("4 Qualifikationsgruppen, XX+ Nachweise")
- CTA + FAQ am Ende

**Arbeitsweise.tsx**:
- Vertikale Timeline mit Nummern und Connector-Lines statt flache Textblöcke
- Jeder Schritt bekommt ein farbiges Badge und ein hervorgehobenes Detail-Feld
- Am Ende: Team-Kompetenzfelder (übernommen von TeamSection)
- CTA

**KarrierePage.tsx**:
- Hero mit einladendem Ton
- Dreispaltiges Layout: "Was wir erwarten" | "Was wir bieten" | "Einsatzfelder"
- Visueller Bewerbungsprozess als 3-Schritt-Zeile
- FAQ am Ende

**KontaktPage.tsx**:
- Zweispaltiges Layout bleibt
- Zusätzlich: 4-Schritt-Prozess (von ProcessSection) als kompakte Zeile über dem Formular
- Stärkere visuelle Trust-Signale neben dem Formular

### C. Globale visuelle Verbesserungen

- **Gradient-Akzente**: Primärfarbener Top-Border auf allen Karten (2-3px gradient)
- **Staggered Animations**: Karten erscheinen versetzt statt alle gleichzeitig
- **Visuelle Trenner**: Zwischen Sektionen dezente Divider mit Icon oder Muster
- **Größere Icons**: Von h-5/w-5 auf h-6/w-6 in Feature-Karten
- **Bessere Typografie-Hierarchie**: Mehr Gewichtsunterschiede, Headlines größer
- **Counter/Stats-Elemente**: Wo möglich Zahlen hervorheben (z.B. "4 Phasen", "6 Leistungen", "8 Branchen")

## Technische Umsetzung

### Geänderte Dateien

| Datei | Änderung |
|---|---|
| `src/pages/Index.tsx` | Sektionen reduzieren (Team, Qualifikationen, Process, Career raus) |
| `src/components/sections/ServicesSection.tsx` | Gradient-Border Karten, staggered fade-in |
| `src/components/sections/WhyUsSection.tsx` | Timeline-Design mit Connector-Lines |
| `src/components/sections/IndustriesSection.tsx` | Kompakter, visuellere Karten |
| `src/components/sections/ReferencesSection.tsx` | Spotlight-Karten mit Seitenstreifen |
| `src/pages/Leistungen.tsx` | Vertrauenszeile hinzufügen, visuellere Karten |
| `src/pages/LeistungDetail.tsx` | Zweispaltiges Layout mit Sidebar |
| `src/pages/Branchen.tsx` | Größere Karten, Risiken + Akzentstreifen |
| `src/pages/Qualifikationen.tsx` | Summary-Karte, Badge-Darstellung, FAQ hinzufügen |
| `src/pages/Arbeitsweise.tsx` | Vertikale Timeline, Team-Kompetenz-Block unten |
| `src/pages/KarrierePage.tsx` | 3-Spalten, Bewerbungsprozess-Zeile |
| `src/pages/KontaktPage.tsx` | Prozess-Zeile über Formular |
| `src/index.css` | Staggered animation utilities, gradient-border utility |

### Neue CSS-Utilities in `index.css`

```css
/* Staggered children animation */
.stagger-children > * { ... }

/* Gradient top border for cards */  
.card-accent { border-top: 3px solid hsl(var(--primary)); }

/* Timeline connector */
.timeline-connector { ... }
```

Keine neuen Dependencies. Keine neuen Dateien nötig -- alles Umbau bestehender Komponenten.


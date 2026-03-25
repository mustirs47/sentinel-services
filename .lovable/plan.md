

# Umfassende Überarbeitung V3 – SEO, Conversion, Crawlability & Vertrauenshärte

Basierend auf der zweiten ChatGPT-Analyse. Kernproblem: Die Seite ist inhaltlich besser, aber architektonisch noch ein One-Pager, conversion-schwach und nicht indexierbar.

---

## P0 – Muss vor Launch gelöst werden

### 1. Multi-Page-Architektur aufbauen
Die wichtigste strukturelle Änderung. Der One-Pager wird zu einer echten Seitenstruktur mit eigenen URLs, eigenem H1 und eigenem Meta-Title/Description pro Seite.

**Neue Routen in `App.tsx`:**
- `/leistungen` – Übersicht aller Leistungen
- `/leistungen/objektschutz`, `/leistungen/veranstaltungsschutz`, `/leistungen/baustellenbewachung`, `/leistungen/empfangs-und-pfortendienst`, `/leistungen/kontroll-und-streifendienst`, `/leistungen/sicherheitskonzepte`
- `/branchen` – Übersicht
- `/qualifikationen` – eigene Seite
- `/arbeitsweise` – Betriebsmodell
- `/karriere` – eigene Seite
- `/kontakt` – eigene Seite

**Neue Dateien:**
- `src/pages/Leistungen.tsx` (Übersicht)
- `src/pages/LeistungDetail.tsx` (Template für Einzelleistungen mit FAQ)
- `src/pages/Branchen.tsx`
- `src/pages/Qualifikationen.tsx`
- `src/pages/Arbeitsweise.tsx`
- `src/pages/Karriere.tsx`
- `src/pages/Kontakt.tsx`
- `src/components/layout/PageLayout.tsx` (Wrapper: Topbar + Header + Footer)
- `src/components/SEOHead.tsx` (React Helmet für Title/Meta pro Seite)
- `src/data/services.ts` (Leistungsdaten ausgelagert, wiederverwendbar)
- `src/data/industries.ts` (Branchendaten ausgelagert)

**Homepage bleibt bestehen** als kompakte Übersicht mit Teasern + Links zu den Unterseiten.

### 2. Hero search- und conversion-stärker machen
- H1 mit Primär-Keyword: z.B. "Professioneller Sicherheitsdienst – Objektschutz, Veranstaltungsschutz, Baustellenbewachung"
- Subline mit konkretem Nutzen statt nur Markenclaim
- Sekundär-CTA "Kurzfristigen Einsatz anfragen" für Dringlichkeitsfälle
- Topbar: Telefonnummer sichtbar machen (echte Nummer oder Platzhalter mit klarem Hinweis)

**Dateien:** `HeroSection.tsx`, `Topbar.tsx`, `Header.tsx`

### 3. Telefonnummer sichtbar machen
- In Topbar, Header (Desktop), Hero-Bereich und Kontaktsektion
- Mobil: Sticky Call-Button am unteren Bildschirmrand
- `src/components/layout/StickyCallButton.tsx` (neu)
- Wenn keine echte Nummer vorhanden: "Telefonisch erreichbar: 10–18 Uhr" mit Nummer, oder "Telefonnummer auf Anfrage" entfernen und durch echte ersetzen

### 4. Einsatzgebiet konsistent machen
- Footer zeigt aktuell "NRW und angrenzende Regionen", Kontaktsektion sagt "Bundesweit"
- **Entscheidung:** Einheitlich "Bundesweit" oder einheitlich "NRW + angrenzende Regionen"
- In Footer, Kontaktsektion und ggf. Hero konsistent setzen

**Dateien:** `Footer.tsx`, `ContactSection.tsx`

### 5. index.html SEO-Grundlagen
- Title: "Sentinel Services – Sicherheitsdienst für Objektschutz, Veranstaltungsschutz & Baustellenbewachung"
- Meta Description: keywordreich, mit Handlungsaufforderung
- OG-Tags aktualisieren (aktuell steht noch "Demnächst verfügbar")
- Canonical-Tag setzen

**Datei:** `index.html`

### 6. Kontaktbereich conversion-stark machen
- Trust-Signale direkt neben dem Formular: §34a, Rückmeldung < 24h, fester Ansprechpartner
- Zwei CTA-Pfade: "Planbare Anfrage" vs. "Kurzfristiger Einsatzbedarf" (prominenter Hinweis)
- Telefonnummer sichtbar im Kontaktblock

**Datei:** `ContactSection.tsx`

---

## P1 – Direkt nach P0

### 7. FAQ-Bereich für SEO + Einwandbehandlung
- Neue Komponente `src/components/sections/FAQSection.tsx`
- Auf Homepage und auf Leistungs-Detailseiten (je mit leistungsspezifischen Fragen)
- Typische Fragen: Zulassung, Reaktionszeit, Einsatzgebiet, Kosten, Mindestlaufzeit, Nacht-/Wochenenddienste

### 8. Leistungs-Detailseiten mit eigenem SEO-Fokus
Jede Leistung bekommt eine eigene Seite mit:
- Eigenem H1 (z.B. "Baustellenbewachung – Nacht- und Wochenendschutz für Projektflächen")
- Ausführliche Beschreibung, Einsatzkontext, typische Kunden
- 3-5 FAQ pro Leistung
- CTA mit leistungsspezifischer Ansprache
- Interne Links zu verwandten Branchen und Qualifikationen

### 9. Team-/Expertise-Bereich weiter schärfen
- Konkretere Erfahrungsangaben (z.B. "Über X Jahre operative Erfahrung in...")
- Klarere Verantwortungsprofile
- Optional: "Geschäftsführung" als eigenen Profilblock

**Datei:** `TeamSection.tsx`

### 10. Interne Verlinkung
- Leistungskarten auf Homepage verlinken auf `/leistungen/[slug]` statt nur `#kontakt`
- Branchenkarten verlinken auf Branchenseiten oder relevante Leistungen
- Footer-Navigation auf echte Seiten statt nur Anker
- Qualifikationen und Betriebsmodell verlinken auf eigene Seiten

**Dateien:** `ServicesSection.tsx`, `IndustriesSection.tsx`, `Footer.tsx`, `Header.tsx`

### 11. Insights reaktivieren (optional, nur mit echtem Content)
- Wenn 2-3 echte Fachbeiträge vorhanden: wieder einblenden
- Sonst weiterhin ausgeblendet lassen

---

## Technische Umsetzung

### Neue Dateien (ca. 15)

| Datei | Zweck |
|---|---|
| `src/components/layout/PageLayout.tsx` | Wrapper mit Topbar, Header, Footer |
| `src/components/SEOHead.tsx` | react-helmet-async für Meta-Tags pro Seite |
| `src/components/sections/FAQSection.tsx` | Accordion-FAQ mit strukturierten Daten |
| `src/components/layout/StickyCallButton.tsx` | Mobiler Sticky-Anruf-Button |
| `src/data/services.ts` | Leistungsdaten zentral |
| `src/data/industries.ts` | Branchendaten zentral |
| `src/pages/Leistungen.tsx` | Leistungsübersicht |
| `src/pages/LeistungDetail.tsx` | Einzelleistung mit FAQ |
| `src/pages/Branchen.tsx` | Branchenübersicht |
| `src/pages/Qualifikationen.tsx` | Qualifikationen eigene Seite |
| `src/pages/Arbeitsweise.tsx` | Betriebsmodell eigene Seite |
| `src/pages/Karriere.tsx` | Karriere eigene Seite |
| `src/pages/Kontakt.tsx` | Kontakt eigene Seite |

### Bestehende Dateien die geändert werden

| Datei | Änderung |
|---|---|
| `App.tsx` | Alle neuen Routen registrieren |
| `index.html` | Title, Meta, OG-Tags, Canonical |
| `HeroSection.tsx` | Keyword-H1, Dringlichkeits-CTA |
| `Topbar.tsx` | Telefonnummer einbauen |
| `Header.tsx` | Navigation auf echte Seiten umstellen, Telefonnummer Desktop |
| `Footer.tsx` | Einsatzgebiet konsistent, Navigation auf echte URLs |
| `ContactSection.tsx` | Trust-Signale am Formular, Dringlichkeits-CTA |
| `ServicesSection.tsx` | Links auf Leistungs-Detailseiten |
| `IndustriesSection.tsx` | Links auf Branchenseiten |
| `Index.tsx` | FAQ-Sektion einbinden, Insights ggf. reaktivieren |
| `MobileMenu.tsx` | Navigation auf echte Seiten |

### Dependency
- `react-helmet-async` für SEO-Meta-Tags pro Route

### Design-Prinzipien
- Homepage wird kompakter: Sektionen als Teaser mit "Mehr erfahren"-Links
- Unterseiten bekommen vollständige Inhalte
- Jede Seite hat eigenen Title, Description, H1
- FAQ nutzt bestehende Accordion-Komponente


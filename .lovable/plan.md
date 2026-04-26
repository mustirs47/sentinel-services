# Website-Audit Sentinel Services

Ich habe die Seite aus Besucher- und Designer-Perspektive analysiert. Unten findest du Befunde und konkrete Verbesserungen, sortiert nach Priorität. Am Ende kannst du auswählen, was umgesetzt werden soll.

---

## P0 — Kritisch (Seriosität / Rechtssicherheit)

### 1. Impressum & Datenschutz enthalten Platzhalter

Im Impressum stehen noch `[Vorname Nachname]`, `[Straße]`, `[USt-IdNr.]`, `[Registernummer]`, `[Aufsichtsbehörde]`. Das ist **abmahnfähig** und zerstört Vertrauen sofort, falls ein Interessent es liest.

- **Fix**: Echte Daten einsetzen oder einen sichtbaren Hinweis "Diese Seite befindet sich im Aufbau" plus Kontaktangabe. Mindestens muss ein Verantwortlicher mit ladungsfähiger Adresse her.

### 2. Kontaktformular ist nicht funktional

`handleSubmit` setzt nur `submitted=true` — es wird **keine E-Mail** verschickt, **keine Datenbank** beschrieben. Anfragen gehen verloren. Außerdem fehlt die DSGVO-Pflicht-Checkbox ("Ich stimme der Verarbeitung gemäß Datenschutzerklärung zu").

- **Fix**: FormSubmit implementierung mit info@sentinel-services.de + Resend für E-Mail-Versand, plus Pflicht-Consent-Checkbox mit Link zur Datenschutzerklärung. Optional Honeypot/Rate-Limit gegen Spam.

### 3. Sitemap / Canonical zeigen auf `lovable.app`

`public/sitemap.xml`, `index.html` (canonical, og:image) und `StructuredData.tsx` verwenden `https://sentinel-services.lovable.app` statt der Custom Domain `https://www.sentinel-services.de`. Das schadet SEO (Duplicate Content / falsche kanonische URL).

- **Fix**: Alle URLs auf `https://www.sentinel-services.de` umstellen.

---

## P1 — Hoch (User Experience & Conversion)

### 4. Hero-Headline ist überladen

Aktuell drei Themen in einem H1: "Objektschutz, Veranstaltungsschutz & Baustellenbewachung". Liest sich wie ein Keyword-Stuffing.

- **Fix**: Klare Nutzen-Headline + Keywords als Sub-Zeile. Beispiel: *"Sicherheit, die im Einsatz funktioniert."* — Sub: *"Objektschutz, Veranstaltungen und Baustellen — bundesweit, §34a-zugelassen, mit fester Einsatzleitung."*

### 5. CTA-Hierarchie unklar

Zwei gleich starke CTAs ("Kostenlose Erstberatung" + "Kurzfristigen Einsatz anfragen"). Beide führen praktisch zum gleichen Ziel.

- **Fix**: Primärer CTA ist klar dominant (Kontakt/Anfrage), sekundärer ist eindeutig anders ("Leistungen ansehen" oder "Direkt anrufen" mit Telefonnummer sichtbar).

### 6. Keine echten Social-Proof-Elemente

Es gibt keine Testimonials, keine Kundenlogos, keine Fallzahlen ("X Einsätze pro Jahr"), keine Bewertungen. "Typische Einsatzbilder" sind hilfreich, aber fiktiv-wirkende Szenarien.

- **Fix**: Mindestens 1 Sektion mit Kundenstimme(n), Logo-Leiste (auch anonymisiert: "Hausverwaltung in NRW", "Mittelständischer Bauträger"), oder Zahlen wie "200+ gesicherte Einsätze".

### 7. Telefonnummer Erreichbarkeit widersprüchlich

Hero-Trust-Signal sagt "Telefonisch erreichbar", aber Footer/Topbar präzisieren "Mo–Fr 10–18 Uhr". Für einen Sicherheitsdienst mit Notfall-Anspruch ist 10–18 Uhr extrem knapp.

- **Fix**: Entweder echte 24/7-Notrufnummer ergänzen ("Notfall-Hotline: …, sonst Mo–Fr 10–18 Uhr"), oder ehrliche Formulierung wie "Reaktion innerhalb 24 h, Notfall-Rückruf möglich".

### 8. Preise/Modelle nicht angedeutet

Interessenten wollen mindestens grob wissen: Stundensatz-Bereich? Pauschale? Mindestlaufzeit? Aktuell null Information dazu.

- **Fix**: Eine kurze "Preise & Konditionen"-Box oder FAQ-Antwort: "Stundensätze beginnen bei … €, abhängig von Qualifikation, Einsatzzeit und Lage. Kostenfreies Angebot innerhalb 24 h."

---

## P2 — Mittel (Design & Polish)

### 9. Bildqualität & Performance

Illustrationen sind als PNG zwischen **286 KB und 902 KB** — `service-baustelle.png` allein ist 902 KB. Insgesamt **~5 MB Illustrationen**. Auf Mobile ein klarer LCP-/Bandbreiten-Killer, obwohl auf Mobile eh ausgeblendet (`hidden lg:`) — dennoch lädt der Browser sie.

- **Fix**: PNGs in WebP konvertieren (typisch −70 %), optional `loading="lazy"` + `<picture>` mit Source-Set, große Hintergrund-Illustrationen mit `media`-Query nur Desktop laden.

### 10. Logo-SVGs sind 290–310 KB

Das ist außergewöhnlich groß für SVG — vermutlich enthalten sie eingebettete Raster. PNG-Versionen (5 KB) liegen daneben, werden aber nicht genutzt.

- **Fix**: SVG bereinigen (SVGO) oder die kleineren PNGs nutzen.

### 11. Mobile: Illustrationen komplett weg

Auf Mobile (`hidden lg:flex`) verschwinden alle Illustrationen. Mobile Hero wirkt dann textlastig.

- **Fix**: Eine kompakte, kleinere Variante (z. B. unterhalb der Headline, max. 200 px hoch) statt komplett ausblenden — schafft visuelle Wärme.

### 12. Branchen-Sektion ist sehr karg

8 kleine Karten ohne Beschreibung, alle linken auf dieselbe `/branchen`-Seite (kein Anchor zum jeweiligen Eintrag).

- **Fix**: Anchor-Links (`/branchen#einzelhandel`) + Hover-Tooltip mit Kurzbeschreibung. Alternativ 1-Zeilen-Detail unter dem Titel.

### 13. Footer hat keine Adresse

Standard-Erwartung im DACH-Raum: Adresse + ggf. Karte im Footer. Aktuell nur Telefon/E-Mail.

- **Fix**: Adresse + Map-Link ergänzen (sobald rechtsverbindlich).

### 14. Outline-Buttons bleiben unsicher auf hellem Hintergrund

Im Light-Section sind Outline-Buttons mit `border-primary/30` recht zart und können untergehen.

- **Fix**: Auf hellen Sektionen kontrastreichere Variante (`border-primary/60` oder gefüllter Sekundärbutton).

---

## P3 — Inhaltliche Lücken

### 15. Fehlende Themen, die Käufer suchen

- **Versicherungsschutz / Haftpflichtsumme**: Wichtigstes B2B-Kriterium — aktuell nirgendwo erwähnt.
- **Datenschutz im Einsatz** (Bodycam, Besucherregistrierung, Auftragsverarbeitung nach Art. 28 DSGVO).
- **Tariftreue / Bezahlung des Personals** (Mindestlohn Sicherheitsgewerbe, Tarifbindung).
- **Reaktionszeit-Garantien** (Anfahrt, Alarmverfolgung).
- **Subunternehmer ja/nein** — Interessenten fragen das oft.
- **Sprachen des Personals** (Deutsch/Englisch/weitere).

### 16. Karriere-Seite ohne Bewerbungs-Kanal

Die Karriere-Seite existiert, aber vermutlich kein konkretes Formular oder Stellenliste mit Standorten / Schichten.

- **Fix**: Mindestens E-Mail-Adresse `info@…` + Stellenarten + Bewerbungslink.

### 17. Blog/Insights leer

Es gibt eine `InsightsSection.tsx`, die nicht in `Index.tsx` eingebunden ist. SEO-Potenzial verschenkt (Themen wie "Was kostet ein Sicherheitsdienst?", "§34a Sachkunde erklärt").

- **Fix**: Entweder kleinen Ratgeber-Bereich aufbauen oder Komponente entfernen.

---

## P4 — Technik & SEO

### 18. Keine Cookie-/Consent-Banner

Falls später Tracking (GA, Meta Pixel) ergänzt wird, braucht es Consent. Aktuell wirkt das ohne Tracking ok — aber sobald die Seite Web-Fonts von Google etc. lädt, ist es relevant.

### 19. Strukturierte Daten unvollständig

`LocalBusiness` ist gut, aber:

- Keine `address` (PostalAddress) — Pflicht für Local SEO
- Kein `aggregateRating` (sobald Reviews existieren)
- Service-Detailseiten haben `ServiceJsonLd`, aber kein `BreadcrumbList`

### 20. Bilder ohne `alt` oder mit leerem `alt`

Hero-BG `alt=""` ist korrekt (dekorativ), aber Illustrationen in `PageHero` haben `alt=""` obwohl sie inhaltlich relevant sind.

- **Fix**: Sprechende `alt`-Texte für Screenreader/SEO.

### 21. Kein 404-Asset / Sitemap unvollständig

Sitemap geprüft — fehlt z. B. `/impressum`, `/datenschutz` (für Vollständigkeit, auch wenn niedrige Priorität).

---

## Vorgeschlagene Umsetzungs-Reihenfolge

**Sprint 1 (rechtlich + funktional):**

- Impressum/Datenschutz mit echten Daten füllen
- Kontaktformular mit echtem Versand (Lovable Cloud + Resend) + DSGVO-Consent
- URLs auf Custom Domain umstellen (sitemap, canonical, JSON-LD)

**Sprint 2 (Conversion):**

- Hero-Headline neu, CTA-Hierarchie schärfen
- Sektion mit Social Proof / Zahlen / Testimonial-Slot
- Preis-/Konditionsblock + Reaktionszeit-Aussage präzisieren
- Versicherungs-/Tariftreue-Hinweise

**Sprint 3 (Performance + Polish):**

- Illustrationen WebP + Lazy + Mobile-Variante
- Logo-SVGs bereinigen
- Branchen-Karten anreichern, Footer-Adresse
- Strukturierte Daten erweitern, Sitemap ergänzen

---

## Frage an dich

Damit ich loslegen kann: Welche Sprints / Themen sollen wir zuerst angehen? Du kannst mir gerne auch einzelne Punkte (per Nummer) nennen, die du priorisieren möchtest.
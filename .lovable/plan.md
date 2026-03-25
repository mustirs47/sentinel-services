

# Umfassende Überarbeitung – Sentinel Services Website

Basierend auf der ChatGPT-Analyse wird die gesamte Seite inhaltlich und visuell überarbeitet. Kernproblem: Die Seite ist strukturell solide, aber zu generisch, zu kartenlastig und in den Vertrauensbereichen zu schwach.

---

## Priorität A – Sofort

### 1. Hero komplett neu gewichten
- Navigation als klare, kompakte Kopfzeile (Logo größer/sichtbarer, weniger dominant im Hero-Bereich)
- Hero kompakter: weniger leere Fläche, Headline + Subline + **ein** klarer Primär-CTA dominant, Sekundär-CTA zurückgenommen
- Trust-Facts nicht als schwerer Nebenblock, sondern als flache Zeile **unter** der Hero-Botschaft
- Höherer Kontrast auf allen Texten (blasse `muted-foreground` Stufen überarbeiten)

### 2. Team-Sektion komplett neu konzipieren
- Weg vom generischen KI-Teamfoto + abstrakter Rollenliste
- Stattdessen: **Kompetenz-Profil-Block** mit konkreten Führungsrollen, Fachschwerpunkten, Erfahrungshintergründen und Haltung
- Rollen wie "Einsatzleitung", "Kundenverantwortung", "Qualitätssicherung" mit je 2-3 Sätzen echtem Profil statt einer Zeile
- Wenn keine echten Fotos: sachlicher Kompetenzaufbau ohne künstliche Szenerie (Icon-basiert statt Fake-Teamfoto)

### 3. Qualifikationen von vage auf belastbar
- Strukturierte Darstellung in **Nachweisgruppen** (nicht eine flache Liste):
  - Gewerberechtliche Grundlage (§34a GewO, Gewerbeerlaubnis)
  - Fachliche Qualifikation (Sachkundeprüfung, Unterrichtungsverfahren)
  - Zusatzqualifikationen (Erste Hilfe, Brandschutz, Deeskalation)
  - Betriebliche Standards (Einsatzdokumentation, Qualitätsmanagement)
- Jede Gruppe mit Erklärung, **warum das für den Kunden relevant ist**
- Downloads: entweder echte PDFs oder den ganzen Download-Block entfernen (kein "in Kürze verfügbar")

### 4. Alle Platzhalter entfernen
- Telefonnummer `+49 (0) 000 000 000` → echte Nummer oder komplett ausblenden, nur E-Mail zeigen
- "Managed by Ovarna" im Footer: entfernen oder als dezentes "Webdesign: Ovarna" ganz unten
- "in Kürze verfügbar" Downloads: entfernen
- Insights: auf 2 echte Beiträge reduzieren oder Sektion vorerst ausblenden

### 5. Kartengleichförmigkeit aufbrechen
- Nicht jede Sektion darf das gleiche Muster haben (Überschrift → Karten-Grid → Link)
- **Leistungen**: Karten bleiben, aber mit Einsatzkontext-Satz ("Für laufende Betriebsumgebungen", "Für temporär erhöhte Risiken")
- **Branchen**: Kompakter als Kacheln mit je 1 operativer Besonderheit statt generischer Beschreibung
- **Warum wir**: Komplett umbauen von Wiederholung der Trust-Bar zu **Betriebsmodell** (Analyse → Personal-Briefing → Einsatzführung → Dokumentation/Reporting)
- **Szenarien**: Nüchterner formulieren, kein "auf null reduziert", stattdessen operative Beschreibung

---

## Priorität B – Direkt danach

### 6. Leistungstexte schärfen
- Jede Karte bekommt einen Einsatzkontext-Satz: für wen, in welcher Lage, operativer Mehrwert
- Beispiel Objektschutz: "Für Betriebsstätten mit regelmäßigem Publikumsverkehr oder erhöhtem Schutzbedarf außerhalb der Geschäftszeiten"

### 7. Branchenkarten verdichten
- Pro Branche 1 konkrete operative Besonderheit statt generischer Beschreibung:
  - Baustellen: "Nacht-/Wochenendlage, Materialschutz, Zugang außerhalb Bauzeiten"
  - Hotels: "Diskreter Dienst, Gästekontakt, Nachtportierlogik"
  - Industrie: "Sensible Flächen, Schichtlogik, Tor-/Zutrittskontrolle"

### 8. Prozess-Sektion mit operativen Details
- Wer meldet sich? (persönlicher Ansprechpartner)
- In welchem Zeitraum? (z.B. "Rückmeldung innerhalb von 24h")
- Vor-Ort-Termin oder digitale Erstaufnahme?
- Welche Infos braucht Sentinel vorab?

### 9. Karriere ausbauen
- Anforderungen konkreter (Mindestalter, §34a, Führungszeugnis, Deutschkenntnisse)
- Einsatzfelder nennen
- Bewerbungsablauf skizzieren
- Weiterbildungsmöglichkeiten
- CTA für Initiativbewerbung

### 10. Kontakt/Footer vertriebsreif machen
- Echte Kontaktdaten oder E-Mail-only mit Hinweis "Telefonnummer auf Anfrage"
- Klares Einsatzgebiet nennen (z.B. "Raum NRW" oder "Bundesweit")
- Footer: vollständige Unternehmensangaben, "Managed by Ovarna" entfernen oder in Impressum verschieben

---

## Priorität C – Nächste Ausbaustufe (nicht in diesem Durchgang)
- Echte Fachbeiträge statt Platzhalter-Insights
- Detailseiten für Leistungen und Branchen
- Unternehmensprofil als echtes PDF
- Reale Bildwelt

---

## Technische Umsetzung

### Dateien die überarbeitet werden:

| Datei | Änderungsumfang |
|---|---|
| `HeroSection.tsx` | Komplett neu: kompakter, höherer Kontrast, Trust-Facts als flache Zeile |
| `Header.tsx` | Logo größer, Navigation klarer abgetrennt vom Hero |
| `TeamSection.tsx` | Komplett neu: Kompetenz-Profile statt Foto+Rollenliste |
| `QualificationsSection.tsx` | Komplett neu: Nachweisgruppen mit Kundenrelevanz, keine Platzhalter-Downloads |
| `WhyUsSection.tsx` | Umbau zu Betriebsmodell (4 Phasen statt 6 generische Punkte) |
| `ServicesSection.tsx` | Einsatzkontext-Sätze ergänzen, Differenzierung |
| `IndustriesSection.tsx` | Operative Besonderheiten pro Branche |
| `ReferencesSection.tsx` | Nüchternere Formulierung, weniger werblich |
| `InsightsSection.tsx` | Auf 2 Beiträge reduzieren oder vorerst ausblenden |
| `CareerSection.tsx` | Stark ausbauen: Anforderungen, Einsatzfelder, Bewerbungsprozess |
| `ProcessSection.tsx` | Operative Details ergänzen |
| `ContactSection.tsx` | Platzhalter-Telefon bereinigen, Einsatzgebiet konkretisieren |
| `Footer.tsx` | "Managed by Ovarna" entfernen/verschieben, Unternehmensangaben |
| `Topbar.tsx` | Platzhalter-Telefon bereinigen |
| `TrustBar.tsx` | Semantische Überschneidung mit "Warum wir" auflösen |
| `index.css` | Kontrast-Verbesserungen bei muted-Farben |

### Design-Änderungen:
- `--muted-foreground` heller setzen für besseren Kontrast
- Hero: stärkerer Gradient-Overlay, kompaktere vertikale Proportion
- Logo in Header: `h-8 sm:h-9` statt `h-7 sm:h-8`
- Sektionen: unterschiedliche Layouts statt einheitliches Karten-Grid (z.B. WhyUs als horizontale Timeline, Team als Profil-Blöcke)


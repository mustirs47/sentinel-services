
# Umbau Sentinel Services → Dachmarke mit 4 Geschäftsbereichen

## 1. Neue Positionierung & Claim

- Name bleibt: **Sentinel Services**
- Neuer Claim: **„Sicherheit. Sauberkeit. Substanz."** (Alternativen im Prozess: „Schutz, Pflege, Werterhalt." / „Ihr Partner für Objektbetreuung.")
- Logo: Untertitel/Tagline ergänzen (Wortmarke unverändert).
- Sprachregelung: „bundesweit" nur in Footer, Kontakt, FAQ und Schema – nicht in jeder Headline.

## 2. Informationsarchitektur (neu)

```text
/                              Dachseite: 4 Bereiche gleichwertig
├── /sicherheit                Hub Sicherheit & Bewachung
│   ├── /sicherheit/objektschutz
│   ├── /sicherheit/veranstaltungsschutz   (Event Services)
│   ├── /sicherheit/baustellenbewachung
│   ├── /sicherheit/empfangs-und-pfortendienst
│   ├── /sicherheit/kontroll-und-streifendienst
│   └── /sicherheit/sicherheitskonzepte
├── /reinigung                 Hub Reinigung
│   ├── /reinigung/unterhaltsreinigung
│   ├── /reinigung/glas-und-fensterreinigung
│   ├── /reinigung/grundreinigung
│   └── /reinigung/bauschluss-und-sonderreinigung
├── /gruenanlagen              Hub Garten & Grünanlagen
│   ├── /gruenanlagen/pflege          (Mähen, Hecken, Beete)
│   ├── /gruenanlagen/baumpflege
│   └── /gruenanlagen/winterdienst
├── /facility-management       Hub FM (Klammer über alles)
│   ├── /facility-management/technisches-fm
│   ├── /facility-management/infrastrukturelles-fm
│   └── /facility-management/kaufmaennisches-fm
├── /branchen                  bleibt – pro Branche Cross-Linking zu allen 4 Säulen
├── /arbeitsweise              bleibt – 4-Phasen-Modell auf alle Bereiche generalisiert
├── /qualifikationen           erweitert: §34a + Gebäudereiniger-HWK + Fachkunde Pflanzenschutz/Baumpflege
├── /karriere                  Jobs nach Bereich filterbar
└── /kontakt                   eine Anfrage, Bereichs-Auswahl im Formular
```

301-Redirects: alle alten `/leistungen/...` → neue `/sicherheit/...` (Ranking-Erhalt).

## 3. Startseite (neu)

Sektionen, ohne überladen zu wirken:

1. **Hero**: Headline „Schutz, Pflege und Werterhalt für Ihr Objekt", Sub: 4 Säulen in einem Satz, 1 Primary-CTA + 1 Sekundär.
2. **4-Säulen-Block** (zentrales Element): vier gleich große Karten mit Icon, Kurzbeschreibung, Link auf Hub. Ersetzt die heutige `ServicesSection`.
3. **TrustBar** (bleibt).
4. **Warum Sentinel** (eine kombinierte WhyUs-Sektion mit Argumenten, die für alle Bereiche gelten: geprüftes Personal, ein Ansprechpartner, dokumentierte Leistung, regionale Teams).
5. **Branchen-Block** (bleibt, leicht überarbeitet: zeigt welche Branche welche Säulen typisch bündelt).
6. **Cross-Selling-Block** „Ein Anbieter – weniger Schnittstellen" (USP der Bündelung).
7. **Referenzen** (bleibt).
8. **Kontakt + FAQ** (FAQ um säulenübergreifende Fragen ergänzt).

Hero-Illustration: bestehende Security-Szene weicht einem neutraleren isometrischen Objekt-Set (Gebäude mit allen 4 Services angedeutet) – ein einziges neues WebP.

## 4. Hub-Seiten pro Säule (identisches Muster)

Wiederverwendbare Komponente, damit die Seite konsistent und nicht überladen wirkt:

- `PageHero` mit Bereichs-Illustration
- Intro (1 Absatz, Primary-Keyword in Satz 1)
- Sub-Leistungen als Karten-Grid (3–4 Karten → Detailseiten)
- „Für wen geeignet" (Branchenbezug)
- Arbeitsweise (komprimierte Variante)
- FAQ bereichsspezifisch
- CTA

## 5. Datenstruktur (Code)

- `src/data/services.ts` → wird zu `src/data/divisions.ts` mit Schema:
  ```ts
  type Division = { slug: 'sicherheit'|'reinigung'|'gruenanlagen'|'facility-management';
                    title, claim, hero, intro, seo: {title,description,keywords},
                    services: Service[] }
  ```
- Bestehende Service-Einträge ziehen unter `sicherheit.services` um.
- Neue Einträge für Reinigung (4), Grünanlagen (3), FM (3).
- `serviceIllustrations.ts` erweitert; pro neuem Service eine isometrische WebP-Illustration im Stil der bestehenden.
- `LeistungDetail.tsx` → `ServiceDetail.tsx`, routet `/[division]/[slug]`.

## 6. SEO-Strategie je Hub (Semrush DE, Richtwerte)

| Hub | Primär-Keyword | Sekundär |
|---|---|---|
| /sicherheit | Sicherheitsdienst (8.100) | Wachdienst, Sicherheitsfirma |
| /reinigung | Gebäudereinigung (5.400) | Unterhaltsreinigung, Glasreinigung |
| /gruenanlagen | Grünanlagenpflege (590) | Gartenpflege gewerblich, Landschaftspflege |
| /facility-management | Facility Management (8.100) | Gebäudemanagement, FM Dienstleister |

Vor finalem Texten: einmaliger Semrush-Lauf zur Verifikation der DE-Volumina je neuem Hub und je Sub-Service.

## 7. Technische SEO & Schema

- `index.html`: Organization-Schema → `services`/`makesOffer` mit allen 4 Bereichen.
- Pro Hub: `Service`-Schema mit korrektem `serviceType`.
- Neue Sitemap-Einträge + Footer-Sitemap.
- Canonicals self-reference, OG pro Hub.
- Robots & llms.txt aktualisieren.
- Redirect-Map dokumentieren (alte → neue URLs).

## 8. Design / UI

- Farbsystem bleibt (Primärblau). Keine eigenen Farben pro Säule – stattdessen pro Säule ein **Icon-Akzent** (Schild, Tropfen, Blatt, Zahnrad) und konsistente isometrische Illustrationen.
- Header-Navigation: Top-Level wird `Sicherheit · Reinigung · Grünanlagen · Facility Management · Branchen · Kontakt`. Restliche Items (Arbeitsweise, Qualifikationen, Karriere) in Footer + sekundäre Topbar.
- Mobile: vier Säulen als Akkordeon im Menü.
- Keine Section-Verdopplung – pro Hub max. 6 Sektionen.

## 9. Inhalt & Tone

- Wording bleibt nüchtern, einsatznah.
- Keine generischen AI-Floskeln, keine Stockfotos.
- Cross-Selling subtil: am Ende jeder Hub-Seite ein dezenter Block „Auch von Sentinel: …" mit Verlinkung auf die anderen 3 Säulen.

## 10. Umsetzungsschritte

1. Datenmodell `divisions.ts` + Migrations-Mapping der bestehenden Services.
2. Routing-Umbau in `App.tsx` (lazy Hubs + Detail-Route, Redirects über `<Navigate>`).
3. Neue Komponenten: `DivisionHub.tsx`, `DivisionCard.tsx`, neuer Hero-Block „4-Säulen".
4. Header/Footer-Navigation umstellen.
5. Content für Hubs + Sub-Services (Reinigung, Grün, FM) schreiben, je Sub-Service eine Illustration generieren.
6. SEO-Köpfe je Seite, Schema, Sitemap, robots, llms.txt.
7. Startseite umbauen, neue Hero-Illustration.
8. 301-Mapping + Cross-Links + interne Linkstruktur prüfen.
9. Ahrefs/Semrush-Re-Scan + IndexNow-Submit.

## Offene Punkte (in der Umsetzung zu klären)
- Genaue Sub-Leistungen je neuer Säule final bestätigen.
- Neuer Claim final wählen (3 Vorschläge oben).
- Soll Veranstaltungsschutz zusätzlich als „Event Services"-Marke unter Sicherheit sichtbar werden (Top-Nav-Eintrag) oder reicht die Detailseite?

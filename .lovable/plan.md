## Ziel

Vollständige, handgeschriebene SEO-Überarbeitung jeder Seite – einheitlich, einzigartig, deutsch, ohne KI-typische Floskeln. Schwerpunkte: einzigartige Meta-Tags je Seite, Canonicals, Open Graph/Twitter pro Seite, erweitertes strukturiertes Daten-Markup, Breadcrumbs, semantische H1-Hierarchie, interne Verlinkung, technische SEO-Hygiene.

## 1. `SEOHead` erweitern (zentral)

Neue optionale Props: `ogImage`, `ogType` (`website`/`article`), `keywords`, `noindex`, `lang`. Standard-Canonical automatisch aus `useLocation().pathname` ableiten, damit jede Route eine korrekte selbstreferenzierende Canonical-URL bekommt. `og:url`, `og:site_name="Sentinel Services"`, `og:locale="de_DE"`, `twitter:card="summary_large_image"` immer mitschreiben. `BASE_URL = https://www.sentinel-services.de`.

## 2. Pro Seite individuelle, menschlich klingende Meta-Daten

Alle Title ≤ 60 Zeichen, Descriptions 140–160 Zeichen, einzigartig, im Tonfall „einsatznah, sachlich, konkret" (Memory: tone-and-voice). Keine generischen Adjektive wie „professionell, hochwertig, erstklassig" wiederholt.

| Route | Title (neu) | Description-Kern |
|---|---|---|
| `/` | Sicherheitsdienst Sentinel Services – bundesweit einsatzbereit | Objektschutz, Veranstaltungsschutz, Baustellenbewachung. §34a, feste Ansprechpartner, kurze Reaktionszeiten. |
| `/leistungen` | Leistungen im Sicherheitsdienst – Übersicht | Sechs Leistungsbereiche von Objektschutz bis Sicherheitskonzept – kurz erklärt, mit klaren Einsatzbeispielen. |
| `/leistungen/:slug` | bereits in `services.ts` – pro Slug überarbeiten (s. unten) | individuell |
| `/branchen` | Sicherheit nach Branche – Lösungen für acht Bereiche | Gewerbe, Industrie, Baustelle, Handel, Events, Hotel, Wohnanlage, Behörden – je mit typischen Risiken. |
| `/qualifikationen` | Qualifikationen & §34a-Nachweise unseres Personals | Sachkunde, Erste Hilfe, Brandschutz, Deeskalation – was es im Einsatz konkret bedeutet. |
| `/arbeitsweise` | Arbeitsweise – vom Erstgespräch bis zum Reporting | Vier Phasen: Analyse, Personal, Einsatz, Dokumentation. So läuft ein Auftrag bei uns. |
| `/karriere` | Karriere im Sicherheitsdienst – offene Stellen | Anforderungen, Schichtmodelle, Weiterbildung. Bewerbung in wenigen Schritten. |
| `/kontakt` | Kontakt – Anfrage an Sentinel Services | Erstberatung per Formular oder E-Mail. Wir melden uns kurzfristig mit konkretem Vorschlag. |
| `/impressum` | Impressum – Sentinel Services, Magdeburg | Pflichtangaben nach § 5 TMG. (`noindex,follow`) |
| `/datenschutz` | Datenschutz – Hinweise nach DSGVO | Welche Daten wir verarbeiten, wie lange, mit welcher Rechtsgrundlage. (`noindex,follow`) |
| `*` (404) | Seite nicht gefunden – Sentinel Services | Diese Seite existiert nicht. Zurück zur Startseite oder Leistungen ansehen. (`noindex,follow`) |

Service-Detail-Slugs in `src/data/services.ts`: `metaTitle`, `metaDescription`, `h1` und `longDesc` durchgehen und sprachlich entspannen (kürzere Sätze, konkrete Beispiele, kein „nahtlos integriert"-Vokabular).

## 3. Strukturierte Daten (JSON-LD) ausweiten

- `BreadcrumbJsonLd` (existiert) auf **allen** Unterseiten einsetzen, mit korrekter Hierarchie (Startseite › Eltern › Aktuell).
- `/leistungen`: zusätzlich `ItemList` der sechs Services.
- `/branchen`: zusätzlich `ItemList` der acht Branchen.
- `/leistungen/:slug`: bestehendes `ServiceJsonLd` um `serviceType`, `areaServed: Deutschland`, `provider` mit Telefon entfällt (haben wir nicht), E-Mail bleibt.
- `/kontakt`: `ContactPage` Schema + Wiederholung der `ContactPoint`-Daten.
- `/karriere`: `WebPage` mit `about: HiringOrganization`. (Kein `JobPosting` ohne echte Stellen – würde sonst von Google abgestraft.)
- `/qualifikationen`, `/arbeitsweise`: `WebPage` mit `mainEntity: AboutPage`.
- `LocalBusinessJsonLd` (Index): ergänzen um `address: PostalAddress` (Grusonstraße 9, 39112 Magdeburg, DE), `foundingDate` weglassen falls unbekannt, `sameAs` weglassen wenn keine Profile vorhanden.

## 4. Canonicals & Indexierungssteuerung

- Selbstreferenzierende Canonical auf jeder Route via `SEOHead` (Prop oder automatisch aus Pathname).
- `Impressum`, `Datenschutz`, `NotFound`: `<meta name="robots" content="noindex,follow">`.
- `index.html`: globale Canonical entfernen (sonst überschreibt sie Subseiten); Helmet setzt sie pro Seite.

## 5. Open Graph / Social

- Eine generische OG-Bild-URL bleibt im `index.html` als Fallback.
- Pro Seite OG-Title = Meta-Title, OG-Description = Meta-Description; OG-URL automatisch aus aktuellem Pfad.
- `og:type` für `/leistungen/:slug` = `article`, sonst `website`.

## 6. On-Page-Hygiene

- Sicherstellen: genau **ein** `<h1>` pro Seite. `PageHero` rendert bereits `h1` – Section-Überschriften auf `h2` prüfen (kurzer Audit Hero/Sections, nichts visuell ändern).
- Bilder: `alt`-Texte aller dekorativen Illustrationen prüfen; leere `alt=""` nur wenn rein dekorativ, sonst beschreibend („Isometrische Darstellung eines bewachten Objekts" o.ä.).
- Interne Verlinkung: am Ende jeder Service-Detailseite zu zwei verwandten Leistungen + `/branchen` linken (existiert teilweise – vereinheitlichen).
- `lang="de"` ist gesetzt; zusätzlich `<html>` `lang="de-DE"`.

## 7. Sitemap & robots

- `public/sitemap.xml` bleibt manuell gepflegt; `lastmod` (heutiges Datum) auf allen Einträgen ergänzen, `priority`-Werte unverändert. Reihenfolge: `/`, `/leistungen` + Detailseiten, `/branchen`, `/qualifikationen`, `/arbeitsweise`, `/karriere`, `/kontakt`, Legal.
- `Impressum`/`Datenschutz` aus Sitemap entfernen (passt zu `noindex`).
- `robots.txt`: `Disallow: /404` raus (Route existiert nicht), stattdessen nichts blockieren – `noindex` reicht.

## 8. Inhaltliche Anti-KI-Politur

Audit (kein Re-Write der ganzen Seiten) folgender Stellen auf KI-Floskeln und Ersetzung durch konkrete, nüchterne Formulierungen:
- Hero-Subtitles aller Seiten
- `services.ts` `longDesc` und `desc`
- `industries.ts` Beschreibungen
- FAQ-Antworten kürzen, wo Füllwörter vorkommen

Verbotene Wörter im Audit: „nahtlos", „ganzheitlich", „maßgeschneidert" (1× max pro Seite), „erstklassig", „revolutionär", „state-of-the-art", „in der heutigen schnelllebigen Welt", Aufzählungen mit drei Adjektiven hintereinander.

## 9. Technische Details

- Neue Helper `src/lib/seo.ts`: `buildCanonical(path)`, `BASE_URL`, `SITE_NAME`.
- `SEOHead` nutzt `useLocation` → daher muss es immer innerhalb des Routers gerendert werden (ist bereits der Fall).
- Keine neuen Abhängigkeiten.
- Keine Layout-/Design-Änderungen.

## 10. Reihenfolge der Umsetzung

1. `SEOHead` erweitern + `lib/seo.ts`.
2. `StructuredData.tsx` um `ItemList`, `ContactPage`, `WebPage`, `PostalAddress` ergänzen.
3. `services.ts`: Texte, `metaTitle`, `metaDescription`, `h1` pro Slug überarbeiten.
4. Jede Page-Datei: neuer SEOHead-Aufruf, Breadcrumb-JSON-LD, ggf. zusätzliche Schemas.
5. `index.html` aufräumen (Canonical raus, Title generisch lassen für Erst-Render).
6. `sitemap.xml` aktualisieren, `robots.txt` anpassen.
7. Sicht-Check über alle Routen + Light-House-/Build-Validierung.

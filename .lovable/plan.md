# SEO-Optimierung nach Ahrefs Site Audit (überarbeitet)

Aktueller Health Score: **64 (Fair)** — 14 Errors, 27 Warnings, 24 Notices.
Strategiewechsel laut Vorgabe: **breitere, traffic-starke Keywords** statt enger Magdeburg-Long-Tails. Quelle: Semrush DE, Mai 2026.

## 1. Technische SEO-Fixes (Ahrefs)

### a) Multiple meta description tags (14 URLs — Error, größter Hebel)
`index.html` definiert statisch `description`, `og:title/description`, `twitter:title/description` — `SEOHead` setzt sie zusätzlich per Helmet → Ahrefs sieht Duplikate.
- `index.html` aufräumen: nur charset, viewport, og:type, og:site_name, og:locale, og:image, twitter:card, twitter:image + Default-`<title>` als Fallback. **Description, og:title, og:description, twitter:title, twitter:description entfernen** — `SEOHead` setzt sie pro Route.

### b) Structured data validation error (6 URLs)
- `LocalBusiness` JSON-LD: `image` (Logo absolut), `telephone` falls vorhanden, `@id`-Referenzen konsistent.
- `Service` JSON-LD: `provider.url`/`address` ergänzen, `serviceType` als String.
- `WebSite`-Schema sitewide in `index.html` ergänzen.

### c) H1 / Open Graph incomplete (je 1 URL)
- Wahrscheinlich `/404` bzw. eine Redirect-Ziel-Seite. H1 sicherstellen, OG-Felder ergänzen.

### d) Redirects (HTTP→HTTPS, 3xx-Chains, 302)
- Internes Link-Audit: alle Links auf finale URL (`https://www.…` ohne trailing slash).
- Sicherstellen, dass `canonical`/`og:url` in Helmet konsistent generiert werden.

### e) Slow page (15 URLs, Notice)
- `<link rel="preload" as="image">` für `hero-bg.webp` + Service-Illustrationen above-the-fold.
- Google Analytics auf `defer`, weiter erst nach Consent laden.

### f) IndexNow (15 Seiten)
- `scripts/indexnow.mjs` einmal anstoßen.

---

## 2. Keyword-Strategie — breiter ausgelegt (Semrush DE)

Statt lokaler 90-140/mo-Begriffe priorisieren wir bundesweite Suchanfragen mit deutlich höherem Volumen. Magdeburg bleibt als Sekundär-Signal im Footer/Impressum/JSON-LD verankert (lokales Pack), drückt aber keine H1/Titles mehr.

### Reichweiten-Cluster (Vol = monatliches Suchvolumen, KDI = Difficulty 0–100)

| Seite | Primär-KW | Vol | KDI | Sekundär (Vol) | Begründung |
|---|---|---|---|---|---|
| `/` | **Sicherheitsdienst** | 8.100 | 58 | Sicherheitsfirma (1.300, 37), Wachdienst (880, 19) | Größtes Volumen; Brand stärkt mittelfristig Authority |
| `/leistungen/objektschutz` | **Objektschutz** | 1.900 | 19 | Werkschutz (1.600, 20), Wachschutz (480, 28) | Sehr realistisch, drei verwandte Begriffe bündeln |
| `/leistungen/veranstaltungsschutz` | **Veranstaltungsschutz** | 880 | 6 | Türsteher (1.900, 26), Eventsecurity (70) | KDI 6 = schnell rankbar; Türsteher als Sekundär-Pull |
| `/leistungen/baustellenbewachung` | **Baustellenbewachung** | 590 | 10 | Brandwache (720, 13), Nachtwache (1.900, 28) | Brandwache als zusätzlicher Sub-Service / interner Link |
| `/leistungen/empfangs-und-pfortendienst` | **Empfangsdienst** | 390 | 10 | Pfortendienst (320, 3), Doorman (880, 21) | Beide Begriffe gemeinsam adressieren |
| `/leistungen/kontroll-und-streifendienst` | **Revierdienst** | 480 | 6 | Streifendienst (260, 29), Nachtwache (1.900, 28) | Revier = stärker, Streifen = synonym |
| `/leistungen/sicherheitskonzepte` | **Sicherheitskonzept** | 1.300 | 29 | Risikoanalyse, Bewachungsunternehmen (30) | Beratungs-Intent, gute Conversion |
| `/branchen` | **Bewachung** (Branchen-Hub) | — | — | Industrie-/Baustellen-/Hotel-Begriffe als Anker | Interner Link-Hub, kein Ranking-Ziel |
| `/qualifikationen` | **Sachkundeprüfung §34a** | 8.100 | 28 | §34a (2.900, 27) | Trust-Seite; massive Top-Funnel-Reichweite |
| `/arbeitsweise` | **Sicherheitsdienst Ablauf** | low | — | — | Conversion-Support, kein primäres SEO-Ziel |
| `/karriere` | **Security Job** | 880 | 23 | Sicherheitsmitarbeiter Job (110, 15) | Bewerber-Funnel |
| `/kontakt` | **Sicherheitsdienst anfragen** | low | — | — | Pure Conversion |

### Zusätzliche Empfehlung
**Neue Seite „Personenschutz"** (2.400/mo, KDI 18) als 7. Leistung — ein Begriff dieser Größe mit niedriger Schwierigkeit ist Pflicht im Portfolio eines Sicherheitsdienstes. Falls inhaltlich nicht im Angebot, bewusst weglassen.

### On-Page-Änderungen pro Seite
Für jede Seite anpassen:
1. **Meta Title** (<60 Z.) mit Primär-KW vorn, Marke hinten: z. B. „Objektschutz & Werkschutz – bundesweit | Sentinel Services".
2. **Meta Description** (<160 Z.) mit Primär- + 1 Sekundär-KW + Nutzen + CTA.
3. **H1** mit Primär-KW natürlich integriert (kein Stuffing, Tone bleibt seriös/„einsatznah").
4. **Intro-Absatz** (60–90 W.) mit Primär-KW im ersten Satz, 1–2 Sekundär-KWs verteilt.
5. **Interne Links** mit Anchor-Text = Primär-KW der Zielseite.
6. **FAQ-Erweiterung** mit Question-Keywords (z. B. „Was kostet ein Sicherheitsdienst?", „Was ist der Unterschied zwischen Objektschutz und Werkschutz?") → speist FAQPage-Schema.

---

## 3. Reihenfolge der Umsetzung

1. `index.html` entdoppeln + `LocalBusiness`/`Service`-Schema reparieren.
2. Internes Link-/Redirect-Audit.
3. Title/Description/H1/Intro für alle 12 Seiten nach Tabelle oben überarbeiten.
4. Performance-Mikro-Fixes (Preload LCP, GA defer).
5. SEO-Rescan + IndexNow-Submit.

## Hinweis
Recherche aus dem eingebauten Semrush-Tool (Stichprobe). Wenn Sie laufendes Rank-Tracking, Wettbewerbs-Dashboards oder bulk-Keyword-Recherche direkt in der App haben möchten, ließe sich später der **Semrush-Connector** anbinden — für diese Optimierungsrunde nicht nötig.

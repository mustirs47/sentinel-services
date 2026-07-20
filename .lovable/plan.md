## Ziel
Alle Ahrefs-Site-Audit-Findings aus dem PDF beheben (Health Score 40 → ~100).

## Findings & Fixes

### 1. Multiple meta description tags (25 URLs) + Open Graph URL not matching canonical (24) + Multiple meta description tags not indexable (7)
**Ursache:** `index.html` enthält statische `<meta name="description">`, `og:title`, `og:description`, `og:url`, `og:image`, `twitter:title/description/image`. `react-helmet-async` dedupliziert nur eigene Tags — die statischen bleiben zusätzlich stehen. Auf jeder Route (die via `SEOHead` dieselben Tags setzt) sieht der Crawler zwei Description-, og:url-, og:title-Tags → auch og:url matcht nicht mit der Route-Canonical.

**Fix in `index.html`:** Alle Tags entfernen, die `SEOHead` pro Route ohnehin setzt (description, og:title, og:description, og:url, og:image, twitter:title/description/image). Beibehalten: `<title>` (Fallback für Nicht-JS-Crawler bleibt via `<noscript>`-Block), `og:type`, `og:site_name`, `og:locale`, `link rel=canonical` (Fallback für Root). Damit hat jede gerenderte Seite genau eine Description und ein passendes og:url.

### 2. Non-canonical page in sitemap (9)
**Ursache:** `public/sitemap.xml` listet `/leistungen` und `/leistungen/*` — diese Routen sind in `App.tsx` `<Navigate replace>` auf `/sicherheit/*`. Ebenso ist `/impressum` als `noindex` markiert.

**Fix:** In `public/sitemap.xml` folgende Einträge entfernen:
- `/leistungen` und alle 6 `/leistungen/<slug>`
- Zusätzlich Noindex-Fix (siehe 3)

### 3. Noindex page in sitemap (1)
**Fix:** `/impressum` aus `public/sitemap.xml` entfernen (Impressum ist `noindex`). `/datenschutz` prüfen — ist derzeit indexierbar, bleibt drin.

### 4. Page has links to broken page (1)
**Vorgehen:** Nach Deploy erneut prüfen. Wahrscheinlicher Kandidat ist ein interner Verweis auf einen alten `/leistungen/*`-Pfad oder eine entfernte FM-Sub-Route. In diesem Turn: alle internen `<Link to="...">`-Ziele gegen `App.tsx`-Routen prüfen und ggf. korrigieren.

### 5. Meta description too long (6)
**Fix:** Die betroffenen `SEOHead`-Descriptions in den Seiten identifizieren, die >160 Zeichen sind, und auf ≤155 Zeichen kürzen (Seiten: vermutlich einige `LeistungDetail`-Einträge in `src/data/divisions.ts` sowie mehrere `pages/*.tsx`). Alle Descriptions systematisch messen und die zu langen kürzen — Ton bleibt konkret, nicht generisch.

### 6. Slow page (Notice, 35)
**Anmerkung:** Notice-Level, kein Fehler. Bereits mehrere Performance-Runden gelaufen (WebP, Lazy-Loading, Code-Split, deferred gtag). Kein weiterer Eingriff — Grund für die Meldung ist meist Time-to-Interactive der SPA; weitere Optimierung würde die Struktur betreffen. Wird beim nächsten Crawl teils verschwinden, wenn die HTML-Duplikate weg sind (kleinerer Head).

### 7. Orphan page (7, Notice)
**Vorgehen:** Nicht ohne konkrete URL-Liste behebbar. In diesem Turn nicht anfassen — nach nächstem Crawl mit Detailliste separat adressieren.

## Umsetzung

1. `index.html` bereinigen (Duplikate raus).
2. `public/sitemap.xml` bereinigen (Leistungen-Legacy + Impressum raus, `lastmod` refreshen).
3. Alle SEO-Descriptions durchgehen (`src/pages/*.tsx`, `src/data/divisions.ts`) und auf ≤155 Zeichen kürzen wo nötig.
4. Interne Links auf tote Ziele prüfen (`rg "to=\""`), ggf. fixen.
5. `scripts/indexnow.mjs` ausführen, damit Bing/Yandex den neuen Zustand ziehen.

Google Search Console + Ahrefs-Rescan sind nach Deploy manuell durch dich anzustoßen.

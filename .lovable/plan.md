# Welle A – Quick Wins + FormSubmit-DSGVO-Update

## Bugfixes
1. **React-Warning `fetchPriority`** beheben
   - `src/components/layout/Header.tsx:49` – Attribut von `<Link>` entfernen und auf das innenliegende `<img>` setzen.
   - `src/components/sections/HeroSection.tsx:23` – Prüfen, dass das Attribut korrekt am `<img>` sitzt (nicht am Wrapper); ggf. Casing `fetchpriority` für Vite/React 18 verwenden.
2. **React-Router v7 Future-Flags** in `src/App.tsx` am `<BrowserRouter>` setzen (`v7_startTransition`, `v7_relativeSplatPath`) – entfernt die Deprecation-Warnings.

## Datenschutz – FormSubmit ergänzen
3. `src/pages/Datenschutz.tsx` erweitern um einen neuen Abschnitt **„Kontaktformular (FormSubmit)"**:
   - Anbieter: Formspark Inc. / FormSubmit (`formsubmit.co`), Drittland-Übermittlung in die USA.
   - Verarbeitete Daten: Name, E-Mail, Telefon, Nachricht, IP-Adresse, Zeitstempel.
   - Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO.
   - Hinweis auf fehlenden Angemessenheitsbeschluss → Übermittlung auf Basis Art. 49 Abs. 1 lit. a DSGVO (ausdrückliche Einwilligung) bzw. EU-Standardvertragsklauseln, sofern verfügbar.
   - Speicherdauer, Widerrufsmöglichkeit und Link zur FormSubmit-Datenschutzerklärung.
   - Wechseldatum bleibt „Stand: Mai 2026".
4. Im Kontaktformular `src/pages/Kontakt.tsx` (bzw. `KontaktPage.tsx`) eine **kleine Checkbox + Hinweis** direkt über dem Submit-Button ergänzen: „Ich willige in die Übermittlung meiner Angaben an unseren Formular-Dienstleister FormSubmit (USA) gemäß Datenschutzerklärung ein." Submit deaktiviert, solange nicht angehakt → erfüllt Art. 49 Abs. 1 lit. a DSGVO.

## Form & UX-Politur (Kontaktseite)
5. Tokenkonformität wiederherstellen: `bg-white`, `border-gray-200` etc. im Formular durch shadcn-Defaults / `surface-card`-Tokens ersetzen.
6. Form-Labels mit `htmlFor` an Inputs binden (a11y).
7. Process-Steps Grid auf `grid-cols-2 sm:grid-cols-4` (verhindert Umbruch < 380 px).

## Sichtbare A11y- & Perf-Quick-Wins
8. Dekorative Phosphor-Icons im zentralen Shim (`src/lib/icons.tsx`) defaultmäßig mit `aria-hidden="true"` versehen.
9. Bilder unterhalb des Folds (Team, Illustrationen in Sektionen) bekommen `loading="lazy"` + `decoding="async"`, sofern noch nicht gesetzt. Hero-Bild bleibt eager + high priority.
10. Skip-to-content-Link im `Header.tsx` (visuell versteckt, sichtbar bei Fokus) → springt zu `<main id="main">`.

## Meta-Politur
11. Meta-Descriptions, die > 160 Zeichen sind, kürzen (`Kontakt.tsx`, ggf. `Karriere.tsx`, `Qualifikationen.tsx`) – Inhalt bleibt sinnerhaltend, nur Länge.

## Nicht in Welle A enthalten (für später)
- Migration des Kontakt-Endpunkts auf Lovable-Cloud Edge-Function (Welle B, da du FormSubmit vorerst behalten möchtest).
- AVIF-Variante / Preload-Tuning des LCP-Bilds.
- Route-Level Code-Splitting für seltene Seiten.

## Validierung nach Umsetzung
- Playwright-Smoke auf `/`, `/kontakt`, `/datenschutz` (Desktop + Mobile): Console muss frei von `fetchPriority`-/Router-Warnings sein.
- Sichtprüfung Kontaktformular: Checkbox vorhanden, Submit korrekt gated.
- Datenschutzseite enthält den neuen Abschnitt sichtbar zwischen bestehendem „Hosting"- und „Tracking"-Block.

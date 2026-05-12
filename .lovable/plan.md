## Ziel

Alle Telefon-/Erreichbarkeits-Elemente entfernen, Layout- und Logo-Inkonsistenzen bereinigen. Primärer Kontaktweg ist künftig Kontaktformular + E-Mail.

## 1. Entfernen (global)

**Telefon & Anruf-CTAs**
- Datei `src/components/layout/StickyCallButton.tsx` löschen, Einbindung in `PageLayout.tsx` entfernen.
- `src/components/layout/Topbar.tsx`: Telefon-Link, "Anrufen"-Mobil-Variante und Uhrzeit-Block entfernen. Übrig bleibt nur die E-Mail rechts. Falls dadurch fast leer → Topbar komplett entfernen (Empfehlung: behalten, nur E-Mail rechtsbündig).
- `src/components/layout/Header.tsx`: `<a href="tel:…">` mitsamt `Phone`-Icon entfernen.
- `src/components/layout/MobileMenu.tsx`: Telefon-Eintrag und zugehörige Icons entfernen.
- `src/components/layout/Footer.tsx`: Telefon-`<li>` und Zeile "Telefonisch Mo–Fr 10–18 Uhr · E-Mail jederzeit" entfernen.
- `src/pages/KontaktPage.tsx`: 
  - Telefon-Eintrag aus Kontaktinformationen entfernen
  - "Erreichbarkeit"-Listenpunkt (Clock-Icon + Mo–Fr-Zeile) entfernen
  - Button "Sofort anrufen" entfernen
  - FAQ-Eintrag "Kann ich auch telefonisch anfragen?" entfernen
  - Aus FAQ "Wie schnell melden Sie sich…" und Garantie-Liste die "24-Stunden"-Zusage entfernen → ersetzen durch "Schnellstmögliche Rückmeldung" (kein Zeitversprechen, kein Clock-Icon)
- `src/components/sections/HeroSection.tsx`, `ContactSection.tsx`, `TrustBar.tsx`, `ProcessSection.tsx`, `FAQSection.tsx`, `Leistungen.tsx`, `LeistungDetail.tsx`, `Branchen.tsx`, `Arbeitsweise.tsx`, `KarrierePage.tsx`, `data/services.ts`: Alle `tel:`-Links, Phone-Icons, "Anrufen"-Buttons, Clock-Icons mit Zeitangaben sowie "Rückmeldung innerhalb …"-Formulierungen entfernen. Wo eine sekundäre CTA wegfällt, primäre CTA "Anfrage stellen" → `/kontakt` erhalten.
- `src/components/StructuredData.tsx`: `telephone` und `contactPoint.telephone` aus JSON-LD entfernen, `openingHours` ebenfalls (kein Zeitversprechen mehr).
- `index.html`: ggf. dieselben Felder im inline JSON-LD bereinigen.

**Impressum / Datenschutz**
- `src/pages/Impressum.tsx`: Abschnitt "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV" komplett entfernen. Telefonnummer aus "Kontakt"-Block und aus Hinweis-Box entfernen (nur E-Mail bleibt).
- `src/pages/Datenschutz.tsx`: Telefonnummer und Uhrzeitangaben analog entfernen.

**Sticky Call**
- Komponente und alle Imports entfernen.

## 2. Anpassen

**Logo**
- `src/assets/logo-color.png` und `src/assets/logo-grayscale.png` via `imagegen--edit_image` mit transparentem Hintergrund neu erzeugen, korrektes Seitenverhältnis (Inhalt nicht beschnitten).
- Header: `h-9 sm:h-10` → `h-10 sm:h-12`, `w-auto` bleibt.
- Footer: `h-8` → `h-10`, `opacity-80` entfernen.
- Mobile-Menü-Logo entsprechend anheben.

**Einheitliche Seitenbreite**
- Verbindlich: `max-w-7xl mx-auto px-4 sm:px-6` für jeden Section-Container.
- Reine Textseiten (`Impressum`, `Datenschutz`) behalten innen `max-w-3xl` für Lesbarkeit, aber im `max-w-7xl`-Wrapper.
- Audit aller Seiten/Sections: jede abweichende Breite (`max-w-6xl`, `max-w-5xl`, fehlendes `mx-auto`) auf den Standard ziehen.

**Einheitliche Spacings**
- Section-Vertikal-Padding standardisieren auf `py-16 sm:py-24` (Content-Sections) bzw. `py-12 sm:py-16` (kompakte Bänder wie Process-Strip, TrustBar).
- Doppel-Paddings (z. B. Section + innerer Wrapper mit zusätzlichem `py-*`) zusammenführen.
- Karten-Innenabstände vereinheitlichen auf `p-6 sm:p-8`.
- Überflüssige `mt-*`/`mb-*` zwischen aufeinanderfolgenden Section-Wrappern entfernen.

**Einheitliche Farben**
- Audit auf direkte Farb-Klassen (`text-white`, `bg-gray-…`, `text-gray-…`, hartcodierte HSL): durch semantische Tokens (`text-foreground`, `text-muted-foreground`, `bg-background`, `border-border`, `--section-light-*`) ersetzen.
- KontaktPage-Form: `bg-white`/`text-gray-900`/`border-gray-200`/`text-gray-500` → semantische Tokens.

## 3. Verifikation

- `rg "tel:|\\+49 \\(0\\)|Anrufen|Sofort anrufen|Mo–Fr 10|10–18|innerhalb von 24"` muss leer sein.
- Build durchläuft (Harness).
- Visueller Check Startseite, Kontakt, Impressum, Footer, Header (Desktop + Mobile-Viewport).

## Technische Hinweise

- `lucide-react` Imports nach Entfernung von `Phone`/`Clock` bereinigen, sonst TS-Warnungen.
- Memory `mem://features/contact-mechanisms` ist obsolet → nach Umsetzung aktualisieren ("kein Telefon, primär Kontaktformular").
- `StickyCallButton`-Datei wirklich löschen, nicht nur auskommentieren.

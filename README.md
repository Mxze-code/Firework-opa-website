# Hartmann UG & Co. KG · Feuerwerksverkauf

Website für das traditionsreiche Feuerwerksunternehmen Hartmann UG & Co. KG.

## Start

```bash
npm install
npm run dev
```

## Projektstruktur

```
├── app/
│   ├── globals.css          # Globale Styles, CSS-Variablen
│   ├── layout.tsx           # Root-Layout mit Navbar/Footer
│   ├── page.tsx             # Startseite (Hero + Feature-Cards)
│   ├── katalog/page.tsx     # Katalog (Platzhalter)
│   └── kontakt/page.tsx     # Kontakt / Über mich
├── components/
│   ├── layout/
│   │   ├── navbar.tsx       # Sticky Navbar mit Logo
│   │   └── footer.tsx       # Footer mit Kontaktdaten
│   ├── sections/
│   │   ├── hero-section.tsx # Hero mit Feuerwerks-Animation
│   │   └── feature-cards-section.tsx
│   └── ui/
│       └── fireworks-background.tsx
├── lib/
│   └── utils.ts
└── public/
    └── logo-hartmann.png    # Logo (leicht austauschbar)
```

## Logo

**Position:** Links oben in der Navbar (`components/layout/navbar.tsx`)

**Datei:** `public/logo-hartmann.png` – kann jederzeit durch eine bessere PNG- oder SVG-Version ersetzt werden. Einfach die Datei überschreiben oder den Pfad in der Navbar anpassen.

**Höhe:** ca. 36px (Mobile) / 48px (Desktop), responsive über `h-9 md:h-12`

## Inhalte anpassen

| Inhalt | Datei |
|--------|-------|
| Hero-Text | `components/sections/hero-section.tsx` |
| Feature-Cards | `components/sections/feature-cards-section.tsx` |
| Kontaktdaten | `components/layout/footer.tsx`, `app/kontakt/page.tsx` |
| Farben | `app/globals.css` (CSS-Variablen) |
| Navigation | `components/layout/navbar.tsx` |

## Kontaktdaten (bereits eingebunden)

- Hartmann UG & Co. KG
- Badergasse 55, 96472 Rödental
- Tel. 09563 4896 · Fax 09563 729 3325 · Mobil 0172 8616347
- Handelsregister Coburg HRA 4727

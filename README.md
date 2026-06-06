# Úklid na klik

Webový projekt v Next.js pro značku **Úklid na klik**. Prezentační singlepage web s obsahem taženým z Google Sheets.

## Co je v projektu

- **Next.js 15** s App Routerem
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Vercel Analytics**
- Napojení na **Google Sheets** pro obsah sekcí Služby a Kontakt

## Jak projekt funguje

Hlavní stránka načítá obsah přes `lib/sheets.ts`.
Z Google Sheets se čtou dvě oblasti:

- `Kontakt!A:B` — kontaktní údaje
- `Sluzby!A:A` — seznam služeb

Data se renderují do sekcí Hero → Services → Gallery → Contact.

## Sekce galerie fotek

Galerie používá lokální demo obrázky z `public/gallery/`.

- Soubory `cleaning-01.svg` … `cleaning-10.svg` jsou **demo placeholdery** s úklidovou tématikou — mají být nahrazeny reálnými fotkami.
- Seznam obrázků je v [`data/content.json`](./data/content.json) pod klíčem `gallery`.
- Galerie funguje i bez Google Sheets (čte pouze lokální JSON).
- Na desktopu se zobrazuje jako automaticky animovaný nekonečný pás, hover animaci pozastaví.
- Na mobilu funguje jako horizontálně scrollovatelný pás (dotyk prstem).
- Respektuje `prefers-reduced-motion` — pokud je snížení pohybu zapnuto, animace se deaktivuje.

### Přidání reálných fotek

1. Vlož fotky do `public/gallery/` (doporučený poměr stran 4:3).
2. Aktualizuj seznam v `data/content.json` → klíč `gallery`.
3. Volitelně: v budoucnu lze přidat list `Fotky` v Google Sheets a načítat galerii dynamicky přes `lib/sheets.ts`.

## Důležité soubory

- [`app/layout.tsx`](./app/layout.tsx) — root layout, metadata a analytics
- [`app/page.tsx`](./app/page.tsx) — hlavní vstupní stránka
- [`app/components/`](./app/components/) — Hero, Services, Gallery, Contact
- [`lib/sheets.ts`](./lib/sheets.ts) — načítání obsahu z Google Sheets
- [`app/api/og/route.tsx`](./app/api/og/route.tsx) — generování OG obrázku
- [`data/content.json`](./data/content.json) — lokální obsahový soubor (galerie + fallback obsah)
- [`public/gallery/`](./public/gallery/) — demo SVG obrázky galerie

## Spuštění

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
```

## Potřebné environment proměnné

Pro načítání obsahu z Google Sheets:

- `GOOGLE_SHEETS_ID`
- `GOOGLE_SHEETS_API_KEY`

Bez nich sekce Služby a Kontakt zůstanou prázdné. Galerie funguje vždy (lokální data).

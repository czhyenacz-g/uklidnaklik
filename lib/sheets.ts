const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

async function getRange(range: string): Promise<string[][]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 300 } }); // cache 5 minut
  if (!res.ok) return [];
  const data = await res.json();
  return data.values || [];
}

export async function getContent() {
  const [contactRows, serviceRows] = await Promise.all([
    getRange("Kontakt!A:B"),
    getRange("Sluzby!A:A"),
  ]);

  // Kontakt: key-value páry, trim mezer a uvozovek
  const contact = Object.fromEntries(
    contactRows.map(([key, val]) => [
      key?.trim(),
      val?.trim().replace(/^"+|"+$/g, "").trim(),
    ])
  );

  // Služby: flat list, trim mezer, přeskočit prázdné
  const services = serviceRows
    .flat()
    .map((s) => s.trim())
    .filter(Boolean);

  return { contact, services };
}

export type SheetsContent = Awaited<ReturnType<typeof getContent>>;

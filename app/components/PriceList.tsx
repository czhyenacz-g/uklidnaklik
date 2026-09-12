type PriceItem = { label: string; price: string };
type PriceGroup = { title: string; icon: string; items: PriceItem[] };

const PRICE_GROUPS: PriceGroup[] = [
  {
    title: "Běžný úklid",
    icon: "🧼",
    items: [
      { label: "Domácnost", price: "od 400 Kč/h osoba" },
      { label: "Nekomerční prostor", price: "od 300 Kč/h osoba" },
    ],
  },
  {
    title: "Generální úklid",
    icon: "🧹",
    items: [
      { label: "Domácnost", price: "od 500 Kč/h osoba" },
      { label: "Nekomerční prostor", price: "od 400 Kč/h osoba" },
    ],
  },
  {
    title: "Okna",
    icon: "🪟",
    items: [
      { label: "Pravidelné mytí oken včetně rámu (jedna strana)", price: "od 35 Kč/m²" },
      { label: "Mytí výloh včetně rámů a parapetů", price: "od 40 Kč/m²" },
      { label: "Generální mytí oken včetně rámu (jedna strana)", price: "od 50 Kč/m²" },
      { label: "Žaluzie vnitřní", price: "od 30 Kč/kus" },
      { label: "Žaluzie venkovní", price: "500 Kč/h osoba" },
    ],
  },
  {
    title: "Pára a tepování",
    icon: "🌡️",
    items: [
      { label: "Mytí parním čističem Morafit 160 °C", price: "od 1 000 Kč/h" },
      { label: "Tepování sedaček a gaučů", price: "300 Kč/sedací místo" },
      { label: "Tepování koberců, běžně znečištěný", price: "od 50 Kč" },
      { label: "Tepování koberců, silně znečištěný", price: "od 80 Kč" },
    ],
  },
];

export default function PriceList() {
  return (
    <section id="cenik" className="pt-10 pb-10 sm:pb-20 lg:pt-14 lg:pb-14 px-4 bg-[#3EC1D3]">
      <div className="page-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900">Ceník</h2>
          <p className="mt-2 text-slate-800">
            Cenu stálých úklidů nastavíme individuálně dle potřeb klienta.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PRICE_GROUPS.map((group) => (
            <div key={group.title} className="section-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-lg">
                  {group.icon}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-slate-700 leading-relaxed">{item.label}</span>
                    <span className="shrink-0 font-semibold text-slate-900 whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

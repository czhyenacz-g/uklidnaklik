const PRICE_ITEMS: { label: string; icon: string }[] = [
  { label: "Generální úklid", icon: "🧹" },
  { label: "Stálý úklid bytu a domu", icon: "🏠" },
  { label: "Nebytové prostory", icon: "🏢" },
  { label: "Tepování", icon: "🛋️" },
  { label: "Úklid s párou", icon: "🌡️" },
  { label: "Další úklid", icon: "🧼" },
];

export default function PriceList() {
  return (
    <section id="cenik" className="pt-10 pb-10 sm:pb-20 px-4 bg-[#3EC1D3]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900">Ceník</h2>
          <p className="mt-2 text-slate-800">Cenu stanovíme individuálně dle rozsahu a typu úklidu.</p>
        </div>

        <div className="section-card p-6 sm:p-10">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {PRICE_ITEMS.map((item, i) => (
              <li
                key={item.label}
                className={`flex items-start gap-3 pb-4 sm:pb-0 border-b border-slate-100 sm:border-0 ${i === PRICE_ITEMS.length - 1 ? "border-0" : ""}`}
              >
                <span className="shrink-0 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-lg">
                  {item.icon}
                </span>
                <span className="text-slate-700 leading-relaxed pt-1.5">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const SERVICE_ICONS: Record<string, string> = {
  "Generální a pravidelné úklidy": "🧹",
  "Tepování koberců a sedaček": "🛋️",
  "Mytí oken a žaluzií": "🪟",
  "Stavební úklidy": "🧱",
  "Úklid parním profesionálním přístrojem (až 160 °C)": "🌡️",
  "Organizace vašich skříní a úložných prostor": "🗄️",
};

export default function Services({ services }: { services: string[] }) {
  return (
    <section id="services" className="pt-8 pb-20 px-4 bg-gradient-to-b from-[#3EC1D3] from-0% via-[#3EC1D3] via-25% to-slate-50 to-65%">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900">Co pro vás uklidíme</h2>
        </div>

        <div className="section-card p-6 sm:p-10">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {services.map((item, i) => (
              <li
                key={item}
                className={`flex items-start gap-3 pb-4 sm:pb-0 border-b border-slate-100 sm:border-0 ${i === services.length - 1 ? "border-0" : ""}`}
              >
                <span className="shrink-0 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-lg">
                  {SERVICE_ICONS[item] ?? "🧼"}
                </span>
                <span className="text-slate-700 leading-relaxed pt-1.5">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

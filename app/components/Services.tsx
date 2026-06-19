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
    <section id="services" className="py-20 px-4 bg-[#3EC1D3]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 mb-3">Co pro vás uklidíme</h2>
          <svg width="90" height="10" viewBox="0 0 90 10" fill="none" className="mx-auto text-slate-900/40" aria-hidden="true">
            <path d="M2 8c8-8 16-8 24 0s16 8 24 0 16-8 24 0 12 6 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <div className="section-card p-6 sm:p-10">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {services.map((item) => (
              <li key={item} className="flex items-start gap-3">
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

function ServiceColumn({ title, items, icon }: { title: string; items: string[]; icon: string }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-slate-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services({ services }: { services: string[] }) {
  return (
    <section id="services" className="py-20 px-4 bg-[#3EC1D3]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-10 text-slate-900">
          Co pro vás{" "}
          <span className="sketch-underline-blue">
            uděláme
          </span>
        </h2>
        <div className="max-w-md mx-auto section-card p-6 sm:p-10">
          <ServiceColumn title="Úklidové služby" items={services} icon="🧹" />
        </div>
      </div>
    </section>
  );
}

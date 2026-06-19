const BENEFITS = [
  "Spolehlivost a důvěra",
  "Kvalitně odvedená práce",
  "Férové ceny",
  "Individuální přístup",
];

export default function WhyUs() {
  return (
    <div className="section-card p-6 sm:p-8 h-full flex flex-col">
      <h3 className="text-xl font-black text-slate-900 mb-6">Proč si vybrat Úklidovku TopTerku?</h3>
      <ul className="space-y-4 flex-1">
        {BENEFITS.map((b) => (
          <li key={b} className="flex items-center gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <svg width="11" height="9" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-slate-700 text-sm font-medium">{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center text-3xl opacity-70" aria-hidden="true">🧴🧽🪣</div>
    </div>
  );
}

const STEPS = [
  { n: 1, title: "Ozvěte se nám", text: "Zavolejte nebo napište a řekněte nám, co potřebujete uklidit." },
  { n: 2, title: "Domluvíme vše potřebné", text: "Upřesníme detaily, termín a cenu." },
  { n: 3, title: "Přijedeme a uklidíme", text: "Přijedeme, uklidíme, odjíždíme." },
  { n: 4, title: "Kontrola", text: "Možnost kontroly provedení úklidu se zákazníkem." },
];

export default function HowItWorks() {
  return (
    <div id="jak-to-funguje" className="section-card p-6 sm:p-8 lg:h-full">
      <h3 className="text-xl font-black text-slate-900 mb-6">Jak to funguje?</h3>
      <ol className="space-y-5">
        {STEPS.map((s) => (
          <li key={s.n} className="flex gap-3">
            <span className="shrink-0 w-8 h-8 rounded-full bg-slate-700 text-white font-bold text-sm flex items-center justify-center">
              {s.n}
            </span>
            <div>
              <p className="font-bold text-slate-900 text-sm mb-0.5">{s.title}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

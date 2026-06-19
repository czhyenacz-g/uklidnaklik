"use client";

const BENEFITS = [
  { icon: "🤝", label: "Důvěra a spolehlivost" },
  { icon: "🗓️", label: "Přizpůsobíme se vám" },
  { icon: "✨", label: "Perfektně čistá domácnost" },
  { icon: "📍", label: "Hradec Králové a okolí" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#3EC1D3] px-4 pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute left-[6%] top-[14%] text-2xl text-white/40">✦</span>
        <span className="absolute left-[20%] top-[78%] text-lg text-white/30">✧</span>
        <span className="absolute right-[12%] top-[10%] text-3xl text-white/30">✦</span>
        <span
          className="absolute right-[2%] bottom-[6%] w-40 h-40 rounded-full opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-black tracking-tight leading-[1.08] mb-5 text-slate-900">
            Úklid, na který se{" "}
            <span className="sketch-underline-blue">můžete spolehnout</span>
          </h1>
          <p className="text-lg text-slate-800 mb-8 max-w-md mx-auto lg:mx-0">
            Profesionální úklid domácností v Hradci Králové a okolí. Čistota, spolehlivost a férové ceny.
          </p>

          <ul className="grid grid-cols-2 gap-3 mb-9 max-w-md mx-auto lg:mx-0">
            {BENEFITS.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 bg-white/55 backdrop-blur-sm rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-900 shadow-sm"
              >
                <span className="text-base">{b.icon}</span> {b.label}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="tel:+420734148215" className="btn-primary w-full sm:w-auto">
              <span>📞</span> Zavolat
            </a>
            <a
              href="https://www.instagram.com/uklidnaklikhk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <span>✉️</span> Napsat
            </a>
          </div>
        </div>

        <div className="section-card p-4 sm:p-6 mx-auto w-full max-w-md">
          <div className="rounded-2xl overflow-hidden bg-slate-50">
            <video autoPlay loop muted playsInline className="w-full object-contain">
              <source src="/ukl.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>

      <a href="#services" className="relative mt-12 mx-auto flex w-fit animate-bounce text-slate-900">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

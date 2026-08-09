"use client";

import { PhoneIcon } from "./icons";

const BENEFITS = [
  { icon: "🤝", label: "Důvěra a spolehlivost" },
  { icon: "🗓️", label: "Přizpůsobíme se vám" },
  { icon: "✨", label: "Perfektně čistá domácnost" },
  { icon: "📍", label: "Hradec Králové a okolí" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#3EC1D3] px-4 pt-6 pb-12 sm:pt-8 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute left-[6%] top-[10%] text-2xl text-white/40">✦</span>
        <span className="absolute left-[20%] top-[85%] text-lg text-white/30">✧</span>
        <span className="absolute right-[12%] top-[8%] text-3xl text-white/30">✦</span>
        <span
          className="absolute right-[2%] bottom-[4%] w-32 h-32 rounded-full opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 lg:grid-rows-4 gap-6 lg:gap-x-12 lg:gap-y-3 items-center">
        <h1 className="order-1 lg:order-none lg:col-start-1 lg:row-start-1 text-center lg:text-left leading-tight">
          <span className="block text-base sm:text-lg font-bold text-slate-700 mb-1">
            ÚklidovkaTopTerka.cz:
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-[1.12] text-slate-900">
            Úklid, na který se můžete spolehnout
          </span>
        </h1>

        <p className="order-2 lg:order-none lg:col-start-1 lg:row-start-2 text-center lg:text-left text-base sm:text-lg text-slate-800 max-w-md mx-auto lg:mx-0">
          Profesionální úklid v Hradci Králové, Pardubicích, Chlumci nad Cidlinou, Náchodě a okolí. Čistota, spolehlivost a férové ceny.
        </p>

        <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-4 section-card p-3 sm:p-4 mx-auto w-full max-w-xs sm:max-w-sm">
          <div className="rounded-2xl overflow-hidden bg-white h-[260px] sm:h-[300px] flex items-center justify-center">
            <video autoPlay loop muted playsInline className="h-full w-auto max-w-full object-contain">
              <source src="/ukl.webm" type="video/webm" />
            </video>
          </div>
        </div>

        <div className="order-4 lg:order-none lg:col-start-1 lg:row-start-3 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <a href="tel:+420734148215" className="btn-primary w-full sm:w-auto">
            <PhoneIcon className="text-white" /> Zavolat
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

        <ul className="order-5 lg:order-none lg:col-start-1 lg:row-start-4 grid grid-cols-2 gap-2 max-w-md mx-auto lg:mx-0">
          {BENEFITS.map((b) => (
            <li
              key={b.label}
              className="flex items-center gap-1.5 rounded-2xl bg-white/45 border border-white/60 px-3 py-1.5 text-xs font-semibold text-slate-900"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/70 text-[11px] shrink-0">
                {b.icon}
              </span>
              <span className="leading-snug">{b.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

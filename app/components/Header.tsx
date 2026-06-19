"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#services", label: "Služby" },
  { href: "#jak-to-funguje", label: "Jak to funguje" },
  { href: "#fotky", label: "Fotky" },
  { href: "#objednavka", label: "Poptávka" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#3EC1D3]/95 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex flex-col leading-tight shrink-0">
          <span className="text-lg font-black text-slate-900">ÚklidovkaTopTerka.cz</span>
          <span className="hidden sm:block text-[11px] text-slate-700">Profesionální úklid a servis pro váš domov</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-slate-800 hover:text-slate-950 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+420734148215"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-700 text-white text-sm font-bold px-5 py-2.5 shadow-sm transition hover:bg-slate-800 hover:-translate-y-0.5 shrink-0"
        >
          <span>📞</span> Zavolat
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Otevřít menu"
          aria-expanded={open}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 shrink-0"
        >
          <span className="w-6 h-0.5 bg-slate-900 rounded-full" />
          <span className="w-6 h-0.5 bg-slate-900 rounded-full" />
          <span className="w-6 h-0.5 bg-slate-900 rounded-full" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-black/5 bg-[#3EC1D3] px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-slate-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+420734148215"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-700 text-white text-sm font-bold px-5 py-3 mt-1 shadow-sm transition hover:bg-slate-800"
          >
            <span>📞</span> Zavolat
          </a>
        </nav>
      )}
    </header>
  );
}

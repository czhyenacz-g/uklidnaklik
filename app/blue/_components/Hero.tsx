"use client";

const COLOR = "#1565c0";
const COLOR_GREEN = "#66bb6a";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-12 text-center">

      {/* SVG logo animace */}
      <div className="mb-8">
        <img
          src="/uklizecka_logo_animated_blue.svg"
          alt="Uklízečka"
          className="w-40 md:w-56 lg:w-72 object-contain"
        />
      </div>

      {/* Text */}
      <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
        Úklid na{" "}
        <span className="sketch-underline" style={{ color: COLOR_GREEN }}>klik</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-md">
        Profesionální úklid a servis pro váš domov
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="tel:+420734148215"
          className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white transition hover:scale-105 active:scale-95"
          style={{ backgroundColor: COLOR }}
        >
          <span>📞</span> Zavolat
        </a>
        <a
          href="https://www.instagram.com/uklidnaklik_hk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold border-2 border-gray-900 text-gray-900 transition hover:scale-105 active:scale-95 hover:bg-gray-900 hover:text-white"
        >
          <span>✉️</span> Napsat
        </a>
      </div>

      {/* Scroll hint */}
      <a href="#services" className="mt-12 animate-bounce" style={{ color: COLOR }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

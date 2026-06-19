"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-12 text-center bg-[#3EC1D3]">

      <div className="mb-8 rounded-2xl overflow-hidden w-[65vw] md:w-[275px] lg:w-[338px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-contain"
        >
          <source src="/ukl.webm" type="video/webm" />
        </video>
      </div>

      <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3 text-slate-900">
        Úklidovka<span className="sketch-underline-blue">TopTerka.cz</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-900 mb-10 max-w-md">
        Profesionální úklid a servis pro váš domov
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center sm:items-stretch justify-center">
        <a
          href="tel:+420734148215"
          className="btn-primary w-full sm:w-auto"
        >
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

      <a href="#services" className="mt-12 animate-bounce text-slate-900">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

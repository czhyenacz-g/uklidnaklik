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

      <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3 text-black">
        Úklidovka<span className="sketch-underline-blue">TopTerka.cz</span>
      </h1>
      <p className="text-lg md:text-xl text-black mb-10 max-w-md">
        Profesionální úklid a servis pro váš domov
      </p>

      <div className="flex flex-col sm:flex-row gap-3 flex-wrap justify-center">
        <a
          href="tel:+420734148215"
          className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-black bg-gray-200 transition hover:scale-105 active:scale-95"
        >
          <span>📞</span> Zavolat
        </a>
        <a
          href="https://www.instagram.com/uklidnaklikhk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold border-2 border-black text-black transition hover:scale-105 active:scale-95 hover:bg-black hover:text-white"
        >
          <span>✉️</span> Napsat
        </a>
      </div>

      <a href="#services" className="mt-12 animate-bounce text-black">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

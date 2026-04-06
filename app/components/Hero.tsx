"use client";

import CleaningWalkAnimation from "./CleaningWalkAnimation";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-12 text-center">

      <CleaningWalkAnimation />

      {/* Text */}
      <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
        Úklid na{" "}
        <span className="sketch-underline" style={{ color: "#d32f2f" }}>klik</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-md">
        Profesionální úklid a servis pro váš domov
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="tel:+420734148215"
          className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white transition hover:scale-105 active:scale-95"
          style={{ backgroundColor: "#d32f2f" }}
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
    </section>
  );
}

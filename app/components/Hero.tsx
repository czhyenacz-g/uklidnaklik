"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-12 text-center">

      {/* Flipbook illustration */}
      <div className="relative w-48 h-48 mb-8 mx-auto">

        {/* Frame 1 — čisté okno */}
        <svg className="frame-1 absolute inset-0" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="100" height="80" rx="3" stroke="#1a1a1a" strokeWidth="2.5" fill="white"/>
          <line x1="60" y1="20" x2="60" y2="100" stroke="#1a1a1a" strokeWidth="2"/>
          <line x1="10" y1="60" x2="110" y2="60" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="8" y="18" width="104" height="8" rx="2" fill="#1a1a1a"/>
          {/* sparkle */}
          <text x="75" y="45" fontSize="14" className="sparkle">✨</text>
          <text x="20" y="55" fontSize="10" className="sparkle sparkle-delay-2">✦</text>
        </svg>

        {/* Frame 2 — hadr na okně vlevo */}
        <svg className="frame-2 absolute inset-0" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="100" height="80" rx="3" stroke="#1a1a1a" strokeWidth="2.5" fill="white"/>
          <line x1="60" y1="20" x2="60" y2="100" stroke="#1a1a1a" strokeWidth="2"/>
          <line x1="10" y1="60" x2="110" y2="60" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="8" y="18" width="104" height="8" rx="2" fill="#1a1a1a"/>
          {/* hadr */}
          <rect x="18" y="28" width="22" height="18" rx="4" fill="#d32f2f" opacity="0.8" stroke="#1a1a1a" strokeWidth="1.5"/>
          <line x1="18" y1="35" x2="40" y2="35" stroke="#1a1a1a" strokeWidth="1"/>
          <line x1="18" y1="40" x2="40" y2="40" stroke="#1a1a1a" strokeWidth="1"/>
          {/* ruka */}
          <line x1="35" y1="30" x2="50" y2="20" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
        </svg>

        {/* Frame 3 — hadr uprostřed */}
        <svg className="frame-3 absolute inset-0" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="100" height="80" rx="3" stroke="#1a1a1a" strokeWidth="2.5" fill="white"/>
          <line x1="60" y1="20" x2="60" y2="100" stroke="#1a1a1a" strokeWidth="2"/>
          <line x1="10" y1="60" x2="110" y2="60" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="8" y="18" width="104" height="8" rx="2" fill="#1a1a1a"/>
          <rect x="48" y="28" width="22" height="18" rx="4" fill="#d32f2f" opacity="0.8" stroke="#1a1a1a" strokeWidth="1.5"/>
          <line x1="48" y1="35" x2="70" y2="35" stroke="#1a1a1a" strokeWidth="1"/>
          <line x1="48" y1="40" x2="70" y2="40" stroke="#1a1a1a" strokeWidth="1"/>
          <line x1="65" y1="30" x2="80" y2="20" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
        </svg>

        {/* Frame 4 — hadr vpravo, okno čisté */}
        <svg className="frame-4 absolute inset-0" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="100" height="80" rx="3" stroke="#1a1a1a" strokeWidth="2.5" fill="white"/>
          <line x1="60" y1="20" x2="60" y2="100" stroke="#1a1a1a" strokeWidth="2"/>
          <line x1="10" y1="60" x2="110" y2="60" stroke="#1a1a1a" strokeWidth="2"/>
          <rect x="8" y="18" width="104" height="8" rx="2" fill="#1a1a1a"/>
          <rect x="80" y="28" width="22" height="18" rx="4" fill="#d32f2f" opacity="0.8" stroke="#1a1a1a" strokeWidth="1.5"/>
          <line x1="80" y1="35" x2="102" y2="35" stroke="#1a1a1a" strokeWidth="1"/>
          <line x1="80" y1="40" x2="102" y2="40" stroke="#1a1a1a" strokeWidth="1"/>
          <line x1="95" y1="30" x2="110" y2="20" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <text x="20" y="50" fontSize="12" className="sparkle sparkle-delay-1">✦</text>
          <text x="38" y="45" fontSize="10" className="sparkle sparkle-delay-3">✨</text>
        </svg>
      </div>

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

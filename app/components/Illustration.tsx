export default function Illustration() {
  return (
    <section className="py-12 flex justify-center px-4">
      <div className="relative w-full max-w-sm">
        <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">

          {/* Dům — základna */}
          <rect x="60" y="120" width="200" height="130" rx="2" fill="white" stroke="#1a1a1a" strokeWidth="2.5"/>

          {/* Střecha */}
          <polygon points="40,122 160,30 280,122" fill="white" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round"/>
          {/* Střecha — šrafování */}
          <line x1="80" y1="110" x2="110" y2="85" stroke="#1a1a1a" strokeWidth="1" opacity="0.3"/>
          <line x1="100" y1="118" x2="140" y2="72" stroke="#1a1a1a" strokeWidth="1" opacity="0.3"/>
          <line x1="130" y1="122" x2="170" y2="55" stroke="#1a1a1a" strokeWidth="1" opacity="0.3"/>
          <line x1="160" y1="122" x2="200" y2="55" stroke="#1a1a1a" strokeWidth="1" opacity="0.3"/>
          <line x1="190" y1="118" x2="220" y2="78" stroke="#1a1a1a" strokeWidth="1" opacity="0.3"/>
          <line x1="215" y1="110" x2="235" y2="90" stroke="#1a1a1a" strokeWidth="1" opacity="0.3"/>

          {/* Červený accent — pás pod střechou */}
          <rect x="60" y="118" width="200" height="10" fill="#d32f2f"/>

          {/* Okno vlevo — čisté, leskne se */}
          <rect x="80" y="145" width="55" height="50" rx="2" fill="#e8f4fd" stroke="#1a1a1a" strokeWidth="2"/>
          <line x1="107" y1="145" x2="107" y2="195" stroke="#1a1a1a" strokeWidth="1.5"/>
          <line x1="80" y1="170" x2="135" y2="170" stroke="#1a1a1a" strokeWidth="1.5"/>
          {/* lesk */}
          <line x1="87" y1="150" x2="92" y2="162" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>

          {/* Sparkle u okna */}
          <text x="138" y="152" fontSize="14" className="sparkle">✦</text>
          <text x="68" y="148" fontSize="10" className="sparkle sparkle-delay-2">✨</text>

          {/* Dveře */}
          <rect x="148" y="175" width="45" height="75" rx="2" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
          <circle cx="188" cy="212" r="3" fill="#d32f2f"/>
          {/* panel dveří */}
          <rect x="153" y="182" width="15" height="20" rx="1" stroke="#1a1a1a" strokeWidth="1" fill="none"/>
          <rect x="174" y="182" width="15" height="20" rx="1" stroke="#1a1a1a" strokeWidth="1" fill="none"/>

          {/* Okno vpravo — instalatér montuje */}
          <rect x="185" y="145" width="55" height="50" rx="2" fill="#fff9e6" stroke="#1a1a1a" strokeWidth="2"/>
          <line x1="212" y1="145" x2="212" y2="195" stroke="#1a1a1a" strokeWidth="1.5"/>
          <line x1="185" y1="170" x2="240" y2="170" stroke="#1a1a1a" strokeWidth="1.5"/>

          {/* Postava — uklízečka vlevo (s tyčí) */}
          {/* hlava */}
          <circle cx="38" cy="175" r="10" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
          {/* tělo */}
          <line x1="38" y1="185" x2="38" y2="220" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
          {/* ruce — drží tyč */}
          <line x1="38" y1="198" x2="62" y2="190" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="38" y1="205" x2="25" y2="215" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* nohy */}
          <line x1="38" y1="220" x2="28" y2="248" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="38" y1="220" x2="48" y2="248" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* tyč s mopem */}
          <line x1="62" y1="190" x2="70" y2="140" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <ellipse cx="70" cy="138" rx="10" ry="5" fill="#d32f2f" stroke="#1a1a1a" strokeWidth="1.5"/>

          {/* Postava — montér vpravo (u okna) */}
          <circle cx="282" cy="158" r="10" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
          {/* helma */}
          <rect x="273" y="148" width="19" height="7" rx="3" fill="#d32f2f" stroke="#1a1a1a" strokeWidth="1.5"/>
          {/* tělo */}
          <line x1="282" y1="168" x2="282" y2="205" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
          {/* ruce — montuje */}
          <line x1="282" y1="180" x2="245" y2="170" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="282" y1="185" x2="295" y2="178" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          {/* nohy */}
          <line x1="282" y1="205" x2="272" y2="248" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="282" y1="205" x2="292" y2="248" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>

          {/* Základ domu */}
          <line x1="50" y1="250" x2="270" y2="250" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
          {/* stín */}
          <line x1="60" y1="252" x2="260" y2="252" stroke="#1a1a1a" strokeWidth="1" opacity="0.2"/>

        </svg>
      </div>
    </section>
  );
}

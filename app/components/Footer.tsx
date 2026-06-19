const BADGES = ["Důvěra", "Kvalita", "Férové ceny"];

export default function Footer() {
  return (
    <footer className="bg-[#3EC1D3] border-t border-black/10 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-xs text-slate-900 font-medium">
          © {new Date().getFullYear()} ÚklidovkaTopTerka.cz
        </p>

        <div className="flex items-center gap-2">
          {BADGES.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-slate-800 bg-white/60 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs text-slate-700">
          Web tvoří{" "}
          <a href="mailto:hynek@darbujan.com" className="underline hover:opacity-70 transition-colors">
            hynek@darbujan.com
          </a>
        </p>
      </div>
    </footer>
  );
}

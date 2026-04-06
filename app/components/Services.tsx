import content from "../../data/content.json";

function ServiceColumn({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: string;
}) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 shrink-0 w-5 h-5 rounded-full border-2 border-current flex items-center justify-center" style={{ color: "#d32f2f" }}>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-gray-700 leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Nadpis sekce */}
        <h2 className="text-3xl font-black text-center mb-12">
          Co pro vás{" "}
          <span className="sketch-underline" style={{ color: "#d32f2f" }}>
            uděláme
          </span>
        </h2>

        {/* Dva sloupce */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <ServiceColumn
            title={content.services.cleaning.title}
            items={content.services.cleaning.items}
            icon="🧹"
          />
          {/* Oddělovač */}
          <div className="hidden md:block w-px bg-gray-200 self-stretch" />
          <ServiceColumn
            title={content.services.windows.title}
            items={content.services.windows.items}
            icon="🪟"
          />
        </div>
      </div>
    </section>
  );
}

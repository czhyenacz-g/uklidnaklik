import content from "../../data/content.json";

function CompanyCard({
  name,
  web,
  phone,
  instagram,
  email,
  accent,
}: {
  name: string;
  web: string;
  phone: string;
  instagram: string;
  email?: string;
  accent?: boolean;
}) {
  return (
    <div className={`rounded-2xl border-2 p-6 ${accent ? "border-red-700 bg-red-50" : "border-gray-200 bg-white"}`}>
      <h3 className="font-black text-lg mb-4">{name}</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-red-700 transition-colors font-medium">
            <span>📞</span> {phone}
          </a>
        </li>
        <li>
          <a href={`https://${web}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-700 transition-colors">
            <span>🌐</span> {web}
          </a>
        </li>
        <li>
          <a href={`https://instagram.com/${instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-700 transition-colors">
            <span>📸</span> {instagram}
          </a>
        </li>
        {email && (
          <li>
            <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-red-700 transition-colors">
              <span>✉️</span> {email}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default function Contact() {
  const [topterka] = content.companies;

  return (
    <section className="py-16 px-4 border-t-2 border-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-2">Kontakt</h2>
        <p className="text-gray-500 mb-10">Ozvěte se nám — rádi poradíme</p>

        <div className="max-w-sm mx-auto text-left">
          <CompanyCard
            name={topterka.name}
            web={topterka.web}
            phone={topterka.phone}
            instagram={topterka.instagram}
            email={topterka.email}
            accent
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-1">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} TOPTERKA s.r.o. —{" "}
            <a href="https://uklidnaklik.cz" className="hover:text-gray-600 transition-colors">
              uklidnaklik.cz
            </a>
          </p>
          <p className="text-xs text-gray-300">
            web:{" "}
            <a
              href="mailto:hynek@darbujan.com"
              className="hover:text-gray-600 transition-colors"
            >
              hynek@darbujan.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

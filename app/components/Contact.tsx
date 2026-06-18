"use client";

import { SheetsContent } from "../../lib/sheets";

function CompanyCard({
  name, web, phone, instagram, email,
}: {
  name: string; web: string; phone: string; instagram: string; email?: string;
}) {
  const webClean = web.replace(/^https?:\/\//, "");
  return (
    <div className="rounded-2xl border-4 border-black p-6 bg-white">
      <h3 className="font-black text-lg mb-4 text-black">{name}</h3>
      <ul className="space-y-2 text-sm text-black">
        <li>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-2 font-medium transition-colors hover:opacity-70">
            <span>📞</span> {phone}
          </a>
        </li>
        <li>
          <a href={`https://${webClean}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:opacity-70">
            <span>🌐</span> {webClean}
          </a>
        </li>
        <li>
          <a href={`https://instagram.com/${instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:opacity-70">
            <span>📸</span> {instagram}
          </a>
        </li>
        {email && (
          <li>
            <a href={`mailto:${email}`} className="flex items-center gap-2 font-medium transition-colors hover:opacity-70">
              <span>✉️</span> {email}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default function Contact({ contact }: { contact: SheetsContent["contact"] }) {
  return (
    <section className="py-16 px-4 border-t-2 border-black bg-[#3EC1D3]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-2 text-black">Kontakt</h2>
        <p className="text-black mb-10">Ozvěte se nám — rádi poradíme</p>

        <div className="max-w-sm mx-auto text-left">
          <CompanyCard
            name={contact.name}
            web={contact.web}
            phone={contact.phone}
            instagram={contact.instagram}
            email={contact.mail}
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-1">
          <p className="text-xs text-black">
            © {new Date().getFullYear()} TOPTERKA s.r.o. —{" "}
            <a href="https://uklidovkatopterka.cz" className="hover:opacity-70 transition-colors">
              uklidovkatopterka.cz
            </a>
          </p>
          <p className="text-xs text-black">
            web stvořil:{" "}
            <a href="mailto:hynek@darbujan.com" className="hover:opacity-70 transition-colors">
              hynek@darbujan.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

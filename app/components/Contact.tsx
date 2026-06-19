"use client";

import { SheetsContent } from "../../lib/sheets";

function ContactTile({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 transition hover:shadow-md hover:-translate-y-0.5"
    >
      <span className="text-2xl shrink-0">{icon}</span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</span>
        <span className="block text-sm font-medium text-slate-900 truncate">{value}</span>
      </span>
    </a>
  );
}

function CompanyCard({
  name, web, phone, instagram, email,
}: {
  name: string; web: string; phone: string; instagram: string; email?: string;
}) {
  const webClean = web.replace(/^https?:\/\//, "");
  return (
    <div className="section-card border border-slate-100 p-6 sm:p-8">
      <h3 className="font-black text-lg mb-5 text-slate-900 text-center">{name}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <ContactTile icon="📞" label="Telefon" value={phone} href={`tel:${phone.replace(/\s/g, "")}`} />
        <ContactTile icon="🌐" label="Web" value={webClean} href={`https://${webClean}`} />
        <ContactTile icon="📸" label="Instagram" value={instagram} href={`https://instagram.com/${instagram.replace("@", "")}`} />
        {email && <ContactTile icon="✉️" label="E-mail" value={email} href={`mailto:${email}`} />}
      </div>
    </div>
  );
}

export default function Contact({ contact }: { contact: SheetsContent["contact"] }) {
  return (
    <section className="py-20 px-4 bg-[#3EC1D3]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-2 text-slate-900">Kontakt</h2>
        <p className="text-slate-900 mb-10">Ozvěte se nám — rádi poradíme</p>

        <CompanyCard
          name={contact.name}
          web={contact.web}
          phone={contact.phone}
          instagram={contact.instagram}
          email={contact.mail}
        />

        <div className="mt-8 flex flex-col items-center gap-0.5 opacity-70">
          <p className="text-xs text-slate-900">
            © {new Date().getFullYear()} TOPTERKA s.r.o. —{" "}
            <a href="https://uklidovkatopterka.cz" className="hover:opacity-70 transition-colors">
              uklidovkatopterka.cz
            </a>
          </p>
          <p className="text-xs text-slate-900">
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

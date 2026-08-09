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
  name, phone, email,
}: {
  name: string; web: string; phone: string; instagram: string; email?: string;
}) {
  const webClean = "uklidovka-topterka.cz";
  return (
    <div className="section-card border border-slate-100 p-6 sm:p-8">
      <h3 className="font-black text-lg mb-5 text-slate-900 text-center lg:text-left">{name}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <ContactTile icon="📞" label="Zavolejte nám" value={phone} href={`tel:${phone.replace(/\s/g, "")}`} />
        {email && <ContactTile icon="✉️" label="Napište nám" value={email} href={`mailto:${email}`} />}
        {/* Instagram dočasně skryto */}
        <ContactTile icon="🌐" label="Web" value={webClean} href={`https://${webClean}`} />
      </div>
    </div>
  );
}

export default function Contact({ contact }: { contact: SheetsContent["contact"] }) {
  return (
    <div id="kontakt" className="w-full">
      <h2 className="text-2xl sm:text-3xl font-black mb-2 text-slate-900 text-center lg:text-left">Kontakt</h2>
      <p className="text-slate-800 mb-6 text-center lg:text-left">Ozvěte se nám</p>

      <CompanyCard
        name={contact.name}
        web={contact.web}
        phone={contact.phone}
        instagram={contact.instagram}
        email={contact.mail}
      />
    </div>
  );
}

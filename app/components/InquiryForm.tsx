"use client";

import { useState, FormEvent } from "react";

const CLEANING_TYPES = [
  "Generální úklid",
  "Stálý úklid bytu a domu",
  "Nebytové prostory",
  "Tepování",
  "Úklid s párou",
  "Další úklid",
];

type Status = "idle" | "sending" | "success" | "error";

type Fields = {
  name: string;
  phone: string;
  email: string;
  location: string;
  type: string;
  date: string;
  note: string;
  website: string; // honeypot
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", phone: "", email: "", location: "", type: "", date: "", note: "", website: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim())     e.name = "Jméno je povinné.";
  if (!f.location.trim()) e.location = "Lokalita je povinná.";
  if (!f.phone.trim() && !f.email.trim()) {
    e.phone = "Vyplňte alespoň telefon nebo e-mail.";
  }
  if (!f.type) e.type = "Vyberte typ úklidu.";
  return e;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

const inputCls = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-slate-900/30 focus:border-slate-900 transition";

export default function InquiryForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function set(key: keyof Fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
    };
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setFields(EMPTY);
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="objednavka" className="w-full">
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 text-center lg:text-left">
        Nezávazná poptávka
      </h2>
      <p className="text-slate-800 text-center lg:text-left mb-6 max-w-md mx-auto lg:mx-0">
        Pošlete nám základní údaje a my se vám ozveme s cenou, termínem a rozsahem úklidu.
      </p>

      {status === "success" ? (
          <div className="section-card border border-slate-100 p-8 text-center">
            <div className="text-4xl mb-4">✅</div>
            <p className="font-bold text-slate-900 text-lg mb-1">Poptávka odeslána!</p>
            <p className="text-slate-700">Děkujeme, poptávka byla odeslána. Ozveme se vám co nejdříve.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold underline text-slate-700 hover:text-slate-900 transition"
            >
              Odeslat další poptávku
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="section-card border border-slate-100 p-6 sm:p-10 space-y-5">

            {/* Honeypot — hidden from real users */}
            <div className="hidden" aria-hidden="true">
              <input tabIndex={-1} autoComplete="off" value={fields.website} onChange={set("website")} />
            </div>

            <Field label="Jméno a příjmení *" error={errors.name}>
              <input type="text" className={inputCls} placeholder="Jana Nováková" value={fields.name} onChange={set("name")} autoComplete="name" />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Telefon" error={errors.phone}>
                <input type="tel" className={inputCls} placeholder="+420 123 456 789" value={fields.phone} onChange={set("phone")} autoComplete="tel" />
              </Field>
              <Field label="E-mail" error={errors.email}>
                <input type="email" className={inputCls} placeholder="jana@email.cz" value={fields.email} onChange={set("email")} autoComplete="email" />
              </Field>
            </div>
            {errors.phone && !errors.email && (
              <p className="-mt-3 text-xs text-slate-500">Stačí vyplnit jedno z polí.</p>
            )}

            <Field label="Lokalita / město *" error={errors.location}>
              <input type="text" className={inputCls} placeholder="Hradec Králové" value={fields.location} onChange={set("location")} />
            </Field>

            <Field label="Typ úklidu *" error={errors.type}>
              <select className={inputCls} value={fields.type} onChange={set("type")}>
                <option value="">— Vyberte typ —</option>
                {CLEANING_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </Field>

            <Field label="Preferovaný termín">
              <input type="text" className={inputCls} placeholder="např. pracovní dny od 9:00, nebo konkrétní datum" value={fields.date} onChange={set("date")} />
            </Field>

            <Field label="Poznámka">
              <textarea
                className={`${inputCls} resize-none`}
                rows={4}
                placeholder="Velikost bytu, počet místností, specifické požadavky…"
                value={fields.note}
                onChange={set("note")}
              />
            </Field>

            {status === "error" && (
              <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">
                Poptávku se nepodařilo odeslat. Zkuste to prosím znovu nebo nás kontaktujte přímo.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Odesílám…" : "Odeslat poptávku"}
            </button>

            <p className="text-xs text-slate-500 text-center">
              Odesláním formuláře nám pošlete základní údaje k poptávce. Cenu a termín si potvrdíme individuálně.
            </p>
          </form>
        )}
    </div>
  );
}

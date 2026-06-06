"use client";

import { useState, FormEvent } from "react";

const COLOR = "#3EC1D3";

const CLEANING_TYPES = [
  "Pravidelný úklid domácnosti",
  "Jednorázový úklid domácnosti",
  "Úklid kanceláře",
  "Úklid po rekonstrukci",
  "Jiné",
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
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-[#3EC1D3] focus:border-transparent transition";

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
    <section id="objednavka" className="py-16 px-4" style={{ backgroundColor: "#F7F7F7" }}>
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">
          Nezávazná{" "}
          <span className="sketch-underline-blue" style={{ color: COLOR }}>poptávka</span>
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-md mx-auto">
          Pošlete nám základní údaje a my se vám ozveme s cenou, termínem a rozsahem úklidu.
        </p>

        {status === "success" ? (
          <div className="rounded-2xl bg-white border-2 p-8 text-center" style={{ borderColor: COLOR }}>
            <div className="text-4xl mb-4">✅</div>
            <p className="font-bold text-gray-900 text-lg mb-1">Poptávka odeslána!</p>
            <p className="text-gray-500">Děkujeme, poptávka byla odeslána. Ozveme se vám co nejdříve.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold underline text-gray-400 hover:text-gray-600 transition"
            >
              Odeslat další poptávku
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-5">

            {/* Honeypot — hidden from real users */}
            <div className="hidden" aria-hidden="true">
              <input tabIndex={-1} autoComplete="off" value={fields.website} onChange={set("website")} />
            </div>

            <Field label="Jméno *" error={errors.name}>
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
              <p className="-mt-3 text-xs text-gray-500">Stačí vyplnit jedno z polí.</p>
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
              className="w-full py-4 rounded-full font-bold text-white text-base transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: COLOR }}
            >
              {status === "sending" ? "Odesílám…" : "Odeslat poptávku"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              Odesláním formuláře nám pošlete základní údaje k poptávce. Cenu a termín si potvrdíme individuálně.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

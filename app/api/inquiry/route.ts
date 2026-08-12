import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_LEN = { name: 100, phone: 30, email: 100, location: 100, date: 100, note: 1000 };

function truncate(val: unknown, max: number): string {
  return typeof val === "string" ? val.trim().slice(0, max) : "";
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const name     = truncate(body.name, MAX_LEN.name);
  const phone    = truncate(body.phone, MAX_LEN.phone);
  const email    = truncate(body.email, MAX_LEN.email);
  const location = truncate(body.location, MAX_LEN.location);
  const type     = truncate(body.type, 60);
  const date     = truncate(body.date, MAX_LEN.date);
  const note     = truncate(body.note, MAX_LEN.note);
  const honeypot = truncate(body.website, 10);

  // Server-side validation
  if (!name || !location || (!phone && !email) || !type) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  // Honeypot: silently succeed without sending
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail  = process.env.INQUIRY_TO_EMAIL;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !toEmail) {
    console.error("inquiry: missing env SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / INQUIRY_TO_EMAIL");
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const html = `
<table style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#1f2937;border-collapse:collapse;width:100%;max-width:560px">
  <tr><td colspan="2" style="padding:16px 0 8px;font-size:18px;font-weight:700;border-bottom:2px solid #3EC1D3">Nová poptávka úklidu</td></tr>
  <tr><td style="padding:10px 12px 4px 0;color:#6b7280;white-space:nowrap">Jméno</td><td style="padding:10px 0 4px"><strong>${name}</strong></td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Telefon</td><td style="padding:4px 0">${phone || "—"}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#6b7280">E-mail</td><td style="padding:4px 0">${email || "—"}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Lokalita</td><td style="padding:4px 0">${location}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Typ úklidu</td><td style="padding:4px 0">${type}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Termín</td><td style="padding:4px 0">${date || "—"}</td></tr>
  <tr><td style="padding:4px 12px 16px 0;color:#6b7280;vertical-align:top">Poznámka</td><td style="padding:4px 0 16px">${note || "—"}</td></tr>
  <tr><td colspan="2" style="padding-top:8px;font-size:12px;color:#9ca3af;border-top:1px solid #e5e7eb">Odesláno z webu uklidovka-topterka.cz</td></tr>
</table>`;

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: toEmail,
      ...(email ? { replyTo: email } : {}),
      subject: "Poptávka úklidu z webu Úklid na klik",
      html,
    });
  } catch (err) {
    console.error("inquiry: smtp error", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

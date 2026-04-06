import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "Úklid na klik | Profesionální úklid a okna",
  description: "Profesionální úklid a servis pro váš domov. Generální úklidy, tepování, mytí oken. Prodej a montáž oken a dveří po celé ČR.",
  openGraph: {
    title: "Úklid na klik",
    description: "Profesionální úklid a servis pro váš domov",
    url: "https://uklidnaklik.cz",
    siteName: "Úklid na klik",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Úklid na klik",
    description: "Profesionální úklid a servis pro váš domov",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className="bg-stone-50 text-gray-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://uklidovkatopterka.cz"),
  icons: { icon: "/favicon.svg" },
  title: "ÚklidovkaTopTerka.cz | Profesionální úklid a okna",
  description: "Profesionální úklid a servis pro váš domov. Generální úklidy, tepování, mytí oken. Prodej a montáž oken a dveří po celé ČR.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ÚklidovkaTopTerka.cz",
    description: "Profesionální úklid a servis pro váš domov",
    url: "https://uklidovkatopterka.cz",
    siteName: "ÚklidovkaTopTerka.cz",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=%C3%9AklidovkaTopTerka.cz", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ÚklidovkaTopTerka.cz",
    description: "Profesionální úklid a servis pro váš domov",
    images: ["/api/og?title=%C3%9AklidovkaTopTerka.cz"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ÚklidovkaTopTerka.cz",
  url: "https://uklidovkatopterka.cz",
  telephone: "+420734148215",
  image: "https://uklidovkatopterka.cz/api/og?title=%C3%9AklidovkaTopTerka.cz",
  description: "Profesionální úklid a servis pro váš domov. Generální úklidy, tepování, mytí oken.",
  areaServed: "CZ",
  sameAs: ["https://www.instagram.com/uklidnaklikhk"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#3EC1D3] text-slate-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://urologasrorturayev.uz";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Dr. Asror To'rayev — Urolog-Androlog Samarqand | Oliy toifali shifokor",
  description:
    "Samarqanddagi oliy toifali urolog-androlog Dr. Asror To'rayev. HoLEP, laparoskopiya, PCNL, varikotsele, bepushtlik, prostata davolash. Sintez Lab, Ixlos Med, ECU Medical. +998 90 008 38 78",
  keywords: [
    // Uzbek
    "urolog Samarqand",
    "androlog Samarqand",
    "urolog-androlog Samarqand",
    "Dr Asror To'rayev",
    "Asror To'rayev urolog",
    "HoLEP Samarqand",
    "varikotsele davolash Samarqand",
    "bepushtlik davolash",
    "prostata operatsiya Samarqand",
    "buyrak toshi davolash",
    "PCNL operatsiya",
    "laparoskopiya Samarqand",
    "siydik toshi davolash",
    "jinsiy zaiflik davolash",
    "gidrosele operatsiya",
    "Sintez Lab Samarqand",
    "Ixlos Med Samarqand",
    "ECU Medical Samarqand",
    // Russian (for Yandex)
    "уролог Самарканд",
    "андролог Самарканд",
    "уролог андролог Самарканд",
    "Dr Asror Turayev",
    "лечение варикоцеле Самарканд",
    "лечение бесплодия Самарканд",
    "операция простата Самарканд",
    "камни почек лечение Самарканд",
    "лапароскопия Самарканд",
    "HoLEP Самарканд",
  ],
  authors: [{ name: "Dr. Asror To'rayev" }],
  creator: "Dr. Asror To'rayev",
  publisher: "Dr. Asror To'rayev",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Dr. Asror To'rayev — Urolog-Androlog Samarqand",
    description:
      "Samarqanddagi oliy toifali urolog-androlog. HoLEP, laparoskopiya, PCNL, varikotsele, bepushtlik davolash. +998 90 008 38 78",
    type: "website",
    url: BASE_URL,
    locale: "uz_UZ",
    siteName: "Urolog-Androlog Samarqand — Dr. Asror To'rayev",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dr. Asror To'rayev — Urolog-Androlog Samarqand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Asror To'rayev — Urolog-Androlog Samarqand",
    description:
      "Samarqanddagi oliy toifali urolog-androlog. HoLEP, laparoskopiya, PCNL. +998 90 008 38 78",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "FLAWWJ2anKRE_eOrcv5aBK1xXcImiObc1tp0CwLtwbI",
    yandex: "166b03b96fe69401",
  },
  other: {
    "geo.region": "UZ-SA",
    "geo.placename": "Samarqand",
    "geo.position": "39.6542;66.9597",
    "ICBM": "39.6542, 66.9597",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://yandex.uz" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

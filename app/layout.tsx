import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
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
  title:
    "Dr. Asror To'rayev — Urolog-Androlog Samarqand & Buxoro | Oliy toifali shifokor",
  description:
    "Samarqanddagi oliy toifali urolog-androlog Dr. Asror To'rayev. HoLEP, laparoskopiya, PCNL, varikotsele, bepushtlik, prostata davolash. Sintez Lab, Ixlos Med, ECU Medical. +998 90 008 38 78",
  keywords: [
    // Uzbek
    "urolog Samarqand & Buxoro",
    "androlog Samarqand & Buxoro",
    "urolog-androlog Samarqand & Buxoro",
    "Dr Asror To'rayev",
    "Asror To'rayev urolog",
    "HoLEP Samarqand & Buxoro",
    "varikotsele davolash Samarqand & Buxoro",
    "bepushtlik davolash",
    "prostata operatsiya Samarqand & Buxoro",
    "buyrak toshi davolash",
    "PCNL operatsiya",
    "laparoskopiya Samarqand & Buxoro",
    "siydik toshi davolash",
    "jinsiy zaiflik davolash",
    "gidrosele operatsiya",
    "Sintez Lab Samarqand & Buxoro",
    "Ixlos Med Samarqand & Buxoro",
    "ECU Medical Samarqand & Buxoro",
    // Russian (for Yandex)
    "уролог Самарканд",
    "уролог Бухоро",
    "андролог Самарканд",
    "уролог андролог Самарканд & Бухоро",
    "Dr Asror Turayev",
    "лечение варикоцеле Самарканд & Бухоро",
    "лечение бесплодия Самарканд & Бухоро",
    "операция простата Самарканд & Бухоро",
    "камни почек лечение Самарканд & Бухоро",
    "лапароскопия Самарканд & Бухоро",
    "HoLEP Самарканд & Бухоро",
  ],
  authors: [{ name: "Dr. Asror To'rayev" }],
  creator: "Dr. Asror To'rayev",
  publisher: "Dr. Asror To'rayev",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Dr. Asror To'rayev — Urolog-Androlog Samarqand & Buxoro",
    description:
      "Samarqand & Buxorodagi oliy toifali urolog-androlog. HoLEP, laparoskopiya, PCNL, varikotsele, bepushtlik davolash. +998 90 008 38 78",
    type: "website",
    url: BASE_URL,
    locale: "uz_UZ",
    siteName: "Urolog-Androlog Samarqand & Buxoro — Dr. Asror To'rayev",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dr. Asror To'rayev — Urolog-Androlog Samarqand & Buxoro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Asror To'rayev — Urolog-Androlog Samarqand & Buxoro",
    description:
      "Samarqand & Buxorodagi oliy toifali urolog-androlog. HoLEP, laparoskopiya, PCNL. +998 90 008 38 78",
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
    "geo.placename": "Samarqand & Buxoro",
    "geo.position": "39.6542;66.9597",
    ICBM: "39.6542, 66.9597",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://yandex.uz" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '900364736112239');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=900364736112239&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
      </body>
    </html>
  );
}

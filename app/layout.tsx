import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dr. Asror To'rayev — Urolog-Androlog  | Oliy toifali shifokor",
  description:
    "Samarqanddagi oliy toifali urolog-androlog. HoLEP, laparoskopiya, PCNL, varikotsele, bepushtlik davolash. Sintez Lab, Ixlos Med, ECU Medical. Navbatsiz qabul.",
  keywords: [
    "urolog Samarqand",
    "androlog Samarqand",
    "urolog-androlog",
    "Dr Asror To'rayev",
    "HoLEP Samarqand",
    "varikotsele davolash",
    "bepushtlik davolash",
    "prostata operatsiya",
    "buyrak toshi davolash",
    "PCNL operatsiya",
    "laparoskopiya Samarqand",
    "siydik toshi",
    "Sintez Lab",
    "Ixlos Med",
    "ECU Medical",
  ],
  // authors: [{ name: "Dr. Asror To'rayev" }],
  openGraph: {
    title: "Dr. Asror To'rayev — Urolog-Androlog",
    description:
      "Samarqanddagi oliy toifali urolog-androlog. Zamonaviy usullar bilan urologik kasalliklarni davolash. Navbatsiz qabul.",
    type: "website",
    locale: "uz_UZ",
    siteName: "Dr. Asror To'rayev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Asror To'rayev — Urolog-Androlog",
    description:
      "Samarqanddagi oliy toifali urolog-androlog. Zamonaviy usullar bilan urologik kasalliklarni davolash.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

const DoctorInfo = dynamic(() => import("@/components/doctor-info"));
const Clinics = dynamic(() => import("@/components/clinics"));
const Services = dynamic(() => import("@/components/services"));
const SurgicalMethods = dynamic(() => import("@/components/surgical-methods"));
const WhyMe = dynamic(() => import("@/components/why-me"));
const Natijalar = dynamic(() => import("@/components/natijalar"));
const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/footer"));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://urologasrorturayev.uz/#doctor",
      name: "Dr. Asror To'rayev",
      alternateName: ["Асрор Тураев", "Asror Turayev"],
      description:
        "Samarqandda faoliyat yurituvchi oliy toifali urolog-androlog. HoLEP, laparoskopiya, PCNL, varikotsele, bepushtlik davolash bo'yicha mutaxassis.",
      telephone: "+998900083878",
      url: "https://urologasrorturayev.uz",
      sameAs: [
        "https://t.me/urolog_samarqand",
        "https://www.instagram.com/urolog_asrorturayev",
        "https://youtube.com/@samarqand_urolog",
      ],
      image: "https://urologasrorturayev.uz/doctor.jpg",
      medicalSpecialty: ["Urology", "Andrology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Samarqand",
        addressCountry: "UZ",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Urologik xizmatlar",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "HoLEP operatsiyasi" } },
          { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Laparoskopiya" } },
          { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "PCNL operatsiyasi" } },
          { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Varikotsele davolash" } },
          { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Bepushtlik davolash" } },
          { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Prostata davolash" } },
        ],
      },
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://urologasrorturayev.uz/#business",
      name: "Urolog-Androlog Samarqand — Dr. Asror To'rayev",
      telephone: "+998900083878",
      url: "https://urologasrorturayev.uz",
      image: "https://urologasrorturayev.uz/opengraph-image",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Samarqand",
        addressCountry: "UZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.6542,
        longitude: 66.9597,
      },
      openingHours: "Mo-Sa 09:00-18:00",
      priceRange: "$$",
      sameAs: [
        "https://t.me/urolog_samarqand",
        "https://www.instagram.com/urolog_asrorturayev",
        "https://youtube.com/@samarqand_urolog",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-screen bg-linear-0-to-b from-primary/60 via-primary/30 to-transparent" />
          <div className="absolute top-[50vh] -right-40 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute top-[30vh] -left-40 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[120px]" />
          <div className="absolute top-[120vh] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
          <div className="absolute top-[200vh] -right-32 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[120px]" />
          <div className="absolute top-[280vh] -left-32 w-[700px] h-[700px] bg-primary/3 rounded-full blur-[120px]" />
          <div className="absolute top-[360vh] right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
        </div>
        <Hero />
        <DoctorInfo />

        <Clinics />
        <Services />
        <SurgicalMethods />
        <WhyMe />
        <Natijalar />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

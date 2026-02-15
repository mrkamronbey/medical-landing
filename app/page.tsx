import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import DoctorInfo from "@/components/doctor-info";
import SurgicalMethods from "@/components/surgical-methods";
import WhyMe from "@/components/why-me";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Uzluksiz grid va gradient fon */}
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-b from-primary/[0.06] via-primary/[0.03] to-transparent" />
          <div className="absolute top-[50vh] -right-40 w-[700px] h-[700px] bg-primary/[0.05] rounded-full blur-[120px]" />
          <div className="absolute top-[30vh] -left-40 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />
          <div className="absolute top-[120vh] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
          <div className="absolute top-[200vh] -right-32 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />
          <div className="absolute top-[280vh] -left-32 w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-[120px]" />
          <div className="absolute top-[360vh] right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px]" />
        </div>
        <Hero />
        <DoctorInfo />
        <Services />
        <SurgicalMethods />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

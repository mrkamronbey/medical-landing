"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const methods = [
  {
    title: "TUR (Transuretral rezeksiya)",
    description:
      "Siydik yo'li orqali kesimsiz bajariladigan operatsiya. Prostata adenomasi, siydik pufagi o'smalari va torayishlarni davolashda qo'llaniladi.",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M6 3v18" />
        <path d="M6 12h12" />
        <circle cx="18" cy="12" r="3" />
        <path d="M6 6h4" />
        <path d="M6 18h4" />
      </svg>
    ),
  },
  {
    title: "HoLEP (Holmium lazer enukleatsiya)",
    description:
      "Prostata adenomasini lazer yordamida olib tashlash. Qon ketishi minimal, kateter tez olinadi va kasalxonada yotish qisqa.",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2L8 8h8l-4 6" />
        <path d="M10 14l-2 8" />
        <path d="M14 14l2 8" />
        <path d="M8 8L4 12" />
        <path d="M16 8l4 4" />
      </svg>
    ),
  },
  {
    title: "PCNL (Perkutan nefrolitotomiya)",
    description:
      "Bel terisidan kichik teshik orqali buyrak toshlarini maydalab olib tashlash. 2 sm dan katta toshlar uchun eng samarali usul.",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M5.2 10c.6-3.9 3.5-7 7.3-7 4.1 0 7.5 3.6 7.5 8s-3.4 8-7.5 8c-2.2 0-4.1-.9-5.5-2.5" />
        <path d="M3 15c1.2 2.4 3 3.8 5 4" />
        <path d="M10 10l4 4" />
        <path d="M14 10l-4 4" />
      </svg>
    ),
  },
  {
    title: "URS (Ureterskopiya)",
    description:
      "Siydik naycha orqali endoskop kiritib, ureter va buyrak toshlarini lazer bilan maydalab olib tashlash. Kesimsiz va tez tiklanish bilan.",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v20" />
        <path d="M8 6c0-2 4-2 4 0s4 2 4 0" />
        <path d="M8 12c0-2 4-2 4 0s4 2 4 0" />
        <path d="M8 18c0-2 4-2 4 0s4 2 4 0" />
      </svg>
    ),
  },
  {
    title: "Laparoskopik jarrohlik",
    description:
      "Qorin bo'shlig'iga 3-4 ta kichik teshik orqali kamera va asboblar kiritib bajariladigan operatsiya. Buyrak, ureter va prostata operatsiyalarida qo'llaniladi.",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
      </svg>
    ),
  },
  {
    title: "Mikroxirurgiya (TESE / Micro-TESE)",
    description:
      "Mikroskop ostida moyakdan sperm hujayralarini olish. Bepushtlikni davolashda, varikotsele va vazovazostomiya operatsiyalarida qo'llaniladi.",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
];

export default function SurgicalMethods() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge
            variant="secondary"
            className="px-4 py-1.5 text-sm font-medium mb-4 border border-primary/10 bg-primary/5 text-primary"
          >
            Usullar
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Urologiyada{" "}
            <span className="text-gradient">jarrohlik usullari</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Zamonaviy jarrohlik texnologiyalari bilan minimal invaziv va xavfsiz davolash.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {methods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="group h-full rounded-2xl border border-primary/10 bg-white/80 backdrop-blur-sm p-6 sm:p-7 space-y-4 transition-all duration-300 hover:cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <div className="text-primary">
                    <method.icon />
                  </div>
                </div>

                <h3 className="text-md sm:text-lg font-semibold leading-snug">
                  {method.title}
                </h3>

                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-0.5 rounded-full bg-primary opacity-30" />
                  <div className="w-2 h-0.5 rounded-full bg-primary opacity-15" />
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">
                  {method.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

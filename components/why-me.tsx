"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, HeartPulse, Clock, UserCheck, Microscope, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Oliy toifali mutaxassis",
    description: "Oliy toifali urolog-androlog sifatida murakkab operatsiyalarni muvaffaqiyatli bajaraman.",
  },
  {
    icon: Microscope,
    title: "Zamonaviy texnologiyalar",
    description: "HoLEP, laparoskopiya, PCNL va boshqa ilg'or usullar bilan kesimsiz davolayman.",
  },
  {
    icon: HeartPulse,
    title: "Minimal invaziv yondashuv",
    description: "Og'riqsiz, qon ketishi kam va tez tiklanish — bemorlar hayot sifatini saqlab qolaman.",
  },
  {
    icon: UserCheck,
    title: "Individual yondashuv",
    description: "Har bir bemorga alohida e'tibor va uning holatiga mos davolash rejasini tuzaman.",
  },
  {
    icon: Clock,
    title: "Tez tiklanish",
    description: "Zamonaviy usullar tufayli kasalxonada yotish qisqa va kundalik hayotga tez qaytish.",
  },
  {
    icon: MessageCircle,
    title: "Doimiy aloqa",
    description: "Operatsiyadan oldin va keyin to'liq maslahat va kuzatuv. Telegram orqali doim aloqadaman.",
  },
];

export default function WhyMe() {
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
            Afzalliklar
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Nega aynan{" "}
            <span className="text-gradient">men?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Bemorlarim ishonchini qozongan sabablar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="group h-full rounded-2xl border border-primary/10 bg-white/80 backdrop-blur-sm p-6 sm:p-7 space-y-4 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-md sm:text-lg font-semibold leading-snug">
                  {reason.title}
                </h3>

                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-0.5 rounded-full bg-primary opacity-30" />
                  <div className="w-2 h-0.5 rounded-full bg-primary opacity-15" />
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

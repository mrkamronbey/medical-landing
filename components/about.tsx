"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  BriefcaseMedical,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "Ta'lim",
    subtitle: "Toshkent Tibbiyot Akademiyasi",
    year: "2005-2011",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-500/10",
  },
  {
    icon: Award,
    title: "Malaka",
    subtitle: "Oliy toifali urolog",
    year: "2015",
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-500/10",
  },
  {
    icon: BriefcaseMedical,
    title: "Tajriba",
    subtitle: "15+ yillik amaliy tajriba",
    year: "2011-hozir",
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-500/10",
  },
];

const achievements = [
  "Toshkent Tibbiyot Akademiyasi bitiruvchisi",
  "Urologiya bo'yicha oliy toifali mutaxassis",
  "200 dan ortiq ilmiy maqolalar muallifi",
  "Xalqaro urologiya konferensiyalari ishtirokchisi",
  "Rossiya va Turkiyada malaka oshirgan",
  "O'zbekiston Urologlar Assotsiatsiyasi a'zosi",
];

export default function About() {
  return (
    <section
      id="haqimizda"
      className="relative py-20 md:py-28"
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-border/40 shadow-xl shadow-black/[0.03]">
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />
              <div className="space-y-6 sm:space-y-8 relative">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex items-center gap-4 sm:gap-5"
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.bg} flex items-center justify-center shrink-0`}
                    >
                      <item.icon
                        className={`w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br ${item.color} bg-clip-text`}
                        style={{
                          color: item.color.includes("blue")
                            ? "#2563eb"
                            : item.color.includes("violet")
                              ? "#7c3aed"
                              : "#0d9488",
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="font-semibold text-base sm:text-lg">
                          {item.title}
                        </p>
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium border border-primary/10 bg-primary/5 text-primary"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Biz haqimizda
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Sog&apos;lom hayot -{" "}
              <span className="text-gradient">baxtli hayot</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Men 15 yildan ortiq vaqt davomida urologiya sohasida faoliyat
              yuritib kelaman. Mening asosiy maqsadim - har bir bemorga
              individual yondashuv bilan eng samarali davolash usullarini
              taqdim etish.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Zamonaviy diagnostika uskunalari va ilg&apos;or davolash
              metodlari yordamida bemorlarimga yuqori sifatli tibbiy yordam
              ko&apos;rsataman.
            </p>
            <div className="space-y-3 pt-3">
              {achievements.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground text-sm sm:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

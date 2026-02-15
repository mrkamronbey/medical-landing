"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Stethoscope,
  CheckCircle,
} from "lucide-react";

const specializations = [
  "Bepushtlikni barcha turlari",
  "Varikosele",
  "Gidrosele",
  "Kistalar",
  "Denervatsiya",
  "Tese / Microtese",
  "Jinsiy zaiflik va tez bo'shanishni barcha turlarini davolash",
];

const clinics = [
  { name: "Sintez Lab", color: "bg-blue-500/10 text-blue-600" },
  { name: "Ixlos Med", color: "bg-violet-500/10 text-violet-600" },
  { name: "ECU Medical", color: "bg-teal-500/10 text-teal-600" },
];

export default function DoctorInfo() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium border border-primary/10 bg-primary/5 text-primary"
            >
              <Stethoscope className="w-3.5 h-3.5 mr-1.5" />
              Urolog-Androlog
            </Badge>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Men urolog-androlog shifokorman. Samarqand shahrida faoliyat
              yuritaman va bemorlarimga zamonaviy tibbiyot yutuqlaridan
              foydalangan holda yordam beraman.
            </p>

            {/* Klinikalar */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Building2 className="w-4 h-4 text-primary" />
                Ish joylarim
              </div>
              <div className="flex flex-wrap gap-3">
                {clinics.map((clinic) => (
                  <div
                    key={clinic.name}
                    className={`${clinic.color} px-4 py-2.5 rounded-xl text-sm font-semibold`}
                  >
                    {clinic.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <h3 className="text-xl sm:text-2xl font-bold">
              Asosiy <span className="text-gradient">yo&apos;nalishlarim</span>
            </h3>

            <div className="flex flex-wrap gap-3 sm:gap-5 flex-1 content-start">
              {specializations.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-sm font-medium border border-primary/10 bg-primary/5 text-primary hover:bg-primary/10 transition-colors cursor-default whitespace-normal text-left"
                  >
                    <CheckCircle className="mr-2 shrink-0" />
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronRight, Phone } from "lucide-react";

export default function ServicesCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 rounded-2xl border border-primary/10 bg-white/80 backdrop-blur-sm p-6 sm:p-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
            <CalendarDays className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-lg sm:text-xl font-semibold">
              Onlayn konsultatsiya — Qabulga yozilish
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Qabul kunlari: Dushanbadan Shanbagacha, soat 09:00 – 19:00
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Button
            size="lg"
            asChild
            className="text-sm rounded-xl bg-linear-to-r from-primary to-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            <a
              href="https://t.me/urolog_asrorturayev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegramdan yozish
              <ChevronRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-sm rounded-xl border-primary/20 hover:bg-primary/5 hover:text-primary transition-all"
          >
            <a href="tel:+998900083878">
              <Phone className="w-4 h-4" />
              Qo&apos;ng&apos;iroq qilish
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

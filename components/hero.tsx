"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, ChevronRight, Shield } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="bosh"
      className="relative min-h-dvh flex items-center overflow-hidden pt-16 md:pt-20"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-3 sm:space-y-7 text-left order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[26px] sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-gradient">To&apos;rayev</span>{" "}
              <span className="inline lg:hidden">Asror Abbosovich</span>
              <span className="hidden lg:inline"><br />Asror<br />Abbosovich</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-md sm:text-xl lg:text-2xl font-semibold text-primary max-w-lg lg:mx-0 leading-relaxed"
            >
              — Samarqanddagi Urolog Shifokoringiz
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="max-w-lg lg:mx-0"
            >
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  "Bepushtlikning barcha turlari",
                  "Varikosele",
                  "Denervatsiya",
                  "Gidrosele",
                  "TESE / MicroTESE",
                  "Moyak ortig'i kistalari",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-2.5 text-[13px] sm:text-base text-foreground/80"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.75 }}
                className="mt-3 sm:mt-4 text-[12px] sm:text-sm text-primary/80 font-semibold border-l-2 border-primary/40 pl-3"
              >
                Va barcha turdagi urologik-andrologik kasalliklarga
                <br className="hidden sm:block" />
                <span className="text-primary"> konservativ va operativ yechim beraman.</span>
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start"
            >
              <Button
                size="lg"
                asChild
                className="text-base rounded-xl bg-linear-to-r from-primary to-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:from-primary/95 hover:to-primary transition-all"
              >
                <a
                  href="https://t.me/urolog_asrorturayev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Shifokorga yozish
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            {/* Mobil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:hidden flex justify-center"
            >
              <div
                className="w-75 h-75 sm:w-64 sm:h-64 overflow-hidden shadow-xl shadow-primary/10 border-4 border-primary/10"
                style={{ borderRadius: "40% 60% 65% 35% / 45% 50% 50% 55%" }}
              >
                <Image
                  src="/asror.webp"
                  alt="Dr. Asror To'rayev"
                  width={256}
                  height={256}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div
                  className="absolute inset-4 bg-linear-to-br from-primary/15 to-accent/15 rotate-6"
                  style={{ borderRadius: "63% 37% 30% 70% / 50% 45% 55% 50%" }}
                />
                <div
                  className="absolute inset-4 bg-linear-to-tr from-accent/10 to-primary/10 -rotate-3"
                  style={{ borderRadius: "28% 72% 65% 35% / 55% 38% 62% 45%" }}
                />

                <div
                  className="relative overflow-hidden border-2 border-white/60 shadow-2xl shadow-primary/10"
                  style={{ borderRadius: "40% 60% 65% 35% / 45% 50% 50% 55%" }}
                >
                  <Image
                    src="/asror.webp"
                    alt="Dr. Asror To'rayev"
                    width={500}
                    height={600}
                    loading="eager"
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-4 top-1/4 glass rounded-2xl p-3 shadow-xl border border-white/60"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Tajriba</p>
                      <p className="text-sm font-bold">5+ yil</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-4 bottom-1/3 glass rounded-2xl p-3 shadow-xl border border-white/60"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Toifa</p>
                      <p className="text-sm font-bold">Oliy</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const contactItems = [
  {
    icon: MapPin,
    label: "Manzil",
    value: "Samarqand sh., Mirzo Ulug'bek ko'chasi 52",
    color: "#0d9488",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+998 90 123 45 67",
    href: "tel:+998901234567",
    color: "#2563eb",
  },
  {
    icon: Mail,
    label: "Email",
    value: "dr.torayev@medical.uz",
    href: "mailto:dr.torayev@medical.uz",
    color: "#7c3aed",
  },
];

export default function Contact() {
  return (
    <section id="aloqa" className="relative py-20 md:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            <span className="text-gradient">Aloqa</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="relative overflow-hidden border-border/40 bg-white/80 backdrop-blur-sm shadow-xl shadow-black/3">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-primary" />
              <CardContent className="p-6 sm:p-8">
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Men bemorlarni oldindan yozilish asosida qabul qilaman. Menga
                  Telegram orqali yozishingiz yoki qo&apos;ng&apos;iroq
                  qilishingiz mumkin.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-3">
                  <span className="font-semibold text-foreground">
                    Ish kunlari:
                  </span>{" "}
                  Dushanbadan Shanbagacha, soat 09:00 dan 19:00 gacha.
                </p>
              </CardContent>
            </Card>


            <div className="flex flex-wrap gap-4">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-2.5 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2.5 border border-border/40 shadow-sm hover:shadow-md transition-all"
                >
                  <item.icon
                    className="w-4 h-4 shrink-0"
                    style={{ color: item.color }}
                  />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-foreground">
                      {item.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-xl text-base bg-linear-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <a
                  href="https://t.me/dr_torayev"
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
                  Telegramdan yozish
                </a>
              </Button>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-linear-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-md"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-md"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-3xl overflow-hidden border border-border/40 shadow-xl shadow-black/3 h-full">
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=66.960000%2C39.650000&z=13&l=map&pt=66.960000%2C39.650000%2Cpm2rdm"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[400px] sm:min-h-[480px] block"
                style={{ border: 0, margin: 0, padding: 0 }}
                allowFullScreen
                title="Samarqand shahri xaritasi"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

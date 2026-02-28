"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import Image from "next/image";

const clinics = [
  {
    id: 1,
    name: "Eku Medical Markaz",
    address: "Samarqand shahar, Beruniy ko'chasi 103-uy",
    landmark: "Povorot, IXLOS MED Klinikasi",
    image: "/clinic1.webp",
    accent: "from-primary/20 to-accent/10",
    badge: "01",
    mapUrl: "https://yandex.uz/maps/?text=Samarqand+Beruniy+ko'chasi+103",
  },
  {
    id: 2,
    name: "IXLOS MED Klinikasi",
    address: "Samarqand shahar, Qorasuv massivi, Iftixor ko'chasi 2A uy",
    landmark: "81-maktab va Football akademiyasi, «Sintez Lab» Klinikasi",
    image: "/clinic2.webp",
    accent: "from-accent/20 to-primary/10",
    badge: "02",
    mapUrl: "https://yandex.uz/maps/?text=Samarqand+Qorasuv+massivi+Iftixor+ko'chasi+2A",
  },
  {
    id: 3,
    name: "Sintez Lab Klinikasi",
    address: "Samarqand shahar, Laxuti ko'chasi, 2A",
    landmark: "6-hammom, Brilliant City",
    image: "/clinic3.webp",
    accent: "from-primary/15 to-accent/15",
    badge: "03",
    mapUrl: "https://yandex.uz/maps/?text=Samarqand+Laxuti+ko'chasi+2A",
  },
];

export default function Clinics() {
  return (
    <section id="manzillar" className="relative py-20 md:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest mb-4 bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            <MapPin className="w-3.5 h-3.5" />
            Qabul joylari
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Ish joylarim</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Samarqand shahridagi 3 ta klinikada qabul olib boraman
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {clinics.map((clinic, i) => (
            <motion.div
              key={clinic.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-border/40 bg-white/80 backdrop-blur-sm shadow-lg shadow-black/4 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >

              <div className="relative overflow-hidden bg-linear-to-br from-primary/10 to-accent/10">
                <Image
                  src={clinic.image}
                  alt={clinic.name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className={`absolute inset-0 bg-linear-to-t ${clinic.accent} opacity-60`} />

                <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <span className="text-xs font-bold text-primary">{clinic.badge}</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center opacity-0 group-[&_img[style*='none']]:opacity-100">
                    <MapPin className="w-8 h-8 text-primary/40" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                  {clinic.name}
                </h3>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <MapPin className="w-3 h-3 text-primary" />
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {clinic.address}
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <Navigation className="w-3 h-3 text-accent" />
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground/70">Mo&apos;ljal: </span>
                      {clinic.landmark}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                <a
                  href={clinic.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary text-sm font-semibold transition-all hover:shadow-md hover:shadow-primary/10 hover:border-primary/30 group/btn"
                >
                  <MapPin className="w-4 h-4" />
                  Yandex Xaritada ochish
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="h-0.5 bg-linear-to-r from-primary/40 via-accent/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

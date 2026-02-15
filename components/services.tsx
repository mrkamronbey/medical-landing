"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/services-data";
import { useInfiniteCarousel } from "@/lib/use-infinite-carousel";
import ServicesCta from "@/components/services-cta";

const FADE_MASK =
  "linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)";

export default function Services() {
  const { scrollRef, activeIndex, scrollToIndex } = useInfiniteCarousel({
    totalItems: services.length,
  });

  const tripleServices = [...services, ...services, ...services];

  return (
    <section id="xizmatlar" className="relative py-20 md:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Xizmatlar
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Bizning <span className="text-gradient">xizmatlar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Zamonaviy uskunalar va ilg&apos;or texnologiyalar yordamida yuqori
            sifatli urologik xizmatlar ko&apos;rsatamiz.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              maskImage: FADE_MASK,
              WebkitMaskImage: FADE_MASK,
            }}
          >
            {tripleServices.map((service, i) => (
              <div
                key={`${service.title}-${i}`}
                className="snap-start shrink-0 w-[82%] sm:w-[340px] lg:w-[360px]"
              >
                <div className="group h-full rounded-2xl border border-primary/10 bg-white/80 backdrop-blur-sm transition-all duration-500">
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <div className="text-primary">
                        <service.icon />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-0.5 rounded-full bg-primary opacity-30" />
                      <div className="w-2 h-0.5 rounded-full bg-primary opacity-15" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Xizmat ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <ServicesCta />
      </div>
    </section>
  );
}

"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: "vLhTBFh0UT8" },
  { id: "p_dsSsjLtNw" },
  { id: "DQTEjY4SV8s" },
  { id: "yWxy2MCTnuY" },
  { id: "burkN6VXLKk" },
  { id: "j3sgjgl03fg" },
  { id: "Wnq6J3aaoNY" },
  { id: "VovM0tyB9DA" },
];

const CARD_WIDTH = 220;
const GAP = 20;
const STEP = CARD_WIDTH + GAP;

const FADE_MASK =
  "linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)";

export default function Natijalar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback((i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * STEP, behavior: "smooth" });
  }, []);

  const prev = useCallback(() => {
    scrollTo(Math.max(activeIndex - 1, 0));
  }, [activeIndex, scrollTo]);

  const next = useCallback(() => {
    scrollTo(Math.min(activeIndex + 1, videos.length - 1));
  }, [activeIndex, scrollTo]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (i !== -1) setActiveIndex(i);
          }
        });
      },
      { root: el, threshold: 0.6 }
    );
    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="natijalar" className="relative py-20 md:py-28">
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
            Natijalar
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Haqiqiy <span className="text-gradient">natijalar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Bemorlarimning davolanish jarayoni va muvaffaqiyatli natijalari.
          </p>
        </motion.div>

        <div className="relative">
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-primary/10 shadow-md flex items-center justify-center text-primary hover:bg-primary/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Oldingi"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              maskImage: FADE_MASK,
              WebkitMaskImage: FADE_MASK,
              scrollPaddingLeft: "16px",
            }}
          >
            {videos.map((video, i) => (
              <div
                key={video.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="snap-start shrink-0"
                style={{ width: CARD_WIDTH }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative w-full rounded-2xl overflow-hidden border border-primary/10 bg-white/80 backdrop-blur-sm shadow-sm"
                  style={{ aspectRatio: "9/16" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={`Natija ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </motion.div>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            disabled={activeIndex === videos.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-primary/10 shadow-md flex items-center justify-center text-primary hover:bg-primary/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Keyingi"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}

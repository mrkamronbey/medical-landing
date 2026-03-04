"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useInfiniteCarousel } from "@/lib/use-infinite-carousel";
import YoutubeVideo from "@/components/youtube-video";

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

const FADE_MASK =
  "linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)";

export default function Natijalar() {
  const { scrollRef, activeIndex, scrollToIndex } = useInfiniteCarousel({
    totalItems: videos.length,
    autoplayInterval: 0,
  });

  const tripleVideos = [...videos, ...videos, ...videos];

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
            onClick={() => scrollToIndex((activeIndex - 1 + videos.length) % videos.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-primary/10 shadow-md flex items-center justify-center text-primary hover:bg-primary/5 transition-all"
            aria-label="Oldingi"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

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
            {tripleVideos.map((video, i) => (
              <div
                key={`${video.id}-${i}`}
                className="snap-start shrink-0 w-[45%] sm:w-[220px] lg:w-[240px]"
              >
                <div className="relative w-full rounded-2xl overflow-hidden border border-primary/10 bg-white/80 backdrop-blur-sm"
                  style={{ aspectRatio: "9/16" }}
                >
                  <YoutubeVideo id={video.id} />
                </div>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => scrollToIndex((activeIndex + 1) % videos.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-primary/10 shadow-md flex items-center justify-center text-primary hover:bg-primary/5 transition-all"
            aria-label="Keyingi"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Video ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useRef, useEffect, useCallback } from "react";

interface UseInfiniteCarouselOptions {
  totalItems: number;
  gap?: number;
  autoplayInterval?: number;
}

export function useInfiniteCarousel({
  totalItems,
  gap = 20,
  autoplayInterval = 5000,
}: UseInfiniteCarouselOptions) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isJumping = useRef(false);
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const getCardWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 380;
    return el.clientWidth < 640 ? el.clientWidth * 0.82 : 380;
  }, []);

  const getStep = useCallback(() => getCardWidth() + gap, [getCardWidth, gap]);
  const getSetWidth = useCallback(
    () => totalItems * getStep(),
    [totalItems, getStep]
  );

  const jumpTo = useCallback((el: HTMLDivElement, position: number) => {
    isJumping.current = true;
    el.style.scrollBehavior = "auto";
    el.scrollLeft = position;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.scrollBehavior = "smooth";
        isJumping.current = false;
      });
    });
  }, []);

  const checkLoop = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isJumping.current) return;
    const setWidth = getSetWidth();

    if (el.scrollLeft >= setWidth * 1.75) {
      jumpTo(el, el.scrollLeft - setWidth);
    } else if (el.scrollLeft <= setWidth * 0.25) {
      jumpTo(el, el.scrollLeft + setWidth);
    }
  }, [getSetWidth, jumpTo]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isJumping.current) return;

    const step = getStep();
    const rawIndex = Math.round(el.scrollLeft / step);
    setActiveIndex(((rawIndex % totalItems) + totalItems) % totalItems);

    clearTimeout(scrollEndTimer.current);
    scrollEndTimer.current = setTimeout(checkLoop, 150);
  }, [getStep, totalItems, checkLoop]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el || isJumping.current) return;
      el.scrollBy({ left: getStep(), behavior: "smooth" });
    }, autoplayInterval);
  }, [stopAutoplay, getStep, autoplayInterval]);

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = scrollRef.current;
      if (!el) return;
      el.scrollTo({ left: getSetWidth() + i * getStep(), behavior: "smooth" });
    },
    [getSetWidth, getStep]
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.style.scrollBehavior = "auto";
    el.scrollLeft = getSetWidth();
    requestAnimationFrame(() => {
      el.style.scrollBehavior = "smooth";
    });

    el.addEventListener("scroll", handleScroll, { passive: true });

    const pause = () => stopAutoplay();
    const resume = () => startAutoplay();
    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);

    startAutoplay();

    return () => {
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      stopAutoplay();
      clearTimeout(scrollEndTimer.current);
    };
  }, [handleScroll, getSetWidth, startAutoplay, stopAutoplay]);

  return { scrollRef, activeIndex, scrollToIndex };
}

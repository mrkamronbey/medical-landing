"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: {
      Player: new (el: HTMLElement, opts: object) => {
        seekTo: (seconds: number, allowSeekAhead: boolean) => void;
        pauseVideo: () => void;
        destroy: () => void;
      };
      PlayerState: { ENDED: number };
    };
    onYouTubeIframeAPIReady: () => void;
    _ytReadyCallbacks: Array<() => void>;
  }
}

function loadYTApi(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.YT?.Player) return resolve();

    window._ytReadyCallbacks = window._ytReadyCallbacks || [];
    window._ytReadyCallbacks.push(resolve);

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prevCallback?.();
        window._ytReadyCallbacks?.forEach((cb) => cb());
        window._ytReadyCallbacks = [];
      };
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }
  });
}

export default function YoutubeVideo({ id }: { id: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let player: InstanceType<typeof window.YT.Player> | null = null;

    loadYTApi().then(() => {
      if (!containerRef.current) return;
      const div = document.createElement("div");
      containerRef.current.appendChild(div);

      player = new window.YT.Player(div, {
        videoId: id,
        width: "100%",
        height: "100%",
        playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
        events: {
          onStateChange: (e: { data: number }) => {
            if (e.data === 0) {
              player?.seekTo(0, true);
              player?.pauseVideo();
            }
          },
        },
      });
    });

    return () => {
      player?.destroy();
    };
  }, [id]);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
}

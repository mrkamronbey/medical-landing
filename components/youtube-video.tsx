"use client";

import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

declare global {
  interface Window {
    YT: {
      Player: new (
        el: HTMLElement,
        opts: object
      ) => {
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
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playing) return;
    let player: InstanceType<typeof window.YT.Player> | null = null;

    loadYTApi().then(() => {
      if (!containerRef.current) return;
      const div = document.createElement("div");
      containerRef.current.appendChild(div);

      player = new window.YT.Player(div, {
        videoId: id,
        width: "100%",
        height: "100%",
        playerVars: { rel: 0, modestbranding: 1, playsinline: 1, autoplay: 1 },
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
  }, [playing, id]);

  if (playing) {
    return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="absolute inset-0 w-full h-full group"
      aria-label="Videoni ijro etish"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt="Video thumbnail"
        width={480}
        height={360}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 text-white fill-white ml-1" />
        </div>
      </div>
    </button>
  );
}

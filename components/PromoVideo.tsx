"use client";

import { useEffect, useRef } from "react";

// Plays the product film only while it's actually on screen, and never under
// reduced-motion. Combined with preload="none" this means the ~1–3 MB video is
// fetched and decoded only if the user scrolls to it — saving bandwidth, CPU,
// and battery for everyone who doesn't. aspect-ratio reserves space (no CLS).
export function PromoVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Respect reduced-motion: don't autoplay, expose controls instead.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.controls = true;
      video.preload = "metadata";
      return;
    }

    let inView = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(video);

    const onVisibility = () => {
      if (document.hidden) video.pause();
      else if (inView) video.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="w-full rounded-2xl"
      muted
      loop
      playsInline
      preload="none"
      poster="/promo-poster.jpg"
      aria-label="LumaSleep app preview video"
      style={{ aspectRatio: "16 / 9" }}
    >
      <source src="/promo.webm" type="video/webm" />
      <source src="/promo.mp4" type="video/mp4" />
    </video>
  );
}

"use client";

import { useEffect, useRef } from "react";

// A fixed, full-viewport canvas of softly twinkling stars with the occasional
// drifting shooting star — the website echo of the app's ds_starfield widget.
// Pauses entirely under prefers-reduced-motion.
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Animate the twinkle only where it's cheap: desktop, fine pointer, motion
    // allowed. On phones/tablets (and reduced-motion) we paint one static field
    // and never start a render loop — no per-frame main-thread cost or battery
    // drain, which is what hurts mobile INP.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const animate = !reduced && !coarse && desktop;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = { x: number; y: number; r: number; base: number; tw: number; phase: number };
    let stars: Star[] = [];
    type Shooting = { x: number; y: number; len: number; speed: number; life: number; max: number };
    let shooting: Shooting | null = null;
    let nextShot = 0;

    function seed() {
      const count = Math.round((width * height) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.3,
        base: Math.random() * 0.5 + 0.25,
        tw: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    let raf = 0;
    let t = 0;
    // Throttle the loop to ~30fps. The twinkle is slow, so 30fps is
    // indistinguishable from 60 but halves the main-thread/GPU work.
    const FRAME_MS = 1000 / 30;
    let last = 0;

    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      if (now - last < FRAME_MS) return;
      last = now;
      t += FRAME_MS / 1000;
      ctx!.clearRect(0, 0, width, height);

      for (const s of stars) {
        const a = s.base + Math.sin(t * s.tw + s.phase) * 0.25;
        ctx!.globalAlpha = Math.max(0, Math.min(1, a));
        ctx!.fillStyle = a > 0.7 ? "#fff4dc" : "#dfe4ff";
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Shooting star, occasionally.
      nextShot -= FRAME_MS / 1000;
      if (!shooting && nextShot <= 0) {
        shooting = {
          x: Math.random() * width * 0.7,
          y: Math.random() * height * 0.4,
          len: 120 + Math.random() * 80,
          speed: 7 + Math.random() * 4,
          life: 0,
          max: 60,
        };
        nextShot = 6 + Math.random() * 8;
      }
      if (shooting) {
        const s = shooting;
        s.life += 1;
        s.x += s.speed;
        s.y += s.speed * 0.55;
        const fade = 1 - s.life / s.max;
        const grad = ctx!.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len * 0.55);
        grad.addColorStop(0, `rgba(255,244,220,${0.9 * fade})`);
        grad.addColorStop(1, "rgba(255,244,220,0)");
        ctx!.globalAlpha = 1;
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = 1.6;
        ctx!.beginPath();
        ctx!.moveTo(s.x, s.y);
        ctx!.lineTo(s.x - s.len, s.y - s.len * 0.55);
        ctx!.stroke();
        if (s.life >= s.max) shooting = null;
      }

      ctx!.globalAlpha = 1;
    }

    function paintStatic() {
      ctx!.clearRect(0, 0, width, height);
      for (const s of stars) {
        ctx!.globalAlpha = s.base + 0.2;
        ctx!.fillStyle = "#dfe4ff";
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function start() {
      if (raf) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      cancelAnimationFrame(raf);
      raf = 0;
    }

    // Repaint static when not animating; otherwise reseed feeds the loop.
    function onResize() {
      resize();
      if (!animate) paintStatic();
    }

    // Pause the loop whenever the tab is hidden — no point animating offscreen.
    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }

    resize();
    window.addEventListener("resize", onResize);

    if (animate) {
      document.addEventListener("visibilitychange", onVisibility);
      start();
    } else {
      paintStatic();
    }

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}

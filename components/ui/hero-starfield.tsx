"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Sternenhimmel im oberen Bereich – dichter und mit klareren hellen Sternen, weiterhin natürlich.
 */
export function HeroStarfield({
  className,
  coverage = 0.58,
  fadeBottom = true,
}: {
  className?: string;
  coverage?: number;
  fadeBottom?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let seed = 918273645;
    const rnd = () => {
      seed = (seed * 1103515245 + 12345) | 0;
      return (seed >>> 0) / 4294967296;
    };

    const draw = () => {
      const cssW = window.innerWidth;
      const cssH = window.innerHeight;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cssW, cssH);

      const bandH = cssH * Math.min(1, Math.max(0.2, coverage));
      const count = 118 + Math.floor(rnd() * 62);
      const topCount = 34 + Math.floor(rnd() * 18);

      for (let i = 0; i < count; i++) {
        const x = rnd() * cssW;
        const y = rnd() * bandH;
        const bright = rnd() < 0.14;
        const r = bright ? 0.55 + rnd() * 1.2 : 0.38 + rnd() * 0.95;
        const baseA = bright ? 0.45 + rnd() * 0.32 : 0.17 + rnd() * 0.42;
        const yT = Math.min(1, y / bandH);
        const fade = fadeBottom ? Math.max(0, 1 - yT * yT) : 1;
        const alpha = baseA * fade;
        const warm = rnd() < 0.09;
        ctx.fillStyle = warm
          ? `rgba(212, 176, 58, ${alpha * 0.62})`
          : `rgba(236, 242, 252, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Zusätzliche Sterne im oberen Himmel, damit der Bereich direkt oben nicht leer wirkt.
      for (let i = 0; i < topCount; i++) {
        const x = rnd() * cssW;
        const y = rnd() * cssH * 0.18;
        const bright = rnd() < 0.22;
        const r = bright ? 0.7 + rnd() * 1.15 : 0.42 + rnd() * 0.9;
        const baseA = bright ? 0.52 + rnd() * 0.3 : 0.22 + rnd() * 0.34;
        const warm = rnd() < 0.11;
        ctx.fillStyle = warm
          ? `rgba(212, 176, 58, ${baseA * 0.66})`
          : `rgba(236, 242, 252, ${baseA})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [coverage, fadeBottom]);

  return (
    <canvas
      ref={ref}
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      aria-hidden
    />
  );
}

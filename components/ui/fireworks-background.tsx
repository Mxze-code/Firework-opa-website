"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

interface Particle {
  x: number;
  y: number;
  color: string;
  velocity: { x: number; y: number };
  alpha: number;
  lifetime: number;
  size: number;
}

interface Firework {
  x: number;
  y: number;
  color: string;
  velocity: { x: number; y: number };
  particles: Particle[];
  exploded: boolean;
  timeToExplode: number;
}

export function FireworksBackground({
  children,
  className,
  /** Ruhigere Szene: Explosionen eher mittig/unten, weniger Aktivität oben */
  heroScene = false,
  /** Optional: als feste Viewport-Ebene nutzen (Landing-Buehne). */
  fixedViewport = false,
}: {
  children?: React.ReactNode;
  className?: string;
  heroScene?: boolean;
  fixedViewport?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fireworksRef = useRef<Firework[]>([]);
  const animationFrameRef = useRef<number>(0);
  const lastFireworkTimeRef = useRef<number>(Date.now());
  const heroSceneRef = useLatest(heroScene);

  // Warmes, gold-/amber-fokussiertes Feuerwerks-Feeling.
  // Wichtig: kein "Neon" / keine Regenbogenfarben, sondern edel und kontrolliert.
  const colors = ["#c9a227", "#d4b03a", "#f59e0b", "#fef3c7", "#fb7185", "#e2e8f0"];

  const createFirework = (x?: number, y?: number, targetY?: number) => {
    const canvas = canvasRef.current;
    if (!canvas || canvas.width === 0 || canvas.height === 0) return;

    const hs = heroSceneRef.current;
    const w = canvas.width;
    const h = canvas.height;

    const startX = x ?? (hs ? w * (0.14 + Math.random() * 0.72) : Math.random() * w);
    const startY = canvas.height;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = (Math.random() * Math.PI) / 2 - Math.PI / 4;
    const velocity = hs ? 5.2 + Math.random() * 3.2 : 6 + Math.random() * 4;
    const target =
      targetY ??
      (hs ? h * (0.22 + Math.random() * 0.28) : h * (0.1 + Math.random() * 0.4));

    const firework: Firework = {
      x: startX,
      y: startY,
      color,
      velocity: {
        x: Math.sin(angle) * velocity,
        y: -Math.cos(angle) * velocity * 1.5,
      },
      particles: [],
      exploded: false,
      timeToExplode: target,
    };

    fireworksRef.current.push(firework);
  };

  const explodeFirework = (firework: Firework) => {
    const hs = heroSceneRef.current;
    const particleCount = hs
      ? 30 + Math.floor(Math.random() * 16)
      : 50 + Math.floor(Math.random() * 30);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = (hs ? Math.random() * 2.8 + 0.75 : Math.random() * 4 + 1) * (hs ? 0.92 : 1);

      firework.particles.push({
        x: firework.x,
        y: firework.y,
        color: firework.color,
        velocity: {
          x: Math.cos(angle) * velocity * (0.5 + Math.random()),
          y: Math.sin(angle) * velocity * (0.5 + Math.random()),
        },
        alpha: 1,
        lifetime: (hs ? Math.random() * 16 + 18 : Math.random() * 25 + 25),
        size: hs ? Math.random() * 1.35 + 0.85 : Math.random() * 2.2 + 1.4,
      });
    }
  };

  const updateAndDraw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx || canvas.width === 0 || canvas.height === 0) {
      animationFrameRef.current = requestAnimationFrame(updateAndDraw);
      return;
    }

    // Etwas weniger "Hartes Clearing" => mehr feine Trails/Atmosphäre.
    const hs = heroSceneRef.current;
    /* Hero: etwas kräftigeres Clearing = weniger „Schmiere“, cleaner */
    ctx.fillStyle = hs ? "rgba(15, 20, 25, 0.088)" : "rgba(15, 20, 25, 0.055)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const currentFireworks = fireworksRef.current;
    for (let i = 0; i < currentFireworks.length; i++) {
      const firework = currentFireworks[i];

      if (!firework.exploded) {
        firework.x += firework.velocity.x;
        firework.y += firework.velocity.y;
        firework.velocity.y += 0.1;

        const inQuietSky = hs && firework.y < canvas.height * 0.24;
        ctx.beginPath();
        ctx.arc(
          firework.x,
          firework.y,
          hs ? (inQuietSky ? 1.8 : 2.2) : inQuietSky ? 2.2 : 3,
          0,
          Math.PI * 2
        );
        if (hs) {
          ctx.shadowBlur = 0;
        } else {
          ctx.shadowBlur = inQuietSky ? 4 : 10;
          ctx.shadowColor = firework.color;
        }
        ctx.fillStyle = firework.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (
          firework.y <= firework.timeToExplode ||
          firework.velocity.y >= 0 ||
          firework.x < 0 ||
          firework.x > canvas.width
        ) {
          if (firework.y > 0 && firework.y < canvas.height) {
            explodeFirework(firework);
          }
          firework.exploded = true;
        }
      } else {
        for (let j = 0; j < firework.particles.length; j++) {
          const particle = firework.particles[j];

          particle.x += particle.velocity.x;
          particle.y += particle.velocity.y;
          particle.velocity.y += 0.04;
          particle.alpha -= 1 / particle.lifetime;

          if (particle.alpha <= 0.1) {
            firework.particles.splice(j, 1);
            j--;
            continue;
          }

          const skyDim = hs && particle.y < canvas.height * 0.22;
          ctx.globalAlpha = skyDim ? particle.alpha * 0.5 : particle.alpha;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          if (hs) {
            ctx.shadowBlur = 0;
          } else {
            ctx.shadowBlur = skyDim ? 3 + particle.size : 9 + particle.size * 1.5;
            ctx.shadowColor = particle.color;
          }
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        }

        if (firework.particles.length === 0) {
          currentFireworks.splice(i, 1);
          i--;
        }
      }
    }

    const now = Date.now();
    const minGap = hs ? 2100 : 1200;
    const span = hs ? 3400 : 2500;
    if (now - lastFireworkTimeRef.current > minGap + Math.random() * span) {
      createFirework();
      lastFireworkTimeRef.current = now;
    }

    animationFrameRef.current = requestAnimationFrame(updateAndDraw);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const initialBursts = heroSceneRef.current ? 1 : 2;
    for (let i = 0; i < initialBursts; i++) {
      setTimeout(() => createFirework(), i * (heroSceneRef.current ? 700 : 400));
    }
    lastFireworkTimeRef.current = Date.now();

    animationFrameRef.current = requestAnimationFrame(updateAndDraw);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        fixedViewport
          ? "pointer-events-none fixed inset-0 overflow-hidden"
          : "relative h-full w-full overflow-hidden",
        className
      )}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {children ? <div className="relative z-10 h-full w-full">{children}</div> : null}
    </div>
  );
}

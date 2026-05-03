"use client";

import { useEffect, useRef } from "react";

type RocketAddDetail = {
  productId?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function easeInOutCubic(x: number) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function getQuadraticBezierPoint(
  t: number,
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number }
) {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  };
}

function getQuadraticBezierTangent(
  t: number,
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number }
) {
  return {
    x: 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x),
    y: 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y),
  };
}

export function CartRocketAddToCart() {
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const rocketImgRef = useRef<HTMLImageElement | null>(null);
  const impactRef = useRef<HTMLDivElement | null>(null);
  const runIdRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const flameRef = useRef<SVGGElement | null>(null);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    reduceMotionRef.current =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const onRocketAdd = (e: Event) => {
      if (reduceMotionRef.current) return;

      const detail = (e as CustomEvent<RocketAddDetail>).detail ?? {};
      // detail.productId isn't strictly needed; it's here to help future debugging/analytics.
      void detail.productId;

      const rocketEl = rocketRef.current;
      const impactEl = impactRef.current;
      if (!rocketEl || !impactEl) return;

      const logoEl = document.querySelector("[data-hartmann-logo]") as HTMLElement | null;
      const cartEl = document.querySelector("[data-cart-icon]") as HTMLElement | null;
      if (!logoEl || !cartEl) return;

      const logoImgEl = logoEl as HTMLImageElement;
      const rocketImgEl = rocketImgRef.current;
      if (rocketImgEl) {
        // Use the exact same logo asset the header renders.
        // This keeps the animation visually identical to the Header mark.
        const src = logoImgEl.currentSrc || logoImgEl.src;
        rocketImgEl.src = src;
      }

      runIdRef.current += 1;
      const runId = runIdRef.current;

      // Cancel any running animation.
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);

      const logoRect = logoEl.getBoundingClientRect();
      const cartRect = cartEl.getBoundingClientRect();

      const P0 = {
        x: logoRect.left + logoRect.width * 0.25,
        y: logoRect.top + logoRect.height * 0.55,
      };
      const P2 = {
        x: cartRect.left + cartRect.width / 2,
        y: cartRect.top + cartRect.height / 2,
      };

      // Make the path feel elegant: a gentle curve upward/downward based on geometry.
      const dx = P2.x - P0.x;
      const dy = P2.y - P0.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Straight flight: we avoid any noticeable curve so it reads as a
      // straight, horizontal rocket shot across the header area.
      const rocketScale = 1;
      const pathEnd = P2;

      const P1 = {
        x: (P0.x + pathEnd.x) / 2,
        y: (P0.y + pathEnd.y) / 2,
      };

      const durationMs = 860;

      // Initial positioning
      rocketEl.style.opacity = "1";
      rocketEl.style.pointerEvents = "none";
      rocketEl.style.width = `${logoRect.width * rocketScale}px`;
      rocketEl.style.height = `${logoRect.height * rocketScale}px`;
      rocketEl.style.transform = `translate3d(${P0.x}px, ${P0.y}px, 0) translate(-50%, -50%)`;

      impactEl.style.opacity = "0";

      const startAt = performance.now();

      const step = (now: number) => {
        if (runIdRef.current !== runId) return;

        const t = clamp((now - startAt) / durationMs, 0, 1);
        const te = easeInOutCubic(t);

        const pos = getQuadraticBezierPoint(te, P0, P1, pathEnd);
        const tangent = getQuadraticBezierTangent(te, P0, P1, pathEnd);
        const angle = (Math.atan2(tangent.y, tangent.x) * 180) / Math.PI;

        // Important: no rotation / no skewed orientation. Keep it horizontal like the header mark.
        rocketEl.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;

        // Flame intensity: stronger near the beginning, then fades smoothly.
        const flame = flameRef.current;
        if (flame) {
          const flameT = 1 - t;
          const opacity = 0.35 + 0.55 * flameT;
          const flameScale = 0.9 + 0.25 * Math.sin(Math.PI * (1 - t));
          flame.style.opacity = String(opacity);
          flame.style.transform = `scale(${flameScale})`;
        }

        if (t < 1) {
          rafRef.current = window.requestAnimationFrame(step);
          return;
        }

        // Impact
        impactEl.style.setProperty("--ix", `${P2.x}px`);
        impactEl.style.setProperty("--iy", `${P2.y}px`);
        impactEl.classList.remove("cart-rocket-impact");
        // Force reflow so animation restarts.
        impactEl.offsetHeight;
        impactEl.classList.add("cart-rocket-impact");

        // Trigger the cart feedback burst.
        // Navbar also listens to `cart:burst`.
        window.dispatchEvent(
          new CustomEvent("cart:burst", {
            detail: { originX: P2.x, originY: P2.y },
          })
        );

        // Fade out rocket quickly after impact.
        rocketEl.style.opacity = "0";
      };

      rafRef.current = window.requestAnimationFrame(step);
    };

    window.addEventListener("cart:rocket-add", onRocketAdd as EventListener);
    return () => {
      window.removeEventListener("cart:rocket-add", onRocketAdd as EventListener);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={rocketRef}
        className="cart-rocket"
        aria-hidden
        style={{
          opacity: 0,
        }}
      >
        <svg
          width="0"
          height="0"
          viewBox="0 0 0 0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flame is no longer part of the rocket graphic itself.
              We keep a placeholder ref so the JS doesn't crash. */}
        </svg>

        {/* Animated logo uses a plain <img> to support ref + dynamic src updates. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={rocketImgRef}
          alt=""
          draggable={false}
          className="cart-rocket-logo"
        />
      </div>

      <div
        ref={impactRef}
        className="cart-rocket-impact"
        aria-hidden
      />
    </>
  );
}


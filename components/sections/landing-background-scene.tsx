"use client";

import { FireworksBackground } from "@/components/ui/fireworks-background";
import { HeroStarfield } from "@/components/ui/hero-starfield";

export function LandingBackgroundScene() {
  return (
    <>
      <FireworksBackground heroScene fixedViewport className="z-0" />

      <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden>
        <div
          className="absolute inset-0 hero-bg-entrance"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,20,25,0.8) 0%, rgba(15,20,25,0.46) 24%, rgba(15,20,25,0.32) 56%, rgba(15,20,25,0.72) 100%)",
          }}
        />

        <HeroStarfield className="opacity-88" coverage={1} fadeBottom={false} />

        <div
          className="absolute inset-0 hero-bg-entrance"
          style={{
            background: `
              linear-gradient(90deg, rgba(15,20,25,0.52) 0%, transparent 18%, transparent 82%, rgba(15,20,25,0.45) 100%),
              linear-gradient(to bottom, rgba(15,20,25,0.28) 0%, transparent 20%, transparent 68%, rgba(15,20,25,0.6) 100%)
            `,
          }}
        />
      </div>
    </>
  );
}

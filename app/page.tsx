import { HeroSection } from "@/components/sections/hero-section";
import { FeatureCardsSection } from "@/components/sections/feature-cards-section";
import { LandingBackgroundScene } from "@/components/sections/landing-background-scene";

export default function Home() {
  return (
    <div className="home-landing">
      <LandingBackgroundScene />
      <div className="relative z-10">
        <HeroSection />
        <FeatureCardsSection />
      </div>
    </div>
  );
}

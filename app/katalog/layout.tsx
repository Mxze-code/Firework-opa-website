import { LandingBackgroundScene } from "@/components/sections/landing-background-scene";

export default function KatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="home-landing">
      <LandingBackgroundScene />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="home-hero relative min-h-[100vh] w-full flex items-center justify-center">
      <div className="relative z-20 flex min-h-[100vh] w-full flex-col items-center justify-center px-6 py-24 text-center">
            <div className="mb-8 h-[2px] w-24 bg-[#c9a227]/55" />

            <p className="hero-entrance hero-entrance-1 text-sm font-medium tracking-[0.2em] uppercase text-[#94a3b8]">
              Tradition seit 1951
            </p>

            <div className="relative hero-entrance hero-entrance-2 mt-4">
              <h1
                className="relative font-heading text-4xl font-bold tracking-tight text-[#f7fafc] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] xl:leading-[1.02]"
                style={{
                  textShadow:
                    "0 16px 48px rgba(0,0,0,0.75), 0 1px 0 rgba(0,0,0,0.4)",
                }}
              >
                Feuerwerk von Hartmann
              </h1>
            </div>

            <p className="hero-entrance hero-entrance-3 mt-6 max-w-3xl text-base text-[#94a3b8] md:text-lg lg:text-xl lg:leading-relaxed">
              Tradition, Erfahrung und zuverlässiger Feuerwerksverkauf seit
              Jahrzehnten. Ganzjähriger Verkauf für Weiterverkäufer.
            </p>

            <Link
              href="/katalog"
              className="hero-entrance hero-entrance-4 mt-12 inline-block border border-[#c9a227] bg-[#c9a227]/10 px-12 py-4 text-base font-semibold text-[#c9a227] transition-all duration-300 ease-out shadow-[inset_0_0_0_1px_rgba(201,162,39,0.14),0_18px_45px_rgba(0,0,0,0.5)] hover:bg-[#c9a227]/22 hover:text-[#f7fafc] hover:shadow-[inset_0_0_0_1px_rgba(201,162,39,0.28),0_22px_60px_rgba(0,0,0,0.64)] hover:-translate-y-1"
            >
              Zum Katalog
            </Link>

            <div className="mt-12 h-[1.5px] w-20 bg-[#c9a227]/32" />
      </div>
    </section>
  );
}

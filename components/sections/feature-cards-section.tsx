import Link from "next/link";

const cards = [
  {
    title: "Vertrieb an Wiederverkäufer",
    description: "Zuverlaessige Belieferung fuer Handel und Gewerbe.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
        <path d="M3 9V7a2 2 0 0 1 1.86-2l7-1 7 1A2 2 0 0 1 21 7v2" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    title: "Tradition seit 1951",
    description: "Erfahrung und Verkauf seit ueber sieben Jahrzehnten.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8v5l3 3" />
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
  {
    title: "Ganzjaehriger Vertrieb",
    description:
      "Ganzjaehriger Verkauf mit persoenlicher Beratung.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M4.93 19.07l1.41-1.41" />
        <path d="M17.66 6.34l1.41-1.41" />
        <path d="M12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12z" />
      </svg>
    ),
  },
  {
    title: "Zum Katalog",
    description: "Unser aktuelles Sortiment im Ueberblick.",
    href: "/katalog",
    isLink: true,
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6 2h14v20H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
      </svg>
    ),
  },
];

export function FeatureCardsSection() {
  return (
    <section className="landing-features-band relative py-16 md:py-24">
      <div className="landing-hero-divider" aria-hidden />
      <div className="landing-features-texture" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pt-20 md:pt-24">
        <div className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#64748b]">
              Hartmann UG &amp; Co. KG
            </p>
            <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight text-[#e2e8f0] md:text-2xl">
              Werte, auf die Sie sich verlassen
            </h2>
          </div>
          <div className="hidden h-px w-32 bg-gradient-to-r from-[#c9a227]/35 to-transparent md:block" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {cards.map((card) => {
            const content = (
              <div className="group relative overflow-hidden flex h-full flex-col rounded border border-[#2d3a4d] bg-[#1a2332] p-8 lg:p-10 transition-all duration-300 ease-out hover:border-[#c9a227]/50 hover:bg-[#243044] hover:shadow-[0_16px_50px_rgba(0,0,0,0.35)] hover:-translate-y-1">
                {/* goldene Kante + subtiler Verlauf */}
                <div
                  aria-hidden
                  className="absolute left-0 top-0 h-1 w-full opacity-80"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(201,162,39,0.85) 0%, rgba(212,176,58,0.35) 35%, rgba(201,162,39,0) 80%)",
                  }}
                />

                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className="mt-0.5 flex h-11 w-11 items-center justify-center rounded border border-[#c9a227]/25 bg-[#c9a227]/10 text-[#c9a227] shadow-[0_0_0_1px_rgba(201,162,39,0.08)] transition-colors duration-300 group-hover:bg-[#c9a227]/14"
                    aria-hidden
                  >
                    {card.icon}
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[#f0f4f8]">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[#94a3b8]">{card.description}</p>
                  </div>
                </div>

                {card.isLink && (
                  <span className="relative z-10 mt-6 text-sm font-medium text-[#c9a227] transition-colors group-hover:text-[#d4b03a]">
                    Mehr erfahren →
                  </span>
                )}
              </div>
            );

            return card.href ? (
              <Link key={card.title} href={card.href}>
                {content}
              </Link>
            ) : (
              <div key={card.title}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

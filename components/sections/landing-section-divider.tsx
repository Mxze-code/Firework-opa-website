/**
 * Hochwertiger Abschnittstrenner für die Startseite (Hero → Content).
 * Dezent, traditionell, mit warmem Gold-Akzent – kein Standard-Border.
 */
export function LandingSectionDivider() {
  return (
    <div
      className="landing-section-divider relative w-full px-6 md:px-10 lg:px-12"
      aria-hidden
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 md:gap-5">
        <div className="landing-divider-line landing-divider-line--left h-px flex-1" />
        <div className="flex items-center gap-2">
          <span className="landing-divider-cap h-px w-6 bg-[#c9a227]/22 md:w-10" />
          <span className="landing-divider-romb h-2 w-2 rotate-45 border border-[#c9a227]/28 bg-[#c9a227]/8 shadow-[0_0_16px_rgba(201,162,39,0.08)]" />
          <span className="landing-divider-cap h-px w-6 bg-[#c9a227]/22 md:w-10" />
        </div>
        <div className="landing-divider-line landing-divider-line--right h-px flex-1" />
      </div>
    </div>
  );
}

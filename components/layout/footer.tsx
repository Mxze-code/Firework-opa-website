import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#2d3a4d]/90 bg-[#0f1419]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-9 lg:px-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0 space-y-1">
            <p className="font-heading text-sm font-semibold tracking-tight text-[#f0f4f8]">
              Hartmann UG &amp; Co. KG
            </p>
            <p className="text-xs leading-relaxed text-[#64748b]">
              Badergasse 55 · 96472 Rödental
            </p>
          </div>
          <div className="text-xs leading-relaxed text-[#64748b] sm:text-right">
            <p>Tel. 09563 4896</p>
            <p className="mt-0.5">HRA 4727 · Coburg</p>
          </div>
        </div>
        <nav
          className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-1 border-t border-[#2d3a4d]/55 pt-5 md:mt-5 md:pt-4"
          aria-label="Rechtliche Hinweise"
        >
          <Link
            href="/impressum"
            className="rounded px-1 py-0.5 text-xs text-[#64748b] transition-colors hover:text-[#c9a227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]/45"
          >
            Impressum
          </Link>
          <span className="px-1 text-[10px] text-[#2d3a4d]" aria-hidden>
            ·
          </span>
          <Link
            href="/datenschutz"
            className="rounded px-1 py-0.5 text-xs text-[#64748b] transition-colors hover:text-[#c9a227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]/45"
          >
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}

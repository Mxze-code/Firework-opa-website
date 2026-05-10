import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-30 mt-auto bg-[#0f1419]">
      <div className="border-t border-[#2d3a4d]/90 bg-[#0f1419] shadow-[0_-18px_55px_rgba(0,0,0,0.28)]">
        <div className="mx-auto max-w-7xl px-6 py-7 md:px-10 lg:px-12">
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
        </div>
      </div>

      <div className="border-t border-[#2d3a4d]/70 bg-[#0b1016]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-xs text-[#64748b] sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-12">
          <div className="min-w-0 space-y-1">
            © Hartmann UG &amp; Co. KG
          </div>
          <nav
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
            aria-label="Rechtliche Hinweise"
          >
            <Link
              href="/impressum"
              className="rounded text-[#94a3b8] transition-colors hover:text-[#c9a227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]/45"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="rounded text-[#94a3b8] transition-colors hover:text-[#c9a227] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]/45"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

import type { ReactNode } from "react";

type LegalPageShellProps = {
  title: string;
  lead?: string;
  children: ReactNode;
};

export function LegalPageShell({ title, lead, children }: LegalPageShellProps) {
  return (
    <div className="min-h-[55vh] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <article className="mx-auto max-w-3xl">
          <header>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-[#f0f4f8] md:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {title}
            </h1>
            {lead ? (
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-[#64748b]">
                {lead}
              </p>
            ) : null}
            <div
              className="mt-6 h-px w-full max-w-[12rem] bg-gradient-to-r from-[#c9a227]/55 via-[#c9a227]/25 to-transparent"
              aria-hidden
            />
          </header>
          <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">{children}</div>
        </article>
      </div>
    </div>
  );
}

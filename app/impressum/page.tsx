import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";

export const metadata: Metadata = {
  title: "Impressum · Feuerwerk Hartmann",
  description:
    "Impressum der Hartmann UG & Co. KG – Feuerwerk Hartmann, Rödental. Angaben gemäß § 5 TMG.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPageShell title="Impressum" lead="Angaben gemäß § 5 TMG">
      <section className="space-y-4" aria-labelledby="impressum-unternehmen">
        <h2
          id="impressum-unternehmen"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          Feuerwerk Hartmann
        </h2>
        <div className="space-y-1 text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          <p>Hartmann UG &amp; Co. KG</p>
          <p>Badergasse 55</p>
          <p>96472 Rödental</p>
          <p>Deutschland</p>
          <p className="pt-3">Telefon: 09563 4896</p>
          <p>Fax: 09563 729 3325</p>
          <p>Mobil: 0172 8616347</p>
          <p className="pt-3">Handelsregister: HRA 4727</p>
          <p>Registergericht: Coburg</p>
          <p className="pt-3">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          </p>
          <p>wird nachgereicht</p>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="impressum-kontakt">
        <h2
          id="impressum-kontakt"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          Kontakt
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          E-Mail: [HIER DEINE E-MAIL EINTRAGEN]
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="impressum-rstv">
        <h2
          id="impressum-rstv"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <div className="space-y-1 text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          <p>Hartmann UG &amp; Co. KG</p>
          <p>Badergasse 55</p>
          <p>96472 Rödental</p>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="impressum-haftung-inhalte">
        <h2
          id="impressum-haftung-inhalte"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          Haftung für Inhalte
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
          bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="impressum-haftung-links">
        <h2
          id="impressum-haftung-links"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          Haftung für Links
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Unsere Website enthält gegebenenfalls Links zu externen Websites
          Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden
          Inhalte übernehmen wir keine Gewähr.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="impressum-urheberrecht">
        <h2
          id="impressum-urheberrecht"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          Urheberrecht
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser
          Website unterliegen dem deutschen Urheberrecht.
        </p>
      </section>
    </LegalPageShell>
  );
}

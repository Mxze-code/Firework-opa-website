import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";

export const metadata: Metadata = {
  title: "Datenschutzerklärung · Feuerwerk Hartmann",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten bei Feuerwerk Hartmann / Hartmann UG & Co. KG.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPageShell title="Datenschutzerklärung">
      <section className="space-y-4" aria-labelledby="ds-allgemein">
        <h2
          id="ds-allgemein"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          1. Allgemeine Hinweise
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend
          informieren wir Sie über die Verarbeitung personenbezogener Daten bei
          Nutzung dieser Website.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="ds-verantwortlicher">
        <h2
          id="ds-verantwortlicher"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          2. Verantwortlicher
        </h2>
        <div className="space-y-1 text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          <p>Hartmann UG &amp; Co. KG</p>
          <p>Badergasse 55</p>
          <p>96472 Rödental</p>
          <p>Deutschland</p>
          <p className="pt-3">Telefon: 09563 4896</p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:hartmann.hu@gmx.de"
              className="text-[#c9a227] underline decoration-[#c9a227]/35 underline-offset-2 transition-colors hover:text-[#d4b03a] hover:decoration-[#d4b03a]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]/45"
            >
              hartmann.hu@gmx.de
            </a>
          </p>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="ds-hosting">
        <h2
          id="ds-hosting"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          3. Hosting
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Diese Website wird über Vercel Inc. gehostet.
        </p>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Beim Besuch der Website können durch den Hostinganbieter technische
          Informationen verarbeitet werden, beispielsweise:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Browsertyp</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Die Verarbeitung erfolgt zur technisch sicheren Bereitstellung der
          Website.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="ds-email">
        <h2
          id="ds-email"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          4. Kontaktaufnahme per E-Mail
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Wenn Sie uns per E-Mail kontaktieren oder eine Produktanfrage senden,
          werden die von Ihnen übermittelten Daten ausschließlich zur Bearbeitung
          Ihrer Anfrage verwendet.
        </p>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="ds-produkt">
        <h2
          id="ds-produkt"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          5. Produktanfragen
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Die auf dieser Website dargestellten Produkte dienen der unverbindlichen
          Anfrage.
          <br />
          Ein Kaufvertrag kommt erst nach individueller Rückmeldung und
          Bestätigung zustande.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="ds-cookies">
        <h2
          id="ds-cookies"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          6. Cookies
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Diese Website verwendet derzeit keine eigenen Cookies zu Analyse- oder
          Marketingzwecken.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="ds-rechte">
        <h2
          id="ds-rechte"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          7. Ihre Rechte
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Sie haben jederzeit das Recht auf:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung</li>
          <li>Löschung</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Widerspruch gegen die Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="ds-beschwerde">
        <h2
          id="ds-beschwerde"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          8. Beschwerderecht
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="ds-aenderungen">
        <h2
          id="ds-aenderungen"
          className="scroll-mt-28 font-heading text-xl font-semibold text-[#f0f4f8] md:text-2xl"
        >
          9. Änderungen
        </h2>
        <p className="text-base leading-relaxed text-[#94a3b8] md:text-[1.0625rem] md:leading-8">
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an
          geänderte rechtliche Anforderungen oder technische Änderungen der
          Website anzupassen.
        </p>
      </section>
    </LegalPageShell>
  );
}

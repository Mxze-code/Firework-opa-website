import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ueberMichVersion = "20260320-3";

export default function KontaktPage() {
  return (
    <div className="min-h-[60vh] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <h1 className="font-heading text-3xl font-bold text-[#f0f4f8] md:text-4xl">
          Kontakt / Über mich
        </h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-1 lg:items-start">
          <div className="mx-auto w-full max-w-[1040px] h-full">
            <div className="flex h-full flex-col rounded border border-[#2d3a4d] bg-[#0f1419]/35 p-6 md:p-10">
              <p className="text-base font-medium uppercase tracking-[0.2em] text-[#64748b]">
                Über mich
              </p>

              <div className="mt-6 flex items-start gap-12">
                <div className="relative w-[240px] sm:w-[280px] md:w-[330px] flex-shrink-0 overflow-hidden rounded border border-[#2d3a4d] bg-[#0f1419]/55 aspect-[941/1024]">
                  <Image
                    src={`${basePath}/ueber-mich.png?v=${ueberMichVersion}`}
                    alt="Portraitbild Über mich"
                    fill
                    // Komplettes, hochkantiges Foto anzeigen (kein Cropping).
                    className="object-contain object-center"
                    priority
                  />
                </div>

                <p className="flex-1 text-base sm:text-lg md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-[#94a3b8]">
                  Mein Name ist Hubert Hartmann. Seit vielen Jahren bin ich
                  im Verkauf von Schreibwaren und Feuerwerk tätig und
                  vermiete zudem Wohnungen sowie Garagen und Stellplätze.
                  Früher war ich Inhaber der Firma Hartmann, heute betreibe
                  ich diese Tätigkeiten vor allem aus persönlicher Freude und
                  mit viel Erfahrung. Bei Interesse freue ich mich über Ihre
                  Kontaktaufnahme.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1040px] rounded border border-[#2d3a4d] bg-[#0f1419]/35 p-6 md:p-10">
            <p className="text-base font-medium uppercase tracking-[0.2em] text-[#64748b]">
              Ansprechpartner
            </p>
            <p className="mt-3 text-3xl md:text-4xl font-semibold text-[#f0f4f8]">
              Hartmann UG &amp; Co. KG
            </p>

            <div className="mt-6 space-y-4 text-[#94a3b8] text-base sm:text-lg md:text-xl">
              <p>Badergasse 55</p>
              <p>96472 Rödental</p>
              <p className="pt-2">Tel. 09563 4896</p>
              <p>Fax 09563 729 3325</p>
              <p>Mobil 0172 8616347</p>
              <p className="pt-3">Handelsregister Coburg HRA 4727</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

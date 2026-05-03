export function Footer() {
  return (
    <footer className="border-t border-[#2d3a4d] bg-[#0f1419] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-heading font-semibold text-[#f0f4f8]">Hartmann UG & Co. KG</p>
            <p className="mt-1 text-sm text-[#94a3b8]">
              Badergasse 55 · 96472 Rödental
            </p>
          </div>
          <div className="text-sm text-[#94a3b8]">
            <p>Tel. 09563 4896</p>
            <p>Handelsregister Coburg HRA 4727</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { CartSummary } from "@/components/cart/cart-summary";

export const metadata = {
  title: "Produktanfrage · Hartmann UG & Co. KG",
  description: "Ihre Produktanfrage bei Hartmann UG & Co. KG.",
};

export default function WarenkorbPage() {
  return (
    <div className="min-h-[60vh] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <header className="mb-12">
          <h1 className="font-heading text-3xl font-bold text-[#f0f4f8] md:text-4xl">
            Produktanfrage
          </h1>
          <p className="mt-4 text-[#94a3b8]">
            Stellen Sie eine unverbindliche Anfrage zu den ausgewaehlten
            Produkten. Ohne Kasse, ohne Bezahlung im Onlineshop.
          </p>
        </header>

        <CartSummary />
      </div>
    </div>
  );
}

import { products } from "@/lib/products";
import { ProductGrid } from "@/components/catalog/product-grid";

export const metadata = {
  title: "Katalog · Hartmann UG & Co. KG",
  description: "Unser Sortiment an Feuerwerksartikeln – Tradition und Qualität seit 1951.",
};

export default function KatalogPage() {
  return (
    <div className="min-h-[60vh] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <header className="mb-12">
          <h1 className="font-heading text-3xl font-bold text-[#f0f4f8] md:text-4xl">
            Katalog
          </h1>
          <p className="mt-4 max-w-2xl text-[#94a3b8]">
            Unser Sortiment an Feuerwerksartikeln. Traditionelle Qualität und
            bewährte Produkte für Weiterverkäufer.
          </p>

          <p className="mt-4 max-w-2xl text-sm text-[#94a3b8]">
            Produkte auswählen, in den Warenkorb legen und anschließend eine
            Anfrage senden.
          </p>
        </header>

        <ProductGrid products={products} />
      </div>
    </div>
  );
}

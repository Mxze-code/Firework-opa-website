import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs } from "@/lib/products";
import { AddToCartButton } from "@/components/catalog/add-to-cart-button";
import { ProductMediaGalleryWithUrl } from "@/components/catalog/product-media-gallery-with-url";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produkt nicht gefunden" };
  return {
    title: `${product.name} · Hartmann UG & Co. KG`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="min-h-[60vh] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <Link
          href="/katalog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#f0f4f8] transition"
        >
          ← Zurück zum Katalog
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <ProductMediaGalleryWithUrl
            image={product.image}
            imageAlt={product.name}
            videoUrl={product.videoUrl}
          />

          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-[#64748b]">
              {product.category}
            </span>
            <h1 className="mt-2 font-heading text-2xl font-bold text-[#f0f4f8] md:text-3xl">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-[#64748b]">
              Art.-Nr. {product.articleNumber} · {product.type}
            </p>
            <p className="mt-4 text-[#94a3b8]">{product.shortDescription}</p>

            <p className="mt-4 text-lg font-semibold text-[#c9a227]">
              {product.price.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
              {product.priceNote && (
                <span className="ml-1 text-sm font-normal text-[#64748b]">
                  {product.priceNote}
                </span>
              )}
            </p>

            {(product.durationSeconds != null || product.heightMeters != null) && (
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#94a3b8]">
                {product.durationSeconds != null && (
                  <span>Brenndauer: ca. {product.durationSeconds} Sek.</span>
                )}
                {product.heightMeters != null && (
                  <span>Höhe: ca. {product.heightMeters} m</span>
                )}
              </div>
            )}

            <div className="mt-8 space-y-6">
              <h2 className="font-heading text-lg font-semibold text-[#f0f4f8]">
                Merkmale
              </h2>
              <ul className="list-inside list-disc space-y-1 text-[#94a3b8]">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 sm:flex-row">
                <AddToCartButton product={product} className="sm:w-auto sm:min-w-[200px]" />
                <Link
                  href="/katalog"
                  className="border border-[#2d3a4d] px-6 py-3 text-center text-sm font-medium text-[#94a3b8] transition hover:border-[#3d4a5d] hover:text-[#f0f4f8] hover:bg-white/5"
                >
                  Weiter im Katalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

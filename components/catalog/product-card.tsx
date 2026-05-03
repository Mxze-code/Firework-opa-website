import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { ProductImagePlaceholder } from "./product-image-placeholder";
import { AddToCartButton } from "./add-to-cart-button";

type ProductCardProps = {
  product: Product;
};

/* Eckig, volles Seiten-Dunkel (#0f1419) – gut lesbar auf hellem Produktfoto */
const catalogVideoButtonClass =
  "absolute right-3 top-3 z-20 inline-flex min-h-[2.25rem] items-center justify-center gap-2 rounded-none border border-[#c9a227]/85 bg-[#0f1419] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f2d98a] shadow-[0_2px_0_rgba(0,0,0,0.25),0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200 hover:border-[#dfc56a] hover:bg-[#0f1419] hover:text-[#fdf6e3] hover:shadow-[0_2px_0_rgba(0,0,0,0.15),0_10px_28px_rgba(201,162,39,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] active:translate-y-px active:shadow-[0_1px_0_rgba(0,0,0,0.25)]";

export function ProductCard({ product }: ProductCardProps) {
  const detailHref = `/katalog/${product.slug}`;
  const videoHref = `${detailHref}?video=1`;

  return (
    <article className="group flex flex-col rounded border border-[#2d3a4d] bg-[#1a2332] transition-all duration-300 ease-out hover:border-[#c9a227]/40 hover:bg-[#243044] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1">
      <div className="relative">
        <Link
          href={detailHref}
          className="block rounded-t border-b border-[#2d3a4d] bg-[#f8fafc] p-4 md:p-5"
        >
          <div className="relative h-56 w-full md:h-60">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="h-full w-full object-contain object-center transition group-hover:opacity-95"
              />
            ) : (
              <ProductImagePlaceholder className="h-full w-full rounded bg-[#f8fafc] text-[#94a3b8]" />
            )}
          </div>
        </Link>
        {product.videoUrl ? (
          <Link href={videoHref} className={catalogVideoButtonClass}>
            <svg
              className="h-3.5 w-3.5 text-[#e8cf7a]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
            Video
          </Link>
        ) : null}
      </div>

      <Link href={detailHref} className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-[#64748b]">
          {product.category}
        </span>
        <h2 className="mt-1 line-clamp-2 font-heading text-lg font-semibold text-[#f0f4f8] transition group-hover:text-[#c9a227]">
          {product.name}
        </h2>
        <p className="mt-0.5 line-clamp-1 text-xs text-[#64748b]">{product.type}</p>
        <p className="mt-2 line-clamp-2 text-sm text-[#94a3b8]">
          {product.shortDescription}
        </p>
        <p className="mt-auto flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-4 font-heading text-lg font-semibold tracking-tight text-[#c9a227] md:text-xl">
          {product.price.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR",
          })}
          {product.priceNote && (
            <span className="text-xs font-normal tracking-normal text-[#64748b] md:text-sm">
              {product.priceNote}
            </span>
          )}
        </p>
      </Link>
      <div className="border-t border-[#2d3a4d] p-4">
        <div className="flex gap-3">
          <Link
            href={detailHref}
            className="flex-1 border border-[#2d3a4d] px-4 py-2.5 text-center text-sm font-medium text-[#94a3b8] transition-all duration-200 hover:border-[#3d4a5d] hover:bg-white/5 hover:text-[#f0f4f8] hover:-translate-y-0.5"
          >
            Details
          </Link>
          <AddToCartButton product={product} className="flex-1" />
        </div>
      </div>
    </article>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import type { CartItem } from "@/lib/cart-context";
import { ProductImagePlaceholder } from "@/components/catalog/product-image-placeholder";

type CartItemRowProps = {
  item: CartItem;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
};

export function CartItemRow({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemRowProps) {
  const { product, quantity } = item;
  const price = product.price ?? 0;
  const lineTotal = price * quantity;

  return (
    <div className="flex gap-6 border-b border-[#2d3a4d] py-6 last:border-0">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded border border-[#2d3a4d]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="96px"
            className="h-full w-full object-cover"
          />
        ) : (
          <ProductImagePlaceholder className="h-full w-full" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <Link
          href={`/katalog/${product.slug}`}
          className="font-heading font-semibold text-[#f0f4f8] hover:text-[#c9a227] transition"
        >
          {product.name}
        </Link>
        <p className="mt-0.5 text-sm text-[#64748b]">{product.category}</p>
        <p className="mt-2 text-sm font-medium text-[#c9a227]">
          {lineTotal.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR",
          })}
        </p>
      </div>

      <div className="flex shrink-0 flex-col items-end justify-between gap-2">
        <div className="flex items-center gap-1 border border-[#2d3a4d]">
          <button
            type="button"
            onClick={() => onUpdateQuantity(product.id, quantity - 1)}
            className="px-2 py-1 text-[#94a3b8] hover:text-[#f0f4f8] hover:bg-white/5 transition"
            aria-label="Menge verringern"
          >
            −
          </button>
          <span className="min-w-[2rem] text-center text-sm">{quantity}</span>
          <button
            type="button"
            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
            className="px-2 py-1 text-[#94a3b8] hover:text-[#f0f4f8] hover:bg-white/5 transition"
            aria-label="Menge erhöhen"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={() => onRemove(product.id)}
          className="text-xs text-[#64748b] hover:text-[#94a3b8] transition"
        >
          Entfernen
        </button>
      </div>
    </div>
  );
}

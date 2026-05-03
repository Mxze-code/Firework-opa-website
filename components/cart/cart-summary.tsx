"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { CartItemRow } from "./cart-item";

export function CartSummary() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const inquiryRecipient = "Hartmann.hu@gmx.de";

  const handleSendInquiry = () => {
    const subject = "Produktanfrage Feuerwerk";
    const intro = [
      "Guten Tag,",
      "",
      "ich moechte eine unverbindliche Produktanfrage stellen:",
      "",
    ];
    const productLines = items.map((item, index) => {
      const lineTotal = item.product.price * item.quantity;
      const unitPrice = item.product.price.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
      });
      const totalPrice = lineTotal.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
      });

      return [
        `${index + 1}. ${item.product.name}`,
        `   Artikelnummer: ${item.product.articleNumber}`,
        `   Menge: ${item.quantity}`,
        `   Einzelpreis: ${unitPrice}`,
        `   Positionssumme: ${totalPrice}`,
      ].join("\n");
    });

    const summary = [
      "",
      "Gesamtsumme (Orientierungswert):",
      subtotal.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
      }),
      "",
      "Bitte um Rueckmeldung zu Verfuegbarkeit und weiteren Details.",
      "",
      "Name:",
      "E-Mail:",
      "Telefon:",
      "Nachricht:",
    ];

    const body = [...intro, ...productLines, ...summary].join("\n");
    const mailto = `mailto:${inquiryRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  if (items.length === 0) {
    return (
      <div className="rounded border border-[#2d3a4d] bg-[#1a2332] p-12 text-center">
        <p className="text-[#94a3b8]">Ihre Produktanfrage ist aktuell leer.</p>
        <Link
          href="/katalog"
          className="mt-4 inline-block border border-[#c9a227] px-6 py-2 text-sm font-medium text-[#c9a227] transition hover:bg-[#c9a227]/10"
        >
          Zum Katalog
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="rounded border border-[#2d3a4d] bg-[#1a2332] px-6">
          {items.map((item) => (
            <CartItemRow
              key={item.product.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="rounded border border-[#2d3a4d] bg-[#1a2332] p-6">
          <h2 className="font-heading text-lg font-semibold text-[#f0f4f8]">
            Anfrage-Zusammenfassung
          </h2>
          <div className="mt-4 space-y-2 border-t border-[#2d3a4d] pt-4">
            <div className="flex justify-between text-sm text-[#94a3b8]">
              <span>Warenwert (Orientierung)</span>
              <span>
                {subtotal.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                })}
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-[#2d3a4d] pt-4 font-semibold text-[#f0f4f8]">
            <span>Gesamtsumme</span>
            <span className="text-[#c9a227]">
              {subtotal.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
            </span>
          </div>
          <p className="mt-4 text-xs text-[#64748b]">
            Kein Online-Checkout: Sie senden hier eine unverbindliche
            Produktanfrage per E-Mail.
          </p>
          <button
            type="button"
            onClick={handleSendInquiry}
            className="mt-5 w-full border border-[#c9a227] bg-[#c9a227]/10 px-5 py-3 text-sm font-semibold text-[#c9a227] transition hover:bg-[#c9a227]/18 hover:text-[#f0f4f8]"
          >
            Produktanfrage senden
          </button>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AppProviders } from "@/components/providers/app-providers";
import { CartRocketAddToCart } from "@/components/cart/cart-rocket-add-to-cart";
import { CartScreenBurst } from "@/components/cart/cart-screen-burst";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hartmann UG & Co. KG · Feuerwerksverkauf",
  description:
    "Tradition, Erfahrung und zuverlässiger Feuerwerksverkauf seit Jahrzehnten. Hartmann UG & Co. KG – Rödental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${merriweather.variable} ${sourceSans.variable}`}>
      <body className="font-body antialiased">
        <AppProviders>
          <Navbar />
          <CartRocketAddToCart />
          <CartScreenBurst />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}

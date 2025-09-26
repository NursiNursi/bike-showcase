import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title:
    "Dealer Resmi Motor Honda Lembang Bandung | Cicilan Ringan & Promo Terbaru",
  description:
    "Dealer resmi motor Honda di Lembang Bandung ✔️ Cicilan ringan, promo motor Honda terbaru, layanan cepat & garansi resmi. Cek harga & ajukan kredit sekarang!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

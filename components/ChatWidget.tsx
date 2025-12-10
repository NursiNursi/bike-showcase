"use client";

import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/628112340753?text=Info%20promo%20Honda%20%20dong%20kak!";

export default function ChatWidget() {
  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 pointer-events-none">
      <button
        type="button"
        role="button"
        aria-label="Buka chat WhatsApp"
        title="Chat via WhatsApp"
        onClick={handleClick}
        className="group pointer-events-auto flex items-center gap-3 rounded-full bg-emerald-500 text-white shadow-lg px-6 py-4 transition-all duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      >
        <FaWhatsapp aria-hidden="true" className="w-6 h-6" />
        <span>Hubungi Sekarang</span>
      </button>
    </div>
  );
}

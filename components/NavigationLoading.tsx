"use client";

import Image from "next/image";
import { useEffect } from "react";

interface Props {
  message?: string;
}

export default function NavigationLoading({ message = "Memuat halaman detail..." }: Props) {
  // Disable pointer/touch interactions globally while the overlay is mounted
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    const prevBodyPointer = body.style.pointerEvents;
    const prevHtmlPointer = html.style.pointerEvents;
    const prevBodyTouchAction = body.style.getPropertyValue("touch-action");
    const prevHtmlTouchAction = html.style.getPropertyValue("touch-action");

    body.style.pointerEvents = "none";
    html.style.pointerEvents = "none";
    body.style.setProperty("touch-action", "none");
    html.style.setProperty("touch-action", "none");

    return () => {
      body.style.pointerEvents = prevBodyPointer || "";
      html.style.pointerEvents = prevHtmlPointer || "";
      body.style.setProperty("touch-action", prevBodyTouchAction || "");
      html.style.setProperty("touch-action", prevHtmlTouchAction || "");
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-primary-red rounded-full animate-spin" />
        <div className="flex items-center gap-2 text-primary-red font-semibold">
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}
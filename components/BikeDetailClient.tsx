"use client";

import Image from "next/image";
import { BikeProps } from "@/types";
import { useEffect, useState } from "react";

interface Props {
  bike: BikeProps;
  handleClick?: () => void;
}

export default function BikeDetailClient({ bike }: Props) {
  const [activeImage, setActiveImage] = useState<string>(
    bike.colorVariant?.[0] || bike.image || "/hero.png"
  );

  useEffect(() => {
    setActiveImage(bike.colorVariant?.[0] || bike.image || "/hero.png");
  }, [bike.model]);

  return (
    <div>
      <div className="relative w-full h-72 md:h-96 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <Image
          src={activeImage}
          alt={`Gambar ${bike.model}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      {bike.colorVariant && bike.colorVariant.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Pilihan Warna</h2>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar p-4">
            {bike.colorVariant.map((src, idx) => (
              <button
                key={`${src}-${idx}`}
                className={`relative w-24 h-24 flex-shrink-0 rounded-md border ${
                  activeImage === src ? "ring-2 ring-primary-red" : ""
                }`}
                onClick={() => setActiveImage(src)}
                aria-label={`Pilih warna ${idx + 1}`}
              >
                <Image
                  src={src}
                  alt={`Warna ${idx + 1}`}
                  fill
                  className="object-contain rounded-md"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


"use client";

import { BikeProps } from "@/types";
import { CustomButton } from "@/components";

interface Props {
  bike: BikeProps;
  handleClick?: () => void;
}

export default function DetailActionsClient({ bike, handleClick }: Props) {
  const defaultHandleClick = () => {
    const model = bike.model || "Honda";
    const msg = `Info promo Honda ${model} dong kak!`;
    const url = `https://wa.me/628112340753?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <CustomButton
      title="Pesan Sekarang"
      containerStyles="w-full py-[16px] rounded-full bg-primary-red"
      textStyles="text-white text-[14px] leading-[17px] font-bold"
      rightIcon="/right-arrow.svg"
      handleClick={handleClick ?? defaultHandleClick}
    />
  );
}


"use client";

import { BikeProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

interface BikeCardProps {
  bike: BikeProps;
}

const BikeCard = ({ bike }: BikeCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { model, machine, chassis, dimension, capacities, electrical, price } =
    bike;

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{model}</h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">Rp</span>
        {price}jt
        <span className="self-end text-[14px] font-medium">-an</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero1.png"
          alt="bike model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/engine.png"
              width={24}
              height={24}
              alt="steering wheel"
            />
            <p className="text-[14px]">Matic</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/key.png" width={24} height={24} alt="tire" />
            <p className="text-[14px]">Keyless</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/brake.png" width={24} height={24} alt="gas" />
            <p className="text-[14px]">C/ABS</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Detail Lebih Lanjut"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default BikeCard;

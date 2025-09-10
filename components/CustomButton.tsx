"use client ";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  leftIcon,
  variant = "primary",
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} ${
        variant === "primary"
          ? "bg-primary-red text-white"
          : "bg-white !text-red-500 !border !border-red-500"
      }`}
      onClick={handleClick}
    >
      {leftIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={leftIcon}
            alt="left icon"
            fill
            className="object-contain"
          />
        </div>
      )}
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;

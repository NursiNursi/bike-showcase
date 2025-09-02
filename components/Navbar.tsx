"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const handleClick = () => {
    window.open("https://wa.me/628112340753", "_blank");
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Honda Logo"
            width={178}
            height={178}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Kontak"
          btnType="button"
          containerStyles="text-primary-red rounded-full bg-white min-w-[130px] border border-primary-red"
          handleClick={handleClick}
        />
      </nav>
    </header>
  );
};

export default Navbar;

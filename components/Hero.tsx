"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-24 text-center lg:text-left padding-x">
        <h1 className="hero__title lg:leading-[78px] animate-fadeIn">
          Nikmati Kehandalan dan Gaya Bersama Honda
        </h1>

        <p
          className="hero__subtitle animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          Desain Elegan, Teknologi Terdepan, Siap Temani Setiap Petualangan Anda
        </p>

        <div className="flex gap-4">
          <div
            className="hidden lg:block animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <CustomButton
              title="Jelajahi Motor"
              containerStyles="mt-10"
              handleClick={() => handleScroll("discover")}
            />
          </div>
          <div
            className="hidden lg:block animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <CustomButton
              title="Simulasi Kredit"
              containerStyles="mt-10"
              handleClick={() => handleScroll("credit-simulation")}
              variant="secondary"
            />
          </div>
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image animate-heroEntrance">
          <Image
            src="/hero1.png"
            alt="hero"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

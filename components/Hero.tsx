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
      <div className="flex-1 pt-12 md:pt-32 text-center lg:text-left padding-x">
        <h1 className="hero__title lg:leading-[78px] animate-fadeIn">
          Nikmati Kehandalan dan Gaya Bersama Honda
        </h1>

        <p
          className="hero__subtitle animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          Desain Elegan, Teknologi Terdepan, Siap Temani Setiap Petualangan Anda
        </p>

        <div className="flex justify-center lg:justify-start gap-4">
          <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <CustomButton
              title="Jelajahi Motor"
              containerStyles="mt-10"
              handleClick={() => handleScroll("catalogue")}
            />
          </div>
          <div
            className="animate-fadeIn flex justify-center lg:justify-start"
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
            src="/hero-image.webp"
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

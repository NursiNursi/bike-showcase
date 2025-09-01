"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const catalogueSection = document.getElementById('discover');
    if (catalogueSection) {
      catalogueSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-24 text-center lg:text-left padding-x">
        <h1 className="hero__title lg:leading-[78px]">
          Nikmati Kehandalan dan Gaya Bersama Honda
          {/* Find, book, rent a car -- quick and super easy! */}
        </h1>

        <p className="hero__subtitle">
          Desain Elegan, Teknologi Terdepan, Siap Temani Setiap Petualangan Anda
        </p>

        <div className="hidden lg:block">
          <CustomButton
            title="Jelajahi Motor"
            containerStyles="bg-primary-red text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
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

"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Profile = () => {
  const handleClick = () => {
    window.open("https://wa.me/628112340753", "_blank");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="w-[80%] sm:w-[60%] lg:w-[40%] mt-12 lg:mt-48 h-[330px] relative lg:border-2 lg:border-primary-red rounded-xl flex-shrink-0">
        <Image
          src="/mia.png"
          width={500}
          height={500}
          alt="mia"
          className="absolute  sm:-top-20 lg:-top-36 left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0 pt-6"
        />
      </div>
      <div className="w-[90%] sm:w-[80%] lg:w-[50%] pt-12 lg:mt-12 flex flex-col justify-between text-center lg:text-left pl-0 lg:pl-8">
        <h1 className="hero__title text-sm sm:text-3xl lg:text-4xl font-semibold">
          Salam satu hati, saya{" "}
          <span className="text-primary-red">Mia Oktari</span>, Sales Counter
          dari Dealer <span className="text-primary-red">Sinar Rejeki</span>{" "}
          Lembang
        </h1>
        <p className="hero__subtitle mt-4 lg:mt-2 pl-1 text-base sm:text-lg lg:text-xl">
          Hubungi saya untuk dapatkan promo dan penawaran menarik dari Honda
        </p>
        <CustomButton
          title="Hubungi"
          leftIcon="/right-arrow.svg"
          containerStyles="w-full sm:w-[60%] lg:w-[50%] py-[20px] h-12 sm:h-14 rounded-full bg-primary-red mt-6 lg:mt-4 mx-auto lg:mx-0"
          textStyles="text-white text-lg sm:text-xl leading-[17px] font-bold"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Profile;

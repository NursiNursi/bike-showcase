"use client";

import { BikeProps } from "@/types";
import {
  Button,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";

import { Fragment, SetStateAction, useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import CustomButton from "./CustomButton";

interface BikeDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  bike: BikeProps;
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        right: "0",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        cursor: "pointer",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
    >
      <Image src="/right-chevron.png" alt="right" width={24} height={24} />
      {/* <span style={{ fontSize: "16px", fontWeight: "bold" }}>›</span> */}
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        // left: "10px",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        cursor: "pointer",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
    >
      <Image
        src="/right-chevron.png"
        alt="right"
        width={24}
        height={24}
        style={{ transform: "rotate(180deg)" }}
      />
    </div>
  );
}

const BikeDetails = ({ isOpen, closeModal, bike }: BikeDetailsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  console.log(bike);

  // Initialize loading state when bike changes
  useEffect(() => {
    if (bike.colorVariant) {
      setImagesLoaded(new Array(bike.colorVariant.length).fill(false));
      setAllImagesLoaded(false);
    }
  }, [bike.colorVariant]);

  // Check if all images are loaded
  useEffect(() => {
    if (imagesLoaded.length > 0 && imagesLoaded.every(loaded => loaded)) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleClick = () => {
    window.open(
      `https://wa.me/628112340753?text=Info%20promo%20Honda%20${bike.model}%20dong%20kak!`,
      "_blank"
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: SetStateAction<number>) =>
      setCurrentSlide(next),
    customPaging: (i: number) => (
      <div
        style={{
          marginTop: "-10px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: i === currentSlide ? "#FF0000" : "#d8d8d8", // Change color indicator as per requirement
        }}
      />
    ),
  };

  const formatKey = (key: string) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-hidden overflow-x-hidden transform rounded-2xl bg-white p-6 text-left shadow-2xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    {!allImagesLoaded && (
                      <div className="relative w-full h-64 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                          <p className="text-gray-500 text-sm">Loading images...</p>
                        </div>
                      </div>
                    )}
                    <div className={`transition-opacity duration-500 ${allImagesLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}>
                      <Slider {...settings}>
                        {bike.colorVariant?.map((variant, index) => (
                          <div
                            key={variant}
                            className="flex justify-center items-center"
                          >
                            <Image
                              src={variant}
                              alt="Color variant"
                              layout="responsive"
                              width={100}
                              height={100}
                              style={{ maxWidth: "100%", height: "auto" }}
                              loading="lazy"
                              onLoad={() => handleImageLoad(index)}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-1 overflow-x-auto hide-scrollbar">
                    <h2 className="font-semibold text-xl capitalize text-center">
                      Spesifikasi {bike.model}
                    </h2>

                    <div className="mt-3 flex-wrap gap-4">
                      <div>
                        {Object.entries(bike.spec ?? {}).map(([key, value]) => (
                          <div
                            className="flex justify-between gap-5 w-full text-right"
                            key={key}
                          >
                            <h4 className="text-grey capitalize">
                              {formatKey(key)}
                            </h4>
                            <p className="text-black-100 font-semibold">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CustomButton
                    title="Dapatkan Promo Menarik"
                    containerStyles="w-full py-[16px] rounded-full bg-primary-red"
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    rightIcon="/right-arrow.svg"
                    handleClick={handleClick}
                  />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BikeDetails;

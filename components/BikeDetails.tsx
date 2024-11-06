"use client";

import { BikeProps } from "@/types";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";

import { Fragment, SetStateAction, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

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
  console.log(bike);

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
                    <Slider {...settings}>
                      {bike.colorVariant?.map((variant) => (
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
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>

                  <div className="flex-1 flex flex-col gap-1 overflow-x-auto hide-scrollbar">
                    <h2 className="font-semibold text-xl capitalize text-center">
                      Spesifikasi {bike.model}
                    </h2>

                    <div className="mt-3 flex-wrap gap-4">
                      <div>
                        {Object.entries(bike.machine ?? {}).map(
                          ([key, value]) => (
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
                          )
                        )}
                      </div>
                    </div>
                  </div>
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

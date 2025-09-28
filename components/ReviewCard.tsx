"use client";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
  review: string;
  customerName: string;
  date: string;
  rating: number;
}

const ReviewCard = ({
  review,
  customerName,
  date,
  rating,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col px-6 py-4 justify-between items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl transition-all duration-300 ease-in-out hover:scale-105 min-h-[280px]">
      <div className="flex justify-between items-center w-full">
        <BiSolidQuoteAltLeft className="text-3xl text-gray-600" />
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-2xl ${
                index < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-gray-600 mt-4">{review}</p>
      </div>
      <div className="flex flex-col justify-between w-full">
        <p className=" text-primary-red  mt-4 font-bold text-lg">
          {customerName}
        </p>
        <div className="flex">
          <p className="text-gray-600 font-semibold">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;


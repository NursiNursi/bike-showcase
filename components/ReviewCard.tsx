"use client";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { CiStar } from "react-icons/ci";

interface ReviewCardProps {
  review: string;
  customerName: string;
  date: string;
  rating: number;
  bikeModel: string;
}

const ReviewCard = ({
  review,
  customerName,
  date,
  rating,
  bikeModel,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col px-6 py-4 justify-between items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl transition-all duration-300 ease-in-out hover:scale-105 min-h-[280px]">
      <div className="flex justify-between items-center w-full">
        <BiSolidQuoteAltLeft className="text-3xl text-gray-600" />
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <CiStar
              key={index}
              className={`text-2xl ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-gray-600 mt-4">{review}</p>
      </div>
      <div className="flex flex-col justify-between w-full">
        <p className="text-gray-600 mt-4 font-bold text-lg">{customerName}</p>
        <div className="flex">
          <p className="text-primary-red font-semibold">
            {bikeModel} - <span className="text-gray-600">{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;


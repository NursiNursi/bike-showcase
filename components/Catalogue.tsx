"use client";

import { BikeCard } from "@/components";
import { allBikes, sportBike, cubBike, evBike } from "@/constants";
import { useState } from "react";

const Catalogue = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Matic", "Sport", "Cub", "EV"];

  const getBikeList = () => {
    switch (activeTab) {
      case 0:
        return allBikes;
      case 2:
        return cubBike;
      case 1:
        return sportBike;
      case 3:
        return evBike;
      default:
        return [];
    }
  };

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container text-center lg:text-left">
        <h1 className="text-4xl font-extrabold">Katalog Motor</h1>
        <p className="text-xl text-gray-500 mb-2">
          Temukan motor yang sesuai dengan kebutuhanmu.
        </p>
      </div>

      <div className="flex justify-center items-center border-gray-300">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`px-4 py-2 text-2xl -mb-6 font-semibold cursor-pointer text-gray-600 transition-all duration-300 ease-in-out hover:text-black ${
              activeTab === index
                ? "font-extrabold text-black border-b-2 border-primary-red transform scale-105"
                : "hover:scale-102"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      <section className="transition-all duration-500 ease-in-out">
        <div className="home__cars-wrapper animate-fadeIn">
          {getBikeList().map((bike, i) => (
            <BikeCard key={`${activeTab}-${i}`} bike={bike} />
          ))}
        </div>
      </section>

      {/* <Profile /> */}
    </div>
  );
};

export default Catalogue;

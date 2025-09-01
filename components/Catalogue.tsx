"use client";

import { BikeCard } from "@/components";
import { allBikes, sportBike, cubBike, evBike } from "@/constants";
import { useState, useEffect } from "react";

const Catalogue = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

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

  const currentBikes = getBikeList();

  useEffect(() => {
    setIsLoading(true);
    setLoadedImages(new Set());

    const imagePromises = currentBikes.map((bike) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(
            (prev) => new Set(Array.from(prev).concat(bike.image))
          );
          resolve(bike.image);
        };
        img.onerror = () => resolve(bike.image);
        img.src = bike.image;
      });
    });

    Promise.all(imagePromises).then(() => {
      setTimeout(() => setIsLoading(false), 200);
    });
  }, [activeTab, currentBikes]);

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
        {isLoading ? (
          <div className="home__cars-wrapper">
            {Array.from({ length: currentBikes.length }).map((_, i) => (
              <div key={`loading-${activeTab}-${i}`} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-80 w-full mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="home__cars-wrapper animate-fadeIn">
            {currentBikes.map((bike, i) => (
              <BikeCard key={`${activeTab}-${i}`} bike={bike} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Catalogue;

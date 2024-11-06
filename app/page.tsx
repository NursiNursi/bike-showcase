"use client";

import { BikeCard, CustomFilter, Hero, SearchBar } from "@/components";
import Profile from "@/components/Profile";
import { allBikes, sportBike, cubBike, evBike } from "@/constants";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Matic", "Sport", "Cub", "EV"];

  const getBikeList = () => {
    switch (activeTab) {
      case 0: // Matic
        return allBikes;
      case 2: // Cub
        return cubBike;
      case 1: // Sport
        return sportBike;
      case 3: // EV
        return evBike;
      default:
        return [];
    }
  };

  return (
    <main className="overflow-hidden">
      <Hero />

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
              className={`px-4 py-2 text-2xl -mb-6 font-semibold cursor-pointer text-gray-600 ${
                activeTab === index
                  ? "font-extrabold text-black border-b-2 border-primary-red"
                  : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>

        <section>
          <div className="home__cars-wrapper">
            {getBikeList().map((bike, i) => (
              <BikeCard key={i} bike={bike} />
            ))}
          </div>
        </section>

        <Profile />
      </div>
    </main>
  );
}

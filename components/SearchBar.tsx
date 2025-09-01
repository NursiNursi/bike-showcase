"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import SearchBikeType from "./SearchBikeType";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [bikeModel, setBikeModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (bikeModel === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(bikeModel.toLowerCase());
  };

  const updateSearchParams = (bikeModel: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (bikeModel) {
      searchParams.set("bikeModel", bikeModel);
    } else {
      searchParams.delete("bikeModel");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item relative">
        <input
          type="text"
          id="large-input"
          className="block w-full p-4 pr-12 text-gray-900 border border-gray-300 rounded-lg bg-primary-blue-100 text-base focus:ring-blue-500 focus:border-blue-500"
          placeholder="Cari motor..."
        />
        <button
          type="button"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 rounded-md transition-colors"
          onClick={() => console.log("Search clicked")}
        >
          <IoIosSearch className="w-5 h-5 text-white" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

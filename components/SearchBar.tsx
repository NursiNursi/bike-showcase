"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
      <div className="searchbar__item">
        <SearchBikeType bikeModel={bikeModel} setBikeModel={setBikeModel} />
        <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  );
};

export default SearchBar;

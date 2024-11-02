"use client";

import { useState } from "react";
import SearchBikeType from "./SearchBikeType";

const SearchBar = () => {
  const [bikeType, setBikeType] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchBikeType bikeType={bikeType} setBikeType={setBikeType} />
      </div>
    </form>
  );
};

export default SearchBar;

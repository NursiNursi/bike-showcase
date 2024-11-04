"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";

import Image from "next/image";

import { SearchBikeModelProps } from "@/types";
import { Fragment, useState } from "react";

import { allBikes } from "@/constants";

const SearchBikeModel = ({ bikeModel, setBikeModel }: SearchBikeModelProps) => {
  const [query, setQuery] = useState("");

  const filteredBikes =
    query === ""
      ? allBikes.map((bike) => bike.model)
      : allBikes
          .filter((bike) =>
            bike.model
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          )
          .map((bike) => bike.model);

  return (
    <div className="search-manufacturer">
      <Combobox value={bikeModel} onChange={setBikeModel}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="bike logo"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(bikeModel: string) => bikeModel}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions>
              {filteredBikes.map((item) => (
                <ComboboxOption
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-red text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {item}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchBikeModel;

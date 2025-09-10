"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { allBikes, sportBike, cubBike, evBike } from "@/constants";
import { IoChevronDown } from "react-icons/io5";

const CreditSimulation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedBike, setSelectedBike] = useState<any>(null);
  const [downPayment, setDownPayment] = useState("Rp. 1 Juta - Rp. 2,5 Juta");
  const [loanTerm, setLoanTerm] = useState("12");
  const [showError, setShowError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Combine all bike arrays
  const allBikeModels = useMemo(() => {
    return [...allBikes, ...sportBike, ...cubBike, ...evBike];
  }, []);

  // Filter bikes based on search term
  const filteredBikes = useMemo(() => {
    return allBikeModels.filter((bike) =>
      bike.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allBikeModels, searchTerm]);

  // Check if searchTerm exactly matches a bike model
  useEffect(() => {
    const exactMatch = allBikeModels.find(
      (bike) => bike.model.toLowerCase() === searchTerm.toLowerCase()
    );
    if (!exactMatch) {
      setSelectedBike(null);
    }
  }, [searchTerm, allBikeModels]);

  const handleBikeSelect = (bike: any) => {
    setSelectedBike(bike);
    setSearchTerm(bike.model);
    setShowDropdown(false);
    setShowError(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    if (!selectedBike) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const message = `Halo kak! Saya tertarik cicilan motor Honda dan ingin konsultasi.%0ABerikut detailnya:%0AModel Motor: ${selectedBike.model}%0AUang Muka: ${downPayment}%0ATenor: ${loanTerm} bulan`;
    window.open(`https://wa.me/628112340753?text=${message}`, "_blank");
  };

  return (
    <div className="mt-12 padding-x padding-y max-width" id="credit-simulation">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Simulasi Kredit</h1>
        <p className="text-gray-600 mt-4">
          Hitung cicilan motor impian Anda dengan mudah dan cepat
        </p>
      </div>

      <div className="mt-8 bg-primary-blue-100 rounded-3xl p-6">
        <div className="grid grid-cols-1 gap-6">
          <div
            className="relative flex flex-col md:flex-row gap-2 md:gap-4"
            ref={dropdownRef}
          >
            <label className="text-md font-medium text-gray-700 md:w-32 md:flex-shrink-0 md:pt-3">
              Model Motor
            </label>
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder="Cari model motor..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
              />
              {showDropdown && filteredBikes.length > 0 && (
                <div
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
                  style={{ top: "100%" }}
                >
                  {filteredBikes.map((bike) => (
                    <div
                      key={bike.model}
                      onClick={() => handleBikeSelect(bike)}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-medium">{bike.model}</div>
                      <div className="text-sm text-gray-500">
                        Rp {bike.price} juta
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {showError && (
                <div className="text-red-500 text-sm pt-1">
                  Silakan pilih model motor terlebih dahulu
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <label className="text-md font-medium text-gray-700 md:w-32 md:flex-shrink-0">
              Uang Muka
            </label>
            <div className="flex-1 relative">
              <select
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red pr-10"
              >
                <option value="Rp. 1 Juta - Rp. 2,5 Juta">
                  Rp. 1 Juta - Rp. 2,5 Juta
                </option>
                <option value="Rp. 2,5 Juta - Rp. 3,5 Juta">
                  Rp. 2,5 Juta - Rp. 3,5 Juta
                </option>
                <option value="Rp. 3,5 Juta - Rp. 5 Juta">
                  Rp. 3,5 Juta - Rp. 5 Juta
                </option>
                <option value="Diatas Rp 5 Juta">Diatas Rp 5 Juta</option>
              </select>
              <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <label className="text-md font-medium text-gray-700 md:w-32 md:flex-shrink-0">
              Tenor (Bulan)
            </label>
            <div className="flex-1 relative">
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red pr-10"
              >
                <option value="12">12 Bulan</option>
                <option value="24">24 Bulan</option>
                <option value="36">36 Bulan</option>
                <option value="48">48 Bulan</option>
              </select>
              <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          {selectedBike &&
            allBikeModels.some((bike) => bike.model === searchTerm) && (
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <label className="text-sm font-medium text-gray-700 md:w-32 md:flex-shrink-0">
                  Harga Motor
                </label>
                <div className="flex-1 flex items-center h-[42px] px-3 py-2 border border-gray-300 rounded-md bg-gray-50">
                  <p className="flex text-[24px] font-extrabold">
                    <span className="self-start text-[14px] font-semibold">
                      Rp
                    </span>
                    {selectedBike.price}jt-an
                  </p>
                </div>
              </div>
            )}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleClick}
            className="bg-primary-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Konsultasi Cicilan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditSimulation;

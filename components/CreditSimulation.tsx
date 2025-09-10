"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { allBikes, sportBike, cubBike, evBike } from "@/constants";

const CreditSimulation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedBike, setSelectedBike] = useState<any>(null);
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

  const handleBikeSelect = (bike: any) => {
    setSelectedBike(bike);
    setSearchTerm(bike.model);
    setShowDropdown(false);
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

  return (
    <div className="mt-12 padding-x padding-y max-width" id="credit-simulation">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Simulasi Kredit</h1>
        <p className="text-gray-600 mt-4">
          Hitung cicilan motor impian Anda dengan mudah dan cepat
        </p>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="relative flex items-center gap-4" ref={dropdownRef}>
            <label className="text-sm font-medium text-gray-700 w-32 flex-shrink-0">
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
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700 w-32 flex-shrink-0">
              Uang Muka
            </label>
            <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red">
              <option value="12">Rp. 1 Juta - Rp. 2,5 Juta</option>
              <option value="24">Rp. 2,5 Juta - Rp. 3,5 Juta</option>
              <option value="36">Rp. 3,5 Juta - Rp. 5 Juta</option>
              <option value="48">Diatas Rp 5 Juta</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700 w-32 flex-shrink-0">
              Tenor (Bulan)
            </label>
            <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red">
              <option value="12">12 Bulan</option>
              <option value="24">24 Bulan</option>
              <option value="36">36 Bulan</option>
              <option value="48">48 Bulan</option>
            </select>
          </div>

          {selectedBike && allBikeModels.some(bike => bike.model === searchTerm) && (
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700 w-32 flex-shrink-0">
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
          <button className="bg-primary-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
            Konsultasi Cicilan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditSimulation;

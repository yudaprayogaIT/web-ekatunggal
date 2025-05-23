import React, { useState } from "react";
import { branches } from "@/data/branches";

const islands = [
  "sumatera",
  "jawa",
  "sulawesi",
  "kalimantan",
  "timur",
] as const;
type Island = (typeof islands)[number];

export default function BranchByIsland() {
  const [selectedIsland, setSelectedIsland] = useState<Island | null>(null);

  const filteredBranches = selectedIsland
    ? branches.filter((b) => b.pulau.toLowerCase() === selectedIsland)
    : [];

  return (
    <div className="mt-4 p-4 max-w-5xl mx-auto">
      <h2 className="text-center text-md md:text-2xl font-bold mb-4">
        PILIH WILAYAH UNTUK MELIHAT CABANG EKATUNGGAL
      </h2>

      {/* Pilihan Pulau */}
      <div className="flex justify-center space-x-0 md:space-x-5 border-b mb-6">
        {islands.map((island) => (
          <button
            key={island}
            onClick={() => setSelectedIsland(island)}
            className={`py-2 px-2 md:px-4 font-semibold ${
              selectedIsland === island
                ? "border-b-2 border-[var(--colorRed)] text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {island.charAt(0).toUpperCase() + island.slice(1)}
            {/* {island.toUpperCase()} */}
          </button>
        ))}
      </div>

      {/* Daftar Cabang */}
      {selectedIsland ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="border p-4 rounded shadow hover:shadow-md transition"
            >
              <h3 className="font-bold text-sm md:text-lg">{branch.name}</h3>
              <p className="text-xs md:text-sm text-gray-700">
                {branch.address}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          Pilih wilayah untuk melihat cabang.
        </p>
      )}
    </div>
  );
}

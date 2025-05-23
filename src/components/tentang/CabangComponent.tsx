// import React from "react";

// const CabangComponent = () => {
//   return (
//     <section>
//       <div>CabangComponent</div>
//     </section>
//   );
// };

// export default CabangComponent;

// "use client";

// import { useState } from "react";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // 1. Data cabang: latitude, longitude, nama, alamat, URL Google Maps
// const branches = [
//   {
//     id: 1,
//     name: "Ekatunggal Tunas Mandiri",
//     address:
//       "Jl. Pahlawan No.29A, RT.003/RW.005, Sanja, Kec. Citeureup, Kab. Bogor, Jawa Barat 16810",
//     lat: -6.4821,
//     lng: 106.813,
//     gmapsUrl: "https://www.google.com/maps/place/Ekatunggal+Tunas+Mandiri/...",
//   },
//   // ... tambah sesuai kebutuhan
// ];

// // 2. Custom icon (supaya Leaflet tahu lokasi icon-nya)
// const pinIcon = new L.Icon({
//   iconUrl: "/img/pin.png", // letakkan pin.png di public/img
//   iconSize: [32, 32],
//   iconAnchor: [16, 32], // titik bottom-center icon
// });

// // 3. Tipe untuk branch terpilih
// type Branch = (typeof branches)[number] | null;

// export default function MapSection() {
//   // state: cabang yang diklik / aktif
//   const [active, setActive] = useState<Branch>(null);

//   return (
//     <section className="relative w-[95%] h-120 mx-auto">
//       {/* 4. MapContainer */}
//       <MapContainer
//         center={[-6.2, 106.8]} // pusat peta Indonesia
//         zoom={6}
//         scrollWheelZoom
//         className="w-full h-full"
//       >
//         {/* 5. TileLayer: peta dasar OpenStreetMap */}
//         <TileLayer
//           attribution='&copy; <a href="https://osm.org">OSM</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* 6. Marker untuk setiap cabang */}
//         {branches.map((b) => (
//           <Marker
//             key={b.id}
//             position={[b.lat, b.lng]}
//             icon={pinIcon}
//             eventHandlers={{
//               click: () => setActive(b), // klik marker → simpan ke state
//             }}
//           />
//         ))}
//       </MapContainer>

//       {/* 7. Panel info (muncul kalau ada active) */}
// {active && (
//   <div className="absolute top-4 right-4 w-80 bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden">
//     {/* Header */}
//     <div className="bg-red-600 px-4 py-2 font-bold">Cabang ETM Group</div>
//     {/* Body */}
//     <div className="p-4 space-y-2 text-sm">
//       <h3 className="font-semibold">{active.name}</h3>
//       <p>{active.address}</p>
//     </div>
//     {/* Footer buttons */}
//     <div className="flex justify-between p-4 bg-gray-800">
//       {/* Buka Google Maps */}
//       <a
//         href={active.gmapsUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
//       >
//         View in Google Maps
//       </a>
//       {/* Tombol Close */}
//       <button
//         onClick={() => setActive(null)}
//         className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// )}
//     </section>
//   );
// }

"use client";

import dynamic from "next/dynamic";
import React from "react";
import BranchByIsland from "./BranchIslandComponent";

// Leaflet harus di-render di client-side
const MapWithBranches = dynamic(
  () => import("@/components/tentang/MapWithBranches"),
  {
    ssr: false,
  }
);

export default function CabangComponent() {
  return (
    <section className="my-13 md:my-15 overflow-x-hidden">
      <h1 className="text-xl md:text-3xl font-bold font-[montserrat] mt-12 md:mt-13 mb-4 uppercase text-center">
        Cabang <span className="text-[var(--colorChilli)]">Ekatunggal</span>
      </h1>
      <MapWithBranches />
      <BranchByIsland />
    </section>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
// import L from "leaflet";
// import { branches } from "@/data/branches";

// // fix default icon
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "/icons/pin.png",
//   iconUrl: "/icons/pin-2x.png",
//   shadowUrl: "/leaflet/images/marker-shadow.png",
// });

// function MapEventHandler({
//   onMapReady,
//   onMapClick,
// }: {
//   onMapReady: (map: L.Map) => void;
//   onMapClick: () => void;
// }) {
//   const map = useMap();
//   useEffect(() => {
//     onMapReady(map);
//     map.on("click", onMapClick);
//     return () => {
//       map.off("click", onMapClick);
//     };
//   }, [map, onMapReady, onMapClick]);
//   return null;
// }

// export default function MapWithBranches() {
//   const initialCenter: [number, number] = [-2.5, 118];
//   const initialZoom = 5;

//   const [map, setMap] = useState<L.Map | null>(null);
//   const [selected, setSelected] = useState<(typeof branches)[0] | null>(null);

//   // saat panel ditutup, reset view ke semula
//   useEffect(() => {
//     if (!selected && map) {
//       map.flyTo(initialCenter, initialZoom, { duration: 0.7 });
//       setTimeout(() => map.invalidateSize(), 300);
//     }
//   }, [selected, map]);

//   return (
//     // tambahkan overflow-hidden agar sidebar nggak meluber
//     <div className="relative mx-auto w-[90%] h-[500px] overflow-hidden">
//       <MapContainer
//         center={initialCenter}
//         zoom={initialZoom}
//         className="w-full h-full"
//       >
//         <MapEventHandler
//           onMapReady={setMap}
//           onMapClick={() => setSelected(null)}
//         />
//         <TileLayer
//           attribution="&copy; OpenStreetMap contributors"
//           url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {branches.map((b) => (
//           <Marker
//             key={b.id}
//             position={[b.lat, b.lng]}
//             eventHandlers={{
//               click: (e) => {
//                 e.originalEvent.stopPropagation();
//                 if (map) {
//                   map.flyTo([b.lat, b.lng], 10, { duration: 0.7 });
//                   setTimeout(() => map.invalidateSize(), 300);
//                 }
//                 setSelected(b);
//               },
//             }}
//           />
//         ))}
//       </MapContainer>

//       {/* sidebar drawer */}
//       <div
//         className={`
//           absolute top-0 right-0 h-full
//           bg-white border-l shadow-lg
//           transition-transform duration-300
//           ${selected ? "translate-x-0" : "translate-x-full"}
//         `}
//         style={{ width: "280px", zIndex: 1000 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {selected && (
//           <div className="p-4 flex flex-col h-full">
//             <div className="flex justify-between items-center mb-4">
//               <h4 className="text-lg font-bold">{selected.name}</h4>
//               <button
//                 onClick={() => setSelected(null)}
//                 className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
//               >
//                 &times;
//               </button>
//             </div>
//             <p className="text-sm mb-4">{selected.address}</p>
//             <a
//               href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-auto inline-block px-4 py-2 text-sm bg-yellow-500 rounded hover:bg-yellow-600"
//             >
//               View in Google Maps
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import type { LatLngBoundsExpression } from "leaflet";
import L from "leaflet";
import { branches } from "@/data/branches";
import Link from "next/link";

// fix default icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/icons/pin.png",
  iconUrl: "/icons/pin-2x.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

// Bounds kasar Indonesia (lat, lng)
const indonesiaBounds: LatLngBoundsExpression = [
  [-11.0, 95.0], // southwest corner
  [5, 141.0], // northeast corner
];

// Komponen internal untuk handle map & click
function MapEventHandler({
  onMapReady,
  onMapClick,
}: {
  onMapReady: (map: L.Map) => void;
  onMapClick: () => void;
}) {
  const map = useMap();
  useEffect(() => {
    onMapReady(map);
    map.on("click", onMapClick);
    return () => void map.off("click", onMapClick);
  }, [map, onMapReady, onMapClick]);
  return null;
}

export default function MapWithBranches() {
  const initialCenter: [number, number] = [-2.5, 118];
  const initialZoom = 5;

  const [map, setMap] = useState<L.Map | null>(null);
  const [selected, setSelected] = useState<(typeof branches)[0] | null>(null);

  // Reset view saat panel ditutup
  useEffect(() => {
    if (!selected && map) {
      map.flyTo(initialCenter, initialZoom, { duration: 0.7 });
      setTimeout(() => map.invalidateSize(), 300);
    }
  }, [selected, map]);

  return (
    <div className="relative mx-auto w-[90%] h-[430px] overflow-hidden">
      <MapContainer
        bounds={indonesiaBounds}
        maxBounds={indonesiaBounds}
        maxBoundsViscosity={1.0}
        center={initialCenter}
        zoom={initialZoom}
        worldCopyJump={false}
        className="w-full h-full"
      >
        <MapEventHandler
          onMapReady={setMap}
          onMapClick={() => setSelected(null)}
        />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
        />

        {branches.map((b) => (
          <Marker
            key={b.id}
            position={[b.lat, b.lng]}
            eventHandlers={{
              // click: (e) => {
              //   e.originalEvent.stopPropagation();
              //   if (map) {
              //     map.flyTo([b.lat, b.lng], 10, { duration: 0.7 });
              //     setTimeout(() => map.invalidateSize(), 300);
              //   }
              //   setSelected(b);
              // },
              click: (e) => {
                e.originalEvent.stopPropagation();
                if (map) {
                  const point = map.project([b.lat, b.lng], map.getZoom());
                  point.x += 5; // geser ke kiri, ubah sesuai lebar panel kamu
                  const offsetLatLng = map.unproject(point, map.getZoom());
                  map.flyTo(offsetLatLng, 10, { duration: 0.7 });
                  setTimeout(() => map.invalidateSize(), 300);
                }
                setSelected(b);
              },
            }}
          />
        ))}
      </MapContainer>

      {/* Sidebar drawer */}
      <div
        className={`
          absolute top-0 right-0 h-full
          bg-white border-l shadow-lg
          transition-transform duration-300 z-[999] w-120
          ${selected ? "translate-x-0" : "translate-x-full"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {selected && (
          <div className="flex flex-col h-full font-bold bg-[#3D3D3DE8]">
            <div className="flex justify-between bg-[var(--colorChilli)] items-center px-7">
              <h3 className="text-white font-[montserrat] text-2xl py-2">
                Cabang ETM Group
              </h3>

              <button
                onClick={() => setSelected(null)}
                className="text-gray-500 hover:text-gray-800 h-10 flex items-center justify-center"
              >
                <img
                  src="/icons/left.png"
                  alt="arrow"
                  className="w-auto h-17"
                />
              </button>
            </div>
            <div className="px-7 text-white h-full flex flex-col justify-start ">
              <h3 className="text-[#A3A3A3] text-xl my-3">Nama Cabang</h3>
              <h4 className="text-xl font-bold mb-1">{selected.name}</h4>
              <p className="text-sm mb-4">{selected.address}</p>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="self-end mt-auto mb-10 px-4 py-2 text-sm w-41 text-black bg-yellow-500 rounded-xl hover:bg-yellow-600"
              >
                View in Google Maps
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

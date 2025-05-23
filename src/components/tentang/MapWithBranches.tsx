// "use client";
// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
// import type { LatLngBoundsExpression } from "leaflet";
// import L from "leaflet";
// import { branches } from "@/data/branches";
// import Link from "next/link";

// // fix default icon
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "/icons/pin.png",
//   iconUrl: "/icons/pin-2x.png",
//   shadowUrl: "/leaflet/images/marker-shadow.png",
// });

// // Bounds kasar Indonesia (lat, lng)
// const indonesiaBounds: LatLngBoundsExpression = [
//   [-11.0, 95.0], // southwest corner
//   [5, 141.0], // northeast corner
// ];

// // Komponen internal untuk handle map & click
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
//     return () => void map.off("click", onMapClick);
//   }, [map, onMapReady, onMapClick]);
//   return null;
// }

// export default function MapWithBranches() {
//   const initialCenter: [number, number] = [-2.5, 118];
//   const initialZoom = 5;

//   const [map, setMap] = useState<L.Map | null>(null);
//   const [selected, setSelected] = useState<(typeof branches)[0] | null>(null);

//   // Reset view saat panel ditutup
//   useEffect(() => {
//     if (!selected && map) {
//       map.flyTo(initialCenter, initialZoom, { duration: 0.7 });
//       setTimeout(() => map.invalidateSize(), 300);
//     }
//   }, [selected, map]);

//   return (
//     <div className="relative mx-auto w-[90%] h-[430px] overflow-hidden">
//       <MapContainer
//         bounds={indonesiaBounds}
//         maxBounds={indonesiaBounds}
//         maxBoundsViscosity={1.0}
//         center={initialCenter}
//         zoom={initialZoom}
//         worldCopyJump={false}
//         className="w-full h-full"
//       >
//         <MapEventHandler
//           onMapReady={setMap}
//           onMapClick={() => setSelected(null)}
//         />

//         <TileLayer
//           // attribution="&copy; OpenStreetMap contributors"
//           url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
//           noWrap={true}
//         />

//         {branches.map((b) => (
//           <Marker
//             key={b.id}
//             position={[b.lat, b.lng]}
//             eventHandlers={{
//               click: (e) => {
//                 e.originalEvent.stopPropagation();
//                 if (map) {
//                   const point = map.project([b.lat, b.lng], map.getZoom());
//                   point.x += 5; // posisi peta saat zoom
//                   const offsetLatLng = map.unproject(point, map.getZoom());
//                   map.flyTo(offsetLatLng, 10, { duration: 0.7 });
//                   setTimeout(() => map.invalidateSize(), 300);
//                 }
//                 setSelected(b);
//               },
//             }}
//           />
//         ))}
//       </MapContainer>

//       {/* Sidebar drawer */}
//       <div
//         className={`
//           absolute top-55 md:top-0 right-0 h-[50%] w-auto md:h-full md:w-120
//           bg-white border-l shadow-lg md:border-l md:border-t-0
//           transition-transform duration-300 z-[999]
//           ${selected ? "translate-y-0" : "translate-y-full"}
//           ${selected ? "md:translate-x-0" : "md:translate-x-full"}
//         `}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {selected && (
//           <div className="flex flex-col h-full font-bold bg-[#3D3D3DE8]">
//             <div className="flex justify-between bg-[var(--colorChilli)] items-center px-7">
//               <h3 className="text-white font-[montserrat] text-md md:text-2xl py-2">
//                 Cabang ETM Group
//               </h3>

//               <button
//                 onClick={() => setSelected(null)}
//                 className="text-gray-500 hover:text-gray-800 h-10 flex items-center justify-center"
//               >
//                 <img
//                   src="/icons/left.png"
//                   alt="arrow"
//                   className="w-auto h-17"
//                 />
//               </button>
//             </div>
//             <div className="px-7 text-white h-full flex flex-col justify-start">
//               <h3 className="text-[#A3A3A3] text-sm md:text-xl my-1 md:my-3">
//                 Nama Cabang
//               </h3>
//               <h4 className="text-sm md:text-xl font-bold mb-1">
//                 {selected.name}
//               </h4>
//               <p className="text-xs md:text-sm mb-4">{selected.address}</p>
//               <Link
//                 href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="self-end mt-auto -mr-2 mb-10 px-2 md:px-4 py-2 text-xs md:text-sm w-33 md:w-41 text-black bg-yellow-500 hover:bg-yellow-600 rounded-xl "
//               >
//                 View in Google Maps
//               </Link>
//             </div>
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

// Hapus default _getIconUrl dan set ikon custom
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/icons/pin.png",
  iconUrl: "/icons/pin-2x.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

const MOBILE_BREAKPOINT = 768;

// Bounds kasar seluruh Indonesia
const indonesiaBounds: LatLngBoundsExpression = [
  [-11.0, 95.0],
  [5, 141.0],
];

// Bounds Pulau Jawa
const jawaBounds: LatLngBoundsExpression = [
  [-8.5, 105.0],
  [-6.0, 114.0],
];

// Komponen internal untuk handle map events
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
  // Initial view: pulau Jawa di mobile, seluruh Indonesia di desktop
  const [isMobile, setIsMobile] = useState(false);
  const [initialCenter, setInitialCenter] = useState<[number, number]>([
    -2.5, 118,
  ]);
  const [initialZoom, setInitialZoom] = useState<number>(5);

  useEffect(() => {
    const m = window.innerWidth < MOBILE_BREAKPOINT;
    setIsMobile(m);
    if (m) {
      setInitialCenter([-7.0, 109.5]); // tengah Pulau Jawa
      setInitialZoom(5);
    } else {
      setInitialCenter([-2.5, 118]); // seluruh Indonesia
      setInitialZoom(5);
    }
  }, []);

  const [map, setMap] = useState<L.Map | null>(null);
  const [selected, setSelected] = useState<(typeof branches)[0] | null>(null);

  // Reset view saat panel ditutup
  useEffect(() => {
    if (!selected && map) {
      map.flyTo(initialCenter, initialZoom, { duration: 0.7 });
      setTimeout(() => map.invalidateSize(), 300);
    }
  }, [selected, map, initialCenter, initialZoom]);

  // invalidateSize pada window resize
  useEffect(() => {
    if (!map) return;
    const onResize = () => map.invalidateSize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [map]);

  // Ukuran icon responsif
  const getIconSize = (): [number, number] => (isMobile ? [20, 33] : [32, 48]);

  return (
    <div className="relative mx-auto w-[90%] h-[calc(100vh-50vh)] md:h-[65vh] overflow-hidden">
      <MapContainer
        bounds={isMobile ? jawaBounds : indonesiaBounds}
        maxBounds={isMobile ? jawaBounds : indonesiaBounds}
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
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
        />

        {branches.map((b) => (
          <Marker
            key={b.id}
            position={[b.lat, b.lng]}
            icon={L.icon({
              iconUrl: "/icons/pin.png",
              iconRetinaUrl: "/icons/pin-2x.png",
              shadowUrl: "/leaflet/images/marker-shadow.png",
              iconSize: getIconSize(),
              iconAnchor: [getIconSize()[0] / 2, getIconSize()[1]],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            })}
            eventHandlers={{
              click: (e) => {
                e.originalEvent.stopPropagation();
                if (!map) return;

                const targetZoom = 10;
                if (isMobile) {
                  // MOBILE: flyTo center + zoom
                  const pointMobile = map.project(
                    [b.lat, b.lng],
                    map.getZoom()
                  );
                  pointMobile.y += 2.5;
                  const offsetLatLngMobile = map.unproject(
                    pointMobile,
                    map.getZoom()
                  );
                  // map.flyTo([b.lat, b.lng], targetZoom, { duration: 0.7 });
                  map.flyTo(offsetLatLngMobile, targetZoom, { duration: 0.7 });
                } else {
                  // DESKTOP: offset + flyTo(zoom=10)
                  const point = map.project([b.lat, b.lng], map.getZoom());
                  point.x += 5;
                  const offsetLatLng = map.unproject(point, map.getZoom());
                  map.flyTo(offsetLatLng, targetZoom, { duration: 0.7 });
                }

                setTimeout(() => map.invalidateSize(), 300);
                setSelected(b);
              },
            }}
          />
        ))}
      </MapContainer>

      {/* bottom-sheet di mobile, sidebar di desktop */}
      <div
        className={`
          absolute top-40 md:top-0 right-0 h-[60%] w-auto md:h-full md:w-120
          bg-white border-l shadow-lg md:border-l md:border-t-0
          transition-transform duration-300 z-[999]
          ${selected ? "translate-y-0" : "translate-y-full"}
          ${selected ? "md:translate-x-0" : "md:translate-x-full"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {selected && (
          <div className="flex flex-col h-full font-bold bg-[#3D3D3DE8]">
            <div className="flex justify-between bg-[var(--colorChilli)] items-center px-7">
              <h3 className="text-white font-[montserrat] text-md md:text-2xl py-2">
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
            <div className="px-7 text-white h-full flex flex-col justify-start">
              <h3 className="text-[#A3A3A3] text-sm md:text-xl my-1 md:my-3">
                Nama Cabang
              </h3>
              <h4 className="text-sm md:text-xl font-bold mb-1">
                {selected.name}
              </h4>
              <p className="text-xs md:text-sm mb-4">{selected.address}</p>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="self-end mt-auto -mr-2 mb-10 px-2 md:px-4 py-2 text-xs md:text-sm w-33 md:w-41 text-black bg-yellow-500 hover:bg-yellow-600 rounded-xl "
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

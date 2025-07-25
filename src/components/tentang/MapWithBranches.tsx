// // // src/components/tentang/MapWithBranches.tsx
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
// // import type { LatLngBoundsExpression } from "leaflet";
// // import L from "leaflet";
// // import { branches } from "@/data/branches";
// // import Link from "next/link";
// // // hook untuk media query
// // import { useMediaQuery } from "react-responsive";
// // import Image from "next/image";

// // // 1) Pindahkan konstanta ini ke luar komponen, supaya useEffect dapat
// // //    menggunakan nama konstanta yang stabil (referensinya tidak berubah tiap render).
// // const initialCenter: [number, number] = [-2.5, 118];
// // const initialZoom = 5;
// // const mobileCenter: [number, number] = [-2.5, 118];
// // const mobileZoom = 3;

// // // Batas wilayah Indonesia
// // const indonesiaBounds: LatLngBoundsExpression = [
// //   [-11.0, 95.0],
// //   [5, 141.0],
// // ];

// // // Icon untuk desktop dan mobile
// // const desktopIcon = new L.Icon({
// //   iconUrl: "/icons/pin-2x.png",
// //   iconRetinaUrl: "/icons/pin.png",
// //   shadowUrl: "/leaflet/images/marker-shadow.png",
// //   iconSize: [24, 28],
// //   iconAnchor: [12, 27],
// //   shadowSize: [40, 40],
// //   shadowAnchor: [12, 40],
// // });

// // const mobileIcon = new L.Icon({
// //   iconUrl: "/icons/pin-2x.png",
// //   iconRetinaUrl: "/icons/pin.png",
// //   shadowUrl: "/leaflet/images/marker-shadow.png",
// //   iconSize: [80, 60],
// //   iconAnchor: [41, 40],
// //   shadowSize: [30, 30],
// //   shadowAnchor: [9, 30],
// // });

// // // Komponen internal: me-*mount* map dan menangani klik.
// // function MapEventHandler({
// //   onMapReady,
// //   onMapClick,
// // }: {
// //   onMapReady: (map: L.Map) => void;
// //   onMapClick: () => void;
// // }) {
// //   const map = useMap();
// //   useEffect(() => {
// //     onMapReady(map);
// //     map.on("click", onMapClick);
// //     return () => {
// //       map.off("click", onMapClick);
// //     };
// //   }, [map, onMapReady, onMapClick]);
// //   return null;
// // }

// // export default function MapWithBranches() {
// //   const [map, setMap] = useState<L.Map | null>(null);
// //   const [selected, setSelected] = useState<(typeof branches)[0] | null>(null);

// //   // Detect apakah layar mobile (<= 768px)
// //   const isMobile = useMediaQuery({ maxWidth: 768 });

// //   // 2) Reset view ketika panel info ditutup (selected == null).
// //   //    Karena initialCenter, initialZoom, mobileCenter, mobileZoom
// //   //    sekarang sudah dipindahkan ke luar komponen, kita cukup menaruh
// //   //    [selected, map, isMobile] di dependency array.
// //   useEffect(() => {
// //     if (!selected && map) {
// //       map.flyTo(
// //         isMobile ? mobileCenter : initialCenter,
// //         isMobile ? mobileZoom : initialZoom,
// //         { duration: 0.7 }
// //       );
// //       setTimeout(() => map.invalidateSize(), 300);
// //     }
// //   }, [selected, map, isMobile]);

// //   return (
// //     <div className="relative mt-6 mx-auto w-[90%] h-[430px] overflow-hidden">
// //       <MapContainer
// //         bounds={indonesiaBounds}
// //         maxBounds={indonesiaBounds}
// //         maxBoundsViscosity={1.0}
// //         center={isMobile ? mobileCenter : initialCenter}
// //         zoom={isMobile ? mobileZoom : initialZoom}
// //         worldCopyJump={false}
// //         className="w-full h-full"
// //       >
// //         <MapEventHandler
// //           onMapReady={setMap}
// //           onMapClick={() => setSelected(null)}
// //         />

// //         <TileLayer
// //           url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
// //           noWrap={true}
// //         />

// //         {branches.map((b) => (
// //           <Marker
// //             key={b.id}
// //             position={[b.lat, b.lng]}
// //             icon={isMobile ? mobileIcon : desktopIcon}
// //             eventHandlers={{
// //               click: (e) => {
// //                 e.originalEvent.stopPropagation();
// //                 if (!map) return;

// //                 const targetZoom = 10;
// //                 if (isMobile) {
// //                   // MOBILE: sedikit geser Y agar panel tidak menutupi marker
// //                   const pointMobile = map.project(
// //                     [b.lat, b.lng],
// //                     map.getZoom()
// //                   );
// //                   pointMobile.y += 0.5;
// //                   const offsetLatLngMobile = map.unproject(
// //                     pointMobile,
// //                     map.getZoom()
// //                   );
// //                   map.flyTo(offsetLatLngMobile, targetZoom, { duration: 0.7 });
// //                 } else {
// //                   // DESKTOP: geser X agar tidak tertutup panel
// //                   const point = map.project([b.lat, b.lng], map.getZoom());
// //                   point.x += 5;
// //                   const offsetLatLng = map.unproject(point, map.getZoom());
// //                   map.flyTo(offsetLatLng, targetZoom, { duration: 0.7 });
// //                 }

// //                 setTimeout(() => map.invalidateSize(), 300);
// //                 setSelected(b);
// //               },
// //             }}
// //           />
// //         ))}
// //       </MapContainer>

// //       {/* Bottom-sheet / Sidebar */}
// //       <div
// //         className={`
// //           absolute top-55 md:top-0 right-0 h-[50%] w-auto md:h-full md:w-120
// //           bg-white border-l shadow-lg md:border-l md:border-t-0
// //           transition-transform duration-300 z-[999]
// //           ${selected ? "translate-y-0" : "translate-y-full"}
// //           ${selected ? "md:translate-x-0" : "md:translate-x-full"}
// //         `}
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         {selected && (
// //           <div className="flex flex-col h-full font-bold bg-[#3D3D3DE8]">
// //             <div className="flex justify-between bg-[var(--colorChilli)] items-center px-7">
// //               <h3 className="text-white font-[montserrat] text-md md:text-2xl py-2">
// //                 Cabang ETM Group
// //               </h3>
// //               <button
// //                 onClick={() => setSelected(null)}
// //                 className="text-gray-500 hover:text-gray-800 h-10 flex items-center justify-center"
// //               >
// //                 <Image
// //                   src="/icons/left.png"
// //                   alt="arrow"
// //                   className="w-auto h-17"
// //                   width={60}
// //                   height={60}
// //                 />
// //               </button>
// //             </div>
// //             <div className="px-7 text-white h-full flex flex-col justify-start">
// //               <h3 className="text-[#A3A3A3] text-sm md:text-xl my-1 md:my-3">
// //                 Nama Cabang
// //               </h3>
// //               <h4 className="text-sm md:text-xl font-bold mb-1">
// //                 {selected.name}
// //               </h4>
// //               <p className="text-xs md:text-sm mb-4">{selected.address}</p>
// //               <Link
// //                 href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="self-end mt-auto -mr-2 mb-10 px-2 md:px-4 py-2 text-xs md:text-sm w-33 md:w-41 text-black bg-yellow-500 hover:bg-yellow-600 rounded-xl "
// //               >
// //                 View in Google Maps
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // src/components/tentang/MapWithBranches.tsx
// "use client";

// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
// import type { LatLngBoundsExpression } from "leaflet";
// import L from "leaflet";
// import { branches } from "@/data/branches";
// import Link from "next/link";
// import { useMediaQuery } from "react-responsive";
// import Image from "next/image";

// // Konstanta center dan bounds
// const initialCenter: [number, number] = [-2.5, 118];
// const initialZoom = 5;
// const mobileCenter: [number, number] = [-2.5, 118];
// const mobileZoom = 3;
// const indonesiaBounds: LatLngBoundsExpression = [[-11.0, 95.0], [5, 141.0]];

// // Ikon marker
// const desktopIcon = new L.Icon({
//   iconUrl: "/icons/pin-3x.png",
//   iconRetinaUrl: "/icons/pin-3x.png",
//   shadowUrl: "/leaflet/images/marker-shadow.png",
//   iconSize: [24, 28],
//   iconAnchor: [12, 27],
//   shadowSize: [40, 40],
//   shadowAnchor: [12, 40],
// });
// const mobileIcon = new L.Icon({
//   iconUrl: "/icons/pin-2x.png",
//   iconRetinaUrl: "/icons/pin.png",
//   shadowUrl: "/leaflet/images/marker-shadow.png",
//   iconSize: [80, 60],
//   iconAnchor: [41, 40],
//   shadowSize: [30, 30],
//   shadowAnchor: [9, 30],
// });

// // Event handler untuk map (zoom manual & click)
// function MapEventHandler({ onMapReady, onMapClick }: { onMapReady: (map: L.Map) => void; onMapClick: () => void; }) {
//   const map = useMap();
//   useEffect(() => {
//     onMapReady(map);
//     const container = map.getContainer();

//     function handleWheel(e: WheelEvent) {
//       if (e.ctrlKey) {
//         e.preventDefault();
//         e.stopPropagation();
//         if (e.deltaY < 0) {
//           map.zoomIn();
//         } else {
//           map.zoomOut();
//         }
//       }
//     }

//     container.addEventListener('wheel', handleWheel, { passive: false });
//     map.on('click', onMapClick);

//     return () => {
//       container.removeEventListener('wheel', handleWheel);
//       map.off('click', onMapClick);
//     };
//   }, [map, onMapReady, onMapClick]);
//   return null;
// }

// export default function MapWithBranches() {
//   const [map, setMap] = useState<L.Map | null>(null);
//   const [selected, setSelected] = useState<typeof branches[0] | null>(null);
//   const isMobile = useMediaQuery({ maxWidth: 768 });

//   // Reset view ketika detail ditutup
//   useEffect(() => {
//     if (!selected && map) {
//       map.flyTo(
//         isMobile ? mobileCenter : initialCenter,
//         isMobile ? mobileZoom : initialZoom,
//         { duration: 0.7 }
//       );
//       setTimeout(() => map.invalidateSize(), 300);
//     }
//   }, [selected, map, isMobile]);

//   return (
//     <div className="map-wrapper relative mt-6 mx-auto w-[90%] h-[430px] overflow-hidden rounded-lg">
//       {/* Overlay instruksi */}
//       <div className="overlay z-999 hidden absolute inset-0 md:flex items-center justify-center bg-[#2424246e] text-white text-lg font-bold opacity-0 transition-opacity duration-300 pointer-events-none">
//         Gunakan Ctrl + Scroll untuk memperbesar atau memperkecil peta
//       </div>

//       <MapContainer
//         bounds={indonesiaBounds}
//         maxBounds={indonesiaBounds}
//         maxBoundsViscosity={1.0}
//         center={isMobile ? mobileCenter : initialCenter}
//         zoom={isMobile ? mobileZoom : initialZoom}
//         scrollWheelZoom={false}
//         worldCopyJump={false}
//         className="w-full h-full"
//       >
//         <MapEventHandler
//           onMapReady={setMap}
//           onMapClick={() => setSelected(null)}
//         />
//         <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" noWrap />
//         {branches.map((b) => (
//           <Marker
//             key={b.id}
//             position={[b.lat, b.lng]}
//             icon={isMobile ? mobileIcon : desktopIcon}
//             eventHandlers={{
//               click: (e) => {
//                 e.originalEvent.stopPropagation();
//                 if (!map) return;

//                 const targetZoom = 10;
//                 const point = map.project([b.lat, b.lng], map.getZoom());
//                 if (isMobile) {
//                   point.y += 0.5;
//                 } else {
//                   point.x += 5;
//                 }
//                 map.flyTo(map.unproject(point, map.getZoom()), targetZoom, { duration: 0.7 });
//                 setTimeout(() => map.invalidateSize(), 300);
//                 setSelected(b);
//               },
//             }}
//           />
//         ))}
//       </MapContainer>

//       {/* Sidebar detail */}
//       <div
//         className={`absolute top-55 md:top-0 right-0 h-[50%] w-auto md:h-full md:w-120 bg-white border-l shadow-lg transition-transform duration-300 z-[999] ${
//           selected ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-x-full'
//         }`}
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
//                 <Image src="/icons/left.png" alt="arrow" className="w-auto h-17" width={60} height={60} />
//               </button>
//             </div>
//             <div className="px-7 text-white h-full flex flex-col justify-start">
//               <h3 className="text-[#A3A3A3] text-sm md:text-xl my-1 md:my-3">
//                 Nama Cabang
//               </h3>
//               <h4 className="text-sm md:text-xl font-bold mb-1">{selected.name}</h4>
//               <p className="text-xs md:text-sm mb-4">{selected.address}</p>
//               <Link
//                 href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="self-end mt-auto -mr-2 mb-10 px-2 md:px-4 py-2 text-xs md:text-sm w-33 md:w-41 text-black bg-yellow-500 hover:bg-yellow-600 rounded-xl"
//               >
//                 View in Google Maps
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* CSS overlay tampil saat hover */}
//       <style jsx>{`
//         .map-wrapper:hover .overlay {
//           opacity: 1;
//         }
//       `}</style>
//     </div>
//   );
// }

// // src/components/tentang/MapWithBranches.tsx
// "use client";

// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
// import type { LatLngBoundsExpression } from "leaflet";
// import L from "leaflet";
// import { branches } from "@/data/branches";
// import Link from "next/link";
// // hook untuk media query
// import { useMediaQuery } from "react-responsive";
// import Image from "next/image";

// // 1) Pindahkan konstanta ini ke luar komponen, supaya useEffect dapat
// //    menggunakan nama konstanta yang stabil (referensinya tidak berubah tiap render).
// const initialCenter: [number, number] = [-2.5, 118];
// const initialZoom = 5;
// const mobileCenter: [number, number] = [-2.5, 118];
// const mobileZoom = 3;

// // Batas wilayah Indonesia
// const indonesiaBounds: LatLngBoundsExpression = [
//   [-11.0, 95.0],
//   [5, 141.0],
// ];

// // Icon untuk desktop dan mobile
// const desktopIcon = new L.Icon({
//   iconUrl: "/icons/pin-2x.png",
//   iconRetinaUrl: "/icons/pin.png",
//   shadowUrl: "/leaflet/images/marker-shadow.png",
//   iconSize: [24, 28],
//   iconAnchor: [12, 27],
//   shadowSize: [40, 40],
//   shadowAnchor: [12, 40],
// });

// const mobileIcon = new L.Icon({
//   iconUrl: "/icons/pin-2x.png",
//   iconRetinaUrl: "/icons/pin.png",
//   shadowUrl: "/leaflet/images/marker-shadow.png",
//   iconSize: [80, 60],
//   iconAnchor: [41, 40],
//   shadowSize: [30, 30],
//   shadowAnchor: [9, 30],
// });

// // Komponen internal: me-*mount* map dan menangani klik.
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
//   const [map, setMap] = useState<L.Map | null>(null);
//   const [selected, setSelected] = useState<(typeof branches)[0] | null>(null);

//   // Detect apakah layar mobile (<= 768px)
//   const isMobile = useMediaQuery({ maxWidth: 768 });

//   // 2) Reset view ketika panel info ditutup (selected == null).
//   //    Karena initialCenter, initialZoom, mobileCenter, mobileZoom
//   //    sekarang sudah dipindahkan ke luar komponen, kita cukup menaruh
//   //    [selected, map, isMobile] di dependency array.
//   useEffect(() => {
//     if (!selected && map) {
//       map.flyTo(
//         isMobile ? mobileCenter : initialCenter,
//         isMobile ? mobileZoom : initialZoom,
//         { duration: 0.7 }
//       );
//       setTimeout(() => map.invalidateSize(), 300);
//     }
//   }, [selected, map, isMobile]);

//   return (
//     <div className="relative mt-6 mx-auto w-[90%] h-[430px] overflow-hidden">
//       <MapContainer
//         bounds={indonesiaBounds}
//         maxBounds={indonesiaBounds}
//         maxBoundsViscosity={1.0}
//         center={isMobile ? mobileCenter : initialCenter}
//         zoom={isMobile ? mobileZoom : initialZoom}
//         worldCopyJump={false}
//         className="w-full h-full"
//       >
//         <MapEventHandler
//           onMapReady={setMap}
//           onMapClick={() => setSelected(null)}
//         />

//         <TileLayer
//           url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
//           noWrap={true}
//         />

//         {branches.map((b) => (
//           <Marker
//             key={b.id}
//             position={[b.lat, b.lng]}
//             icon={isMobile ? mobileIcon : desktopIcon}
//             eventHandlers={{
//               click: (e) => {
//                 e.originalEvent.stopPropagation();
//                 if (!map) return;

//                 const targetZoom = 10;
//                 if (isMobile) {
//                   // MOBILE: sedikit geser Y agar panel tidak menutupi marker
//                   const pointMobile = map.project(
//                     [b.lat, b.lng],
//                     map.getZoom()
//                   );
//                   pointMobile.y += 0.5;
//                   const offsetLatLngMobile = map.unproject(
//                     pointMobile,
//                     map.getZoom()
//                   );
//                   map.flyTo(offsetLatLngMobile, targetZoom, { duration: 0.7 });
//                 } else {
//                   // DESKTOP: geser X agar tidak tertutup panel
//                   const point = map.project([b.lat, b.lng], map.getZoom());
//                   point.x += 5;
//                   const offsetLatLng = map.unproject(point, map.getZoom());
//                   map.flyTo(offsetLatLng, targetZoom, { duration: 0.7 });
//                 }

//                 setTimeout(() => map.invalidateSize(), 300);
//                 setSelected(b);
//               },
//             }}
//           />
//         ))}
//       </MapContainer>

//       {/* Bottom-sheet / Sidebar */}
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
//                 <Image
//                   src="/icons/left.png"
//                   alt="arrow"
//                   className="w-auto h-17"
//                   width={60}
//                   height={60}
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

// src/components/tentang/MapWithBranches.tsx
"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import type { LatLngBoundsExpression } from "leaflet";
import L from "leaflet";
import { branches } from "@/data/branches";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

// Konstanta center dan bounds
const initialCenter: [number, number] = [-2.5, 118];
const initialZoom = 5;
const mobileCenter: [number, number] = [-2.5, 118];
const mobileZoom = 3;
const indonesiaBounds: LatLngBoundsExpression = [[-11.0, 95.0], [5, 141.0]];

// Ikon marker
const desktopIcon = new L.Icon({
  iconUrl: "/icons/pin-3x.png",
  iconRetinaUrl: "/icons/pin-3x.png",
  // shadowUrl: "/leaflet/images/marker-shadow.png",
  iconSize: [24, 28],
  iconAnchor: [12, 25],
  shadowSize: [40, 40],
  shadowAnchor: [12, 40],
});
const mobileIcon = new L.Icon({
  iconUrl: "/icons/pin-2x.png",
  iconRetinaUrl: "/icons/pin.png",
  // shadowUrl: "/leaflet/images/marker-shadow.png",
  iconSize: [20, 25],
  iconAnchor: [10, 20],
  shadowSize: [30, 30],
  shadowAnchor: [9, 30],
});

// Event handler untuk map (zoom manual & click)
function MapEventHandler({ onMapReady, onMapClick, onWheelStart }: { onMapReady: (map: L.Map) => void; onMapClick: () => void; onWheelStart: (isCtrl: boolean) => void; }) {
  const map = useMap();
  useEffect(() => {
    onMapReady(map);
    const container = map.getContainer();

let hideTimer: ReturnType<typeof setTimeout>;

    function handleWheel(e: WheelEvent) {
      // Windows: Ctrl, macOS: Command
      const isModifier = e.ctrlKey || e.metaKey;
      if (isModifier) {
        // Jika Ctrl ditekan → zoom peta dan jangan scroll halaman
        e.preventDefault();
        e.stopPropagation();

        // Jangan munculkan overlay lagi, langsung zoom
        clearTimeout(hideTimer);
        if (e.deltaY < 0) map.zoomIn();
        else map.zoomOut();
      } else {
        // Scroll biasa di peta → biarkan scroll halaman
        // tapi beritahu parent buat munculkan overlay
        onWheelStart(false);
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => onWheelStart(false), 1500);
        return; // jangan blok event
      }
      // Setelah zoom (Ctrl case), sembunyikan overlay setelah 1.5s
      onWheelStart(true);
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => onWheelStart(true), 1500);
    }

    container.addEventListener("wheel", handleWheel, { passive: false });
    map.on("click", onMapClick);
    return () => {
      container.removeEventListener("wheel", handleWheel);
      map.off("click", onMapClick);
      clearTimeout(hideTimer);
    };
  }, [map, onMapReady, onMapClick, onWheelStart]);

  return null;
}

export default function MapWithBranches() {
  const [map, setMap] = useState<L.Map | null>(null);
  const [selected, setSelected] = useState<typeof branches[0] | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayMode, setOverlayMode] = useState<"hint"|"zoom">("hint");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Reset view ketika detail ditutup
  useEffect(() => {
    if (!selected && map) {
      map.flyTo(
        isMobile ? mobileCenter : initialCenter,
        isMobile ? mobileZoom : initialZoom,
        { duration: 0.7 }
      );
      setTimeout(() => map.invalidateSize(), 300);
    }
  }, [selected, map, isMobile]);

  // callback untuk MapEventHandler
function handleWheelStart(isCtrl: boolean) {
    setOverlayMode(isCtrl ? "zoom" : "hint");
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 2000);
  }

  return (
    <div className="map-wrapper relative mt-6 mx-auto w-[90%] h-[430px] overflow-hidden rounded-lg">
      {/* Overlay instruksi */}
      <div className={`absolute z-999 inset-0 flex items-center justify-center
          bg-[#2424246e] text-white text-lg font-bold
          transition-opacity duration-300 pointer-events-none
          ${showOverlay ? "opacity-100" : "opacity-0"}`}>
        {overlayMode === "hint"
          ? "Tekan Ctrl + scroll untuk memperbesar/memperkecil peta"
          : "Tekan Ctrl + scroll untuk memperbesar/memperkecil peta"}
      </div>

      <MapContainer
        bounds={indonesiaBounds}
        maxBounds={indonesiaBounds}
        maxBoundsViscosity={1.0}
        center={isMobile ? mobileCenter : initialCenter}
        zoom={isMobile ? mobileZoom : initialZoom}
        scrollWheelZoom={false}
        worldCopyJump={false}
        className="w-full h-full"
      >
        <MapEventHandler
          onMapReady={setMap}
          onMapClick={() => setSelected(null)}
          onWheelStart={handleWheelStart}
        />
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" noWrap />
        {branches.map((b) => (
          <Marker
            key={b.id}
            position={[b.lat, b.lng]}
            icon={isMobile ? mobileIcon : desktopIcon}
            eventHandlers={{
              click: (e) => {
                e.originalEvent.stopPropagation();
                if (!map) return;

                const targetZoom = 10;
                const point = map.project([b.lat, b.lng], map.getZoom());
                if (isMobile) {
                  point.y += 0.5;
                } else {
                  point.x += 5;
                }
                map.flyTo(map.unproject(point, map.getZoom()), targetZoom, { duration: 0.7 });
                setTimeout(() => map.invalidateSize(), 300);
                setSelected(b);
              },
            }}
          />
        ))}
      </MapContainer>

      {/* Sidebar detail */}
      <div
        className={`absolute top-55 md:top-0 right-0 h-[50%] w-auto md:h-full md:w-120 bg-white border-l shadow-lg transition-transform duration-300 z-[999] ${
          selected ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-x-full'
        }`}
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
                <Image src="/icons/left.png" alt="arrow" className="w-auto h-17" width={60} height={60} />
              </button>
            </div>
            <div className="px-7 text-white h-full flex flex-col justify-start">
              <h3 className="text-[#A3A3A3] text-sm md:text-xl my-1 md:my-3">
                Nama Cabang
              </h3>
              <h4 className="text-sm md:text-xl font-bold mb-1">{selected.name}</h4>
              <p className="text-xs md:text-sm mb-4">{selected.address}</p>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="self-end mt-auto -mr-2 mb-10 px-2 md:px-4 py-2 text-xs md:text-sm w-33 md:w-41 text-black bg-yellow-500 hover:bg-yellow-600 rounded-xl"
              >
                View in Google Maps
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* CSS overlay tampil saat hover */}
      <style jsx>{`
        .map-wrapper:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
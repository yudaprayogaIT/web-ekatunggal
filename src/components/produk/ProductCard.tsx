"use client";

import { useRef, useState } from "react";
import { buildImageUrl } from "@/utils/images";

interface Produk {
  _id: string;
  nama: string;
  deskripsi: string;
  images: string[]; // array semua lampiran (file_url) + p.image
}

interface ProductCardProps {
  prod: Produk;
}

export default function ProductCard({ prod }: ProductCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  // Konversi setiap rawPath jadi URL lengkap
  const urls = prod.images.map((path) => buildImageUrl(path));

  // Fungsi untuk scroll thumbnail bila lebih dari 3
  const scrollThumbnails = (direction: "left" | "right") => {
    if (!thumbContainerRef.current) return;
    const container = thumbContainerRef.current;
    const scrollAmount = 100; // sesuaikan jarak scroll-nya
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
      {/* 1) Gambar besar */}
      <div className="relative w-full h-96 bg-gray-100">
        <img
          src={urls[activeIndex]}
          alt={prod.nama}
          className="object-cover w-full h-full"
        />
      </div>

      {/* 2) Thumbnail + tombol scroll */}
      <div className="relative mt-4 px-4">
        {urls.length > 3 && (
          <button
            onClick={() => scrollThumbnails("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 shadow hover:bg-opacity-100 transition"
            aria-label="Scroll kiri"
          >
            <img
              src="/img/produk/arrow-left.png"
              alt="←"
              width={20}
              height={20}
            />
          </button>
        )}

        <div
          ref={thumbContainerRef}
          className="flex space-x-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pr-4"
        >
          {urls.map((url, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                snap-start flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border
                ${
                  idx === activeIndex
                    ? "border-blue-600 ring-2 ring-blue-200"
                    : "border-gray-200"
                }
                hover:ring-2 hover:ring-blue-100 transition
              `}
              aria-label={`Tampilkan gambar ${idx + 1}`}
            >
              <img
                src={url}
                alt={`${prod.nama} preview ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {urls.length > 3 && (
          <button
            onClick={() => scrollThumbnails("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 shadow hover:bg-opacity-100 transition"
            aria-label="Scroll kanan"
          >
            <img
              src="/img/produk/arrow-right.png"
              alt="→"
              width={20}
              height={20}
            />
          </button>
        )}
      </div>

      {/* 3) Nama & deskripsi */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{prod.nama}</h3>
        <p className="mt-2 text-gray-600 text-sm">{prod.deskripsi}</p>
      </div>
    </div>
  );
}

// "use client";

// import { useRef, useState } from "react";
// import Image from "next/image";
// import { buildImageUrl } from "@/utils/images";

// interface Produk {
//   _id: string;
//   nama: string;
//   deskripsi: string;
//   images: string[]; // array semua lampiran (file_url) atau p.image
// }

// interface ProductCardProps {
//   prod: Produk;
// }

// export default function ProductCard({ prod }: ProductCardProps) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const thumbContainerRef = useRef<HTMLDivElement>(null);

//   // Konversi setiap rawPath jadi URL lengkap (atau placeholder)
//   const urls =
//     prod.images.length > 0
//       ? prod.images.map((path) => buildImageUrl(path))
//       : ["/img/produk/placeholder.png"];

//   // Fungsi scroll thumb
//   const scrollThumbnails = (direction: "left" | "right") => {
//     if (!thumbContainerRef.current) return;
//     const container = thumbContainerRef.current;
//     const scrollAmount = 100;
//     if (direction === "left") {
//       container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
//       {/* 1) Gambar besar */}
//       <div className="relative w-full h-64 bg-gray-100">
//         <Image
//           src={urls[activeIndex]}
//           alt={`${prod.nama} (${activeIndex + 1})`}
//           fill
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* 2) Thumbnail + tombol scroll */}
//       <div className="relative mt-4 px-4">
//         {urls.length > 3 && (
//           <button
//             onClick={() => scrollThumbnails("left")}
//             className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-1 shadow hover:bg-opacity-100 transition"
//             aria-label="Scroll kiri"
//           >
//             <Image
//               src="/img/produk/arrow-left.png"
//               alt="←"
//               width={20}
//               height={20}
//             />
//           </button>
//         )}

//         <div
//           ref={thumbContainerRef}
//           className="flex space-x-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pr-4"
//         >
//           {urls.map((url, idx) => (
//             <button
//               key={idx}
//               onClick={() => setActiveIndex(idx)}
//               className={`
//                 snap-start flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border
//                 ${
//                   idx === activeIndex
//                     ? "border-blue-600 ring-2 ring-blue-200"
//                     : "border-gray-200"
//                 }
//                 hover:ring-2 hover:ring-blue-100 transition
//               `}
//               aria-label={`Tampilkan gambar ${idx + 1}`}
//             >
//               <Image
//                 src={url}
//                 alt={`${prod.nama} preview ${idx + 1}`}
//                 width={80}
//                 height={80}
//                 className="object-cover w-full h-full"
//               />
//             </button>
//           ))}
//         </div>

//         {urls.length > 3 && (
//           <button
//             onClick={() => scrollThumbnails("right")}
//             className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-1 shadow hover:bg-opacity-100 transition"
//             aria-label="Scroll kanan"
//           >
//             <Image
//               src="/img/produk/arrow-right.png"
//               alt="→"
//               width={20}
//               height={20}
//             />
//           </button>
//         )}
//       </div>

//       {/* 3) Nama & deskripsi */}
//       <div className="p-6">
//         <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 truncate">
//           {prod.nama}
//         </h3>
//         <p className="mt-2 text-gray-600 text-sm line-clamp-3">
//           {prod.deskripsi}
//         </p>
//       </div>
//     </div>
//   );
// }

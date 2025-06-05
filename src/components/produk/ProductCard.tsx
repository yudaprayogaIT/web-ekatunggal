// "use client";

// import { useRef, useState } from "react";
// import Image from "next/image";
// import Produk from "@/app/hooks/ProductHook";

// export default function ProductCard(data: any) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const thumbContainerRef = useRef<HTMLDivElement>(null);

//   // 3) Fungsi scroll thumbnails jika lebih dari 3
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
//     <>
//       <div className="flex flex-row overflow-hidden hover:shadow-2xl rounded-3xl transition-shadow duration-300">
//         {/* <div className="flex flex-row border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"> */}
//         <div className="flex flex-2 flex-col">
//           {/* 1) Main Image */}
//           <div className="relative w-full h-80">
//             <Image
//               src={`https://api-ekatalog.ekatunggal.com/public/files/${data.data.image}`}
//               alt={"productimage"}
//               fill
//               style={{ objectFit: "fill" }}
//               className="rounded-3xl"
//             />
//           </div>

//           {/* 2) Thumbnail + tombol scroll */}
//           {/* <div className="relative mx-15 mt-4 px-10">
//           {finalUrls.length > 3 && (
//             <button
//               onClick={() => scrollThumbnails("left")}
//               className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-[#d9d9d98f] h-10 w-10 rounded-full hover:bg-[#d9d9d9] transition"
//               aria-label="Scroll kiri"
//             >
//               <Image
//                 src="/img/produk/arrow-left.png"
//                 alt="←"
//                 width={40}
//                 height={40}
//               />
//             </button>
//           )}

//           <div
//             ref={thumbContainerRef}
//             className="flex justify-between gap-x-4 max-w-140 space-x-8 overflow-x-hidden mb-2 snap-x snap-mandatory scrollbar-none px-4 pb-2"
//           >
//             {finalUrls.map((url, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`
//                 snap-center flex-shrink-0 w-35 h-20 rounded-md overflow-hidden border
//                 ${
//                   idx === activeIndex
//                     ? "border-blue-600 ring-2 ring-blue-200"
//                     : "border-gray-200"
//                 } hover:brightness-110 transition
//               `}
//                 aria-label={`Tampilkan gambar ${idx + 1}`}
//               >
//                 <Image
//                   src={url}
//                   alt={`${prod.nama} preview ${idx + 1}`}
//                   width={100}
//                   height={100}
//                   className="object-fill"
//                 />
//               </button>
//             ))}
//           </div>

//           {finalUrls.length > 3 && (
//             <button
//               onClick={() => scrollThumbnails("right")}
//               className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-[#d9d9d98f] h-10 w-10 rounded-full hover:bg-[#d9d9d9] transition"
//               aria-label="Scroll kanan"
//             >
//               <Image
//                 src="/img/produk/arrow-right.png"
//                 alt="→"
//                 width={40}
//                 height={40}
//               />
//             </button>
//           )}
//         </div> */}
//         </div>
//         {/* 3) Nama & Deskripsi */}
//         {/* <div className="p-4 flex flex-1 flex-col justify-between font-[montserrat]">
//         <div className="relative w-full h-40 my-auto px-4">
//           <h3 className="text-xl font-bold capitalize text-gray-800">
//             {prod.nama}
//           </h3>
//           <h5 className="text-md font-medium text-gray-800">Detail Produk</h5>

//           <div className="absolute left-4 top-13 h-[0.2] w-84 bg-gray-300" />
//           <p className="mt-1 text-gray-600 text-sm line-clamp-4">
//             {prod.deskripsi}
//           </p>
//         </div>
//       </div> */}
//       </div>
//     </>
//   );
// }

// src/components/produk/ProductCard.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { buildImageUrl } from "@/utils/images";
import { FileHook, IFile } from "@/app/hooks/FileHook";

// Ubah interface supaya image: string (bukan string[])
interface ProductData {
  image: string; // <-- satu string saja
  nama: string;
  deskripsi: string;
  // …field lain jika ada…
}

interface ProductCardProps {
  data: ProductData;
}

export default function ProductCard({ data }: ProductCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [files, setFile] = useState<IFile[]>([]);
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  // Karena sekarang data.image adalah string (bukan array), maka kita bikin array satu elemen:
  const urls: string[] = [buildImageUrl(data.image)].filter((u) => !!u);
  const finalUrls: string[] = urls.length > 0 ? urls : ["/placeholder.png"];

  const scrollThumbnails = (direction: "left" | "right") => {
    if (!thumbContainerRef.current) return;
    const container = thumbContainerRef.current;
    const scrollAmount = 100;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    getFile();
  }, [data]);

  const getFile = async () => {
    try {
      const files = await FileHook({
        limit: 0,
        filters: [
          ["attached_to_doctype", "=", "Produk Company Profile"],
          ["attached_to_name", "=", `${data.nama}`],
        ],
      });
      setFile(files);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row mb-10 border border-gray-200 overflow-hidden hover:shadow-2xl rounded-3xl transition-shadow duration-300">
      <div className="flex flex-2 flex-col">
        {/* 1) Main Image */}
        <div className="relative w-full h-80">
          {files[activeIndex]?.file_url && (
            <Image
              src={`https://api-ekatalog.ekatunggal.com${files[activeIndex].file_url}`}
              alt={`Product image ${activeIndex + 1}`}
              fill
              style={{ objectFit: "fill" }}
              className="rounded-3xl"
            />
          )}
        </div>

        {/* 2) Thumbnail + tombol scroll */}
        <div className="relative mx-15 mt-4 px-10">
          {files.length > 3 && (
            <button
              onClick={() => scrollThumbnails("left")}
              className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-[#d9d9d98f] h-10 w-10 rounded-full hover:bg-[#d9d9d9] transition"
              aria-label="Scroll kiri"
            >
              <Image
                src="/img/produk/arrow-left.png"
                alt="←"
                width={40}
                height={40}
              />
            </button>
          )}

          <div
            ref={thumbContainerRef}
            className="flex justify-between gap-x-4 max-w-140 space-x-8 overflow-x-hidden mb-2 snap-x snap-mandatory scrollbar-none px-4 pb-2"
          >
            {files.map((url: IFile, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`
                  snap-center flex-shrink-0 w-35 h-20 rounded-md overflow-hidden border
                  ${
                    idx === activeIndex
                      ? "border-blue-600 ring-2 ring-blue-200"
                      : "border-gray-200"
                  } hover:brightness-110 transition
                `}
                aria-label={`Tampilkan gambar ${idx + 1}`}
              >
                <Image
                  src={`https://api-ekatalog.ekatunggal.com${files[idx].file_url}`}
                  alt={`${data.nama} preview ${idx + 1}`}
                  width={100}
                  height={100}
                  className="w-full "
                />
              </button>
            ))}
          </div>

          {files.length > 3 && (
            <button
              onClick={() => scrollThumbnails("right")}
              className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-[#d9d9d98f] h-10 w-10 rounded-full hover:bg-[#d9d9d9] transition"
              aria-label="Scroll kanan"
            >
              <Image
                src="/img/produk/arrow-right.png"
                alt="→"
                width={40}
                height={40}
              />
            </button>
          )}
        </div>
      </div>

      {/* 3) Nama & Deskripsi */}
      <div className="p-4 flex flex-1 flex-col justify-between font-[montserrat]">
        <div className="relative w-full h-40 my-auto px-4">
          <h3 className="text-xl font-bold capitalize text-gray-800">
            {data.nama}
          </h3>
          <h5 className="text-md font-medium text-gray-800">Detail</h5>

          <div className="absolute left-4 top-13 h-[0.2] w-84 bg-gray-300" />
          <p className="mt-1.5 text-gray-600 text-sm line-clamp-4">
            {data.deskripsi}
          </p>
        </div>
      </div>
    </div>
  );
}

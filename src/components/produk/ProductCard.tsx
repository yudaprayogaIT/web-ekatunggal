"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FileHook, IFile } from "@/app/hooks/FileHook";
import { motion, AnimatePresence } from "framer-motion";

interface ProductData {
  image: string;
  nama: string;
  deskripsi: string;
}

interface ProductCardProps {
  data: ProductData;
}

export default function ProductCard({ data }: ProductCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [files, setFile] = useState<IFile[]>([]);
  const thumbContainerRef = useRef<HTMLDivElement>(null);

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

  // 1) Ambil daftar file (thumbnails) ketika `data.nama` berubah
  useEffect(() => {
    getFile();
  }, [data.nama]);

  const getFile = async () => {
    try {
      const files = await FileHook({
        limit: 0,
        filters: [
          ["attached_to_doctype", "=", "Produk Company Profile"],
          ["attached_to_name", "=", data.nama],
        ],
      });
      setFile(files);
      setActiveIndex(0); // reset ke indeks 0
    } catch (error) {
      console.log(error);
    }
  };

  // 2) Otomatis berpindah thumbnail setiap beberapa detik
  useEffect(() => {
    if (files.length <= 1) return;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % files.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [files]);

  // 3) Scroll manual pada container thumb saja
  useEffect(() => {
    if (!thumbContainerRef.current) return;

    const container = thumbContainerRef.current;
    const thumbs = container.children;
    const activeThumb = thumbs[activeIndex] as HTMLElement | undefined;

    if (!activeThumb) return;

    const thumbLeft = activeThumb.offsetLeft;
    const thumbWidth = activeThumb.clientWidth;
    const containerWidth = container.clientWidth;

    // Target: pusatkan thumbnail di dalam container
    const targetScrollLeft = thumbLeft - (containerWidth - thumbWidth) / 2;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <div className="border md:border-0 border-gray-100 overflow-hidden hover:shadow-2xl rounded-3xl transition-shadow duration-300">
      <div className="flex flex-1 flex-row">
        {/* 1) Main Image dengan Framer Motion */}
        <div className="relative w-150 h-40 md:h-150 2xl:h-90 overflow-hidden">
          <AnimatePresence mode="wait">
            {files[activeIndex]?.file_url && (
              <motion.div
                key={activeIndex}
                initial={{ x: 50, opacity: 0 }} // mulai 50px di bawah & transparan
                animate={{ x: 0, opacity: 1 }} // ke posisi normal & full opacity
                exit={{ x: -50, opacity: 0 }} // saat keluar, naik 50px & transparan
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={`https://api-ekatalog.ekatunggal.com${files[activeIndex].file_url}`}
                  alt={`Product image ${activeIndex + 1}`}
                  width={1920}
                  height={1080}
                  // style={{ objectFit: "fill" }}
                  className="rounded-3xl w-full h-full object-center"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 2) Nama & Deskripsi */}
        <div className="p-4 flex flex-1 flex-col justify-between font-[montserrat] border md:border-0 border-gray-100 mt-4 md:mt-5">
          <div className="relative w-full h-full md:px-4">
            <h3 className="text-lg md:text-xl font-bold capitalize text-gray-800">
              {data.nama}
            </h3>
            <h5 className="text-xs md:text-base font-medium text-gray-800">
              Detail
            </h5>
            <div className="absolute top-13 md:left-4 h-[0.5] md:h-[0.2] w-60 md:w-60 bg-gray-300" />
            <p className="mt-3 md:mt-1.5 text-gray-600 text-xs md:text-sm">
              {data.deskripsi}
            </p>
          </div>
        </div>
      </div>

      {/* 3) Thumbnail + tombol scroll */}
      <div className="relative mt-4 mx-auto">
        {files.length > 3 && (
          <button
            onClick={() => scrollThumbnails("left")}
            className="absolute hidden md:block cursor-pointer lg:left-65 xl:left-50 top-1/2 z-10 transform -translate-y-1/2 bg-[#d9d9d98f] h-10 w-10 rounded-full hover:bg-[#d9d9d9] transition"
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
          className="flex justify-start mx-auto gap-x-2 md:gap-x-4 md:max-w-140 2xl:max-w-165 md:space-x-8 overflow-x-hidden mb-2 snap-x snap-mandatory scrollbar-none px-4 pb-2"
        >
          {files.map((url: IFile, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                  snap-center flex-shrink-0 w-20 h-10 md:w-35 md:h-20 2xl:w-45 2xl:h-25 rounded-md overflow-hidden border cursor-pointer
                  ${
                    idx === activeIndex
                      ? "border-blue-600 ring-2 ring-blue-200"
                      : "border-gray-200"
                  } hover:brightness-90 transition
                `}
              aria-label={`Tampilkan gambar ${idx + 1}`}
            >
              <Image
                src={`https://api-ekatalog.ekatunggal.com${files[idx].file_url}`}
                alt={`${data.nama} preview ${idx + 1}`}
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </button>
          ))}
        </div>

        {files.length > 3 && (
          <button
            onClick={() => scrollThumbnails("right")}
            className="absolute hidden md:block cursor-pointer right-65 top-1/2 z-10 transform -translate-y-1/2 bg-[#d9d9d98f] h-10 w-10 rounded-full hover:bg-[#d9d9d9] transition"
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

    // versi 3
    // <section>
    //   <div className="border w-150 md:border-0 border-gray-100 overflow-hidden hover:shadow-2xl rounded-3xl transition-shadow duration-300">
    //     <div className="flex flex-1 border flex-row">
    //       {/* 1) Main Image dengan Framer Motion */}
    //       <div className="relative border w-100 h-40 md:h-100 2xl:h-90 overflow-hidden">
    //         <AnimatePresence mode="wait">
    //           {files[activeIndex]?.file_url && (
    //             <motion.div
    //               key={activeIndex}
    //               initial={{ x: 50, opacity: 0 }} // mulai 50px di bawah & transparan
    //               animate={{ x: 0, opacity: 1 }} // ke posisi normal & full opacity
    //               exit={{ x: -50, opacity: 0 }} // saat keluar, naik 50px & transparan
    //               transition={{ duration: 0.4, ease: "easeOut" }}
    //               className="absolute inset-0"
    //             >
    //               <Image
    //                 src={`https://api-ekatalog.ekatunggal.com${files[activeIndex].file_url}`}
    //                 alt={`Product image ${activeIndex + 1}`}
    //                 width={1920}
    //                 height={1080}
    //                 // style={{ objectFit: "fill" }}
    //                 className="rounded-3xl w-full h-full object-center"
    //               />
    //             </motion.div>
    //           )}
    //         </AnimatePresence>
    //       </div>

    //       {/* 2) Nama & Deskripsi */}
    //       <div className="p-4 flex flex-1 flex-col justify-between font-[montserrat] border md:border-0 border-gray-100 mt-4 md:mt-5">
    //         <div className="relative w-50 h-full md:px-4">
    //           <h3 className="text-lg md:text-xl font-bold capitalize text-gray-800">
    //             {data.nama}
    //           </h3>
    //           <h5 className="text-xs md:text-base font-medium text-gray-800">
    //             Detail
    //           </h5>
    //           <div className="absolute top-13 md:left-4 h-[0.5] md:h-[0.2] w-60 md:w-60 bg-gray-300" />
    //           <p className="mt-3 md:mt-1.5 text-gray-600 text-xs md:text-sm">
    //             {data.deskripsi}
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* 3) Thumbnail + tombol scroll */}
    //     <div className="relative mt-4 mx-auto">
    //       {files.length > 3 && (
    //         <button
    //           onClick={() => scrollThumbnails("left")}
    //           className="absolute hidden md:block cursor-pointer lg:left-65 xl:left-50 top-1/2 z-10 transform -translate-y-1/2 bg-[#d9d9d98f] h-10 w-10 rounded-full hover:bg-[#d9d9d9] transition"
    //           aria-label="Scroll kiri"
    //         >
    //           <Image
    //             src="/img/produk/arrow-left.png"
    //             alt="←"
    //             width={40}
    //             height={40}
    //           />
    //         </button>
    //       )}

    //       <div
    //         ref={thumbContainerRef}
    //         className="flex justify-start mx-auto gap-x-2 md:gap-x-4 md:max-w-140 2xl:max-w-165 md:space-x-8 overflow-x-hidden mb-2 snap-x snap-mandatory scrollbar-none px-4 pb-2"
    //       >
    //         {files.map((url: IFile, idx: number) => (
    //           <button
    //             key={idx}
    //             onClick={() => setActiveIndex(idx)}
    //             className={`
    //               snap-center flex-shrink-0 w-20 h-10 md:w-35 md:h-20 2xl:w-45 2xl:h-25 rounded-md overflow-hidden border cursor-pointer
    //               ${
    //                 idx === activeIndex
    //                   ? "border-blue-600 ring-2 ring-blue-200"
    //                   : "border-gray-200"
    //               } hover:brightness-90 transition
    //             `}
    //             aria-label={`Tampilkan gambar ${idx + 1}`}
    //           >
    //             <Image
    //               src={`https://api-ekatalog.ekatunggal.com${files[idx].file_url}`}
    //               alt={`${data.nama} preview ${idx + 1}`}
    //               width={500}
    //               height={500}
    //               className="w-full h-auto"
    //             />
    //           </button>
    //         ))}
    //       </div>

    //       {files.length > 3 && (
    //         <button
    //           onClick={() => scrollThumbnails("right")}
    //           className="absolute hidden md:block cursor-pointer right-65 top-1/2 z-10 transform -translate-y-1/2 bg-[#d9d9d98f] h-10 w-10 rounded-full hover:bg-[#d9d9d9] transition"
    //           aria-label="Scroll kanan"
    //         >
    //           <Image
    //             src="/img/produk/arrow-right.png"
    //             alt="→"
    //             width={40}
    //             height={40}
    //           />
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </section>
  );
}

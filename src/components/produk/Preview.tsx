// src/components/produk/Preview.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

import Produk from "@/app/hooks/ProductHook";
import { FileHook, IFile } from "@/app/hooks/FileHook";

interface PreviewProps {
  item: Produk | null;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const arrowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
};

export default function Preview({ item }: PreviewProps) {
  const [files, setFiles]             = useState<IFile[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbContainerRef             = useRef<HTMLDivElement>(null);

  // Fetch semua files setiap kali `item` berubah
  useEffect(() => {
    if (!item) {
      setFiles([]);
      setActiveIndex(0);
      return;
    }

    (async () => {
      // Ambil semua file tanpa pagination
      const allFiles = await FileHook({
        // hilangkan limit/page, atau set limit besar jika FileHook mewajibkan
        filters: [
          ["attached_to_doctype", "=", "Produk Company Profile"],
          ["attached_to_name", "=", item.nama],
        ],
      });
      setFiles(allFiles);
      setActiveIndex(0);
    })();
  }, [item?._id]);

  // Auto‐slide
  useEffect(() => {
    if (files.length <= 1) return;
    const id = setInterval(
      () => setActiveIndex((i) => (i + 1) % files.length),
      10_000
    );
    return () => clearInterval(id);
  }, [files]);

  // Center thumbnail aktif
  useEffect(() => {
    const c = thumbContainerRef.current;
    if (!c) return;
    const thumbs = Array.from(c.children) as HTMLElement[];
    const thumb  = thumbs[activeIndex];
    if (!thumb) return;
    const target = thumb.offsetLeft - (c.clientWidth - thumb.clientWidth) / 2;
    c.scrollTo({ left: target, behavior: "smooth" });
  }, [activeIndex]);

  // Scroll manual thumbnails
  const scrollThumbnails = (dir: "left" | "right") => {
    const c = thumbContainerRef.current;
    if (!c) return;
    c.scrollBy({ left: dir === "left" ? -100 : 100, behavior: "smooth" });
  };

  if (!item) {
    return (
      <div className="flex-1 border flex items-center justify-center text-gray-500 max-w-280 h-120 rounded-2xl font-[lato] text-xs sm:text-xl">
        Pilih Produk Untuk Melihat Detail
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item._id}
        className="flex-1 flex flex-col gap-x-8 p-2 lg:p-4 border border-gray-200 max-w-280 sm:h-240 lg:h-150 rounded-2xl space-y-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        {/* Carousel & Info */}
        <div className="flex flex-col lg:flex-row h-full justify-between gap-x-10">
          {/* Gambar besar */}
          <div className="relative mx-auto w-45 h-52 sm:w-90 sm:h-90 lg:w-100 lg:h-100 2xl:w-110 2xl:h-110 overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              {files[activeIndex] && (
                <motion.div
                  key={files[activeIndex]._id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`https://api-ekatalog.ekatunggal.com${files[activeIndex].file_url}`}
                    alt={`Gambar ${activeIndex + 1}`}
                    fill
                    loading="lazy"
                    className="object-contain rounded-xl"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Detail teks */}
          <div className="relative flex-1/2 my-8 w-45 sm:w-110 lg:w-100 font-[montserrat]">
            <h2 className="text-xs sm:text-xl lg:text-2xl font-bold">{item.nama}</h2>
            <h4 className="mt-1 text-xs sm:text-xl lg:text-2xl font-medium">Detail Produk</h4>
            <div className="absolute md:left-0 top-10 sm:top-15 lg:top-18 h-[1px] w-30 sm:w-100 bg-gray-400 rounded" />
            <p className="mt-3 text-[9px] sm:text-xl 2xl:text-2xl text-gray-700 font-medium">{item.deskripsi}</p>
          </div>
        </div>

        {/* Thumbnails & Arrows */}
        <div className="relative mx-auto">
          {/* Panah kiri */}
          <AnimatePresence>
            {files.length > 3 && activeIndex > 0 && (
              <motion.button
                key="arrow-left"
                onClick={() => {
                  scrollThumbnails("left");
                  setActiveIndex((i) => Math.max(i - 1, 0));
                }}
                className="absolute hidden md:block cursor-pointer -left-15 top-1/2 z-10 transform -translate-y-1/2 bg-[#d9d9d98f] h-10 w-10 rounded-full hover:bg-[#d9d9d9] transition"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={arrowVariants}
              >
                <Image src="/img/produk/arrow-left.png" alt="←" width={40} height={40} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Container thumbnails */}
          <div
            ref={thumbContainerRef}
            className="flex justify-start mx-auto gap-x-2 md:gap-x-2 max-w-40 sm:max-w-70 lg:max-w-140 2xl:max-w-165 overflow-x-hidden snap-x snap-mandatory scrollbar-none px-4 pb-2"
          >
            {files.map((f, idx) => (
              <button
                key={f._id}
                onClick={() => setActiveIndex(idx)}
                className={`snap-center flex-shrink-0 w-10 h-10 md:w-20 md:h-20 2xl:w-25 2xl:h-25 rounded-md overflow-hidden cursor-pointer ${
                  idx === activeIndex
                    ? "border-blue-600 ring-2 ring-blue-200"
                    : "border-gray-200"
                } hover:brightness-90 transition`}
                aria-label={`Tampilkan gambar ${idx + 1}`}
              >
                <Image
                  src={`https://api-ekatalog.ekatunggal.com${f.file_url}`}
                  alt={`Thumb ${idx + 1}`}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="object-contain"
                />
              </button>
            ))}
          </div>

          {/* Panah kanan */}
          <AnimatePresence>
            {files.length > 3 && activeIndex < files.length - 1 && (
              <motion.button
                key="arrow-right"
                onClick={() => {
                  scrollThumbnails("right");
                  setActiveIndex((i) => Math.min(i + 1, files.length - 1));
                }}
                className="absolute hidden md:block cursor-pointer -right-15 top-1/2 z-10 transform -translate-y-1/2 bg-[#d9d9d98f] h-10 w-10 rounded-full hover:bg-[#d9d9d9] transition"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={arrowVariants}
              >
                <Image src="/img/produk/arrow-right.png" alt="→" width={40} height={40} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
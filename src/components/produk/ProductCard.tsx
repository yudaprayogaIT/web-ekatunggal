"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { buildImageUrl } from "@/utils/images";
import HeaderComponent from "../HeaderComponent";
import { FooterComponent } from "../FooterComponent";

interface ProdukTujuan {
  _id: string;
  nama: string;
  deskripsi: string;
  images: string[]; // array rawPath (misal ["1748749...unsplash.jpg", "/public/files/174874...jpg", ...])
}

interface ProductCardProps {
  prod: ProdukTujuan;
}

export default function ProductCard({ prod }: ProductCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  // 1) Konversi setiap rawPath jadi URL lengkap, lalu buang elemen kosong
  const urls = prod.images
    .map((path) => buildImageUrl(path))
    .filter((u) => !!u);

  // 2) Jika kosong, masukkan 1 placeholder
  const finalUrls = urls.length > 0 ? urls : ["/placeholder.png"];

  // 3) Fungsi scroll thumbnails jika lebih dari 3
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

  return (
    <div className="flex flex-row overflow-hidden hover:shadow-2xl rounded-3xl transition-shadow duration-300">
      {/* <div className="flex flex-row border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"> */}
      <div className="flex flex-2 flex-col">
        {/* 1) Main Image */}
        <div className="relative w-full h-80">
          <Image
            src={finalUrls[activeIndex]}
            alt={prod.nama}
            fill
            style={{ objectFit: "fill" }}
            className="rounded-3xl"
          />
        </div>

        {/* 2) Thumbnail + tombol scroll */}
        <div className="relative mx-15 mt-4 px-10">
          {finalUrls.length > 3 && (
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
            {finalUrls.map((url, idx) => (
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
                  src={url}
                  alt={`${prod.nama} preview ${idx + 1}`}
                  width={100}
                  height={100}
                  className="object-fill"
                />
              </button>
            ))}
          </div>

          {finalUrls.length > 3 && (
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
            {prod.nama}
          </h3>
          <h5 className="text-md font-medium text-gray-800">Detail Produk</h5>
          {/* Garis horizontal abu */}
          <div className="absolute left-4 top-13 h-[0.2] w-84 bg-gray-300" />
          <p className="mt-1 text-gray-600 text-sm line-clamp-4">
            {prod.deskripsi}
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { buildImageUrl } from "@/utils/images";

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
    <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* 1) Main Image */}
      <div className="relative w-full h-80 bg-gray-100">
        <Image
          src={finalUrls[activeIndex]}
          alt={prod.nama}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* 2) Thumbnail + tombol scroll */}
      <div className="relative mt-4 px-4">
        {finalUrls.length > 3 && (
          <button
            onClick={() => scrollThumbnails("left")}
            className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-1 shadow hover:bg-opacity-100 transition"
            aria-label="Scroll kiri"
          >
            <Image
              src="/img/produk/arrow-left.png"
              alt="←"
              width={20}
              height={20}
            />
          </button>
        )}

        <div
          ref={thumbContainerRef}
          className="flex space-x-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pr-4 pb-2"
        >
          {finalUrls.map((url, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                snap-start flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border
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
                width={80}
                height={80}
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {finalUrls.length > 3 && (
          <button
            onClick={() => scrollThumbnails("right")}
            className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-1 shadow hover:bg-opacity-100 transition"
            aria-label="Scroll kanan"
          >
            <Image
              src="/img/produk/arrow-right.png"
              alt="→"
              width={20}
              height={20}
            />
          </button>
        )}
      </div>

      {/* 3) Nama & Deskripsi */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{prod.nama}</h3>
          <p className="mt-1 text-gray-600 text-sm line-clamp-2">
            {prod.deskripsi}
          </p>
        </div>
      </div>
    </div>
  );
}

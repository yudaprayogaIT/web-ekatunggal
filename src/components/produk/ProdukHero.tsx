"use client"; // karena kita menggunakan next/image (lazy loading) di dalamnya

import Image from "next/image";

export default function ProdukHero() {
  return (
    <section className="w-full flex justify-center mt-6">
      <div className="relative w-full max-w-[1920px] h-auto">
        <Image
          src="/img/produk/heroProduk.png"
          alt="Banner Produk"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover rounded-lg shadow-md"
          priority // agar gambar hero langsung di-preload
        />
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";

const produkBahanBaku = [
  { src: "/img/produk/BahanBaku/produk.png", alt: "BahanBaku 1" },
  { src: "/img/produk/BahanBaku/produk1.png", alt: "BahanBaku 2" },
  { src: "/img/produk/BahanBaku/produk2.png", alt: "BahanBaku 3" },
];

const produkBarangJadi = [
  { src: "/img/produk/BarangJadi/produk3.png", alt: "BarangJadi 1" },
  { src: "/img/produk/BarangJadi/produk4.png", alt: "BarangJadi 2" },
  { src: "/img/produk/BarangJadi/produk5.png", alt: "BarangJadi 3" },
];

export const ProdukComponents = () => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [kategoriAktif, setKategoriAktif] = useState<
    "BahanBaku" | "BarangJadi" | null
  >(null);

  const bukaModal = (kategori: "BahanBaku" | "BarangJadi", index: number) => {
    setKategoriAktif(kategori);
    setModalIndex(index);
  };

  const tutupModal = () => {
    setModalIndex(null);
    setKategoriAktif(null);
  };

  const dataAktif =
    kategoriAktif === "BahanBaku"
      ? produkBahanBaku
      : kategoriAktif === "BarangJadi"
      ? produkBarangJadi
      : [];

  const [animasiArah, setAnimasiArah] = useState<"kiri" | "kanan" | null>(null);
  const [transisiAktif, setTransisiAktif] = useState(false); // untuk mengatur animasi masuk
  const nextGambar = () => {
    if (modalIndex !== null) {
      setAnimasiArah("kanan");
      setTransisiAktif(true);
      setTimeout(() => {
        setModalIndex((modalIndex + 1) % dataAktif.length);
        setTransisiAktif(false);
      }, 300);
    }
  };

  const prevGambar = () => {
    if (modalIndex !== null) {
      setAnimasiArah("kiri");
      setTransisiAktif(true);
      setTimeout(() => {
        setModalIndex(modalIndex === 0 ? dataAktif.length - 1 : modalIndex - 1);
        setTransisiAktif(false);
      }, 300);
    }
  };

  return (
    <div className="container mx-auto px-4 my-14">
      {/* Judul */}
      <div className=" relative text-end my-8 text-xl md:text-2xl 2xl:text-3xl font-bold uppercase ">
        <h2 className="font-[montserrat] text-[var(--colorBlack)]">
          Produk Unggulan
        </h2>
        <h2 className="text-[var(--colorRed)]">Ekatunggal</h2>
        {/* Garis horizontal kuning di bawah gambar */}
        <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 -mt-20 mx-auto md:hidden w-[50%] h-1 bg-[var(--colorYellow)]" />
      </div>

      {/* Gambar kategori */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-8 justify-items-center">
        {/* Garis vertikal kuning samping kiri */}
        <div className="absolute hidden md:block left-0 top-1/2 -translate-y-1/2 h-[50%] w-1 bg-[var(--colorYellow)]" />
        {/* Garis vertikal kuning samping kanan */}
        <div className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 h-[50%] w-1 bg-[var(--colorYellow)]" />
        <div className="relative">
          <Image
            src={produkBahanBaku[0].src}
            alt="BahanBaku"
            width={540}
            height={540}
            className="rounded-lg w-100 2xl:w-115"
          />
          {/* muncul sebelum hover */}
          <div className="absolute inset-0 bg-transparent-100 flex flex-col items-center justify-center m-auto opacity-75 transition duration-500 ease-in-out w-[95%] h-[95%]">
            <div className="text-transparent text-lg font-bold">Bahan Baku</div>
            <button className="relative">
              <Image
                src="/img/produk/search.png"
                alt="search icon"
                width={40}
                height={40}
                className="block group-hover:hidden"
              />
            </button>
          </div>
          {/* akhir muncul sebelum hover */}
          <div className="absolute inset-0 bg-base-100 flex flex-col items-center justify-center m-auto opacity-0 hover:opacity-75 transition duration-500 ease-in-out w-[100%] h-[100%] ">
            <div className="text-black text-lg font-bold">Bahan Baku</div>
            <button
              onClick={() => bukaModal("BahanBaku", 0)}
              className="relative group cursor-pointer"
            >
              <Image
                src="/img/produk/search.png"
                alt="search icon"
                width={40}
                height={40}
                className="block group-hover:hidden"
              />
              <Image
                src="/img/produk/search_hover.png"
                alt="search icon"
                width={40}
                height={40}
                className="hidden group-hover:block group-hover:scale-140"
              />
            </button>
          </div>
        </div>

        <div className="relative" onClick={() => bukaModal("BarangJadi", 0)}>
          <Image
            src={produkBarangJadi[0].src}
            alt="BarangJadi"
            width={540}
            height={540}
            className="rounded-lg w-100 2xl:w-115"
          />
          <div className="absolute inset-0 bg-base-100 flex flex-col items-center justify-center m-auto opacity-0 hover:opacity-75 transition duration-500 ease-in-out w-[100%] h-[100%]">
            <div className="text-black text-lg font-bold">Barang Jadi</div>
            <button
              onClick={() => bukaModal("BarangJadi", 0)}
              className="relative group cursor-pointer"
            >
              <Image
                src="/img/produk/search.png"
                alt="search icon"
                width={40}
                height={40}
                className="block group-hover:hidden"
              />
              <Image
                src="/img/produk/search_hover.png"
                alt="search icon"
                width={40}
                height={40}
                className="hidden group-hover:block group-hover:scale-140"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={tutupModal}
        >
          <div
            className="relative max-w-xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={modalIndex} // penting agar React render ulang animasi
              src={dataAktif[modalIndex].src}
              alt={dataAktif[modalIndex].alt}
              width={700}
              height={500}
              className={`
    w-full h-auto rounded-lg transition-all duration-700 ease-in-out
    ${
      transisiAktif
        ? animasiArah === "kanan"
          ? "opacity-0 translate-x-10"
          : "opacity-0 -translate-x-10"
        : "opacity-100 translate-x-0"
    }
  `}
            />
            {/* Indikator Gambar */}
            <div className="absolute bottom-2 right-4 text-[var(--colorBlack)] text-sm bg-transparent">
              {modalIndex + 1} of {dataAktif.length}
            </div>

            {/* Tombol Navigasi */}
            {/* tombol panah kiri */}
            <button
              onClick={prevGambar}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 active:scale-90 transition-transform opacity-75 active:opacity-50"
            >
              <Image
                src="/img/produk/arrow-left.png"
                alt="Panah Kiri"
                width={40}
                height={40}
              />
            </button>
            {/* tombol panah kanan */}
            <button
              onClick={nextGambar}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 active:scale-90 transition-transform opacity-75 active:opacity-50"
            >
              <Image
                src="/img/produk/arrow-right.png"
                alt="Panah Kanan"
                width={40}
                height={40}
              />
            </button>
            {/* Tombol Tutup */}
            <button
              onClick={tutupModal}
              className="absolute top-4 right-4 text-black text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

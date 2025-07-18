"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

const materialUnggulan = [
  { src: "/img/produk/MaterialUnggulan/aMaterialUnggulan.png", alt: "MaterialUnggulan" },
  { src: "/img/produk/MaterialUnggulan/Material 1.png", alt: "MaterialUnggulan 1" },
  { src: "/img/produk/MaterialUnggulan/Material 2.png", alt: "MaterialUnggulan 2" },
  { src: "/img/produk/MaterialUnggulan/Material 3.png", alt: "MaterialUnggulan 3" },
  { src: "/img/produk/MaterialUnggulan/Material 4.png", alt: "MaterialUnggulan 4" },
  { src: "/img/produk/MaterialUnggulan/Material 5.png", alt: "MaterialUnggulan 5" },
  { src: "/img/produk/MaterialUnggulan/Material 6.png", alt: "MaterialUnggulan 6" },
  { src: "/img/produk/MaterialUnggulan/Material 7.png", alt: "MaterialUnggulan 7" },
  { src: "/img/produk/MaterialUnggulan/Material 8.png", alt: "MaterialUnggulan 8" },
  { src: "/img/produk/MaterialUnggulan/Material 9.png", alt: "MaterialUnggulan 9" },
  { src: "/img/produk/MaterialUnggulan/Material 10.png", alt: "MaterialUnggulan 10" },
  { src: "/img/produk/MaterialUnggulan/Material 11.png", alt: "MaterialUnggulan 11" },
  { src: "/img/produk/MaterialUnggulan/Material 12.png", alt: "MaterialUnggulan 12" },
  { src: "/img/produk/MaterialUnggulan/Material 13.png", alt: "MaterialUnggulan 13" },
];

const furnitureUnggulan = [
  { src: "/img/produk/FurnitureUnggulan/aFurnitureUnggulan.png", alt: "FurnitureUnggulan" },
  { src: "/img/produk/FurnitureUnggulan/Furniture 1.png", alt: "FurnitureUnggulan 1" },
  { src: "/img/produk/FurnitureUnggulan/Furniture 2.png", alt: "FurnitureUnggulan 2" },
  { src: "/img/produk/FurnitureUnggulan/Furniture 3.png", alt: "FurnitureUnggulan 3" },
  { src: "/img/produk/FurnitureUnggulan/Furniture 4.png", alt: "FurnitureUnggulan 4" },
  { src: "/img/produk/FurnitureUnggulan/Furniture 5.png", alt: "FurnitureUnggulan 5" },
  { src: "/img/produk/FurnitureUnggulan/Furniture 6.png", alt: "FurnitureUnggulan 6" },
];

// Buat array kategori dengan literal types
const kategoriOptions = ["MaterialUnggulan", "FurnitureUnggulan"] as const;
type Kategori = (typeof kategoriOptions)[number];

export const ProdukComponents = () => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [kategoriAktif, setKategoriAktif] = useState<Kategori | null>(null);
  const [animasiArah, setAnimasiArah] = useState<"kiri" | "kanan" | null>(null);
  const [transisiAktif, setTransisiAktif] = useState(false);
  const [panahAktif, setPanahAktif] = useState<"kiri" | "kanan" | null>(null);

  const dataAktif =
    kategoriAktif === "MaterialUnggulan"
      ? materialUnggulan
      : kategoriAktif === "FurnitureUnggulan"
      ? furnitureUnggulan
      : [];

  const bukaModal = (kategori: Kategori, index: number) => {
    setKategoriAktif(kategori);
    setModalIndex(index);
  };

  const tutupModal = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setModalIndex(null);
    setKategoriAktif(null);
    setAnimasiArah(null);
    setPanahAktif(null);
  };

  const nextGambar = () => {
    if (modalIndex === null) return;
    setAnimasiArah("kanan");
    setPanahAktif("kanan");
    setTransisiAktif(true);
    setTimeout(() => {
      setModalIndex((modalIndex + 1) % dataAktif.length);
      setTransisiAktif(false);
      setPanahAktif(null);
    }, 300);
  };

  const prevGambar = () => {
    if (modalIndex === null) return;
    setAnimasiArah("kiri");
    setPanahAktif("kiri");
    setTransisiAktif(true);
    setTimeout(() => {
      setModalIndex(modalIndex === 0 ? dataAktif.length - 1 : modalIndex - 1);
      setTransisiAktif(false);
      setPanahAktif(null);
    }, 300);
  };

  // keyboard & scroll lock
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalIndex !== null) {
        if (e.key === "ArrowRight") nextGambar();
        else if (e.key === "ArrowLeft") prevGambar();
        else if (e.key === "Escape") tutupModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = modalIndex !== null ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalIndex, dataAktif.length]);

  return (
    <div className="container mx-auto px-4 my-10">
      {/* Judul */}
      <div className="relative text-center my-8 text-md md:text-2xl 2xl:text-3xl font-bold uppercase">
        <h2 className="font-[montserrat] text-[var(--colorBlack)]">
          Furniture Unggulan{" "}
          <span className="text-[var(--colorRed)]">Ekatunggal</span>
        </h2>

        <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 -mt-20 mx-auto md:hidden w-[50%] h-1 bg-[var(--colorYellow)]" />
      </div>

      {/* Kategori */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-8 justify-items-center">
        <div className="absolute hidden md:block left-0 2xl:left-8 top-1/2 -translate-y-1/2 h-[50%] w-1 bg-[var(--colorYellow)]" />
        <div className="absolute hidden md:block right-0 2xl:right-8 top-1/2 -translate-y-1/2 h-[50%] w-1 bg-[var(--colorYellow)]" />

        {kategoriOptions.map((kat) => {
          const produk =
            kat === "MaterialUnggulan" ? materialUnggulan : furnitureUnggulan;
          const label = kat === "MaterialUnggulan" ? "Material Unggulan" : "Furniture Unggulan";

          return (
            <div key={kat} className="relative group">
              <Image
                src={produk[0].src}
                alt={label}
                width={540}
                height={540}
                className="w-100 2xl:w-115"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent group-hover:bg-[#ffffffad] transition duration-300 ease-in-out">
                <div className="text-black text-md md:text-lg font-bold group-hover:hidden">
                  Klik Disini
                </div>
                <div className="hidden group-hover:block text-black text-lg font-bold">
                  {label}
                </div>
                <button
                  type="button"
                  onClick={() => bukaModal(kat, 0)}
                  className="mt-2 focus:outline-none cursor-pointer"
                >
                  <Image
                    src="/icons/search.png"
                    alt="search icon"
                    width={40}
                    height={40}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/icons/search_hover.png"
                    alt="search icon hover"
                    width={40}
                    height={40}
                    className="hidden group-hover:block group-hover:scale-140"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-[#000000e8] flex items-center justify-center z-50"
          onClick={tutupModal}
        >
          <div
            className="relative max-w-xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={modalIndex}
              src={dataAktif[modalIndex].src}
              alt={dataAktif[modalIndex].alt}
              width={700}
              height={500}
              className={clsx(
                "mt-10 mx-auto w-[95%] h-auto rounded-lg transition-all duration-700 ease-in-out",
                transisiAktif
                  ? animasiArah === "kanan"
                    ? "opacity-0 translate-x-10"
                    : "opacity-0 -translate-x-10"
                  : "opacity-100 translate-x-0"
              )}
            />
            <div className="absolute bottom-2 right-10 text-[var(--colorBlack)] text-sm bg-transparent">
              {modalIndex + 1} of {dataAktif.length}
            </div>

            {/* Panah Navigasi */}
            <button
              type="button"
              onClick={prevGambar}
              className={clsx(
                "absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer transition-transform opacity-65 active:scale-90 active:opacity-40 focus:outline-none",
                panahAktif === "kiri" && "scale-110"
              )}
            >
              <Image
                src="/img/produk/arrow-left.png"
                alt="Panah Kiri"
                width={60}
                height={60}
              />
            </button>

            <button
              type="button"
              onClick={nextGambar}
              className={clsx(
                "absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer transition-transform opacity-65 active:scale-90 active:opacity-40 focus:outline-none",
                panahAktif === "kanan" && "scale-110"
              )}
            >
              <Image
                src="/img/produk/arrow-right.png"
                alt="Panah Kanan"
                width={60}
                height={60}
              />
            </button>

            {/* Tombol Tutup */}
            <button
              type="button"
              onClick={tutupModal}
              className="absolute top-12 right-5 md:right-7 text-black text-xl cursor-pointer font-bold focus:outline-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

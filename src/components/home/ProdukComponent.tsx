"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// Data produk unggulan
const materialUnggulan = [
  {
    src: "/img/produk/MaterialUnggulan/aMaterialUnggulan.png",
    alt: "MaterialUnggulan",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 1.png",
    alt: "MaterialUnggulan 1",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 2.png",
    alt: "MaterialUnggulan 2",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 3.png",
    alt: "MaterialUnggulan 3",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 4.png",
    alt: "MaterialUnggulan 4",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 5.png",
    alt: "MaterialUnggulan 5",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 6.png",
    alt: "MaterialUnggulan 6",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 7.png",
    alt: "MaterialUnggulan 7",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 8.png",
    alt: "MaterialUnggulan 8",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 9.png",
    alt: "MaterialUnggulan 9",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 10.png",
    alt: "MaterialUnggulan 10",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 11.png",
    alt: "MaterialUnggulan 11",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 12.png",
    alt: "MaterialUnggulan 12",
  },
  {
    src: "/img/produk/MaterialUnggulan/Material 13.png",
    alt: "MaterialUnggulan 13",
  },
];

const furnitureUnggulan = [
  {
    src: "/img/produk/FurnitureUnggulan/aFurnitureUnggulan.png",
    alt: "FurnitureUnggulan",
  },
  {
    src: "/img/produk/FurnitureUnggulan/Furniture 1.png",
    alt: "FurnitureUnggulan 1",
  },
  {
    src: "/img/produk/FurnitureUnggulan/Furniture 2.png",
    alt: "FurnitureUnggulan 2",
  },
  {
    src: "/img/produk/FurnitureUnggulan/Furniture 3.png",
    alt: "FurnitureUnggulan 3",
  },
  {
    src: "/img/produk/FurnitureUnggulan/Furniture 4.png",
    alt: "FurnitureUnggulan 4",
  },
  {
    src: "/img/produk/FurnitureUnggulan/Furniture 5.png",
    alt: "FurnitureUnggulan 5",
  },
  {
    src: "/img/produk/FurnitureUnggulan/Furniture 6.png",
    alt: "FurnitureUnggulan 6",
  },
];

const kategoriOptions = ["MaterialUnggulan", "FurnitureUnggulan"] as const;
type Kategori = (typeof kategoriOptions)[number];

export const ProdukComponents: React.FC = () => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [kategoriAktif, setKategoriAktif] = useState<Kategori | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [panahAktif, setPanahAktif] = useState<"kiri" | "kanan" | null>(null);

  const scrollYRef = useRef(0);
  const lockedRef = useRef(false);

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
    setModalIndex(null);
    setKategoriAktif(null);
    setPanahAktif(null);
  };

  const changeIndex = useCallback(
    (dir: 1 | -1) => {
      if (modalIndex === null) return;
      setDirection(dir);
      setPanahAktif(dir === 1 ? "kanan" : "kiri");
      const next = (modalIndex + dir + dataAktif.length) % dataAktif.length;
      setModalIndex(next);
    },
    [modalIndex, dataAktif.length]
  );

  const nextGambar = () => changeIndex(1);
  const prevGambar = () => changeIndex(-1);

  // ————— Scroll‐lock dan keyboard nav —————
  useEffect(() => {
    if (modalIndex !== null && !lockedRef.current) {
      // pertama kali buka modal → lock scroll ONCE
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      lockedRef.current = true;
    } else if (modalIndex === null && lockedRef.current) {
      // modal ditutup → unlock dan kembalikan posisi scroll
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
      lockedRef.current = false;
    }
  }, [modalIndex]);

  // add keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (modalIndex === null) return;
      if (e.key === "ArrowRight") {
        nextGambar();
      } else if (e.key === "ArrowLeft") {
        prevGambar();
      } else if (e.key === "Escape") {
        tutupModal();
      }
    };

    if (modalIndex !== null) {
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [modalIndex, nextGambar, prevGambar]);

  // Variants framer‐motion untuk slide
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  console.log([modalIndex]);

  return (
    <div className="container mx-auto px-4 my-10">
      {/* Judul */}
      <div className="relative text-center my-8 text-md md:text-2xl 2xl:text-3xl font-bold uppercase">
        <h2 className="font-[montserrat] text-[var(--colorBlack)]">
          Produk Unggulan{" "}
          <span className="text-[var(--colorRed)]">Ekatunggal</span>
        </h2>
        <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 -mt-20 mx-auto md:hidden w-[50%] h-1 bg-[var(--colorYellow)]" />
      </div>

      {/* Kategori */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-y-8 justify-items-center">
        <div className="absolute hidden lg:block left-0 2xl:left-8 top-1/2 -translate-y-1/2 h-[50%] w-1 bg-[var(--colorYellow)]" />
        <div className="absolute hidden lg:block right-0 2xl:right-8 top-1/2 -translate-y-1/2 h-[50%] w-1 bg-[var(--colorYellow)]" />

        {kategoriOptions.map((kat) => {
          const produk =
            kat === "MaterialUnggulan" ? materialUnggulan : furnitureUnggulan;
          const label =
            kat === "MaterialUnggulan"
              ? "Material Unggulan"
              : "Furniture Unggulan";

          return (
            <div key={kat} className="relative group">
              <Image
                src={produk[0].src}
                alt={label}
                width={540}
                height={540}
                className="w-100 md:w-115"
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

      {/* Modal Slider */}
      <AnimatePresence initial={false} custom={direction}>
        {modalIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-[#000000e8] flex items-center justify-center z-50"
            onClick={tutupModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="relative max-w-xl w-[95%]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Slide */}
              <motion.div
                key={modalIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -100) nextGambar();
                  else if (info.offset.x > 100) prevGambar();
                }}
                className="rounded-lg overflow-hidden bg-white"
              >
                <Image
                  src={dataAktif[modalIndex].src}
                  alt={dataAktif[modalIndex].alt}
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-2 right-2 text-gray-700 text-sm">
                  {modalIndex + 1} / {dataAktif.length}
                </div>
              </motion.div>

              {/* Navigasi Panah */}
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
                  alt="Prev"
                  width={40}
                  height={40}
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
                  alt="Next"
                  width={40}
                  height={40}
                />
              </button>

              {/* Tombol Tutup */}
              <button
                type="button"
                onClick={tutupModal}
                className="absolute top-2 right-5 md:right-7 text-black text-2xl cursor-pointer font-bold focus:outline-none"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useEffect } from "react";
// import { useRef } from "react";

// const produkBahanBaku = [
//   { src: "/img/produk/BahanBaku/produk.png", alt: "BahanBaku 1" },
//   { src: "/img/produk/BahanBaku/produk1.png", alt: "BahanBaku 2" },
//   { src: "/img/produk/BahanBaku/produk2.png", alt: "BahanBaku 3" },
// ];

// const produkBarangJadi = [
//   { src: "/img/produk/BarangJadi/produk3.png", alt: "BarangJadi 1" },
//   { src: "/img/produk/BarangJadi/produk4.png", alt: "BarangJadi 2" },
//   { src: "/img/produk/BarangJadi/produk5.png", alt: "BarangJadi 3" },
// ];

// export const ProdukComponents = () => {
//   const [modalIndex, setModalIndex] = useState<number | null>(null);
//   const [kategoriAktif, setKategoriAktif] = useState<
//     "BahanBaku" | "BarangJadi" | null
//   >(null);

//   const bukaModal = (kategori: "BahanBaku" | "BarangJadi", index: number) => {
//     setKategoriAktif(kategori);
//     setModalIndex(index);
//   };

//   const tutupModal = () => {
//     setModalIndex(null);
//     setKategoriAktif(null);
//   };

//   const arrowRightRef = useRef<HTMLButtonElement | null>(null);

//   const dataAktif =
//     kategoriAktif === "BahanBaku"
//       ? produkBahanBaku
//       : kategoriAktif === "BarangJadi"
//       ? produkBarangJadi
//       : [];

//   const [animasiArah, setAnimasiArah] = useState<"kiri" | "kanan" | null>(null);
//   const [transisiAktif, setTransisiAktif] = useState(false); // untuk mengatur animasi masuk
//   const nextGambar = () => {
//     if (modalIndex !== null) {
//       setAnimasiArah("kanan");
//       setTransisiAktif(true);
//       setTimeout(() => {
//         setModalIndex((modalIndex + 1) % dataAktif.length);
//         setTransisiAktif(false);
//       }, 300);
//     }
//   };

//   const prevGambar = () => {
//     if (modalIndex !== null) {
//       setAnimasiArah("kiri");
//       setTransisiAktif(true);
//       setTimeout(() => {
//         setModalIndex(modalIndex === 0 ? dataAktif.length - 1 : modalIndex - 1);
//         setTransisiAktif(false);
//       }, 300);
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (modalIndex !== null) {
//         if (e.key === "ArrowRight") {
//           nextGambar();
//         } else if (e.key === "ArrowLeft") {
//           prevGambar();
//         } else if (e.key === "Escape") {
//           tutupModal();
//         }
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [modalIndex, nextGambar, prevGambar, tutupModal]);

//   // Lock scroll when modal is open
//   useEffect(() => {
//     if (modalIndex !== null) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [modalIndex]);

//   return (
//     <div className="container mx-auto px-4 my-14 ">
//       {/* Judul */}
//       <div className=" relative text-end my-8 text-xl md:text-2xl 2xl:text-3xl font-bold uppercase ">
//         <h2 className="font-[montserrat] text-[var(--colorBlack)]">
//           Produk Unggulan
//         </h2>
//         <h2 className="text-[var(--colorRed)]">Ekatunggal</h2>
//         {/* Garis horizontal kuning di bawah gambar */}
//         <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 -mt-20 mx-auto md:hidden w-[50%] h-1 bg-[var(--colorYellow)]" />
//       </div>

//       {/* Gambar kategori */}
//       <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-8 justify-items-center">
//         {/* Garis vertikal kuning samping kiri */}
//         <div className="absolute hidden md:block left-0 top-1/2 -translate-y-1/2 h-[50%] w-1 bg-[var(--colorYellow)]" />
//         {/* Garis vertikal kuning samping kanan */}
//         <div className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 h-[50%] w-1 bg-[var(--colorYellow)]" />
//         <div className="relative group cursor-pointer">
//           <Image
//             src={produkBahanBaku[0].src}
//             alt="BahanBaku"
//             width={540}
//             height={540}
//             className="w-100 2xl:w-115"
//           />

//           {/* Overlay tunggal, berubah isi saat hover */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center m-auto bg-[#fff0] group-hover:bg-[#ffffffad] group-hover:opac transition duration-300 ease-in-out">
//             {/* Teks sebelum hover */}
//             <div className="text-black text-lg font-bold group-hover:hidden">
//               Klik Disini
//             </div>

//             {/* Teks saat hover */}
//             <div className="hidden group-hover:block text-black text-lg font-bold">
//               Bahan Baku
//             </div>

//             <button
//               onClick={() => bukaModal("BahanBaku", 0)}
//               className="relative group cursor-pointer"
//             >
//               {/* Icon sebelum hover */}
//               <Image
//                 src="/img/produk/search.png"
//                 alt="search icon"
//                 width={40}
//                 height={40}
//                 className="group-hover:hidden"
//               />

//               {/* Icon saat hover */}
//               <Image
//                 src="/img/produk/search_hover.png"
//                 alt="search icon hover"
//                 width={40}
//                 height={40}
//                 className="hidden group-hover:block group-hover:scale-140"
//               />
//             </button>
//           </div>
//         </div>
//         {/*  */}

//         <div className="relative group cursor-pointer">
//           <Image
//             src={produkBarangJadi[0].src}
//             alt="BarangJadi"
//             width={540}
//             height={540}
//             className="w-100 2xl:w-115"
//           />

//           {/* Overlay tunggal, berubah isi saat hover */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center m-auto bg-[#fff0] group-hover:bg-[#ffffffad] group-hover:opac transition duration-300 ease-in-out">
//             {/* Teks sebelum hover */}
//             <div className="text-black text-lg font-bold group-hover:hidden">
//               Klik Disini
//             </div>

//             {/* Teks saat hover */}
//             <div className="hidden group-hover:block text-black text-lg font-bold">
//               Barang Jadi
//             </div>

//             <button
//               onClick={() => bukaModal("BarangJadi", 0)}
//               className="relative group cursor-pointer"
//             >
//               {/* Icon sebelum hover */}
//               <Image
//                 src="/img/produk/search.png"
//                 alt="search icon"
//                 width={40}
//                 height={40}
//                 className="group-hover:hidden"
//               />

//               {/* Icon saat hover */}
//               <Image
//                 src="/img/produk/search_hover.png"
//                 alt="search icon hover"
//                 width={40}
//                 height={40}
//                 className="hidden group-hover:block group-hover:scale-140"
//               />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {modalIndex !== null && (
//         <div
//           className="fixed inset-0 bg-[#000000e8] flex items-center justify-center z-50"
//           onClick={tutupModal}
//         >
//           <div
//             className="relative max-w-xl w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Image
//               key={modalIndex} // penting agar React render ulang animasi
//               src={dataAktif[modalIndex].src}
//               alt={dataAktif[modalIndex].alt}
//               width={700}
//               height={500}
//               className={`mt-10 w-[95%] h-auto rounded-lg transition-all duration-700 ease-in-out
//             ${
//               transisiAktif
//                 ? animasiArah === "kanan"
//                   ? "opacity-0 translate-x-10"
//                   : "opacity-0 -translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }
//           `}
//             />
//             {/* Indikator Gambar */}
//             <div className="absolute bottom-2 right-10 text-[var(--colorBlack)] text-sm bg-transparent">
//               {modalIndex + 1} of {dataAktif.length}
//             </div>

//             {/* Tombol Navigasi */}
//             {/* tombol panah kiri */}
//             <button
//               onClick={prevGambar}
//               className="absolute top-1/2 -left-2.5 transform -translate-y-1/2 active:scale-90 transition-transform opacity-65 active:opacity-40"
//             >
//               <Image
//                 src="/img/produk/arrow-left.png"
//                 alt="Panah Kiri"
//                 width={60}
//                 height={60}
//               />
//             </button>
//             {/* tombol panah kanan */}
//             <button
//               ref={arrowRightRef}
//               onClick={nextGambar}
//               className="arrow-right-button absolute top-1/2 right-5 transform -translate-y-1/2 active:scale-90 transition-transform opacity-65 active:opacity-40"
//             >
//               <Image
//                 src="/img/produk/arrow-right.png"
//                 alt="Panah Kanan"
//                 width={60}
//                 height={60}
//               />
//             </button>

//             {/* Tombol Tutup */}
//             <button
//               onClick={tutupModal}
//               className="absolute top-12 right-10 text-black text-xl font-bold"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

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
  const [animasiArah, setAnimasiArah] = useState<"kiri" | "kanan" | null>(null);
  const [transisiAktif, setTransisiAktif] = useState(false);
  const [panahAktif, setPanahAktif] = useState<"kiri" | "kanan" | null>(null);

  const dataAktif =
    kategoriAktif === "BahanBaku"
      ? produkBahanBaku
      : kategoriAktif === "BarangJadi"
      ? produkBarangJadi
      : [];

  const bukaModal = (kategori: "BahanBaku" | "BarangJadi", index: number) => {
    setKategoriAktif(kategori);
    setModalIndex(index);
  };

  const tutupModal = () => {
    // hilangkan fokus elemen apapun
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
    <div className="container mx-auto px-4 my-14">
      {/* Judul */}
      <div className="relative text-end my-8 text-xl md:text-2xl 2xl:text-3xl font-bold uppercase">
        <h2 className="font-[montserrat] text-[var(--colorBlack)]">
          Produk Unggulan
        </h2>
        <h2 className="text-[var(--colorRed)]">Ekatunggal</h2>
        <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 -mt-20 mx-auto md:hidden w-[50%] h-1 bg-[var(--colorYellow)]" />
      </div>

      {/* Kategori */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-8 justify-items-center">
        <div className="absolute hidden md:block left-0 top-1/2 -translate-y-1/2 h-[50%] w-1 bg-[var(--colorYellow)]" />
        <div className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 h-[50%] w-1 bg-[var(--colorYellow)]" />

        {["BahanBaku", "BarangJadi"].map((kat) => {
          const produk =
            kat === "BahanBaku" ? produkBahanBaku : produkBarangJadi;
          const label = kat === "BahanBaku" ? "Bahan Baku" : "Barang Jadi";
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
                <div className="text-black text-lg font-bold group-hover:hidden">
                  Klik Disini
                </div>
                <div className="hidden group-hover:block text-black text-lg font-bold">
                  {label}
                </div>
                <button
                  type="button"
                  onClick={() => bukaModal(kat as any, 0)}
                  className="mt-2 focus:outline-none cursor-pointer"
                >
                  <Image
                    src="/img/produk/search.png"
                    alt="search icon"
                    width={40}
                    height={40}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/img/produk/search_hover.png"
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
                "mt-10 w-[95%] h-auto rounded-lg transition-all duration-700 ease-in-out",
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

            <button
              type="button"
              onClick={prevGambar}
              className={clsx(
                "absolute top-1/2 -left-2.5 transform -translate-y-1/2 active:scale-90 transition-transform opacity-65 active:opacity-40 focus:outline-none",
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
                "absolute top-1/2 right-5 transform -translate-y-1/2 active:scale-90 transition-transform opacity-65 active:opacity-40 focus:outline-none",
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

            <button
              type="button"
              onClick={tutupModal}
              className="absolute top-12 right-10 text-black text-xl font-bold focus:outline-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

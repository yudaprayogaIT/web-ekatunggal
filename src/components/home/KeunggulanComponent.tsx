// import React from "react";
// import Image from "next/image";

// export const KeunggulanComponent = () => {
//   return (
//     <section className="my-10 ">
//       <h2 className="uppercase font-[montserrat] text-[var(--colorBlack)] text-xl md:text-2xl 2xl:text-3xl font-bold text-center">
//         Keunggulan <span className="text-[var(--colorRed)]">Ekatunggal</span>
//       </h2>
//       <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-center gap-y-10 md:gap-x-10 my-8">
//         <div className="card group bg-[var(--colorWhite)] w-48 h-50 shadow-lg hover:shadow-2xl border border-transparent rounded-lg transition-all duration-300">
//           <figure className="relative">
//             {/* Normal image */}
//             <Image
//               src="/img/keunggulan/mutu.png"
//               alt="mutu"
//               width={133}
//               height={133}
//               className="w-18 block group-hover:hidden transition-all duration-600"
//             />
//             {/* Hover image */}
//             <Image
//               src="/img/keunggulan/mutu_hover.png"
//               alt="mutu_hover"
//               width={133}
//               height={133}
//               className="w-18 mt-1 hidden group-hover:block transition-all duration-600"
//             />
//           </figure>
//           <div className="card-body text-center -mt-5">
//             <h2 className="card-title mx-auto text-[var(--colorBlack)] text-base font-[montserrat] uppercase transition-all duration-300 group-hover:text-[var(--colorRed)]">
//               mutu
//             </h2>
//             <p className="text-sm mt-2 -mx-3 font-bold text-[var(--colorGrey)] transition-all duration-300 group-hover:text-[var(--colorBlack)]">
//               Setiap Produk Terjaga Kualitasnya
//             </p>
//           </div>
//         </div>

//         <div className="card group bg-[var(--colorWhite)] w-48 h-50 shadow-lg hover:shadow-2xl border border-transparent rounded-lg transition-all duration-300">
//           <figure className="relative">
//             {/* Normal image */}
//             <Image
//               src="/img/keunggulan/murah.png"
//               alt="murah"
//               width={133}
//               height={133}
//               className="w-18 block group-hover:hidden transition-all duration-600"
//             />
//             {/* Hover image */}
//             <Image
//               src="/img/keunggulan/murah_hover.png"
//               alt="murah_hover"
//               width={133}
//               height={133}
//               className="w-18 mt-1 hidden group-hover:block transition-all duration-600"
//             />
//           </figure>
//           <div className="card-body text-center -mt-5">
//             <h2 className="card-title mx-auto text-[var(--colorBlack)] text-base font-[montserrat] uppercase transition-all duration-300 group-hover:text-[var(--colorRed)]">
//               murah
//             </h2>
//             <p className="text-sm mt-2 -mx-3 font-bold text-[var(--colorGrey)] transition-all duration-300 group-hover:text-[var(--colorBlack)]">
//               Menawarkan Produk dengan Harga Terbaik
//             </p>
//           </div>
//         </div>

//         <div className="card group bg-[var(--colorWhite)] w-48 h-50 shadow-lg hover:shadow-2xl border border-transparent rounded-lg transition-all duration-300">
//           <figure className="relative">
//             {/* Normal image */}
//             <Image
//               src="/img/keunggulan/non-stop.png"
//               alt="non-stop"
//               width={133}
//               height={133}
//               className="w-18 block group-hover:hidden transition-all duration-600"
//             />
//             {/* Hover image */}
//             <Image
//               src="/img/keunggulan/non-stop_hover.png"
//               alt="non-stop_hover"
//               width={133}
//               height={133}
//               className="w-18 mt-1 hidden group-hover:block transition-all duration-600"
//             />
//           </figure>
//           <div className="card-body text-center -mt-5">
//             <h2 className="card-title mx-auto text-[var(--colorBlack)] text-base font-[montserrat] uppercase transition-all duration-300 group-hover:text-[var(--colorRed)]">
//               Non stop
//             </h2>
//             <p className="text-sm mt-2 -mx-3 font-bold text-[var(--colorGrey)] transition-all duration-300 group-hover:text-[var(--colorBlack)]">
//               Pelayanan 6 Hari Dalam Seminggu
//             </p>
//           </div>
//         </div>

//         <div className="card group bg-[var(--colorWhite)] w-48 h-50 shadow-lg hover:shadow-2xl border border-transparent rounded-lg transition-all duration-300">
//           <figure className="relative">
//             {/* Normal image */}
//             <Image
//               src="/img/keunggulan/terlengkap.png"
//               alt="terlengkap"
//               width={133}
//               height={133}
//               className="w-18 block group-hover:hidden transition-all duration-600 h-18"
//             />
//             {/* Hover image */}
//             <Image
//               src="/img/keunggulan/terlengkap_hover.png"
//               alt="terlengkap_hover"
//               width={133}
//               height={133}
//               className="w-18 mt-1 hidden group-hover:block transition-all duration-600 h-17"
//             />
//           </figure>
//           <div className="card-body text-center -mt-5">
//             <h2 className="card-title mx-auto text-[var(--colorBlack)] text-base font-[montserrat] uppercase transition-all duration-300 group-hover:text-[var(--colorRed)]">
//               terlengkap
//             </h2>
//             <p className="text-sm mt-1 -mx-3 font-bold text-[var(--colorGrey)] transition-all duration-300 group-hover:text-[var(--colorBlack)]">
//               Produk Selalu Lengkap Sesuai Kebutuhan Konsumen
//             </p>
//           </div>
//         </div>

//         <div className="card group bg-[var(--colorWhite)] w-48 h-50 shadow-lg hover:shadow-2xl border border-transparent rounded-lg transition-all duration-300">
//           <figure className="relative">
//             {/* Normal image */}
//             <Image
//               src="/img/keunggulan/layanan-cs.png"
//               alt="layanan-cs"
//               width={133}
//               height={133}
//               className="w-18 block group-hover:hidden transition-all duration-600"
//             />
//             {/* Hover image */}
//             <Image
//               src="/img/keunggulan/layanan-cs_hover.png"
//               alt="layanan-cs_hover"
//               width={133}
//               height={133}
//               className="w-18 mt-1 hidden group-hover:block transition-all duration-600"
//             />
//           </figure>
//           <div className="card-body text-center -mt-5">
//             <h2 className="card-title mx-auto text-[var(--colorBlack)] text-base font-[montserrat] uppercase transition-all duration-300 group-hover:text-[var(--colorRed)]">
//               Layanan cs
//             </h2>
//             <p className="text-sm mt-2 -mx-3 font-bold text-[var(--colorGrey)] transition-all duration-300 group-hover:text-[var(--colorBlack)]">
//               Sales Aktif dan Komunikatif
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
import Image from "next/image";

export const KeunggulanComponent = () => {
  const items = [
    {
      key: "mutu",
      label: "Mutu",
      desc: "Setiap Produk Terjaga Kualitasnya",
      img: "/img/keunggulan/mutu.png",
      imgHover: "/img/keunggulan/mutu_hover.png",
    },
    {
      key: "murah",
      label: "Murah",
      desc: "Menawarkan Produk dengan Harga Terbaik",
      img: "/img/keunggulan/murah.png",
      imgHover: "/img/keunggulan/murah_hover.png",
    },
    {
      key: "non-stop",
      label: "Non Stop",
      desc: "Pelayanan 6 Hari Dalam Seminggu",
      img: "/img/keunggulan/non-stop.png",
      imgHover: "/img/keunggulan/non-stop_hover.png",
    },
    {
      key: "terlengkap",
      label: "Terlengkap",
      desc: "Produk Selalu Lengkap Sesuai Kebutuhan Konsumen",
      img: "/img/keunggulan/terlengkap.png",
      imgHover: "/img/keunggulan/terlengkap_hover.png",
    },
    {
      key: "layanan-cs",
      label: "Layanan CS",
      desc: "Sales Aktif dan Komunikatif",
      img: "/img/keunggulan/layanan-cs.png",
      imgHover: "/img/keunggulan/layanan-cs_hover.png",
    },
  ];

  return (
    <section className="my-10">
      <h2 className="uppercase font-[montserrat] text-[var(--colorBlack)] text-md md:text-2xl 2xl:text-3xl font-bold text-center">
        Keunggulan <span className="text-[var(--colorRed)]">Ekatunggal</span>
      </h2>
      <div className="container mx-auto px-4 mt-4 flex flex-row flex-wrap justify-center items-center gap-8 md:gap-15">
        {items.map(({ key, label, desc, img, imgHover }) => (
          <div
            key={key}
            className="group bg-[var(--colorWhite)] py-2 md:py-5 w-40 h-42 md:w-50 md:h-52 shadow-lg hover:shadow-2xl rounded-2xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative w-full h-18 md:h-20">
              <Image
                src={img}
                alt={key}
                fill
                className="block group-hover:hidden transition-all duration-300 object-contain"
              />
              <Image
                src={imgHover}
                alt={`${key}-hover`}
                fill
                className="hidden group-hover:block transition-all duration-300 object-contain"
              />
            </div>
            <div className="p-2 md:p-4 font-bold text-center md:mt-2">
              <h3 className="text-base uppercase font-[montserrat] text-[var(--colorBlack)] mb-1 md:mb-2 transition-colors duration-300 group-hover:text-[var(--colorRed)]">
                {label}
              </h3>
              <p className="text-[10px] md:text-xs font-bold text-[var(--colorGrey)] transition-colors duration-300 group-hover:text-[var(--colorBlack)]">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

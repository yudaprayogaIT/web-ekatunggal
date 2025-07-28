import React from "react";
import Image from "next/image";
// import { div } from "framer-motion/client";

export const BudayaComponent = () => {
  const budaya = [
    {
      key: "setia",
      label: "Setia",
      img: "/img/budaya/setia.png",
      imgHover: "/img/budaya/setia_hover.png",
    },
    {
      key: "jujur",
      label: "Jujur",
      img: "/img/budaya/jujur.png",
      imgHover: "/img/budaya/jujur_hover.png",
    },
    {
      key: "tangguh",
      label: "Tangguh",
      img: "/img/budaya/tangguh.png",
      imgHover: "/img/budaya/tangguh_hover.png",
    },
    {
      key: "hargai",
      label: "Hargai",
      img: "/img/budaya/hargai.png",
      imgHover: "/img/budaya/hargai_hover.png",
    },
    {
      key: "teliti",
      label: "Teliti",
      img: "/img/budaya/teliti.png",
      imgHover: "/img/budaya/teliti_hover.png",
    },
  ];

  return (
    <section className="my-0 md:my-6">
      <div className="title">
        <h2 className="font-[montserrat] font-bold text-md md:text-3xl text-[var(--colorBlack)] text-center uppercase">
          Budaya kerja{" "}
          <span className="text-[var(--colorChilli)]">ekatunggal</span>
        </h2>
        <h3 className="font-[montserrat] font-bold text-xs md:text-2xl text-[var(--colorWhite)] text-center uppercase w-86 [@media(min-width:400px)]:w-90 sm:w-160 lg:w-260 py-2 mt-1 lg:mt-2 bg-[var(--colorRed)] mx-auto rounded-lg md:rounded-2xl">
          Bekerja dan melayani dengan{" "}
          <span className="text-[var(--colorYellow)]">sejuta hati</span>
        </h3>
      </div>

      <div className="container mx-auto px-4 mt-4 flex flex-row justify-center items-center gap-5 [@media(min-width:400px)]:gap-8 sm:gap-10 2xl:gap-15 flex-wrap">
        {budaya.map(({ key, label, img, imgHover }) => (
          <div
            key={key}
            className="group bg-[#FDD10026] hover:bg-[##FFFFFF26] shadow-lg hover:shadow-2xl py-2 md:py-5 w-38 h-40 [@media(min-width:400px)]:w-40 [@media(min-width:400px)]:h-42 md:w-50 md:h-52 overflow-hidden transition-shadow duration-300 ease-in-out rounded-2xl"
          >
            <div className="relative h-20 [@media(min-width:400px)]:h-22 md:h-28 mt-2 md:mt-0 w-auto">
              <Image
                src={img}
                alt={`${key}`}
                fill
                className="block object-contain group-hover:hidden transition-all duration-800 ease-in-out"
              />
              <Image
                src={imgHover}
                alt={`${key}_hover`}
                fill
                className="hidden object-contain group-hover:block transition-all duration-800 ease-in-out"
              />
            </div>

            <div className="mt-5 md:mt-7 font-bold text-center text-lg md:text-xl uppercase text-black group-hover:text-[var(--colorRed)] transition-all duration-300 ease-in-out">
              <h3>{label}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="container mx-auto px-4 mt-8 flex flex-row justify-center items-center gap-8 md:gap-20 flex-wrap">
        {budaya.map(({ key, label, img, imgHover }) => (
          <div
            key={key}
            className="group bg-[#FDD10026] hover:bg-[#00000040] hover:shadow-2xl w-80 h-70 md:w-110 md:h-100 py-3 md:py-5 overflow-hidden transition-shadow duration-300 ease-in-out rounded-4xl"
          >
            <div className="relative h-50 md:h-70 w-auto">
              <Image
                src={img}
                alt={`${key}`}
                fill
                className="block object-contain group-hover:hidden transition-all duration-800 ease-in-out"
              />
              <Image
                src={imgHover}
                alt={`${key}_hover`}
                fill
                className="hidden object-contain group-hover:block transition-all duration-800 ease-in-out"
              />
            </div>

            <div className="p-2 md:p-4 mt-3 font-bold text-center text-2xl md:text-3xl uppercase text-black group-hover:text-[var(--colorRed)] transition-all duration-300 ease-in-out">
              <h3>{label}</h3>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className="mt-10 mx-auto w-[70%] md:w-[33%] h-1 bg-[var(--colorYellow)]" /> */}
    </section>
  );
};

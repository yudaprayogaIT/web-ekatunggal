"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: "item1",
    image: "/img/hero.png",
    alt: "gedung_etm",
    title: "APAPUN KEBUTUHANMU, SOLUSINYA, #EKATUNGGAL",
    button: {
      label: "TANYA VIKA",
      link: "https://wa.me/085788837057",
    },
  },
  {
    id: "item2",
    image: "/img/hero2.png",
    alt: "gedung_etm_2",
    title: "SOLUSI CEPAT UNTUK BERBAGAI KEBUTUHAN INDUSTRI, #EKATUNGGAL",
    button: {
      label: "TANYA VIKA",
      link: "https://wa.me/085788837057",
    },
  },
  {
    id: "item3",
    image: "/img/hero3.png",
    alt: "gedung_etm_3",
    title: "LAYANAN TERBAIK DENGAN TEKNOLOGI TERKINI, #EKATUNGGAL",
    button: {
      label: "TANYA VIKA",
      link: "https://wa.me/085788837057",
    },
  },
];

export default function SliderComponent() {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 15000); // change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  // Handle button click without scroll
  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="leading-0">
      <div className="relative w-full h-[82vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              width={1920}
              height={849}
              className="w-full h-full object-cover"
            />
            <div className="content w-full md:w-[50%] text-[var(--colorWhite)] font-[montserrat] font-bold absolute top-[45%] left-[6%] z-20">
              <h2 className="text-2xl leading-7">{slide.title}</h2>
              <a
                href={slide.button.link}
                className="wa mt-[0.5vw] p-[0.6vw] flex justify-center items-center bg-[var(--colorYellow)] w-[7.6rem] h-[2rem] rounded-2xl uppercase text-[0.7rem] text-black"
              >
                <div className="button-text p-1">
                  {slide.button.label.split(" ")[0]}{" "}
                  <span className="text-[var(--colorRed)]">
                    {slide.button.label.split(" ")[1]}
                  </span>
                </div>
                <Image
                  src="/img/wa.png"
                  width={35}
                  height={34}
                  alt="logo_wa"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        ))}

        {/* Dots Navigation */}
        <div className="absolute bottom-5 flex w-full justify-center z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-5 h-1 mx-1 rounded-sm transition-all duration-300 ${
                index === current
                  ? "bg-[var(--colorWhite)]"
                  : "bg-[var(--colorWhite)] opacity-50"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Floating WA Button */}
      <div className="fixed h-25 bottom-20 right-4 z-50 hidden md:flex flex-col">
        <a href="https://wa.me/085788837057">
          <img src="/img/floating-icon.png" alt="tanya_vika" />
        </a>
      </div>

      {/* Red Bottom Section */}
      <section className="h-[11vh] flex bg-[var(--colorRed)]">
        <div className="flex w-full items-center justify-center text-base font-bold text-white font-[montserrat]">
          BEKERJA DAN MELAYANI DENGAN SEJUTA HATI
        </div>
      </section>
    </section>
  );
}

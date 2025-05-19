"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    id: "item1",
    image: "/img/hero.png",
    alt: "gedung_etm",
    title: "APAPUN KEBUTUHANMU, SOLUSINYA, ",
    hashtag: "#EKATUNGGAL",
    button: {
      label: "TANYA VIKA",
      link: "https://wa.me/085788837057",
    },
  },
  {
    id: "item2",
    image: "/img/hero2.png",
    alt: "gedung_etm_2",
    title: "SOLUSI CEPAT UNTUK KEBUTUHAN INDUSTRI, ",
    hashtag: "#EKATUNGGAL",
    button: {
      label: "TANYA VIKA",
      link: "https://wa.me/085788837057",
    },
  },
  {
    id: "item3",
    image: "/img/hero3.png",
    alt: "gedung_etm_3",
    title: "LAYANAN TERBAIK DENGAN TEKNOLOGI TERKINI, ",
    hashtag: "#EKATUNGGAL",
    button: {
      label: "TANYA VIKA",
      link: "https://wa.me/085788837057",
    },
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.07,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // reverse order
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
};

export default function SliderComponent() {
  const [current, setCurrent] = useState(0);
  const [animatedKey, setAnimatedKey] = useState(0);

  // Auto slide every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  // Reset animation when slide changes
  useEffect(() => {
    setAnimatedKey((prev) => prev + 1);
  }, [current]);

  // Also reset animation every 5 seconds (loop on same slide)
  useEffect(() => {
    const resetInterval = setInterval(() => {
      setAnimatedKey((prev) => prev + 1);
    }, 5000); // reset every 5s
    return () => clearInterval(resetInterval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="leading-0 ">
      <div className="relative w-full h-[82vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <motion.img
              key={slide.id}
              src={slide.image}
              alt={slide.alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
            />

            <div className="content w-[90%] md:w-[50%] 2xl:w-[45%] text-[var(--colorWhite)] font-[montserrat] font-bold absolute top-[45%] left-[6%] z-20">
              <h2 className="text-lg md:text-3xl 2xl:text-4xl leading-6 md:leading-9 flex flex-wrap items-center">
                {slide.title}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={animatedKey}
                    className="flex ml-5"
                    variants={containerVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {slide.hashtag.split("").map((char, i) => (
                      <motion.span key={i} variants={letterVariant}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </h2>

              <Link
                href={slide.button.link}
                className="wa mt-1 p-2 flex justify-center items-center bg-[var(--colorYellow)] w-30 md:w-35 h-10 md:h-11 rounded-2xl uppercase text-[0.7rem] md:text-sm text-black"
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
              </Link>
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
      <div className="fixed bottom-8 md:bottom-16 2xl:bottom-23 right-4 z-50 md:flex flex-col">
        <Link href="https://wa.me/085788837057">
          <Image
            src="/img/floating-icon.png"
            alt="tanya_vika"
            width={205}
            height={205}
            className="h-20 w-auto md:h-28"
          />
        </Link>
      </div>

      {/* Red Bottom Section */}
      <section className="h-10 md:h-16 2xl:h-25 flex bg-[var(--colorRed)]">
        <div className="flex w-full items-center justify-center content-center text-sm md:text-base 2xl:text-xl font-bold text-white font-[montserrat]">
          BEKERJA DAN MELAYANI DENGAN SEJUTA HATI
        </div>
      </section>
    </section>
  );
}

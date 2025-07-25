"use client";

import React from "react";
import Image from "next/image";
import FloatingIconComponent from "../FloatingIconComponent";
import { motion } from "framer-motion";

const HeroComponent = () => {
  return (
    <main>
      <div className="relative">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute z-10 top-0 p-4 md:top-1/2 md:-translate-y-1/2 md:left-10 lg:left-30 w-65 sm:w-120 lg:w-145 md:p-0 font-[montserrat] text-black"
        >
          <h1 className="font-bold text-md sm:text-3xl lg:text-5xl md:mb-4">
            Tentang <span className="text-[var(--colorRed)]">EKATUNGGAL</span>
          </h1>
          <p className="text-xs sm:text-lg lg:text-2xl font-medium text-justify md:leading-8 lg:leading-9">
            Ekatunggal adalah perusahaan distribusi yang menyediakan material berkualitas tinggi untuk industri springbed dan sofa, serta furniture. <br />
            Dengan pengalaman lebih dari 25 tahun, Ekatunggal dikenal sebagai mitra terpercaya di bidangnya, didukung jaringan distribusi luas dan layanan cepat di seluruh Indonesia.
          </p>
        </motion.div>

        {/* Logo ETM */}
        <Image
          src="/img/logo_etm.png"
          alt="logoetm"
          width={1000}
          height={1000}
          className="absolute top-10 right-5 md:top-1/2 md:-translate-y-1/2 lg:translate-x-1/2 lg:right-70 w-30 sm:w-60 lg:w-80 h-auto"
        />

        {/* Background Hero Image */}
        <Image
          src="/img/heroTentangKami.png"
          width={1920}
          height={849}
          alt=""
          className="object-cover w-full h-60 sm:h-auto lg:h-[95vh]"
        />
      </div>

      <FloatingIconComponent />
    </main>
  );
};

export default HeroComponent;

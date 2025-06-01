import React from "react";
import Image from "next/image";
import FloatingIconComponent from "../FloatingIconComponent";

const HeroComponent = () => {
  return (
    <main className="">
      <div className="relative">
        <div className="absolute z-10 top-0 p-4 md:top-1/2 md:-translate-y-1/2 md:left-30 w-65 md:w-145 md:p-0 font-[montserrat] text-black">
          <h1 className="font-bold text-md md:text-5xl md:mb-4">
            Tentang <span className="text-[var(--colorRed)]">EKATUNGGAL</span>
          </h1>
          <p className="text-xs md:text-2xl font-medium text-justify md:leading-8">
            Ekatunggal adalah perusahaan distribusi yang menyediakan bahan baku
            berkualitas tinggi untuk industri springbed dan sofa, serta produk
            jadi. <br />
            Dengan pengalaman lebih dari 25 tahun, Ekatunggal dikenal sebagai
            mitra terpercaya di bidangnya, didukung jaringan distribusi luas dan
            layanan cepat di seluruh Indonesia.
          </p>
        </div>
        <Image
          src="/img/logo_etm.png"
          alt="logoetm"
          width={1000}
          height={1000}
          className="absolute top-10 right-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2 md:right-70 w-30 md:w-80 h-auto"
        />
        <Image
          src="/img/heroTentangKami.png"
          width={1920}
          height={849}
          alt=""
          className=" object-cover w-full h-auto md:h-[95vh]"
        />
      </div>

      {/* <div className="">
        <Image
          src="/img/hero.png"
          width={1920}
          height={849}
          alt=""
          className="object-cover h-120 w-[90%] md:h-auto md:w-6xl border border-black mx-auto rounded-2xl"
        />
      </div> */}

      <FloatingIconComponent />
    </main>
  );
};

export default HeroComponent;

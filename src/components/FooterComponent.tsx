import React from "react";
import Image from "next/image";
import Link from "next/link";

export const FooterComponent = () => {
  return (
    <section className="footer">
      <div className="relative text mx-auto container flex flex-col md:flex-row w-full font-bold md:-mb-10 gap-y-5 text-[var(--colorBlack)]">
        {/* Garis horizontal abu */}
        <div className="absolute md:left-0 -top-2 md:-top-5 h-[0.2] w-[90vw] md:w-full bg-gray-300" />
        <Image
          src="/img/logo_etm.png"
          width={75}
          height={75}
          alt="logo_etm"
          className="mx-8 w-10 md:w-32 h-10 md:h-32"
        />
        {/* garis vertical abu */}
        <div className="absolute hidden md:block md:left-115 md:top-6 h-28 w-[1px] ml-0 bg-[var(--colorGrey)] opacity-25" />

        <div className="flex-1 w-full">
          <h4 className="text-start mx-5 mb-2 text-md 2xl:text-xl">
            Hubungi Kami
          </h4>
          <Link href="#" className="flex my-2 items-center mx-4">
            <Image
              src="/icons/footer/telepon.png"
              width={20}
              height={20}
              alt="telepon"
              className="mr-1 h-4 md:h-5 w-auto"
            />
            <p className="text-xs">0828111115355</p>
          </Link>
          <Link href="#" className="flex my-2 items-center mx-4 ">
            <Image
              src="/icons/footer/email.png"
              width={20}
              height={20}
              alt="email"
              className="mr-1 h-4 md:h-5 w-auto"
            />
            <p className="text-xs">ekatunggalofficial@gmail.com</p>
          </Link>
        </div>
        <div className="flex-1 w-full">
          <h4 className="text-start mx-5 mb-2 text-md 2xl:text-xl">
            Media Sosial
          </h4>
          <Link href="#" className="flex my-2 items-center mx-4">
            <Image
              src="/icons/footer/ig.png"
              width={1600}
              height={1600}
              alt="ig"
              className="mr-1 h-4 md:h-5 w-auto"
            />
            <p className="text-xs">ekatunggaltunasmandiri</p>
          </Link>
          <Link href="#" className="flex my-2 items-center mx-4">
            <Image
              src="/icons/footer/ig.png"
              width={1600}
              height={1600}
              alt="ig"
              className="mr-1 h-4 md:h-5 w-auto"
            />
            <p className="text-xs">ekatunggalofficial</p>
          </Link>
          <Link href="#" className="flex my-2 items-center mx-4">
            <Image
              src="/icons/footer/fb.png"
              width={1600}
              height={1600}
              alt="fb"
              className="mr-1 h-4 md:h-5 w-auto"
            />
            <p className="text-xs">Ekatunggal Tunas Mandiri</p>
          </Link>
          <Link href="#" className="flex my-2 items-center mx-4">
            <Image
              src="/icons/footer/tiktok.png"
              width={1600}
              height={1600}
              alt="tiktok"
              className="mr-1 h-4 md:h-5 w-auto"
            />
            <p className="text-xs">ekatunggal_official</p>
          </Link>
        </div>
        <div className="flex-2 relative h-50 flex justify-start flex-col mx-4 md:mx-0">
          {/* Garis horizontal kuning bawah md:atas */}
          <div className="absolute md:left-0 -top-2 md:-top-0 h-1 w-[90vw] md:w-[53%] ml-0 bg-[var(--colorYellow)]" />
          <h2 className="font-[montserrat] text-md md:text-2xl my-1 md:my-2 ">
            Informasi Seputar Karir{" "}
            <span className="text-[var(--colorRed)]">Ekatunggal</span>
          </h2>
          <button className="p-1 w-20 md:w-25 text-xs md:text-sm bg-[var(--colorYellow)] rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="text-center mt-16 md:mt-5 font-bold text-[8px] md:text-xs text-[var(--colorBlack)]">
        © ETM GROUP. All Rights Reserved PT. Ekatunggal Tunas Mandiri
      </div>
    </section>
  );
};

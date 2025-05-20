import React from "react";
import Image from "next/image";

export const FooterComponent = () => {
  return (
    <section className="footer ">
      <div className="relative text mx-auto container flex flex-col md:flex-row w-full font-bold -mb-10 gap-y-5 text-[var(--colorBlack)]">
        {/* <div className="flex-1 w-full">
          <h4 className="text-center mb-2 text-lg 2xl:text-xl">Kantor Pusat</h4>
          <p className="text-center md:text-start">
          Jl. Pahlawan No. 29A RT. 003/RW. 005, Ds. Sanja, Kec. Citeureup,
          Kab. Bogor, Jawa Barat 16810
          </p>
          </div> */}
        <Image
          src="/img/logo_etm.png"
          width={75}
          height={75}
          alt="logo_etm"
          className="mx-8 w-10 md:w-32 h-10 md:h-32"
        />
        {/* garis vertical abu */}
        <div className="absolute hidden md:block md:left-123 md:top-6 h-28 w-[1px] ml-0 bg-[var(--colorGrey)] opacity-25" />

        <div className="flex-1 w-full">
          <h4 className="text-start mx-5 mb-2 text-lg 2xl:text-xl">
            Hubungi Kami
          </h4>
          <div className="flex my-2 items-center mx-4">
            <Image
              src="/img/wa.png"
              width={26}
              height={26}
              alt="wa"
              className="ml-1 md:ml-0.5 mr-1.5 h-5 w-auto md:h-6"
            />
            <p>0828111115365</p>
          </div>
          <div className="flex my-2 items-center mx-4 ">
            <Image
              src="/img/email.png"
              width={26}
              height={26}
              alt="email"
              className="mr-1 h-6 w-auto md:h-full"
            />
            <p>ekatunggalofficial@gmail.com</p>
          </div>
        </div>
        <div className="flex-1 w-full">
          <h4 className="text-start mx-5 mb-2 text-lg 2xl:text-xl">
            Media Sosial
          </h4>
          <div className="flex my-2 items-center mx-4">
            <Image
              src="/img/email.png"
              width={26}
              height={26}
              alt="email"
              className="mr-1"
            />
            <p>ekatunggaltunasmandiri</p>
          </div>
          <div className="flex my-2 items-center mx-4">
            <Image
              src="/img/email.png"
              width={26}
              height={26}
              alt="email"
              className="mr-1"
            />
            <p>ekatunggalofficial</p>
          </div>
          <div className="flex my-2 items-center mx-4">
            <Image
              src="/img/email.png"
              width={26}
              height={26}
              alt="email"
              className="mr-1"
            />
            <p>Ekatunggal Tunas Mandiri</p>
          </div>
          <div className="flex my-2 items-center mx-4">
            <Image
              src="/img/email.png"
              width={26}
              height={26}
              alt="email"
              className="mr-1"
            />
            <p>ekatunggal_official</p>
          </div>
        </div>
        <div className="flex-2 relative h-50 flex justify-start flex-col mx-4 md:mx-0">
          {/* Garis horizontal kuning bawah md:atas */}
          <div className="absolute md:left-0 -top-2 md:-top-0 h-1 w-[90vw] md:w-[75%] ml-0 bg-[var(--colorYellow)]" />
          <h2 className="font-[montserrat] text-md md:text-2xl my-1 md:my-2 ">
            Informasi Seputar Karir Ekatunggal
          </h2>
          <button className="p-1 w-20  md:w-25 text-xs md:text-sm bg-[var(--colorYellow)] rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="text-center mt-16 md:mt-0 font-bold text-[10px] md:text-sm text-[var(--colorBlack)]">
        © ETM GROUP. All Rights Reserved PT. Ekatunggal Tunas Mandiri
      </div>
    </section>
  );
};

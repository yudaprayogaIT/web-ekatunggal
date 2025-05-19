import React from "react";
import Image from "next/image";

export const FooterComponent = () => {
  return (
    <section className="footer flex flex-col">
      <Image
        src="/img/logo_etm.png"
        width={75}
        height={75}
        alt="logo_etm"
        className="ml-8 w-10 md:w-12 h-auto -mb-8"
      />
      <div className="text mx-auto container flex flex-col md:flex-row w-full font-bold -mb-10 gap-y-5 text-[var(--colorBlack)]">
        {/* <div className="flex-1 w-full">
          <h4 className="text-center mb-2 text-lg 2xl:text-xl">Kantor Pusat</h4>
          <p className="text-center md:text-start">
            Jl. Pahlawan No. 29A RT. 003/RW. 005, Ds. Sanja, Kec. Citeureup,
            Kab. Bogor, Jawa Barat 16810
          </p>
        </div> */}
        <div className="flex-1 w-full">
          <h4 className="text-center mb-2 text-lg 2xl:text-xl">Hubungi Kami</h4>
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
          <h4 className="text-center mb-2 text-lg 2xl:text-xl">Media Sosial</h4>
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
        <div className="flex-1 my-auto relative h-50 flex justify-center flex-col mx-4 md:mx-0">
          {/* Garis horizontal kuning bawah md:atas */}
          <div className="absolute md:left-0 -top-2 md:top-14 h-1 w-[100vw] md:w-[75%] ml-0 bg-[var(--colorYellow)]" />
          <h2 className="font-[montserrat] text-md md:text-2xl my-1 md:my-0 ">
            Informasi Seputar Karir Ekatunggal
          </h2>
          <button className="p-1 w-20 md:w-25 text-xs md:text-sm bg-[var(--colorYellow)] rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="mx-auto mt-4 md:mt-0 font-bold text-[10px] md:text-sm text-[var(--colorBlack)]">
        © ETM GROUP. All Rights Reserved PT. Ekatunggal Tunas Mandiri
      </div>
    </section>
  );
};

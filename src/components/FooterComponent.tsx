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
        className="ml-8 w-12 h-auto -mb-8"
      />
      <div className="text container mx-auto flex flex-row w-full font-bold -mb-10">
        <div className="flex-1">
          <h4 className="text-center mb-2">Kantor Pusat</h4>
          <p>
            Jl. Pahlawan No. 29A RT. 003/RW. 005, Ds. Sanja, Kec. Citeureup,
            Kab. Bogor, Jawa Barat 16810
          </p>
        </div>
        <div className="flex-1">
          <h4 className="text-center mb-2">Hubungi Kami</h4>
          <div className="flex my-2">
            <Image
              src="/img/wa.png"
              width={26}
              height={26}
              alt="wa"
              className="mr-1"
            />
            <p>0828111115365</p>
          </div>
          <div className="flex my-2">
            <Image
              src="/img/email.png"
              width={26}
              height={26}
              alt="email"
              className="mr-1"
            />
            <p>ekatunggalofficial@gmail.com</p>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-center mb-2">Media Sosial</h4>
          <div className="flex my-2">
            <Image
              src="/img/email.png"
              width={26}
              height={26}
              alt="email"
              className="mr-1"
            />
            <p>ekatunggaltunasmandiri</p>
          </div>
          <div className="flex my-2">
            <Image
              src="/img/email.png"
              width={26}
              height={26}
              alt="email"
              className="mr-1"
            />
            <p>ekatunggalofficial</p>
          </div>
          <div className="flex my-2">
            <Image
              src="/img/email.png"
              width={26}
              height={26}
              alt="email"
              className="mr-1"
            />
            <p>Ekatunggal Tunas Mandiri</p>
          </div>
          <div className="flex my-2">
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
        <div className="flex-2 my-auto relative h-50 flex justify-center flex-col">
          {/* Garis horizontal kuning atas */}
          <div className="absolute left-0 top-14  h-1 w-[75%] bg-[var(--colorYellow)]" />
          <h2 className="font-[montserrat] text-2xl">
            Informasi Seputar Karir Ekatunggal
          </h2>
          <button className="p-1 w-25 bg-[var(--colorYellow)] rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="mx-auto font-bold text-sm">
        © ETM GROUP. All Rights Reserved PT. Ekatunggal Tunas Mandiri
      </div>
    </section>
  );
};

import React from "react";
import Image from "next/image";

export const BannerComponent = () => {
  return (
    <section className="my-6 h-20 md:h-70 w-full rounded-full bg-[var(--colorRed)] flex">
      <div className="">
        <Image
          src="/img/character.png"
          width={340}
          height={410}
          className="h-20 md:h-70 w-auto pl-5 md:pl-45 pb-[0.8px]"
          alt="character_etm"
        ></Image>
      </div>
      <div className="text flex justify-center flex-1 flex-col md:px-10">
        <div className="title flex flex-row">
          <h2 className="uppercase font-[montserrat] font-bold text-base md:text-4xl text-[var(--colorWhite)]">
            tanya <span className="text-[var(--colorYellow)]">Vika</span>
          </h2>
          <Image
            src="/img/wa.png"
            width={76}
            height={71}
            className="w-auto h-5 md:h-10 pl-2 invert-[100%]"
            alt="logo_wa"
          />
        </div>
        <div className="body block text-xs md:text-2xl font-bold text-[var(--colorWhite)]">
          <p>
            Siap membantu terkait berbagai informasi produk{" "}
            <span className="text-[var(--colorYellow)]">EKATUNGGAL</span>
          </p>
        </div>
      </div>
    </section>
  );
};

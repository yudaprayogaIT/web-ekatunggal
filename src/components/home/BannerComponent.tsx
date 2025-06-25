import React from "react";
import Image from "next/image";

export const BannerComponent = () => {
  return (
    <section className="my-5 md:my-10 h-15 md:h-48 w-full bg-[linear-gradient(90deg,_#ffffff_0%,_#f7eded_6%,_#dc8b8d_16%,_#bc1f24_20%,_#bc1f24_100%)] md:bg-[linear-gradient(90deg,_#ffffff_0%,_#f7eded_10%,_#dc8b8d_15%,_#bc1f24_25%,_#bc1f24_100%)] flex">
      <div>
        <Image
          src="/img/home/character.png"
          width={340}
          height={410}
          className="h-20 md:h-60 w-auto pl-5 -mt-5 md:pl-53 md:-mt-12 pb-[0.8px]"
          alt="character_etm"
        ></Image>
      </div>
      <div className="text flex justify-center flex-1 flex-col md:px-10">
        <div className="title flex flex-row">
          <h2 className="uppercase font-[montserrat] font-bold text-sm md:text-4xl text-[var(--colorWhite)]">
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
        <div className="body block text-[8px] md:text-2xl font-bold text-[var(--colorWhite)]">
          <p>
            Siap membantu terkait berbagai informasi produk{" "}
            <span className="text-[var(--colorYellow)]">EKATUNGGAL</span>
          </p>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import Image from "next/image";

export const KeunggulanComponent = () => {
  return (
    <section className="my-14">
      <h2 className="uppercase font-[montserrat] text-3xl font-bold text-center">
        Keunggulan <span className="text-[var(--colorRed)]">Ekatunggal</span>
      </h2>
      <div className="container mx-auto flex justify-center gap-x-10 my-8">
        {/* <div className="card bg-base-100 w-48 shadow-xl border border-transparent rounded-lg">
          <figure>
            <Image
              src="/img/keunggulan/mutu.png"
              alt="mutu"
              width="133"
              height="133"
              className="w-18"
            />
          </figure>
          <div className="card-body text-center -mt-5">
            <h2 className="card-title mx-auto text-base font-[montserrat] uppercase">
              Mutu
            </h2>
            <p className="text-sm mt-2 -mx-3">
              Setiap Produk Terjaga Kualitasnya
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-48 shadow-xl border border-transparent rounded-lg">
          <figure>
            <Image
              src="/img/keunggulan/murah.png"
              alt="mutu"
              width="133"
              height="133"
              className="w-18"
            />
          </figure>
          <div className="card-body text-center -mt-5">
            <h2 className="card-title mx-auto text-base font-[montserrat] uppercase">
              Murah
            </h2>
            <p className="text-sm mt-2 -mx-3">
              Menawarkan Produk dengan Harga Terbaik
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-48 shadow-xl border border-transparent rounded-lg">
          <figure>
            <Image
              src="/img/keunggulan/non-stop.png"
              alt="mutu"
              width="133"
              height="133"
              className="w-18"
            />
          </figure>
          <div className="card-body text-center -mt-5">
            <h2 className="card-title mx-auto text-base font-[montserrat] uppercase">
              Non stop
            </h2>
            <p className="text-sm mt-2 -mx-3">
              Pelayanan 6 Hari Dalam Seminggu
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-52 shadow-xl border border-transparent rounded-lg">
          <figure>
            <Image
              src="/img/keunggulan/terlengkap.png"
              alt="mutu"
              width="133"
              height="133"
              className="w-18"
            />
          </figure>
          <div className="card-body text-center -mt-4">
            <h2 className="card-title mx-auto text-base font-[montserrat] uppercase">
              terlengkap
            </h2>
            <p className="text-sm mt-2 -mx-3">
              Produk Selalu Lengkap Sesuai Kebutuhan Konsumen
            </p>
          </div>
        </div> */}

        {/* <div className="card bg-base-100 w-48 shadow-xl border border-transparent rounded-lg">
          <figure>
            <Image
              src="/img/keunggulan/layanan-cs.png"
              alt="mutu"
              width="133"
              height="133"
              className="w-18"
            />
          </figure>
          <div className="card-body text-center -mt-5">
            <h2 className="card-title mx-auto text-base font-[montserrat] uppercase">
              Layanan cs
            </h2>
            <p className="text-sm mt-2 -mx-3">Sales Aktif dan Komunikatif</p>
          </div>
        </div> */}

        <div className="card group bg-base-100 w-48 shadow-lg hover:shadow-2xl border border-transparent rounded-lg transition-all duration-300">
          <figure className="relative">
            {/* Normal image */}
            <Image
              src="/img/keunggulan/mutu.png"
              alt="mutu"
              width={133}
              height={133}
              className="w-18 block group-hover:hidden transition-all duration-600"
            />
            {/* Hover image */}
            <Image
              src="/img/keunggulan/mutu_hover.png"
              alt="mutu_hover"
              width={133}
              height={133}
              className="w-18 mt-1 hidden group-hover:block transition-all duration-600"
            />
          </figure>
          <div className="card-body text-center -mt-5">
            <h2 className="card-title mx-auto text-base font-[montserrat] uppercase transition-all duration-300 group-hover:text-[var(--colorRed)]">
              mutu
            </h2>
            <p className="text-sm mt-2 -mx-3 font-bold text-[var(--colorGrey)] transition-all duration-300 group-hover:text-[var(--colorBlack)]">
              Setiap Produk Terjaga Kualitasnya
            </p>
          </div>
        </div>

        <div className="card group bg-base-100 w-48 shadow-lg hover:shadow-2xl border border-transparent rounded-lg transition-all duration-300">
          <figure className="relative">
            {/* Normal image */}
            <Image
              src="/img/keunggulan/murah.png"
              alt="murah"
              width={133}
              height={133}
              className="w-18 block group-hover:hidden transition-all duration-600"
            />
            {/* Hover image */}
            <Image
              src="/img/keunggulan/murah_hover.png"
              alt="murah_hover"
              width={133}
              height={133}
              className="w-18 mt-1 hidden group-hover:block transition-all duration-600"
            />
          </figure>
          <div className="card-body text-center -mt-5">
            <h2 className="card-title mx-auto text-base font-[montserrat] uppercase transition-all duration-300 group-hover:text-[var(--colorRed)]">
              murah
            </h2>
            <p className="text-sm mt-2 -mx-3 font-bold text-[var(--colorGrey)] transition-all duration-300 group-hover:text-[var(--colorBlack)]">
              Menawarkan Produk dengan Harga Terbaik
            </p>
          </div>
        </div>

        <div className="card group bg-base-100 w-48 shadow-lg hover:shadow-2xl border border-transparent rounded-lg transition-all duration-300">
          <figure className="relative">
            {/* Normal image */}
            <Image
              src="/img/keunggulan/non-stop.png"
              alt="non-stop"
              width={133}
              height={133}
              className="w-18 block group-hover:hidden transition-all duration-600"
            />
            {/* Hover image */}
            <Image
              src="/img/keunggulan/non-stop_hover.png"
              alt="non-stop_hover"
              width={133}
              height={133}
              className="w-18 mt-1 hidden group-hover:block transition-all duration-600"
            />
          </figure>
          <div className="card-body text-center -mt-5">
            <h2 className="card-title mx-auto text-base font-[montserrat] uppercase transition-all duration-300 group-hover:text-[var(--colorRed)]">
              Non stop
            </h2>
            <p className="text-sm mt-2 -mx-3 font-bold text-[var(--colorGrey)] transition-all duration-300 group-hover:text-[var(--colorBlack)]">
              Pelayanan 6 Hari Dalam Seminggu
            </p>
          </div>
        </div>

        <div className="card group bg-base-100 w-48 shadow-lg hover:shadow-2xl border border-transparent rounded-lg transition-all duration-300">
          <figure className="relative">
            {/* Normal image */}
            <Image
              src="/img/keunggulan/terlengkap.png"
              alt="terlengkap"
              width={133}
              height={133}
              className="w-18 block group-hover:hidden transition-all duration-600 h-18"
            />
            {/* Hover image */}
            <Image
              src="/img/keunggulan/terlengkap_hover.png"
              alt="terlengkap_hover"
              width={133}
              height={133}
              className="w-18 mt-1 hidden group-hover:block transition-all duration-600 h-17"
            />
          </figure>
          <div className="card-body text-center -mt-5">
            <h2 className="card-title mx-auto text-base font-[montserrat] uppercase transition-all duration-300 group-hover:text-[var(--colorRed)]">
              terlengkap
            </h2>
            <p className="text-sm mt-1 -mx-3 font-bold text-[var(--colorGrey)] transition-all duration-300 group-hover:text-[var(--colorBlack)]">
              Produk Selalu Lengkap Sesuai Kebutuhan Konsumen
            </p>
          </div>
        </div>

        <div className="card group bg-base-100 w-48 shadow-lg hover:shadow-2xl border border-transparent rounded-lg transition-all duration-300">
          <figure className="relative">
            {/* Normal image */}
            <Image
              src="/img/keunggulan/layanan-cs.png"
              alt="layanan-cs"
              width={133}
              height={133}
              className="w-18 block group-hover:hidden transition-all duration-600"
            />
            {/* Hover image */}
            <Image
              src="/img/keunggulan/layanan-cs_hover.png"
              alt="layanan-cs_hover"
              width={133}
              height={133}
              className="w-18 mt-1 hidden group-hover:block transition-all duration-600"
            />
          </figure>
          <div className="card-body text-center -mt-5">
            <h2 className="card-title mx-auto text-base font-[montserrat] uppercase transition-all duration-300 group-hover:text-[var(--colorRed)]">
              Layanan cs
            </h2>
            <p className="text-sm mt-2 -mx-3 font-bold text-[var(--colorGrey)] transition-all duration-300 group-hover:text-[var(--colorBlack)]">
              Sales Aktif dan Komunikatif
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

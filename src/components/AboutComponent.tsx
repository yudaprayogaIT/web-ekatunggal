import React from "react";
import Image from "next/image";

export const AboutComponent = () => {
  return (
    <section>
      <div className="relative container max-w-full my-14 mx-auto flex flex-col md:flex-row items-start gap-8 px-4 md:px-12">
        {/* Kiri: Teks */}
        <div className="relative flex-1 mt-4 space-y-8 justify-items-end">
          {/* Garis vertikal kuning kiri atas */}
          <div className="absolute left-14.5 top-5 h-[32%] w-1 bg-[var(--colorYellow)]" />

          {/* Teks atas */}
          <div className="pl-4 w-[90%]">
            <h2 className="uppercase text-[var(--colorRed)] font-[montserrat] text-2xl font-bold mb-2">
              Ekatunggal
            </h2>
            <p className="text-[var(--colorGrey)] text-lg leading-7">
              Perusahaan distributor bahan baku material springbed dan sofa,
              serta barang jadi. Didirikan oleh Alm. Bapak Gapo Suseno pada
              tahun 1997. Ekatunggal berkomitmen untuk menghadirkan produk dan
              layanan berkualitas tinggi yang memenuhi kebutuhan masyarakat
              Indonesia.
            </p>
          </div>

          {/* Teks bawah */}
          <div className="relative pr-6 text-right w-[90%]">
            <h2 className="uppercase text-[var(--colorBlack)] font-[montserrat] text-2xl font-bold mb-2">
              Lebih dari 2 dekade berdiri
            </h2>
            <p className="text-lg leading-7">
              Ekatunggal terus berinovasi untuk memberikan solusi terbaik bagi
              pelanggan, sekaligus membangun hubungan jangka panjang berdasarkan
              kepercayaan, integritas, dan profesionalisme. Didukung oleh tim
              yang berpengalaman dan jaringan yang luas, Ekatunggal siap menjadi
              mitra terpercaya untuk masa depan yang lebih baik.
            </p>
            {/* Garis vertikal kuning kanan bawah */}
            <div className="absolute right-0 bottom-4 h-[80%] w-1 bg-[var(--colorYellow)]" />
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="relative flex-1 w-full">
          <Image
            src="/img/about.png"
            width={1920}
            height={800}
            alt="lobby"
            className="h-auto w-full max-h-[70vh] object-cover"
          />
        </div>
      </div>
      {/* Garis horizontal kuning di bawah gambar */}
      <div className="-mt-10 mx-auto w-[40%] h-1 bg-[var(--colorYellow)]" />
    </section>
  );
};

import React from "react";
import Image from "next/image";

export const AboutComponent = () => {
  return (
    <section>
      <div className="container max-w-full mx-auto flex flex-col md:flex-row items-start ">
        {/* Kiri: Teks */}
        <div className="left flex-1 justify-items-end items-start h-full border bg-info">
          <div className="left-top flex flex-col justify-end me-20 h-[50%] w-[70%] border bg-warning pb-10">
            <h2 className="uppercase color-red font-[montserrat] text-3xl font-bold mb-2">
              Ekatunggal
            </h2>
            <p className="color-grey text-xl leading-[30px]">
              Perusahaan distributor bahan baku material springbed dan sofa,
              serta barang jadi. Didirikan oleh Alm. Bapak Gapo Suseno pada
              tahun 1997. Ekatunggal berkomitmen untuk menghadirkan produk dan
              layanan berkualitas tinggi yang memenuhi kebutuhan masyarakat
              Indonesia.
            </p>
          </div>
          <div className="left-top flex flex-1 flex-col justify-start me-20 h-[50%] w-[70%] text-right border bg-green-500 pt-10">
            <h2 className="uppercase color-red font-[montserrat] text-3xl font-bold mb-2">
              Lebih dari 2 dekade berdiri
            </h2>
            <p className="text-xl leading-[30px]">
              Ekatunggal terus berinovasi untuk memberikan solusi terbaik bagi
              pelanggan, sekaligus membangun hubungan jangka panjang berdasarkan
              kepercayaan, integritas, dan profesionalisme. Didukung oleh tim
              yang berpengalaman dan jaringan yang luas, Ekatunggal siap menjadi
              mitra terpercaya untuk masa depan yang lebih baik.
            </p>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="right flex flex-1 border h-full items-center">
          <Image src="/img/about.png" width={1920} height={800} alt="" />
        </div>
      </div>
    </section>
  );
};

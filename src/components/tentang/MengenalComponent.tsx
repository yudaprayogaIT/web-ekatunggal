import { section } from "framer-motion/client";
import React from "react";

const MengenalComponent = () => {
  return (
    <section className="my-15 flex items-center gap-x-40">
      <div className="flex-1 bg-[var(--colorChilli)] rounded-r-xl uppercase text-2xl text-[var(--colorWhite)] p-4">
        Mengenal{" "}
        <span className="font-[montserrat] font-bold text-3xl">Ekatunggal</span>
      </div>
      <div className="flex-3 bg-[var(--colorYellow)] rounded-l-3xl text-xl p-8 text-justify">
        <p className="mb-4">
          <span className="font-bold">Ekatunggal</span> adalah perusahaan
          distribusi yang berfokus pada penyediaan bahan baku berkualitas tinggi
          untuk industri springbed dan sofa di Indonesia. Selain bahan baku,{" "}
          <span className="font-bold">Ekatunggal</span> juga menyediakan
          berbagai produk jadi yang siap digunakan oleh pelanggan dari sektor
          industri maupun retail.
        </p>
        <p>
          Berdiri lebih dari 25 tahun,{" "}
          <span className="font-bold">Ekatunggal</span> telah tumbuh menjadi
          salah satu perusahaan terpercaya di bidangnya. Dengan pengalaman yang
          panjang dan jaringan distribusi yang kuat,{" "}
          <span className="font-bold">Ekatunggal</span> memiliki banyak cabang
          yang tersebar di seluruh Indonesia, yang siap melayani kebutuhan
          pelanggan secara cepat dan efisien.
        </p>
      </div>
    </section>
  );
};

export default MengenalComponent;

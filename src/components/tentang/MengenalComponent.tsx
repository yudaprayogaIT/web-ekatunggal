"use client";

import { motion } from "framer-motion";
import React from "react";

const MengenalComponent = () => {
  return (
    <section className="my-4 md:my-10 mx-5 flex flex-col md:flex-row items-center gap-x-40">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex-1 bg-[var(--colorChilli)] rounded-full md:rounded-xl uppercase text-md md:text-2xl text-[var(--colorWhite)] p-2 md:p-4"
      >
        Mengenal{" "}
        <span className="font-[montserrat] font-bold text-lg md:text-3xl">
          Ekatunggal
        </span>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex-3 w-[90%] self-center bg-[var(--colorYellow)] rounded-3xl text-sm md:text-xl p-4 md:p-5 text-justify mt-4"
      >
        <p className="mb-2 md:mb-4">
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
      </motion.div>
    </section>
  );
};

export default MengenalComponent;

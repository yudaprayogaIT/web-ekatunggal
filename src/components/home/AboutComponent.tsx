"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const AboutComponent = () => {
  const { ref: leftRef, inView: isInViewLeft } = useInView({
    threshold: 0.4,
    triggerOnce: false, // agar animasi bisa dipicu berulang
  });

  const { ref: rightRef, inView: isInViewRight } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  const controlLeft = useAnimation();
  const controlRight = useAnimation();

  useEffect(() => {
    if (isInViewLeft) {
      controlLeft.start({ opacity: 1, x: 0 });
    } else {
      controlLeft.start({ opacity: 0, x: -60 });
    }
  }, [isInViewLeft]);

  useEffect(() => {
    if (isInViewRight) {
      controlRight.start({ opacity: 1, x: 0 });
    } else {
      controlRight.start({ opacity: 0, x: 60 });
    }
  }, [isInViewRight]);

  return (
    <section className="my-10 w-full overflow-hidden">
      <div className="relative container max-w-full my-14 mx-auto flex flex-col md:flex-row items-start gap-8 px-4 md:px-12">
        {/* Kiri: Teks */}
        <div className="relative flex-1 -mt-14 md:mt-4 space-y-4 md:space-y-8">
          <div className="absolute right-0 md:left-0 top-5 h-[32%] w-1 bg-[var(--colorYellow)]" />

          {/* Teks atas: masuk dari kiri */}
          <motion.div
            ref={leftRef}
            animate={controlLeft}
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            className="px-2 md:pl-4 md:w-[90%]"
          >
            <h2 className="uppercase text-[var(--colorRed)] font-[montserrat] text-lg md:text-2xl 2xl:text-3xl font-bold mb-2">
              Ekatunggal
            </h2>
            <p className="text-[var(--colorGrey)] text-sm md:text-lg 2xl:text-2xl leading-6 2xl:leading-9">
              Perusahaan distributor bahan baku material springbed dan sofa,
              serta barang jadi. Didirikan oleh Alm. Bapak Gapo Suseno pada
              tahun 1997. Ekatunggal berkomitmen untuk menghadirkan produk dan
              layanan berkualitas tinggi yang memenuhi kebutuhan masyarakat
              Indonesia.
            </p>
          </motion.div>

          {/* Teks bawah: masuk dari kanan */}
          <motion.div
            ref={rightRef}
            animate={controlRight}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.6 }}
            className="relative px-2 md:pr-6 text-right md:w-[90%]"
          >
            <h2 className="uppercase text-[var(--colorBlack)] font-[montserrat] text-lg md:text-2xl font-bold mb-2">
              Lebih dari 2 dekade berdiri
            </h2>
            <p className="text-[var(--colorBlack)] text-sm md:text-lg 2xl:text-2xl leading-6 2xl:leading-9 ">
              Ekatunggal terus berinovasi untuk memberikan solusi terbaik bagi
              pelanggan, sekaligus membangun hubungan jangka panjang berdasarkan
              kepercayaan, integritas, dan profesionalisme. Didukung oleh tim
              yang berpengalaman dan jaringan yang luas, Ekatunggal siap menjadi
              mitra terpercaya untuk masa depan yang lebih baik.
            </p>

            <div className="absolute bottom-4 h-[80%] w-1 bg-[var(--colorYellow)] left-0 md:left-auto md:right-0" />
          </motion.div>
        </div>

        {/* Kanan: Gambar */}
        <motion.div
          className="relative flex-1 w-full -mt-16 md:mt-0 order-first md:order-last"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }} // agar bisa di-trigger ulang
        >
          <Image
            src="/img/about.png"
            width={1920}
            height={800}
            alt="lobby"
            className="h-auto w-full max-h-[70vh] object-cover"
          />
        </motion.div>
      </div>

      <div className="-mt-10 md:-mt-4 2xl:-mt-14 mx-auto w-[60%] md:w-[40%] h-1 bg-[var(--colorYellow)]" />
    </section>
  );
};

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "visi" | "misi";

const data: Record<Tab, string> = {
  visi: `Menjadi perusahaan perdagangan bahan baku springbed dan sofa,
serta bahan jadi skala nasional terlengkap dan menjadi pilihan utama pelanggan.`,
  misi: `Memberikan harga yang sangat kompetitif dan bersaing.
Memberikan pelayanan terbaik kepada pelanggan non stop selama 6 hari kerja.
Meningkatkan kepercayaan pelanggan dengan selalu menjaga kualitas produk.
Menjaga ketersediaan barang dan pengiriman tepat waktu.
Meningkatkan kesejahteraan karyawan dan kepuasan mitra bisnis.`,
};

export default function VisiMisi() {
  const [activeTab, setActiveTab] = useState<Tab>("visi");

  // // Auto-switch setiap 5 detik
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setActiveTab((prev) => (prev === "visi" ? "misi" : "visi"));
  //   }, 10000);
  //   return () => clearInterval(timer);
  // }, []);

// Auto-switch berdasarkan durasi tab saat ini
  useEffect(() => {
    const delay = activeTab === "visi" ? 7500 : 15000;
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev === "visi" ? "misi" : "visi"));
    }, delay);
    return () => clearTimeout(timer);
  }, [activeTab]);


  // Variants untuk animasi konten
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section className="mt-4 sm:mt-8 h-55 md:h-61">
      {/* Tab Buttons */}
      <div className="bg-[#fdd3007c] w-35 h-10 md:w-50 md:h-15 mx-auto rounded-3xl font-[montserrat] text-[var(--colorBlack)] font-bold uppercase text-md md:text-2xl flex items-center justify-center ">
        {(["visi", "misi"] as Tab[]).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative font-[montserrat] font-bold transition-colors duration-200 px-4 py-1 rounded-3xl cursor-pointer
                ${
                  isActive
                    ? "bg-[var(--colorYellow)] text-[var(--colorBlack)]"
                    : "bg-transparent text-gray-600 hover:text-[var(--colorBlack)]"
                }
              `}
            >
              {tab.toUpperCase()}
              {/* small underline animation */}
              {/* <motion.span
                layoutId="underline"
                className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 h-1 w-6 rounded-full bg-[var(--colorBlack)]"
                style={{ opacity: isActive ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              /> */}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="mt-4 md:mt-4 w-[95%] md:max-w-3xl mx-auto text-center font-lato text-xs sm:text-lg lg:text-xl text-[var(--colorBlack)] leading-4 md:leading-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {data[activeTab].split("\n").map((line, i) => (
              <p key={i} className="mb-2">
                {line}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

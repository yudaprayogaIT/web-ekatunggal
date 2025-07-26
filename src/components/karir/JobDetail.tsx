// // Karir Page versi Awal
// // "use client";

// // import React, { useState } from "react";
// // import Image from "next/image";
// // import { motion, AnimatePresence } from "framer-motion";
// // import type { Job } from "@/data/jobs";

// // interface JobDetailProps {
// //   job: Job;
// //   onClose: () => void;
// // }

// // // Fallback copy jika Clipboard API tidak tersedia
// // const fallbackCopy = (text: string) => {
// //   const textarea = document.createElement("textarea");
// //   textarea.value = text;
// //   textarea.style.position = "fixed";
// //   textarea.style.top = "0";
// //   textarea.style.left = "0";
// //   textarea.style.opacity = "0";
// //   document.body.appendChild(textarea);
// //   textarea.select();
// //   try {
// //     document.execCommand("copy");
// //     alert("Link disalin ke clipboard!");
// //   } catch {
// //     alert("Gagal menyalin link.");
// //   }
// //   document.body.removeChild(textarea);
// // };

// // const handleCopyLink = () => {
// //   const url = window.location.href;
// //   if (
// //     typeof navigator !== "undefined" &&
// //     navigator.clipboard &&
// //     typeof navigator.clipboard.writeText === "function"
// //   ) {
// //     navigator.clipboard
// //       .writeText(url)
// //       .then(() => alert("Link disalin ke clipboard!"))
// //       .catch(() => fallbackCopy(url));
// //   } else {
// //     fallbackCopy(url);
// //   }
// // };

// // export default function JobDetail({ job, onClose }: JobDetailProps) {
// //   const [activeTab, setActiveTab] = useState<"about" | "resp" | "qual">(
// //     "about"
// //   );

// //   return (
// //     <main className="container mx-auto p-6">
// //       {/* Header */}
// //       <div className="relative mb-6 ">
// //         <div className="relative h-60 md:h-90 w-full rounded-3xl overflow-hidden">
// //           <Image
// //             src="/img/heroKarir.png"
// //             alt="banner"
// //             layout="fill" // pakai layout fill supaya Image bisa cover container
// //             // objectFit="cover"
// //             priority
// //             className="object-cover object-[60%_30%] h-90 rounded-3xl"
// //           />
// //           {/* Gradient overlay, di atas Image */}
// //           {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-transparent to-red-400 opacity-80 z-10 rounded-3xl" /> */}
// //           {/* Title di atas gradient */}
// //           <div className="absolute bottom-4 left-6 text-white z-20">
// //             <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
// //             <p className="md:mt-1">{job.location}</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Tabs */}
// //       <div className="bg-white rounded-2xl shadow-lg p-6">
// //         <ul className="flex space-x-10 mb-4 text-center text-sm md:text-xl font-bold font-[montserrat]">
// //           {(["about", "resp", "qual"] as const).map((tab) => {
// //             const label =
// //               tab === "about"
// //                 ? "TENTANG POSISI"
// //                 : tab === "resp"
// //                 ? "TANGGUNG JAWAB"
// //                 : "KUALIFIKASI";
// //             return (
// //               <li
// //                 key={tab}
// //                 className={`cursor-pointer pb-2 ${
// //                   activeTab === tab
// //                     ? "border-b-4 border-[var(--colorChilli)] font-bold"
// //                     : "text-gray-600"
// //                 }`}
// //                 onClick={() => setActiveTab(tab)}
// //               >
// //                 {label}
// //               </li>
// //             );
// //           })}
// //         </ul>

// //         <div className="flex flex-col md:flex-row relative">
// //           <div className="min-h-[10rem] h-40 overflow-y-scroll md:flex-3 text-xs md:text-lg font-bold">
// //             <AnimatePresence mode="wait">
// //               {activeTab === "about" && (
// //                 <motion.div
// //                   key="about"
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -10 }}
// //                 >
// //                   <p>{job.about}</p>
// //                 </motion.div>
// //               )}
// //               {activeTab === "resp" && (
// //                 <motion.ul
// //                   key="resp"
// //                   className="list-disc list-inside space-y-1"
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -10 }}
// //                 >
// //                   {job.responsibilities.map((r, i) => (
// //                     <li key={i}>{r}</li>
// //                   ))}
// //                 </motion.ul>
// //               )}
// //               {activeTab === "qual" && (
// //                 <motion.ul
// //                   key="qual"
// //                   className="list-disc list-inside space-y-1"
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -10 }}
// //                 >
// //                   {job.qualifications.map((q, i) => (
// //                     <li key={i}>{q}</li>
// //                   ))}
// //                 </motion.ul>
// //               )}
// //             </AnimatePresence>
// //           </div>

// //           {/* garis vertical abu */}
// //           <div className="absolute hidden md:block md:right-110 md:-top-8 h-45 w-[1px] ml-0 bg-[var(--colorGrey)] opacity-25" />

// //           {/* Buttons */}
// //           <div className="flex flex-row md:flex-2 -mt-10 items-start justify-center h-25 md:h-45">
// //             <div className="flex items-center flex-col gap-y-2">
// //               <div className="flex space-x-4 text-md md:text-lg">
// //                 <button className="bg-yellow-500 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-2xl transition cursor-pointer">
// //                   Lamar Sekarang
// //                 </button>
// // <button
// //   onClick={onClose}
// //   className="bg-gray-200 hover:bg-gray-300 transition text-gray-800 font-bold px-6 py-3 rounded-2xl cursor-pointer"
// // >
// //   Kembali
// // </button>
// //               </div>
// //               <div className="flex items-center">
// //                 <span className="text-lg font-bold">Bagikan: </span>
// //                 <button
// //                   onClick={() =>
// //                     window.open(
// //                       `https://www.instagram.com/?url=${encodeURIComponent(
// //                         window.location.href
// //                       )}`,
// //                       "_blank"
// //                     )
// //                   }
// //                   aria-label="Share to Instagram"
// //                   className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
// //                 >
// //                   <Image
// //                     src="/icons/footer/ig.png"
// //                     alt="Instagram"
// //                     width={25}
// //                     height={25}
// //                     priority
// //                   />
// //                 </button>

// //                 <button
// //                   onClick={() =>
// //                     window.open(
// //                       `https://wa.me/?text=${encodeURIComponent(
// //                         window.location.href
// //                       )}`,
// //                       "_blank"
// //                     )
// //                   }
// //                   aria-label="Share to WhatsApp"
// //                   className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
// //                 >
// //                   <Image
// //                     src="/icons/footer/telepon.png"
// //                     alt="WhatsApp"
// //                     width={25}
// //                     height={25}
// //                     priority
// //                   />
// //                 </button>

// //                 <button
// //                   onClick={handleCopyLink}
// //                   aria-label="Copy Link"
// //                   className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
// //                 >
// //                   <Image
// //                     src="/icons/copy.png"
// //                     alt="Copy Link"
// //                     width={25}
// //                     height={25}
// //                     priority
// //                   />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Job } from "@/data/jobs";
import Link from "next/link";
// import { defaultMessage } from "@/utils/contact";

interface JobDetailProps {
  job: Job;
  onClose: () => void;
}

// Komponen Toast sederhana
function Toast({ message }: { message: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50"
    >
      {message}
    </motion.div>
  );
}

// Gmail address untuk kontak
export const gmailAddress = "hr@ekatunggal.com";
// Helper untuk URL-encode
// const encode = (str: string) => encodeURIComponent(str);
// HREF untuk mailto Gmail (subject bisa disesuaikan; body pakai pesan default)
// export const gmailHref = `mailto:${gmailAddress}?subject=${encode("Permintaan Penawaran")}&body=${encode(defaultMessage)}`;
export const gmailHref = `mailto:${gmailAddress}`;

export default function JobDetail({ job, onClose }: JobDetailProps) {
  // State untuk toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Fallback copy jika Clipboard API tidak tersedia
  const fallbackCopy = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setToastMessage("Link berhasil disalin ke clipboard!");
    } catch {
      setToastMessage("Gagal menyalin link.");
    }
    document.body.removeChild(textarea);
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      navigator.clipboard
        .writeText(url)
        .then(() => setToastMessage("Link berhasil disalin ke clipboard!"))
        .catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
  };

  // Otomatis sembunyikan toast setelah 3 detik
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  return (
    <main className="container mx-auto lg:py-6 lg:px-10 relative">
      {/* Header */}
      <div className="relative mb-6">
        <div className="relative h-60 md:h-90 w-full rounded-none sm:rounded-3xl overflow-hidden">
          <Image
            src="/img/heroKarirGradient.png"
            alt="banner"
            fill
            className="object-cover object-[60%_30%] h-90 sm:rounded-3xl"
            priority
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-5 md:left-15 uppercase font-bold text-black z-20">
            <h1 className="text-lg md:text-3xl font-[montserrat]">
              {job.title}
            </h1>
            <p className="md:mt-1 text-md md:text-2xl">{job.location}</p>
          </div>
        </div>
      </div>

      {/* Konten: Tentang, Tanggung Jawab, Kualifikasi */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 md:gap-8 text-start">
        {/* Tentang Posisi */}
        <div>
          <h2 className="font-[montserrat] uppercase underline decoration-[var(--colorChilli)] text-base md:text-xl font-bold md:mb-2">
            Tentang Posisi
          </h2>
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <p className="text-justify text-sm md:text-lg font-medium">
              {job.about}
            </p>
          </motion.div>
        </div>

        {/* Tanggung Jawab */}
        <div>
          <h2 className="font-[montserrat] uppercase underline decoration-[var(--colorChilli)] text-base md:text-xl font-bold md:mb-2">
            Tanggung Jawab
          </h2>
          <motion.ol
            key="resp"
            className="list-decimal list-inside space-y-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {job.responsibilities.map((r, i) => (
              <li
                className="text-justify text-sm md:text-lg font-medium"
                key={i}
              >
                {r}
              </li>
            ))}
          </motion.ol>
        </div>

        {/* Kualifikasi */}
        <div>
          <h2 className="font-[montserrat] uppercase underline decoration-[var(--colorChilli)] text-base md:text-xl font-bold md:mb-2">
            Kualifikasi
          </h2>
          <motion.ul
            key="qual"
            className="list-disc list-inside space-y-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {job.qualifications.map((q, i) => (
              <li
                className="text-justify text-sm md:text-lg font-medium"
                key={i}
              >
                {q}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Tombol Aksi */}
        <div className="flex items-center mt-4 gap-2">
          <Link
            href={gmailHref}
            className="font-bold font-[montserrat] text-xs md:text-sm uppercase text-black px-3 py-2 lg:px-4 lg:py-2.5 2xl:py-3 bg-[var(--colorYellow)] hover:bg-yellow-500 hover:shadow-md transition cursor-pointer rounded-lg lg:rounded-xl 2xl:rounded-2xl"
          >
            Lamar Sekarang
          </Link>

          <button
            onClick={onClose}
            className="py-2 lg:py-2.5 px-3 lg:px-5 bg-[var(--colorYellow)] hover:bg-yellow-500 transition cursor-pointer rounded-lg lg:rounded-xl 2xl:rounded-2xl"
          >
            <Image src="/icons/back.png" alt="Back" width={24} height={24}
            className="w-4 lg:w-5 2xl:w-6" />
          </button>

          <button
            onClick={handleCopyLink}
            aria-label="Copy Link"
            className="py-2 lg:py-2.5 px-3 lg:px-5 bg-[var(--colorYellow)] hover:bg-yellow-500 rounded-lg lg:rounded-xl 2xl:rounded-2xl cursor-pointer"
          >
            <Image
              src="/icons/share.png"
              alt="share"
              width={24}
              height={24}
              className="w-4 lg:w-5 2xl:w-6"
              priority
            />
          </button>
        </div>
      </div>

      {/* AnimatePresence untuk menampilkan Toast */}
      <AnimatePresence>
        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

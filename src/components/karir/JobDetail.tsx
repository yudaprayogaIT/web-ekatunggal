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

interface JobDetailProps {
  job: Job;
  onClose: () => void;
}

// Komponen Toast sederhana
function Toast({ message }: { message: string }) {
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

// Komponen tombol share modular dengan animasi
interface ShareButtonProps {
  icon: string;
  alt: string;
  label: string;
  onClick: () => void;
}
const ShareButton: React.FC<ShareButtonProps> = ({ icon, alt, label, onClick }) => (
  <motion.button
    onClick={onClick}
    className="flex flex-col items-center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <Image src={icon} alt={alt} width={40} height={40} />
    <span className="mt-1 text-sm">{label}</span>
  </motion.button>
);

export const gmailAddress = "hr@ekatunggal.com";
export const gmailHref = `mailto:${gmailAddress}`;

export default function JobDetail({ job, onClose }: JobDetailProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);

  // URL halaman saat ini
  const url = typeof window !== "undefined" ? window.location.href : "";

  // Fallback copy-to-clipboard
  const fallbackCopy = (text: string) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      setToastMessage("Link berhasil disalin ke clipboard!");
    } catch {
      setToastMessage("Gagal menyalin link.");
    }
    document.body.removeChild(ta);
  };

  // Handler copy link
  const handleCopyLink = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
  };

  // Share functions
  const shareViaWhatsApp = () =>
    window.open(
      `https://web.whatsapp.com/send?text=Lihat Lowongan ${encodeURIComponent("Posisi: " + job.title + " ini deh..." + "\n" + url)}`,
      "_blank",
      "noopener"
    );
  const shareViaEmail = () =>
    window.open(
      `mailto:?subject=${encodeURIComponent(job.title)}&body=${encodeURIComponent(url)}`,
      "_blank",
      "noopener"
    );
  const shareViaFacebook = () =>
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "noopener"
    );

  // Konfigurasi tombol share
  const shareActions: ShareButtonProps[] = [
    {
      icon: "/icons/medsos/whatsapp.png",
      alt: "WhatsApp",
      label: "WhatsApp",
      onClick: shareViaWhatsApp,
    },
    {
      icon: "/icons/medsos/email.png",
      alt: "Email",
      label: "Email",
      onClick: shareViaEmail,
    },
    {
      icon: "/icons/medsos/fb.png",
      alt: "Facebook",
      label: "Facebook",
      onClick: shareViaFacebook,
    },
    {
      icon: "/icons/share.png",
      alt: "Salin link",
      label: "Salin link",
      onClick: handleCopyLink,
    },
  ];

  // Auto-hide toast
  useEffect(() => {
    if (!toastMessage) return;
    const t = setTimeout(() => setToastMessage(null), 3000);
    return () => clearTimeout(t);
  }, [toastMessage]);

  return (
    <main className="container mx-auto lg:py-6 lg:px-10 relative">
      {/* Header */}
      <div className="relative mb-6">
        <div className="relative h-60 md:h-90 w-full sm:rounded-3xl overflow-hidden">
          <Image
            src="/img/heroKarirGradient.png"
            alt="banner"
            fill
            className="object-cover object-[60%_30%] sm:rounded-3xl"
            priority
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-5 md:left-15 uppercase font-bold text-black z-20">
            <h1 className="text-lg md:text-3xl font-[montserrat]">{job.title}</h1>
            <p className="md:mt-1 text-md md:text-2xl text-gray-600 capitalize">
              {job.location}
            </p>
          </div>
        </div>
      </div>

      {/* Konten Posisi */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 md:gap-8 text-start">
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="uppercase underline decoration-[var(--colorChilli)] text-base md:text-xl font-bold mb-2">
            Tentang Posisi
          </h2>
          <p className="text-justify text-sm md:text-lg font-medium">{job.about}</p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="uppercase underline decoration-[var(--colorChilli)] text-base md:text-xl font-bold mb-2">
            Tanggung Jawab
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            {job.responsibilities.map((r, i) => (
              <li key={i} className="text-justify text-sm md:text-lg font-medium">
                {r}
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="uppercase underline decoration-[var(--colorChilli)] text-base md:text-xl font-bold mb-2">
            Kualifikasi
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {job.qualifications.map((q, i) => (
              <li key={i} className="text-justify text-sm md:text-lg font-medium">
                {q}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Tombol Aksi */}
        <div className="flex items-center mt-4 gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={gmailHref}
              className="font-bold text-xs md:text-sm uppercase text-black px-3 py-3 bg-[var(--colorYellow)] rounded-lg font-[montserrat]"
            >
              Lamar Sekarang
            </Link>
          </motion.div>
          <motion.button
            onClick={onClose}
            className="p-2 bg-yellow-400 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="/icons/arrow-back.png" alt="Back" width={24} height={24} />
          </motion.button>
          <motion.button
            onClick={() => setShowShareModal(true)}
            className="p-2 bg-yellow-400 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="/icons/forward.png" alt="Share" width={24} height={24} />
          </motion.button>
        </div>
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            className="fixed inset-0 bg-[#000000af] flex items-end lg:items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              className="bg-white rounded-t-2xl lg:rounded-lg w-full lg:w-96 p-6"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold mb-4">Bagikan</h3>
              <div className="flex justify-between mb-4">
                {shareActions.map((action) => (
                  <ShareButton
                    key={action.label}
                    icon={action.icon}
                    alt={action.alt}
                    label={action.label}
                    onClick={action.onClick}
                  />
                ))}
              </div>
              <motion.button
                onClick={() => setShowShareModal(false)}
                className="w-full py-2 bg-gray-200 rounded-lg"
                whileHover={{ backgroundColor: "#e2e8f0" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Batal
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toastMessage && <Toast message={toastMessage} />}
      </AnimatePresence>
    </main>
  );
}

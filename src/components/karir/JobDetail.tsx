"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Job } from "@/data/jobs";
import Link from "next/link";

interface JobDetailProps {
  job: Job;
  onClose: () => void;
}

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
    alert("Link disalin ke clipboard!");
  } catch {
    alert("Gagal menyalin link.");
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
      .then(() => alert("Link disalin ke clipboard!"))
      .catch(() => fallbackCopy(url));
  } else {
    fallbackCopy(url);
  }
};

export default function JobDetail({ job, onClose }: JobDetailProps) {
  const [activeTab, setActiveTab] = useState<"about" | "resp" | "qual">(
    "about"
  );

  return (
    <main className="container mx-auto p-6">
      {/* Header */}
      <div className="relative mb-6 ">
        <div className="relative h-60 md:h-90 w-full rounded-3xl overflow-hidden">
          <Image
            src="/img/heroKarirGradient.png"
            alt="banner"
            layout="fill" // pakai layout fill supaya Image bisa cover container
            // objectFit="cover"
            priority
            className="object-cover object-[60%_30%] h-90 rounded-3xl"
          />
          {/* Gradient overlay, di atas Image */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-transparent to-red-400 opacity-80 z-10 rounded-3xl" /> */}
          {/* Title di atas gradient */}
          <div className="absolute top-1/2 -translate-y-1/2 left-15 uppercase font-bold text-black z-20">
            <h1 className="text-2xl md:text-3xl font-[montserrat]">
              {job.title}
            </h1>
            <p className="md:mt-1 text-2xl">{job.location}</p>
          </div>
          {/* <div className="absolute bottom-4 left-6 text-black z-20">
            <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
            <p className="md:mt-1">{job.location}</p>
          </div> */}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-8 text-start">
        <div>
          <h2 className="font-[montserrat] uppercase underline decoration-[var(--colorChilli)] text-xl font-bold mb-2">
            Tentang Posisi
          </h2>
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <p className="text-justify text-lg font-medium">{job.about}</p>
          </motion.div>
        </div>

        <div>
          <h2 className="font-[montserrat] uppercase underline decoration-[var(--colorChilli)] text-xl font-bold mb-2">
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
              <li className="text-justify text-lg font-medium" key={i}>
                {r}
              </li>
            ))}
          </motion.ol>
        </div>

        <div>
          <h2 className="font-[montserrat] uppercase underline decoration-[var(--colorChilli)] text-xl font-bold mb-2">
            Kualifikasi
          </h2>
          <motion.ul
            key="qual"
            className="list-decimal list-inside space-y-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {job.qualifications.map((q, i) => (
              <li className="text-justify text-lg font-medium" key={i}>
                {q}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="font-bold font-[montserrat] text-sm uppercase text-black px-4 py-3 bg-[var(--colorYellow)] hover:bg-[#ffd813] hover:shadow-md transition cursor-pointer rounded-2xl"
          >
            Lamar Sekarang
          </Link>

          <button
            onClick={onClose}
            className="p-2 bg-[var(--colorYellow)] hover:bg-gray-300 transition cursor-pointer rounded-2xl "
          >
            <Image src="/icons/back.png" alt="Back" width={24} height={24} />
          </button>

          <button
            onClick={handleCopyLink}
            aria-label="Copy Link"
            className="p-2 bg-[var(--colorYellow)] hover:bg-gray-100 rounded-2xl cursor-pointer"
          >
            <Image
              src="/icons/share.png"
              alt="share"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>

        {/* <div className="flex flex-col md:flex-row relative">
          <div className="min-h-[10rem] h-40 overflow-y-scroll md:flex-3 text-xs md:text-lg font-bold"> */}
        {/* <AnimatePresence mode="wait">
              {activeTab === "about" && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p>{job.about}</p>
                </motion.div>
              )}
              {activeTab === "resp" && (
                <motion.ul
                  key="resp"
                  className="list-disc list-inside space-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {job.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </motion.ul>
              )}
              {activeTab === "qual" && (
                <motion.ul
                  key="qual"
                  className="list-disc list-inside space-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {job.qualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence> */}
        {/* </div> */}

        {/* garis vertical abu */}
        {/* <div className="absolute hidden md:block md:right-110 md:-top-8 h-45 w-[1px] ml-0 bg-[var(--colorGrey)] opacity-25" /> */}

        {/* Buttons */}
        {/* <div className="flex flex-row md:flex-2 -mt-10 items-start justify-center h-25 md:h-45">
            <div className="flex items-center flex-col gap-y-2">
              <div className="flex space-x-4 text-md md:text-lg">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-2xl transition cursor-pointer">
                  Lamar Sekarang
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-200 hover:bg-gray-300 transition text-gray-800 font-bold px-6 py-3 rounded-2xl cursor-pointer"
                >
                  Kembali
                </button>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold">Bagikan: </span>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.instagram.com/?url=${encodeURIComponent(
                        window.location.href
                      )}`,
                      "_blank"
                    )
                  }
                  aria-label="Share to Instagram"
                  className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                >
                  <Image
                    src="/icons/footer/ig.png"
                    alt="Instagram"
                    width={25}
                    height={25}
                    priority
                  />
                </button>

                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/?text=${encodeURIComponent(
                        window.location.href
                      )}`,
                      "_blank"
                    )
                  }
                  aria-label="Share to WhatsApp"
                  className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                >
                  <Image
                    src="/icons/footer/telepon.png"
                    alt="WhatsApp"
                    width={25}
                    height={25}
                    priority
                  />
                </button>

                <button
                  onClick={handleCopyLink}
                  aria-label="Copy Link"
                  className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                >
                  <Image
                    src="/icons/copy.png"
                    alt="Copy Link"
                    width={25}
                    height={25}
                    priority
                  />
                </button>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </main>
  );
}
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import type { Job } from "@/data/jobs";

// interface JobDetailProps {
//   job: Job;
//   onClose: () => void;
// }

// // Fallback copy jika Clipboard API tidak tersedia
// const fallbackCopy = (text: string) => {
//   const textarea = document.createElement("textarea");
//   textarea.value = text;
//   textarea.style.position = "fixed";
//   textarea.style.top = "0";
//   textarea.style.left = "0";
//   textarea.style.opacity = "0";
//   document.body.appendChild(textarea);
//   textarea.select();
//   try {
//     document.execCommand("copy");
//     alert("Link disalin ke clipboard!");
//   } catch {
//     alert("Gagal menyalin link.");
//   }
//   document.body.removeChild(textarea);
// };

// const handleCopyLink = () => {
//   const url = window.location.href;
//   if (
//     typeof navigator !== "undefined" &&
//     navigator.clipboard &&
//     typeof navigator.clipboard.writeText === "function"
//   ) {
//     navigator.clipboard
//       .writeText(url)
//       .then(() => alert("Link disalin ke clipboard!"))
//       .catch(() => fallbackCopy(url));
//   } else {
//     fallbackCopy(url);
//   }
// };

// export default function JobDetail({ job, onClose }: JobDetailProps) {
//   const [activeTab, setActiveTab] = useState<"about" | "resp" | "qual">(
//     "about"
//   );

//   return (
//     <main className="container mx-auto p-6">
//       {/* Header */}
//       <div className="relative mb-6 ">
//         <div className="relative h-60 md:h-90 w-full rounded-3xl overflow-hidden">
//           <Image
//             src="/img/heroKarir.png"
//             alt="banner"
//             layout="fill" // pakai layout fill supaya Image bisa cover container
//             // objectFit="cover"
//             priority
//             className="object-cover object-[60%_30%] h-90 rounded-3xl"
//           />
//           {/* Gradient overlay, di atas Image */}
//           {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-transparent to-red-400 opacity-80 z-10 rounded-3xl" /> */}
//           {/* Title di atas gradient */}
//           <div className="absolute bottom-4 left-6 text-white z-20">
//             <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
//             <p className="md:mt-1">{job.location}</p>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="bg-white rounded-2xl shadow-lg p-6">
//         <ul className="flex space-x-10 mb-4 text-center text-sm md:text-xl font-bold font-[montserrat]">
//           {(["about", "resp", "qual"] as const).map((tab) => {
//             const label =
//               tab === "about"
//                 ? "TENTANG POSISI"
//                 : tab === "resp"
//                 ? "TANGGUNG JAWAB"
//                 : "KUALIFIKASI";
//             return (
//               <li
//                 key={tab}
//                 className={`cursor-pointer pb-2 ${
//                   activeTab === tab
//                     ? "border-b-4 border-[var(--colorChilli)] font-bold"
//                     : "text-gray-600"
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {label}
//               </li>
//             );
//           })}
//         </ul>

//         <div className="flex flex-col md:flex-row relative">
//           <div className="min-h-[10rem] h-40 overflow-y-scroll md:flex-3 text-xs md:text-lg font-bold">
//             <AnimatePresence mode="wait">
//               {activeTab === "about" && (
//                 <motion.div
//                   key="about"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   <p>{job.about}</p>
//                 </motion.div>
//               )}
//               {activeTab === "resp" && (
//                 <motion.ul
//                   key="resp"
//                   className="list-disc list-inside space-y-1"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   {job.responsibilities.map((r, i) => (
//                     <li key={i}>{r}</li>
//                   ))}
//                 </motion.ul>
//               )}
//               {activeTab === "qual" && (
//                 <motion.ul
//                   key="qual"
//                   className="list-disc list-inside space-y-1"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   {job.qualifications.map((q, i) => (
//                     <li key={i}>{q}</li>
//                   ))}
//                 </motion.ul>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* garis vertical abu */}
//           <div className="absolute hidden md:block md:right-110 md:-top-8 h-45 w-[1px] ml-0 bg-[var(--colorGrey)] opacity-25" />

//           {/* Buttons */}
//           <div className="flex flex-row md:flex-2 -mt-10 items-start justify-center h-25 md:h-45">
//             <div className="flex items-center flex-col gap-y-2">
//               <div className="flex space-x-4 text-md md:text-lg">
//                 <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-2xl transition cursor-pointer">
//                   Lamar Sekarang
//                 </button>
// <button
//   onClick={onClose}
//   className="bg-gray-200 hover:bg-gray-300 transition text-gray-800 font-bold px-6 py-3 rounded-2xl cursor-pointer"
// >
//   Kembali
// </button>
//               </div>
//               <div className="flex items-center">
//                 <span className="text-lg font-bold">Bagikan: </span>
//                 <button
//                   onClick={() =>
//                     window.open(
//                       `https://www.instagram.com/?url=${encodeURIComponent(
//                         window.location.href
//                       )}`,
//                       "_blank"
//                     )
//                   }
//                   aria-label="Share to Instagram"
//                   className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
//                 >
//                   <Image
//                     src="/icons/footer/ig.png"
//                     alt="Instagram"
//                     width={25}
//                     height={25}
//                     priority
//                   />
//                 </button>

//                 <button
//                   onClick={() =>
//                     window.open(
//                       `https://wa.me/?text=${encodeURIComponent(
//                         window.location.href
//                       )}`,
//                       "_blank"
//                     )
//                   }
//                   aria-label="Share to WhatsApp"
//                   className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
//                 >
//                   <Image
//                     src="/icons/footer/telepon.png"
//                     alt="WhatsApp"
//                     width={25}
//                     height={25}
//                     priority
//                   />
//                 </button>

//                 <button
//                   onClick={handleCopyLink}
//                   aria-label="Copy Link"
//                   className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
//                 >
//                   <Image
//                     src="/icons/copy.png"
//                     alt="Copy Link"
//                     width={25}
//                     height={25}
//                     priority
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

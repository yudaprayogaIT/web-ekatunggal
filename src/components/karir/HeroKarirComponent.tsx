// import React from "react";
// import Image from "next/image";
// // import { main } from "framer-motion/client";

// const HeroKarirComponent = () => {
//   return (
//     <main>
//       <Image
//         src="/img/heroKarir.png"
//         alt="karyawan_ETM"
//         width={1430}
//         height={800}
//         className="h-full relative mb-100"
//       />

//       <section className=" container absolute top-2/2 left-1/2 -translate-x-1/2 w-[87%]">
//         <div className="search h-15 flex flex-row justify-between mx-auto font-bold text-black text-xl">
//           <div className="w-[65%] rounded-2xl bg-white flex items-center px-3">
//             <Image
//               src="/img/search.png"
//               alt="search"
//               width={60}
//               height={60}
//               className="mr-0 w-15"
//             />
//             <p>Ketik posisi impianmu disini (Contoh: Sales, Akunting, ...)</p>
//           </div>
//           <div className="filter w-[30%] rounded-2xl bg-white flex items-center px-5">
//             Pilih lokasi
//           </div>
//         </div>

//         <div className="mt-10 h-auto rounded-4xl p-4 bg-white">
//           <h2 className="font-[montserrat] font-bold text-3xl text-black mt-3">
//             Semua Karir
//           </h2>
//           <table className="w-full py-5 mt-7 text-2xl">
//             <thead className="border-b-4 border-b-[var(--colorYellow)] text-[var(--colorChilli)]  font-bold ">
//               <tr className="">
//                 <th className="w-[72%] text-start p-3">
//                   Posisi yang Dibutuhkan
//                 </th>
//                 <th className="text-start">Lokasi</th>
//               </tr>
//             </thead>
//             <tbody className="text-black font-bold ">
//               <tr>
//                 <td className="p-3">Staff Marketing</td>
//                 <td>Bogor</td>
//               </tr>
//               <tr className="bg-[#1E1E1E1A]">
//                 <td className="p-3">Staff Audit</td>
//                 <td>Bogor</td>
//               </tr>
//               <tr>
//                 <td className="p-3">SPV Accounting</td>
//                 <td>Bogor</td>
//               </tr>
//               <tr className="bg-[#1E1E1E1A]">
//                 <td className="p-3">Sales Support</td>
//                 <td>Palembang</td>
//               </tr>
//               <tr>
//                 <td className="p-3">Staff Purchasing</td>
//                 <td>Medan</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

//       <button className="see-more my-10 w-72 bg-[var(--colorYellow)] flex flex-row justify-center items-center rounded-2xl mx-auto font-bold text-xl">
//         <p className="-mr-6 mx-auto">Lihat Semua Posisi</p>
//         <Image
//           src="/icons/arrow-left.png"
//           alt="see-more"
//           width={400}
//           height={100}
//           className="w-40 h-auto object-contain -m-5"
//         />
//       </button>
//     </main>
//   );
// };

// export default HeroKarirComponent;

// "use client";

// import React, { useState, useEffect, ChangeEvent } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// interface Job {
//   id: number;
//   title: string;
//   location: string;
//   about: string;
//   responsibilities: string[];
//   qualifications: string[];
// }

// const dummyJobs: Job[] = [
//   {
//     id: 1,
//     title: "Staff Marketing",
//     location: "Bogor",
//     about: "Bertanggung jawab atas strategi pemasaran produk.",
//     responsibilities: [
//       "Membuat planning campaign",
//       "Analisis pasar",
//       "Koordinasi dengan tim sales",
//     ],
//     qualifications: [
//       "Pendidikan minimal S1 Marketing",
//       "Pengalaman 1-2 tahun",
//       "Menguasai digital marketing",
//     ],
//   },
//   {
//     id: 2,
//     title: "Staff Audit",
//     location: "Bogor",
//     about: "Melakukan audit internal dan memastikan kepatuhan.",
//     responsibilities: [
//       "Review laporan keuangan",
//       "Audit proses bisnis",
//       "Membuat rekomendasi perbaikan",
//     ],
//     qualifications: [
//       "Pendidikan minimal S1 Akuntansi",
//       "Pengalaman audit minimal 1 tahun",
//       "Teliti dan jujur",
//     ],
//   },
//   {
//     id: 3,
//     title: "SPV Accounting",
//     location: "Bogor",
//     about: "Memimpin tim accounting dan menjaga keakuratan data.",
//     responsibilities: [
//       "Supervisi tim accounting",
//       "Penyusunan laporan bulanan",
//       "Rekonsiliasi account",
//     ],
//     qualifications: [
//       "Pendidikan minimal S1 Akuntansi",
//       "Pengalaman minimal 3 tahun",
//       "Leadership skill",
//     ],
//   },
//   {
//     id: 4,
//     title: "Sales Support",
//     location: "Palembang",
//     about: "Mendukung tim sales agar target tercapai.",
//     responsibilities: [
//       "Follow up leads",
//       "Update CRM",
//       "Dokumentasi penjualan",
//     ],
//     qualifications: [
//       "Pendidikan minimal D3",
//       "Komunikatif",
//       "Mampu bekerja di bawah tekanan",
//     ],
//   },
//   {
//     id: 5,
//     title: "Staff Purchasing",
//     location: "Medan",
//     about: "Menangani pembelian barang dan vendor management.",
//     responsibilities: [
//       "Negosiasi dengan vendor",
//       "Buat PO",
//       "Pantau stok barang",
//     ],
//     qualifications: [
//       "Pendidikan minimal D3",
//       "Teliti",
//       "Pengalaman di procurement menjadi nilai plus",
//     ],
//   },
//   {
//     id: 6,
//     title: "Sales Support",
//     location: "Kupang",
//     about: "Mendukung tim sales agar target tercapai.",
//     responsibilities: [
//       "Follow up leads",
//       "Update CRM",
//       "Dokumentasi penjualan",
//     ],
//     qualifications: [
//       "Pendidikan minimal D3",
//       "Komunikatif",
//       "Mampu bekerja di bawah tekanan",
//     ],
//   },
//   {
//     id: 7,
//     title: "Purchasing Staff",
//     location: "Manado",
//     about: "Mengurus pembelian barang dan jasa perusahaan.",
//     responsibilities: [
//       "Melakukan proses pembelian",
//       "Negosiasi dengan vendor",
//       "Kelola dokumen pembelian",
//       "Pantau pengiriman barang",
//     ],
//     qualifications: [
//       "Minimal S1 (Manajemen/Ekonomi)",
//       "Pengalaman 1 tahun di purchasing",
//       "Negosiator yang baik",
//       "Teliti dan tahan tekanan",
//     ],
//   },
//   {
//     id: 8,
//     title: "Kepala Gudang",
//     location: "Makassar",
//     about: "Memimpin operasional gudang secara efisien.",
//     responsibilities: [
//       "Atur kegiatan gudang",
//       "Kelola stok dan pencatatan",
//       "Pastikan proses sesuai SOP",
//       "Pimpin tim gudang",
//     ],
//     qualifications: [
//       "Minimal S1",
//       "Pengalaman 2 tahun di gudang",
//       "Punya jiwa kepemimpinan",
//       "Paham sistem gudang",
//     ],
//   },
//   {
//     id: 9,
//     title: "Kepala Cabang",
//     location: "Pontianak",
//     about: "Mengelola operasional dan tim cabang.",
//     responsibilities: [
//       "Pimpin kegiatan cabang",
//       "Capai target penjualan dan operasional",
//       "Jalin hubungan dengan pelanggan",
//       "Lapor ke kantor pusat",
//     ],
//     qualifications: [
//       "Minimal S1 (Manajemen)",
//       "Pengalaman 3 tahun di posisi serupa",
//       "Pemimpin yang strategis",
//       "Komunikatif dan analitis",
//     ],
//   },
//   {
//     id: 10,
//     title: "IT Staff",
//     location: "Bogor",
//     about: "Menangani permasalahan komputer dan jaringan.",
//     responsibilities: [
//       "Instalasi dan perawatan perangkat IT",
//       "Tangani masalah teknis",
//       "Dukung pengguna internal",
//       "Dokumentasikan aktivitas",
//     ],
//     qualifications: [
//       "Minimal S1 IT",
//       "Paham rakit komputer",
//       "Solutif dan mandiri",
//       "Mau terus belajar",
//     ],
//   },
//   {
//     id: 11,
//     title: "Purchasing Staff",
//     location: "Klaten",
//     about: "Mengurus pembelian barang dan jasa perusahaan.",
//     responsibilities: [
//       "Melakukan proses pembelian",
//       "Negosiasi dengan vendor",
//       "Kelola dokumen pembelian",
//       "Pantau pengiriman barang",
//     ],
//     qualifications: [
//       "Minimal S1 (Manajemen/Ekonomi)",
//       "Pengalaman 1 tahun di purchasing",
//       "Negosiator yang baik",
//       "Teliti dan tahan tekanan",
//     ],
//   },
//   {
//     id: 12,
//     title: "Kepala Gudang",
//     location: "Semarang",
//     about: "Memimpin operasional gudang secara efisien.",
//     responsibilities: [
//       "Atur kegiatan gudang",
//       "Kelola stok dan pencatatan",
//       "Pastikan proses sesuai SOP",
//       "Pimpin tim gudang",
//     ],
//     qualifications: [
//       "Minimal S1",
//       "Pengalaman 2 tahun di gudang",
//       "Punya jiwa kepemimpinan",
//       "Paham sistem gudang",
//     ],
//   },
// ];

// const locations = [
//   "Bogor",
//   "Klaten",
//   "Kupang",
//   "Makassar",
//   "Manado",
//   "Medan",
//   "Palembang",
//   "Pekanbaru",
//   "Pontianak",
//   "Samarinda",
//   "Semarang",
//   "Sidoarjo",
// ];

// export default function HeroKarirComponent() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [showLocationDropdown, setShowLocationDropdown] = useState(false);
//   const [showAll, setShowAll] = useState(false);
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

//   // in detail view: which tab is active?
//   const [activeTab, setActiveTab] = useState<"about" | "resp" | "qual">(
//     "about"
//   );

//   useEffect(() => {
//     setJobs(dummyJobs);
//   }, []);

//   // filter for table (max 5)
//   const filteredJobs = jobs
//     .filter(
//       (j) =>
//         j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedLocation ? j.location === selectedLocation : true)
//     )
//     .slice(0, 5);

//   // filter for cards (all)
//   const allFilteredJobs = jobs.filter(
//     (j) =>
//       j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedLocation ? j.location === selectedLocation : true)
//   );

//   const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
//     setSearchTerm(e.target.value);

//   const onLocationSelect = (e: ChangeEvent<HTMLSelectElement>) => {
//     setSelectedLocation(e.target.value);
//     setShowLocationDropdown(false);
//   };

//   const openDetail = (job: Job) => {
//     setSelectedJob(job);
//     setActiveTab("about");
//   };

//   const closeDetail = () => setSelectedJob(null);

//   // If a job is selected → render its detail view
//   if (selectedJob) {
//     return (
//       <main className="container mx-auto p-6">
//         {/* Header */}
//         <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
//           <Image
//             src="/img/heroKarir.png"
//             alt="banner"
//             layout="fill"
//             objectFit="cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-transparent to-red-400 opacity-80" />
//           <div className="absolute bottom-4 left-6 text-white">
//             <h1 className="text-3xl font-bold">{selectedJob.title}</h1>
//             <p className="mt-1">{selectedJob.location}</p>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-2xl shadow-lg p-6">
//           <ul className="flex space-x-8 border-b mb-6">
//             <li
//               className={`cursor-pointer pb-2 ${
//                 activeTab === "about"
//                   ? "border-b-4 border-yellow-500 font-bold"
//                   : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab("about")}
//             >
//               TENTANG POSISI
//             </li>
//             <li
//               className={`cursor-pointer pb-2 ${
//                 activeTab === "resp"
//                   ? "border-b-4 border-yellow-500 font-bold"
//                   : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab("resp")}
//             >
//               TANGGUNG JAWAB
//             </li>
//             <li
//               className={`cursor-pointer pb-2 ${
//                 activeTab === "qual"
//                   ? "border-b-4 border-yellow-500 font-bold"
//                   : "text-gray-600"
//               }`}
//               onClick={() => setActiveTab("qual")}
//             >
//               KUALIFIKASI
//             </li>
//           </ul>

//           <div className="min-h-[8rem]">
//             <AnimatePresence mode="wait">
//               {activeTab === "about" && (
//                 <motion.div
//                   key="about"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   <p>{selectedJob.about}</p>
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
//                   {selectedJob.responsibilities.map((r, i) => (
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
//                   {selectedJob.qualifications.map((q, i) => (
//                     <li key={i}>{q}</li>
//                   ))}
//                 </motion.ul>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Buttons */}
//           <div className="flex items-center justify-around">
//             {/* Share Buttons */}
//             <div className="flex items-center space-x-4">
//               {/* Instagram */}
//               <button
//                 onClick={() =>
//                   window.open(
//                     `https://www.instagram.com/?url=${encodeURIComponent(
//                       window.location.href
//                     )}`,
//                     "_blank"
//                   )
//                 }
//                 className="p-2 hover:bg-gray-100 rounded-full"
//                 aria-label="Share to Instagram"
//               >
//                 <svg width="24" height="24" fill="currentColor">
//                   <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
//                 </svg>
//               </button>
//               {/* WhatsApp */}
//               <button
//                 onClick={() =>
//                   window.open(
//                     `https://wa.me/?text=${encodeURIComponent(
//                       window.location.href
//                     )}`,
//                     "_blank"
//                   )
//                 }
//                 className="p-2 hover:bg-gray-100 rounded-full"
//                 aria-label="Share to WhatsApp"
//               >
//                 <svg width="24" height="24" fill="currentColor">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.48-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.67-1.612-.916-2.21-.242-.579-.487-.5-.67-.51l-.571-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.273-.198-.57-.347z" />
//                 </svg>
//               </button>
//               {/* Copy Link */}
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText(window.location.href);
//                   alert("Link disalin ke clipboard!");
//                 }}
//                 className="p-2 hover:bg-gray-100 rounded-full"
//                 aria-label="Copy Link"
//               >
//                 <svg width="24" height="24" fill="currentColor">
//                   <path d="M3.9 12.9a1 1 0 0 1 0-1.8l6.467-3.163a1 1 0 1 1 .894 1.788L4.793 12l6.568 3.275a1 1 0 1 1-.894 1.788L3.9 12.9z" />
//                 </svg>
//               </button>
//             </div>

//             {/* Lamar Sekarang */}
//             <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-2xl transition">
//               Lamar Sekarang
//             </button>

//             <button
//               onClick={closeDetail}
//               className="bg-gray-200 text-gray-800 font-bold px-6 py-3 rounded-2xl"
//             >
//               Kembali
//             </button>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   // Otherwise render main table / grid
//   return (
//     <main className="relative mb-80">
//       {/* Hero */}
//       <div className="h-[200px] sm:h-[400px] md:h-[600px] lg:h-[800px] w-full relative mb-8">
//         <Image
//           src="/img/heroKarir.png"
//           alt="karyawan ETM"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//       </div>

//       {/* Search & Filter */}
//       <section className="container mx-auto px-4 mb-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Search */}
//           <div className="flex-1 bg-white rounded-2xl flex items-center px-4 py-2 shadow">
//             <Image src="/img/search.png" alt="search" width={24} height={24} />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={onSearchChange}
//               placeholder="Ketik posisi impianmu..."
//               className="ml-2 w-full outline-none text-lg font-bold"
//             />
//           </div>

//           {/* Location dropdown */}
//           <div className="relative w-full md:w-1/3">
//             <button
//               onClick={() => setShowLocationDropdown((v) => !v)}
//               className="w-full bg-white rounded-2xl flex items-center justify-between px-4 py-2 shadow font-bold text-lg"
//             >
//               {selectedLocation || "Pilih lokasi"}
// <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//   <path
//     fillRule="evenodd"
//     d="M5.23 7.21a.75.75 0 011.06..."
//     clipRule="evenodd"
//   />
// </svg>
//             </button>
//             {showLocationDropdown && (
//               <select
//                 size={5}
//                 value={selectedLocation}
//                 onChange={onLocationSelect}
//                 className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow max-h-44 overflow-auto outline-none"
//               >
//                 <option value="">Semua Lokasi</option>
//                 {locations.map((loc) => (
//                   <option key={loc} value={loc}>
//                     {loc}
//                   </option>
//                 ))}
//               </select>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Table or grid */}
//       <section className="container mx-auto px-4">
//         {showAll ? (
//           <div className="overflow-y-auto max-h-96">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {allFilteredJobs.map((job) => (
//                 <div
//                   key={job.id}
//                   onClick={() => openDetail(job)}
//                   className="border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition flex flex-col justify-between h-48 cursor-pointer"
//                 >
//                   <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
//                   <p className="text-sm text-gray-600 mb-3">{job.location}</p>
//                   <p className="text-gray-700">{job.about}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white rounded-4xl p-6 shadow-lg">
//             <h2 className="text-3xl font-bold mb-4">Semua Karir</h2>
//             <div className="overflow-x-auto">
//               <table className="w-full text-lg font-bold">
//                 <thead className="border-b-4 border-yellow-500 text-red-600">
//                   <tr>
//                     <th className="text-left py-2 px-3">
//                       Posisi yang Dibutuhkan
//                     </th>
//                     <th className="text-left py-2 px-6">Lokasi</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredJobs.map((job, i) => (
//                     <tr
//                       key={job.id}
//                       onClick={() => openDetail(job)}
//                       className={`${
//                         i % 2 === 1 ? "bg-[#1E1E1E1A]" : ""
//                       } cursor-pointer`}
//                     >
//                       <td className="py-2 px-3">{job.title}</td>
//                       <td className="py-2 px-6">{job.location}</td>
//                     </tr>
//                   ))}
//                   {filteredJobs.length === 0 && (
//                     <tr>
//                       <td
//                         colSpan={2}
//                         className="py-4 text-center text-gray-500 italic"
//                       >
//                         Tidak ada lowongan yang cocok.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* Toggle showAll */}
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => setShowAll((v) => !v)}
//             className="flex items-center bg-yellow-500 text-black font-bold text-xl rounded-2xl px-6 py-3 shadow hover:bg-yellow-600 transition"
//           >
//             <span className="mr-2">
//               {showAll ? "Sembunyikan List" : "Lihat Semua Posisi"}
//             </span>
//             <Image
//               src="/icons/arrow-left.png"
//               alt="arrow"
//               width={24}
//               height={24}
//             />
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }

//
//
//
//
//

// // src/components/HeroKarirComponent.tsx
// "use client";

// import React, { useState, useEffect, ChangeEvent } from "react";
// import Image from "next/image";
// import type { Job } from "@/data/jobs";
// import { Jobs, locations } from "@/data/jobs";
// import JobDetail from "./JobDetail";

// export default function HeroKarirComponent() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [showLocationDropdown, setShowLocationDropdown] = useState(false);
//   const [showAll, setShowAll] = useState(false);
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

//   useEffect(() => {
//     setJobs(Jobs);
//   }, []);

//   // filter untuk table (max 5)
//   const filteredJobs = jobs
//     .filter(
//       (j) =>
//         j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedLocation ? j.location === selectedLocation : true)
//     )
//     .slice(0, 5);

//   // filter untuk cards (all)
//   const allFilteredJobs = jobs.filter(
//     (j) =>
//       j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedLocation ? j.location === selectedLocation : true)
//   );

//   const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
//     setSearchTerm(e.target.value);

//   const onLocationSelect = (e: ChangeEvent<HTMLSelectElement>) => {
//     setSelectedLocation(e.target.value);
//     setShowLocationDropdown(false);
//   };

//   const openDetail = (job: Job) => {
//     setSelectedJob(job);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const closeDetail = () => setSelectedJob(null);

//   // jika ada job terpilih → render detail
//   if (selectedJob) {
//     return <JobDetail job={selectedJob} onClose={closeDetail} />;
//   }

//   // otherwise render list / table
//   return (
//     <main className="relative mb-80">
//       {/* Hero Banner */}
//       <div className="h-[200px] sm:h-[400px] md:h-[600px] lg:h-[800px] w-full relative mb-8">
//         <Image
//           src="/img/heroKarir.png"
//           alt="karyawan ETM"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//       </div>

//       {/* Search & Filter */}
//       <section className="container mx-auto px-4 mb-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Input Pencarian */}
//           <div className="flex-1 bg-white rounded-2xl flex items-center px-4 py-2 shadow">
//             <Image src="/img/search.png" alt="search" width={24} height={24} />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={onSearchChange}
//               placeholder="Ketik posisi impianmu..."
//               className="ml-2 w-full outline-none text-lg font-bold"
//             />
//           </div>

//           {/* Dropdown Lokasi */}
//           <div className="relative w-full md:w-1/3">
//             <button
//               onClick={() => setShowLocationDropdown((v) => !v)}
//               className="w-full bg-white rounded-2xl flex items-center justify-between px-4 py-2 shadow font-bold text-lg"
//             >
//               {selectedLocation || "Pilih lokasi"}
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path
//                   fillRule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06..."
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {showLocationDropdown && (
//               <select
//                 size={5}
//                 value={selectedLocation}
//                 onChange={onLocationSelect}
//                 className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow max-h-44 overflow-auto outline-none"
//               >
//                 <option value="">Semua Lokasi</option>
//                 {locations.map((loc) => (
//                   <option key={loc} value={loc}>
//                     {loc}
//                   </option>
//                 ))}
//               </select>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Daftar atau Grid */}
//       <section className="container mx-auto px-4">
//         {showAll ? (
//           // Grid view untuk semua job
//           <div className="overflow-y-auto max-h-96">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {allFilteredJobs.map((job) => (
//                 <div
//                   key={job.id}
//                   onClick={() => openDetail(job)}
//                   className="border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition flex flex-col justify-between h-48 cursor-pointer"
//                 >
//                   <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
//                   <p className="text-sm text-gray-600 mb-3">{job.location}</p>
//                   <p className="text-gray-700 line-clamp-3">{job.about}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           // Table view (maks 5)
//           <div className="bg-white rounded-4xl p-6 shadow-lg">
//             <h2 className="text-3xl font-bold mb-4">Semua Karir</h2>
//             <div className="overflow-x-auto">
//               <table className="w-full text-lg font-bold">
//                 <thead className="border-b-4 border-yellow-500 text-red-600">
//                   <tr>
//                     <th className="text-left py-2 px-3">
//                       Posisi yang Dibutuhkan
//                     </th>
//                     <th className="text-left py-2 px-6">Lokasi</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredJobs.map((job, i) => (
//                     <tr
//                       key={job.id}
//                       onClick={() => openDetail(job)}
//                       className={`${
//                         i % 2 === 1 ? "bg-[#1E1E1E1A]" : ""
//                       } cursor-pointer`}
//                     >
//                       <td className="py-2 px-3">{job.title}</td>
//                       <td className="py-2 px-6">{job.location}</td>
//                     </tr>
//                   ))}
//                   {filteredJobs.length === 0 && (
//                     <tr>
//                       <td
//                         colSpan={2}
//                         className="py-4 text-center text-gray-500 italic"
//                       >
//                         Tidak ada lowongan yang cocok.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* Tombol toggle */}
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => setShowAll((v) => !v)}
//             className="flex items-center bg-yellow-500 text-black font-bold text-xl rounded-2xl px-6 py-3 shadow hover:bg-yellow-600 transition"
//           >
//             <span className="mr-2">
//               {showAll ? "Sembunyikan List" : "Lihat Semua Posisi"}
//             </span>
//             <Image
//               src="/icons/arrow-left.png"
//               alt="arrow"
//               width={24}
//               height={24}
//             />
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }

// src/components/HeroKarirComponent.tsx
// "use client";

// import React, { useState, useEffect, ChangeEvent } from "react";
// import Image from "next/image";
// import type { Job } from "@/data/jobs";
// import { Jobs, locations } from "@/data/jobs";
// import JobDetail from "./JobDetail";
// import JobList from "./JobList";

// export default function HeroKarirComponent() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [showLocationDropdown, setShowLocationDropdown] = useState(false);
//   const [showAll, setShowAll] = useState(false);
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

//   useEffect(() => {
//     setJobs(Jobs);
//   }, []);

//   // filter untuk table (max 5)
//   const filteredJobs = jobs
//     .filter(
//       (j) =>
//         j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedLocation ? j.location === selectedLocation : true)
//     )
//     .slice(0, 5);

//   // filter untuk cards (all)
//   const allFilteredJobs = jobs.filter(
//     (j) =>
//       j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedLocation ? j.location === selectedLocation : true)
//   );

//   const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
//     setSearchTerm(e.target.value);

//   const onLocationSelect = (e: ChangeEvent<HTMLSelectElement>) => {
//     setSelectedLocation(e.target.value);
//     setShowLocationDropdown(false);
//   };

//   const openDetail = (job: Job) => {
//     setSelectedJob(job);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const closeDetail = () => setSelectedJob(null);

//   const toggleShowAll = () => setShowAll((v) => !v);

//   // kalau ada job yg dipilih → render detail
//   if (selectedJob) {
//     return <JobDetail job={selectedJob} onClose={closeDetail} />;
//   }

//   // otherwise render search + list
//   return (
//     <main className="relative mb-80">
//       {/* Hero Banner */}
//       <div className="h-[200px] sm:h-[400px] md:h-[600px] lg:h-[800px] w-full relative mb-8">
//         <Image
//           src="/img/heroKarir.png"
//           alt="karyawan ETM"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//       </div>

//       {/* Search & Filter */}
//       <section className="container mx-auto px-4 mb-8">
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Input Pencarian */}
//           <div className="flex-1 bg-white rounded-2xl flex items-center px-4 py-2 shadow">
//             <Image src="/img/search.png" alt="search" width={24} height={24} />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={onSearchChange}
//               placeholder="Ketik posisi impianmu..."
//               className="ml-2 w-full outline-none text-lg font-bold"
//             />
//           </div>

//           {/* Dropdown Lokasi */}
//           <div className="relative w-full md:w-1/3">
//             <button
//               onClick={() => setShowLocationDropdown((v) => !v)}
//               className="w-full bg-white rounded-2xl flex items-center justify-between px-4 py-2 shadow font-bold text-lg"
//             >
//               {selectedLocation || "Pilih lokasi"}
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path
//                   fillRule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06..."
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {showLocationDropdown && (
//               <select
//                 size={5}
//                 value={selectedLocation}
//                 onChange={onLocationSelect}
//                 className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow max-h-44 overflow-auto outline-none"
//               >
//                 <option value="">Semua Lokasi</option>
//                 {locations.map((loc) => (
//                   <option key={loc} value={loc}>
//                     {loc}
//                   </option>
//                 ))}
//               </select>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Panggil JobList */}
//       <JobList
//         filteredJobs={filteredJobs}
//         allFilteredJobs={allFilteredJobs}
//         showAll={showAll}
//         openDetail={openDetail}
//         toggleShowAll={toggleShowAll}
//       />
//     </main>
//   );
// }

// src/components/karir/HeroKarirComponent.tsx
"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import type { Job } from "@/data/jobs";
import { Jobs, locations } from "@/data/jobs";
import JobDetail from "./JobDetail";
import JobList from "./JobList";

export default function HeroKarirComponent() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    setJobs(Jobs);
  }, []);

  // filter untuk table (max 5)
  const filteredJobs = jobs
    .filter(
      (j) =>
        j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedLocation ? j.location === selectedLocation : true)
    )
    .slice(0, 5);

  // filter untuk cards (all)
  const allFilteredJobs = jobs.filter(
    (j) =>
      j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation ? j.location === selectedLocation : true)
  );

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onLocationSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
    setShowLocationDropdown(false);
  };

  const openDetail = (job: Job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeDetail = () => setSelectedJob(null);

  const toggleShowAll = () => setShowAll((v) => !v);

  // jika ada job terpilih → render JobDetail
  if (selectedJob) {
    return <JobDetail job={selectedJob} onClose={closeDetail} />;
  }

  // otherwise render overlay search + list di atas hero
  return (
    <main className="mb-150 md:mb-115">
      {/* Hero container */}
      <div className="relative w-full h-50 md:w-auto md:h-190">
        {/* Background image */}
        <Image
          src="/img/heroKarir.png"
          alt="hero background"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* (Optional) overlay gelap agar teks lebih terbaca */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}

        {/* Search & Filter (overlay) */}
        <div className="absolute inset-x-0 top-38 md:top-150 w-[90%] md:w-[86%] h-12 container mx-auto z-20">
          <div className="flex flex-col md:flex-row gap-18">
            {/* Input Pencarian */}
            <div className="flex-1 bg-white rounded-lg md:rounded-xl flex items-center px-0 md:px-4 md:py-2 shadow">
              <Image
                src="/img/search.png"
                alt="search icon"
                width={60}
                height={60}
                className="-ml-2 md:ml-0"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={onSearchChange}
                placeholder="Ketik posisi impianmu disini (Contoh: Sales, ...)"
                className="-ml-4 md:ml-1 w-full outline-none md:text-xl font-normal md:font-normal"
              />
            </div>
            {/* Dropdown Lokasi */}
            <div className="relative w-full md:w-2/7">
              <button
                onClick={() => setShowLocationDropdown((v) => !v)}
                className="w-full h-12 bg-white rounded-xl flex items-center -mt-15 md:mt-0 justify-between px-4 py-2 shadow font-bold text-md md:text-lg"
              >
                {selectedLocation || "Pilih lokasi"}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06..."
                    clipRule="evenodd"
                    fill="#000"
                  />
                </svg>
              </button>
              {showLocationDropdown && (
                <select
                  size={5}
                  value={selectedLocation}
                  onChange={onLocationSelect}
                  className="absolute z-20 w-full mt-1 bg-white rounded-xl shadow max-h-50 overflow-auto outline-none cursor-pointer"
                >
                  <option value="" className="text-lg p-2 font-bold">
                    Semua Lokasi
                  </option>
                  {locations.map((loc) => (
                    <option
                      key={loc}
                      value={loc}
                      className="text-lg p-2 font-bold"
                    >
                      {loc}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>

        {/* JobList (overlay di bawah search) */}
        <div className="absolute inset-x-0 top-170 mx-auto z-10">
          <JobList
            filteredJobs={filteredJobs}
            allFilteredJobs={allFilteredJobs}
            showAll={showAll}
            openDetail={openDetail}
            toggleShowAll={toggleShowAll}
          />
        </div>
      </div>
    </main>
  );
}

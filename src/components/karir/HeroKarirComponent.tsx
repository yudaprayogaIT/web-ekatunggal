// // // src/components/HeroKarirComponent.tsx
// // "use client";

// // import React, { useState, useEffect, ChangeEvent } from "react";
// // import Image from "next/image";
// // import type { Job } from "@/data/jobs";
// // import { Jobs, locations } from "@/data/jobs";
// // import JobDetail from "./JobDetail";

// // export default function HeroKarirComponent() {
// //   const [jobs, setJobs] = useState<Job[]>([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [selectedLocation, setSelectedLocation] = useState("");
// //   const [showLocationDropdown, setShowLocationDropdown] = useState(false);
// //   const [showAll, setShowAll] = useState(false);
// //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// //   useEffect(() => {
// //     setJobs(Jobs);
// //   }, []);

// //   // filter untuk table (max 5)
// //   const filteredJobs = jobs
// //     .filter(
// //       (j) =>
// //         j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
// //         (selectedLocation ? j.location === selectedLocation : true)
// //     )
// //     .slice(0, 5);

// //   // filter untuk cards (all)
// //   const allFilteredJobs = jobs.filter(
// //     (j) =>
// //       j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
// //       (selectedLocation ? j.location === selectedLocation : true)
// //   );

// //   const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
// //     setSearchTerm(e.target.value);

// //   const onLocationSelect = (e: ChangeEvent<HTMLSelectElement>) => {
// //     setSelectedLocation(e.target.value);
// //     setShowLocationDropdown(false);
// //   };

// //   const openDetail = (job: Job) => {
// //     setSelectedJob(job);
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   const closeDetail = () => setSelectedJob(null);

// //   // jika ada job terpilih → render detail
// //   if (selectedJob) {
// //     return <JobDetail job={selectedJob} onClose={closeDetail} />;
// //   }

// //   // otherwise render list / table
// //   return (
// //     <main className="relative mb-80">
// //       {/* Hero Banner */}
// //       <div className="h-[200px] sm:h-[400px] md:h-[600px] lg:h-[800px] w-full relative mb-8">
// //         <Image
// //           src="/img/heroKarir.png"
// //           alt="karyawan ETM"
// //           layout="fill"
// //           objectFit="cover"
// //           priority
// //         />
// //       </div>

// //       {/* Search & Filter */}
// //       <section className="container mx-auto px-4 mb-8">
// //         <div className="flex flex-col md:flex-row gap-4">
// //           {/* Input Pencarian */}
// //           <div className="flex-1 bg-white rounded-2xl flex items-center px-4 py-2 shadow">
// //             <Image src="/img/search.png" alt="search" width={24} height={24} />
// //             <input
// //               type="text"
// //               value={searchTerm}
// //               onChange={onSearchChange}
// //               placeholder="Ketik posisi impianmu..."
// //               className="ml-2 w-full outline-none text-lg font-bold"
// //             />
// //           </div>

// //           {/* Dropdown Lokasi */}
// //           <div className="relative w-full md:w-1/3">
// //             <button
// //               onClick={() => setShowLocationDropdown((v) => !v)}
// //               className="w-full bg-white rounded-2xl flex items-center justify-between px-4 py-2 shadow font-bold text-lg"
// //             >
// //               {selectedLocation || "Pilih lokasi"}
// //               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M5.23 7.21a.75.75 0 011.06..."
// //                   clipRule="evenodd"
// //                 />
// //               </svg>
// //             </button>
// //             {showLocationDropdown && (
// //               <select
// //                 size={5}
// //                 value={selectedLocation}
// //                 onChange={onLocationSelect}
// //                 className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow max-h-44 overflow-auto outline-none"
// //               >
// //                 <option value="">Semua Lokasi</option>
// //                 {locations.map((loc) => (
// //                   <option key={loc} value={loc}>
// //                     {loc}
// //                   </option>
// //                 ))}
// //               </select>
// //             )}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Daftar atau Grid */}
// //       <section className="container mx-auto px-4">
// //         {showAll ? (
// //           // Grid view untuk semua job
// //           <div className="overflow-y-auto max-h-96">
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {allFilteredJobs.map((job) => (
// //                 <div
// //                   key={job.id}
// //                   onClick={() => openDetail(job)}
// //                   className="border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition flex flex-col justify-between h-48 cursor-pointer"
// //                 >
// //                   <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
// //                   <p className="text-sm text-gray-600 mb-3">{job.location}</p>
// //                   <p className="text-gray-700 line-clamp-3">{job.about}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ) : (
// //           // Table view (maks 5)
// //           <div className="bg-white rounded-4xl p-6 shadow-lg">
// //             <h2 className="text-3xl font-bold mb-4">Semua Karir</h2>
// //             <div className="overflow-x-auto">
// //               <table className="w-full text-lg font-bold">
// //                 <thead className="border-b-4 border-yellow-500 text-red-600">
// //                   <tr>
// //                     <th className="text-left py-2 px-3">
// //                       Posisi yang Dibutuhkan
// //                     </th>
// //                     <th className="text-left py-2 px-6">Lokasi</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {filteredJobs.map((job, i) => (
// //                     <tr
// //                       key={job.id}
// //                       onClick={() => openDetail(job)}
// //                       className={`${
// //                         i % 2 === 1 ? "bg-[#1E1E1E1A]" : ""
// //                       } cursor-pointer`}
// //                     >
// //                       <td className="py-2 px-3">{job.title}</td>
// //                       <td className="py-2 px-6">{job.location}</td>
// //                     </tr>
// //                   ))}
// //                   {filteredJobs.length === 0 && (
// //                     <tr>
// //                       <td
// //                         colSpan={2}
// //                         className="py-4 text-center text-gray-500 italic"
// //                       >
// //                         Tidak ada lowongan yang cocok.
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         )}

// //         {/* Tombol toggle */}
// //         <div className="flex justify-center mt-8">
// //           <button
// //             onClick={() => setShowAll((v) => !v)}
// //             className="flex items-center bg-yellow-500 text-black font-bold text-xl rounded-2xl px-6 py-3 shadow hover:bg-yellow-600 transition"
// //           >
// //             <span className="mr-2">
// //               {showAll ? "Sembunyikan List" : "Lihat Semua Posisi"}
// //             </span>
// //             <Image
// //               src="/icons/arrow-left.png"
// //               alt="arrow"
// //               width={24}
// //               height={24}
// //             />
// //           </button>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

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

  const filteredJobs = jobs
    .filter(
      (j) =>
        j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedLocation ? j.location === selectedLocation : true)
    )
    .slice(0, 5);

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

  if (selectedJob) {
    return <JobDetail job={selectedJob} onClose={closeDetail} />;
  }

  return (
    <main className="mb-150 md:mb-115">
      <div className="relative w-full h-50 md:w-auto md:h-190">
        <Image
          src="/img/heroKarir.png"
          alt="hero background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-x-0 top-38 md:top-150 w-[90%] md:w-[86%] h-12 container mx-auto z-20">
          <div className="flex flex-col md:flex-row gap-18">
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

// // "use client";

// // import React from "react";
// // import Image from "next/image";
// // import type { Job } from "@/data/jobs";

// // interface JobListProps {
// //   filteredJobs: Job[];
// //   allFilteredJobs: Job[];
// //   showAll: boolean;
// //   openDetail: (job: Job) => void;
// //   toggleShowAll: () => void;
// // }

// // export default function JobList({
// //   filteredJobs,
// //   allFilteredJobs,
// //   showAll,
// //   openDetail,
// //   toggleShowAll,
// // }: JobListProps) {
// //   return (
// //     <section className="w-[90%] md:w-[86%] mx-auto -mt-105 md:mt-0">
// //       {showAll ? (
// //         // Grid view untuk semua job
// //         <div className="overflow-y-auto max-h-105 rounded-2xl">
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {allFilteredJobs.map((job) => (
// //               <div
// //                 key={job.id}
// //                 onClick={() => openDetail(job)}
// //                 className="border border-gray-600 rounded-2xl p-6 bg-white shadow hover:shadow-lg transition flex flex-col h-48 cursor-pointer"
// //               >
// //                 <h3 className="text-lg md:text-xl font-bold">{job.title}</h3>
// //                 <p className="text-xs md:text-sm text-gray-600 font-semibold">
// //                   {job.location}
// //                 </p>
// //                 <p className="text-md md:text-lg font-normal text-gray-700 mt-13 md:mt-10 line-clamp-3 ">
// //                   {job.about}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ) : (
// //         // Table view (maks 5)
// //         <div className="bg-white rounded-4xl p-6 shadow-lg">
// //           <h2 className="text-xl md:text-3xl font-bold mb-4 font-[montserrat]">
// //             Semua Karir
// //           </h2>
// //           <div className="overflow-x-auto">
// //             <table className="w-full text-sm md:text-xl font-bold">
// //               <thead className="border-b-4 border-yellow-500 text-red-600">
// //                 <tr>
// //                   <th className="text-left py-2 px-3">
// //                     Posisi yang Dibutuhkan
// //                   </th>
// //                   <th className="text-left py-2 px-6 w-2/7 ">Lokasi</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {filteredJobs.map((job, i) => (
// //                   <tr
// //                     key={job.id}
// //                     onClick={() => openDetail(job)}
// //                     className={`${
// //                       i % 2 === 1 ? "bg-[#1E1E1E1A]" : ""
// //                     } cursor-pointer font-bold hover:bg-[#1E1E1E66]`}
// //                   >
// //                     <td className="py-2 px-3">{job.title}</td>
// //                     <td className="py-2 px-6">{job.location}</td>
// //                   </tr>
// //                 ))}
// //                 {filteredJobs.length === 0 && (
// //                   <tr>
// //                     <td
// //                       colSpan={2}
// //                       className="py-4 text-center text-gray-500 italic"
// //                     >
// //                       Tidak ada lowongan yang cocok.
// //                     </td>
// //                   </tr>
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       )}

// //       {/* Tombol toggle */}
// //       <div className="flex justify-center mt-8 absolute top-0 md:top-100 inset-x-0 mx-auto">
// //         <button
// //           onClick={toggleShowAll}
// //           className="flex items-center bg-yellow-500 text-black font-bold text-md md:text-xl rounded-2xl px-6 py-3 shadow hover:bg-yellow-600 transition cursor-pointer"
// //         >
// //           <span className="mr-4">
// //             {showAll ? "Sembunyikan List" : "Lihat Semua Posisi"}
// //           </span>
// //           <Image
// //             src="/icons/arrow-left.png"
// //             alt="see-more"
// //             width={400}
// //             height={100}
// //             className="w-30 h-auto object-contain -m-12"
// //           />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import React from "react";
// import Image from "next/image";
// import type { Job } from "@/data/jobs";

// interface JobListProps {
//   allFilteredJobs: Job[];
//   showAll: boolean;
//   openDetail: (job: Job) => void;
//   toggleShowAll: () => void;
// }

// export default function JobList({
//   allFilteredJobs,
//   showAll,
//   openDetail,
//   toggleShowAll,
// }: JobListProps) {
//   // Data yang akan dirender (slice jika tidak showAll)
//   const jobsToShow = showAll ? allFilteredJobs : allFilteredJobs.slice(0, 5);

//   return (
//     <section className="w-[90%] md:w-[86%] mx-auto -mt-105 md:mt-0 relative">
//       <div className="bg-white rounded-4xl p-6 shadow-lg">
//         <h2 className="text-xl md:text-3xl font-bold mb-4 font-[montserrat]">
//           Semua Karir
//         </h2>
//         {/* Wrapping table dengan overflow & max-height hanya kalau showAll */}
//         <div className={showAll ? "overflow-y-auto max-h-67 rounded-lg" : ""}>
//           <table className="w-full text-sm md:text-xl font-bold">
//             <thead className="border-b-4 border-yellow-500 text-red-600 sticky top-0 z-10 bg-white">
//               <tr>
//                 <th className="text-left py-2 px-3">Posisi yang Dibutuhkan</th>
//                 <th className="text-left py-2 px-6 w-2/7">Lokasi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {jobsToShow.map((job, i) => (
//                 <tr
//                   key={job.id}
//                   onClick={() => openDetail(job)}
//                   className={`${
//                     i % 2 === 1 ? "bg-[#1E1E1E1A]" : ""
//                   } cursor-pointer font-bold hover:bg-[#1E1E1E66]`}
//                 >
//                   <td className="py-2 px-3">{job.title}</td>
//                   <td className="py-2 px-6">{job.location}</td>
//                 </tr>
//               ))}

//               {jobsToShow.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan={2}
//                     className="py-4 text-center text-gray-500 italic"
//                   >
//                     Tidak ada lowongan yang cocok.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Tombol toggle */}
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={toggleShowAll}
//           className="flex items-center bg-yellow-500 text-black font-bold text-md md:text-xl rounded-2xl px-6 py-3 shadow hover:bg-yellow-600 transition"
//         >
//           <span className="mr-4">
//             {showAll ? "Sembunyikan List" : "Lihat Semua Posisi"}
//           </span>
//           {/* <Image
//             src="/icons/arrow-left.png"
//             alt="toggle"
//             width={24}
//             height={24}
//             className={`transform transition-transform ${
//               showAll ? "rotate-180" : ""
//             className={`transform transition-transform ${
//               showAll ? "rotate-180" : ""
//             } w-30 h-auto object-contain -m-12`}
//           /> */}
//           <Image
//             src="/icons/arrow-left.png"
//             alt="see-more"
//             width={400}
//             height={100}
//             className={`transform transition-transform ${
//               showAll ? "" : ""
//             } w-30 h-auto object-contain -m-12`}
//             // className={`transform transition-transform ${
//             //   showAll ? "rotate-180" : ""
//             // } w-30 h-auto object-contain -m-12`}
//           />
//         </button>
//       </div>
//     </section>
//   );
// }

// // "use client";

// // import React from "react";
// // import Image from "next/image";
// // import type { Job } from "@/data/jobs";

// // interface JobListProps {
// //   allFilteredJobs: Job[];
// //   showAll: boolean;
// //   openDetail: (job: Job) => void;
// //   toggleShowAll: () => void;
// // }

// // export default function JobList({
// //   allFilteredJobs,
// //   showAll,
// //   openDetail,
// //   toggleShowAll,
// // }: JobListProps) {
// //   const jobsToShow = showAll ? allFilteredJobs : allFilteredJobs.slice(0, 5);

// //   return (
// //     <section className="w-[90%] md:w-[86%] mx-auto mt-0 relative">
// //       <div className="bg-white rounded-4xl p-6 shadow-lg">
// //         <h2 className="text-xl md:text-3xl font-bold mb-4 font-[montserrat]">
// //           Semua Karir
// //         </h2>

// //         {/* Scroll only isi tabel, header akan sticky */}
// //         <div
// //           className={showAll ? "overflow-y-auto max-h-[420px] rounded-lg" : ""}
// //         >
// //           <table className="w-full text-sm md:text-xl font-bold">
// //             <thead>
// //               <tr className="border-b-4 border-yellow-500">
// //                 <th className="text-left py-2 px-3 text-red-600 bg-white sticky top-0 z-10">
// //                   Posisi yang Dibutuhkan
// //                 </th>
// //                 <th className="text-left py-2 px-6 w-2/7 text-red-600 bg-white sticky top-0 z-10">
// //                   Lokasi
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {jobsToShow.map((job, i) => (
// //                 <tr
// //                   key={job.id}
// //                   onClick={() => openDetail(job)}
// //                   className={`${
// //                     i % 2 === 1 ? "bg-[#1E1E1E1A]" : ""
// //                   } cursor-pointer font-bold hover:bg-[#1E1E1E66]`}
// //                 >
// //                   <td className="py-2 px-3">{job.title}</td>
// //                   <td className="py-2 px-6">{job.location}</td>
// //                 </tr>
// //               ))}
// //               {jobsToShow.length === 0 && (
// //                 <tr>
// //                   <td
// //                     colSpan={2}
// //                     className="py-4 text-center text-gray-500 italic"
// //                   >
// //                     Tidak ada lowongan yang cocok.
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       {/* Tombol toggle */}
// //       <div className="flex justify-center mt-8">
// //         <button
// //           onClick={toggleShowAll}
// //           className="flex items-center bg-yellow-500 text-black font-bold text-md md:text-xl rounded-2xl px-6 py-3 shadow hover:bg-yellow-600 transition"
// //         >
// //           <span className="mr-4">
// //             {showAll ? "Sembunyikan List" : "Lihat Semua Posisi"}
// //           </span>
// //           <Image
// //             src="/icons/arrow-left.png"
// //             alt="toggle"
// //             width={24}
// //             height={24}
// //             className={`transform transition-transform ${
// //               showAll ? "rotate-180" : ""
// //             }`}
// //           />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }

"use client";

import React from "react";
import Image from "next/image";
import type { Job } from "@/data/jobs";

interface JobListProps {
  filteredJobs: Job[];
  allFilteredJobs: Job[];
  showAll: boolean;
  openDetail: (job: Job) => void;
  toggleShowAll: () => void;
}

export default function JobList({
  filteredJobs,
  allFilteredJobs,
  showAll,
  openDetail,
  toggleShowAll,
}: JobListProps) {
  // Data yang akan dirender (filteredJobs jika tidak showAll, allFilteredJobs jika showAll)
  const jobsToShow = showAll ? allFilteredJobs : filteredJobs;

  return (
    <section className="w-[90%] md:w-[86%] mx-auto -mt-105 md:mt-0 relative">
      <div className="bg-white rounded-4xl p-6 shadow-lg">
        <h2 className="text-xl md:text-3xl font-bold mb-4 font-[montserrat]">
          Semua Karir
        </h2>
        {/* Wrapping table dengan overflow & max-height hanya kalau showAll */}
        <div className={showAll ? "overflow-y-auto max-h-67 rounded-lg" : ""}>
          <table className="w-full text-sm md:text-xl font-bold">
            <thead className="border-b-4 border-yellow-500 text-red-600 sticky top-0 z-10 bg-white">
              <tr>
                <th className="text-left py-2 px-3">Posisi yang Dibutuhkan</th>
                <th className="text-left py-2 px-6 w-2/7">Lokasi</th>
              </tr>
            </thead>
            <tbody>
              {jobsToShow.map((job, i) => (
                <tr
                  key={job.id}
                  onClick={() => openDetail(job)}
                  className={`${
                    i % 2 === 1 ? "bg-[#1E1E1E1A]" : ""
                  } cursor-pointer font-bold hover:bg-[#1E1E1E66]`}
                >
                  <td className="py-2 px-3">{job.title}</td>
                  <td className="py-2 px-6">{job.location}</td>
                </tr>
              ))}

              {jobsToShow.length === 0 && (
                <tr>
                  <td
                    colSpan={2}
                    className="py-4 text-center text-gray-500 italic"
                  >
                    Tidak ada lowongan yang cocok.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tombol toggle */}
      <div className="flex justify-center mt-8">
        <button
          onClick={toggleShowAll}
          className="flex items-center bg-yellow-500 text-black font-bold text-md md:text-xl rounded-2xl px-6 py-3 shadow hover:bg-yellow-600 transition"
        >
          <span className="mr-4">
            {showAll ? "Sembunyikan List" : "Lihat Semua Posisi"}
          </span>
          <Image
            src="/icons/arrow-left.png"
            alt="toggle"
            width={24}
            height={24}
            className={`transform transition-transform ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </section>
  );
}

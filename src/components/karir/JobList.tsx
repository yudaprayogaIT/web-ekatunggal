// // // src/component/karir/JobList.tsx
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
// //   // Data yang akan dirender (filteredJobs jika tidak showAll, allFilteredJobs jika showAll)
// //   const jobsToShow = showAll ? allFilteredJobs : filteredJobs;

// //   return (
// //     <section className="w-[90%] md:w-[86%] mx-auto -mt-105 md:mt-0 relative">
// //       <div className="bg-white rounded-xl md:rounded-4xl p-6 shadow-lg">
// //         <h2 className="text-xl md:text-3xl font-bold mb-4 font-[montserrat]">
// //           Semua Karir
// //         </h2>
// //         {/* Wrapping table dengan overflow & max-height hanya kalau showAll */}
// //         <div className={showAll ? "overflow-y-auto max-h-67 rounded-lg" : ""}>
// //           <table className="w-full text-sm md:text-xl font-bold">
// //             <thead className="border-b-4 border-yellow-500 text-red-600 sticky top-0 z-10 bg-white">
// //               <tr>
// //                 <th className="text-left py-2 px-3">Posisi yang Dibutuhkan</th>
// //                 <th className="text-left py-2 px-6 w-2/7">Lokasi</th>
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
// //           className="flex cursor-pointer items-center bg-[var(--colorYellow)] text-black font-bold text-md md:text-xl rounded-2xl px-6 py-3 shadow hover:bg-yellow-600 transition"
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

// import React from "react";
// import type { Job } from "@/data/jobs";

// interface JobListProps {
//   allFilteredJobs: Job[];
//   openDetail: (job: Job) => void;
// }

// export default function JobList({
//   allFilteredJobs,
//   openDetail,
// }: JobListProps) {
//   return (
//     <section className="w-[90%] md:w-[86%] mx-auto -mt-105 md:mt-0 relative">
//       <div className="bg-white rounded-xl md:rounded-4xl p-6 shadow-lg">
//         <h2 className="text-xl md:text-3xl font-bold mb-4 font-[montserrat]">
//           Semua Karir
//         </h2>
//         <div className="overflow-y-auto max-h-79 rounded-lg">
//           <table className="w-full text-sm md:text-xl font-bold">
//             <thead className="border-b-4 border-yellow-500 text-red-600 sticky top-0 z-10 bg-white">
//               <tr>
//                 <th className="text-left py-2 px-3">Posisi yang Dibutuhkan</th>
//                 <th className="text-left py-2 px-6 w-2/7">Lokasi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {allFilteredJobs.map((job, i) => (
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

//               {allFilteredJobs.length === 0 && (
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
//     </section>
//   );
// }

import React from "react";
import type { Job } from "@/data/jobs";

interface JobListProps {
  filteredJobs?: Job[];
  allFilteredJobs: Job[];
  openDetail: (job: Job) => void;
  showAll?: boolean;
  toggleShowAll?: () => void;
}

export default function JobList({
  allFilteredJobs,
  openDetail,
}: JobListProps) {
  return (
    <section className="w-[90%] md:w-[86%] mx-auto -mt-105 md:mt-0 relative">
      <div className="bg-white rounded-xl md:rounded-4xl p-6 shadow-lg">
        <h2 className="text-xl md:text-3xl font-bold mb-4 font-[montserrat]">
          Semua Karir
        </h2>
        <div className="overflow-y-auto max-h-79 rounded-lg">
          <table className="w-full text-sm md:text-xl font-bold">
            <thead className="border-b-4 border-yellow-500 text-red-600 sticky top-0 z-10 bg-white">
              <tr>
                <th className="text-left py-2 px-3">Posisi yang Dibutuhkan</th>
                <th className="text-left py-2 px-6 w-2/7">Lokasi</th>
              </tr>
            </thead>
            <tbody>
              {allFilteredJobs.map((job, i) => (
                <tr
                  key={job.id}
                  onClick={() => openDetail(job)}
                  className={`${
                    i % 2 === 1 ? "bg-[#1E1E1E1A]" : ""
                  } cursor-pointer hover:bg-[#1E1E1E66]`}
                >
                  <td className="py-2 px-3">{job.title}</td>
                  <td className="py-2 px-6">{job.location}</td>
                </tr>
              ))}
              {allFilteredJobs.length === 0 && (
                <tr>
                  <td colSpan={2} className="py-4 text-center text-gray-500 italic">
                    Tidak ada lowongan yang cocok.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

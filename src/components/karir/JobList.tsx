// import React from "react";
// import type { Job } from "@/data/jobs";

// interface JobListProps {
//   filteredJobs?: Job[];
//   allFilteredJobs: Job[];
//   openDetail: (job: Job) => void;
//   showAll?: boolean;
//   toggleShowAll?: () => void;
// }

// export default function JobList({
//   allFilteredJobs,
//   openDetail,
// }: JobListProps) {
//   return (
//     <section className="w-[90%] md:w-[86%] mx-auto -mt-105 sm:-mt-70 lg:mt-0 relative">
//       <div className="bg-white border border-gray-100 rounded-xl md:rounded-4xl p-6 shadow-lg">
//         <h2 className="text-xl md:text-3xl font-bold mb-4 font-[montserrat]">
//           Semua Karir
//         </h2>
//         <div className="overflow-y-auto max-h-79 rounded-lg">
//           <table className="w-full text-xs md:text-xl font-bold">
//             <thead className="border-b-4 border-yellow-500 text-red-600 sticky top-0 z-10 bg-white">
//               <tr className="">
//                 <th className="text-left py-2 px-3">Posisi yang Dibutuhkan</th>
//                 <th className="text-left py-2 px-3">Level</th>
//                 <th className="text-left py-2 px-6">Lokasi</th>
//               </tr>
//             </thead>
//             <tbody className="">
//               {allFilteredJobs.map((job, i) => (
//                 <tr
//                   key={job.id}
//                   onClick={() => openDetail(job)}
//                   className={`${
//                     i % 2 === 1 ? "bg-[#1E1E1E1A]" : ""
//                   } cursor-pointer hover:bg-[#1E1E1E66]`}
//                 >
//                   <td className="py-2 px-3">{job.title}</td>
//                   <td className="py-2 px-3">{job.level}</td>
//                   <td className="py-2 px-6">{job.location}</td>
//                 </tr>
//               ))}
//               {allFilteredJobs.length === 0 && (
//                 <tr>
//                   <td colSpan={3} className="py-4 text-center text-gray-500 italic">
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
  allFilteredJobs: Job[];
  openDetail: (job: Job) => void;
}

export default function JobList({
  allFilteredJobs,
  openDetail,
}: JobListProps) {
  return (
    <section className="w-[90%] md:w-[86%] mx-auto -mt-105 sm:-mt-70 lg:mt-0 relative">
      <div className="bg-white border border-gray-100 rounded-xl md:rounded-4xl p-6 shadow-lg">
        <h2 className="text-xl md:text-3xl font-bold mb-4 font-[montserrat]">
          Semua Karir
        </h2>

        <div className="overflow-y-auto max-h-79 rounded-lg">
          {/* HEADER */}
          <div className="flex bg-white sticky top-0 z-10 border-b-4 border-yellow-500 font-bold text-red-600">
            <div className="flex-1 md:flex-2 py-2 px-3 whitespace-normal md:whitespace-nowrap">
              Posisi yang Dibutuhkan
            </div>
            <div className="flex-1 py-2 px-3 whitespace-nowrap">
              Level
            </div>
            <div className="flex-1 py-2 px-3 whitespace-nowrap">
              Lokasi
            </div>
          </div>

          {/* ROWS */}
          {allFilteredJobs.length > 0 ? (
            allFilteredJobs.map((job, i) => (
              <div
                key={job.id}
                onClick={() => openDetail(job)}
                className={`flex cursor-pointer font-bold text-xs md:text-base hover:bg-[#1E1E1E66] ${
                  i % 2 === 1 ? "bg-[#1E1E1E1A]" : ""
                }`}
              >
                <div className="flex-1 md:flex-2 py-2 px-3 whitespace-normal md:whitespace-nowrap">
                  {job.title}
                </div>
                <div className="flex-1 py-2 px-3 whitespace-nowrap">
                  {job.level}
                </div>
                <div className="flex-1 py-2 px-3 whitespace-nowrap">
                  {job.location}
                </div>
              </div>
            ))
          ) : (
            <div className="py-4 text-center text-gray-500 italic">
              Tidak ada lowongan yang cocok.
          </div>
          )}
        </div>
      </div>
    </section>
  );
}

// // "use client";

// // import React, { useState, useEffect, ChangeEvent } from "react";
// // import Image from "next/image";
// // import type { Job } from "@/data/jobs";
// // import { Jobs, locations } from "@/data/jobs";
// // import JobDetail from "./JobDetail";
// // import JobList from "./JobList";

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

// //   const filteredJobs = jobs
// //     .filter(
// //       (j) =>
// //         j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
// //         (selectedLocation ? j.location === selectedLocation : true)
// //     )
// //     .slice(0, 5);

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

// //   const toggleShowAll = () => setShowAll((v) => !v);

// //   if (selectedJob) {
// //     return <JobDetail job={selectedJob} onClose={closeDetail} />;
// //   }

// //   return (
// //     <main className="mb-150 md:mb-105">
// //       <div className="relative w-full h-50 md:w-auto md:h-190">
// //         <Image
// //           src="/img/heroKarir.png"
// //           alt="hero background"
// //           layout="fill"
// //           objectFit="cover"
// //           priority
// //         />
// //         <div className="absolute inset-x-0 top-38 md:top-150 w-[90%] md:w-[86%] h-12 container mx-auto z-20">
// //           <div className="flex flex-col md:flex-row gap-18">
// //             <div className="flex-1 bg-white rounded-lg md:rounded-xl flex items-center px-0 md:px-4 md:py-2 shadow">
// //               <Image
// //                 src="/img/search.png"
// //                 alt="search icon"
// //                 width={60}
// //                 height={60}
// //                 className="-ml-2 md:ml-0"
// //               />
// //               <input
// //                 type="text"
// //                 value={searchTerm}
// //                 onChange={onSearchChange}
// //                 placeholder="Ketik posisi impianmu disini (Contoh: Sales, ...)"
// //                 className="-ml-4 md:ml-1 w-full outline-none md:text-xl font-normal md:font-normal"
// //               />
// //             </div>
// //             <div className="relative w-full md:w-2/7">
// //               <button
// //                 onClick={() => setShowLocationDropdown((v) => !v)}
// //                 className="w-full h-12 bg-white rounded-xl flex items-center -mt-15 md:mt-0 justify-between px-4 py-2 shadow font-bold text-md md:text-lg"
// //               >
// //                 {selectedLocation || "Pilih lokasi"}
// //                 <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
// //                   <path
// //                     fillRule="evenodd"
// //                     d="M5.23 7.21a.75.75 0 011.06..."
// //                     clipRule="evenodd"
// //                     fill="#000"
// //                   />
// //                 </svg>
// //               </button>
// //               {showLocationDropdown && (
// //                 <select
// //                   size={5}
// //                   value={selectedLocation}
// //                   onChange={onLocationSelect}
// //                   className="absolute z-20 w-full mt-1 bg-white rounded-xl shadow max-h-50 overflow-auto outline-none cursor-pointer"
// //                 >
// //                   <option value="" className="text-sm md:text-lg p-2 font-bold">
// //                     Semua Lokasi
// //                   </option>
// //                   {locations.map((loc) => (
// //                     <option
// //                       key={loc}
// //                       value={loc}
// //                       className="text-sm md:text-lg p-2 font-bold"
// //                     >
// //                       {loc}
// //                     </option>
// //                   ))}
// //                 </select>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //         <div className="absolute inset-x-0 top-170 mx-auto z-10">
// //           <JobList
// //             filteredJobs={filteredJobs}
// //             allFilteredJobs={allFilteredJobs}
// //             showAll={showAll}
// //             openDetail={openDetail}
// //             toggleShowAll={toggleShowAll}
// //           />
// //         </div>
// //       </div>
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

  // helper untuk slug dari title
  const toSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^-+|-+$/g, "");

  // load data & cek URL param saat mount
  useEffect(() => {
    setJobs(Jobs);
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("jobdetail");
    if (slug) {
      const found = Jobs.find((j) => toSlug(j.title) === slug);
      if (found) setSelectedJob(found);
    }
  }, []);

  // handle tombol Back/Forward browser
  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      if (!e.state?.inDetail) {
        setSelectedJob(null);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // filter untuk list
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

  // handlers
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onLocationSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
    setShowLocationDropdown(false);
  };

  const clearSearch = () => setSearchTerm("");
  const clearLocation = () => setSelectedLocation("");

  const openDetail = (job: Job) => {
    setSelectedJob(job);
    const slug = toSlug(job.title);
    // push ke history dengan slug
    window.history.pushState({ inDetail: true }, "", `?jobdetail=${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeDetail = () => {
    setSelectedJob(null);
    // reset URL
    window.history.pushState({}, "", window.location.pathname);
  };

  const toggleShowAll = () => setShowAll((v) => !v);

  // render detail atau list
  if (selectedJob) {
    return <JobDetail job={selectedJob} onClose={closeDetail} />;
  }

  return (
    <main className="mb-150 md:mb-105">
      <div className="relative w-full h-50 md:w-auto md:h-190">
        <Image
          src="/img/heroKarir.png"
          alt="hero background"
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Search & filter */}
        <div className="absolute inset-x-0 top-38 md:top-150 w-[90%] md:w-[86%] h-12 mx-auto z-20">
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
                className="-ml-4 md:ml-1 w-full outline-none md:text-xl font-normal"
              />
              {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl font-bold"
              >
                ×
              </button>
            )}
            </div>
            
            <div className="relative w-full md:w-2/7">
              <button
                onClick={() => setShowLocationDropdown((v) => !v)}
                className="w-full h-12 bg-white rounded-xl flex items-center justify-between px-4 py-2 shadow font-bold text-md md:text-lg"
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
               {selectedLocation && (
              <button
                onClick={clearLocation}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl font-bold"
              >
                ×
              </button>
            )}

              {showLocationDropdown && (
                <select
                  size={5}
                  value={selectedLocation}
                  onChange={onLocationSelect}
                  className="absolute z-20 w-full mt-1 bg-white rounded-xl shadow max-h-50 overflow-auto outline-none cursor-pointer"
                >
                  <option value="" className="text-sm md:text-lg p-2 font-bold">
                    Semua Lokasi
                  </option>
                  {locations.map((loc) => (
                    <option
                      key={loc}
                      value={loc}
                      className="text-sm md:text-lg p-2 font-bold"
                    >
                      {loc}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>

        {/* List */}
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

//   const toSlug = (title: string) =>
//     title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/^-+|-+$/g, "");

//   useEffect(() => {
//     setJobs(Jobs);
//     const params = new URLSearchParams(window.location.search);
//     const slug = params.get("jobdetail");
//     if (slug) {
//       const found = Jobs.find((j) => toSlug(j.title) === slug);
//       if (found) setSelectedJob(found);
//     }
//   }, []);

//   useEffect(() => {
//     const onPopState = (e: PopStateEvent) => {
//       if (!e.state?.inDetail) setSelectedJob(null);
//     };
//     window.addEventListener("popstate", onPopState);
//     return () => window.removeEventListener("popstate", onPopState);
//   }, []);

//   const filteredJobs = jobs
//     .filter(
//       (j) =>
//         j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedLocation ? j.location === selectedLocation : true)
//     )
//     .slice(0, 5);

//   const allFilteredJobs = jobs.filter(
//     (j) =>
//       j.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedLocation ? j.location === selectedLocation : true)
//   );

//   const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
//     setSearchTerm(e.target.value);

//   const clearSearch = () => setSearchTerm("");

//   const onLocationSelect = (e: ChangeEvent<HTMLSelectElement>) => {
//     setSelectedLocation(e.target.value);
//     setShowLocationDropdown(false);
//   };

//   const clearLocation = () => setSelectedLocation("");

//   const openDetail = (job: Job) => {
//     setSelectedJob(job);
//     const slug = toSlug(job.title);
//     window.history.pushState({ inDetail: true }, "", `?jobdetail=${slug}`);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const closeDetail = () => {
//     setSelectedJob(null);
//     window.history.pushState({}, "", window.location.pathname);
//   };

//   const toggleShowAll = () => setShowAll((v) => !v);

//   if (selectedJob) {
//     return <JobDetail job={selectedJob} onClose={closeDetail} />;
//   }

//   return (
//     <main className="mb-150 md:mb-105">
//       <div className="relative w-full h-50 md:w-auto md:h-190">
//         <Image
//           src="/img/heroKarir.png"
//           alt="hero background"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />

//         {/* Filter bar */}
//         <div className="absolute inset-x-0 top-38 md:top-150 w-[90%] md:w-[86%] h-12 mx-auto z-20 flex gap-4">
//           {/* Search input with clear */}
//           <div className="relative flex-1">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={onSearchChange}
//               placeholder="Ketik posisi impianmu..."
//               className="w-full h-12 pl-12 pr-10 rounded-xl shadow outline-none"
//             />
//             <Image
//               src="/img/search.png"
//               alt="search"
//               width={24}
//               height={24}
//               className="absolute left-3 top-1/2 -translate-y-1/2"
//             />
//             {searchTerm && (
//               <button
//                 onClick={clearSearch}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-xl font-bold"
//               >
//                 ×
//               </button>
//             )}
//           </div>

//           {/* Location dropdown with clear */}
//           <div className="relative w-2/5">
//             <button
//               onClick={() => setShowLocationDropdown((v) => !v)}
//               className="w-full h-12 bg-white rounded-xl flex items-center justify-between px-4 shadow font-bold"
//             >
//               {selectedLocation || "Pilih lokasi"}
//               <span className="text-lg">{showLocationDropdown ? "▲" : "▼"}</span>
//             </button>
//             {selectedLocation && (
//               <button
//                 onClick={clearLocation}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-xl font-bold"
//               >
//                 ×
//               </button>
//             )}

//             {showLocationDropdown && (
//               <select
//                 size={5}
//                 value={selectedLocation}
//                 onChange={onLocationSelect}
//                 className="absolute z-20 w-full mt-1 bg-white rounded-xl shadow max-h-52 overflow-auto outline-none"
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

//         {/* Job list */}
//         <div className="absolute inset-x-0 top-170 mx-auto z-10">
//           <JobList
//             filteredJobs={filteredJobs}
//             allFilteredJobs={allFilteredJobs}
//             showAll={showAll}
//             openDetail={openDetail}
//             toggleShowAll={toggleShowAll}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

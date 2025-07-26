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
  // const [showAll, setShowAll] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const toSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^-+|-+$/g, "");

  useEffect(() => {
    setJobs(Jobs);
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("jobdetail");
    if (slug) {
      const found = Jobs.find((j) => toSlug(j.title) === slug);
      if (found) setSelectedJob(found);
    }
  }, []);

  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      if (!e.state?.inDetail) {
        setSelectedJob(null);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  

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
  const clearSearch = () => setSearchTerm("");
  const clearLocation = () => setSelectedLocation("");
  const openDetail = (job: Job) => {
    setSelectedJob(job);
    const slug = toSlug(job.title);
    window.history.pushState({ inDetail: true }, "", `?jobdetail=${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const closeDetail = () => {
    setSelectedJob(null);
    window.history.pushState({}, "", window.location.pathname);
  };

  if (selectedJob) {
    return <JobDetail job={selectedJob} onClose={closeDetail} />;
  }

  return (
    <main className="mb-150 md:mb-105">
      <div className="relative w-full h-50 sm:h-120 lg:w-auto lg:h-190">
        <Image
          src="/img/heroKarir.png"
          alt="hero background"
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Search & filter */}
        <div className="absolute inset-x-0 top-38 md:top-85 lg:top-150 w-[90%] md:w-[86%] mx-auto z-20 overflow-visible">
          <div className="flex flex-col md:flex-row gap-5 sm:gap-18">
            {/* Search Bar */}
            <div className="relative flex-1 bg-white rounded-lg md:rounded-xl flex items-center px-0 md:px-4 md:py-2 shadow">
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
                className="-ml-4 md:ml-1 w-full outline-none text-base lg:text-xl font-normal"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 text-xl font-bold"
                >
                  ×
                </button>
              )}
            </div>

            {/* Location Filter */}
            <div className="relative w-full md:w-2/7">
              <button
                onClick={() => setShowLocationDropdown((v) => !v)}
                className="w-full h-8 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-between px-4 py-2 shadow font-bold text-sm md:text-lg"
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
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 text-xl font-bold"
                >
                  ×
                </button>
              )}

              {showLocationDropdown && (
                <select
                  size={5}
                  value={selectedLocation}
                  onChange={onLocationSelect}
                  className="absolute z-30 w-full mt-1 bg-white rounded-xl shadow max-h-50 overflow-auto outline-none cursor-pointer"
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

        {/* Job List */}
        <div className="absolute inset-x-0 top-170 mx-auto z-10">
          <JobList
            allFilteredJobs={allFilteredJobs}
            openDetail={openDetail}
          />
        </div>
      </div>
    </main>
  );
}

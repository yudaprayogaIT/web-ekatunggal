"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";

interface CollapsibleSectionProps {
  title: string;
  lihatSemuaHref?: string;
  children: ReactNode;
}

export default function CollapsibleSection({
  title,
  lihatSemuaHref,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    // <section className="rounded-lg overflow-hidden shadow-sm mb-8">
    //   <div
    //     className="flex justify-between items-center px-4 py-2 bg-gray-100 cursor-pointer font-[montserrat] font-bold"
    //     onClick={toggle}
    //   >
    //     <h2 className="text-lg text-gray-800">{title}</h2>
    //     <div className="flex items-center space-x-4">
    //       {lihatSemuaHref && (
    //         <Link
    //           href={lihatSemuaHref}
    //           className="text-md text-gray-400 hover:text-gray-800 hover:underline"
    //           onClick={(e) => e.stopPropagation()}
    //         >
    //           Lihat Semua
    //         </Link>
    //       )}
    //       <span className="text-xl text-gray-600">{isOpen ? "−" : "+"}</span>
    //     </div>
    //   </div>
    //   {isOpen && <div className="p-4 bg-white">{children}</div>}
    // </section>
    <section className="rounded-lg overflow-hidden shadow-sm mb-8">
      <div
        className="flex justify-between items-center px-4 py-2 bg-gray-100 cursor-pointer font-[montserrat] font-bold"
        onClick={toggle}
      >
        <div className="flex items-center gap-1">
          <h2
            className={`text-lg transition-all duration-200 ${
              isOpen ? "text-gray-800" : "text-gray-600"
            }`}
          >
            {title}
          </h2>
          {/* <span className="text-xl text-gray-600">
            {isOpen ? "−" : "+"}
          </span> */}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="flex items-center space-x-4">
          {lihatSemuaHref && (
            <Link
              href={lihatSemuaHref}
              className="text-md text-gray-400 hover:text-gray-800 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Lihat Semua
            </Link>
          )}
        </div>
      </div>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </section>
  );
}

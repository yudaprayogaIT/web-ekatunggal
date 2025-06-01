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
    <section className="border rounded-lg overflow-hidden shadow-sm mb-8">
      <div
        className="flex justify-between items-center px-4 py-2 bg-gray-100 cursor-pointer"
        onClick={toggle}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center space-x-4">
          {lihatSemuaHref && (
            <Link
              href={lihatSemuaHref}
              className="text-sm text-blue-600 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Lihat Semua
            </Link>
          )}
          <span className="text-xl text-gray-600">{isOpen ? "−" : "+"}</span>
        </div>
      </div>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </section>
  );
}

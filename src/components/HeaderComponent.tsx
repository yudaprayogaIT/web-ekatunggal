"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  href: string;
}

export default function HeaderComponent() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Produk", href: "/produk" },
    { name: "Karir", href: "/karir" },
    { name: "Kontak Kami", href: "/kontak" },
  ];

  return (
    <nav className="sticky top-0 z-[9999] bg-[#ffffffe0] shadow-sm">
      <div className="h-[8vh] flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo_etm.png"
            alt="etm-logo"
            width={80}
            height={60}
            className="h-[6vh] w-auto"
          />
        </Link>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="transition-transform duration-200"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h14"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 uppercase font-bold text-sm font-[montserrat] relative">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`hover:text-[var(--colorRed)] transition ${
                    isActive ? "text-[var(--colorRed)]" : "text-black"
                  }`}
                >
                  {item.name}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[var(--colorRed)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-b border-gray-200 overflow-hidden absolute top-[8vh] left-0 w-full bg-white z-[9998] transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 shadow-md border-t border-gray-100 space-y-2 uppercase font-bold text-[var(--colorBlack)] text-xs font-[montserrat]">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block ${
                  isActive ? "text-[var(--colorRed)]" : "text-black"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

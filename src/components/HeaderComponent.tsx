"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [turunan, setTurunan] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[9999] bg-white shadow-sm">
      <div className="h-[8vh] flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/img/logo_etm.png"
            alt="etm-logo"
            width={80}
            height={60}
            className="h-[6vh] w-auto"
          />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            className="lg:hidden transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className={"w-6 h-6 text-black"}
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
        <div className="hidden lg:flex space-x-8 uppercase font-bold text-sm font-[montserrat]">
          <Link href="#" className="hover:text-[var(--colorRed)] transition">
            Tentang Kami
          </Link>

          <div className="relative group">
            <button
              className="hover:text-[var(--colorRed)] transition uppercase"
              onClick={() => setTurunan(!turunan)}
            >
              Produk
            </button>
            {turunan && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-40 -ml-4">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:text-[var(--colorRed)] transition"
                >
                  Bahan Baku
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:text-[var(--colorRed)] transition"
                >
                  Barang Jadi
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className="hover:text-[var(--colorRed)] transition">
            Karir
          </Link>

          <Link href="#" className="hover:text-[var(--colorRed)] transition">
            Kontak Kami
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-[8vh] left-0 w-full bg-white z-[9998] transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 py-4 shadow-md border-t border-gray-100 space-y-2 uppercase font-bold text-[var(--colorBlack)] text-xs font-[montserrat]">
          <Link href="#" className="block">
            Tentang Kami
          </Link>

          {/* Produk Submenu */}
          <div>
            <button
              onClick={() => setIsProductOpen(!isProductOpen)}
              className="flex items-center justify-between w-full cursor-pointer uppercase"
            >
              <span>Produk</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isProductOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Submenu Items */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isProductOpen
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="absolute left-6 md:hidden bottom-[41px] h-[25%] w-[1px] bg-[var(--colorGrey)] opacity-25" />
              <div className="relative ml-6 space-y-1 font-bolt text-xs">
                <Link href="#" className="block">
                  Bahan Baku
                </Link>
                <Link href="#" className="block">
                  Barang Jadi
                </Link>
              </div>
            </div>
          </div>

          <Link href="#" className="block">
            Karir
          </Link>

          <Link href="#" className="block">
            Tentang Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;

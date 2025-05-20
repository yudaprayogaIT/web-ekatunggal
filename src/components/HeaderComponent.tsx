// import Image from "next/image";
// import Link from "next/link";

// function HeaderComponent() {
//   return (
//     <nav className="sticky top-0 z-[9999] bg-[var(--colorWhite)] shadow-sm">
//       <div className="h-[8vh] flex items-center w-full px-4">
//         {/* Navbar Start */}
//         <div className="flex items-center justify-between w-full">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Image
//               src="/img/logo_etm.png"
//               alt="etm-logo"
//               width={80}
//               height={60}
//               className="h-[6vh] w-auto"
//             />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden dropdown dropdown-end">
//             <label tabIndex={0} className="btn btn-ghost">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h14"
//                 />
//                 {/* <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 /> */}
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-md shadow-lg mt-1 -mr-4 p-4 w-[100vw] z-[999] text-base uppercase font-bold font-[montserrat]"
//             >
//               <li>
//                 <Link href="#">Tentang Kami</Link>
//               </li>
//               <li>
//                 <details>
//                   <summary>Produk</summary>
//                   <ul className="p-2 bg-base-100 w-40 rounded-t-none">
//                     <li>
//                       <Link href="#">Bahan Baku</Link>
//                     </li>
//                     <li>
//                       <Link href="#">Barang Jadi</Link>
//                     </li>
//                   </ul>
//                 </details>
//               </li>
//               <li>
//                 <Link href="#">Karir</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex">
//             <ul className="menu menu-horizontal space-x-8 uppercase font-bold font-[montserrat] text-sm">
//               <li>
//                 <Link href="#">Tentang Kami</Link>
//               </li>
//               <li>
//                 <details>
//                   <summary>Produk</summary>
//                   <ul className="p-1 bg-base-100 w-40 rounded-t-none">
//                     <li>
//                       <Link href="#">Bahan Baku</Link>
//                     </li>
//                     <li>
//                       <Link href="#">Barang Jadi</Link>
//                     </li>
//                   </ul>
//                 </details>
//               </li>
//               <li>
//                 <Link href="#">Karir</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default HeaderComponent;

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
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
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
      {isOpen && (
        <div className="lg:hidden bg-white px-4 py-2 shadow-md border-t border-gray-100 space-y-2 uppercase font-bold text-[var(--colorBlack)] text-xs font-[montserrat]">
          <Link href="#" className="block">
            Tentang Kami
          </Link>

          {/* Produk Dropdown */}
          <div>
            <button
              onClick={() => setIsProductOpen(!isProductOpen)}
              className="flex items-center justify-between w-full cursor-pointer uppercase relative"
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

            {isProductOpen && (
              <>
                <div className="absolute left-5 md:hidden bottom-8 h-[20%] w-[1px] bg-[var(--colorGrey)] opacity-25" />
                <div className="ml-4 mt-2 space-y-1 text-[var(--colorBlack)] font-[montserrat] font-bold">
                  <Link href="#" className="block">
                    Bahan Baku
                  </Link>
                  <Link href="#" className="block">
                    Barang Jadi
                  </Link>
                </div>
              </>
            )}
          </div>

          <Link href="#" className="block">
            Karir
          </Link>
          <Link href="#" className="block">
            Kontak kami
          </Link>
        </div>
      )}
    </nav>
  );
}

export default HeaderComponent;

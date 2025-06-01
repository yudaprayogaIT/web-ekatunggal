"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HeaderComponent() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const menuItems = [
    { name: "Tentang Kami", href: "/tentang" },
    {
      name: "Produk",
      href: "/produk",
      // children: [
      //   { name: "Bahan Baku", href: "/produk/bahan-baku" },
      //   { name: "Barang Jadi", href: "/produk/barang-jadi" },
      // ],
    },
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
            onClick={() => setIsOpen(!isOpen)}
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

                {/* Dropdown for Produk */}
                {/* {item.children && (
                  <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-lg rounded-md mt-2 min-w-[160px] z-50">
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href;

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 hover:text-[var(--colorRed)] transition ${
                            isChildActive
                              ? "text-[var(--colorRed)] font-semibold"
                              : ""
                          }`}
                        >
                          {child.name}
                        </Link>
                      );
                    })}
                  </div>
                )} */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden absolute top-[8vh] left-0 w-full bg-white z-[9998] transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 shadow-md border-t border-gray-100 space-y-2 uppercase font-bold text-[var(--colorBlack)] text-xs font-[montserrat]">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            // if (!item.children) {
            //   return (
            //     <Link key={item.href} href={item.href} className="block">
            //       {item.name}
            //     </Link>
            //   );
            // }

            // Menu with dropdown
            return (
              <div key={item.href}>
                <button
                  onClick={() => setIsProductOpen(!isProductOpen)}
                  className="flex items-center justify-between w-full uppercase"
                >
                  <span
                    className={`${isActive ? "text-[var(--colorRed)]" : ""}`}
                  >
                    {item.name}
                  </span>
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
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isProductOpen
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-4 space-y-1">
                    {/* {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block pl-2 ${
                          pathname === child.href
                            ? "text-[var(--colorRed)] font-semibold"
                            : ""
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function HeaderComponent() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProductOpen, setIsProductOpen] = useState(false);

//   const menuItems = [
//     { name: "Tentang Kami", href: "/tentang" },
//     {
//       name: "Produk",
//       href: "/produk",
//       children: [
//         { name: "Bahan Baku", href: "/produk/bahan-baku" },
//         { name: "Barang Jadi", href: "/produk/barang-jadi" },
//       ],
//     },
//     { name: "Karir", href: "/karir" },
//     { name: "Kontak Kami", href: "/kontak" },
//   ];

//   return (
//     <nav className="sticky top-0 z-[9999] bg-[#ffffffe0] shadow-sm">
//       <div className="h-[8vh] flex items-center justify-between px-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/img/logo_etm.png"
//             alt="etm-logo"
//             width={80}
//             height={60}
//             className="h-[6vh] w-auto"
//           />
//         </Link>

//         {/* Mobile Button */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle Menu"
//             className="transition-transform duration-200"
//           >
//             <svg
//               className="w-6 h-6 text-black"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h8m-8 6h14"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex space-x-8 uppercase font-bold text-sm font-[montserrat] relative">
//           {menuItems.map((item) => {
//             const isActive =
//               pathname === item.href || pathname.startsWith(item.href + "/");

//             return (
//               <div key={item.href} className="relative group">
//                 <Link
//                   href={item.href}
//                   className={`hover:text-[var(--colorRed)] transition ${
//                     isActive ? "text-[var(--colorRed)]" : "text-black"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>

//                 {isActive && (
//                   <motion.div
//                     layoutId="nav-indicator"
//                     className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[var(--colorRed)]"
//                     transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                   />
//                 )}

//                 {/* Dropdown for Produk */}
//                 {item.children && (
//                   <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-lg rounded-md mt-2 min-w-[160px] z-50">
//                     {item.children.map((child) => {
//                       const isChildActive = pathname === child.href;

//                       return (
//                         <Link
//                           key={child.href}
//                           href={child.href}
//                           className={`block px-4 py-2 hover:text-[var(--colorRed)] transition ${
//                             isChildActive
//                               ? "text-[var(--colorRed)] font-semibold"
//                               : ""
//                           }`}
//                         >
//                           {child.name}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`lg:hidden overflow-hidden absolute top-[8vh] left-0 w-full bg-white z-[9998] transition-all duration-500 ease-in-out ${
//           isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 py-4 shadow-md border-t border-gray-100 space-y-2 uppercase font-bold text-[var(--colorBlack)] text-xs font-[montserrat]">
//           {menuItems.map((item) => {
//             const isActive =
//               pathname === item.href || pathname.startsWith(item.href + "/");

//             if (!item.children) {
//               return (
//                 <Link key={item.href} href={item.href} className="block">
//                   {item.name}
//                 </Link>
//               );
//             }

//             // Menu with dropdown
//             return (
//               <div key={item.href}>
//                 <button
//                   onClick={() => setIsProductOpen(!isProductOpen)}
//                   className="flex items-center justify-between w-full uppercase"
//                 >
//                   <span
//                     className={`${isActive ? "text-[var(--colorRed)]" : ""}`}
//                   >
//                     {item.name}
//                   </span>
//                   <svg
//                     className={`w-4 h-4 transition-transform duration-200 ${
//                       isProductOpen ? "rotate-180" : "rotate-0"
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                     isProductOpen
//                       ? "max-h-40 opacity-100 mt-2"
//                       : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <div className="ml-4 space-y-1">
//                     {item.children.map((child) => (
//                       <Link
//                         key={child.href}
//                         href={child.href}
//                         className={`block pl-2 ${
//                           pathname === child.href
//                             ? "text-[var(--colorRed)] font-semibold"
//                             : ""
//                         }`}
//                       >
//                         {child.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// }

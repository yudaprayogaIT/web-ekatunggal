// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion, Variants } from "framer-motion";
// import Link from "next/link";
// import FloatingIconComponent from "../FloatingIconComponent";
// import { whatsappHref } from "@/utils/contact";

// // Variants untuk animasi mengetik #EKATUNGGAL pada slide 1
// const containerVariant: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.07,
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       staggerChildren: 0.05,
//       staggerDirection: -1,
//     },
//   },
// };

// const letterVariant: Variants = {
//   hidden: { opacity: 0, x: -10 },
//   visible: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: 10 },
// };

// interface SlideButtonPart {
//   text: string;
//   classes?: string;
// }
// interface ExtraImage {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
//   classes?: string;
// }
// interface Slide {
//   id: string;
//   image: string;
//   alt: string;
//   variant: 1 | 2 | 3 | 4;
//   title?: string;
//   hashtag?: string;
//   button?: {
//     parts: SlideButtonPart[];
//     link: string;
//   };
//   style1?: {
//     container?: string;
//     title?: string;
//     hashtag?: string;
//     button?: string;
//   };
//   title2?: string;
//   socials?: { icon: string; label: string; link: string; classes?: string }[];
//   style2?: {
//     container?: string;
//     title?: string;
//     list?: string;
//     item?: string;
//     icon?: string;
//     link?: string;
//   };
//   textLines?: { text: string; classes?: string }[];
//   extraImages?: ExtraImage[];
//   style3?: { container?: string; line?: string };
// }

// const slides: Slide[] = [
//   // Slide 1
//   {
//     id: "slide1",
//     image: "/img/home/hero.png",
//     alt: "gedung_etm",
//     variant: 1,
//     title: "APAPUN KEBUTUHANMU, SOLUSINYA, ",
//     hashtag: "#EKATUNGGAL",
//     button: {
//       link: whatsappHref,
//       parts: [
//         { text: "TANYA", classes: "text-black" },
//         { text: " VIKA", classes: "text-[var(--colorRed)]" },
//       ],
//     },
//     style1: {
//       container:
//         "absolute top-[45%] left-[6%] w-80 lg:w-[45%] text-white font-bold text-xs lg:text-3xl font-[montserrat]",
//       title: "",
//       hashtag: "block inline-flex",
//       button:
//         "mt-2 inline-block bg-[var(--colorYellow)] p-1.5 lg:p-2 rounded-lg lg:rounded-xl text-[9px] lg:text-base w-23 lg:w-38 mx-auto",
//     },
//   },
//   {
//     id: "slide2",
//     image: "/img/home/homeMedsos.png",
//     alt: "medsos",
//     variant: 2,
//     title2: "FOLLOW US ON SOCIAL MEDIA",
//     socials: [
//       {
//         icon: "/icons/medsos/instagram.png",
//         label: "ekatunggaltunasmandiri",
//         link: "https://instagram.com/ekatunggaltunasmandiri",
//       },
//       {
//         icon: "/icons/medsos/instagram.png",
//         label: "ekatunggalofficial",
//         link: "https://instagram.com/ekatunggalofficial",
//       },
//       {
//         icon: "/icons/medsos/facebook.png",
//         label: "Ekatunggal Tunas Mandiri",
//         link: "https://facebook.com/ekatunggaltunasmandiri",
//       },
//       {
//         icon: "/icons/medsos/tektok.png",
//         label: "ekatunggal_official",
//         link: "https://tiktok.com/@ekatunggal_official",
//       },
//     ],
//     style2: {
//       container: "absolute top-10 lg:top-20 left-6 lg:left-37 w-60 lg:w-150 text-black ",
//       title:
//         "text-xl lg:text-7xl font-bold mb-4 lg:mb-13 leading-none font-[montserrat] text-[var(--colorRed)] tracking-tight",
//       list: "space-y-1 ml-6 lg:space-y-3.5 lg:ml-14",
//       item: "flex items-center font-bold font-[lato] text-sm lg:text-3xl tracking-tighter",
//       icon: "mr-2 lg:mr-4 w-4 lg:w-11",
//       link: "",
//     },
//   },
//   {
//     id: "slide3",
//     image: "/img/home/homeKirim.png",
//     alt: "kirim",
//     variant: 3,
//     extraImages: [
//       {
//         src: "/img/home/homeMap.png",
//         alt: "ikon peta",
//         width: 1920,
//         height: 1920,
//         classes:
//           "mx-auto w-60 -ml-33 mt-20 lg:w-140 lg:-ml-20 lg:mt-50 object-contain",
//       },
//       {
//         src: "/img/home/homePaket.png",
//         alt: "ikon paket",
//         width: 200,
//         height: 200,
//         classes:
//           "absolute top-6 lg:top-5 lg:left-124 w-20 lg:w-65 h-auto",
//       },
//     ],
//     textLines: [
//       {
//         text: "BISA KIRIM",
//         classes:
//           "absolute top-0 right-30 lg:left-0 text-[var(--colorYellow)] -rotate-1 bg-[var(--colorRed)] font-black text-center w-30 lg:w-96 py-1 lg:py-4 ",
//       },
//       {
//         text: "KEMANA SAJA",
//         classes:
//           "absolute top-6 right-25 lg:top-19 lg:-left-12 mt-2 text-[var(--colorRed)] rotate-1 bg-[var(--colorYellow)] font-semibold text-center w-38 lg:w-120 py-1 lg:py-4",
//       },
//     ],
//     style3: {
//       container: "absolute top-5 left-40 text-center",
//       line: "text-lg lg:text-6xl rounded-lg lg:rounded-2xl font-[montserrat] tracking-tight",
//     },
//   },
//   {
//     id: "slide4",
//     image: "/img/home/homeFurniture.png",
//     alt: "furniture",
//     variant: 4,
//     extraImages: [
//       {
//         src: "/img/home/furniture.png",
//         alt: "outline furniture",
//         width: 440,
//         height: 100,
//         classes:
//           "lg:mb-6 w-30 lg:w-110 h-auto ms-auto object-contain",
//       },
//     ],
//     textLines: [
//       {
//         text: "ESTETIK",
//         classes:
//           "inline-block text-end lg:ml-35 text-lg lg:text-6xl text-white font-light tracking-widest",
//       },
//       {
//         text: "ya",
//         classes:
//           "inline-block tracking-wide -rotate-90 text-lg lg:text-6xl text-[var(--colorYellow)] -mr-8 lg:mt-2",
//       },
//       {
//         text: "EKATUNGGAL",
//         classes:
//           "lg:mt-4 bg-[var(--colorRed)] font-bold inline-block p-1 lg:px-2 lg:py-3 text-lg lg:text-4xl lg:text-6xl text-white uppercase tracking-widest",
//       },
//     ],
//     style3: {
//       container:
//         "absolute top-1/3 left-7/9 transform -translate-x-1/2 lg:left-4/5 lg:transform-none text-center",
//       line: "font-[montserrat]",
//     },
//   },
// ];

// const slideVariants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       stiffness: 120,
//       damping: 20,
//       duration: 0.8,
//     },
//   },
//   exit: {
//     opacity: 0,
//     x: -30,
//     transition: { duration: 0.3 },
//   },
// };

// export default function SliderComponent() {
//   const [current, setCurrent] = useState(0);
//   const [animatedKey, setAnimatedKey] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const t = setInterval(
//       () => setCurrent((prev) => (prev + 1) % slides.length),
//       10000
//     );
//     return () => clearInterval(t);
//   }, []);

//   // Reset animasi
//   useEffect(() => {
//     setAnimatedKey((k) => k + 1);
//   }, [current]);

//   // Loop animasi ulang tiap 5 detik
//   useEffect(() => {
//     const ri = setInterval(() => setAnimatedKey((k) => k + 1), 5000);
//     return () => clearInterval(ri);
//   }, []);

//   const hashtag = slides[0].hashtag || "";
//   const letters = Array.from(hashtag);

//   return (
//     <>
//       <section className="relative h-55 lg:w-full lg:h-[82vh] overflow-hidden">
//         <AnimatePresence mode="wait">
//           {slides.map((slide, idx) =>
//             idx === current ? (
//               <motion.div
//   key={slide.id}
//   className="absolute inset-0 z-10"
//   variants={slideVariants}
//   initial="hidden"
//   animate="visible"
//   exit="exit"
// >

//                 <motion.img
//                   src={slide.image}
//                   alt={slide.alt}
//                   initial={{ scale: 1.05 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.8 }}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Slide 1 dengan typing animation */}
//                 {slide.variant === 1 && (
//                   <div className={slide.style1?.container}>
//                     <h2 className={slide.style1?.title}>
//                       {slide.title}
//                       <AnimatePresence mode="wait">
//                         <motion.span
//                           key={animatedKey}
//                           variants={containerVariant}
//                           initial="hidden"
//                           animate="visible"
//                           exit="exit"
//                           className={slide.style1?.hashtag}
//                         >
//                           {letters.map((char, i) => (
//                             <motion.span key={i} variants={letterVariant}>
//                               {char}
//                             </motion.span>
//                           ))}
//                         </motion.span>
//                       </AnimatePresence>
//                     </h2>
//                     <Link
//                       href={slide.button!.link}
//                       target="_blank"
//                       className={slide.style1!.button}
//                     >
//                       {slide.button!.parts.map((p, i) => (
//                         <span key={i} className={p.classes}>
//                           {p.text}
//                         </span>
//                       ))}
//                       <Image
//                         src="/img/wa.png"
//                         width={24}
//                         height={24}
//                         alt="WA"
//                         className="w-3 lg:w-6 inline-block ml-2"
//                       />
//                     </Link>
//                   </div>
//                 )}

//                 {/* Slide 2–4 */}
//                 {slide.variant === 2 && (
//                   <div className={slide.style2?.container}>
//                     <h2 className={slide.style2!.title}>{slide.title2}</h2>
//                     <ul className={slide.style2!.list}>
//                       {slide.socials!.map((s, i) => (
//                         <li key={i} className={slide.style2!.item}>
//                           <Image
//                             src={s.icon}
//                             width={24}
//                             height={24}
//                             alt="icon"
//                             className={slide.style2!.icon}
//                           />
//                           <Link
//                             href={s.link}
//                             target="_blank"
//                             className={slide.style2!.link}
//                           >
//                             {s.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//                 {(slide.variant === 3 || slide.variant === 4) && (
//                   <div className={slide.style3!.container}>
//                     {slide.extraImages!.map((img, i) => (
//                       <Image
//                         key={i}
//                         src={img.src}
//                         alt={img.alt}
//                         width={img.width}
//                         height={img.height}
//                         className={img.classes}
//                       />
//                     ))}
//                     {slide.textLines!.map((line, i) => (
//                       <div
//                         key={i}
//                         className={`${slide.style3!.line} ${line.classes || ""}`}
//                       >
//                         {line.text}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </motion.div>
//             ) : null
//           )}
//         </AnimatePresence>

//         {/* Dots nav */}
//         <div className="absolute bottom-5 w-full flex justify-center z-20">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`mx-1 w-6 h-1 rounded cursor-pointer ${
//                 i === current ? "bg-white" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>

//         <FloatingIconComponent />
//       </section>

//       <div className="w-full h-10 lg:h-[10vh] flex items-center justify-center gap-1 font-[montserrat] bg-[var(--colorRed)] text-white font-bold text-xs lg:text-xl">
//         BEKERJA DAN MELAYANI DENGAN{" "}
//         <span className="text-[var(--colorYellow)]">SEJUTA HATI</span>
//       </div>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import FloatingIconComponent from "../FloatingIconComponent";
import { whatsappHref } from "@/utils/contact";

// Variants untuk slide container (slide up + spring)
const slideVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.3 },
  },
};

// Variants untuk typing animation pada slide 1
const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.07,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const letterVariant: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
};

interface SlideButtonPart {
  text: string;
  classes?: string;
}
interface ExtraImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  classes?: string;
}
interface Slide {
  id: string;
  image: string;
  alt: string;
  variant: 1 | 2 | 3 | 4 | 5;
  title?: string;
  hashtag?: string;
  button?: {
    parts: SlideButtonPart[];
    link: string;
  };
  style1?: {
    container?: string;
    title?: string;
    hashtag?: string;
    button?: string;
  };
  title2?: string;
  socials?: { icon: string; label: string; link: string; classes?: string }[];
  style2?: {
    container?: string;
    title?: string;
    list?: string;
    item?: string;
    icon?: string;
    link?: string;
  };
  textLines?: { text: string; classes?: string }[];
  extraImages?: ExtraImage[];
  style3?: { container?: string; line?: string };
  style5?: { container?: string; line?: string };
}

const slides: Slide[] = [
  // Slide 1
  {
    id: "slide1",
    image: "/img/home/heroHome.png",
    alt: "gedung_etm",
    variant: 1,
    title: "APAPUN KEBUTUHANMU, SOLUSINYA, ",
    hashtag: "#EKATUNGGAL",
    button: {
      link: whatsappHref,
      parts: [
        { text: "TANYA", classes: "text-black" },
        { text: " VIKA", classes: "text-[var(--colorRed)]" },
      ],
    },
    style1: {
      container:
        "absolute inset-y-2/10 sm:inset-y-1/3 right-3 sm:right-0 md:right-10 pr-4 w-2/5 md:w-1/3 lg:w-1/2 xl:w-2/5 text-[10px] md:text-lg lg:text-xl xl:text-4xl text-white font-bold font-[montserrat]",
      title: "",
      hashtag: "block",
      button:
        "mt-1 p-0.5 w-auto text-[8px] rounded-sm md:p-1.5 md:mt-2 md:w-38 md:rounded-xl md:text-base md:mt-2 lg:p-2  mx-auto inline-block bg-[var(--colorYellow)]",
    },
  },
  // Slide 2
  {
    id: "slide2",
    image: "/img/home/homeMedsos.png",
    alt: "medsos",
    variant: 2,
    title2: "FOLLOW US ON SOCIAL MEDIA",
    socials: [
      {
        icon: "/icons/medsos/instagram.png",
        label: "ekatunggaltunasmandiri",
        link: "https://instagram.com/ekatunggaltunasmandiri",
      },
      {
        icon: "/icons/medsos/instagram.png",
        label: "ekatunggalofficial",
        link: "https://instagram.com/ekatunggalofficial",
      },
      {
        icon: "/icons/medsos/facebook.png",
        label: "Ekatunggal Tunas Mandiri",
        link: "https://facebook.com/ekatunggaltunasmandiri",
      },
      {
        icon: "/icons/medsos/tektok.png",
        label: "ekatunggal_official",
        link: "https://tiktok.com/@ekatunggal_official",
      },
    ],
    style2: {
      container:
        "absolute w-40 top-10 left-10 sm:w-80 sm:left-10 lg:w-150 lg:top-20 lg:left-37 text-black",
      title:
        "text-md sm:text-4xl lg:text-7xl font-bold mb-4 lg:mb-13 leading-none font-[montserrat] text-[var(--colorRed)] tracking-tight",
      list: "ml-1 sm:ml-4 sm:space-y-2 lg:space-y-3.5 lg:ml-14",
      item: "flex items-center font-bold font-[lato] text-xs sm:text-xl lg:text-3xl tracking-tighter",
      icon: "mr-1 sm:mr-4 lg:mr-4 w-3 sm:w-8 lg:w-11",
      link: "",
    },
  },
  // Slide 3
  {
    id: "slide3",
    image: "/img/home/homeKirim.png",
    alt: "kirim",
    variant: 3,
    extraImages: [
      {
        src: "/img/home/homeMap.png",
        alt: "ikon peta",
        width: 1920,
        height: 1920,
        classes:
          "mx-auto w-60 -ml-30 mt-19 sm:w-100 sm:-ml-30 sm:mt-30 lg:w-135 lg:-ml-20 lg:mt-50 object-contain",
      },
      {
        src: "/img/home/homePaket.png",
        alt: "ikon paket",
        width: 200,
        height: 200,
        classes: "absolute w-18 top-4.5 left-4.5 sm:w-38 sm:top-11 sm:left-45 lg:top-5 lg:left-124 lg:w-65 xl:left-94 2xl:w-75 2xl:top-17 2xl:left-138 h-auto",
      },
    ],
    textLines: [
      {
        text: "BISA KIRIM",
        classes:
          "absolute w-20 py-1 top-3 right-35 sm:w-55 lg:w-96 lg:py-4 lg:left-0 text-[var(--colorYellow)] -rotate-1 bg-[var(--colorRed)] font-black text-center ",
      },
      {
        text: "KEMANA SAJA",
        classes:
          "absolute w-25 py-1 top-6 right-32 sm:w-62 sm:top-11 sm:right-32 lg:w-120 lg:py-4 lg:top-19 lg:-left-12 mt-2 text-[var(--colorRed)] rotate-1 bg-[var(--colorYellow)] font-semibold text-center",
      },
    ],
    style3: {
      container: "absolute top-5 left-40 text-center",
      line: "text-xs sm:text-3xl lg:text-6xl rounded-lg lg:rounded-2xl font-[montserrat] tracking-tight",
    },
  },
  // Slide 4
  {
    id: "slide4",
    image: "/img/home/homeFurniture.png",
    alt: "furniture",
    variant: 4,
    extraImages: [
      {
        src: "/img/home/furnitureText.png",
        alt: "outline furniture",
        width: 3600,
        height: 3600,
        classes: "w-80 sm:w-100 lg:w-110 lg:mb-6 h-auto ms-auto object-contain",
      },
    ],
    textLines: [
      {
        text: "ESTETIK",
        classes:
          "inline-block text-end lg:ml-35 text-lg lg:text-6xl text-white font-light tracking-widest",
      },
      {
        text: "ya",
        classes:
          "inline-block tracking-wide -rotate-90 text-lg lg:text-6xl text-[var(--colorYellow)] -mr-8 lg:mt-2",
      },
      {
        text: "EKATUNGGAL",
        classes:
          "lg:mt-4 bg-[var(--colorRed)] font-bold inline-block p-1 lg:px-2 lg:py-3 text-lg lg:text-4xl lg:text-6xl text-white uppercase tracking-widest",
      },
    ],
    style3: {
      container:
        "absolute top-1/4 left-7/9 transform -translate-x-1/2 sm:top-1/3 sm:left-7/9 lg:left-7/9 lg:transform-none text-center",
      line: "font-[montserrat]",
    },
  },
  // Slide 5
  {
    id: "slide5",
    image: "/img/home/heroMaterial.png",
    alt: "material",
    variant: 5,
    extraImages: [
      {
        src: "/img/home/materialText.png",
        alt: "outline material",
        width: 1363,
        height: 1000,
        classes: "sm:mb-2 ml-1 w-80 sm:w-120 top-10 lg:w-250 h-auto object-contain",
      },
    ],
    textLines: [
      {
        text: "HANYA DI EKATUNGGAL",
        classes:
          "",
      },
    ],
    style5: {
      container: "absolute top-10 left-5 sm:left-10 sm:top-15 2xl:top-30 2xl:left-15 text-center",
      line: "font-[montserrat]",
    },
  },
];

export default function SliderComponent() {
  const [current, setCurrent] = useState(0);
  const [animatedKey, setAnimatedKey] = useState(0);

  // Auto-rotate setiap 15 detik
  useEffect(() => {
    const t = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      15000
    );
    return () => clearInterval(t);
  }, []);

  // Reset typing animation
  useEffect(() => {
    setAnimatedKey((k) => k + 1);
  }, [current]);

  // Loop restart typing tiap 5 detik
  useEffect(() => {
    const ri = setInterval(() => setAnimatedKey((k) => k + 1), 5000);
    return () => clearInterval(ri);
  }, []);

  const hashtag = slides[0].hashtag || "";
  const letters = Array.from(hashtag);

  // Handler arrow
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <>
      <section className="relative w-full h-74 md:h-100 xl:h-[82vh] overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map((slide, idx) =>
            idx === current ? (
              <motion.div
                key={slide.id}
                className="absolute inset-0 z-10"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                // drag swipe untuk mobile
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 50) prev();
                  else if (info.offset.x < -50) next();
                }}
              >
                <motion.img
                  src={slide.image}
                  alt={slide.alt}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full -mt-11 sm:mt-0 object-contain sm:object-cover"
                />

                {slide.variant === 1 && (
                  <div className={slide.style1?.container}>
                    <h2 className={slide.style1?.title}>
                      {slide.title}
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={animatedKey}
                          variants={containerVariant}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className={slide.style1?.hashtag}
                        >
                          {letters.map((char, i) => (
                            <motion.span key={i} variants={letterVariant}>
                              {char}
                            </motion.span>
                          ))}
                        </motion.span>
                      </AnimatePresence>
                    </h2>
                    <Link
                      href={slide.button!.link}
                      target="_blank"
                      className={slide.style1!.button}
                    >
                      {slide.button!.parts.map((p, i) => (
                        <span key={i} className={p.classes}>
                          {p.text}
                        </span>
                      ))}
                      <Image
                        src="/img/wa.png"
                        width={24}
                        height={24}
                        alt="WA"
                        className="w-2 md:w-6 inline-block ml-0.5 md:ml-2"
                      />
                    </Link>
                  </div>
                )}

                {slide.variant === 2 && (
                  <div className={slide.style2?.container}>
                    <h2 className={slide.style2!.title}>{slide.title2}</h2>
                    <ul className={slide.style2!.list}>
                      {slide.socials!.map((s, i) => (
                        <li key={i} className={slide.style2!.item}>
                          <Image
                            src={s.icon}
                            width={24}
                            height={24}
                            alt="icon"
                            className={slide.style2!.icon}
                          />
                          <Link
                            href={s.link}
                            target="_blank"
                            className={slide.style2!.link}
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {(slide.variant === 3 || slide.variant === 4) && (
                  <div className={slide.style3!.container}>
                    {slide.extraImages!.map((img, i) => (
                      <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className={img.classes}
                      />
                    ))}
                    {slide.textLines!.map((line, i) => (
                      <div
                        key={i}
                        className={`${slide.style3!.line} ${
                          line.classes || ""
                        }`}
                      >
                        {line.text}
                      </div>
                    ))}
                  </div>
                )}
                {/* slide 5 */}
                {slide.variant === 5 && (
                  <div className={slide.style5!.container}>
                    {/* gambar outline seperti biasa */}
                    {slide.extraImages!.map((img, i) => (
                      <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className={img.classes}
                      />
                    ))}

                    {/* teks statis + animasi huruf per huruf untuk “EKATUNGGAL” */}
                    <h2
                      className={`${
                        slide.style5!.line
                      } -ml-26 text-base sm:-ml-40 sm:text-2xl lg:-ml-95 lg:text-5xl font-extrabold text-[var(--colorRed)] inline-flex`}
                    >
                      {/* bagian statis */}
                      <span>HANYA DI&nbsp;</span>

                      {/* animasi */}
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={animatedKey} // biar restart tiap slide change
                          variants={containerVariant} // staggerChildren
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="inline-flex"
                        >
                          {Array.from("EKATUNGGAL").map((char, i) => (
                            <motion.span key={i} variants={letterVariant}>
                              {char}
                            </motion.span>
                          ))}
                        </motion.span>
                      </AnimatePresence>
                    </h2>
                  </div>
                )}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Prev/Next Arrows */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute hidden lg:block left-0 top-1/2 transform -translate-y-1/2 opacity-25 hover:opacity-50 z-20"
        >
          <Image
            src="/img/produk/arrow-left.png"
            alt="Panah Kanan"
            width={60}
            height={60}
          />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute hidden lg:block right-0 top-1/2 transform -translate-y-1/2 opacity-25 hover:opacity-50 z-20"
        >
          <Image
            src="/img/produk/arrow-right.png"
            alt="Panah Kanan"
            width={60}
            height={60}
          />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-5 w-full flex justify-center z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`mx-1 w-1 sm:w-6 h-1 -mt-23 sm:mt-0 rounded cursor-pointer ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <FloatingIconComponent />
      </section>

      <div className="w-full h-10 -mt-26 sm:mt-0 lg:h-[10vh] flex items-center justify-center gap-1 font-[montserrat] bg-[var(--colorRed)] text-white font-bold text-sm lg:text-xl">
        BEKERJA DAN MELAYANI DENGAN{" "}
        <span className="text-[var(--colorYellow)]">SEJUTA HATI</span>
      </div>
    </>
  );
}

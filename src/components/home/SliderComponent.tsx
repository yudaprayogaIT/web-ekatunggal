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
//         "absolute top-[45%] left-[6%] w-80 md:w-[45%] text-white font-bold text-xs md:text-3xl font-[montserrat]",
//       title: "",
//       hashtag: "block inline-flex",
//       button:
//         "mt-2 inline-block bg-[var(--colorYellow)] p-1.5 md:p-2 rounded-lg md:rounded-xl text-[9px] md:text-base w-23 md:w-38 mx-auto",
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
//       container: "absolute top-10 md:top-20 left-6 md:left-37 w-60 md:w-150 text-black ",
//       title:
//         "text-xl md:text-7xl font-bold mb-4 md:mb-13 leading-none font-[montserrat] text-[var(--colorRed)] tracking-tight",
//       list: "space-y-1 ml-6 md:space-y-3.5 md:ml-14",
//       item: "flex items-center font-bold font-[lato] text-sm md:text-3xl tracking-tighter",
//       icon: "mr-2 md:mr-4 w-4 md:w-11",
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
//           "mx-auto w-60 -ml-33 mt-20 md:w-140 md:-ml-20 md:mt-50 object-contain",
//       },
//       {
//         src: "/img/home/homePaket.png",
//         alt: "ikon paket",
//         width: 200,
//         height: 200,
//         classes:
//           "absolute top-6 md:top-5 md:left-124 w-20 md:w-65 h-auto",
//       },
//     ],
//     textLines: [
//       {
//         text: "BISA KIRIM",
//         classes:
//           "absolute top-0 right-30 md:left-0 text-[var(--colorYellow)] -rotate-1 bg-[var(--colorRed)] font-black text-center w-30 md:w-96 py-1 md:py-4 ",
//       },
//       {
//         text: "KEMANA SAJA",
//         classes:
//           "absolute top-6 right-25 md:top-19 md:-left-12 mt-2 text-[var(--colorRed)] rotate-1 bg-[var(--colorYellow)] font-semibold text-center w-38 md:w-120 py-1 md:py-4",
//       },
//     ],
//     style3: {
//       container: "absolute top-5 left-40 text-center",
//       line: "text-lg md:text-6xl rounded-lg md:rounded-2xl font-[montserrat] tracking-tight",
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
//           "md:mb-6 w-30 md:w-110 h-auto ms-auto object-contain",
//       },
//     ],
//     textLines: [
//       {
//         text: "ESTETIK",
//         classes:
//           "inline-block text-end md:ml-35 text-lg md:text-6xl text-white font-light tracking-widest",
//       },
//       {
//         text: "ya",
//         classes:
//           "inline-block tracking-wide -rotate-90 text-lg md:text-6xl text-[var(--colorYellow)] -mr-8 md:mt-2",
//       },
//       {
//         text: "EKATUNGGAL",
//         classes:
//           "md:mt-4 bg-[var(--colorRed)] font-bold inline-block p-1 md:px-2 md:py-3 text-lg md:text-4xl md:text-6xl text-white uppercase tracking-widest",
//       },
//     ],
//     style3: {
//       container:
//         "absolute top-1/3 left-7/9 transform -translate-x-1/2 md:left-4/5 md:transform-none text-center",
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
//       <section className="relative h-55 md:w-full md:h-[82vh] overflow-hidden">
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
//                         className="w-3 md:w-6 inline-block ml-2"
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

//       <div className="w-full h-10 md:h-[10vh] flex items-center justify-center gap-1 font-[montserrat] bg-[var(--colorRed)] text-white font-bold text-xs md:text-xl">
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
        "absolute top-50 right-55 w-80 md:w-105 text-white font-bold text-xs md:text-3xl font-[montserrat]",
      title: "",
      hashtag: "block inline-flex",
      button:
        "mt-1 md:mt-2 inline-block bg-[var(--colorYellow)] p-1.5 md:p-2 rounded-lg md:rounded-xl text-[9px] md:text-base w-23 md:w-38 mx-auto",
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
        "absolute top-10 md:top-20 left-6 md:left-37 w-60 md:w-150 text-black ",
      title:
        "text-xl md:text-7xl font-bold mb-4 md:mb-13 leading-none font-[montserrat] text-[var(--colorRed)] tracking-tight",
      list: "space-y-1 ml-6 md:space-y-3.5 md:ml-14",
      item: "flex items-center font-bold font-[lato] text-sm md:text-3xl tracking-tighter",
      icon: "mr-2 md:mr-4 w-4 md:w-11",
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
          "mx-auto w-60 -ml-33 mt-20 md:w-140 md:-ml-20 md:mt-50 object-contain",
      },
      {
        src: "/img/home/homePaket.png",
        alt: "ikon paket",
        width: 200,
        height: 200,
        classes: "absolute top-6 md:top-5 md:left-124 w-20 md:w-65 h-auto",
      },
    ],
    textLines: [
      {
        text: "BISA KIRIM",
        classes:
          "absolute top-0 right-30 md:left-0 text-[var(--colorYellow)] -rotate-1 bg-[var(--colorRed)] font-black text-center w-30 md:w-96 py-1 md:py-4 ",
      },
      {
        text: "KEMANA SAJA",
        classes:
          "absolute top-6 right-25 md:top-19 md:-left-12 mt-2 text-[var(--colorRed)] rotate-1 bg-[var(--colorYellow)] font-semibold text-center w-38 md:w-120 py-1 md:py-4",
      },
    ],
    style3: {
      container: "absolute top-5 left-40 text-center",
      line: "text-lg md:text-6xl rounded-lg md:rounded-2xl font-[montserrat] tracking-tight",
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
        width: 440,
        height: 100,
        classes: "md:mb-6 w-30 md:w-110 h-auto ms-auto object-contain",
      },
    ],
    textLines: [
      {
        text: "ESTETIK",
        classes:
          "inline-block text-end md:ml-35 text-lg md:text-6xl text-white font-light tracking-widest",
      },
      {
        text: "ya",
        classes:
          "inline-block tracking-wide -rotate-90 text-lg md:text-6xl text-[var(--colorYellow)] -mr-8 md:mt-2",
      },
      {
        text: "EKATUNGGAL",
        classes:
          "md:mt-4 bg-[var(--colorRed)] font-bold inline-block p-1 md:px-2 md:py-3 text-lg md:text-4xl md:text-6xl text-white uppercase tracking-widest",
      },
    ],
    style3: {
      container:
        "absolute top-1/3 left-7/9 transform -translate-x-1/2 md:left-4/5 md:transform-none text-center",
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
        classes: "mb-2 md:w-250 ml-1 top-10 h-auto object-contain",
      },
    ],
    textLines: [
      {
        text: "HANYA DI EKATUNGGAL",
        classes:
          "inline-block text-lg md:text-5xl text-[var(--colorRed)] font-extrabold ",
      },
    ],
    style5: {
      container:
        "absolute top-35 left-16",
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
      <section className="relative h-55 md:w-full md:h-[82vh] overflow-hidden">
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
                  className="w-full h-full object-cover"
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
                        className="w-3 md:w-6 inline-block ml-2"
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
                {(slide.variant === 3 ||
                  slide.variant === 4) && (
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
    <h2 className={`${slide.style5!.line} text-lg md:text-5xl font-extrabold text-[var(--colorRed)] inline-flex`}>
      {/* bagian statis */}
      <span>HANYA DI&nbsp;</span>

      {/* animasi */}
      <AnimatePresence mode="wait">
        <motion.span
          key={animatedKey}             // biar restart tiap slide change
          variants={containerVariant}   // staggerChildren
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
          className="absolute hidden md:block left-0 top-1/2 transform -translate-y-1/2 opacity-25 hover:opacity-50 z-20"
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
          className="absolute hidden md:block right-0 top-1/2 transform -translate-y-1/2 opacity-25 hover:opacity-50 z-20"
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
              className={`mx-1 w-6 h-1 rounded cursor-pointer ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <FloatingIconComponent />
      </section>

      <div className="w-full h-10 md:h-[10vh] flex items-center justify-center gap-1 font-[montserrat] bg-[var(--colorRed)] text-white font-bold text-xs md:text-xl">
        BEKERJA DAN MELAYANI DENGAN{" "}
        <span className="text-[var(--colorYellow)]">SEJUTA HATI</span>
      </div>
    </>
  );
}

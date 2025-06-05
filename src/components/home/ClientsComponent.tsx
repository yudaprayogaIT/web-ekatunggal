"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

// Daftar klien
const clients = [
  { src: "/img/clients/olympic.png", alt: "Olympic Logo" },
  { src: "/img/clients/american.png", alt: "American Logo" },
  { src: "/img/clients/jogjaFoamindo.png", alt: "Jogja Foamindo Logo" },
  { src: "/img/clients/djoeraganKasoer.png", alt: "Djoeragan Kasur Logo" },
  { src: "/img/clients/cvGalaxy.png", alt: "CV Galaxy Logo" },
  { src: "/img/clients/bjs.png", alt: "BJS Logo" },
  { src: "/img/clients/powerland.png", alt: "Powerland Logo" },
  { src: "/img/clients/bigPanel.png", alt: "Big Panel Logo" },
  { src: "/img/clients/napolly.png", alt: "Napolly Logo" },
  { src: "/img/clients/bigFoam.png", alt: "Big Foam Logo" },
  { src: "/img/clients/bigLand.png", alt: "Big Land Logo" },
  { src: "/img/clients/bigKoil.png", alt: "Big Koil Logo" },
];

// Duplikat agar seamless
const duplicated = [...clients, ...clients];

export default function ClientsComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Ambil semua item (duplicated), tapi kita cuma butuh lebar 'clients.length' pertama
    const children = Array.from(el.children).slice(
      0,
      clients.length
    ) as HTMLElement[];

    // Baca gap dari CSS Flexbox
    const style = window.getComputedStyle(el);
    const gap = parseFloat(style.gap) || 0;

    // Hitung total lebar scroll: sum offsetWidth + gap tiap item
    const totalScroll = children.reduce(
      (sum, child) => sum + child.offsetWidth + gap,
      0
    );

    // Start loop animasi
    const startLoop = async () => {
      while (true) {
        await controls.start({
          x: -totalScroll,
          transition: { duration: 40, ease: "linear" },
        });
        // Reset langsung tanpa animasi
        controls.set({ x: 0 });
      }
    };

    startLoop();
  }, [controls]);

  return (
    <section className="my-5 md:my-10 w-full mx-auto flex flex-col items-center overflow-hidden">
      <h2 className="text-center text-md md:text-3xl font-bold uppercase font-[montserrat] md:mb-2">
        Konsumen <span className="text-[var(--colorRed)]">Ekatunggal</span>
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-4 md:gap-8 whitespace-nowrap"
          animate={controls}
          style={{ willChange: "transform" }}
        >
          {duplicated.map((c, idx) => (
            <div key={idx} className="flex-shrink-0 w-20 md:w-35 p-2">
              <Image
                src={c.src}
                alt={c.alt}
                width={160}
                height={80}
                className="object-contain"
                priority={idx < clients.length}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

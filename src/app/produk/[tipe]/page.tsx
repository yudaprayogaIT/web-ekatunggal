// src/app/produk/[tipe]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HeaderComponent from "@/components/HeaderComponent";
import Link from "next/link";
import Image from "next/image";
import { FooterComponent } from "@/components/FooterComponent";
import Category, { CategoryHook, TypeProduct } from "@/app/hooks/CategoryHook";
import FloatingIconComponent from "@/components/FloatingIconComponent";

export default function Page() {
  // Ambil segmen dinamis dari URL: [tipe]
  const params = useParams();
  const tipe = params?.tipe as string;

  const [category, setCategory] = useState<Category[]>([]);

  // Cek apakah tipe valid
  const isValidTipe = tipe === "bahanbaku" || tipe === "barangjadi";

  // Fungsi untuk fetch kategori berdasarkan tipe
  const getCategory = async (type: string) => {
    try {
      const data = await CategoryHook({
        type: type === "bahanbaku" ? TypeProduct.BB : TypeProduct.BJ,
      });
      setCategory(data);
    } catch (error) {
      console.error("Gagal mengambil data kategori:", error);
    }
  };

  useEffect(() => {
    // Pastikan Hook selalu dipanggil, lalu cek di dalamnya
    if (!isValidTipe) return;
    getCategory(tipe);
  }, [tipe, isValidTipe]);

  // Jika tipe tidak valid, tampilkan 404/Invalid
  if (!isValidTipe) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-semibold">404/Invalid Tipe</h1>
        <p className="mt-2 text-gray-600">
          Tipe &ldquo;{tipe}&rdquo; tidak dikenali. Pilih “bahanbaku” atau
          “barangjadi”.
        </p>
      </div>
    );
  }

  return (
    <>
      <HeaderComponent />
      <FloatingIconComponent />

      <section className="mb-12">
        <Image
          src={`/img/${
            tipe === "bahanbaku" ? "heroBahanBaku.png" : "heroBarangJadi.png"
          }`}
          alt={tipe === "bahanbaku" ? "hero bahan baku" : "hero barang jadi"}
          width={1920}
          height={1080}
          className="w-full h-[95vh] object-cover"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto mt-8">
          {category.map((item) => (
            <Link
              key={item.name}
              href={`/produk/${tipe}/${encodeURIComponent(item.name)}`}
              className="group border border-gray-200 h-90 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-72">
                <Image
                  src={`https://api-ekatalog.ekatunggal.com/public/files/${item.image}`}
                  alt={item.name}
                  fill
                  className="h-70 group-hover:scale-102 transition-transform duration-300"
                />
              </div>
              <p className="text-3xl mt-2 font-[montserrat] font-bold">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <FooterComponent />
    </>
  );
}

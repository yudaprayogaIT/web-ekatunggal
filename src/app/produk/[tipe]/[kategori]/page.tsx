// src/app/produk/[tipe]/[kategori]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import HeaderComponent from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";
import ProductCard from "@/components/produk/ProductCard";
import Produk, { ProductHook, TypeProduct } from "@/app/hooks/ProductHook";
import FloatingIconComponent from "@/components/FloatingIconComponent";

export default function Page() {
  // Ambil segmen dinamis [tipe] dan [kategori] dari URL
  const params = useParams();
  const tipe = params?.tipe as string;
  const kategori = params?.kategori as string;

  // State: daftar produk yang sudah difetch & di-sort
  const [produk, setProduk] = useState<Produk[]>([]);
  // State untuk toggle menampilkan semua (jika > 5) atau hanya 5
  const [showAll, setShowAll] = useState<boolean>(false);

  // Validasi tipe hanya “bahanbaku” atau “barangjadi”
  const isValidTipe = tipe === "bahanbaku" || tipe === "barangjadi";

  // Fungsi untuk fetch produk berdasarkan tipe & kategori,
  // lalu sort secara case‐insensitive pada properti `nama`.
  const fetchProduct = async (type: string, category: string) => {
    try {
      // 1) Ambil data dari API
      const fetchedProduk: Produk[] = await ProductHook({
        type: type === "bahanbaku" ? TypeProduct.BB : TypeProduct.BJ,
        category,
      });

      // 2) Sort array produk berdasarkan `nama` (case‐insensitive)
      fetchedProduk.sort((a: Produk, b: Produk) =>
        a.nama.toLowerCase().localeCompare(b.nama.toLowerCase())
      );

      // 3) Simpan ke state
      setProduk(fetchedProduk);
    } catch (error) {
      console.error("Gagal mengambil data produk:", error);
    }
  };

  // Saat `tipe` atau `kategori` berubah, fetch ulang jika valid
  useEffect(() => {
    if (!isValidTipe) return;
    if (kategori) {
      fetchProduct(tipe, kategori);
    }
  }, [tipe, kategori, isValidTipe]);

  // Jika tipe tidak valid → tampilkan halaman 404/Invalid
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

  // Jika belum toggle “See More”, hanya ambil 4 pertama
  const displayedProduk = showAll ? produk : produk.slice(0, 4);

  return (
    <>
      <HeaderComponent />
      <FloatingIconComponent />

      <section className="px-6 md:px-12 lg:px-24 py-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-8">
          Kategori: {kategori}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
          {displayedProduk.map((item: Produk, idx: number) => (
            <ProductCard data={item} key={idx} />
          ))}
        </div>

        {/* Tombol See More / See Less hanya muncul jika total produk > 4 */}
        {produk.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-3 bg-[var(--colorYellow)] hover:bg-yellow-600 text-black font-bold rounded-lg transition cursor-pointer"
            >
              {showAll ? "Sembunyikan" : "Lihat Semua"}
            </button>
          </div>
        )}
      </section>

      <FooterComponent />
    </>
  );
}

// //src/app/produk/[tipe]/[kategori]/page.tsx
// "use client";
// import React, { useState } from "react";
// import HeaderComponent from "@/components/HeaderComponent";
// import { FooterComponent } from "@/components/FooterComponent";
// import ProductCard from "@/components/produk/ProductCard";
// import Produk, { ProductHook, TypeProduct } from "@/app/hooks/ProductHook";
// import { useEffect } from "react";

// export default function Page({
//   params,
// }: {
//   params: Promise<{ tipe: string; kategori: string }>;
// }) {
//   const { tipe, kategori } = React.use(params);
//   const [produk, setProduk] = useState<Produk[]>([]);
//   // const [isLoading, setLoading] = useState<boolean>(true);

//   const getProduct = async (type: string) => {
//     try {
//       const data = await ProductHook({
//         type: type == "bahanbaku" ? TypeProduct.BB : TypeProduct.BJ,
//         category: kategori,
//       });
//       setProduk(data);
//       // setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Validasi tipe—hanya “bahanbaku” & “barangjadi” yang diperbolehkan
//   if (tipe !== "bahanbaku" && tipe !== "barangjadi") {
//     return (
//       <div className="p-12 text-center">
//         <h1 className="text-2xl font-semibold">404/Invalid Tipe</h1>
//         <p className="mt-2 text-gray-600">
//           Tipe &quot;{tipe}&quot; tidak dikenali. Pilih “bahanbaku” atau
//           “barangjadi”.
//         </p>
//       </div>
//     );
//   }

//   if (tipe !== "bahanbaku" && tipe !== "barangjadi") {
//     return <div>ddd</div>;
//   }

//   useEffect(() => {
//     getProduct(tipe);
//   }, []);

//   return (
//     <>
//       <HeaderComponent />
//       <section className="px-6 md:px-12 lg:px-24 py-12">
//         <h1 className="text-4xl font-bold mb-8">Kategori: {kategori}</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8"></div>
//         {produk.map((item: Produk, index: number) => {
//           return <ProductCard data={item} key={index} />;
//         })}
//       </section>
//       <FooterComponent />
//     </>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";
import ProductCard from "@/components/produk/ProductCard";
import Produk, { ProductHook, TypeProduct } from "@/app/hooks/ProductHook";

interface PageProps {
  params: {
    tipe: string;
    kategori: string;
  };
}

export default function Page({ params }: PageProps) {
  const { tipe, kategori } = params;
  const [produk, setProduk] = useState<Produk[]>([]);
  // const [isLoading, setLoading] = useState<boolean>(true);

  // Cek validitas tipe
  const isValidTipe = tipe === "bahanbaku" || tipe === "barangjadi";

  useEffect(() => {
    // Karena useEffect selalu dipanggil, kita lakukan pengecekan di dalamnya
    if (!isValidTipe) {
      // Jika tipe tidak valid, tidak perlu fetch
      return;
    }

    // Jika valid, kita ambil data
    const fetchProduct = async () => {
      try {
        const data = await ProductHook({
          type: tipe === "bahanbaku" ? TypeProduct.BB : TypeProduct.BJ,
          category: kategori,
        });
        setProduk(data);
        // setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data produk:", error);
      }
    };

    fetchProduct();
    // Karena fetchProduct dan isValidTipe bergantung ke `tipe` & `kategori`
    // kita tambahkan semua dependency berikut:
  }, [tipe, kategori, isValidTipe]);

  // Render error 404/Invalid Tipe (jika tipe tidak valid)
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
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <h1 className="text-4xl font-bold mb-8">Kategori: {kategori}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produk.map((item, index) => (
            <ProductCard data={item} key={index} />
          ))}
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

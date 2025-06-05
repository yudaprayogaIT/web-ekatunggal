//src/app/produk/[tipe]/[kategori]/page.tsx
"use client";
import React, { useState } from "react";
import HeaderComponent from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";
import ProductCard from "@/components/produk/ProductCard";
import Produk, { ProductHook, TypeProduct } from "@/app/hooks/ProductHook";
import { useEffect } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ tipe: string; kategori: string }>;
}) {
  const { tipe, kategori } = React.use(params);
  const [produk, setProduk] = useState<Produk[]>([]);
  // const [isLoading, setLoading] = useState<boolean>(true);

  const getProduct = async (type: string) => {
    try {
      const data = await ProductHook({
        type: type == "bahanbaku" ? TypeProduct.BB : TypeProduct.BJ,
        category: kategori,
      });
      setProduk(data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Validasi tipe—hanya “bahanbaku” & “barangjadi” yang diperbolehkan
  if (tipe !== "bahanbaku" && tipe !== "barangjadi") {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-semibold">404/Invalid Tipe</h1>
        <p className="mt-2 text-gray-600">
          Tipe &quot;{tipe}&quot; tidak dikenali. Pilih “bahanbaku” atau
          “barangjadi”.
        </p>
      </div>
    );
  }

  if (tipe !== "bahanbaku" && tipe !== "barangjadi") {
    return <div>ddd</div>;
  }

  useEffect(() => {
    getProduct(tipe);
  }, []);

  return (
    <>
      <HeaderComponent />
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <h1 className="text-4xl font-bold mb-8">Kategori: {kategori}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8"></div>
        {produk.map((item: Produk, index: number) => {
          return <ProductCard data={item} key={index} />;
        })}
      </section>
      <FooterComponent />
    </>
  );
}

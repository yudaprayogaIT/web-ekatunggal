"use client";

// src/app/produk/bahanbaku/page.tsx
import HeaderComponent from "@/components/HeaderComponent";
import Link from "next/link";
import Image from "next/image";
// import { buildImageUrl } from "@/utils/images";
import { FooterComponent } from "@/components/FooterComponent";
import React, { useEffect, useState } from "react";
import Category, { CategoryHook, TypeProduct } from "@/app/hooks/CategoryHook";

export default function Page({
  params,
}: {
  params: Promise<{ tipe: string }>;
}) {
  const { tipe } = React.use(params);
  const [category, setCategory] = useState<Category[]>([]);
  // const [isLoading, setLoading] = useState<boolean>(true);

  const getCategory = async (type: string) => {
    try {
      const data = await CategoryHook({
        type: type == "bahanbaku" ? TypeProduct.BB : TypeProduct.BJ,
      });
      setCategory(data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (tipe !== "bahanbaku" && tipe !== "barangjadi") {
    return <div>ddd</div>;
  }

  useEffect(() => {
    getCategory(tipe);
  }, []);

  return (
    <>
      <HeaderComponent />
      <section className="mb-12">
        <Image
          src={`/img/${
            tipe == "bahanbaku" ? "heroBahanBaku.png" : "heroBarangJadi.png"
          }`}
          alt="herobahanbaku"
          width={1920}
          height={1080}
          className="w-full h-[95vh]"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-300 mx-auto mt-8">
          {category.map((item: Category) => {
            // 6) Cari produk terbaru pada kategori ini

            return (
              <Link
                key={item.name}
                href={`/produk/barangjadi/${item.name}`}
                className="group border border-gray-200 h-90 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={`https://api-ekatalog.ekatunggal.com/public/files/${item.image}`}
                  alt={item.name}
                  width={600}
                  height={600}
                  className="object-fit h-70 group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-3xl mt-2 font-[montserrat] font-bold">
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

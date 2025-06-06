"use client";

import BarangJadiComponent from "@/components/produk/BarangJadiComponent";
import BahanBakuComponent from "@/components/produk/BahanBakuComponent";
import CollapsibleSection from "@/components/produk/CollapsibleSection";
import { useEffect, useState } from "react";

import React from "react";
import { TypeProduct } from "@/app/hooks/ProductHook";
import Category, { CategoryHook } from "@/app/hooks/CategoryHook";

const ProductComponent = () => {
  const [productBB, setProductBB] = useState<Category[]>([]);
  const [productBJ, setProductBJ] = useState<Category[]>([]);
  // const [isLoading, setLoading] = useState<{ bb: boolean; bj: boolean }>({
  //   bb: true,
  //   bj: true,
  // });

  // const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
  // const TOKEN = process.env.ERP_TOKEN!;

  // 1) Fetch semua produk
  useEffect(() => {
    getProductBB();
    getProductBJ();
  }, []);

  const getProductBB = async () => {
    try {
      const getProd = await CategoryHook({ limit: 3, type: TypeProduct.BB });
      setProductBB(getProd);
      // setLoading((prev) => ({ ...prev, bb: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const getProductBJ = async () => {
    try {
      const getProd = await CategoryHook({ limit: 3, type: TypeProduct.BJ });
      setProductBJ(getProd);
      // setLoading((prev) => ({ ...prev, bj: false }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="space-y-8 md:px-8 lg:px-8">
        {/* Collapsible “Barang Jadi” */}
        <CollapsibleSection
          title="Barang Jadi"
          lihatSemuaHref="/produk/barangjadi"
        >
          <BarangJadiComponent
            kategoriUtama={productBJ}
            lihatSemuaHref="/produk/barangjadi"
          />
        </CollapsibleSection>
        {/* Collapsible “Bahan Baku” */}
        <CollapsibleSection
          title="Bahan Baku"
          lihatSemuaHref="/produk/bahanbaku"
        >
          <BahanBakuComponent
            kategoriUtama={productBB}
            lihatSemuaHref="/produk/bahanbaku"
          />
        </CollapsibleSection>
      </main>
    </>
  );
};

export default ProductComponent;

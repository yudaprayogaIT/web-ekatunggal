"use client";



import FurnitureComponent from "@/components/produk/FurnitureComponent";
import CollapsibleSection from "@/components/produk/CollapsibleSection";
import { useEffect, useState } from "react";

import React from "react";
import { TypeProduct } from "@/app/hooks/ProductHook";
import Category, { CategoryHook } from "@/app/hooks/CategoryHook";
import MaterialComponent from "./MaterialComponent";

const ProductComponent = () => {
  const [productMT, setProductMT] = useState<Category[]>([]);
  const [productFN, setProductFN] = useState<Category[]>([]);
  // const [isLoading, setLoading] = useState<{ MT: boolean; FN: boolean }>({
  //   MT: true,
  //   FN: true,
  // });

  // const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
  // const TOKEN = process.env.ERP_TOKEN!;

  // 1) Fetch semua produk
  useEffect(() => {
    getProductMT();
    getProductFN();
  }, []);

  const getProductMT = async () => {
    try {
      const getProd = await CategoryHook({ limit: 3, type: TypeProduct.MT });
      setProductMT(getProd);
      // setLoading((prev) => ({ ...prev, MT: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const getProductFN = async () => {
    try {
      const getProd = await CategoryHook({ limit: 3, type: TypeProduct.FN });
      setProductFN(getProd);
      // setLoading((prev) => ({ ...prev, FN: false }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="space-y-8 md:px-8 lg:px-8">
        {/* Collapsible “Furniture” */}
        <CollapsibleSection
          title="Furniture"
          lihatSemuaHref="/produk/furniture"
        >
          <FurnitureComponent
            kategoriUtama={productFN}
            lihatSemuaHref="/produk/furniture"
          />
        </CollapsibleSection>
        {/* Collapsible “Material” */}
        <CollapsibleSection
          title="Material"
          lihatSemuaHref="/produk/material"
        >
          <MaterialComponent
            kategoriUtama={productMT}
            lihatSemuaHref="/produk/material"
          />
        </CollapsibleSection>
      </main>
    </>
  );
};

export default ProductComponent;

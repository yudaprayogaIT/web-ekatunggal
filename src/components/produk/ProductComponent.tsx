"use client";



import FurnitureComponent from "@/components/produk/FurnitureComponent";
import CollapsibleSection from "@/components/produk/CollapsibleSection";
import { useEffect, useState } from "react";

import React from "react";
import { TypeProduct } from "@/app/hooks/ProductHook";
import Category, { CategoryHook } from "@/app/hooks/CategoryHook";
import MaterialComponent from "./MaterialComponent";

const ProductComponent = () => {
  const [productBB, setProductBB] = useState<Category[]>([]);
  const [productBJ, setProductBJ] = useState<Category[]>([]);
  // const [isLoading, setLoading] = useState<{ BB: boolean; BJ: boolean }>({
  //   BB: true,
  //   BJ: true,
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
      // setLoading((prev) => ({ ...prev, BB: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const getProductBJ = async () => {
    try {
      const getProd = await CategoryHook({ limit: 3, type: TypeProduct.BJ });
      setProductBJ(getProd);
      // setLoading((prev) => ({ ...prev, BJ: false }));
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
            kategoriUtama={productBJ}
            lihatSemuaHref="/produk/furniture"
          />
        </CollapsibleSection>
        {/* Collapsible “Material” */}
        <CollapsibleSection
          title="Material"
          lihatSemuaHref="/produk/material"
        >
          <MaterialComponent
            kategoriUtama={productBB}
            lihatSemuaHref="/produk/material"
          />
        </CollapsibleSection>
      </main>
    </>
  );
};

export default ProductComponent;

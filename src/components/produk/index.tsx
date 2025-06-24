// src/components/produk/ProductPage.tsx
"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Preview from "./Preview";

import Category, {
  CategoryHook,
  TypeProduct as CatType,
} from "@/app/hooks/CategoryHook";
import Produk, { ProductHook } from "@/app/hooks/ProductHook";

type ProductType = {
  id: CatType;
  name: string;
  categories: Category[];
};

export default function ProductPage() {
  // 1) State utama
  const [types, setTypes]     = useState<ProductType[]>([
    { id: CatType.BJ, name: "Barang Jadi", categories: [] },
    { id: CatType.BB, name: "Bahan Baku",  categories: [] },
  ]);
  const [selType, setSelType] = useState<CatType | null>(null);
  const [selCat,  setSelCat]  = useState<Category | null>(null);
  const [prods,   setProds]   = useState<Produk[]>([]);
  const [selProd, setSelProd] = useState<Produk | null>(null);

  // 2) Fetch kategori saat selType berubah
  useEffect(() => {
    if (!selType) return;
    CategoryHook({ type: selType }).then((cats) => {
      setTypes((prev) =>
        prev.map((t) =>
          t.id === selType ? { ...t, categories: cats } : t
        )
      );
      // reset deeper selections
      setSelCat(null);
      setProds([]);
      
    });
  }, [selType]);

  // 3) Fetch produk saat selCat berubah
  useEffect(() => {
    if (!selType || !selCat) return;
    ProductHook({ type: selType, category: selCat.name }).then((list) => {
      setProds(list);
      
    });
  }, [selType, selCat]);

  return (
    <div className="flex justify-between">
      <Sidebar
        data={types}
        products={prods}
        onSelectType={(t: CatType) => setSelType(t)}
        onSelectCategory={(c: Category) => setSelCat(c)}
        onSelectItem={(p: Produk) => setSelProd(p)}
      />
      <Preview item={selProd} />
    </div>
  );
}

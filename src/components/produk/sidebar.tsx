/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Category from "@/app/hooks/CategoryHook";
import Produk from "@/app/hooks/ProductHook";
import { TypeProduct as CatType } from "@/app/hooks/CategoryHook";

export type ProductType = {
  id: CatType;
  name: string;
  categories: Category[];
};

interface Props {
  data: ProductType[];
  products: Produk[];
  onSelectType: (type: CatType) => void;
  onSelectCategory: (cat: Category) => void;
  onSelectItem: (item: Produk) => void;
}

export default function Sidebar({
  data,
  products,
  onSelectType,
  onSelectCategory,
  onSelectItem,
}: Props) {
  const [openTypeId, setOpenTypeId] = useState<CatType | null>(CatType.BB);
  const [firstLoad, setFirstLoad] = useState(true);
  const [openCatId, setOpenCatId] = useState<string | null>("Bahan Baku");
  const containerRef = useRef<HTMLDivElement>(null);

  // sorting tanpa ubah data asli
  const sortedData = useMemo(() => {
    return data
      .map((type) => ({
        ...type,
        categories: [...type.categories].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [data]);

  // auto-scroll: only ketika sub-kategori dibuka
  useEffect(() => {
    if (!openCatId) return;
    const container = containerRef.current;
    const itemEl = document.getElementById(openCatId);
    if (container && itemEl) {
      const top = itemEl.offsetTop;
      const bottom = top + itemEl.clientHeight;
      // scroll jika di luar viewport container
      if (top < container.scrollTop) {
        container.scrollTop = top;
      } else if (bottom > container.scrollTop + container.clientHeight) {
        container.scrollTop = bottom - container.clientHeight;
      }
    }
  }, [openCatId]);

  const listVariants = {
    hidden: { height: 0, opacity: 0, transition: { when: "afterChildren" } },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.05 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (!firstLoad) return;
    if (!openTypeId) return;
    onSelectType(openTypeId);
    if (!openCatId) return;
    const cat = sortedData[0]?.categories[0];
    if (!cat) return;
    setOpenCatId(cat?._id);
    onSelectCategory(cat);
    if (!products) return;
    const product = products[0];
    onSelectItem(product);
  }, [onSelectType, openTypeId, onSelectItem]);

  return (
    <section className="relative">
      <div className="absolute left-36 sm:left-55 lg:left-60 2xl:left-70 top-14 h-90 w-[3px] bg-gray-400 rounded" />
      <p className="text-[9px] sm:text-xs lg:text-sm">Pilih Produk Untuk Melihat Detail</p>
      <nav
        ref={containerRef}
        className="w-39 sm:w-55 lg:w-60 2xl:w-64 pr-4 max-h-[480px] overflow-y-auto relative"
      >
        {sortedData.map((type, idx) => {
          const isTypeOpen = openTypeId === type.id;
          return (
            <div
            key={type.id}
            className={`mb-1 2xl:mb-4 ${
              idx === 0 ? "sticky top-0 bg-white z-10 pt-4 lg:pb-2" : ""
            }`}
            >
              <button
                onClick={() => {
                  const next = isTypeOpen ? null : type.id;
                  setOpenTypeId(next);
                  setFirstLoad(false);
                  onSelectType(type.id);
                  if (!next) setOpenCatId(null);
                }}
                className="flex items-center space-x-2 font-bold cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: isTypeOpen ? 90 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Image
                    src="/icons/iconProduct.png"
                    width={20}
                    height={20}
                    alt="arrow"
                    className="w-3 h-3 sm:w-5 sm:h-5"
                  />
                </motion.div>
                <span className="capitalize text-sm sm:text-lg">
                  {type.name.toLowerCase() === "bahan baku"
                    ? "Material"
                    : "Furniture"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isTypeOpen && (
                  <motion.ul
                    key="type-list"
                    className="pl-1 sm:pl-4 mt-1 sm:mt-2 space-y-1 sm:space-y-2 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                  >
                    {type.categories.map((cat) => {
                      const isCatOpen = openCatId === cat._id;
                      const items = products
                        .filter((p) => p.kategori === cat.name)
                        .sort((a, b) => a.nama.localeCompare(b.nama));

                      return (
                        <motion.li
                          id={cat._id}
                          key={cat._id}
                          variants={itemVariants}
                        >
                          <button
                            onClick={() => {
                              const next = isCatOpen ? null : cat._id;
                              setOpenCatId(next);
                              setFirstLoad(false);
                              onSelectCategory(cat);
                            }}
                            className="flex items-center w-full text-xs sm:text-base space-x-1 sm:space-x-2 font-semibold cursor-pointer"
                          >
                            <motion.div
                              animate={{ rotate: isCatOpen ? 90 : 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                              <Image
                                src="/icons/iconProduct.png"
                                width={20}
                                height={20}
                                alt="arrow"
                                className="w-3 h-3 sm:w-5 sm:h-5"
                              />
                            </motion.div>
                            <span className="capitalize">
                              {cat.name.toLowerCase()}
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isCatOpen && (
                              <motion.ul
                                key="cat-list"
                                className="pl-1 sm:pl-6 mt-1 space-y-1 overflow-hidden"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={listVariants}
                              >
                                {items.map((p) => (
                                  <motion.li
                                    key={p._id}
                                    variants={itemVariants}
                                  >
                                    <button
                                      onClick={() => {
                                        onSelectItem(p);
                                        setFirstLoad(false);
                                      }}
                                      className="flex items-center space-x-1 sm:space-x-2 text-[10px] sm:text-base font-medium hover:text-blue-600 cursor-pointer"
                                    >
                                      <span>●</span>
                                      <span className="capitalize">
                                        {p.nama.toLowerCase()}
                                      </span>
                                    </button>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </section>
  );
}

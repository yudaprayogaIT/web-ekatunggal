// import ProdukHero from "@/components/produk/ProdukHero";
// import HeaderComponent from "@/components/HeaderComponent";
// import { FooterComponent } from "@/components/FooterComponent";
// import FloatingIconComponent from "@/components/FloatingIconComponent";
// import ProductComponent from "@/components/produk/ProductComponent";

// export default async function ProdukPage() {
//   return (
//     <>
//       <HeaderComponent />
//       <FloatingIconComponent />

//       <main className="space-y-8 px-6 md:px-12 lg:px-10 mb-10">
//         {/* Hero Section */}
//         <section className="mb-8">
//           <ProdukHero />
//         </section>
//         <section className="mb-8">
//           <ProductComponent />
//         </section>
//       </main>

//       <FooterComponent />
//     </>
//   );
// }

// src/pages/produk/index.tsx
import React from "react";
import HeaderComponent from "@/components/HeaderComponent";
import ProdukHero from "@/components/produk/ProdukHero";
import ProductPage from "@/components/produk/ProductPage";
import { FooterComponent } from "@/components/FooterComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Produk Kami',
  description: 'Katalog Material Springbed & Sofa dan Furniture berkualitas tinggi—banyak pilihan untuk kebutuhan  Anda.',
  alternates: { canonical: 'https://www.ekatunggal.com/produk' },
  openGraph: {
    title: 'Produk Kami | Ekatunggal Group',
    description:
      'Telusuri katalog Material Springbed & Sofa dan Furniture kualitas terbaik dengan distribusi cepat.',
    url: 'https://www.ekatunggal.com/produk',
    images: [
      {
        url: '/img/openGraph/og-produk.png',
        width: 1200,
        height: 630,
        alt: 'Produk di Ekatunggal Group',
      },
    ],
  },
  twitter: {
    title: 'Produk Kami | Ekatunggal Group',
    description:
      'Telusuri katalog Material Springbed & Sofa dan Furniture kualitas terbaik dengan distribusi cepat.',
    images: ['/img/openGraph/og-produk.png'],
  },
}

export default function ProdukPage() {
  return (
    <>
      <HeaderComponent />
      <ProdukHero/>
      <main className="max-w-360 mx-auto">
        <ProductPage />
      </main>
      <FooterComponent />
    </>
  );
}

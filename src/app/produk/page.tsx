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
import ProductPage from "@/components/produk";
import { FooterComponent } from "@/components/FooterComponent";


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

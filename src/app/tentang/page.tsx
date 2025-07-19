// src/app/about/page.tsx
import React from "react";
import HeaderComponent from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";
import HeroComponent from "@/components/tentang/HeroComponent";
import VisiComponent from "@/components/tentang/VisiComponent";
import { BudayaComponent } from "@/components/tentang/BudayaComponent";
import CabangComponent from "@/components/tentang/CabangComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali Ekatunggal Group: visi, budaya perusahaan, dan jaringan cabang kami di seluruh Indonesia.',
  alternates: { canonical: 'https://www.ekatunggal.com/tentang' },
  openGraph: {
    title: 'Tentang Kami | Ekatunggal Group',
    description:
      'Pelajari visi, nilai, dan jejak Ekatunggal Group sebagai penyedia Material Springbed & Sofa dan Furniture.',
    url: 'https://www.ekatunggal.com/tentang',
    images: [
      {
        url: '/img/openGraph/og-tentang.png',
        width: 1200,
        height: 630,
        alt: 'Tentang di Ekatunggal Group',
      },
    ],
  },
  twitter: {
    title: 'Tentang Kami | Ekatunggal Group',
    description:
      'Pelajari visi, nilai, dan jejak Ekatunggal Group sebagai penyedia Material Springbed & Sofa dan Furniture.',
    images: ['/img/openGraph/og-tentang.png'],
  },
}

export default function AboutPage() {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <VisiComponent />
      <BudayaComponent />
      <CabangComponent />
      <FooterComponent />
    </>
  );
}

import FloatingIconComponent from "@/components/FloatingIconComponent";
import { FooterComponent } from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import HeroKontak from "@/components/kontak/HeroKontak";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: 'Kontak Kami',
  description: 'Hubungi Ekatunggal Group untuk pemesanan dan konsultasi Material Springbed & Sofa dan Furniture.',
  alternates: { canonical: 'https://www.ekatunggal.com/kontak' },
  openGraph: {
    title: 'Kontak Kami | Ekatunggal Group',
    description:
      'Segera hubungi Ekatunggal Group untuk info pemesanan dan konsultasi Material Springbed & Sofa dan Furniture.',
    url: 'https://www.ekatunggal.com/kontak',
    images: [
      {
        url: '/img/openGraph/og-kontak.png',
        width: 1200,
        height: 630,
        alt: 'Kontak di PT Ekatunggal Tunas Mandiri',
      },
    ],
  },
  twitter: {
    title: 'Kontak Kami | Ekatunggal Group',
    description:
      'Segera hubungi Ekatunggal Group untuk info pemesanan dan konsultasi Material Springbed & Sofa dan Furniture.',
    images: ['/img/openGraph/og-kontak.png'],
  },
}

const page = () => {
  return (
    <>
      <HeaderComponent />
      <HeroKontak />
      <FloatingIconComponent />
      <FooterComponent />
    </>
  );
};

export default page;

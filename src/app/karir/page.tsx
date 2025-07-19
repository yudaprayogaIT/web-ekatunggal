import FloatingIconComponent from "@/components/FloatingIconComponent";
import { FooterComponent } from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import HeroKarirComponent from "@/components/karir/HeroKarirComponent";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Karir di Ekatunggal Group',
  description:
    'Bergabunglah bersama Ekatunggal Group! Temukan peluang dan kembangkan karir Anda bersama Ekatunggal Group.',
  alternates: {
    canonical: 'https://www.ekatunggal.com/karir',
  },
  openGraph: {
    title: 'Karir & Lowongan | Ekatunggal Group',
    description:
      'Jelajahi posisi yang sesuai dengan keahlian Anda hanya di Ekatunggal Group',
    url: 'https://www.ekatunggal.com/karir',
    images: [
      {
        url: '/img/openGraph/og-karir.png',
        width: 1200,
        height: 630,
        alt: 'Karir di Ekatunggal Group',
      },
    ],
  },
  twitter: {
    title: 'Karir di Ekatunggal Group',
    description:
      'Jelajahi posisi yang sesuai dengan keahlian Anda hanya di Ekatunggal Group',
    images: ['/img/openGraph/og-karir.png'],
  },
}

const page = () => {
  return (
    <>
      <HeaderComponent />
      <FloatingIconComponent />
      <HeroKarirComponent />
      <FooterComponent />
    </>
  );
};

export default page;

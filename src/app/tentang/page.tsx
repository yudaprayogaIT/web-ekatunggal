// src/app/about/page.tsx
import React from "react";
import HeaderComponent from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";
import HeroComponent from "@/components/tentang/HeroComponent";
import VisiComponent from "@/components/tentang/VisiComponent";
import { BudayaComponent } from "@/components/tentang/BudayaComponent";
import CabangComponent from "@/components/tentang/CabangComponent";

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

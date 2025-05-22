// src/app/about/page.tsx
import React from "react";
import HeaderComponent from "@/components/home/HeaderComponent";
import { FooterComponent } from "@/components/home/FooterComponent";
import HeroComponent from "@/components/tentang/HeroComponent";
import MengenalComponent from "@/components/tentang/MengenalComponent";
import VisiComponent from "@/components/tentang/VisiComponent";
import { BudayaComponent } from "@/components/tentang/BudayaComponent";
import CabangComponent from "@/components/tentang/CabangComponent";
import dynamic from "next/dynamic";
import MapSection from "@/components/tentang/CabangComponent";

export default function AboutPage() {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <MengenalComponent />
      <VisiComponent />
      <BudayaComponent />
      <CabangComponent />
      {/* <MapSection /> */}
      <FooterComponent />
    </>
  );
}

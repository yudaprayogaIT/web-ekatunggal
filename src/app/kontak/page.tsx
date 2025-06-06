import FloatingIconComponent from "@/components/FloatingIconComponent";
import { FooterComponent } from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import HeroKontak from "@/components/kontak/HeroKontak";
import React from "react";

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

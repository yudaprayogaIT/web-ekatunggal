import FloatingIconComponent from "@/components/FloatingIconComponent";
import { FooterComponent } from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import HeroKarirComponent from "@/components/karir/HeroKarirComponent";
import React from "react";

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

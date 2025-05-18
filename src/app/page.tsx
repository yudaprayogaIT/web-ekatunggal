/* eslint-disable @next/next/no-page-custom-font */
import HeaderComponent from "@/components/HeaderComponent";
import SliderComponent from "@/components/SliderComponent";
import { AboutComponent } from "@/components/AboutComponent";
import { KeunggulanComponent } from "@/components/KeunggulanComponent";
import { ProdukComponents } from "@/components/ProdukComponent";
import { BannerComponent } from "@/components/BannerComponent";
import { FooterComponent } from "@/components/FooterComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <SliderComponent />
      <AboutComponent />
      <KeunggulanComponent />
      <ProdukComponents />
      <BannerComponent />
      <FooterComponent />
    </>
  );
}

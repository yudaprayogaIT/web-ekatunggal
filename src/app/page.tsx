/* eslint-disable @next/next/no-page-custom-font */
import HeaderComponent from "@/components/HeaderComponent";
import SliderComponent from "@/components/home/SliderComponent";
import { AboutComponent } from "@/components/home/AboutComponent";
import { KeunggulanComponent } from "@/components/home/KeunggulanComponent";
import { ProdukComponents } from "@/components/home/ProdukComponent";
import { BannerComponent } from "@/components/home/BannerComponent";
import { FooterComponent } from "@/components/FooterComponent";
import ClientsComponent from "@/components/home/ClientsComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <SliderComponent />
      <AboutComponent />
      <KeunggulanComponent />
      <ProdukComponents />
      <ClientsComponent />
      <BannerComponent />
      <FooterComponent />
    </>
  );
}

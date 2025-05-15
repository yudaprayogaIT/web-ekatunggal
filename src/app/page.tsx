/* eslint-disable @next/next/no-page-custom-font */
import { AboutComponent } from "@/components/AboutComponent";
import HeaderComponent from "@/components/HeaderComponent";
import SliderComponent from "@/components/SliderComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <SliderComponent />
      <AboutComponent />
    </>
  );
}

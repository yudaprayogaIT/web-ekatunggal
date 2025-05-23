import React from "react";
import Image from "next/image";
import FloatingIconComponent from "../FloatingIconComponent";

const HeroComponent = () => {
  return (
    <main className="my-5 md:my-10">
      <div className="">
        <Image
          src="/img/hero.png"
          width={1920}
          height={849}
          alt=""
          className="object-cover h-120 w-[90%] md:h-auto md:w-6xl border border-black mx-auto rounded-2xl"
        />
      </div>

      <FloatingIconComponent />
    </main>
  );
};

export default HeroComponent;

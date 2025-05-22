import React from "react";
import Image from "next/image";

const HeroComponent = () => {
  return (
    <main className="my-10">
      <div className="w-6xl h-5xl border rounded-2xl mx-auto">
        <Image
          src="/img/hero.png"
          width={1920}
          height={849}
          alt=""
          className="object-cover rounded-2xl"
        />
      </div>
    </main>
  );
};

export default HeroComponent;

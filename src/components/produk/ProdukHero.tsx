import Image from "next/image";

export default async function ProdukHero() {
  return (
    <main className="mt-4 mb-4 md:mb-12">
      <Image
        src="/img/produk/heroProduk.png"
        alt="Hero product"
        width={1920}
        height={1080}
        className="w-[90vw] lg:w-[86vw] h-auto mx-auto rounded-xl lg:rounded-4xl shadow-lg"
      />
    </main>
  );
}

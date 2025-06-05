import Image from "next/image";

interface ProdukRaw {
  _id: string;
  nama: string;
  kategori: string;
  image?: string;
  images?: string[];
}

// interface ApiResponse {
//   data: ProdukRaw[];
//   message: string;
//   status: string;
// }

export default async function ProdukHero() {
  return (
    <main className="mb-12">
      <Image
        src="/img/produk/heroProduk.png"
        alt="Hero product"
        width={1920}
        height={1080}
        className="w-[95%] h-auto mx-auto rounded-lg shadow-lg"
      />
    </main>
  );
}

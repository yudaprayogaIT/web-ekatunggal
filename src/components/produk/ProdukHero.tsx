// import Image from "next/image";

// export default function ProdukHero() {
//   return (
//     <main className="">
//       <Image
//         src="/img/produk/heroProduk.png"
//         alt="produk"
//         width={1920}
//         height={1080}
//         className="w-[95%] h-auto mx-auto mt-6 rounded-lg shadow-md"
//       />
//     </main>
//   );
// }

import Image from "next/image";
import { buildImageUrl } from "@/utils/images";

interface ProdukRaw {
  _id: string;
  nama: string;
  kategori: string;
  image?: string;
  images?: string[];
}

interface ApiResponse {
  data: ProdukRaw[];
  message: string;
  status: string;
}

export default async function ProdukHero() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const TOKEN = process.env.ERP_TOKEN!;

  // 1) Ambil semua produk, urutkan alfabet berdasarkan 'nama'
  const res = await fetch(
    `${API_BASE}/api/resource/Produk%20Company%20Profile?order_by=nama%20asc`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      // Cache dengan ISR: setiap 60 detik data akan di-refresh (hanya jika ada request setelah 60s)
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return (
      // <div className="p-12 text-center">
      //   <h1 className="text-2xl font-semibold">Error {res.status}</h1>
      //   <p className="mt-2 text-gray-600">Gagal memuat data Hero Produk.</p>
      // </div>
      <Image
        src="/img/produk/heroProduk.png"
        alt="produk"
        width={1920}
        height={1080}
        className="w-[95%] h-auto mx-auto mt-6 rounded-lg shadow-md"
      />
    );
  }

  const json: ApiResponse = await res.json();
  // Ambil produk pertama (alfabet terkecil) sebagai Hero utama
  const semuaProduk: ProdukRaw[] = json.data;
  if (semuaProduk.length === 0) {
    return null;
  }

  const first = semuaProduk[0];
  const imageUrl = buildImageUrl(first.image ?? "");

  return (
    <main className="mb-12">
      <Image
        src={imageUrl}
        alt={first.nama}
        width={1920}
        height={1080}
        className="w-[95%] h-auto mx-auto rounded-lg shadow-lg"
      />
    </main>
  );
}

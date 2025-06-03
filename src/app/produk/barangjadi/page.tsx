import HeaderComponent from "@/components/HeaderComponent";
import Link from "next/link";
import Image from "next/image";
import { buildImageUrl } from "@/utils/images";
import { FooterComponent } from "@/components/FooterComponent";

interface Produk {
  _id: string;
  kategori: string;
  image: string; // nama file gambar (misal "1748749385780-…unsplash.jpg")
  createdAt: string; // tanggal pembuatan, untuk menentukan produk terbaru
}

interface ApiResponse {
  data: Produk[];
  message: string;
  status: string;
}

export default async function AllBarangJadiPage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const TOKEN = process.env.ERP_TOKEN!;

  // 1) Ambil semua produk
  const res = await fetch(
    `${API_BASE}/api/resource/Produk%20Company%20Profile`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // ISR 60 detik
    }
  );

  if (!res.ok) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-semibold">Error {res.status}</h1>
        <p className="mt-2 text-gray-600">
          Gagal mengambil kategori Barang Jadi.
        </p>
      </div>
    );
  }

  const json: ApiResponse = await res.json();
  const semuaProduk: Produk[] = json.data;

  // 2) Urutkan semuaProduk berdasarkan createdAt descending (terbaru di depan)
  semuaProduk.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // 3) Daftar kategori “Barang Jadi” yang kita perlukan
  const kategoriBarangJadiList = ["kasur", "rak", "kursi", "meja", "lemari"];

  // 4) Kumpulkan slug unik untuk kategori barang jadi
  const barangJadiSet = new Set<string>();
  semuaProduk.forEach((p) => {
    const slug = p.kategori.toLowerCase().replace(/\s+/g, "-");
    if (kategoriBarangJadiList.includes(slug)) {
      barangJadiSet.add(slug);
    }
  });

  // 5) Sort alfabet berdasarkan label (mis. "kasur" → "Kasur")
  const semuaKategori = Array.from(barangJadiSet).sort((a, b) => {
    const labelA = a
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    const labelB = b
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return labelA.localeCompare(labelB);
  });

  return (
    <>
      <HeaderComponent />
      <section className="mb-12">
        <Image
          src="/img/heroBarangJadi.png"
          alt="herobarangjadi"
          width={1920}
          height={1080}
          className="w-full h-[95vh]"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-300 mx-auto mt-8">
          {/* {semuaKategori.map((slug) => {
            const label = slug
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" "); */}
          {semuaKategori.map((slug) => {
            // 6) Cari produk terbaru pada kategori ini
            const found = semuaProduk.find(
              (p) => p.kategori.toLowerCase().replace(/\s+/g, "-") === slug
            );

            // Jika tidak ditemukan, gunakan placeholder
            const imageUrl = found
              ? buildImageUrl(found.image)
              : "/img/produk/BarangJadi/produk3.png";

            // Bangun label dari slug (mis. "kasur" → "Kasur")
            const label = slug
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");
            return (
              <Link
                key={slug}
                href={`/produk/barangjadi/${slug}`}
                className="group border border-gray-200 h-90 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* <Image
                  src="/img/produk/BarangJadi/produk3.png"
                  alt="img"
                  width={600}
                  height={600}
                  className="object-fit h-70"
                /> */}
                <Image
                  src={imageUrl}
                  alt={label}
                  width={600}
                  height={600}
                  className="object-fit h-70 group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-3xl mt-2 font-[montserrat] font-bold">
                  {label}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

import ProdukHero from "@/components/produk/ProdukHero";
import BarangJadiComponent from "@/components/produk/BarangJadiComponent";
import BahanBakuComponent from "@/components/produk/BahanBakuComponent";
import { buildImageUrl } from "@/utils/images";

interface Produk {
  _id: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  image: string;
}

interface ApiResponse {
  data: Produk[];
  message: string;
  status: string;
}

export default async function ProdukPage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const TOKEN = process.env.ERP_TOKEN!;

  const res = await fetch(
    `${API_BASE}/api/resource/Produk%20Company%20Profile`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-semibold">Error {res.status}</h1>
        <p className="mt-2 text-gray-600">
          Gagal mengambil data produk. Pastikan token valid dan user punya izin
          Read.
        </p>
      </div>
    );
  }

  const json: ApiResponse = await res.json();
  const semuaProduk: Produk[] = json.data;

  // Tabel kategori Barang Jadi (bisa ditambah sesuai kebutuhan)
  const kategoriBarangJadiList = ["kasur", "rak", "kursi", "meja", "lemari"];

  const barangJadiSet = new Set<string>();
  const bahanBakuSet = new Set<string>();

  semuaProduk.forEach((p) => {
    const slug = p.kategori.toLowerCase().replace(/\s+/g, "-");
    if (kategoriBarangJadiList.includes(slug)) {
      barangJadiSet.add(slug);
    } else {
      bahanBakuSet.add(slug);
    }
  });

  const semuaBarangJadi = Array.from(barangJadiSet);
  const semuaBahanBaku = Array.from(bahanBakuSet);

  const previewBarangJadi = semuaBarangJadi.slice(0, 3).map((slug) => {
    const found = semuaProduk.find(
      (p) => p.kategori.toLowerCase().replace(/\s+/g, "-") === slug
    );
    const imageUrl = found ? buildImageUrl(found.image) : "/placeholder.png";
    const label = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return { slug, label, imageUrl };
  });

  const previewBahanBaku = semuaBahanBaku.slice(0, 3).map((slug) => {
    const found = semuaProduk.find(
      (p) => p.kategori.toLowerCase().replace(/\s+/g, "-") === slug
    );
    const imageUrl = found ? buildImageUrl(found.image) : "/placeholder.png";
    const label = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return { slug, label, imageUrl };
  });

  return (
    <main className="space-y-16 px-6 md:px-12 lg:px-24">
      <ProdukHero />

      {/* Section “Barang Jadi” dengan padding lebih besar */}
      <div>
        <BarangJadiComponent
          kategoriUtama={previewBarangJadi}
          lihatSemuaHref="/produk/barangjadi"
        />
      </div>

      {/* Section “Bahan Baku” */}
      <div>
        <BahanBakuComponent
          kategoriUtama={previewBahanBaku}
          lihatSemuaHref="/produk/bahanbaku"
        />
      </div>
    </main>
  );
}

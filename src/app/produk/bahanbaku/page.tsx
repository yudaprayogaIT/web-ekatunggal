import Link from "next/link";

interface Produk {
  kategori: string;
}

interface ApiResponse {
  data: Produk[];
  message: string;
  status: string;
}

export default async function AllBahanBakuPage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const TOKEN = process.env.ERP_TOKEN!;

  // Ambil semua produk
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
          Gagal mengambil kategori Bahan Baku.
        </p>
      </div>
    );
  }

  const json: ApiResponse = await res.json();
  const semuaProduk: Produk[] = json.data;

  const kategoriBarangJadiList = ["kasur", "rak", "kursi", "meja", "lemari"];

  // Kumpulkan slug unik untuk kategori bahan baku
  const bahanBakuSet = new Set<string>();
  semuaProduk.forEach((p) => {
    const slug = p.kategori.toLowerCase().replace(/\s+/g, "-");
    if (!kategoriBarangJadiList.includes(slug)) {
      bahanBakuSet.add(slug);
    }
  });

  // Sort alfabet berdasarkan label
  const semuaKategori = Array.from(bahanBakuSet).sort((a, b) => {
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
    <section className="px-6 md:px-12 lg:px-24 py-12">
      <h1 className="text-4xl font-bold mb-8">Semua Kategori Bahan Baku</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {semuaKategori.map((slug) => {
          const label = slug
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
          return (
            <Link
              key={slug}
              href={`/produk/bahanbaku/${slug}`}
              className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-xl font-medium">{label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

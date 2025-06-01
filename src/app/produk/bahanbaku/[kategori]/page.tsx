import { Metadata } from "next";
import ProductCard from "@/components/produk/ProductCard";
// 🔥 Harus sesuai dengan nama file utils/images.ts
import { buildImageUrl } from "@/utils/images";

interface ProdukRaw {
  _id: string;
  name: string; // docname di Frappe
  nama: string;
  deskripsi: string;
  kategori: string;
  images?: string[]; // (opsional) jika sudah di‐custom
  image?: string; // (opsional) kalau hanya satu link
}

interface ApiResponse {
  data: ProdukRaw[];
  message: string;
  status: string;
}

interface FileRaw {
  file_url: string;
  name: string;
}

interface FileResponse {
  data: FileRaw[];
  message: string;
  status: string;
}

interface Params {
  kategori: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  // 🚩 Jangan lupa await params
  const { kategori } = await params;
  const label = kategori
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `Kategori: ${label}`,
    description: `Daftar produk kategori ${label}`,
  };
}

export default async function KategoriBahanBakuPage({
  params,
}: {
  params: Params;
}) {
  // 🚩 Jangan lupa await params
  const { kategori } = await params;

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const TOKEN = process.env.ERP_TOKEN!;

  // 1) Fetch data semua produk
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
          Gagal mengambil data produk kategori "{kategori}".
        </p>
      </div>
    );
  }

  const json: ApiResponse = await res.json();
  const semuaProdukRaw: ProdukRaw[] = json.data;

  // 2) Daftar slug "Barang Jadi" (hardcode)
  const kategoriBarangJadiList = ["kasur", "rak", "kursi", "meja", "lemari"];

  // 3) Filter hanya produk yang slug‐nya sama dengan kategori &
  //    bukan di kategoriBarangJadiList (karena ini Bahan Baku)
  const filteredProdukRaw = semuaProdukRaw.filter((p) => {
    const slugP = p.kategori.toLowerCase().replace(/\s+/g, "-");
    return slugP === kategori && !kategoriBarangJadiList.includes(slugP);
  });

  // Jika kosong, tampilkan placeholder
  if (filteredProdukRaw.length === 0) {
    const label = kategori
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return (
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <h1 className="text-4xl font-bold mb-6">Kategori: {label}</h1>
        <p className="text-gray-600">Belum ada produk di kategori ini.</p>
      </section>
    );
  }

  // 4) Untuk tiap produk yang terfilter, fetch lampiran dari Doctype File
  type Produk = {
    _id: string;
    nama: string;
    deskripsi: string;
    kategori: string;
    images: string[];
  };

  const semuaProduk: Produk[] = await Promise.all(
    filteredProdukRaw.map(async (p) => {
      const docname = p.name;

      // 4.a) Fetch lampiran di Doctype File
      const fileRes = await fetch(
        `${API_BASE}/api/resource/File?fields=["file_url"]&filters=[["File","attached_to_doctype","=","Produk Company Profile"],["File","attached_to_name","=","${docname}"]]`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
          next: { revalidate: 60 },
        }
      );

      let fileUrls: string[] = [];
      if (fileRes.ok) {
        const jsonFile: FileResponse = await fileRes.json();
        fileUrls = (jsonFile.data ?? []).map((f) => f.file_url);
      }

      // 4.b) Ambil p.images atau p.image jika ada
      const rawImgs: string[] = [];
      if (Array.isArray(p.images) && p.images.length > 0) {
        rawImgs.push(...p.images);
      } else if (typeof p.image === "string" && p.image.trim() !== "") {
        rawImgs.push(p.image);
      }

      // 4.c) Gabungkan
      const mergedImgs = [...rawImgs, ...fileUrls];

      return {
        _id: p._id,
        nama: p.nama,
        deskripsi: p.deskripsi,
        kategori: p.kategori,
        images: mergedImgs, // array lengkap URL
      };
    })
  );

  // 5) Render grid—gunakan ProductCard
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Kategori:{" "}
        {kategori
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {semuaProduk.map((prod) => (
          <ProductCard key={prod._id} prod={prod} />
        ))}
      </div>
    </section>
  );
}

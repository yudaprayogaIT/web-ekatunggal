// // import { Metadata } from "next";
// // import ProductCard from "@/components/produk/ProductCard";

// // interface ProdukRaw {
// //   _id: string;
// //   name: string;
// //   nama: string;
// //   deskripsi: string;
// //   kategori: string;
// //   image?: string;
// //   images?: string[];
// // }

// // interface FileEntry {
// //   _id: string;
// //   file_name: string;
// // }

// // interface ProdukDetail {
// //   name: string;
// //   kategori: string;
// //   image?: string;
// //   images?: string[];
// //   nama: string;
// //   deskripsi: string;
// //   _id: string;
// // }

// // interface ApiResponseList {
// //   data: ProdukRaw[];
// //   message: string;
// //   status: string;
// // }

// // interface ApiResponseDetail {
// //   data: ProdukDetail;
// //   files?: FileEntry[];
// //   message: string;
// //   status: number;
// // }

// // interface Params {
// //   kategori: string;
// // }

// // function slugify(text: string) {
// //   return text.toLowerCase().replace(/\s+/g, "-");
// // }

// // export async function generateMetadata({
// //   params,
// // }: {
// //   params: Params;
// // }): Promise<Metadata> {
// //   const { kategori } = await params;
// //   const label = kategori
// //     .split("-")
// //     .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
// //     .join(" ");
// //   return {
// //     title: `Kategori: ${label}`,
// //     description: `Daftar produk kategori ${label}`,
// //   };
// // }

// // export default async function KategoriBahanBakuPage({
// //   params,
// // }: {
// //   params: Params;
// // }) {
// //   const { kategori } = await params;
// //   const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
// //   const TOKEN = process.env.ERP_TOKEN!;

// //   // 1) Fetch list semua produk (ISR 60 detik)
// //   const resList = await fetch(
// //     `${API_BASE}/api/resource/Produk%20Company%20Profile`,
// //     {
// //       method: "GET",
// //       headers: {
// //         Authorization: `Bearer ${TOKEN}`,
// //         "Content-Type": "application/json",
// //       },
// //       next: { revalidate: 60 },
// //     }
// //   );
// //   if (!resList.ok) {
// //     return (
// //       <div className="p-12 text-center">
// //         <h1 className="text-2xl font-semibold">Error {resList.status}</h1>
// //         <p className="mt-2 text-gray-600">
// //           Gagal mengambil data produk kategori "{kategori}".
// //         </p>
// //       </div>
// //     );
// //   }
// //   const jsonList: ApiResponseList = await resList.json();
// //   const semuaProdukRaw: ProdukRaw[] = jsonList.data;

// //   // 2) Daftar slug kategori “Barang Jadi”
// //   const kategoriBarangJadiList = ["kasur", "rak", "kursi", "meja", "lemari"];

// //   // 3) Filter: slug(p.kategori) === kategori & TIDAK termasuk kategoriBarangJadiList
// //   const filteredProdukRaw = semuaProdukRaw.filter((p) => {
// //     const slugP = slugify(p.kategori);
// //     return slugP === kategori && !kategoriBarangJadiList.includes(slugP);
// //   });

// //   // 3.a) Jika kosong
// //   if (filteredProdukRaw.length === 0) {
// //     const label = kategori
// //       .split("-")
// //       .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
// //       .join(" ");
// //     return (
// //       <section className="px-6 md:px-12 lg:px-24 py-12">
// //         <h1 className="text-4xl font-bold mb-6">Kategori: {label}</h1>
// //         <p className="text-gray-600">Belum ada produk di kategori ini.</p>
// //       </section>
// //     );
// //   }

// //   // 4) Fetch detail per-produk untuk dapat lampiran (files)
// //   type ProdukGabungan = {
// //     _id: string;
// //     nama: string;
// //     deskripsi: string;
// //     kategori: string;
// //     images: string[];
// //   };

// //   let semuaProduk: ProdukGabungan[] = await Promise.all(
// //     filteredProdukRaw.map(async (p) => {
// //       const docname = p.name;
// //       const detailRes = await fetch(
// //         `${API_BASE}/api/resource/Produk%20Company%20Profile/${encodeURIComponent(
// //           docname
// //         )}`,
// //         {
// //           method: "GET",
// //           headers: {
// //             Authorization: `Bearer ${TOKEN}`,
// //             "Content-Type": "application/json",
// //           },
// //           next: { revalidate: 60 },
// //         }
// //       );
// //       if (!detailRes.ok) {
// //         return {
// //           _id: p._id,
// //           nama: p.nama,
// //           deskripsi: p.deskripsi,
// //           kategori: p.kategori,
// //           images: [],
// //         };
// //       }
// //       const jsonDetail: ApiResponseDetail = await detailRes.json();

// //       // Ambil lampiran, kecualikan yang sama dengan p.image
// //       let filePaths: string[] = [];
// //       if (Array.isArray(jsonDetail.files)) {
// //         filePaths = jsonDetail.files
// //           .filter((f) => f.file_name !== p.image)
// //           .map((f) => `/public/files/${f.file_name}`);
// //       }

// //       // Ambil p.images atau p.image
// //       const rawImgs: string[] = [];
// //       if (Array.isArray(p.images) && p.images.length > 0) {
// //         rawImgs.push(...p.images);
// //       } else if (typeof p.image === "string" && p.image.trim() !== "") {
// //         rawImgs.push(p.image);
// //       }

// //       // Gabungkan
// //       const mergedImgs = [...rawImgs, ...filePaths];
// //       return {
// //         _id: p._id,
// //         nama: p.nama,
// //         deskripsi: p.deskripsi,
// //         kategori: p.kategori,
// //         images: mergedImgs,
// //       };
// //     })
// //   );

// //   // 4.e) Sort alfabet berdasarkan nama sebelum render
// //   semuaProduk.sort((a, b) => a.nama.localeCompare(b.nama));

// //   // 5) Render grid
// //   return (
// //     <section className="px-6 md:px-12 lg:px-24 py-12">
// //       <h1 className="text-4xl font-bold mb-8">
// //         Kategori:{" "}
// //         {kategori
// //           .split("-")
// //           .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
// //           .join(" ")}
// //       </h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
// //         {semuaProduk.map((prod) => (
// //           <ProductCard key={prod._id} prod={prod} />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// import { Metadata } from "next";
// import ProductCard from "@/components/produk/ProductCard";
// import HeaderComponent from "@/components/HeaderComponent";
// import { FooterComponent } from "@/components/FooterComponent";

// interface ProdukRaw {
//   _id: string;
//   name: string;
//   nama: string;
//   deskripsi: string;
//   kategori: string;
//   image?: string;
//   images?: string[];
// }

// interface FileEntry {
//   _id: string;
//   file_name: string;
// }

// interface ProdukDetail {
//   name: string;
//   kategori: string;
//   image?: string;
//   images?: string[];
//   nama: string;
//   deskripsi: string;
//   _id: string;
// }

// interface ApiResponseList {
//   data: ProdukRaw[];
//   message: string;
//   status: string;
// }

// interface ApiResponseDetail {
//   data: ProdukDetail;
//   files?: FileEntry[];
//   message: string;
//   status: number;
// }

// interface Params {
//   kategori: string;
// }

// function slugify(text: string) {
//   return text.toLowerCase().replace(/\s+/g, "-");
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Params;
// }): Promise<Metadata> {
//   const { kategori } = await params;
//   const label = kategori
//     .split("-")
//     .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//     .join(" ");
//   return {
//     title: `Kategori: ${label}`,
//     description: `Daftar produk kategori ${label}`,
//   };
// }

// export default async function KategoriBahanBakuPage({
//   params,
// }: {
//   params: Params;
// }) {
//   const { kategori } = await params;
//   const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
//   const TOKEN = process.env.ERP_TOKEN!;

//   // 1) Fetch list semua produk (ISR 60 detik)
//   const resList = await fetch(
//     `${API_BASE}/api/resource/Produk%20Company%20Profile`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       next: { revalidate: 60 },
//     }
//   );
//   if (!resList.ok) {
//     return (
//       <div className="p-12 text-center">
//         <h1 className="text-2xl font-semibold">Error {resList.status}</h1>
//         <p className="mt-2 text-gray-600">
//           Gagal mengambil data produk kategori &quot;{kategori}&quot;.
//         </p>
//       </div>
//     );
//   }
//   const jsonList: ApiResponseList = await resList.json();
//   const semuaProdukRaw: ProdukRaw[] = jsonList.data;

//   // 2) Daftar slug kategori “Barang Jadi”
//   const kategoriBarangJadiList = ["kasur", "rak", "kursi", "meja", "lemari"];

//   // 3) Filter: slug(p.kategori) === kategori & TIDAK termasuk kategoriBarangJadiList
//   const filteredProdukRaw = semuaProdukRaw.filter((p) => {
//     const slugP = slugify(p.kategori);
//     return slugP === kategori && !kategoriBarangJadiList.includes(slugP);
//   });

//   // 3.a) Jika kosong
//   if (filteredProdukRaw.length === 0) {
//     const label = kategori
//       .split("-")
//       .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//       .join(" ");
//     return (
//       <section className="px-6 md:px-12 lg:px-24 py-12">
//         <h1 className="text-4xl font-bold mb-6">Kategori: {label}</h1>
//         <p className="text-gray-600">Belum ada produk di kategori ini.</p>
//       </section>
//     );
//   }

//   // 4) Fetch detail per-produk untuk dapat lampiran (files)
//   type ProdukGabungan = {
//     _id: string;
//     nama: string;
//     deskripsi: string;
//     kategori: string;
//     images: string[];
//   };

//   const semuaProduk: ProdukGabungan[] = await Promise.all(
//     filteredProdukRaw.map(async (p) => {
//       const docname = p.name;
//       const detailRes = await fetch(
//         `${API_BASE}/api/resource/Produk%20Company%20Profile/${encodeURIComponent(
//           docname
//         )}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${TOKEN}`,
//             "Content-Type": "application/json",
//           },
//           next: { revalidate: 60 },
//         }
//       );
//       if (!detailRes.ok) {
//         return {
//           _id: p._id,
//           nama: p.nama,
//           deskripsi: p.deskripsi,
//           kategori: p.kategori,
//           images: [],
//         };
//       }
//       const jsonDetail: ApiResponseDetail = await detailRes.json();

//       // Ambil lampiran, kecualikan yang sama dengan p.image
//       let filePaths: string[] = [];
//       if (Array.isArray(jsonDetail.files)) {
//         filePaths = jsonDetail.files
//           .filter((f) => f.file_name !== p.image)
//           .map((f) => `/public/files/${f.file_name}`);
//       }

//       // Ambil p.images atau p.image
//       const rawImgs: string[] = [];
//       if (Array.isArray(p.images) && p.images.length > 0) {
//         rawImgs.push(...p.images);
//       } else if (typeof p.image === "string" && p.image.trim() !== "") {
//         rawImgs.push(p.image);
//       }

//       // Gabungkan
//       const mergedImgs = [...rawImgs, ...filePaths];
//       return {
//         _id: p._id,
//         nama: p.nama,
//         deskripsi: p.deskripsi,
//         kategori: p.kategori,
//         images: mergedImgs,
//       };
//     })
//   );

//   // 4.e) Sort alfabet berdasarkan nama sebelum render
//   semuaProduk.sort((a, b) => a.nama.localeCompare(b.nama));

//   // 5) Render grid
//   return (
//     <>
//       <HeaderComponent />
//       <section className="px-6 md:px-12 lg:px-24 py-12">
//         <h1 className="text-4xl font-bold mb-8">
//           Kategori:{" "}
//           {kategori
//             .split("-")
//             .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//             .join(" ")}
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
//           {semuaProduk.map((prod) => (
//             <ProductCard key={prod._id} prod={prod} />
//           ))}
//         </div>
//       </section>
//       <FooterComponent />
//     </>
//   );
// }

// src/app/produk/bahanbaku/[kategori]/page.tsx
import { Metadata } from "next";
import ProductCard from "@/components/produk/ProductCard";
import HeaderComponent from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";

interface ProdukRaw {
  _id: string;
  name: string;
  nama: string;
  deskripsi: string;
  kategori: string;
  image?: string;
  images?: string[];
}

interface FileEntry {
  _id: string;
  file_name: string;
}

interface ProdukDetail {
  name: string;
  kategori: string;
  image?: string;
  images?: string[];
  nama: string;
  deskripsi: string;
  _id: string;
}

interface ApiResponseList {
  data: ProdukRaw[];
  message: string;
  status: string;
}

interface ApiResponseDetail {
  data: ProdukDetail;
  files?: FileEntry[];
  message: string;
  status: number;
}

interface Params {
  kategori: string;
}

/**
 * Helper untuk mengubah teks menjadi slug (lowercase, ganti spasi jadi "-")
 */
function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  // Tidak perlu await di sini—params sudah objek plain
  const { kategori } = params;
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
  // Hapus "await" di sini
  const { kategori } = params;
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const TOKEN = process.env.ERP_TOKEN!;

  // 1) Fetch list semua produk (ISR 60 detik)
  const resList = await fetch(
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
  if (!resList.ok) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-semibold">Error {resList.status}</h1>
        <p className="mt-2 text-gray-600">
          Gagal mengambil data produk kategori &quot;{kategori}&quot;.
        </p>
      </div>
    );
  }
  const jsonList: ApiResponseList = await resList.json();
  const semuaProdukRaw: ProdukRaw[] = jsonList.data;

  // 2) Daftar slug kategori “Barang Jadi”
  const kategoriBarangJadiList = ["kasur", "rak", "kursi", "meja", "lemari"];

  // 3) Filter: slug(p.kategori) === kategori & tidak termasuk kategoriBarangJadiList
  const filteredProdukRaw = semuaProdukRaw.filter((p) => {
    const slugP = slugify(p.kategori);
    return slugP === kategori && !kategoriBarangJadiList.includes(slugP);
  });

  // 3.a) Jika kosong
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

  // 4) Fetch detail per-produk untuk dapat lampiran (files)
  type ProdukGabungan = {
    _id: string;
    nama: string;
    deskripsi: string;
    kategori: string;
    images: string[];
  };

  const semuaProduk: ProdukGabungan[] = await Promise.all(
    filteredProdukRaw.map(async (p) => {
      const docname = p.name;
      const detailRes = await fetch(
        `${API_BASE}/api/resource/Produk%20Company%20Profile/${encodeURIComponent(
          docname
        )}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
          next: { revalidate: 60 },
        }
      );
      if (!detailRes.ok) {
        return {
          _id: p._id,
          nama: p.nama,
          deskripsi: p.deskripsi,
          kategori: p.kategori,
          images: [],
        };
      }
      const jsonDetail: ApiResponseDetail = await detailRes.json();

      // Ambil lampiran, kecualikan yang sama dengan p.image
      let filePaths: string[] = [];
      if (Array.isArray(jsonDetail.files)) {
        filePaths = jsonDetail.files
          .filter((f) => f.file_name !== p.image)
          .map((f) => `/public/files/${f.file_name}`);
      }

      // Ambil p.images atau p.image
      const rawImgs: string[] = [];
      if (Array.isArray(p.images) && p.images.length > 0) {
        rawImgs.push(...p.images);
      } else if (typeof p.image === "string" && p.image.trim() !== "") {
        rawImgs.push(p.image);
      }

      // Gabungkan
      const mergedImgs = [...rawImgs, ...filePaths];
      return {
        _id: p._id,
        nama: p.nama,
        deskripsi: p.deskripsi,
        kategori: p.kategori,
        images: mergedImgs,
      };
    })
  );

  // 4.e) Sort alfabet berdasarkan nama sebelum render
  semuaProduk.sort((a, b) => a.nama.localeCompare(b.nama));

  // 5) Render grid
  return (
    <>
      <HeaderComponent />
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <h1 className="text-4xl font-bold mb-8">
          Kategori:{" "}
          {kategori
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {semuaProduk.map((prod) => (
            <ProductCard key={prod._id} prod={prod} />
          ))}
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

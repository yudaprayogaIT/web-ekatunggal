// src/data/jobs.ts
export interface Job {
  id: number;
  title: string;
  location: string;
  about: string;
  responsibilities: string[];
  qualifications: string[];
}

export const Jobs: Job[] = [
  {
    id: 1,
    title: "Staff Marketing",
    location: "Bogor",
    about:
      "Staff Marketing adalah posisi yang berperan penting dalam mendukung strategi pemasaran perusahaan, baik dari sisi perencanaan, pelaksanaan, hingga evaluasi kegiatan pemasaran. Staff Marketing bertugas untuk membantu menarik perhatian pasar, memperkuat citra merek, serta meningkatkan penjualan produk atau layanan melalui berbagai saluran pemasaran, baik online maupun offline.",
    responsibilities: [
      "Melaksanakan strategi pemasaran yang telah ditetapkan oleh manajemen untuk meningkatkan brand awareness dan penjualan produk",
      "Menjalin dan membina hubungan baik dengan pelanggan, baik dari sektor industri maupun retail.",
      "Mengidentifikasi peluang pasar dan potensi pelanggan baru, termasuk melakukan pendekatan prospektif.",
      "Menyusun dan mengelola materi promosi seperti brosur, katalog, presentasi, dan konten digital.",
      "Mengelola data dan laporan penjualan, serta menganalisis hasil pemasaran untuk evaluasi dan pengembangan strategi",
    ],
    qualifications: [
      "Pendidikan minimal D3/S1 di bidang Marketing, Komunikasi, Manajemen, atau jurusan relevan lainnya.",
      "Pengalaman kerja minimal 1 tahun di bidang marketing atau sales (fresh graduate dipertimbangkan jika memiliki kemampuan komunikasi yang baik).",
      "Memahami dasar-dasar pemasaran, termasuk strategi promosi, branding, dan riset pasar.",
      "Mampu berkomunikasi dengan baik, lisan maupun tulisan, serta memiliki kemampuan negosiasi yang kuat.",
      "Berpenampilan profesional dan percaya diri, terutama dalam berinteraksi dengan pelanggan dan mitra bisnis."
    ],
  },
  {
    id: 2,
    title: "Kepala Gudang",
    location: "Semarang",
    about: "Memimpin operasional gudang secara efisien.",
    responsibilities: [
      "Atur kegiatan gudang",
      "Kelola stok dan pencatatan",
      "Pastikan proses sesuai SOP",
      "Pimpin tim gudang",
    ],
    qualifications: [
      "Minimal S1",
      "Pengalaman 2 tahun di gudang",
      "Punya jiwa kepemimpinan",
      "Paham sistem gudang",
    ],
  },
  {
    id: 3,
    title: "SPV Accounting",
    location: "Bogor",
    about: "Memimpin tim accounting dan menjaga keakuratan data.",
    responsibilities: [
      "Supervisi tim accounting",
      "Penyusunan laporan bulanan",
      "Rekonsiliasi account",
    ],
    qualifications: [
      "Pendidikan minimal S1 Akuntansi",
      "Pengalaman minimal 3 tahun",
      "Leadership skill",
    ],
  },
  {
    id: 4,
    title: "Sales Support",
    location: "Palembang",
    about: "Mendukung tim sales agar target tercapai.",
    responsibilities: [
      "Follow up leads",
      "Update CRM",
      "Dokumentasi penjualan",
    ],
    qualifications: [
      "Pendidikan minimal D3",
      "Komunikatif",
      "Mampu bekerja di bawah tekanan",
    ],
  },
  {
    id: 5,
    title: "Staff Purchasing",
    location: "Medan",
    about: "Menangani pembelian barang dan vendor management.",
    responsibilities: [
      "Negosiasi dengan vendor",
      "Buat PO",
      "Pantau stok barang",
    ],
    qualifications: [
      "Pendidikan minimal D3",
      "Teliti",
      "Pengalaman di procurement menjadi nilai plus",
    ],
  },
  {
    id: 6,
    title: "Sales Support",
    location: "Kupang",
    about: "Mendukung tim sales agar target tercapai.",
    responsibilities: [
      "Follow up leads",
      "Update CRM",
      "Dokumentasi penjualan",
    ],
    qualifications: [
      "Pendidikan minimal D3",
      "Komunikatif",
      "Mampu bekerja di bawah tekanan",
    ],
  },
  {
    id: 7,
    title: "Staff Purchasing",
    location: "Manado",
    about: "Mengurus pembelian barang dan jasa perusahaan.",
    responsibilities: [
      "Melakukan proses pembelian",
      "Negosiasi dengan vendor",
      "Kelola dokumen pembelian",
      "Pantau pengiriman barang",
    ],
    qualifications: [
      "Minimal S1 (Manajemen/Ekonomi)",
      "Pengalaman 1 tahun di purchasing",
      "Negosiator yang baik",
      "Teliti dan tahan tekanan",
    ],
  },
  {
    id: 8,
    title: "Kepala Gudang",
    location: "Makassar",
    about: "Memimpin operasional gudang secara efisien.",
    responsibilities: [
      "Atur kegiatan gudang",
      "Kelola stok dan pencatatan",
      "Pastikan proses sesuai SOP",
      "Pimpin tim gudang",
    ],
    qualifications: [
      "Minimal S1",
      "Pengalaman 2 tahun di gudang",
      "Punya jiwa kepemimpinan",
      "Paham sistem gudang",
    ],
  },
  {
    id: 9,
    title: "Kepala Cabang",
    location: "Pontianak",
    about: "Mengelola operasional dan tim cabang.",
    responsibilities: [
      "Pimpin kegiatan cabang",
      "Capai target penjualan dan operasional",
      "Jalin hubungan dengan pelanggan",
      "Lapor ke kantor pusat",
    ],
    qualifications: [
      "Minimal S1 (Manajemen)",
      "Pengalaman 3 tahun di posisi serupa",
      "Pemimpin yang strategis",
      "Komunikatif dan analitis",
    ],
  },
  {
    id: 10,
    title: "IT Support",
    location: "Bogor",
    about: "Menangani permasalahan komputer dan jaringan.",
    responsibilities: [
      "Instalasi dan perawatan perangkat IT",
      "Tangani masalah teknis",
      "Dukung pengguna internal",
      "Dokumentasikan aktivitas",
    ],
    qualifications: [
      "Minimal S1 IT",
      "Paham rakit komputer",
      "Solutif dan mandiri",
      "Mau terus belajar",
    ],
  },
  {
    id: 11,
    title: "Staff Purchasing",
    location: "Klaten",
    about: "Mengurus pembelian barang dan jasa perusahaan.",
    responsibilities: [
      "Melakukan proses pembelian",
      "Negosiasi dengan vendor",
      "Kelola dokumen pembelian",
      "Pantau pengiriman barang",
    ],
    qualifications: [
      "Minimal S1 (Manajemen/Ekonomi)",
      "Pengalaman 1 tahun di purchasing",
      "Negosiator yang baik",
      "Teliti dan tahan tekanan",
    ],
  },
  {
    id: 12,
    title: "Staff Audit",
    location: "Bogor",
    about: "Melakukan audit internal dan memastikan kepatuhan.",
    responsibilities: [
      "Review laporan keuangan",
      "Audit proses bisnis",
      "Membuat rekomendasi perbaikan",
    ],
    qualifications: [
      "Pendidikan minimal S1 Akuntansi",
      "Pengalaman audit minimal 1 tahun",
      "Teliti dan jujur",
    ],
  },
];

export const locations = [
  "Bogor",
  "Klaten",
  "Kupang",
  "Makassar",
  "Manado",
  "Medan",
  "Palembang",
  "Pekanbaru",
  "Pontianak",
  "Samarinda",
  "Semarang",
  "Sidoarjo",
];

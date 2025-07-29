// src/data/jobs.ts
export interface Job {
  id: number;
  title: string;
  level: string;
  location: string;
  about: string;
  responsibilities: string[];
  qualifications: string[];
}

export const Jobs: Job[] = [
  {
    id: 1,
    title: "Staff Accounting",
    level: "Lulusan Baru",
    location: "Bogor",
    about:
      "Staf Akunting bertugas mencatat, mengelola, dan menyusun laporan keuangan secara akurat dan tepat waktu untuk mendukung pengambilan keputusan manajemen. Peran ini sangat penting dalam menjaga transparansi keuangan, pengendalian biaya, dan efisiensi operasional mendukung misi perusahaan dalam menjaga mutu, harga bersaing, dan ketepatan pengiriman.",
    responsibilities: [
      "Mencatat transaksi keuangan harian secara tepat dan sistematis ke dalam sistem akuntansi.",
      "Menyusun dan merekonsiliasi laporan keuangan bulanan seperti jurnal, buku besar, neraca, dan laporan laba rugi.",
      "Melakukan pengecekan atas kelengkapan dokumen transaksi, termasuk invoice, PO, dan bukti pembayaran.",
      "Berkoordinasi dengan tim pajak dan audit untuk memastikan kepatuhan dan kelengkapan laporan.",
      "Mendukung proses penutupan buku akhir bulan dan tahun sesuai dengan prosedur dan tenggat waktu.",
    ],
    qualifications: [
      "Minimal pendidikan S1 Akuntansi, dengan pemahaman dasar prinsip akuntansi keuangan.",
      "Pengalaman minimal 1 tahun di bidang akuntansi atau pembukuan (fresh graduate dengan IPK tinggi dipertimbangkan).",
      "Mampu mengoperasikan software akuntansi (misalnya: Accurate, SAP, atau sistem ERP).",
      "Teliti, rapi dalam pencatatan, dan disiplin terhadap deadline pelaporan.",
      "Memiliki kemampuan analisis angka dan logika keuangan yang baik.",
    ],
  },
  {
    id: 2,
    title: "Koordinator Accounting",
    level: "Berpengalaman",
    location: "Bogor",
    about: "Koordinator Akunting bertanggung jawab dalam mengoordinasikan seluruh aktivitas pencatatan dan pelaporan keuangan, memastikan akurasi data, serta kepatuhan terhadap kebijakan perusahaan dan regulasi. Posisi ini menjadi penghubung antara staf akunting dan manajemen, serta memainkan peran penting dalam menjaga kontrol keuangan perusahaan secara menyeluruh mendukung visi perusahaan menjadi pilihan utama nasional, serta misi menjaga mutu, efisiensi biaya, dan ketepatan operasional.",
    responsibilities: [
      "Mengkoordinasikan proses pencatatan dan penutupan laporan keuangan bulanan dan tahunan secara akurat dan tepat waktu.",
      "Mereview hasil kerja tim akunting, termasuk jurnal, buku besar, dan laporan keuangan.",
      "Memastikan seluruh transaksi keuangan sesuai SOP dan standar akuntansi (PSAK/IFRS).",
      "Berkoordinasi dengan auditor internal dan eksternal, serta mendukung kelengkapan dokumen saat audit.",
      "Membuat laporan analisis keuangan dan memberikan insight untuk pengambilan keputusan manajemen."
    ],
    qualifications: [
      "Pendidikan minimal S1 Akuntansi, lebih disukai jika memiliki sertifikasi (Brevet A&B, CPA/CMA).",
      "Pengalaman minimal 3 tahun di bidang akuntansi, dengan 1 tahun di posisi koordinator atau supervisi.",
      "Menguasai software akuntansi dan sistem ERP, serta mahir dalam Microsoft Excel.",
      "Mampu memimpin tim, teliti, memiliki kemampuan analisis data keuangan yang kuat.",
      "Memahami regulasi perpajakan dan prinsip pelaporan keuangan yang berlaku di Indonesia."
    ],
  },
  {
    id: 3,
    title: "Sales Executive",
    level: "Lulusan Baru",
    location: "Bogor",
    about: "Sales Executive bertanggung jawab untuk menjalankan proses penjualan secara langsung kepada pelanggan, termasuk promosi produk, negosiasi harga, hingga penutupan transaksi. Posisi ini menjadi ujung tombak pencapaian target perusahaan dalam menjangkau pasar dan membangun hubungan baik dengan pelanggan, sejalan dengan misi menjaga mutu produk, ketepatan pengiriman, dan pelayanan terbaik.",
    responsibilities: [
      "Melakukan penawaran dan promosi produk secara aktif kepada pelanggan baru dan lama.",
      "Menangani proses negosiasi hingga penutupan penjualan sesuai target yang telah ditetapkan.",
      "Membuat dan mengelola administrasi penjualan, seperti sales order, invoice, dan input ke sistem ERP.",
      "Membangun dan memelihara hubungan baik dengan pelanggan, serta menindaklanjuti kebutuhan mereka.",
      "Melaporkan hasil penjualan secara berkala dan memberikan masukan pasar kepada manajemen.",
    ],
    qualifications: [
      "Minimal pendidikan SMK/D3/S1, diutamakan dari Manajemen, Pemasaran, atau Bisnis.",
      "Memiliki pengalaman minimal 1 tahun di bidang penjualan atau marketing.",
      "Menguasai teknik komunikasi dan negosiasi yang efektif, serta memahami prinsip pelayanan pelanggan.",
      "Memahami alur penjualan dan penginputan data melalui sistem ERP.",
      "Berorientasi pada target, ulet, dan memiliki motivasi tinggi untuk mencapai hasil."
    ],
  },
  {
    id: 4,
    title: "Sales Support",
    level: "Lulusan Baru",
    location: "Bogor",
    about: "Sales Support adalah peran pendukung dalam tim penjualan yang bertugas untuk memastikan proses administratif, sistem, dan komunikasi berjalan lancar guna menunjang kinerja tim Sales. Posisi ini menjembatani kebutuhan pelanggan, tim penjualan, serta operasional agar sesuai dengan visi perusahaan untuk menjadi pilihan utama dalam trading material spring bed dan sofa secara nasional, serta misi pelayanan, mutu, dan ketepatan pengiriman.",
    responsibilities: [
      "Memastikan data penjualan, dokumen, dan transaksi tercatat rapi di sistem (ERP dan manual).",
      "Mengelola dokumen administratif penjualan seperti PO, invoice, dan delivery order.",
      "Menerapkan SOP Sales Support dalam setiap proses order hingga pengiriman barang.",
      "Membantu tim sales dalam penyediaan data produk dan stok, serta menjawab pertanyaan pelanggan internal.",
      "Melakukan pengarsipan dan pelaporan secara berkala untuk keperluan audit dan evaluasi."
    ],
    qualifications: [
      "Pendidikan minimal SMK/D3/S1, diutamakan dari Administrasi Bisnis, Manajemen, atau Sistem Informasi.",
      "Menguasai Microsoft Office (terutama Excel) dan terbiasa bekerja dengan sistem ERP.",
      "Memahami produk dan alur distribusi perusahaan, serta SOP yang terkait dengan proses penjualan.",
      "Teliti, rapi dalam pengarsipan, dan mampu bekerja cepat dalam lingkungan dinamis.",
      "Memiliki keterampilan komunikasi dan koordinasi yang baik antar divisi (sales, gudang, delivery)."
    ],
  },
  {
    id: 5,
    title: "Staff Audit",
    level: "Berpengalaman",
    location: "Medan",
    about: "Staf Audit bertanggung jawab melakukan pemeriksaan terhadap sistem, proses, dan dokumen keuangan maupun operasional perusahaan untuk memastikan kesesuaian terhadap prosedur, efisiensi, dan integritas data. Peran ini membantu memastikan bahwa perusahaan berjalan sesuai standar, mendukung kepercayaan pelanggan, pengendalian biaya, dan kualitas layanan yang konsisten.",
    responsibilities: [
      "Melakukan audit rutin terhadap proses keuangan dan operasional sesuai SOP perusahaan.",
      "Memverifikasi dokumen transaksi dan laporan untuk mencegah penyimpangan atau kesalahan.",
      "Menyusun laporan audit internal beserta rekomendasi perbaikan.",
      "Melakukan audit fisik terhadap aset, stok, dan pengiriman barang, untuk mendukung akurasi pengelolaan barang.",
      "Berkoordinasi dengan departemen terkait untuk menindaklanjuti hasil temuan dan perbaikan."
    ],
    qualifications: [
      "Minimal pendidikan S1 Akuntansi, Audit, atau Keuangan.",
      "Memiliki pemahaman kuat tentang prinsip audit, SOP, dan regulasi perusahaan.",
      "Berpengalaman di bidang audit minimal 1 tahun (fresh graduate dipertimbangkan dengan nilai akademik baik).",
      "Teliti, detail, dan memiliki integritas tinggi dalam menjaga kerahasiaan data.",
      "Mampu mengoperasikan software akuntansi dan Microsoft Excel, serta membuat laporan audit formal."
    ],
  },
  {
    id: 6,
    title: "Staff PDIC",
    level: "Berpengalaman",
    location: "Bogor",
    about: "Staf PDIC bertanggung jawab dalam pengendalian proses produksi, distribusi, dan pengelolaan persediaan barang. Posisi ini berperan penting dalam menjaga ketersediaan barang yang optimal, mengatur pengiriman tepat waktu, serta mendukung efisiensi operasional sejalan dengan misi perusahaan menjaga mutu, kepercayaan pelanggan, dan distribusi yang lancar.",
    responsibilities: [
      "Mengawasi dan mengontrol stok barang (bahan baku dan barang jadi) secara berkala di gudang dan sistem.",
      "Membuat perencanaan produksi dan distribusi sesuai kebutuhan penjualan dan target pengiriman.",
      "Mengkoordinasikan penjadwalan pengiriman barang agar tepat waktu dan efisien.",
      "Melakukan analisis rotasi stok dan pengendalian persediaan, termasuk pengadaan ulang.",
      "Bekerja sama dengan tim produksi, sales, dan logistik untuk memastikan kelancaran proses dari hulu ke hilir."
    ],
    qualifications: [
      "Pendidikan minimal D3/S1 di bidang Manajemen Operasional, Teknik Industri, atau Logistik.",
      "Memahami proses produksi, distribusi, dan sistem manajemen inventori (FIFO, safety stock, dsb).",
      "Mampu menggunakan software inventory dan sistem ERP dengan baik.",
      "Memiliki kemampuan analisis data stok dan ketelitian tinggi dalam perhitungan barang.",
      "Komunikatif dan mampu berkoordinasi lintas divisi secara efektif."
    ],
  },
  {
    id: 7,
    title: "Sales Executive",
    level: "Berpengalaman",
    location: "Sidoarjo",
    about: "Sales Executive bertanggung jawab untuk menjalankan proses penjualan secara langsung kepada pelanggan, termasuk promosi produk, negosiasi harga, hingga penutupan transaksi. Posisi ini menjadi ujung tombak pencapaian target perusahaan dalam menjangkau pasar dan membangun hubungan baik dengan pelanggan, sejalan dengan misi menjaga mutu produk, ketepatan pengiriman, dan pelayanan terbaik.",
    responsibilities: [
      "Melakukan penawaran dan promosi produk secara aktif kepada pelanggan baru dan lama.",
      "Menangani proses negosiasi hingga penutupan penjualan sesuai target yang telah ditetapkan.",
      "Membuat dan mengelola administrasi penjualan, seperti sales order, invoice, dan input ke sistem ERP.",
      "Membangun dan memelihara hubungan baik dengan pelanggan, serta menindaklanjuti kebutuhan mereka.",
      "Melaporkan hasil penjualan secara berkala dan memberikan masukan pasar kepada manajemen.",
    ],
    qualifications: [
      "Minimal pendidikan SMK/D3/S1, diutamakan dari Manajemen, Pemasaran, atau Bisnis.",
      "Memiliki pengalaman minimal 1 tahun di bidang penjualan atau marketing.",
      "Menguasai teknik komunikasi dan negosiasi yang efektif, serta memahami prinsip pelayanan pelanggan.",
      "Memahami alur penjualan dan penginputan data melalui sistem ERP.",
      "Berorientasi pada target, ulet, dan memiliki motivasi tinggi untuk mencapai hasil."
    ],
  },
  {
    id: 8,
    title: "Sales Executive",
    level: "Berpengalaman",
    location: "Samarinda",
    about: "Sales Executive bertanggung jawab untuk menjalankan proses penjualan secara langsung kepada pelanggan, termasuk promosi produk, negosiasi harga, hingga penutupan transaksi. Posisi ini menjadi ujung tombak pencapaian target perusahaan dalam menjangkau pasar dan membangun hubungan baik dengan pelanggan, sejalan dengan misi menjaga mutu produk, ketepatan pengiriman, dan pelayanan terbaik.",
    responsibilities: [
      "Melakukan penawaran dan promosi produk secara aktif kepada pelanggan baru dan lama.",
      "Menangani proses negosiasi hingga penutupan penjualan sesuai target yang telah ditetapkan.",
      "Membuat dan mengelola administrasi penjualan, seperti sales order, invoice, dan input ke sistem ERP.",
      "Membangun dan memelihara hubungan baik dengan pelanggan, serta menindaklanjuti kebutuhan mereka.",
      "Melaporkan hasil penjualan secara berkala dan memberikan masukan pasar kepada manajemen.",
    ],
    qualifications: [
      "Minimal pendidikan SMK/D3/S1, diutamakan dari Manajemen, Pemasaran, atau Bisnis.",
      "Memiliki pengalaman minimal 1 tahun di bidang penjualan atau marketing.",
      "Menguasai teknik komunikasi dan negosiasi yang efektif, serta memahami prinsip pelayanan pelanggan.",
      "Memahami alur penjualan dan penginputan data melalui sistem ERP.",
      "Berorientasi pada target, ulet, dan memiliki motivasi tinggi untuk mencapai hasil."
    ],
  },
  {
    id: 9,
    title: "Sales Executive",
    level: "Berpengalaman",
    location: "Kupang",
    about: "Sales Executive bertanggung jawab untuk menjalankan proses penjualan secara langsung kepada pelanggan, termasuk promosi produk, negosiasi harga, hingga penutupan transaksi. Posisi ini menjadi ujung tombak pencapaian target perusahaan dalam menjangkau pasar dan membangun hubungan baik dengan pelanggan, sejalan dengan misi menjaga mutu produk, ketepatan pengiriman, dan pelayanan terbaik.",
    responsibilities: [
      "Melakukan penawaran dan promosi produk secara aktif kepada pelanggan baru dan lama.",
      "Menangani proses negosiasi hingga penutupan penjualan sesuai target yang telah ditetapkan.",
      "Membuat dan mengelola administrasi penjualan, seperti sales order, invoice, dan input ke sistem ERP.",
      "Membangun dan memelihara hubungan baik dengan pelanggan, serta menindaklanjuti kebutuhan mereka.",
      "Melaporkan hasil penjualan secara berkala dan memberikan masukan pasar kepada manajemen.",
    ],
    qualifications: [
      "Minimal pendidikan SMK/D3/S1, diutamakan dari Manajemen, Pemasaran, atau Bisnis.",
      "Memiliki pengalaman minimal 1 tahun di bidang penjualan atau marketing.",
      "Menguasai teknik komunikasi dan negosiasi yang efektif, serta memahami prinsip pelayanan pelanggan.",
      "Memahami alur penjualan dan penginputan data melalui sistem ERP.",
      "Berorientasi pada target, ulet, dan memiliki motivasi tinggi untuk mencapai hasil."
    ],
  },
  {
    id: 10,
    title: "Sales Support",
    level: "Lulusan Baru",
    location: "Kupang",
    about: "Sales Support adalah peran pendukung dalam tim penjualan yang bertugas untuk memastikan proses administratif, sistem, dan komunikasi berjalan lancar guna menunjang kinerja tim Sales. Posisi ini menjembatani kebutuhan pelanggan, tim penjualan, serta operasional agar sesuai dengan visi perusahaan untuk menjadi pilihan utama dalam trading material spring bed dan sofa secara nasional, serta misi pelayanan, mutu, dan ketepatan pengiriman.",
    responsibilities: [
      "Memastikan data penjualan, dokumen, dan transaksi tercatat rapi di sistem (ERP dan manual).",
      "Mengelola dokumen administratif penjualan seperti PO, invoice, dan delivery order.",
      "Menerapkan SOP Sales Support dalam setiap proses order hingga pengiriman barang.",
      "Membantu tim sales dalam penyediaan data produk dan stok, serta menjawab pertanyaan pelanggan internal.",
      "Melakukan pengarsipan dan pelaporan secara berkala untuk keperluan audit dan evaluasi."
    ],
    qualifications: [
      "Pendidikan minimal SMK/D3/S1, diutamakan dari Administrasi Bisnis, Manajemen, atau Sistem Informasi.",
      "Menguasai Microsoft Office (terutama Excel) dan terbiasa bekerja dengan sistem ERP.",
      "Memahami produk dan alur distribusi perusahaan, serta SOP yang terkait dengan proses penjualan.",
      "Teliti, rapi dalam pengarsipan, dan mampu bekerja cepat dalam lingkungan dinamis.",
      "Memiliki keterampilan komunikasi dan koordinasi yang baik antar divisi (sales, gudang, delivery)."
    ],
  },
  // {
  //   id: 11,
  //   title: "Staff Purchasing",
  //   level: "Intermediate",
  //   location: "Klaten",
  //   about: "Mengurus pembelian barang dan jasa perusahaan.",
  //   responsibilities: [
  //     "Melakukan proses pembelian",
  //     "Negosiasi dengan vendor",
  //     "Kelola dokumen pembelian",
  //     "Pantau pengiriman barang",
  //   ],
  //   qualifications: [
  //     "Minimal S1 (Manajemen/Ekonomi)",
  //     "Pengalaman 1 tahun di purchasing",
  //     "Negosiator yang baik",
  //     "Teliti dan tahan tekanan",
  //   ],
  // },
  // {
  //   id: 12,
  //   title: "Staff Audit",
  //   level: "Intermediate",
  //   location: "Bogor",
  //   about: "Melakukan audit internal dan memastikan kepatuhan.",
  //   responsibilities: [
  //     "Review laporan keuangan",
  //     "Audit proses bisnis",
  //     "Membuat rekomendasi perbaikan",
  //   ],
  //   qualifications: [
  //     "Pendidikan minimal S1 Akuntansi",
  //     "Pengalaman audit minimal 1 tahun",
  //     "Teliti dan jujur",
  //   ],
  // },
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

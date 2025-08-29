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
    level: "Berpengalaman/Lulusan Baru",
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
    title: "IT Support",
    level: "Berpengalaman",
    location: "Bogor",
    about: "IT Support adalah posisi di perusahaan yang bertugas memberikan dukungan teknis terkait perangkat keras, perangkat lunak, jaringan, dan sistem teknologi informasi agar operasional berjalan lancar, meliputi pemeliharaan dan perbaikan perangkat, instalasi serta konfigurasi software dan hardware, pengaturan sistem jaringan, menjaga keamanan data melalui update dan backup rutin, hingga memberikan bantuan teknis serta panduan kepada karyawan dalam penggunaan teknologi.",
    responsibilities: [
      "Melakukan pemeliharaan rutin perangkat keras (hardware) dan perangkat lunak (software) agar berfungsi optimal.",
      "Menangani troubleshooting atas gangguan atau kerusakan pada komputer, printer, jaringan, maupun sistem IT lainnya.",
      "Melakukan instalasi dan konfigurasi perangkat, aplikasi, serta sistem jaringan sesuai kebutuhan perusahaan.",
      "Mengelola keamanan sistem dan data dengan melakukan update, backup rutin, serta pemasangan antivirus atau firewall.",
      "Memberikan bantuan teknis kepada karyawan terkait penggunaan perangkat dan aplikasi.",
      "Memastikan koneksi internet dan jaringan internal berjalan stabil serta aman.",
      "Mencatat dan melaporkan semua gangguan serta tindakan perbaikan yang telah dilakukan.",
      "Memberikan pelatihan singkat atau panduan penggunaan teknologi kepada karyawan."
    ],
    qualifications: [
      "Pendidikan minimal SMK/D3/S1 di bidang Teknik Informatika, Sistem Informasi, atau jurusan terkait.",
      "Pengalaman kerja di bidang IT Support atau teknis (lebih disukai, namun fresh graduate dipertimbangkan).",
      "Pemahaman teknis tentang hardware, software, jaringan, dan troubleshooting.",
      "Menguasai instalasi & konfigurasi perangkat komputer, printer, jaringan LAN/WAN, dan sistem operasi (Windows/Linux).",
      "Mampu menangani keamanan sistem & data, termasuk update, backup, dan antivirus.",
      "Keterampilan komunikasi yang baik untuk memberikan panduan teknis kepada karyawan non-teknis.",
      "Mampu bekerja di bawah tekanan, cepat tanggap, dan memiliki kemampuan analisis masalah yang baik.",
      "Memiliki sikap proaktif, teliti, dan bertanggung jawab.",
      "Bersedia bekerja di luar jam kerja jika diperlukan untuk penanganan darurat."
    ],
  },
  {
    id: 11,
    title: "Admin Purchasing",
    level: "Berpengalaman",
    location: "Bogor",
    about: "Admin Purchasing adalah posisi di perusahaan yang bertugas mengelola administrasi dan proses pembelian barang atau jasa yang dibutuhkan perusahaan, mulai dari pencatatan kebutuhan, permintaan penawaran harga, pembuatan purchase order, pengarsipan dokumen, hingga memastikan barang atau jasa yang dipesan diterima sesuai spesifikasi, jumlah, dan waktu yang telah ditentukan, serta bekerja sama dengan tim purchasing dan vendor untuk mendukung kelancaran operasional perusahaan.",
    responsibilities: [
      "Mengelola administrasi pembelian termasuk mencatat, menyimpan, dan mengarsipkan dokumen terkait proses pembelian.",
      "Menerima dan memproses permintaan pembelian dari berbagai divisi sesuai kebutuhan perusahaan.",
      "Membuat dan mengirimkan permintaan penawaran harga (request for quotation) kepada vendor atau supplier.",
      "Membandingkan penawaran harga dan menyiapkan rekomendasi vendor terbaik sesuai kualitas, harga, dan waktu pengiriman.",
      "Membuat purchase order (PO) dan memastikan detail sesuai dengan permintaan serta kesepakatan dengan vendor.",
      "Memantau proses pengiriman barang/jasa agar sesuai dengan jadwal dan spesifikasi yang telah ditentukan.",
      "Berkoordinasi dengan vendor/supplier terkait status pesanan, perubahan, atau kendala yang terjadi.",
      "Melakukan input data pembelian ke dalam sistem atau database perusahaan.",
      "Menjaga hubungan baik dengan vendor untuk kelancaran kerja sama jangka panjang.",
      "Membuat laporan pembelian secara berkala untuk manajemen."
    ],
    qualifications: [
      "Pendidikan minimal SMA/SMK sederajat (diutamakan D3/S1 semua jurusan, khususnya Administrasi atau Manajemen).",
      "Pengalaman kerja minimal 1 tahun di bidang administrasi atau purchasing (fresh graduate dipertimbangkan).",
      "Menguasai Microsoft Office (Word, Excel, dan PowerPoint) serta sistem administrasi berbasis komputer.",
      "Memahami proses pembelian barang/jasa dan pengelolaan dokumen administrasi.",
      "Mampu berkomunikasi dengan baik, baik secara lisan maupun tertulis.",
      "Teliti, rapi, dan detail-oriented dalam pengelolaan dokumen dan data.",
      "Mampu bekerja sama dalam tim dan berkoordinasi dengan berbagai divisi.",
      "Memiliki kemampuan negosiasi dasar dengan vendor atau supplier.",
      "Berintegritas, bertanggung jawab, dan proaktif dalam pekerjaan."
    ],
  },
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

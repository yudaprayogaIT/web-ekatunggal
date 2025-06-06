// // app/contact/page.tsx
// "use client";

// import React, { useState } from "react";

// interface FormState {
//   nama: string;
//   email: string;
//   telepon: string;
//   pesan: string;
// }

// export default function HeroKontak() {
//   // State input form
//   const [form, setForm] = useState<FormState>({
//     nama: "",
//     email: "",
//     telepon: "",
//     pesan: "",
//   });

//   // State untuk mengontrol loading & feedback
//   const [isLoading, setIsLoading] = useState(false);
//   const [feedback, setFeedback] = useState<string | null>(null);

//   // Handler saat input berubah
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handler saat tombol Kirim ditekan
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setFeedback(null);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       if (!res.ok) {
//         // Jika status bukan 200
//         setFeedback(data.message || "Terjadi kesalahan saat mengirim.");
//       } else {
//         setFeedback("Pesan Anda telah terkirim. Terima kasih!");
//         // Reset form jika berhasil
//         setForm({ nama: "", email: "", telepon: "", pesan: "" });
//       }
//     } catch (error) {
//       console.error(error);
//       setFeedback("Terjadi kesalahan jaringan. Silakan coba lagi.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Kontak Kami</h1>
//       <p className="mb-6 text-gray-600">Tinggalkan Sebuah Pesan</p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Nama Lengkap */}
//         <div>
//           <input
//             type="text"
//             name="nama"
//             placeholder="Nama Lengkap"
//             value={form.nama}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Nomor Telepon */}
//         <div>
//           <input
//             type="text"
//             name="telepon"
//             placeholder="Nomor Telepon"
//             value={form.telepon}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Pesan */}
//         <div>
//           <textarea
//             name="pesan"
//             placeholder="Pesan"
//             rows={5}
//             value={form.pesan}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Tombol Kirim */}
//         <div>
//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full bg-indigo-600 text-white py-3 rounded transition ${
//               isLoading
//                 ? "opacity-50 cursor-not-allowed"
//                 : "hover:bg-indigo-700"
//             }`}
//           >
//             {isLoading ? "Mengirim..." : "Kirim"}
//           </button>
//         </div>

//         {/* Feedback pesan sukses/error */}
//         {feedback && (
//           <p
//             className={`mt-4 text-center ${
//               feedback.includes("berhasil") ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             {feedback}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Anda bisa ganti regex telepon sesuai kebutuhan lokal (Indonesia, dsb.)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{7,15}$/; // hanya digit, panjang 7–15 angka

interface FormState {
  nama: string;
  email: string;
  telepon: string;
  pesan: string;
  website: string; // honeypot (field seharusnya kosong)
}

interface FormErrors {
  nama?: string;
  email?: string;
  telepon?: string;
  pesan?: string;
}

export default function HeroKontak() {
  const [form, setForm] = useState<FormState>({
    nama: "",
    email: "",
    telepon: "",
    pesan: "",
    website: "", // honeypot harus selalu string kosong
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateFields = (): boolean => {
    const newErrors: FormErrors = {};

    // Nama: minimal 3 karakter
    if (!form.nama.trim() || form.nama.trim().length < 3) {
      newErrors.nama = "Nama harus diisi (minimal 3 karakter).";
    }

    // Email: wajib dan sesuai pola
    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Format email tidak valid.";
    }

    // Telepon: optional, tapi jika diisi harus sesuai pola
    if (!form.telepon.trim()) {
      newErrors.telepon = "Nomor Telepon wajib diisi.";
    } else if (!phoneRegex.test(form.telepon.trim())) {
      newErrors.telepon = "Nomor telepon hanya boleh angka (7–15 digit).";
    }

    // Pesan: wajib, minimal 10 karakter
    if (!form.pesan.trim()) {
      newErrors.pesan = "Pesan wajib diisi.";
    } else if (form.pesan.trim().length < 10) {
      newErrors.pesan = "Pesan terlalu pendek (minimal 10 karakter).";
    }

    setErrors(newErrors);
    // Kalau newErrors kosong, validasi berhasil
    return Object.keys(newErrors).length === 0;
  };

  // Handler ketika input berubah
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Hapus error sesuai field jika user memperbaiki input
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setFeedback(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    // 1) Cek honeypot—jika terisi → kemungkinan bot, tolak submit langsung
    if (form.website) {
      console.warn("Spam terdeteksi via honeypot:", form.website);
      return; // silent fail (tidak kirim apa‐apa, session tidak berubah)
    }

    // 2) Validasi client‐side
    if (!validateFields()) {
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: form.nama.trim(),
          email: form.email.trim(),
          telepon: form.telepon.trim(),
          pesan: form.pesan.trim(),
        }),
      });

      // Jika bukan 200 OK, baca teks untuk debugging
      if (!res.ok) {
        const text = await res.text();
        console.error("Response bukan JSON (status " + res.status + "):", text);
        setFeedback("Terjadi kesalahan server. Silakan coba lagi nanti.");
        return;
      }

      const data = await res.json();
      console.log("Berhasil kirim:", data);
      setFeedback("Pesan berhasil terkirim. Terima kasih!");
      // Reset form
      setForm({ nama: "", email: "", telepon: "", pesan: "", website: "" });
    } catch (err) {
      console.error("Error jaringan:", err);
      setFeedback("Gagal mengirim pesan. Periksa koneksi internet Anda.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="flex h-[92vh] font-[montserrat]">
        <div className="logo flex-1 flex flex-col justify-center items-center gap-8">
          {/* <Link href="#">
            <Image
              src="/icons/medsos/whatsapp.png"
              width={40}
              height={40}
              alt="wa"
            ></Image>
          </Link>
          <Link href="#">
            <Image
              src="/icons/medsos/ig.png"
              width={40}
              height={40}
              alt="ig"
            ></Image>
          </Link>
          <Link href="#">
            <Image
              src="/icons/medsos/tiktok.png"
              width={40}
              height={40}
              alt="tiktok"
            ></Image>
          </Link> */}
          {/*
            Kita akan membungkus setiap Link/Icon dengan motion.div.
            Contoh animasi:
            - initial: { opacity: 0, x: -20 } (mulai sedikit di kiri dan transparent)
            - animate: { opacity: 1, x: 0 } (slide in ke posisi normal)
            - whileHover: { scale: 1.2 } (membesar saat di-hover)
            - transition: { duration: 0.4, ease: "easeOut" }
          */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.15 }}
            className="cursor-pointer"
          >
            <Link href="#" aria-label="WhatsApp">
              <Image
                src="/icons/medsos/whatsapp.png"
                width={40}
                height={40}
                alt="WhatsApp"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            whileHover={{ scale: 1.15 }}
            className="cursor-pointer"
          >
            <Link href="#" aria-label="Instagram">
              <Image
                src="/icons/medsos/ig.png"
                width={40}
                height={40}
                alt="Instagram"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.15 }}
            className="cursor-pointer"
          >
            <Link href="#" aria-label="TikTok">
              <Image
                src="/icons/medsos/tiktok.png"
                width={40}
                height={40}
                alt="TikTok"
              />
            </Link>
          </motion.div>
          {/* ============================================================================= */}
        </div>
        {/* Form Kontak */}
        <div className="kontak flex-11 mx-auto p-6 border border-gray-100">
          <h1 className="text-2xl font-bold mb-2">Kontak Kami</h1>
          <p className="mb-6 text-gray-600 font-semibold">
            Tinggalkan Sebuah Pesan
          </p>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 font-medium"
          >
            {/* Honeypot Field (harus selalu kosong) */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              style={{ display: "none" }}
              autoComplete="off"
            />

            {/* Nama Lengkap */}
            <div>
              <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                value={form.nama}
                onChange={handleChange}
                className={`w-full border rounded px-4 py-2 focus:outline-none ${
                  errors.nama
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.nama && (
                <p className="mt-1 text-xs text-red-600">{errors.nama}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border rounded px-4 py-2 focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Nomor Telepon */}
            <div>
              <input
                type="text"
                name="telepon"
                placeholder="Nomor Telepon"
                value={form.telepon}
                onChange={handleChange}
                className={`w-full border rounded px-4 py-2 focus:outline-none ${
                  errors.telepon
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.telepon && (
                <p className="mt-1 text-xs text-red-600">{errors.telepon}</p>
              )}
            </div>

            {/* Pesan */}
            <div>
              <textarea
                name="pesan"
                placeholder="Pesan"
                rows={5}
                value={form.pesan}
                onChange={handleChange}
                className={`w-full border rounded px-4 py-2 focus:outline-none ${
                  errors.pesan
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.pesan && (
                <p className="mt-1 text-xs text-red-600">{errors.pesan}</p>
              )}
            </div>

            {/* Tombol Kirim */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full cursor-pointer bg-indigo-600 text-white py-3 rounded transition ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-indigo-700"
                }`}
              >
                {isLoading ? "Mengirim..." : "Kirim"}
              </button>
            </div>

            {/* Feedback umum */}
            {feedback && (
              <p
                className={`mt-4 text-center ${
                  feedback.includes("berhasil")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
        <div className="gambar flex-8">
          <Image
            src={"/img/kontak.png"}
            width={750}
            height={750}
            alt="img-kontak"
            className="h-full w-auto"
          />
        </div>
      </div>
    </main>
  );
}

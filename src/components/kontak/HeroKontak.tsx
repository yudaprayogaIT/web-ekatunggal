// // // skema 1: Server-side dengan replyTo
// // // Pada skema ini, form di‐submit ke API Route Next.js yang mengirim email menggunakan Nodemailer. Pesan akan dikirim “dari” alamat SMTP (misalnya no-reply@domainanda.com), tetapi ketika admin membalas, akan diarahkan ke alamat email pengunjung (field replyTo).
// "use client";

// import { instagramDmWebHref, tiktokHref, whatsappHref } from "@/utils/contact";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// // Anda bisa ganti regex telepon sesuai kebutuhan lokal (Indonesia, dsb.)
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRegex = /^[0-9]{7,15}$/; // hanya digit, panjang 7–15 angka

// interface FormState {
//   nama: string;
//   email: string;
//   telepon: string;
//   pesan: string;
//   website: string; // honeypot (field seharusnya kosong)
// }

// interface FormErrors {
//   nama?: string;
//   email?: string;
//   telepon?: string;
//   pesan?: string;
// }

// export default function HeroKontak() {
//   const [form, setForm] = useState<FormState>({
//     nama: "",
//     email: "",
//     telepon: "",
//     pesan: "",
//     website: "", // honeypot harus selalu string kosong
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [feedback, setFeedback] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const validateFields = (): boolean => {
//     const newErrors: FormErrors = {};

//     // Nama: minimal 3 karakter
//     if (!form.nama.trim() || form.nama.trim().length < 3) {
//       newErrors.nama = "Nama harus diisi (minimal 3 karakter).";
//     }

//     // Email: wajib dan sesuai pola
//     if (!form.email.trim()) {
//       newErrors.email = "Email wajib diisi.";
//     } else if (!emailRegex.test(form.email.trim())) {
//       newErrors.email = "Format email tidak valid.";
//     }

//     // Telepon: wajib dan jika diisi harus sesuai pola
//     if (!form.telepon.trim()) {
//       newErrors.telepon = "Nomor Telepon wajib diisi.";
//     } else if (!phoneRegex.test(form.telepon.trim())) {
//       newErrors.telepon = "Nomor telepon hanya boleh angka (7–15 digit).";
//     }

//     // Pesan: wajib, minimal 10 karakter
//     if (!form.pesan.trim()) {
//       newErrors.pesan = "Pesan wajib diisi.";
//     } else if (form.pesan.trim().length < 10) {
//       newErrors.pesan = "Pesan terlalu pendek (minimal 10 karakter).";
//     }

//     setErrors(newErrors);
//     // Kalau newErrors kosong, validasi berhasil
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handler ketika input berubah
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     // Hapus error sesuai field jika user memperbaiki input
//     setErrors((prev) => ({ ...prev, [name]: undefined }));
//     setFeedback(null);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFeedback(null);

//     // 1) Cek honeypot—jika terisi → kemungkinan bot, tolak submit langsung
//     if (form.website) {
//       console.warn("Spam terdeteksi via honeypot:", form.website);
//       return; // silent fail (tidak kirim apa‐apa, session tidak berubah)
//     }

//     // 2) Validasi client‐side
//     if (!validateFields()) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           nama: form.nama.trim(),
//           email: form.email.trim(),
//           telepon: form.telepon.trim(),
//           pesan: form.pesan.trim(),
//         }),
//       });

//       // Jika bukan 200 OK, baca teks untuk debugging
//       if (!res.ok) {
//         const text = await res.text();
//         console.error("Response bukan JSON (status " + res.status + "):", text);
//         setFeedback("Terjadi kesalahan server. Silakan coba lagi nanti.");
//         return;
//       }

//       const data = await res.json();
//       console.log("Berhasil kirim:", data);
//       setFeedback(
//         "Pesan berhasil terkirim. Terima kasih telah menghubungi kami!"
//       );
//       // Reset form
//       setForm({ nama: "", email: "", telepon: "", pesan: "", website: "" });
//     } catch (err) {
//       console.error("Error jaringan:", err);
//       setFeedback("Gagal mengirim pesan. Periksa koneksi internet Anda.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Variants untuk animasi tiga titik loading
//   const dotVariants = {
//     animate: (i: number) => ({
//       y: [0, -8, 0], // pantul ke atas 8px lalu turun
//       transition: {
//         duration: 0.6,
//         repeat: Infinity,
//         repeatDelay: 0,
//         delay: i * 0.2,
//       },
//     }),
//   };

//   return (
//     <main>
//       <div className="flex flex-col md:flex-row md:h-[92vh] font-[montserrat]">
//         <div className="flex flex-3 order-2 md:order-1">
//           <div className="logo flex flex-col justify-center items-center mx-2 md:mx-6 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               whileHover={{ scale: 1.15 }}
//               className="cursor-pointer"
//             >
//               <Link href={whatsappHref} aria-label="WhatsApp">
//                 <Image
//                   src="/icons/medsos/whatsapp.png"
//                   width={40}
//                   height={40}
//                   alt="WhatsApp"
//                 />
//               </Link>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
//               whileHover={{ scale: 1.15 }}
//               className="cursor-pointer"
//             >
//               <Link href={instagramDmWebHref} target="_blank" aria-label="Instagram">
//                 <Image
//                   src="/icons/medsos/ig.png"
//                   width={40}
//                   height={40}
//                   alt="Instagram"
//                 />
//               </Link>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//               whileHover={{ scale: 1.15 }}
//               className="cursor-pointer"
//             >
//               <Link href={tiktokHref} target="_blank" aria-label="TikTok">
//                 <Image
//                   src="/icons/medsos/tiktok.png"
//                   width={40}
//                   height={40}
//                   alt="TikTok"
//                 />
//               </Link>
//             </motion.div>
//           </div>

//           {/* Form Kontak */}
//           <div className="kontak flex-1 p-6 border border-y-0 border-gray-100 overflow-hidden">
//             <h1 className="text-2xl font-bold mb-2">Kontak Kami</h1>
//             <p className="mb-6 text-gray-600 font-semibold">
//               Tinggalkan Sebuah Pesan
//             </p>
//             <form
//               onSubmit={handleSubmit}
//               noValidate
//               className="space-y-4 font-medium"
//             >
//               {/* Honeypot Field (harus selalu kosong) */}
//               <input
//                 type="text"
//                 name="website"
//                 value={form.website}
//                 onChange={handleChange}
//                 style={{ display: "none" }}
//                 autoComplete="off"
//               />

//               {/* Nama Lengkap */}
//               <div>
//                 <input
//                   type="text"
//                   name="nama"
//                   placeholder="Nama Lengkap"
//                   value={form.nama}
//                   onChange={handleChange}
//                   className={`w-full border rounded px-4 py-2 focus:outline-none ${
//                     errors.nama
//                       ? "border-red-500 focus:border-red-500"
//                       : "border-gray-300 focus:border-blue-500"
//                   }`}
//                 />
//                 {errors.nama && (
//                   <p className="mt-1 text-xs text-red-600">{errors.nama}</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className={`w-full border rounded px-4 py-2 focus:outline-none ${
//                     errors.email
//                       ? "border-red-500 focus:border-red-500"
//                       : "border-gray-300 focus:border-blue-500"
//                   }`}
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-xs text-red-600">{errors.email}</p>
//                 )}
//               </div>

//               {/* Nomor Telepon */}
//               <div>
//                 <input
//                   type="text"
//                   name="telepon"
//                   placeholder="Nomor Telepon"
//                   value={form.telepon}
//                   onChange={handleChange}
//                   className={`w-full border rounded px-4 py-2 focus:outline-none ${
//                     errors.telepon
//                       ? "border-red-500 focus:border-red-500"
//                       : "border-gray-300 focus:border-blue-500"
//                   }`}
//                 />
//                 {errors.telepon && (
//                   <p className="mt-1 text-xs text-red-600">{errors.telepon}</p>
//                 )}
//               </div>

//               {/* Pesan */}
//               <div>
//                 <textarea
//                   name="pesan"
//                   placeholder="Pesan"
//                   rows={5}
//                   value={form.pesan}
//                   onChange={handleChange}
//                   className={`w-full border rounded px-4 py-2 focus:outline-none ${
//                     errors.pesan
//                       ? "border-red-500 focus:border-red-500"
//                       : "border-gray-300 focus:border-blue-500"
//                   }`}
//                 />
//                 {errors.pesan && (
//                   <p className="mt-1 text-xs text-red-600">{errors.pesan}</p>
//                 )}
//               </div>

//               {/* Tombol Kirim dengan Loading */}
//               <div className="flex flex-col items-center">
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full flex justify-center items-center bg-indigo-600 text-white py-3 rounded transition ${
//                     isLoading
//                       ? "opacity-50 cursor-not-allowed"
//                       : "hover:bg-indigo-700"
//                   }`}
//                 >
//                   {isLoading ? (
//                     <div className="flex space-x-1">
//                       {[0, 1, 2].map((i) => (
//                         <motion.span
//                           key={i}
//                           className="block h-2 w-2 bg-white rounded-full"
//                           custom={i}
//                           variants={dotVariants}
//                           animate="animate"
//                         />
//                       ))}
//                     </div>
//                   ) : (
//                     "Kirim"
//                   )}
//                 </button>
//               </div>

//               {/* Feedback umum */}
//               {feedback && (
//                 <p
//                   className={`mt-2 text-center ${
//                     feedback.includes("berhasil")
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {feedback}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>

//         <div className="gambar flex-2 order-1 md:order-2">
//           <Image
//             src={"/img/heroKontak1.png"}
//             width={750}
//             height={750}
//             alt="img-kontak"
//             className="h-full w-auto"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// // // Skema 2: Email dari Pengunjung” (melengkapi via mailto:)
// // // Skema ini tidak menggunakan API Route sama sekali. Anda hanya membuat link/form yang membuka aplikasi email di perangkat pengunjung. Pesan akan benar-benar dikirim dari akun email pengunjung mereka.
// // // app/contact/page.tsx
// // "use client";

// // import React, { useState } from "react";

// // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // const phoneRegex = /^[0-9]{7,15}$/;

// // interface FormState {
// //   nama: string;
// //   email: string;
// //   telepon: string;
// //   pesan: string;
// //   website: string; // honeypot
// // }

// // interface FormErrors {
// //   nama?: string;
// //   email?: string;
// //   telepon?: string;
// //   pesan?: string;
// // }

// // export default function HeroKontakMailer() {
// //   const [form, setForm] = useState<FormState>({
// //     nama: "",
// //     email: "",
// //     telepon: "",
// //     pesan: "",
// //     website: "",
// //   });
// //   const [errors, setErrors] = useState<FormErrors>({});
// //   const [feedback, setFeedback] = useState<string | null>(null);

// //   const validateFields = (): boolean => {
// //     const newErrors: FormErrors = {};

// //     if (!form.nama.trim() || form.nama.trim().length < 3) {
// //       newErrors.nama = "Nama minimal 3 karakter.";
// //     }
// //     if (!form.email.trim()) {
// //       newErrors.email = "Email wajib diisi.";
// //     } else if (!emailRegex.test(form.email.trim())) {
// //       newErrors.email = "Format email tidak valid.";
// //     }
// //     if (!form.telepon.trim()) {
// //       newErrors.telepon = "Nomor Telepon wajib diisi.";
// //     } else if (!phoneRegex.test(form.telepon.trim())) {
// //       newErrors.telepon = "Nomor telepon hanya boleh angka (7–15 digit).";
// //     }
// //     if (!form.pesan.trim()) {
// //       newErrors.pesan = "Pesan wajib diisi.";
// //     } else if (form.pesan.trim().length < 10) {
// //       newErrors.pesan = "Pesan terlalu pendek (minimal 10 karakter).";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// //   ) => {
// //     const { name, value } = e.target;
// //     setForm((prev) => ({ ...prev, [name]: value }));
// //     setErrors((prev) => ({ ...prev, [name]: undefined }));
// //     setFeedback(null);
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (form.website) {
// //       console.warn("Spam terdeteksi via honeypot:", form.website);
// //       return;
// //     }
// //     if (!validateFields()) return;

// //     // 1) Buat subject & body
// //     const subject = encodeURIComponent(`Pesan Baru dari ${form.nama.trim()}`);
// //     const lines = [
// //       `Nama   : ${form.nama.trim()}`,
// //       `Email  : ${form.email.trim()}`,
// //       `Telepon: ${form.telepon.trim()}`,
// //       ``,
// //       `Pesan:`,
// //       form.pesan.trim(),
// //     ];
// //     const body = encodeURIComponent(lines.join("\n"));

// //     // 2) Buka klien email dengan mailto
// //     window.location.href = `mailto:admin@domainanda.com?subject=${subject}&body=${body}`;

// //     // 3) Tampilkan feedback di UI (opsional; contohnya hanya set pesan sukses)
// //     setFeedback(
// //       "Email berhasil dibuka di aplikasi email Anda. Silakan kirim secara manual."
// //     );
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto p-6 font-[montserrat]">
// //       <h1 className="text-2xl font-bold mb-2">Kontak Kami</h1>
// //       <p className="mb-6 text-gray-600 font-semibold">
// //         Melalui Email Pengunjung
// //       </p>
// //       <form onSubmit={handleSubmit} noValidate className="space-y-4">
// //         {/* Honeypot */}
// //         <input
// //           type="text"
// //           name="website"
// //           value={form.website}
// //           onChange={handleChange}
// //           style={{ display: "none" }}
// //           autoComplete="off"
// //         />

// //         {/* Nama Lengkap */}
// //         <div>
// //           <input
// //             type="text"
// //             name="nama"
// //             placeholder="Nama Lengkap"
// //             value={form.nama}
// //             onChange={handleChange}
// //             className={`w-full border rounded px-4 py-2 focus:outline-none ${
// //               errors.nama
// //                 ? "border-red-500 focus:border-red-500"
// //                 : "border-gray-300 focus:border-blue-500"
// //             }`}
// //           />
// //           {errors.nama && (
// //             <p className="mt-1 text-xs text-red-600">{errors.nama}</p>
// //           )}
// //         </div>

// //         {/* Email */}
// //         <div>
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={form.email}
// //             onChange={handleChange}
// //             className={`w-full border rounded px-4 py-2 focus:outline-none ${
// //               errors.email
// //                 ? "border-red-500 focus:border-red-500"
// //                 : "border-gray-300 focus:border-blue-500"
// //             }`}
// //           />
// //           {errors.email && (
// //             <p className="mt-1 text-xs text-red-600">{errors.email}</p>
// //           )}
// //         </div>

// //         {/* Nomor Telepon */}
// //         <div>
// //           <input
// //             type="text"
// //             name="telepon"
// //             placeholder="Nomor Telepon"
// //             value={form.telepon}
// //             onChange={handleChange}
// //             className={`w-full border rounded px-4 py-2 focus:outline-none ${
// //               errors.telepon
// //                 ? "border-red-500 focus:border-red-500"
// //                 : "border-gray-300 focus:border-blue-500"
// //             }`}
// //           />
// //           {errors.telepon && (
// //             <p className="mt-1 text-xs text-red-600">{errors.telepon}</p>
// //           )}
// //         </div>

// //         {/* Pesan */}
// //         <div>
// //           <textarea
// //             name="pesan"
// //             placeholder="Pesan"
// //             rows={5}
// //             value={form.pesan}
// //             onChange={handleChange}
// //             className={`w-full border rounded px-4 py-2 focus:outline-none ${
// //               errors.pesan
// //                 ? "border-red-500 focus:border-red-500"
// //                 : "border-gray-300 focus:border-blue-500"
// //             }`}
// //           />
// //           {errors.pesan && (
// //             <p className="mt-1 text-xs text-red-600">{errors.pesan}</p>
// //           )}
// //         </div>

// //         {/* Tombol Buka Email */}
// //         <div>
// //           <button
// //             type="submit"
// //             className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
// //           >
// //             Buka Email Saya untuk Kirim
// //           </button>
// //         </div>

// //         {/* Feedback */}
// //         {feedback && (
// //           <p className="mt-4 text-center text-green-600">{feedback}</p>
// //         )}
// //       </form>
// //     </div>
// //   );
// // }

"use client";

import { instagramDmWebHref, tiktokHref, whatsappHref } from "@/utils/contact";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TypewriterText from "./TypeWriterText";

// Regex validasi
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{7,15}$/;

interface FormState {
  nama: string;
  email: string;
  telepon: string;
  pesan: string;
  website: string; // honeypot
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
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateFields = () => {
    const errs: FormErrors = {};
    if (!form.nama.trim() || form.nama.trim().length < 3) {
      errs.nama = "Nama harus diisi (minimal 3 karakter).";
    }
    if (!form.email.trim()) {
      errs.email = "Email wajib diisi.";
    } else if (!emailRegex.test(form.email.trim())) {
      errs.email = "Format email tidak valid.";
    }
    if (!form.telepon.trim()) {
      errs.telepon = "Nomor Telepon wajib diisi.";
    } else if (!phoneRegex.test(form.telepon.trim())) {
      errs.telepon = "Nomor telepon hanya boleh angka (7–15 digit).";
    }
    if (!form.pesan.trim()) {
      errs.pesan = "Pesan wajib diisi.";
    } else if (form.pesan.trim().length < 10) {
      errs.pesan = "Pesan terlalu pendek (minimal 10 karakter).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
    setFeedback(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    if (form.website) return; // honeypot
    if (!validateFields()) return;

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
      if (!res.ok) {
        setFeedback("Terjadi kesalahan server. Silakan coba lagi.");
      } else {
        setFeedback("Pesan berhasil terkirim. Terima kasih!");
        setForm({ nama: "", email: "", telepon: "", pesan: "", website: "" });
      }
    } catch {
      setFeedback("Gagal mengirim pesan. Periksa koneksi internet.");
    } finally {
      setIsLoading(false);
    }
  };

  const dotVars = {
    animate: (i: number) => ({
      y: [0, -6, 0],
      transition: { duration: 0.6, repeat: Infinity, delay: i * 0.2 },
    }),
  };

  return (
    <main>
      <div className="flex flex-col lg:flex-row lg:h-[92vh] font-[montserrat]">
        {/* SIDEBAR SOSMED + FORM */}
        <div className="flex flex-3 order-2 lg:order-1">
          <div className="logo flex flex-col justify-center items-center mx-2 md:mx-6 gap-8">
            {[
              {
                href: whatsappHref,
                alt: "WhatsApp",
                src: "/icons/medsos/whatsapp.png",
                delay: 0,
              },
              {
                href: instagramDmWebHref,
                alt: "Instagram",
                src: "/icons/medsos/ig.png",
                delay: 0.1,
              },
              {
                href: tiktokHref,
                alt: "TikTok",
                src: "/icons/medsos/tiktok.png",
                delay: 0.2,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4 + item.delay,
                  ease: "easeOut",
                  delay: item.delay,
                }}
                whileHover={{ scale: 1.15 }}
                className="cursor-pointer"
              >
                <Link href={item.href} target="_blank" aria-label={item.alt}>
                  <Image src={item.src} width={40} height={40} alt={item.alt} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="kontak flex-1 p-6 border border-y-0 border-gray-100 overflow-hidden">
            <h1 className="text-2xl font-bold mb-2">Kontak Kami</h1>
            <p className="mb-6 text-gray-600 font-semibold">
              Tinggalkan Sebuah Pesan
            </p>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4 font-medium"
            >
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                style={{ display: "none" }}
              />

              {/** Nama **/}
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

              {/** Email **/}
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

              {/** Telepon **/}
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

              {/** Pesan **/}
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

              {/** Button **/}
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center items-center bg-indigo-600 text-white py-3 rounded transition ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-indigo-700"
                  }`}
                >
                  {isLoading ? (
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="block h-2 w-2 bg-white rounded-full"
                          custom={i}
                          variants={dotVars}
                          animate="animate"
                        />
                      ))}
                    </div>
                  ) : (
                    "Kirim"
                  )}
                </button>
              </div>

              {feedback && (
                <p
                  className={`mt-2 text-center ${
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
        </div>

        {/* ILUSTRASI + TYPEWRITER BUBLE */}
        <div className="gambar flex-2 order-1 lg:order-2 relative">
          <Image
            src={"/img/heroKontak.png"}
            width={1000}
            height={1000}
            alt="img-kontak"
            className="object-contain"
          />

          {/* Buble putih dengan teks */}
          <div className="absolute top-28 left-20 sm:top-55 sm:left-35 lg:top-35 lg:left-12 2xl:top-50 2xl:left-30">
            {/* Bubble container */}
            <div
              className="relative bg-white border-2 border-black w-40 h-15 sm:w-80 sm:h-25 lg:w-58 lg:h-18 rounded-xl p-3
                  font-[montserrat] font-semibold text-[10px] sm:text-xl lg:text-sm 2xl:text-base leading-tight"
            >
              <p className="-mt-1 sm:mt-1.5 lg:mt-0 mb-1">Hallo ...</p>
              <TypewriterText
                text="Ada yang bisa kami bantu?"
                speed={80}
                resetDelay={4000}
                loop
                className=""
              />

              {/* Tail / arrow */}
              {/* Outer: border hitam */}
              <div
                className="absolute bottom-2.5 -right-5 w-0 h-0
               border-t-10 border-t-transparent
               border-r-10 border-r-transparent
               border-l-10 border-l-black"
              >
                {/* Inner: fill putih, offset 1px */}
                <div
                  className="absolute bottom-0.5 -left-2.5 w-0 h-0
                 border-t-7 border-t-transparent
                 border-r-7 border-r-transparent
                 border-l-7 border-l-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

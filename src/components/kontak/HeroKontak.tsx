"use client";

// import { instagramDmWebHref, tiktokHref, whatsappHref } from "@/utils/contact";
import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
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
          {/* <div className="logo flex flex-col justify-center items-center mx-2 md:mx-6 gap-8">
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
          </div> */}

          <div className="kontak flex-1 p-6 border border-y-0 border-gray-100 overflow-hidden">
            <h1 className="text-2xl font-bold mb-2">Kontak Kami</h1>
            <p className="mb-6 text-gray-600 font-semibold">
              Tinggalkan Sebuah Pesan
            </p>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4 font-medium text-base"
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
          <div className="absolute top-28 left-20 sm:top-55 sm:left-35 lg:top-35 lg:left-12 [@media(min-width:1440px)]:top-40 2xl:top-50 2xl:left-30">
            {/* Bubble container */}
            <div
              className="relative bg-white border-2 border-black w-40 h-auto sm:w-80 lg:w-58 rounded-xl p-3
                  font-[montserrat] font-semibold text-[10px] sm:text-xl lg:text-sm 2xl:text-base leading-tight"
            >
            {/* <div
              className="relative bg-white border-2 border-black w-40 h-15 sm:w-80 sm:h-25 lg:w-58 lg:h-18 rounded-xl p-3
                  font-[montserrat] font-semibold text-[10px] sm:text-xl lg:text-sm 2xl:text-base leading-tight"
            > */}
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

"use client";

import React, { useMemo, useState } from "react";
import { branches } from "@/data/branches";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "react-feather"; // ⬅️ import icon mata

export type Payload = {
  fullName: string;
  password: string;
  phone: string;
  company: string;
  companyDate: { day: string; month: string; year: string };
  branchId: string;
  ownerDob: { day: string; month: string; year: string };
  gender: string;
};

type SubmitResult = { ok: boolean; error?: string | null };

type Props = {
  initialPhone?: string;
  onCancel: () => void;
  onSubmit: (payload: Payload) => Promise<SubmitResult>;
};

// -----------------
// Zod Schema
// -----------------
const formSchema = z
  .object({
    company: z.string().min(1, "Nama perusahaan wajib diisi."),
    companyDay: z.string().min(1, "Tanggal perusahaan diperlukan."),
    companyMonth: z.string().min(1, "Bulan perusahaan diperlukan."),
    companyYear: z.string().min(1, "Tahun perusahaan diperlukan."),
    branchId: z.string().min(1, "Pilih cabang terdekat."),
    fullName: z.string().min(1, "Nama lengkap pemilik wajib diisi."),
    ownerDay: z.string().min(1, "Tanggal lahir pemilik diperlukan."),
    ownerMonth: z.string().min(1, "Bulan lahir pemilik diperlukan."),
    ownerYear: z.string().min(1, "Tahun lahir pemilik diperlukan."),
    gender: z.string().min(1, "Pilih jenis kelamin."),
    phone: z.string().min(1, "Nomor telepon tidak tersedia."),
    password: z.string().min(6, "Kata sandi minimal 6 karakter."),
    confirmPassword: z.string().min(1, "Konfirmasi kata sandi diperlukan."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi kata sandi tidak cocok.",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function FormRegis({
  initialPhone = "",
  onCancel,
  onSubmit,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      companyDay: "",
      companyMonth: "",
      companyYear: "",
      branchId: "",
      fullName: "",
      ownerDay: "",
      ownerMonth: "",
      ownerYear: "",
      gender: "",
      phone: initialPhone,
      password: "",
      confirmPassword: "",
    },
  });

  // State untuk show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const days = useMemo(
    () => Array.from({ length: 31 }, (_, i) => String(i + 1)),
    []
  );
  const months = useMemo(
    () => [
      { v: "01", label: "Januari" },
      { v: "02", label: "Februari" },
      { v: "03", label: "Maret" },
      { v: "04", label: "April" },
      { v: "05", label: "Mei" },
      { v: "06", label: "Juni" },
      { v: "07", label: "Juli" },
      { v: "08", label: "Agustus" },
      { v: "09", label: "September" },
      { v: "10", label: "Oktober" },
      { v: "11", label: "November" },
      { v: "12", label: "Desember" },
    ],
    []
  );
  const currentYear = new Date().getFullYear();
  const companyYears = useMemo(() => {
    const start = Math.max(1950, currentYear - 100);
    return Array.from(
      { length: currentYear - start + 1 },
      (_, i) => String(start + i)
    ).reverse();
  }, [currentYear]);
  const ownerYears = useMemo(() => {
    const start = 1950;
    return Array.from(
      { length: currentYear - start + 1 },
      (_, i) => String(start + i)
    ).reverse();
  }, [currentYear]);

  // ⬅️ Sort cabang berdasarkan nama
  const sortedBranches = useMemo(() => {
    return [...branches].sort((a, b) => a.id.localeCompare(b.id));
  }, []);

  const onSubmitHandler = async (data: FormValues) => {
    const payload: Payload = {
      fullName: data.fullName.trim(),
      password: data.password,
      phone: data.phone,
      company: data.company.trim(),
      companyDate: {
        day: data.companyDay,
        month: data.companyMonth,
        year: data.companyYear,
      },
      branchId: data.branchId,
      ownerDob: {
        day: data.ownerDay,
        month: data.ownerMonth,
        year: data.ownerYear,
      },
      gender: data.gender,
    };

    const result = await onSubmit(payload);
    if (!result.ok) {
      alert(result.error ?? "Gagal menyimpan data.");
    }
  };

  return (
    <main className="min-h-screen flex items-start justify-center p-6 bg-[url('/img/registrasi/heroRegistrasi.png')] bg-contain bg-no-repeat">
      <div className="w-full max-w-3xl my-2 mx-6">
        <div className="bg-white border border-gray-200 rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold text-center mb-1">Daftar</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Silahkan lengkapi data di bawah ini untuk melanjutkan pendaftaran
          </p>

          <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
            {/* Identitas Perusahaan */}
            <section>
              <h3 className="text-sm font-semibold mb-3">Identitas Perusahaan</h3>
              <div className="space-y-3">
                <input
                  {...register("company")}
                  placeholder="Nama Perusahaan"
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.company && (
                  <p className="text-sm text-red-600">
                    {errors.company.message}
                  </p>
                )}

                <div className="grid grid-cols-3 gap-3">
                  <select {...register("companyDay")} className="px-3 py-2 border rounded">
                    <option value="">Tanggal</option>
                    {days.map((d) => (
                      <option key={d} value={d.padStart(2, "0")}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <select {...register("companyMonth")} className="px-3 py-2 border rounded">
                    <option value="">Bulan</option>
                    {months.map((m) => (
                      <option key={m.v} value={m.v}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                  <select {...register("companyYear")} className="px-3 py-2 border rounded">
                    <option value="">Tahun</option>
                    {companyYears.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                {(errors.companyDay || errors.companyMonth || errors.companyYear) && (
                  <p className="text-sm text-red-600">
                    {errors.companyDay?.message ||
                      errors.companyMonth?.message ||
                      errors.companyYear?.message}
                  </p>
                )}

                <select {...register("branchId")} className="w-full px-3 py-2 border rounded">
                  <option value="">Pilih Cabang Terdekat</option>
                  {sortedBranches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {capitalize(b.id)} - {b.name}
                    </option>
                  ))}
                </select>
                {errors.branchId && (
                  <p className="text-sm text-red-600">
                    {errors.branchId.message}
                  </p>
                )}
              </div>
            </section>

            {/* Identitas Pemilik */}
            <section>
              <h3 className="text-sm font-semibold mb-3">Identitas Pemilik</h3>
              <div className="space-y-3">
                <input
                  {...register("fullName")}
                  placeholder="Nama Lengkap"
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-600">
                    {errors.fullName.message}
                  </p>
                )}

                <div className="grid grid-cols-3 gap-3">
                  <select {...register("ownerDay")} className="px-3 py-2 border rounded">
                    <option value="">Tanggal</option>
                    {days.map((d) => (
                      <option key={d} value={d.padStart(2, "0")}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <select {...register("ownerMonth")} className="px-3 py-2 border rounded">
                    <option value="">Bulan</option>
                    {months.map((m) => (
                      <option key={m.v} value={m.v}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                  <select {...register("ownerYear")} className="px-3 py-2 border rounded">
                    <option value="">Tahun</option>
                    {ownerYears.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                {(errors.ownerDay || errors.ownerMonth || errors.ownerYear) && (
                  <p className="text-sm text-red-600">
                    {errors.ownerDay?.message ||
                      errors.ownerMonth?.message ||
                      errors.ownerYear?.message}
                  </p>
                )}

                <select {...register("gender")} className="w-full px-3 py-2 border rounded">
                  <option value="">Jenis Kelamin</option>
                  <option value="male">Laki-laki</option>
                  <option value="female">Perempuan</option>
                </select>
                {errors.gender && (
                  <p className="text-sm text-red-600">{errors.gender.message}</p>
                )}

                <input
                  {...register("phone")}
                  readOnly
                  className="w-full px-3 py-2 border rounded bg-slate-50"
                />

                {/* Password */}
                <div className="relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Kata Sandi"
                    className="w-full px-3 py-2 border rounded pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-2.5 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password.message}</p>
                )}

                {/* Confirm Password */}
                <div className="relative">
                  <input
                    {...register("confirmPassword")}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Konfirmasi Kata Sandi"
                    className="w-full px-3 py-2 border rounded pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-2.5 text-gray-500"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
                )}
              </div>
            </section>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 rounded border"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 rounded bg-[#5328EE] text-white"
              >
                {isSubmitting ? "Menyimpan..." : "Simpan & Daftar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

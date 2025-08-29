// src/components/akun/HeroRegistrasi.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Message = { type: "error" | "success"; text: string } | null;

function normalizePhoneTo0(raw: string) {
  const cleaned = raw.replace(/[^\d+]/g, "");
  if (cleaned.startsWith("+62")) return "0" + cleaned.slice(3);
  if (cleaned.startsWith("62")) return "0" + cleaned.slice(2);
  return cleaned;
}

function validatePhoneFormat(raw: string): { ok: boolean; normalized?: string; error?: string } {
  const trimmed = raw.trim();
  if (!trimmed) return { ok: false, error: "Masukkan nomor telepon." };
  const normalized = normalizePhoneTo0(trimmed);
  if (!/^\d+$/.test(normalized)) return { ok: false, error: "Nomor harus berupa angka." };
  if (normalized.length < 9 || normalized.length > 15) return { ok: false, error: "Panjang nomor tidak valid." };
  if (!normalized.startsWith("0")) return { ok: false, error: "Format nomor tidak valid (harus mulai 0 atau +62)." };
  return { ok: true, normalized };
}

type RegistrationRecord = {
  id: number;
  fullName?: string;
  phone: string;
  status?: "pending" | "approved" | "rejected" | string;
  adminMessage?: string | null;
  createdAt?: string;
};

export default function HeroRegistrasi() {
  const router = useRouter();

  const [telepon, setTelepon] = useState("");
  const [message, setMessage] = useState<Message>(null);

  const [isSending, setIsSending] = useState(false);
  const [resendTimer, setResendTimer] = useState(0); // seconds

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [otpError, setOtpError] = useState<string | null>(null);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const teleponRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const t = setInterval(() => setResendTimer((s) => (s <= 1 ? 0 : s - 1)), 1000);
    return () => clearInterval(t);
  }, [resendTimer]);

  // Ambil data pendaftaran berdasar nomor (atau null)
  async function getRegistrationByPhone(normalized: string): Promise<RegistrationRecord | null> {
    try {
      // force no-cache supaya selalu dapat status terbaru
      const res = await fetch(`/api/registrations?number=${encodeURIComponent(normalized)}`, { cache: "no-store" });
      if (!res.ok) {
        console.error("GET /api/registrations failed", res.status);
        return null;
      }
      const json = await res.json().catch(() => null);
      if (!json) return null;
      if (!json.exists) return null;
      return json.data as RegistrationRecord;
    } catch (err) {
      console.error("getRegistrationByPhone error:", err);
      return null;
    }
  }

  const handleSendOtp = async (e?: React.MouseEvent | React.FormEvent) => {
    e?.preventDefault();
    setMessage(null);
    setOtpError(null);

    const v = validatePhoneFormat(telepon);
    if (!v.ok || !v.normalized) {
      setMessage({ type: "error", text: v.error ?? "Nomor tidak valid." });
      return;
    }
    const normalized = v.normalized;

    setIsSending(true);
    try {
      const registration = await getRegistrationByPhone(normalized);

      if (registration) {
        const status = (registration.status ?? "pending") as string;

        if (status === "approved") {
          // ----------------------------------------------------------------
          // Perubahan: untuk akun yang sudah approved kita **cukup tampilkan**
          // pesan "Nomor sudah terdaftar!" (merah), tidak redirect.
          // ----------------------------------------------------------------
          setMessage({ type: "error", text: "Nomor sudah terdaftar!" });
          return;
        }

        if (status === "pending") {
          // jika masih pending -> ke halaman status (Pending)
          router.push(`/akun/registrasi/status?phone=${encodeURIComponent(normalized)}`);
          return;
        }

        if (status === "rejected") {
          // jika ditolak -> ke halaman status (Ditolak)
          router.push(`/akun/registrasi/status?phone=${encodeURIComponent(normalized)}`);
          return;
        }

        setMessage({ type: "error", text: `Nomor tercatat dengan status: ${status}. Hubungi admin.` });
        return;
      }

      // belum terdaftar -> lanjut OTP flow
      setShowOtpModal(true);
      setResendTimer(60);
      setOtpInput("");
      setMessage({ type: "success", text: `OTP dikirim ke ${normalized}` });
    } catch (err) {
      console.error("handleSendOtp error:", err);
      setMessage({ type: "error", text: "Gagal memeriksa nomor. Coba lagi." });
    } finally {
      setIsSending(false);
    }
  };

  const handleResendOtp = () => {
    if (resendTimer > 0) return;
    setResendTimer(60);
    setMessage({ type: "success", text: "OTP dikirim ulang." });
  };

  // Demo: kode OTP = 1234 (ganti dengan SMS provider di production)
  const handleVerifyOtp = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setOtpError(null);
    if (otpInput.trim().length === 0) {
      setOtpError("Masukkan kode OTP.");
      return;
    }
    if (otpInput.trim() !== "1234") {
      setOtpError("OTP salah. Coba lagi.");
      return;
    }
    // OTP valid -> close otp modal and open confirm modal
    setShowOtpModal(false);
    setShowConfirmModal(true);
  };

  const handleChangeNumber = () => {
    setShowConfirmModal(false);
    setOtpInput("");
    setOtpError(null);
    setMessage(null);
    setTimeout(() => teleponRef.current?.focus(), 10);
  };

  // Setelah user pilih "Lanjut" pada confirm modal -> redirect ke form registrasi
  const handleProceedRegister = () => {
    const normalized = normalizePhoneTo0(telepon || "");
    const v = validatePhoneFormat(normalized);
    if (!v.ok || !v.normalized) {
      setMessage({ type: "error", text: "Nomor telepon tidak valid." });
      return;
    }
    router.push(`/akun/registrasi/form?phone=${encodeURIComponent(v.normalized)}`);
  };

  return (
    <main>
      <div className="flex flex-col lg:flex-row lg:h-auto font-[montserrat]">
        <div className="flex flex-3 order-2 lg:order-1">
          <div className="flex-1 p-8 my-2 mx-10 border border-[#0000004d] rounded-xl overflow-hidden">
            <h1 className="text-2xl font-[montserrat] font-bold text-center">Daftar</h1>
            <p className="mb-6 text-[#00000064] font-regular text-center font-[lato] text-xl">
              Sudah punya akun? Silahkan masuk{" "}
              <Link href="/login" className="text-[#5328EE]">
                disini
              </Link>
            </p>

            <form onSubmit={(e) => e.preventDefault()} noValidate className="space-y-4 font-medium text-base">
              <div>
                <label htmlFor="telepon" className="sr-only">Nomor Telepon</label>

                <div className="flex items-center border border-[#0000004d] rounded-md overflow-hidden">
                  <input
                    id="telepon"
                    type="tel"
                    name="telepon"
                    placeholder="Nomor Telepon"
                    value={telepon}
                    onChange={(e) => setTelepon(e.target.value)}
                    ref={teleponRef}
                    className="flex-1 px-4 py-3 bg-transparent outline-none text-sm"
                  />

                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={isSending}
                    className={`px-2 py-2 m-2 text-sm rounded-lg ${isSending ? "bg-gray-300 text-gray-700" : "bg-[#5328EE] text-white"}`}
                    aria-label="Kirim OTP"
                  >
                    {isSending ? "Mengirim..." : "Kirim OTP"}
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setMessage({ type: "error", text: "Gunakan tombol 'Kirim OTP' untuk memulai pendaftaran." })}
                  className="w-full flex justify-center items-center bg-[#5328ee60] text-white py-3 rounded transition"
                >
                  Daftar
                </button>
              </div>

              {/* tampilkan pesan: merah untuk error, hijau untuk success */}
              {message && (
                <p
                  className={`-mt-2 text-sm ${message.type === "error" ? "text-red-600" : "text-green-600"}`}
                  role="status"
                >
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="gambar flex-2 order-1 lg:order-2 relative">
          <Image src={"/img/registrasi/heroRegistrasi.png"} width={1000} height={1000} alt="img-kontak" className="object-contain rounded-xs shadow-md" />
        </div>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-3">Masukkan Kode OTP</h3>
            <p className="text-sm text-slate-600 mb-4">Untuk demo: gunakan kode <strong>1234</strong>.</p>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                inputMode="numeric"
                maxLength={4}
                placeholder=""
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-4 py-3 border rounded outline-none text-center tracking-widest text-lg"
              />
              {otpError && <div className="text-sm text-red-600">{otpError}</div>}

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  {resendTimer > 0 ? (
                    <span className="text-slate-600">Kirim ulang dalam {resendTimer}s</span>
                  ) : (
                    <button type="button" onClick={handleResendOtp} className="text-sm underline">Kirim ulang kode</button>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowOtpModal(false);
                      setOtpInput("");
                      setOtpError(null);
                    }}
                    className="px-4 py-2 rounded border"
                  >
                    Batal
                  </button>
                  <button type="submit" className="px-4 py-2 rounded bg-[#5328EE] text-white">Verifikasi</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirm Modal (asks whether to continue with this number) */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white font-[montserrat] rounded-lg shadow-lg w-full max-w-max p-6 text-center">
            <h3 className="text-lg font-bold mb-3">Nomor Telepon Belum Terdaftar</h3>
            <p className="mb-4 text-sm text-slate-700">
              Lanjut daftar dengan nomor ini? <strong>{normalizePhoneTo0(telepon)}</strong>
            </p>

            <div className="flex justify-center gap-3 font-bold">
              <button onClick={handleChangeNumber} className="px-6 py-2 rounded-lg mx-2 border border-[var(--colorRed)] text-[var(--colorRed)]">
                Ubah
              </button>
              <button onClick={handleProceedRegister} className="px-6 py-2 rounded-lg bg-[var(--colorRed)] text-white">
                Lanjut
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

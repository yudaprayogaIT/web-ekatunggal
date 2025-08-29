// src/components/akun/HeroLogin.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "react-feather";
import { z } from "zod";

type Message = { type: "error" | "success"; text: string } | null;

type RegistrationRecord = {
  id: number;
  fullName?: string;
  phone: string;
  passwordHash?: string;
  status?: "pending" | "approved" | "rejected" | string;
  adminMessage?: string | null;
  createdAt?: string;
};

type ApiResponse<T = unknown> = {
  ok?: boolean;
  message?: string;
  redirectTo?: string;
  status?: string;
  data?: T;
  exists?: boolean;
  code?: string;
};

// Zod schemas
const normalizedPhoneSchema = z
  .string()
  .min(1, "Masukkan nomor telepon.")
  .regex(/^\d+$/, "Nomor harus berupa angka.")
  .refine((s) => s.length >= 9 && s.length <= 15, {
    message: "Panjang nomor tidak valid.",
  })
  .refine((s) => s.startsWith("0"), {
    message: "Format nomor tidak valid (harus mulai 0 atau +62).",
  });

const loginSchema = z.object({
  phone: z.string(),
  password: z.string().min(4, "Masukkan password minimal 4 karakter."),
});

const otpSchema = z
  .string()
  .min(1, "Masukkan kode OTP.")
  .regex(/^\d+$/, "OTP hanya angka.");

const resetPasswordSchema = z
  .object({
    phone: z.string(),
    newPassword: z.string().min(6, "Password baru minimal 6 karakter."),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Konfirmasi password tidak cocok.",
      });
    }
  });

function normalizePhoneTo0(raw: string) {
  const cleaned = raw.replace(/[^\d+]/g, "");
  if (cleaned.startsWith("+62")) return "0" + cleaned.slice(3);
  if (cleaned.startsWith("62")) return "0" + cleaned.slice(2);
  return cleaned;
}
function parseAndNormalizePhone(raw: string): {
  ok: boolean;
  normalized?: string;
  error?: string;
} {
  const pre = normalizePhoneTo0(raw);
  const parsed = normalizedPhoneSchema.safeParse(pre);
  if (!parsed.success)
    return { ok: false, error: parsed.error.issues[0].message };
  return { ok: true, normalized: parsed.data };
}

export default function HeroLogin() {
  const router = useRouter();

  // form state
  const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<Message>(null);
  const [isChecking, setIsChecking] = useState(false);
  // default: password hidden => icon should be closed (EyeOff)
  const [showPassword, setShowPassword] = useState(false);

  // forgot password states
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotPhone, setForgotPhone] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [otpError, setOtpError] = useState<string | null>(null);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmittingReset, setIsSubmittingReset] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const teleponRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const forgotPhoneRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    teleponRef.current?.focus();
  }, []);
  useEffect(() => {
    if (resendTimer <= 0) return;
    const t = setInterval(
      () => setResendTimer((s) => (s <= 1 ? 0 : s - 1)),
      1000
    );
    return () => clearInterval(t);
  }, [resendTimer]);

  // fetch registration (existing app route you already have)
  async function getRegistrationByPhone(
    normalized: string
  ): Promise<RegistrationRecord | null> {
    try {
      const res = await fetch(
        `/api/registrations?number=${encodeURIComponent(normalized)}`,
        { cache: "no-store" }
      );
      if (!res.ok) return null;
      const json = await res.json().catch(() => null);
      if (!json) return null;
      if (json.exists === false) return null;
      return json.data ?? null;
    } catch (err) {
      console.error("getRegistrationByPhone error:", err);
      return null;
    }
  }

  // LOGIN -> calls /api/akun/login
  const handleLogin = async (e?: React.MouseEvent | React.FormEvent) => {
    e?.preventDefault();
    setMessage(null);

    const phoneParsed = parseAndNormalizePhone(telepon);
    if (!phoneParsed.ok || !phoneParsed.normalized) {
      setMessage({
        type: "error",
        text: phoneParsed.error ?? "Nomor tidak valid.",
      });
      return;
    }
    const normalized = phoneParsed.normalized;
    setIsChecking(true);

    try {
      // cek terdaftar dulu
      const reg = await getRegistrationByPhone(normalized);
      if (!reg) {
        setMessage({ type: "error", text: "Nomor Anda belum terdaftar." });
        return;
      }

      const loginParsed = loginSchema.safeParse({
        phone: normalized,
        password,
      });
      if (!loginParsed.success) {
        setMessage({
          type: "error",
          text: loginParsed.error.issues[0].message,
        });
        return;
      }

      const resp = await fetch("/api/akun/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalized, password }),
      });

      // 401 -> wrong password
      if (resp.status === 401) {
        setMessage({ type: "error", text: "Password Anda salah." });
        return;
      }

      const json = (await resp.json().catch(() => null)) as ApiResponse | null;

      // some servers respond ok:false + code/message
      const serverSaysInvalidPwd =
        json &&
        json.ok === false &&
        ((json.code &&
          (json.code === "INVALID_PASSWORD" ||
            json.code === "INVALID_CREDENTIALS")) ||
          (typeof json.message === "string" &&
            /password|credential|invalid|wrong|incorrect/i.test(json.message)));

      if (serverSaysInvalidPwd) {
        setMessage({ type: "error", text: "Password Anda salah." });
        return;
      }

      if (!resp.ok || !json) {
        setMessage({
          type: "error",
          text: json?.message ?? "Gagal login. Coba lagi.",
        });
        return;
      }

      if (json.ok) {
        const target = json.redirectTo ?? "/dashboard";
        setMessage({
          type: "success",
          text: json.message ?? "Login berhasil. Mengarahkan...",
        });
        setTimeout(() => router.push(target), 300);
        return;
      }

      if (json.status && json.status !== "approved") {
        router.push(
          `/akun/registrasi/status?phone=${encodeURIComponent(normalized)}`
        );
        return;
      }

      setMessage({
        type: "error",
        text: json.message ?? "Gagal login. Periksa nomor / password.",
      });
    } catch (err) {
      console.error("handleLogin error:", err);
      setMessage({ type: "error", text: "Terjadi kesalahan. Coba lagi." });
    } finally {
      setIsChecking(false);
    }
  };

  // FORGOT PASSWORD flows
  const openForgotModal = () => {
    setMessage(null);
    setForgotPhone("");
    setOtpInput("");
    setOtpError(null);
    setShowForgotModal(true);
    setShowOtpModal(false);
    setShowResetPasswordModal(false);
    setTimeout(() => forgotPhoneRef.current?.focus(), 20);
  };

  const sendForgotOtp = async () => {
    setMessage(null);
    const phoneParsed = parseAndNormalizePhone(forgotPhone);
    if (!phoneParsed.ok || !phoneParsed.normalized) {
      setMessage({
        type: "error",
        text: phoneParsed.error ?? "Nomor tidak valid.",
      });
      return;
    }
    const normalized = phoneParsed.normalized;
    setIsChecking(true);
    try {
      const reg = await getRegistrationByPhone(normalized);
      if (!reg) {
        setMessage({
          type: "error",
          text: "Nomor tidak ditemukan. Silakan daftar terlebih dahulu.",
        });
        return;
      }
      const status = reg.status ?? "pending";
      if (status !== "approved") {
        router.push(
          `/akun/registrasi/status?phone=${encodeURIComponent(normalized)}`
        );
        return;
      }

      // Demo: just open modal & set timer (replace with real SMS in production)
      setResendTimer(60);
      setShowOtpModal(true);
      setOtpInput("");
      setOtpError(null);
      setMessage({
        type: "success",
        text: `OTP dikirim ke ${normalized} (demo: 1234)`,
      });
    } catch (err) {
      console.error("sendForgotOtp error:", err);
      setMessage({ type: "error", text: "Gagal mengirim OTP. Coba lagi." });
    } finally {
      setIsChecking(false);
    }
  };

  const handleResendOtp = () => {
    if (resendTimer > 0) return;
    setResendTimer(60);
    setMessage({ type: "success", text: "OTP dikirim ulang. (demo: 1234)" });
  };

  const handleVerifyOtp = (e?: React.FormEvent) => {
    e?.preventDefault();
    setOtpError(null);
    const otpParsed = otpSchema.safeParse(otpInput);
    if (!otpParsed.success) {
      setOtpError(otpParsed.error.issues[0].message);
      return;
    }
    if (otpInput.trim() !== "1234") {
      setOtpError("OTP salah. Coba lagi.");
      return;
    }
    setShowOtpModal(false);
    setShowResetPasswordModal(true);
    setTimeout(() => {
      const el = document.getElementById("new_password");
      (el as HTMLInputElement | null)?.focus();
    }, 20);
  };

  const submitResetPassword = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setMessage(null);
    const phoneParsed = parseAndNormalizePhone(forgotPhone);
    if (!phoneParsed.ok || !phoneParsed.normalized) {
      setMessage({
        type: "error",
        text: phoneParsed.error ?? "Nomor tidak valid.",
      });
      return;
    }

    const resetParsed = resetPasswordSchema.safeParse({
      phone: phoneParsed.normalized,
      newPassword,
      confirmPassword,
    });
    if (!resetParsed.success) {
      setMessage({ type: "error", text: resetParsed.error.issues[0].message });
      return;
    }

    setIsSubmittingReset(true);
    try {
      // call app route that will hash & update registrations.json
      const res = await fetch("/api/akun/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneParsed.normalized, newPassword }),
      });
      const json = (await res.json().catch(() => null)) as ApiResponse | null;
      if (!res.ok || !json) {
        setMessage({
          type: "error",
          text: json?.message ?? "Gagal reset password.",
        });
        return;
      }
      if (json.ok) {
        setMessage({
          type: "success",
          text: json.message ?? "Password berhasil diubah. Silakan login.",
        });
        setShowResetPasswordModal(false);
        setShowForgotModal(false);
        setNewPassword("");
        setConfirmPassword("");
        setOtpInput("");
      } else {
        setMessage({
          type: "error",
          text: json.message ?? "Reset password gagal.",
        });
      }
    } catch (err) {
      console.error("submitResetPassword error:", err);
      setMessage({ type: "error", text: "Terjadi kesalahan. Coba lagi." });
    } finally {
      setIsSubmittingReset(false);
    }
  };

  // JSX — desain sesuai halaman registrasi Anda
  return (
    <main>
      <div className="flex flex-col lg:flex-row lg:h-auto font-[montserrat]">
        <div className="flex flex-3 order-2 lg:order-1">
          <div className="flex-1 p-8 my-2 mx-10 border border-[#0000004d] rounded-xl overflow-hidden">
            <h1 className="text-2xl font-[montserrat] font-bold text-center">
              Masuk
            </h1>
            <p className="mb-6 text-[#00000064] font-regular text-center font-[lato] text-xl">
              Belum punya akun? Silahkan daftar{" "}
              <Link href="/akun/registrasi" className="text-[#5328EE]">
                disini
              </Link>
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              className="space-y-4 font-medium text-base"
            >
              <div>
                <label htmlFor="telepon_login" className="sr-only">
                  Nomor Telepon
                </label>
                <div className="flex items-center border border-[#0000004d] rounded-md overflow-hidden">
                  <input
                    id="telepon_login"
                    type="tel"
                    name="telepon"
                    placeholder="Nomor Telepon"
                    value={telepon}
                    onChange={(e) => setTelepon(e.target.value)}
                    ref={teleponRef}
                    className="flex-1 px-4 py-3 bg-transparent outline-none text-sm"
                    aria-label="Nomor telepon"
                  />
                </div>

                <div className="mt-3 relative">
                  <label htmlFor="password_login" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password_login"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passwordRef}
                    className="w-full px-4 py-3 border rounded outline-none text-sm"
                    aria-label="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3 top-3 text-gray-500"
                    aria-label={
                      showPassword
                        ? "Sembunyikan password"
                        : "Tampilkan password"
                    }
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>

                <div className="flex justify-between mt-2 text-sm">
                  <button
                    type="button"
                    onClick={openForgotModal}
                    className="text-xs text-[#5328EE] underline"
                  >
                    Lupa password?
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={handleLogin}
                  disabled={isChecking}
                  className={`w-full flex justify-center items-center py-3 rounded ${
                    isChecking
                      ? "bg-gray-300 text-gray-700"
                      : "bg-[#5328EE] text-white"
                  }`}
                >
                  {isChecking ? "Memeriksa..." : "Masuk"}
                </button>
              </div>

              {message && (
                <p
                  className={`-mt-2 text-sm ${
                    message.type === "error" ? "text-red-600" : "text-green-600"
                  }`}
                  role="status"
                >
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="gambar flex-2 order-1 lg:order-2 relative">
          <Image
            src={"/img/registrasi/heroRegistrasi.png"}
            width={1000}
            height={1000}
            alt="img-login"
            className="object-contain rounded-xs shadow-md"
          />
        </div>
      </div>

      {/* Modals */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-3">Reset Password</h3>
            <p className="text-sm text-slate-600 mb-4">
              Masukkan nomor telepon yang terdaftar. Kami akan mengirim kode OTP
              untuk mereset password.
            </p>
            <div className="space-y-3">
              <input
                ref={forgotPhoneRef}
                type="tel"
                inputMode="numeric"
                placeholder="Nomor Telepon"
                value={forgotPhone}
                onChange={(e) => setForgotPhone(e.target.value)}
                className="w-full px-4 py-3 border rounded outline-none text-sm"
                aria-label="Nomor telepon untuk reset"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowForgotModal(false)}
                  className="px-4 py-2 rounded border"
                >
                  Batal
                </button>
                <button
                  onClick={sendForgotOtp}
                  className="px-4 py-2 rounded bg-[#5328EE] text-white"
                >
                  Kirim OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showOtpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-3">Masukkan Kode OTP</h3>
            <p className="text-sm text-slate-600 mb-4">
              Untuk demo: gunakan kode <strong>1234</strong>.
            </p>
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder=""
                value={otpInput}
                onChange={(e) =>
                  setOtpInput(e.target.value.replace(/[^0-9]/g, ""))
                }
                className="w-full px-4 py-3 border rounded outline-none text-center tracking-widest text-lg"
                aria-label="Kode OTP"
              />
              {otpError && (
                <div className="text-sm text-red-600">{otpError}</div>
              )}
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  {resendTimer > 0 ? (
                    <span className="text-slate-600">
                      Kirim ulang dalam {resendTimer}s
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="text-sm underline"
                    >
                      Kirim ulang kode
                    </button>
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
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-[#5328EE] text-white"
                  >
                    Verifikasi
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {showResetPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-3">Buat Password Baru</h3>
            <form onSubmit={submitResetPassword} className="space-y-4">
              <div className="relative">
                <input
                  id="new_password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password baru"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded outline-none text-sm"
                  aria-label="Password baru"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-3 text-gray-500"
                  aria-label={
                    showPassword ? "Sembunyikan password" : "Tampilkan password"
                  }
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Konfirmasi password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded outline-none text-sm"
                  aria-label="Konfirmasi password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((p) => !p)}
                  className="absolute right-3 top-3 text-gray-500"
                  aria-label={
                    showConfirmPassword
                      ? "Sembunyikan konfirmasi"
                      : "Tampilkan konfirmasi"
                  }
                >
                  {showConfirmPassword ? (
                    <Eye size={18} />
                  ) : (
                    <EyeOff size={18} />
                  )}
                </button>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowResetPasswordModal(false);
                  }}
                  className="px-4 py-2 rounded border"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingReset}
                  className="px-4 py-2 rounded bg-[var(--colorRed)] text-white"
                >
                  {isSubmittingReset ? "Menyimpan..." : "Simpan password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

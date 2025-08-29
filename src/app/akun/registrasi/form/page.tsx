// src/app/registrasi/form/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FormRegis, { type Payload } from "@/components/akun/FormRegistrasi";
import Image from "next/image";


type SubmitResult = { ok: boolean; error?: string | null };

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phoneFromQuery = searchParams?.get("phone") ?? "";

  const [globalMessage, setGlobalMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleCancel = () => {
    // kembali ke halaman sebelumnya, atau ke root jika tidak ada history
    try {
      router.back();
    } catch {
      router.push("/");
    }
  };

  // update type SubmitResult dan handleSubmit signature
const handleSubmit = async (payload: Payload): Promise<SubmitResult> => {
  try {
    const res = await fetch("/api/registrations", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json().catch(() => ({}));

    if (!res.ok) {
      const err = (json && (json.error || json.message)) || "Gagal menyimpan data.";
      setGlobalMessage({ type: "error", text: err });
      return { ok: false, error: err };
    }

    setGlobalMessage({ type: "success", text: `Nomor ${payload.phone} berhasil didaftarkan.` });

    setTimeout(() => {
      router.push("/"); // atau /login
    }, 1500);

    return { ok: true };
  } catch (err) {
    const msg = "Gagal menyimpan data. Periksa koneksi.";
    setGlobalMessage({ type: "error", text: msg });
    return { ok: false, error: msg };
  }
};


  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-4 ">
      <div className="w-full max-w-3xl">
        <Image src="/img/logo_etm.png" alt="logo_etm" width={50} height={50} className="mx-auto mb-4"/>

        {globalMessage && (
          <div
            className={`mb-4 p-3 rounded text-sm ${
              globalMessage.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
            }`}
            role="status"
          >
            {globalMessage.text}
          </div>
        )}

        <div className="">
          <FormRegis
            initialPhone={phoneFromQuery}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        </div>
        <footer className="text-center mt-16 lg:mt-5 font-bold text-[8px] md:text-xs text-[var(--colorBlack)]">
        © EKATUNGGAL GROUP. All Rights Reserved Ekatunggal Group
      </footer>
      </div>
    </main>
  );
}

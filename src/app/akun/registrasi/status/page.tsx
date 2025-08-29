// src/app/registrasi/status/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import HeaderComponent from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";
import Image from "next/image";

type RegData = {
  id: number;
  fullName: string;
  phone: string;
  status: "pending" | "approved" | "rejected";
  adminMessage?: string | null;
  createdAt: string;
};

export default function StatusPage() {
  const search = useSearchParams();
  const phone = search?.get("phone") ?? "";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<RegData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!phone) {
      setLoading(false);
      setError("Nomor tidak tersedia");
      return;
    }
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/registrations?number=${encodeURIComponent(phone)}`
        );
        const json = await res.json();
        if (!res.ok) {
          setError(json.error || "Gagal mengambil status");
        } else if (!json.exists) {
          setError("Data pendaftaran tidak ditemukan");
        } else {
          if (mounted) setData(json.data);
        }
      } catch (e) {
        setError("Terjadi kesalahan jaringan");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [phone]);

  if (loading) return <div className="p-8">Memuat...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;
  if (!data) return null;

  if (data.status === "pending") {
    return (
      <>
        <HeaderComponent />
        <main className="flex max-h-9/12 items-center justify-center p-8">
          <div className="max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-4 font-[montserrat]">
              Pendaftaran Anda sedang diproses oleh admin.
            </h2>
            {/* <p className="mb-6">
              Kami akan menghubungi Anda melalui <strong>{data.phone}</strong>{" "}
              bila sudah diproses.
            </p> */}
            <Image
              src="/img/registrasi/statusPending.png"
              alt="Status Pending"
              width={1000}
              height={1000}
              className="inline-block"
            />
            {/* gambar atau ilustrasi */}
            <button
              onClick={() => router.push("/akun")}
              className="mt-6 px-4 py-2 border rounded"
            >
              Kembali ke Beranda
            </button>
          </div>
        </main>
        <FooterComponent />
      </>
    );
  }

  if (data.status === "rejected") {
    return (
      <>
        <HeaderComponent />
        <main className="max-h-9/12 p-8">
          <h2 className="text-2xl font-bold mb-4 block text-center font-[montserrat]">
            Maaf, pendaftaran Anda tidak dapat kami proses.
          </h2>
          <div className="flex items-center justify-center space-x-10">
            {data.adminMessage && (
              <p className="mb-4 text-sm text-slate-600">{data.adminMessage}</p>
            )}
            <Image
              src="/img/registrasi/statusRejected.png"
              alt="Status Rejected"
              width={1000}
              height={1000}
              className="w-75 h-auto"
            />
            <div className="flex flex-col text-white gap-5  font-semibold font-[montserrat]">
              <button className="py-2 px-4 bg-[var(--colorRed)] rounded-xl">
                <Image
                  src="/icons/registrasi/iconDraft.png"
                  alt="alt"
                  width={30}
                  height={30}
                  className="mr-2 inline-block"
                />{" "}
                Daftar Ulang
              </button>
              <button className="py-2 px-4 bg-[var(--colorRed)] rounded-xl">
                <Image
                  src="/icons/registrasi/iconCall.png"
                  alt="alt"
                  width={30}
                  height={30}
                  className="mr-2 inline-block"
                />{" "}
                Hubungi Admin
              </button>
            </div>
          </div>
        </main>
        <FooterComponent />
      </>
    );
  }

  // approved
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h2 className="text-xl font-bold mb-4">Akun Anda telah disetujui.</h2>
        <p className="mb-6">
          Silakan masuk menggunakan nomor <strong>{data.phone}</strong>.
        </p>
        <button
          onClick={() => router.push("/login")}
          className="px-4 py-2 bg-[#5328EE] text-white rounded"
        >
          Masuk
        </button>
      </div>
    </main>
  );
}

// src/app/dashboard/page.tsx
import React from "react";
import HeaderComponent from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";

export default function DashboardPage() {
  return (
    <>
      <HeaderComponent />
      <main className="min-h-screen p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p>Ini halaman dashboard sederhana. Tambahkan widget, card, dan data user di sini.</p>
          {/* contoh kartu */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 border rounded">KPI 1</div>
            <div className="p-4 border rounded">KPI 2</div>
            <div className="p-4 border rounded">KPI 3</div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
}

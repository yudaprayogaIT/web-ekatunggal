// // app/api/contact/route.ts
// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     // 1. Baca body JSON
//     const { nama, email, telepon, pesan } = await request.json();
//     if (!nama || !email || !pesan) {
//       return NextResponse.json(
//         { message: "Nama, email, dan pesan wajib diisi." },
//         { status: 400 }
//       );
//     }

//     // 2. Buat transporter Nodemailer
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: Number(process.env.EMAIL_PORT),
//       secure: process.env.EMAIL_SECURE === "true",
//       auth: {
//         user: process.env.EMAIL_USER!,
//         pass: process.env.EMAIL_PASS!,
//       },
//       // Jika Anda mendapat error “self signed certificate”, bisa tambahkan ini:
//       // tls: { rejectUnauthorized: false },
//     });

//     // 3. Cek koneksi ke server SMTP
//     try {
//       await transporter.verify();
//       console.log("✅ SMTP Ready: berhasil konek ke", process.env.EMAIL_HOST);
//     } catch (verErr: any) {
//       console.error("❌ Verifikasi SMTP gagal:", verErr);
//       return NextResponse.json(
//         { message: "Gagal koneksi ke server email.", error: verErr.message },
//         { status: 500 }
//       );
//     }

//     // 4. Siapkan konten email
//     const mailOptions = {
//       from: `"Form Kontak" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO,
//       subject: `Pesan Baru dari ${nama}`,
//       html: `
//         <h2>Anda menerima pesan baru dari Form Kontak</h2>
//         <p><strong>Nama:</strong> ${nama}</p>
//         <p><strong>Email Pengunjung:</strong> ${email}</p>
//         <p><strong>Telepon:</strong> ${telepon || "-"}</p>
//         <p><strong>Pesan:</strong><br/>${pesan.replace(/\n/g, "<br/>")}</p>
//       `,
//     };

//     // 5. Kirim email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("📨 Email terkirim, MessageId:", info.messageId);

//     return NextResponse.json(
//       { message: "Pesan berhasil terkirim.", info: info.messageId },
//       { status: 200 }
//     );
//   } catch (err: any) {
//     console.error("Kesalahan di API Route:", err);
//     return NextResponse.json(
//       { message: "Gagal mengirim email.", error: err.message },
//       { status: 500 }
//     );
//   }
// }

// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Pola regex untuk validasi
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{7,15}$/; // hanya digit 7–15 angka
const minPesanLength = 10;
const minNamaLength = 3;

// Rate limiting sederhana per IP (1 request per 30 detik)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW = 30 * 1000; // 30 detik

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = rateLimitMap.get(ip) || 0;
  if (now - last < RATE_LIMIT_WINDOW) {
    return true;
  }
  rateLimitMap.set(ip, now);
  return false;
}

export async function POST(request: Request) {
  // 1) Ambil IP dari header "x-forwarded-for" (jika berada di balik proxy)
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = typeof forwardedFor === "string" && forwardedFor.length > 0
    ? forwardedFor.split(",")[0].trim()
    : "unknown";

  // 2) Rate limiting
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Terlalu banyak permintaan. Silakan coba lagi nanti." },
      { status: 429 }
    );
  }

  // 3) Parse body JSON ke dalam variabel bertipe `any`.
  //    Dengan begitu, kita bisa melakukan pengecekan `typeof` tanpa
  //    TypeScript mengeluh bahwa tipenya `unknown`.
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Format request tidak valid (harus JSON)." },
      { status: 400 }
    );
  }

  // 4) Extract field. Karena `body` adalah `any`, nama/email/pesan di sini
  //    di‐anggap `any` dan kita wajib cek tipe-nya secara manual.
  const nama = body.nama;
  const email = body.email;
  const telepon = body.telepon;
  const pesan = body.pesan;
  const website = body.website; // honeypot

  // 5) Honeypot: jika ada isi, artinya bot/spam. Kita tolak saja.
  if (typeof website === "string" && website.trim().length > 0) {
    return NextResponse.json(
      { message: "Spam terdeteksi." },
      { status: 400 }
    );
  }

  // 6) Validasi server‐side
  const serverErrors: string[] = [];

  // 6a) Validasi nama: mesti string dan minimal 3 karakter setelah trim()
  if (typeof nama !== "string" || nama.trim().length < minNamaLength) {
    serverErrors.push("Nama minimal 3 karakter.");
  }

  // 6b) Validasi email: mesti string dan cocok emailRegex
  if (typeof email !== "string" || !emailRegex.test(email.trim())) {
    serverErrors.push("Email tidak valid.");
  }

  // 6c) Validasi telepon (opsional; jika terisi, harus digit 7–15)
  if (typeof telepon === "string" && telepon.trim().length > 0) {
    if (!phoneRegex.test(telepon.trim())) {
      serverErrors.push("Nomor telepon hanya boleh angka (7–15 digit).");
    }
  }

  // 6d) Validasi pesan: mesti string dan minimal 10 karakter setelah trim()
  if (typeof pesan !== "string" || pesan.trim().length < minPesanLength) {
    serverErrors.push("Pesan minimal 10 karakter.");
  }

  // 6e) Jika ada error validasi, kembalikan 400 Bad Request
  if (serverErrors.length > 0) {
    return NextResponse.json(
      { message: "Validasi gagal.", errors: serverErrors },
      { status: 400 }
    );
  }

  // 7) Siapkan dan kirim email dengan Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
      // Jika muncul error sertifikat self‐signed, Anda bisa menambahkan:
      // tls: { rejectUnauthorized: false }
    });

    // 7a) Verifikasi koneksi SMTP sebelum kirim (opsional tapi direkomendasikan)
    try {
      await transporter.verify();
      console.log("✅ SMTP Ready: terhubung ke", process.env.EMAIL_HOST);
    } catch (verifyErr: any) {
      console.error("❌ Verifikasi SMTP gagal:", verifyErr);
      return NextResponse.json(
        { message: "Gagal koneksi ke server email.", error: verifyErr.message },
        { status: 500 }
      );
    }

    // 7b) Siapkan konten email
    const mailOptions = {
      from: `"Form Kontak" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // Alamat tujuan
      subject: `Pesan Baru dari ${nama.trim()}`,
      html: `
        <h2>Ada pesan baru dari Form Kontak Ekatunggal:</h2>
        <p><strong>Nama:</strong> ${nama.trim()}</p>
        <p><strong>Email Pengunjung:</strong> ${email.trim()}</p>
        <p><strong>Telepon:</strong> ${
          typeof telepon === "string" && telepon.trim().length > 0
            ? telepon.trim()
            : "-"
        }</p>
        <p><strong>Pesan:</strong><br/>${pesan
          .trim()
          .replace(/\n/g, "<br/>")}</p>
      `,
    };

    // 7c) Kirim email
    const info = await transporter.sendMail(mailOptions);
    console.log("📨 Email terkirim, MessageId:", info.messageId);

    return NextResponse.json(
      { message: "Pesan berhasil terkirim.", info: info.messageId },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("❌ Kesalahan di API Route:", err);
    return NextResponse.json(
      { message: "Gagal mengirim email.", error: err.message },
      { status: 500 }
    );
  }
}

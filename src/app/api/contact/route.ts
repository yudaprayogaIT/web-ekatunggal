// // app/api/contact/route.ts
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// // Pola regex untuk validasi
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRegex = /^[0-9]{7,15}$/; // hanya digit 7–15 angka
// const minPesanLength = 10;
// const minNamaLength = 3;

// // Rate limiting sederhana per IP (1 request per 30 detik)
// const rateLimitMap = new Map<string, number>();
// const RATE_LIMIT_WINDOW = 30 * 1000; // 30 detik

// function isRateLimited(ip: string): boolean {
//   const now = Date.now();
//   const last = rateLimitMap.get(ip) || 0;
//   if (now - last < RATE_LIMIT_WINDOW) {
//     return true;
//   }
//   rateLimitMap.set(ip, now);
//   return false;
// }

// export async function POST(request: Request) {
//   // 1) Ambil IP dari header "x-forwarded-for" (jika di‐depan ada proxy)
//   const forwardedFor = request.headers.get("x-forwarded-for");
//   const ip =
//     typeof forwardedFor === "string" && forwardedFor.length > 0
//       ? forwardedFor.split(",")[0].trim()
//       : "unknown";

//   // 2) Rate limiting
//   if (isRateLimited(ip)) {
//     return NextResponse.json(
//       { message: "Terlalu banyak permintaan. Silakan coba lagi nanti." },
//       { status: 429 }
//     );
//   }

//   // 3) Parse body JSON → gunakan `unknown` dulu
//   let body: unknown;
//   try {
//     body = await request.json();
//   } catch {
//     return NextResponse.json(
//       { message: "Format request tidak valid (harus JSON)." },
//       { status: 400 }
//     );
//   }

//   // 4) Pastikan `body` itu object, bukan null atau tipe lain
//   if (typeof body !== "object" || body === null) {
//     return NextResponse.json(
//       { message: "Data request harus berupa objek." },
//       { status: 400 }
//     );
//   }

//   // 5) Ekstrak properti dari body—karena body adalah object, kita asumsikan setiap field mungkin `unknown`
//   const { nama, email, telepon, pesan, website } = body as {
//     nama?: unknown;
//     email?: unknown;
//     telepon?: unknown;
//     pesan?: unknown;
//     website?: unknown;
//   };

//   // 6) Honeypot: jika `website` (field tersembunyi) terisi, tolak sebagai spam
//   if (typeof website === "string" && website.trim().length > 0) {
//     return NextResponse.json({ message: "Spam terdeteksi." }, { status: 400 });
//   }

//   // 7) Validasi server‐side
//   const serverErrors: string[] = [];

//   // 7a) Validasi `nama`: mesti string dan minimal 3 karakter (setelah trim)
//   if (typeof nama !== "string" || nama.trim().length < minNamaLength) {
//     serverErrors.push("Nama minimal 3 karakter.");
//   }

//   // 7b) Validasi `email`: mesti string dan cocok pola regex
//   if (typeof email !== "string" || !emailRegex.test(email.trim())) {
//     serverErrors.push("Email tidak valid.");
//   }

//   // 7c) Validasi `telepon` (opsional; jika terisi, harus string digit 7–15)
//   if (typeof telepon === "string" && telepon.trim().length > 0) {
//     if (!phoneRegex.test(telepon.trim())) {
//       serverErrors.push("Nomor telepon hanya boleh angka (7–15 digit).");
//     }
//   }

//   // 7d) Validasi `pesan`: mesti string dan minimal 10 karakter (setelah trim)
//   if (typeof pesan !== "string" || pesan.trim().length < minPesanLength) {
//     serverErrors.push("Pesan minimal 10 karakter.");
//   }

//   // 7e) Jika ada error validasi, kembalikan 400 Bad Request
//   if (serverErrors.length > 0) {
//     return NextResponse.json(
//       { message: "Validasi gagal.", errors: serverErrors },
//       { status: 400 }
//     );
//   }

//   // 8) Setelah validasi, kita tahu bahwa nama, email, pesan adalah string
//   //    (dan telepon bisa diperlakukan sebagai string jika terisi).
//   //    Maka kita bisa “narrow” dengan cara casting ke string.
//   const namaStr = (nama as string).trim();
//   const emailStr = (email as string).trim();
//   const teleponStr =
//     typeof telepon === "string" && telepon.trim().length > 0
//       ? telepon.trim()
//       : "-";
//   const pesanStr = (pesan as string).trim();

//   // 9) Siapkan dan kirim email dengan Nodemailer
//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: Number(process.env.EMAIL_PORT),
//       secure: process.env.EMAIL_SECURE === "true",
//       auth: {
//         user: process.env.EMAIL_USER!,
//         pass: process.env.EMAIL_PASS!,
//       },
//       // Jika server SMTP menggunakan sertifikat self‐signed, Anda bisa menambahkan:
//       // tls: { rejectUnauthorized: false }
//     });

//     // 9a) Verifikasi koneksi SMTP sebelum kirim (opsional, tetapi sangat disarankan)
//     try {
//       await transporter.verify();
//       console.log("✅ SMTP Ready: terhubung ke", process.env.EMAIL_HOST);
//     } catch (verifyErr: unknown) {
//       // Narrow tipe err menjadi Error agar bisa membaca message
//       const message =
//         verifyErr instanceof Error ? verifyErr.message : "Unknown SMTP error";
//       console.error("❌ Verifikasi SMTP gagal:", message);
//       return NextResponse.json(
//         { message: "Gagal koneksi ke server email.", error: message },
//         { status: 500 }
//       );
//     }

//     // 9b) Siapkan konten email
//     const mailOptions = {
//       from: `"Form Kontak" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO, // Alamat tujuan
//       subject: `Pesan Baru dari ${namaStr}`,
//       html: `
//         <h2>Ada pesan baru dari Form Kontak:</h2>
//         <p><strong>Nama:</strong> ${namaStr}</p>
//         <p><strong>Email Pengunjung:</strong> ${emailStr}</p>
//         <p><strong>Telepon:</strong> ${teleponStr}</p>
//         <p><strong>Pesan:</strong><br/>${pesanStr.replace(
//           /\n/g,
//           "<br/>"
//         )}</p>
//       `,
//     };

//     // 9c) Kirim email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("📨 Email terkirim, MessageId:", info.messageId);

//     return NextResponse.json(
//       { message: "Pesan berhasil terkirim.", info: info.messageId },
//       { status: 200 }
//     );
//   } catch (err: unknown) {
//     // Narrow tipe err menjadi Error agar bisa membaca message
//     const message = err instanceof Error ? err.message : "Unknown error";
//     console.error("❌ Kesalahan di API Route:", message);
//     return NextResponse.json(
//       { message: "Gagal mengirim email.", error: message },
//       { status: 500 }
//     );
//   }
// }

// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Pola regex untuk validasi
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{7,15}$/;
const minPesanLength = 10;
const minNamaLength = 3;

// Rate limiting sederhana per IP (1 request per 30 detik)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW = 30 * 1000;

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
  // 1) Ambil IP
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    typeof forwardedFor === "string" && forwardedFor.length > 0
      ? forwardedFor.split(",")[0].trim()
      : "unknown";

  // 2) Rate limiting
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Terlalu banyak permintaan. Silakan coba lagi nanti." },
      { status: 429 }
    );
  }

  // 3) Parse body JSON
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Format request tidak valid (harus JSON)." },
      { status: 400 }
    );
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json(
      { message: "Data request harus berupa objek." },
      { status: 400 }
    );
  }

  // 4) Ekstrak properti
  const { nama, email, telepon, pesan, website } = body as {
    nama?: unknown;
    email?: unknown;
    telepon?: unknown;
    pesan?: unknown;
    website?: unknown;
  };

  // 5) Honeypot
  if (typeof website === "string" && website.trim().length > 0) {
    return NextResponse.json({ message: "Spam terdeteksi." }, { status: 400 });
  }

  // 6) Validasi server-side
  const serverErrors: string[] = [];
  if (typeof nama !== "string" || nama.trim().length < minNamaLength) {
    serverErrors.push("Nama minimal 3 karakter.");
  }
  if (typeof email !== "string" || !emailRegex.test(email.trim())) {
    serverErrors.push("Email tidak valid.");
  }
  if (typeof telepon === "string" && telepon.trim().length > 0) {
    if (!phoneRegex.test(telepon.trim())) {
      serverErrors.push("Nomor telepon hanya boleh angka (7–15 digit).");
    }
  }
  if (typeof pesan !== "string" || pesan.trim().length < minPesanLength) {
    serverErrors.push("Pesan minimal 10 karakter.");
  }
  if (serverErrors.length > 0) {
    return NextResponse.json(
      { message: "Validasi gagal.", errors: serverErrors },
      { status: 400 }
    );
  }

  // 7) Narrow dan trim
  const namaStr = (nama as string).trim();
  const emailStr = (email as string).trim();
  const teleponStr =
    typeof telepon === "string" && telepon.trim().length > 0
      ? telepon.trim()
      : "-";
  const pesanStr = (pesan as string).trim();

  // 8) Kirim email via Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    // 8a) Verifikasi koneksi SMTP
    try {
      await transporter.verify();
      console.log("✅ SMTP Ready:", process.env.EMAIL_HOST);
    } catch (verifyErr: unknown) {
      const msg = verifyErr instanceof Error ? verifyErr.message : "SMTP error";
      console.error("❌ Verifikasi SMTP gagal:", msg);
      return NextResponse.json(
        { message: "Gagal koneksi ke server email.", error: msg },
        { status: 500 }
      );
    }

    // 8b) Siapkan mailOptions dengan replyTo = emailStr
    const mailOptions = {
      from: `"WEB Ekatunggal" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // email admin
      replyTo: emailStr,        // ketika admin klik “reply”, diarahkan ke email pengunjung
      subject: `Pesan Baru dari ${namaStr}`,
      html: `
        <h2>Pesan Baru dari Form Kontak Ekatunggal</h2>
        <p><strong>Nama:</strong> ${namaStr}</p>
        <p><strong>Email Pengunjung:</strong> ${emailStr}</p>
        <p><strong>Telepon:</strong> ${teleponStr}</p>
        <p><strong>Pesan:</strong><br/>${pesanStr.replace(
          /\n/g,
          "<br/>"
        )}</p>
      `,
    };

    // 8c) Kirim email
    const info = await transporter.sendMail(mailOptions);
    console.log("📨 Email terkirim, MessageId:", info.messageId);
    return NextResponse.json(
      { message: "Pesan berhasil terkirim.", info: info.messageId },
      { status: 200 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("❌ Kesalahan di API Route:", msg);
    return NextResponse.json(
      { message: "Gagal mengirim email.", error: msg },
      { status: 500 }
    );
  }
}

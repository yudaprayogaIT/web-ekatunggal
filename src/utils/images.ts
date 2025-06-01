export function buildImageUrl(rawPath: string): string {
  // 1) Pastikan rawPath bukan undefined/null
  if (!rawPath) {
    return ''; // atau kembalikan placeholder statis kalau perlu
  }

  // 2) Jika rawPath sudah diawali "/public/files" atau "/files", gunakan langsung
  if (rawPath.startsWith('/public/files') || rawPath.startsWith('/files')) {
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}${rawPath}`;
  }

  // 3) Jika rawPath diawali '/', tapi bukan '/public/files' atau '/files',
  //    kita asumsikan melompat format—tetap gabungkan saja:
  if (rawPath.startsWith('/')) {
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}${rawPath}`;
  }

  // 4) Jika rawPath tidak diawali '/', kemungkinan itu hanya nama file (“filename.jpg”).
  //    Kita tambahkan prefix "/public/files/" supaya URL valid di server Frappe Anda.
  const assumedPath = `/public/files/${rawPath}`;
  return `${process.env.NEXT_PUBLIC_API_BASE_URL}${assumedPath}`;
}

// export function buildImageUrl(rawPath: string | undefined | null): string {
//   // Jika rawPath tidak diberikan, kembalikan placeholder
//   if (!rawPath || rawPath.trim() === "") {
//     // Anda bisa mengganti placeholder ini sesuai kebutuhan
//     return "/img/produk/placeholder.png";
//   }

//   const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
//   // Jika sudah terdapat awalan "/public/files" atau "/files", langsung concat
//   if (rawPath.startsWith("/public/files") || rawPath.startsWith("/files")) {
//     return `${base}${rawPath}`;
//   }

//   // Jika awalan "/" tapi bukan /public/files atau /files
//   if (rawPath.startsWith("/")) {
//     return `${base}${rawPath}`;
//   }

//   // Jika hanya nama file (misal "foto.jpg"), tambahkan "/public/files/"
//   const assumed = `/public/files/${rawPath}`;
//   return `${base}${assumed}`;
// }

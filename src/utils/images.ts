export function buildImageUrl(rawPath: string): string {
  // 1) Jika rawPath kosong (undefined/null/""), kembalikan string kosong
  if (!rawPath) {
    return "";
  }

  // 2) Jika rawPath sudah berupa URL absolut (http:// atau https://), kembalikan langsung
  if (/^https?:\/\//i.test(rawPath)) {
    return rawPath;
  }

  // 3) Jika rawPath sudah diawali "/public/files" atau "/files", cukup tambahkan BASE_URL
  if (rawPath.startsWith("/public/files") || rawPath.startsWith("/files")) {
    // return `${process.env.NEXT_PUBLIC_API_BASE_URL}${rawPath}`;
    return `${"https://api-ekatalog.ekatunggal.com"}${rawPath}`;
  }

  // 4) Jika rawPath diawali '/', tapi bukan '/public/files' atau '/files',
  //    kita asumsikan ingin load path lain (misal "/assets/img.png")
  if (rawPath.startsWith("/")) {
    // return `${process.env.NEXT_PUBLIC_API_BASE_URL}${rawPath}`;
    return `${"https://api-ekatalog.ekatunggal.com"}${rawPath}`;
  }

  // 5) Jika rawPath bukan diawali '/', kita anggap ini hanya nama file (misal "namafile.jpg").
  //    Karena lampiran Frappe tersedia di "/public/files/", kita prefix "/public/files/".
  const assumedPath = `/public/files/${rawPath}`;
  // return `${process.env.NEXT_PUBLIC_API_BASE_URL}${assumedPath}`;
  return `${"https://api-ekatalog.ekatunggal.com"}${assumedPath}`;
}

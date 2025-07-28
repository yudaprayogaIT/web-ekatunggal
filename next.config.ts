// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  // aktifkan output static export
  // ini akan membuat Next.js menghasilkan file statis untuk setiap halaman
  output: 'export',

  images: {
    unoptimized: true,
    domains: ["api-ekatalog.ekatunggal.com"],
    // Jika perlu aturan lebih ketat:
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "api-ekatalog.ekatunggal.com",
    //     pathname: "/public/files/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;

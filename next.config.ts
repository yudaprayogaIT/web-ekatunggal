// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };
// 
// };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["api-ekatalog.ekatunggal.com"],
//   },
// };
// module.exports = nextConfig;

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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

// src/utils/contacts.ts

// Nomor WhatsApp
export const whatsappPhone = "628111115365";
// Alamat email Gmail
export const gmailAddress = "ekatunggalofficial@gmail.com";
// Username TikTok (tanpa @)
export const tiktokUsername = "ekatunggal_official";
// Username Instagram (tanpa @)
export const instagramUsername = "ekatunggaltunasmandiri";
export const instagramUsername1 = "ekatunggalofficial";

// Pesan default untuk semua platform
export const defaultMessage = "Halo Ekatunggal, saya ingin melihat penawaran anda";

// Helper untuk URL-encode
const encode = (str: string) => encodeURIComponent(str);

// HREF untuk WhatsApp (API yang berfungsi di mobile & desktop web)
export const whatsappHref = 
  `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encode(defaultMessage)}`;

// HREF untuk mailto Gmail (subject bisa disesuaikan; body pakai pesan default)
export const gmailHref = 
  `mailto:${gmailAddress}?subject=${encode("Permintaan Penawaran")}&body=${encode(defaultMessage)}`;

// HREF ke profil TikTok (akan membuka profil; pesan DM di TikTok butuh user manual)
export const tiktokHref = 
  `https://www.tiktok.com/@${tiktokUsername}`;

// HREF ke profil Instagram
export const instagramHref = 
  `https://www.instagram.com/${instagramUsername}`;
export const instagramHref1 = 
  `https://www.instagram.com/${instagramUsername1}`;

  // buka halaman “New Message” dengan username terisi
export const instagramDmWebHref = 
//   `https://www.instagram.com/direct/new/?username=${instagramUsername}`;
'https://www.instagram.com/direct/t/103627161036145/';
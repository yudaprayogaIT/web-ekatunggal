// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
// import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ekatunggal.com'),
  title: {
    default: 'Ekatunggal Group | Supplier Material Springbed, Sofa, Accessories & Produk Furniture',
    template: '%s | Ekatunggal Group',
  },
  description:
    'Ekatunggal Group – Penyedia terkemuka Material Springbed & Sofa dan Furniture dengan jaringan distribusi nasional.',
  keywords: [
    'Ekatunggal','springbed','sofa','material', 'bahan baku','distributor furniture',
    'Bogor','Citeureup','Jawa Barat','Indonesia','kain quilting','busa',
    'pegas','webbing','distributor','furnitur','accessories','supplier',
    'kawat'
  ],
  authors: [{ name: 'Ekatunggal Group', url: 'https://www.ekatunggal.com' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  openGraph: {
    title: 'Ekatunggal Group | Supplier Material Springbed, Sofa, Accessories & Produk Furniture',
    description:
      'Ekatunggal Group – Penyedia terkemuka Material Springbed & Sofa dan Furniture dengan jaringan distribusi nasional.',
    url: 'https://www.ekatunggal.com',
    siteName: 'Ekatunggal Tunas Mandiri',
    images: [
      {
        url: '/img/openGraph/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Ekatunggal Tunas Mandiri',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ekatunggal',
    creator: '@ekatunggal',
    title: 'Ekatunggal Group',
    description:
      'Ekatunggal Group – Penyedia terkemuka Material Springbed & Sofa dan Furniture dengan jaringan distribusi nasional.',
    images: ['/img/openGraph/og-home.png'],
  },
  alternates: {
    canonical: 'https://www.ekatunggal.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* Manifest untuk PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.ekatunggal.com" />

        {/* JSON‑LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.ekatunggal.com/#organization',
                  name: 'Ekatunggal Group',
                  url: 'https://www.ekatunggal.com',
                  logo: 'https://www.ekatunggal.com/images/logo.png',
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      telephone: '+62-8111115365',
                      contactType: 'customer service',
                      areaServed: 'ID',
                    },
                  ],
                  sameAs: [
                    'https://www.facebook.com/ekatunggal.mandiri',
                    'https://www.instagram.com/ekatunggaltunasmandiri',
                    'https://www.instagram.com/ekatunggalofficial',
                    'https://www.tiktok.com/@ekatunggal_official',
                    'https://wa.me/628111115365',
                  ],
                },
                {
                  '@type': 'WebSite',
                  url: 'https://www.ekatunggal.com',
                  name: 'Ekatunggal Group',
                  publisher: { '@id': 'https://www.ekatunggal.com/#organization' },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://www.ekatunggal.com/search?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

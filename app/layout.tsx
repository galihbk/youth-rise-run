import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Youth Rise Run Purbalingga 2026 - Official Website',
  description: 'Ikuti event lari terbesar di Purbalingga! Youth Rise Run 2026. Lari 5K & 10K. Registrasi dibuka 25 Maret 2026. Run For Always Young!',
  keywords: ['Youth Rise Run', 'Purbalingga 2026', 'Event Lari Purbalingga', 'Maraton Purbalingga', 'Politeknik Madyathika', 'Race 5K 10K'],
  authors: [{ name: 'MAHDA Purbalingga' }],
  openGraph: {
    title: 'Youth Rise Run Purbalingga 2026',
    description: 'Event lari paling dinamis di Purbalingga. Segera daftar!',
    url: 'https://youthriserun.com',
    siteName: 'Youth Rise Run',
    images: [
      {
        url: '/logo-2.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youth Rise Run Purbalingga 2026',
    description: 'Run For Always Young! Ikuti kemeriahannya di Purbalingga.',
    images: ['/logo-2.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

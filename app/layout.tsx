import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Youth Rise Run Purbalingga 2026',
  description: 'Running event in Purbalingga. Run For Always Young. 07 Juni 2026.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}

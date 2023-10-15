import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: `Kyaw Zaw Win's Portfolio`,
  description: 'For My Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen overflow-x-hidden">{children}</body>
    </html>
  )
}

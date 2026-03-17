import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'LuminArte | Professional Decorative Lighting',
  description: 'LuminArte specializes in creative lighting installations for weddings, Christmas decorations, and special events. Transform your space with our professional lighting solutions in Ascoli Piceno, Italy.',
  keywords: 'decorative lighting, wedding lighting, Christmas decorations, event lighting, Ascoli Piceno, Italy, illuminazioni, matrimoni, natale',
  authors: [{ name: 'LuminArte' }],
  openGraph: {
    title: 'LuminArte | Professional Decorative Lighting',
    description: 'Transform your events with stunning lighting installations. Weddings, Christmas, and special events.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'it_IT',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1612',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

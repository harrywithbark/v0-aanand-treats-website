import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fff8f0',
}

export const metadata: Metadata = {
  title: 'Aanand Treats by Sadhna | 100% Eggless Custom Cakes • Surrey, BC',
  description:
    'Aanand Treats by Sadhna is an exclusive 100% eggless boutique cake studio in Surrey, BC. Bespoke celebration cakes — handcrafted, perfectly balanced, and not too sweet.',
  generator: 'v0.app',
  metadataBase: new URL('https://aanandtreats.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aanand Treats by Sadhna | 100% Eggless Custom Cakes',
    description:
      'Bespoke celebration cakes — handcrafted, 100% eggless, and perfectly balanced. A private custom studio in Surrey, BC.',
    locale: 'en_CA',
    type: 'website',
    siteName: 'Aanand Treats by Sadhna',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aanand Treats by Sadhna | 100% Eggless Custom Cakes',
    description:
      'Bespoke celebration cakes — handcrafted, 100% eggless, and perfectly balanced. Surrey, BC.',
  },
}

const bakerySchema = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Aanand Treats by Sadhna',
  description: '100% Eggless Custom Cakes',
  servesCuisine: '100% Eggless Custom Cakes',
  priceRange: '$$$',
  telephone: '+1 (672) 200-6999',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Surrey, BC',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  areaServed: 'Metro Vancouver, BC',
  openingHours: 'Mo-Sa 10:00-18:00',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-cream focus:shadow-lg"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bakerySchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

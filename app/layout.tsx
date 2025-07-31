import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Sell Your Tampa Home Fast for Cash | Foxy Home Buyer',
  description: 'We buy houses for cash in Tampa and 8 Florida counties. No repairs, no fees, fair offers in 24 hours. Get your cash offer today!',
  keywords: 'sell house fast Tampa, cash home buyers Tampa, we buy houses Tampa, sell home cash Florida',
  authors: [{ name: 'Foxy Home Buyer' }],
  creator: 'Foxy Home Buyer',
  publisher: 'Foxy Home Buyer',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://foxyhomebuyer.com',
    title: 'Sell Your Tampa Home Fast for Cash | Foxy Home Buyer',
    description: 'We buy houses for cash in Tampa and 8 Florida counties. No repairs, no fees, fair offers in 24 hours.',
    siteName: 'Foxy Home Buyer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your Tampa Home Fast for Cash | Foxy Home Buyer',
    description: 'We buy houses for cash in Tampa and 8 Florida counties. No repairs, no fees, fair offers in 24 hours.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Foxy Home Buyer",
              "description": "We buy houses for cash in Tampa and 8 Florida counties",
              "url": "https://foxyhomebuyer.com",
              "telephone": "(813) 555-0123",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Tampa",
                "addressRegion": "FL",
                "postalCode": "33601",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.9506",
                "longitude": "-82.4572"
              },
              "areaServed": [
                "Hillsborough County",
                "Pinellas County",
                "Pasco County",
                "Polk County",
                "Manatee County",
                "Sarasota County",
                "Hernando County",
                "Citrus County"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Su 08:00-20:00"
            })
          }}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        montserrat.variable,
        poppins.variable
      )}>
        {children}
      </body>
    </html>
  );
}
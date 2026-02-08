import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { Toaster } from '../components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SiteBoard – Real-Time Plot Status Board for Real Estate Builders | Pre-Launch',
  description: 'SiteBoard gives real estate builders & developers a single board to track plot status — Available, Booked, Sold — in real time. No Excel, no confusion. Join pre-launch access now.',
  keywords: 'SiteBoard, real estate software, plot management, plot status tracker, real estate SaaS, builder software India, plotting project management, land parcel tracking, real estate developer tool, property management India, plot booking system, real estate CRM India',
  authors: [{ name: 'Aiclex Technologies' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://siteboard.in/',
  },
  openGraph: {
    type: 'website',
    url: 'https://siteboard.in/',
    title: 'SiteBoard – Your Project. One Board.',
    description: 'One simple board to see project-wise plot status — Available, Booked, Sold — in real time. Built for real estate builders & developers in India.',
    siteName: 'SiteBoard',
    locale: 'en_IN',
    images: [
      {
        url: 'https://customer-assets.emergentagent.com/job_real-estate-preview/artifacts/tjyon02e_ChatGPT%20Image%20Feb%208%2C%202026%2C%2002_18_41%20PM.png',
        width: 1200,
        height: 630,
        alt: 'SiteBoard - Your Project. One Board.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiteBoard – Real-Time Plot Status for Real Estate Builders',
    description: 'Stop guessing which plot is available. One simple board for project-wise plot status — Available, Booked, Sold — in real time.',
    images: ['https://customer-assets.emergentagent.com/job_real-estate-preview/artifacts/tjyon02e_ChatGPT%20Image%20Feb%208%2C%202026%2C%2002_18_41%20PM.png'],
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    language: 'English',
    'revisit-after': '3 days',
    rating: 'general',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZDY6WRYXEL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZDY6WRYXEL');
          `}
        </Script>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'SiteBoard',
              url: 'https://siteboard.in',
              description: 'Real-time plot status board for real estate builders and developers in India.',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'INR',
                availability: 'https://schema.org/PreOrder',
              },
              creator: {
                '@type': 'Organization',
                name: 'Aiclex Technologies',
                url: 'https://siteboard.in',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SiteBoard',
              url: 'https://siteboard.in',
              logo: 'https://customer-assets.emergentagent.com/job_real-estate-preview/artifacts/tjyon02e_ChatGPT%20Image%20Feb%208%2C%202026%2C%2002_18_41%20PM.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+919871881183',
                email: 'info@siteboard.in',
                contactType: 'sales',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi'],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

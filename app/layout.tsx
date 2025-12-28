import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://goflowstate.nl'),
  title: "Flowstate | AI Automatiseringen voor Jouw Bedrijf",
  description: "Schakel moeiteloos op met Flowstate: AI-gestuurde automatiseringen in Groningen voor schaalbare groei zonder extra personeel.",
  keywords: "AI automatisering, Groningen, bedrijfsautomatisering, SEO blog creator, offerte automations, klantenservice AI, Nederland, AI agency, workflow automatisering",
  authors: [{ name: "Flowstate" }],
  creator: "Flowstate",
  publisher: "Flowstate",
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
  alternates: {
    canonical: 'https://goflowstate.nl',
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://goflowstate.nl/",
    siteName: "Flowstate",
    title: "Flowstate | AI Automatiseringen voor Jouw Bedrijf",
    description: "Schakel moeiteloos op met Flowstate: AI-gestuurde automatiseringen in Groningen voor schaalbare groei zonder extra personeel.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flowstate - AI Automatiseringen',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowstate | AI Automatiseringen voor Jouw Bedrijf",
    description: "Schakel moeiteloos op met Flowstate: AI-gestuurde automatiseringen in Groningen voor schaalbare groei zonder extra personeel.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://goflowstate.nl/#organization',
      name: 'Flowstate',
      url: 'https://goflowstate.nl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://goflowstate.nl/logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@goflowstate.nl',
        contactType: 'customer service',
        areaServed: 'NL',
        availableLanguage: 'Dutch',
      },
      sameAs: [
        'https://linkedin.com/company/flowstate',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://goflowstate.nl/#localbusiness',
      name: 'Flowstate',
      description: 'AI-automatiseringen die jouw bedrijf laten groeien. Gevestigd in Groningen, werkend voor heel Nederland.',
      url: 'https://goflowstate.nl',
      email: 'info@goflowstate.nl',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Groningen',
        addressCountry: 'NL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.2194,
        longitude: 6.5665,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Netherlands',
      },
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://goflowstate.nl/#website',
      url: 'https://goflowstate.nl',
      name: 'Flowstate',
      publisher: {
        '@id': 'https://goflowstate.nl/#organization',
      },
      inLanguage: 'nl-NL',
    },
    {
      '@type': 'Service',
      '@id': 'https://goflowstate.nl/#seo-blog-service',
      name: 'SEO Blog Creator',
      description: 'AI-gestuurde content generatie met enorme tijdsbesparing. Van uren naar minuten met automatische keyword targeting.',
      provider: {
        '@id': 'https://goflowstate.nl/#organization',
      },
      areaServed: 'NL',
    },
    {
      '@type': 'Service',
      '@id': 'https://goflowstate.nl/#offerte-service',
      name: 'Offerte Automations',
      description: 'Directe offertes versturen binnen seconden, professioneel en foutloos in je eigen huisstijl.',
      provider: {
        '@id': 'https://goflowstate.nl/#organization',
      },
      areaServed: 'NL',
    },
    {
      '@type': 'Service',
      '@id': 'https://goflowstate.nl/#klantenservice-service',
      name: 'Klantenservice AI',
      description: '24/7 beschikbaarheid met directe antwoorden op vragen. Verhoogde klanttevredenheid.',
      provider: {
        '@id': 'https://goflowstate.nl/#organization',
      },
      areaServed: 'NL',
    },
    {
      '@type': 'Service',
      '@id': 'https://goflowstate.nl/#maatwerk-service',
      name: 'Maatwerk AI',
      description: 'Strategisch advies en maatwerk software voor bedrijfsprocessen.',
      provider: {
        '@id': 'https://goflowstate.nl/#organization',
      },
      areaServed: 'NL',
    },
  ],
};

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased relative`}
        style={{ backgroundColor: '#000', color: '#fff' }}
      >
        <div className="bg-noise" />
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

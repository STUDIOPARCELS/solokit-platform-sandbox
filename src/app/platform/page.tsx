import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'solokit | AI-friendly portfolio, gallery, event, and invitation platform',
  description: 'Create an indexable personal or brand site that search engines rank and AI systems can read. Publish portfolios, galleries, events, and invitations in real time with Solokit.',
  keywords: [
    'AI-friendly portfolio platform',
    'AI-readable portfolio website',
    'digital-physical portfolio platform',
    'QR-powered portfolio platform',
    'NFC business card portfolio',
    'autonomous residence',
    'AI-optimized personal website',
    'searchable creator site platform',
    'portfolio and gallery platform',
    'real-time invitation platform',
  ],
  openGraph: {
    title: 'solokit | AI-friendly portfolio, gallery, event, and invitation platform',
    description: 'Create an indexable personal or brand site that search engines rank and AI systems can read. Publish portfolios, galleries, events, and invitations in real time.',
    url: 'https://solokit.app',
    siteName: 'solokit',
    type: 'website',
    images: [{ url: 'https://solokit.app/og-image.png', width: 1200, height: 630, alt: 'solokit — AI-friendly portfolio platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'solokit | AI-friendly portfolio platform',
    description: 'Indexable personal and brand sites with AI readability, structured data, and physical solocards.',
  },
  alternates: { canonical: 'https://solokit.app' },
  robots: { index: true, follow: true },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'solokit',
    url: 'https://solokit.app',
    logo: 'https://solokit.app/solokit-logo-dark-256.png',
    description: 'AI-friendly portfolio, gallery, event, and invitation platform. Create indexable personal or brand sites with structured data, AI readability, and physical NFC + QR solocards.',
    founder: {
      '@type': 'Person',
      name: 'Lisa Wood',
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'Lisa Wood Studio' },
    },
    sameAs: [],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'solokit',
    url: 'https://solokit.app',
    description: 'AI-friendly portfolio, gallery, event, and invitation platform.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://solokit.app/showcase?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'solokit',
    url: 'https://solokit.app',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    description: 'Portfolio platform with AI readability, structured data, and NFC + QR solocards. Create a persistent digital presence for a person, brand, company, event, or property that search engines index and AI systems read.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free tier with portfolio, gallery, and event pages',
    },
    featureList: [
      'AI-readable portfolio pages with JSON-LD structured data',
      'WebMCP integration for agent-native access',
      'Physical NFC + QR solocards',
      'Custom subdomain at yourname.solokit.app',
      'Real-time event and invitation pages',
      'Gallery pages with artwork metadata',
    ],
  },
];

export default function PlatformHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage variant="platform" />
    </>
  );
}

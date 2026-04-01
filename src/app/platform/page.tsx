import type { Metadata } from 'next';
import { HomeC1 } from '@/components/HomeC1';

export const metadata: Metadata = {
  title: 'solokit — The key to your card',
  description: 'The first platform where AI can take action for you. Optimized so Google ranks you. Structured so AI recommends you. One scan — they book, buy, view, RSVP. Join the beta at solokit.app.',
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
    title: 'solokit — The key to your card',
    description: 'solokit — the first platform where AI can take action for you. Optimized so Google ranks you. Structured so AI recommends you. One scan — they book, buy, view, RSVP.',
    url: 'https://solokit.app',
    siteName: 'solokit',
    type: 'website',
    images: [{ url: 'https://solokit.app/og-image.png', width: 1200, height: 630, alt: 'solokit — The key to your card' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'solokit — The key to your card',
    description: 'solokit — the first platform where AI can take action for you. Optimized so Google ranks you. Structured so AI recommends you.',
    images: ['https://solokit.app/og-image.png'],
  },
  alternates: { canonical: 'https://solokit.app' },
  robots: { index: true, follow: true },
  authors: [{ name: 'LISA WOOD STUDIO' }],
  other: {
    'theme-color': '#f4f4f4',
    'color-scheme': 'light',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'solokit',
    'format-detection': 'telephone=no',
  },
  icons: {
    icon: 'https://acwgirrldntjpzrhqmdh.supabase.co/storage/v1/object/public/PORTFOLIO/solokit-logo-dark-256.png',
    apple: 'https://acwgirrldntjpzrhqmdh.supabase.co/storage/v1/object/public/PORTFOLIO/solokit-logo-dark-256.png',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'solokit',
    url: 'https://solokit.app',
    logo: 'https://acwgirrldntjpzrhqmdh.supabase.co/storage/v1/object/public/PORTFOLIO/solokit-logo-grayscale-512.png',
    description: 'The first platform where AI can take action for you. Optimized so Google ranks you. Structured so AI recommends you. One scan — they book, buy, view, RSVP.',
    founder: {
      '@type': 'Person',
      name: 'Lisa Wood',
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'LISA WOOD STUDIO' },
    },
    parentOrganization: { '@type': 'Organization', name: 'LISA WOOD STUDIO' },
    sameAs: [],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'solokit',
    applicationCategory: 'BusinessApplication, EventApplication, PortfolioApplication',
    operatingSystem: 'Web',
    url: 'https://solokit.app',
    description: 'The first platform where AI can take action for you. One scan and visitors book, buy, view, RSVP — on your own domain, with no intermediary. Optimized so Google ranks you. Structured so AI agents recommend you.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Beta access — free during beta period',
      availability: 'https://schema.org/PreOrder',
    },
    featureList: [
      'Personal site on your own subdomain — portfolio, gallery, event page, invitation, storefront',
      'One scan — visitors book, buy, view, RSVP directly',
      'Custom subdomain on solokit.app (e.g., kohler.solokit.app)',
      'Optimized for Google search ranking with full SEO markup',
      'Structured with JSON-LD so AI agents can read and recommend you',
      'WebMCP integration — AI agents interact with portfolios via structured tools',
      'No platform intermediary — your domain, your audience, your data',
    ],
    creator: { '@type': 'Organization', name: 'LISA WOOD STUDIO' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'solokit',
    url: 'https://solokit.app',
    description: 'solokit — the key to your card. The first platform where AI can take action for you.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://solokit.app/{slug}',
      'query-input': 'required name=slug',
    },
  },
];

export default function PlatformHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeC1 />
    </>
  );
}

/**
 * Brand Context — hostname-aware theming, copy, and metadata.
 *
 * Each domain role gets its own brand identity while sharing
 * the same design system foundations.
 */

import type { DomainRole } from './domains';

export interface BrandContext {
  role: DomainRole;
  siteName: string;
  tagline: string;           // meta tags only — never visible on page
  metaTitle: string;
  metaDescription: string;
  canonicalBase: string;
  ogSiteName: string;
  heroHeadline: string;
  heroSubtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  navLabel: string;
}

export const BRAND: Record<DomainRole, BrandContext> = {
  platform: {
    role: 'platform',
    siteName: 'solokit',
    tagline: 'The key to your card',           // meta only
    metaTitle: 'solokit — Your work. One link. One card.',
    metaDescription: 'Build your portfolio at yourname.solokit.app. Order physical solocards with NFC + QR. Your professional story, always current.',
    canonicalBase: 'https://solokit.app',
    ogSiteName: 'solokit',
    heroHeadline: 'Your work.\nOne link.\nOne card.',
    heroSubtext: 'Build your portfolio at yourname.solokit.app. Order physical solocards with NFC + QR. Hand them out — your full story opens instantly.',
    primaryCta: { label: 'Get Early Access', href: '#join' },
    secondaryCta: { label: 'Explore solocard', href: 'https://solocard.app' },
    navLabel: 'solokit',
  },
  product: {
    role: 'product',
    siteName: 'solocard',
    tagline: 'The key to your kit',            // meta only
    metaTitle: 'solocard — The key to your kit',
    metaDescription: 'Physical NFC + QR cards that open your solokit portfolio instantly. Tap or scan — your full professional story opens.',
    canonicalBase: 'https://solocard.app',
    ogSiteName: 'solocard',
    heroHeadline: 'The card\nis the key.',
    heroSubtext: 'A physical card with NFC + QR that opens your full portfolio. Tap, scan, or hand it over. Your story opens instantly.',
    primaryCta: { label: 'Design Your Card', href: '/design' },
    secondaryCta: { label: 'See what it opens', href: '/examples' },
    navLabel: 'solocard',
  },
  kit: {
    role: 'kit',
    siteName: 'solokit',
    tagline: '',
    metaTitle: '',                             // populated per-site from Supabase
    metaDescription: '',
    canonicalBase: '',
    ogSiteName: 'solokit',
    heroHeadline: '',
    heroSubtext: '',
    primaryCta: { label: '', href: '' },
    secondaryCta: { label: '', href: '' },
    navLabel: 'solokit',
  },
};

/**
 * Design tokens shared across all domains.
 */
export const DESIGN_TOKENS = {
  colors: {
    navy: '#1a2744',
    orange: '#f5922f',
    paper: '#faf7f2',
    cream: '#f0ebe2',
    creamWarm: '#ede4d6',
    terra: '#b5432a',
    forest: '#2d6b4f',
    ink: '#1c1c1c',
    white: '#ffffff',
  },
  fonts: {
    serif: "'Fraunces', serif",
    sans: "'Plus Jakarta Sans', system-ui, sans-serif",
  },
  radii: {
    default: '14px',
    sm: '10px',
    pill: '100px',
  },
} as const;

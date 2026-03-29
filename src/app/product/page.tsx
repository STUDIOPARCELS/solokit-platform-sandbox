import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'solocard — The key to your kit',
  description: 'Physical NFC + QR cards that open your solokit portfolio instantly. Tap or scan — your full professional story opens.',
  openGraph: {
    title: 'solocard — The key to your kit',
    description: 'Physical NFC + QR cards that open your solokit portfolio instantly.',
    url: 'https://solocard.app',
    siteName: 'solocard',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'solocard — The key to your kit' },
  alternates: { canonical: 'https://solocard.app' },
};

export default function ProductHome() {
  return <HomePage variant="product" />;
}

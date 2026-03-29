import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'solokit — Your work. One link. One card.',
  description: 'Build your portfolio at yourname.solokit.app. Order physical solocards with NFC + QR. Your professional story, always current.',
  openGraph: {
    title: 'solokit — Your work. One link. One card.',
    description: 'Build your portfolio. Order physical solocards with NFC + QR.',
    url: 'https://solokit.app',
    siteName: 'solokit',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'solokit — Your work. One link. One card.' },
  alternates: { canonical: 'https://solokit.app' },
};

export default function PlatformHome() {
  return <HomePage />;
}

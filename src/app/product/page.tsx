import type { Metadata } from 'next';
import { BRAND } from '@/config/brandContext';
import { HomePage } from '@/components/HomePage';

const b = BRAND.product;

export const metadata: Metadata = {
  title: b.metaTitle,
  description: b.metaDescription,
  openGraph: {
    title: b.metaTitle,
    description: b.metaDescription,
    url: b.canonicalBase,
    siteName: b.ogSiteName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: b.metaTitle,
    description: b.metaDescription,
  },
  alternates: { canonical: b.canonicalBase },
};

export default function ProductHome() {
  return <HomePage navLabel={b.navLabel} />;
}

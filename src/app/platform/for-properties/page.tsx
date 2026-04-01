import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'solokit for Properties & Venues | AI-readable hospitality and real estate platform',
  description: 'Property and venue pages with location, amenities, availability, and booking. Structured data for search engines and AI systems. Solocards for on-site guest engagement.',
  openGraph: { title: 'solokit for Properties & Venues', description: 'AI-readable property pages with booking and structured data.', url: 'https://solokit.app/for-properties', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/for-properties' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'solokit for Properties & Venues', url: 'https://solokit.app/for-properties', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const SECTIONS = [
  { title: 'Property Pages', desc: 'Dedicated pages with location, photos, amenities, floor plans, and property details. Place and LodgingBusiness schema for search engine and AI discovery.' },
  { title: 'Availability & Booking', desc: 'Real-time availability with booking links and contact options. Structured Offer data enables AI systems to recommend properties when users search for lodging.' },
  { title: 'Venue Events', desc: 'Host events at your property with integrated event pages. Link venue data to specific happenings — weddings, conferences, exhibitions, retreats.' },
  { title: 'Guest Solocards', desc: 'Physical cards placed in rooms, lobbies, or welcome packets. Guests tap or scan to access property info, local guides, menus, and concierge services.' },
  { title: 'Art Placement', desc: 'Properties with art collections get per-piece metadata — artist, title, medium, provenance. Gallery pages within the property presence for cultural tourism.' },
  { title: 'Multi-Property Management', desc: 'Portfolio of properties under one corporate residence. Shared branding with individual property pages and location-specific content.' },
];

export default function ForPropertiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'For Properties', href: '/for-properties' }]}>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">For properties & venues</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Property and venue pages with location, amenities, availability, and booking — structured for search engines and AI systems. Physical solocards for on-site guest engagement and concierge access.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SECTIONS.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 hover:shadow-sm transition-all duration-200">
              <h2 className="text-sm font-bold tracking-wider uppercase text-[#F47920] mb-3">{s.title}</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </PageShell>
    </>
  );
}

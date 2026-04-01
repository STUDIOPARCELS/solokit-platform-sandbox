import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'solokit for Galleries | AI-readable exhibition and artwork platform',
  description: 'Gallery pages with artwork metadata — title, artist, medium, year, dimensions, availability. Structured data for search engines and AI systems. Physical solocards for openings.',
  openGraph: { title: 'solokit for Galleries', description: 'Exhibition pages with AI-readable artwork metadata.', url: 'https://solokit.app/for-galleries', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/for-galleries' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'solokit for Galleries', url: 'https://solokit.app/for-galleries', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const SECTIONS = [
  { title: 'Exhibition Pages', desc: 'Each exhibition gets a dedicated page with dates, location, artist statement, and curated artwork grid. CollectionPage schema for search engine indexing.' },
  { title: 'Artwork Metadata', desc: 'Every piece includes title, artist, medium, year, dimensions, edition, and availability. CreativeWork / VisualArtwork schema for AI-readable art data.' },
  { title: 'Artist Profiles', desc: 'Individual artist pages with biography, exhibition history, and portfolio. Person schema with sameAs links to external profiles and galleries.' },
  { title: 'Image Sitemaps', desc: 'Automated image sitemaps with metadata for Google Image Search attribution and discovery. High-resolution artwork images with proper alt text and descriptions.' },
  { title: 'Opening Invitations', desc: 'Event pages with RSVP for gallery openings. Physical solocards as invitations — tap to open the exhibition page, see the work, and RSVP.' },
  { title: 'Availability & Inquiry', desc: 'Per-artwork availability signals and inquiry forms. Structured Offer data enables AI systems to surface available works on request.' },
];

export default function ForGalleriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'For Galleries', href: '/for-galleries' }]}>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">For galleries</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Exhibition pages with structured artwork metadata. Every piece has a title, artist, medium, year, and availability — indexed by search engines, readable by AI systems, and reachable through a solocard at the opening.
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

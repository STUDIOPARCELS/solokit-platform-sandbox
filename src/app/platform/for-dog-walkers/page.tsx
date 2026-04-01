import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'solokit for Dog Walkers | AI-readable service portfolio for pet professionals',
  description: 'Build a professional presence for your dog walking business. Service areas, rates, availability, booking, and client testimonials — structured for local search and AI recommendations.',
  openGraph: { title: 'solokit for Dog Walkers', description: 'Professional presence for dog walking with booking and NFC cards.', url: 'https://solokit.app/for-dog-walkers', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/for-dog-walkers' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'solokit for Dog Walkers', url: 'https://solokit.app/for-dog-walkers', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const SECTIONS = [
  { title: 'Service Area Map', desc: 'Neighborhoods and ZIP codes you serve with structured Place and GeoShape data. Local search engines and AI systems surface your services for location-specific queries.' },
  { title: 'Rates & Packages', desc: 'Walk types — solo, group, puppy, senior — with pricing, duration, and inclusions. Offer schema enables AI systems to compare and recommend services by price and scope.' },
  { title: 'Availability & Booking', desc: 'Real-time availability calendar with booking links. Clients see open slots and book directly. Structured Schedule data for AI-powered scheduling tools.' },
  { title: 'Client Testimonials', desc: 'Reviews from pet parents with star ratings and Review schema. Social proof that ranks in search results and feeds AI recommendation systems.' },
  { title: 'Pet Gallery', desc: 'Photos of your regular clients (the furry ones) with captions and breed tags. Visual proof of happy dogs — the conversion tool that matters most in pet services.' },
  { title: 'solocard', desc: 'Physical card you leave at dog parks, vet offices, and pet stores. New clients in the neighborhood tap or scan and see your full service page with booking — no app download, no search required.' },
];

export default function ForDogWalkersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'For Dog Walkers', href: '/for-dog-walkers' }]}>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">For dog walkers</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Your dog walking business at yourname.solokit.app — service areas, rates, availability, booking, and happy dog photos. Structured for local search and AI recommendations. A solocard at every dog park.
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

import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'solokit for Brands | AI-readable corporate presence platform',
  description: 'Build an autonomous corporate residence for your brand. Team profiles, service pages, event hosting, and structured data — indexable by search engines and readable by AI systems.',
  openGraph: {
    title: 'solokit for Brands',
    description: 'Autonomous corporate residence with AI readability.',
    url: 'https://solokit.app/for-brands',
    siteName: 'solokit',
    type: 'article',
  },
  alternates: { canonical: 'https://solokit.app/for-brands' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'solokit for Brands', url: 'https://solokit.app/for-brands', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const SECTIONS = [
  { title: 'Team Profiles', desc: 'Individual autonomous residences for each team member under the corporate umbrella. Structured Person schema with role, expertise, and contact data.' },
  { title: 'Service Pages', desc: 'Offerings with pricing, availability, and booking. JSON-LD Service schema for AI recommendations and search engine rich results.' },
  { title: 'Event Hosting', desc: 'Product launches, conferences, client events with RSVP, guest management, and real-time invitations. Solocards as branded event passes.' },
  { title: 'Entity Authority', desc: 'Organization schema with sameAs links, verified ownership, and a canonical corporate presence that AI systems recognize as authoritative.' },
  { title: 'Multi-Card Distribution', desc: 'Solocards for every team member, product line, and event — each resolving to the right page within the corporate residence.' },
  { title: 'Analytics Dashboard', desc: 'Track card interactions, page visits, and engagement across the entire corporate presence. Privacy-first analytics with IP hashing.' },
];

export default function ForBrandsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'For Brands', href: '/for-brands' }]}>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">For brands</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          An autonomous corporate residence — your brand's digital headquarters with team profiles, service pages, event hosting, and entity metadata that AI systems can read and recommend.
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

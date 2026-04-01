import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'solokit for Custom Crafters | AI-readable portfolio for makers and artisans',
  description: 'Showcase custom work — knitting, woodworking, ceramics, leather, jewelry — with structured product data, commission inquiries, and physical solocards for markets and fairs.',
  openGraph: { title: 'solokit for Custom Crafters', description: 'Portfolio platform for makers and artisans with AI readability.', url: 'https://solokit.app/for-custom-crafters', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/for-custom-crafters' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'solokit for Custom Crafters', url: 'https://solokit.app/for-custom-crafters', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const SECTIONS = [
  { title: 'Product Gallery', desc: 'Each piece gets its own page with photos, materials, dimensions, process, and pricing. Product schema with structured availability — AI systems surface your work when shoppers search for custom goods.' },
  { title: 'Commission Inquiries', desc: 'Custom order form with project type, materials, timeline, and budget. Structured inquiry routing that captures the right details from day one.' },
  { title: 'Process Documentation', desc: 'Behind-the-scenes photos and descriptions of your craft process. Builds trust and demonstrates skill — the content that converts browsers to buyers.' },
  { title: 'Materials & Techniques', desc: 'Catalog of materials you work with and techniques you specialize in. Structured data that helps AI systems match your capabilities to specific customer requests.' },
  { title: 'Market Schedule', desc: 'Upcoming craft fairs, pop-ups, and markets with dates and locations. Event schema for search discovery — customers find you before they arrive.' },
  { title: 'solocard', desc: 'Physical card you hand out at craft fairs, farmers markets, and pop-up shops. Buyers tap or scan and see your full catalog with ordering — the follow-up happens automatically.' },
];

export default function ForCustomCraftersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'For Custom Crafters', href: '/for-custom-crafters' }]}>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">For custom crafters</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Your craft portfolio at yourname.solokit.app — custom knits, woodwork, ceramics, leather, jewelry. Product gallery, commission inquiries, and market schedule. A solocard at every booth.
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

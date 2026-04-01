import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'solokit for Solopreneurs | AI-readable business portfolio platform',
  description: 'Build an autonomous residence for your solo business. Services, pricing, booking, testimonials, and contact — structured for search engines and AI systems. Physical solocards for client acquisition.',
  openGraph: { title: 'solokit for Solopreneurs', description: 'AI-readable business portfolio with physical NFC + QR cards.', url: 'https://solokit.app/for-solopreneurs', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/for-solopreneurs' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'solokit for Solopreneurs', url: 'https://solokit.app/for-solopreneurs', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const SECTIONS = [
  { title: 'Service Pages', desc: 'Each offering gets its own URL with pricing, scope, timeline, and booking link. Service schema makes your work discoverable when AI systems field client searches.' },
  { title: 'Booking & Contact', desc: 'Direct booking links, inquiry forms, and contact options with structured ContactPoint data. Clients reach you without friction.' },
  { title: 'Portfolio', desc: 'Past work with images, descriptions, and outcomes. CreativeWork schema with client context — proof that converts visitors to clients.' },
  { title: 'Testimonials', desc: 'Client reviews with structured Review schema. Social proof that search engines surface in rich results and AI systems cite in recommendations.' },
  { title: 'solocard', desc: 'Physical NFC + QR card you hand to prospects at coffee meetings, markets, and networking events. Tap or scan opens your full business presence.' },
  { title: 'Analytics', desc: 'Track which cards drive traffic, which services get views, and where your clients find you. Privacy-first analytics with IP hashing.' },
];

export default function ForSolopreneursPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'For Solopreneurs', href: '/for-solopreneurs' }]}>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">For solopreneurs</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Your solo business at yourname.solokit.app — services, pricing, booking, testimonials, and portfolio. Structured for search engines and AI systems. A solocard in every prospect's hand.
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

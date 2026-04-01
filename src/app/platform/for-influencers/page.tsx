import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'solokit for Influencers | AI-readable creator platform with physical cards',
  description: 'Build an autonomous residence for your brand. Content portfolio, collaboration inquiries, media kit, and social links — structured for search engines, AI recommendations, and brand partnerships.',
  openGraph: { title: 'solokit for Influencers', description: 'AI-readable creator platform with NFC + QR solocards.', url: 'https://solokit.app/for-influencers', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/for-influencers' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'solokit for Influencers', url: 'https://solokit.app/for-influencers', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const SECTIONS = [
  { title: 'Content Portfolio', desc: 'Curated showcase of your content — video, photo, written, audio — with platform links, engagement metrics, and campaign highlights. CreativeWork schema for AI-powered brand matching.' },
  { title: 'Media Kit', desc: 'Audience demographics, engagement rates, platform reach, and past collaborations in a structured, always-current format. Brands and agencies access your kit through a single URL.' },
  { title: 'Collaboration Inquiries', desc: 'Structured inquiry form with campaign type, budget range, timeline, and deliverables. ContactPoint schema routes the right opportunities to you.' },
  { title: 'Social Links Hub', desc: 'All platforms in one place — Instagram, TikTok, YouTube, X, podcast — with sameAs links in JSON-LD. AI systems connect your presence across platforms.' },
  { title: 'Brand Partnerships', desc: 'Past and current partnerships with brand logos, campaign descriptions, and results. Proof of work that converts brand inquiries to collaborations.' },
  { title: 'solocard', desc: 'Physical card with your photo and QR code. Hand it to brands at events, conferences, and meetings. Tap opens your full media kit and portfolio — the pitch happens without a pitch deck.' },
];

export default function ForInfluencersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'For Influencers', href: '/for-influencers' }]}>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">For influencers</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Your content portfolio, media kit, and collaboration hub at yourname.solokit.app. Structured for AI-powered brand matching and search discovery. A solocard that does the pitch for you.
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

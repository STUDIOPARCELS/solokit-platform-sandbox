import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Autonomous Corporate Residence | Real-time digital headquarters for brands, events, and properties',
  description: 'A corporate autonomous residence is a persistent, AI-readable digital headquarters for brands, companies, and organizations. Structured data, team profiles, service pages, and event hosting in one indexable presence.',
  openGraph: {
    title: 'Autonomous Corporate Residence | solokit',
    description: 'Persistent AI-readable digital headquarters for brands and organizations.',
    url: 'https://solokit.app/autonomous-corporate-residence',
    siteName: 'solokit',
    type: 'article',
  },
  alternates: { canonical: 'https://solokit.app/autonomous-corporate-residence' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Autonomous Corporate Residence',
  url: 'https://solokit.app/autonomous-corporate-residence',
  description: 'A corporate autonomous residence is a persistent digital headquarters for brands, companies, and organizations — indexable, AI-readable, and physically reachable through solocards.',
  isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' },
};

export default function AutonomousCorporateResidencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'Autonomous Corporate Residence', href: '/autonomous-corporate-residence' }]}>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Autonomous Corporate Residence
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          A persistent digital headquarters for brands, companies, and organizations. Structured team profiles, service pages, event hosting, and entity metadata — all indexable by search engines and readable by AI systems.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {[
            { title: 'Team Roster', desc: 'Individual profile pages for every team member with their own structured data, portfolio sections, and contact info. Each profile is an autonomous residence within the corporate presence.' },
            { title: 'Service Architecture', desc: 'Structured service pages with pricing, availability, and booking links. JSON-LD Service schema makes offerings discoverable by AI systems and search engines.' },
            { title: 'Event Hosting', desc: 'Launch events, openings, and gatherings with RSVP, guest lists, and real-time invitations. Solocards serve as VIP passes and branded handouts.' },
            { title: 'Entity Authority', desc: 'Organization schema, sameAs links, verified ownership signals, and a canonical corporate presence that AI systems recognize as authoritative.' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50">
              <h2 className="text-sm font-bold tracking-wider uppercase text-[#F47920] mb-3">{item.title}</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Corporate presence in the AI era</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            A corporate website built on solokit becomes more than a marketing site. It becomes a structured entity in the knowledge graph — with team profiles, service offerings, and event data that AI systems can retrieve, cite, and recommend.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Physical solocards extend the digital presence into the real world. Hand a card to a prospect, a partner, or a guest — they tap it, and the full corporate residence opens instantly with current information, team profiles, and booking links.
          </p>
        </div>

      </PageShell>
    </>
  );
}

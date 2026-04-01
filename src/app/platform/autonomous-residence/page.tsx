import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Autonomous Residence | AI-readable digital presence by Solokit',
  description: 'An autonomous residence is a persistent digital presence for a person, brand, company, event, or property that search engines index, AI systems read, and audiences reach through a card, QR code, or link.',
  openGraph: {
    title: 'Autonomous Residence | AI-readable digital presence by Solokit',
    description: 'A persistent digital presence that search engines index, AI systems read, and audiences reach instantly.',
    url: 'https://solokit.app/autonomous-residence',
    siteName: 'solokit',
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Autonomous Residence | solokit' },
  alternates: { canonical: 'https://solokit.app/autonomous-residence' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Autonomous Residence',
  url: 'https://solokit.app/autonomous-residence',
  description: 'An autonomous residence is a persistent digital presence for a person, brand, company, event, or property that search engines can index, AI systems can read, and real-world audiences can reach instantly through a card, QR code, link, or invitation.',
  isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItemElement', position: 1, name: 'solokit', item: 'https://solokit.app' },
      { '@type': 'ListItemElement', position: 2, name: 'Autonomous Residence', item: 'https://solokit.app/autonomous-residence' },
    ],
  },
};

export default function AutonomousResidencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'Autonomous Residence', href: '/autonomous-residence' }]}>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Autonomous Residence
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          A persistent digital presence for a person, brand, company, event, or property that search engines can index, AI systems can read, and real-world audiences can reach instantly through a card, QR code, link, or invitation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Indexable', desc: 'Server-rendered HTML with unique metadata, JSON-LD structured data, and complete entity information on every page. Search engines rank it. AI Overviews cite it.' },
            { title: 'AI-Readable', desc: 'Structured data that matches visible content. WebMCP integration for agent-native access. Public JSON endpoints for machine consumption. llms.txt for AI system ingestion.' },
            { title: 'Physically Reachable', desc: 'NFC + QR solocards bridge the physical and digital. Tap or scan opens the full site instantly. The card is permanent — the destination updates in real time.' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50">
              <h2 className="text-sm font-bold tracking-wider uppercase text-[#F47920] mb-3">{item.title}</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Three layers of discoverability</h2>
          <div className="space-y-6">
            {[
              { layer: 'HTML pages', detail: 'Server-rendered pages with complete metadata for search engines, AI Overviews, and web crawlers. Every page has a unique title, meta description, canonical URL, H1, entity summary, and JSON-LD.' },
              { layer: 'Machine-readable docs', detail: 'llms.txt and llms-full.txt for AI system ingestion. Public JSON endpoints for programmatic access. Image sitemaps and entity metadata for attribution and discovery.' },
              { layer: 'MCP connector', detail: 'A read-only Model Context Protocol server for agent-native access. AI tools can search profiles, retrieve events, get gallery data, and generate booking links through structured tool calls.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
                <span className="text-3xl font-black text-neutral-200">{i + 1}</span>
                <div>
                  <h3 className="text-sm font-semibold mb-1">{item.layer}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Who builds an autonomous residence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { who: 'Creators', what: 'Portfolio, resume, projects, services, contact. Subdomain at yourname.solokit.app.' },
              { who: 'Brands', what: 'Corporate digital headquarters with team profiles, service pages, structured data.' },
              { who: 'Galleries', what: 'Exhibition pages with artwork metadata — title, artist, medium, year, availability.' },
              { who: 'Events', what: 'Event pages with RSVP, guest lists, invitations. Solocards as VIP passes.' },
              { who: 'Properties', what: 'Listings with location, amenities, availability, booking. Hospitality presence.' },
              { who: 'Agencies', what: 'Multi-talent rosters with individual profiles and shared branding.' },
            ].map((item) => (
              <div key={item.who} className="p-4 rounded-lg border border-neutral-100 hover:border-neutral-200 transition-colors">
                <h3 className="text-sm font-semibold mb-1">{item.who}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.what}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight mb-4">The category solokit defines</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            An autonomous residence replaces the scattered collection of social profiles, link-in-bio pages, and static websites with a single persistent presence. It is indexable by search engines, readable by AI systems, and reachable through a physical card — a complete digital-physical identity layer.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            solokit is the platform that builds, hosts, and distributes autonomous residences. Every solokit page is a living entity in the knowledge graph — structured, discoverable, and always current.
          </p>
        </div>

      </PageShell>
    </>
  );
}

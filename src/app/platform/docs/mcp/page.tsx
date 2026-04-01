import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'MCP Integration | Model Context Protocol for solokit portfolios',
  description: 'solokit exposes a read-only MCP server for AI agent access. Search profiles, retrieve events, get gallery data, and generate booking links through structured tool calls.',
  openGraph: { title: 'MCP Integration | solokit', description: 'Model Context Protocol server for agent-native portfolio access.', url: 'https://solokit.app/docs/mcp', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/docs/mcp' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'TechArticle', name: 'solokit MCP Integration', url: 'https://solokit.app/docs/mcp', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const RESOURCES = [
  { name: 'profile', desc: 'Person or organization entity data — name, bio, skills, education, contact, social links.' },
  { name: 'event', desc: 'Event details — title, date, time, location, description, organizer, RSVP status.' },
  { name: 'gallery', desc: 'Collection of artworks or images with per-piece metadata.' },
  { name: 'invitation', desc: 'Event invitation with RSVP link and guest details.' },
  { name: 'venue', desc: 'Property or location data — address, amenities, capacity, availability.' },
  { name: 'availability', desc: 'Booking or contact availability for services and venues.' },
];

const TOOLS = [
  { name: 'search_profiles', desc: 'Find profiles by keyword, location, skill, or category.' },
  { name: 'search_events', desc: 'Find events by date range, location, type, or keyword.' },
  { name: 'get_profile', desc: 'Retrieve full profile data by slug — returns Person/Organization entity.' },
  { name: 'get_event', desc: 'Retrieve full event data by slug — returns Event entity with Offer and Place.' },
  { name: 'get_gallery', desc: 'Retrieve gallery with all artwork metadata — titles, artists, media, availability.' },
  { name: 'get_rsvp_link', desc: 'Generate an RSVP URL for a specific event.' },
  { name: 'get_booking_link', desc: 'Generate a booking URL for a service or venue.' },
];

export default function MCPDocsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'Docs', href: '/docs/schema' }, { label: 'MCP', href: '/docs/mcp' }]}>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">MCP Integration</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          solokit exposes a read-only Model Context Protocol server for AI agent access. Search profiles, retrieve events, get gallery data, and generate booking links through structured tool calls.
        </p>

        <div className="max-w-4xl mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Resources</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            MCP Resources are read-only data objects that AI agents can retrieve. Each resource maps to a solokit entity type.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESOURCES.map((r) => (
              <div key={r.name} className="p-4 rounded-lg border border-neutral-100 hover:border-neutral-200 transition-colors">
                <code className="text-sm font-mono font-semibold text-[#F47920]">{r.name}</code>
                <p className="text-xs text-neutral-500 leading-relaxed mt-1">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Tools</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            MCP Tools are callable functions that AI agents invoke to search, filter, and retrieve solokit data. All tools are read-only. Write actions require user approval.
          </p>
          <div className="space-y-3">
            {TOOLS.map((t) => (
              <div key={t.name} className="p-4 rounded-lg border border-neutral-100 hover:border-neutral-200 transition-colors flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-sm font-mono font-semibold text-[#0A1C3E] whitespace-nowrap">{t.name}</code>
                <p className="text-sm text-neutral-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Transport</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            The solokit MCP server uses Streamable HTTP transport for public web access. This enables any MCP-compatible client — including ChatGPT, Claude, and custom agent tools — to connect and interact with solokit data.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            The server is read-first by design. Search and retrieval operations are open. Write operations (updating profiles, creating events) require authenticated user approval through the solokit admin interface.
          </p>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Three layers of access</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            MCP is the third layer of machine access, complementing HTML pages (for search engines) and public JSON endpoints (for programmatic consumption). Together, these three layers make every solokit page discoverable through any channel — web search, AI citation, or direct agent interaction.
          </p>
          <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-100">
            <p className="text-xs text-neutral-500 font-mono leading-relaxed">
              Related: <a href="/docs/schema" className="text-[#F47920] hover:underline">Schema Docs</a> · <a href="/docs/ai-readability" className="text-[#F47920] hover:underline">AI Readability</a> · <a href="/autonomous-residence" className="text-[#F47920] hover:underline">Autonomous Residence</a>
            </p>
          </div>
        </div>

      </PageShell>
    </>
  );
}

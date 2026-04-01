import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'AI Readability | How solokit pages work with AI systems',
  description: 'How solokit makes portfolio, gallery, and event pages readable by AI systems. Server-rendered HTML, JSON-LD, llms.txt, MCP, and public JSON endpoints for full machine accessibility.',
  openGraph: { title: 'AI Readability | solokit', description: 'How solokit pages work with AI systems.', url: 'https://solokit.app/docs/ai-readability', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/docs/ai-readability' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'TechArticle', name: 'AI Readability', url: 'https://solokit.app/docs/ai-readability', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const LAYERS = [
  {
    title: 'Server-rendered HTML',
    detail: 'Every solokit page returns complete HTML in the initial response. AI crawlers and search bots receive the full page content, entity metadata, and structured data without executing JavaScript. This is the foundation for Google AI Overviews, ChatGPT search, Claude search, and Perplexity citations.',
  },
  {
    title: 'JSON-LD structured data',
    detail: 'Schema.org vocabulary describes every entity — Person, Organization, Event, CreativeWork, Place. The structured data matches visible text exactly. Google\'s AI guidance requires this content parity for eligibility in AI-generated results.',
  },
  {
    title: 'llms.txt and llms-full.txt',
    detail: 'Curated product documentation in markdown format at the root domain. These files provide AI systems with a structured map of the product, use cases, documentation, and public data endpoints — following the convention used by OpenAI and Anthropic on their own documentation sites.',
  },
  {
    title: 'Public JSON endpoints',
    detail: 'Read-only JSON endpoints for profiles, events, galleries, and a search index. These enable programmatic access to solokit data beyond HTML parsing — useful for aggregators, AI pipelines, and custom integrations.',
  },
  {
    title: 'Model Context Protocol (MCP)',
    detail: 'A read-only MCP server with Streamable HTTP transport. AI agents can search profiles, retrieve events, get gallery data, and generate booking links through structured tool calls. This is the agent-native access layer.',
  },
  {
    title: 'AI crawler policy',
    detail: 'robots.txt allows AI search and retrieval bots (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot) on all public pages. Training-data crawlers are blocked. Per-subdomain rules ensure consistent policy across the platform.',
  },
];

export default function AIReadabilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'Docs', href: '/docs/schema' }, { label: 'AI Readability', href: '/docs/ai-readability' }]}>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">AI Readability</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Six layers of machine accessibility make every solokit page discoverable by search engines, citable by AI Overviews, and accessible to agent systems.
        </p>

        <div className="max-w-3xl space-y-6 mb-20">
          {LAYERS.map((layer, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
              <span className="text-3xl font-black text-neutral-200 shrink-0">{i + 1}</span>
              <div>
                <h2 className="text-sm font-semibold mb-2">{layer.title}</h2>
                <p className="text-sm text-neutral-500 leading-relaxed">{layer.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-100">
            <p className="text-xs text-neutral-500 font-mono leading-relaxed">
              Related: <a href="/docs/schema" className="text-[#F47920] hover:underline">Schema Docs</a> · <a href="/docs/mcp" className="text-[#F47920] hover:underline">MCP Integration</a> · <a href="/what-is-an-ai-readable-portfolio" className="text-[#F47920] hover:underline">AI-Readable Portfolios</a> · <a href="/autonomous-residence" className="text-[#F47920] hover:underline">Autonomous Residence</a>
            </p>
          </div>
        </div>

      </PageShell>
    </>
  );
}

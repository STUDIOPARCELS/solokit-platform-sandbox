import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'What Is an AI-Readable Portfolio | Structured data portfolios by Solokit',
  description: 'An AI-readable portfolio is a personal or brand website built with structured data, server-rendered HTML, and machine-readable metadata so search engines and AI systems can index, understand, and recommend it.',
  openGraph: {
    title: 'What Is an AI-Readable Portfolio | solokit',
    description: 'Portfolio websites built with structured data for search engines and AI systems.',
    url: 'https://solokit.app/what-is-an-ai-readable-portfolio',
    siteName: 'solokit',
    type: 'article',
  },
  alternates: { canonical: 'https://solokit.app/what-is-an-ai-readable-portfolio' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'What Is an AI-Readable Portfolio',
  url: 'https://solokit.app/what-is-an-ai-readable-portfolio',
  description: 'An AI-readable portfolio uses structured data, server-rendered HTML, and entity metadata to be indexable by search engines and readable by AI systems.',
  isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' },
};

export default function AIReadablePortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'AI-Readable Portfolio', href: '/what-is-an-ai-readable-portfolio' }]}>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          What is an AI-readable portfolio?
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          A portfolio website built with structured data, server-rendered HTML, and machine-readable entity metadata — so search engines index it, AI Overviews cite it, and agent systems recommend it.
        </p>

        <div className="max-w-3xl space-y-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">The technical requirements</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              AI readability means a page delivers complete, structured information to machines without requiring JavaScript rendering, scraping, or guesswork. The page source itself contains everything an AI system needs.
            </p>
            <div className="space-y-3">
              {[
                { req: 'Server-rendered HTML', detail: 'Complete page content in the initial HTML response. AI crawlers and search engine bots receive the full page without executing JavaScript.' },
                { req: 'JSON-LD structured data', detail: 'Schema.org vocabulary describing the entity — Person, Organization, Event, CreativeWork — with properties that match visible text.' },
                { req: 'Unique page metadata', detail: 'Title, description, canonical URL, OpenGraph, and Twitter Card tags unique to each page. Entity-specific, not template-generic.' },
                { req: 'Visible text summaries', detail: 'Every image set, project, service, and entity has visible, indexable text — title, description, category, dates, availability.' },
                { req: 'Internal link architecture', detail: 'Descriptive anchor text connecting pages into a semantic graph that teaches topic relationships.' },
                { req: 'Machine-readable endpoints', detail: 'Public JSON endpoints and MCP tools for programmatic access beyond HTML parsing.' },
              ].map((item) => (
                <div key={item.req} className="p-4 rounded-lg border border-neutral-100 hover:border-neutral-200 transition-colors">
                  <h3 className="text-sm font-semibold mb-1">{item.req}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">How solokit builds AI-readable portfolios</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Every solokit page is server-rendered at the edge with complete HTML. The CMS requires entity-specific metadata — title, description, entity type, summary sentence, images, dates, and category. This metadata generates both the visible page content and the JSON-LD structured data, ensuring they always match.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              WebMCP integration adds a third layer: AI agents can access portfolio data through structured tool calls via the Model Context Protocol, searching profiles, retrieving events, and generating booking links programmatically.
            </p>
          </div>
        </div>

      </PageShell>
    </>
  );
}

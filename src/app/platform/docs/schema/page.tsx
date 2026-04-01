import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Schema & Structured Data | solokit JSON-LD documentation',
  description: 'Technical documentation for solokit structured data. JSON-LD schema types, entity metadata, and validation for profiles, events, galleries, and artworks.',
  openGraph: { title: 'Schema & Structured Data | solokit', description: 'JSON-LD and structured data documentation for solokit.', url: 'https://solokit.app/docs/schema', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/docs/schema' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'TechArticle', name: 'solokit Schema & Structured Data', url: 'https://solokit.app/docs/schema', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const SCHEMAS = [
  {
    page: 'Homepage',
    types: 'Organization, WebSite, SoftwareApplication',
    desc: 'Company identity, site-wide search action, and platform application listing with features and pricing.',
  },
  {
    page: 'Profile Pages',
    types: 'ProfilePage, Person or Organization',
    desc: 'Entity data — name, job title, education, skills, contact, sameAs links. BreadcrumbList for navigation context.',
  },
  {
    page: 'Event Pages',
    types: 'Event, Offer, Place, Organizer',
    desc: 'Event details — date, time, location, description, ticket/RSVP offers, organizer entity, and venue data.',
  },
  {
    page: 'Gallery Pages',
    types: 'CollectionPage',
    desc: 'Exhibition or collection container with date range, location, and artist reference.',
  },
  {
    page: 'Artwork Pages',
    types: 'CreativeWork, VisualArtwork, ImageObject',
    desc: 'Per-piece metadata — title, artist, medium, year, dimensions, edition, availability, image data.',
  },
  {
    page: 'All Pages',
    types: 'BreadcrumbList, FAQPage',
    desc: 'Navigation breadcrumbs on every page. FAQ schema where genuinely useful for rich result eligibility.',
  },
];

export default function SchemaDocsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'Docs', href: '/docs/schema' }, { label: 'Schema', href: '/docs/schema' }]}>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">Schema & Structured Data</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          solokit uses JSON-LD structured data on every page. Schema types match visible content exactly — the same information a visitor reads is what search engines and AI systems receive in machine-readable form.
        </p>

        <div className="max-w-4xl mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Schema types by page</h2>
          <div className="space-y-4">
            {SCHEMAS.map((s) => (
              <div key={s.page} className="p-5 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-sm font-semibold">{s.page}</h3>
                  <code className="text-xs text-[#F47920] bg-[#F47920]/5 px-2 py-0.5 rounded font-mono">{s.types}</code>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Validation</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            All solokit structured data is validated against Google's Rich Results Test and Schema Markup Validator. The platform ensures schema matches visible content — Google's AI guidance calls this out as a requirement for AI Overview eligibility.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Entity metadata fields are required by the CMS — title, description, entity type, summary sentence, images, dates, and category. Template-generic metadata is replaced by entity-specific metadata on every page.
          </p>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Implementation</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            JSON-LD is injected server-side via Next.js metadata and script tags. Schema is generated from the same data source that renders the visible page — guaranteeing content parity. Internal links use descriptive anchor text connecting pages into a semantic graph.
          </p>
          <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-100">
            <p className="text-xs text-neutral-500 font-mono leading-relaxed">
              Related: <a href="/docs/mcp" className="text-[#F47920] hover:underline">MCP Integration</a> · <a href="/docs/ai-readability" className="text-[#F47920] hover:underline">AI Readability</a> · <a href="/what-is-an-ai-readable-portfolio" className="text-[#F47920] hover:underline">AI-Readable Portfolios</a>
            </p>
          </div>
        </div>

      </PageShell>
    </>
  );
}

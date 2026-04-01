import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Showcase | Live solokit sites and autonomous residences',
  description: 'Browse live solokit sites — real portfolios, galleries, events, and brand pages built on the solokit platform. See autonomous residences in action.',
  openGraph: { title: 'Showcase | solokit', description: 'Live solokit sites and autonomous residences.', url: 'https://solokit.app/showcase', siteName: 'solokit', type: 'website' },
  alternates: { canonical: 'https://solokit.app/showcase' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'solokit Showcase', url: 'https://solokit.app/showcase', description: 'Live solokit sites — portfolios, galleries, events, and brand pages.', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const LIVE_SITES = [
  {
    name: 'Kohler Wood',
    slug: 'kohler',
    type: 'Creator',
    desc: 'Mechanical engineer — BSME, Colorado School of Mines, EIT. Projects, resume, and study.',
    url: 'https://kohler.solokit.app',
  },
];

export default function ShowcasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'Showcase', href: '/showcase' }]}>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">Showcase</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Live solokit sites — real portfolios, galleries, events, and brand pages. Autonomous residences in action.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {LIVE_SITES.map((site) => (
            <a
              key={site.slug}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-neutral-200 hover:border-[#F47920]/30 hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold tracking-wider uppercase text-[#F47920]">{site.type}</span>
                <ArrowRight size={14} className="text-neutral-300 group-hover:text-[#F47920] group-hover:translate-x-1 transition-all duration-200" />
              </div>
              <h2 className="text-lg font-semibold mb-1">{site.name}</h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-3">{site.desc}</p>
              <p className="text-xs text-neutral-400 font-mono">{site.slug}.solokit.app</p>
            </a>
          ))}

          {/* Placeholder tiles */}
          {[1, 2].map((i) => (
            <div key={i} className="p-6 rounded-xl border border-dashed border-neutral-200 bg-neutral-50/50 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-neutral-400 mb-2">Your site here</p>
                <a href="/#join" className="text-xs text-[#F47920] hover:underline">Join the waitlist</a>
              </div>
            </div>
          ))}
        </div>

      </PageShell>
    </>
  );
}

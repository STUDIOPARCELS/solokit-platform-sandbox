import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'solokit for Creators | AI-readable portfolio platform for artists, engineers, and designers',
  description: 'Build an AI-readable portfolio at yourname.solokit.app. Projects, resume, services, contact — structured for search engines and AI systems. Order physical solocards for networking.',
  openGraph: {
    title: 'solokit for Creators',
    description: 'AI-readable portfolio platform with physical NFC + QR cards.',
    url: 'https://solokit.app/for-creators',
    siteName: 'solokit',
    type: 'article',
  },
  alternates: { canonical: 'https://solokit.app/for-creators' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'solokit for Creators',
  url: 'https://solokit.app/for-creators',
  isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' },
};

const SECTIONS = [
  { title: 'Portfolio', desc: 'Project pages with images, descriptions, tools used, and outcomes. Each project gets its own URL with structured data — indexable and citable by AI systems.' },
  { title: 'Resume', desc: 'Education, experience, certifications, and skills in structured format. JSON-LD Person schema makes your qualifications machine-readable.' },
  { title: 'Services', desc: 'Freelance offerings with pricing, availability, and booking links. Service schema enables AI recommendations when someone searches for your skill set.' },
  { title: 'Contact', desc: 'Direct contact options — email, phone, social links — with clear CTAs. Structured ContactPoint data for AI retrieval.' },
  { title: 'solocard', desc: 'Physical NFC + QR card with your photo on front. Hand it out at interviews, conferences, gallery openings. Tap or scan opens your full portfolio.' },
  { title: 'WebMCP', desc: 'AI agents can search your portfolio, retrieve project details, and generate contact links through structured MCP tools. Your work becomes discoverable inside AI workflows.' },
];

export default function ForCreatorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'For Creators', href: '/for-creators' }]}>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          For creators
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Your portfolio at yourname.solokit.app — with structured data for search engines and AI systems, and a physical solocard for the real world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SECTIONS.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 hover:shadow-sm transition-all duration-200">
              <h2 className="text-sm font-bold tracking-wider uppercase text-[#F47920] mb-3">{s.title}</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Who uses solokit</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Engineers, designers, photographers, musicians, writers, developers, freelancers, and solopreneurs. Anyone whose work deserves a persistent, indexable, AI-readable presence — with a card that puts it in people's hands.
          </p>
          <p className="text-sm text-neutral-400">
            See a live example: <a href="https://kohler.solokit.app" className="text-[#F47920] hover:underline">kohler.solokit.app</a> — Kohler Wood, Mechanical Engineer.
          </p>
        </div>

      </PageShell>
    </>
  );
}

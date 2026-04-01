import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'solokit for Events | AI-readable event pages with RSVP and invitations',
  description: 'Create event pages with date, location, RSVP, and real-time invitations. Solocards serve as VIP passes. Event schema for search engines and AI discovery.',
  openGraph: { title: 'solokit for Events', description: 'AI-readable event pages with RSVP and physical solocard invitations.', url: 'https://solokit.app/for-events', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/for-events' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'solokit for Events', url: 'https://solokit.app/for-events', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const SECTIONS = [
  { title: 'Event Pages', desc: 'Dedicated page per event with date, time, location, description, and organizer. Event schema with Offer and Place for search engine rich results and AI citations.' },
  { title: 'RSVP & Guest Lists', desc: 'Real-time RSVP collection with capacity tracking and confirmation. Guest list management for organizers with attendance status.' },
  { title: 'Physical Invitations', desc: 'Solocards as event invitations — custom design with event details on front, QR on back. Tap or scan opens the event page with RSVP.' },
  { title: 'Real-Time Updates', desc: 'Change venue, time, or details — every card and link opens the current information. No resending invitations for updates.' },
  { title: 'Social Preview', desc: 'Custom OpenGraph images and descriptions for social sharing. Every event page generates a rich preview when shared on any platform.' },
  { title: 'Post-Event Archive', desc: 'Event pages persist as archives with photos, recordings, and attendee content. Searchable history for recurring events and series.' },
];

export default function ForEventsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'For Events', href: '/for-events' }]}>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">For events</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Event pages with RSVP, guest lists, and real-time invitations. Solocards as VIP passes — tap or scan opens the event page instantly. Event schema for search engine rich results and AI recommendations.
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

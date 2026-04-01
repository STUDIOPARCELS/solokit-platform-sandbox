import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'solokit for Socialites | Digital presence for events, hosting, and social life',
  description: 'A personal autonomous residence for event hosting, guest lists, invitations, and social presence. Physical solocards as calling cards. Structured data for search and AI discoverability.',
  openGraph: { title: 'solokit for Socialites', description: 'Digital presence for events, hosting, and social life.', url: 'https://solokit.app/for-socialites', siteName: 'solokit', type: 'article' },
  alternates: { canonical: 'https://solokit.app/for-socialites' },
};

const jsonLd = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'solokit for Socialites', url: 'https://solokit.app/for-socialites', isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' } };

const SECTIONS = [
  { title: 'Personal Presence', desc: 'A curated digital identity at yourname.solokit.app — bio, interests, affiliations, and social links. ProfilePage schema with Person entity for AI recognition.' },
  { title: 'Event Hosting', desc: 'Launch dinner parties, gallery openings, charity galas, and private gatherings with dedicated event pages. RSVP, guest lists, and capacity management.' },
  { title: 'Invitations', desc: 'Physical solocards as invitations — custom design for each event. Hand them out at the right moment. Tap or scan opens the event page with RSVP.' },
  { title: 'Guest Management', desc: 'Track RSVPs, manage attendance, and send updates in real time. The invitation card stays current — change the venue and every card reflects it instantly.' },
  { title: 'Social Gallery', desc: 'Photo galleries from events with tagging, captions, and sharing. CollectionPage schema makes your social archive indexable and citable.' },
  { title: 'Calling Card', desc: 'A solocard that opens your personal presence — your modern calling card. Hand it at a party, a conference, or a chance meeting. First impression, permanently updated.' },
];

export default function ForSocialitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageShell breadcrumb={[{ label: 'For Socialites', href: '/for-socialites' }]}>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">For socialites</h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          Your personal presence, event hosting, and invitations — all at yourname.solokit.app. Physical solocards as calling cards. Hand one out and your entire social world opens with a tap.
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

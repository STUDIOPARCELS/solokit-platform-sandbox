import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { FAQSection } from '@/components/FAQSection';
import { generateFAQJsonLd } from '@/lib/faq';
import type { FAQItem } from '@/lib/faq';

export const metadata: Metadata = {
  title: 'Digital-Physical Presence | Bridge the physical and digital with Solokit',
  description: 'solokit connects a persistent digital presence to the physical world through NFC + QR solocards. Tap or scan opens a full portfolio, gallery, event page, or invitation instantly.',
  openGraph: {
    title: 'Digital-Physical Presence | solokit',
    description: 'Physical NFC + QR cards that open a full digital presence instantly.',
    url: 'https://solokit.app/digital-physical-presence',
    siteName: 'solokit',
    type: 'article',
  },
  alternates: { canonical: 'https://solokit.app/digital-physical-presence' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Digital-Physical Presence',
  url: 'https://solokit.app/digital-physical-presence',
  isPartOf: { '@type': 'WebSite', name: 'solokit', url: 'https://solokit.app' },
};

const FAQ_ITEMS: FAQItem[] = [
  { question: 'How does a solocard work?', answer: 'A solocard has an NFC chip and QR code. Hold it against any phone for NFC tap, or scan the QR code with any camera. Both open your full solokit site instantly — no app download required.' },
  { question: 'Can I update my site after giving out cards?', answer: 'Yes. The solocard resolves through a smart redirect. Change your site content, add projects, update your resume — every card you have ever given out opens the current version.' },
  { question: 'What analytics do solocards provide?', answer: 'Every tap and scan is logged with timestamp, device type, referrer, and approximate location. IP addresses are hashed for privacy — no raw IPs are stored.' },
  { question: 'What is the solocard made of?', answer: 'Premium card stock in a rounded-square format. Your photo on front, QR code on back, NFC chip embedded. Designed to be kept in a wallet or handed to the right person.' },
];

const faqJsonLd = generateFAQJsonLd(FAQ_ITEMS);

export default function DigitalPhysicalPresencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageShell breadcrumb={[{ label: 'Digital-Physical Presence', href: '/digital-physical-presence' }]}>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Digital-physical presence
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mb-16">
          A solocard is a physical card with NFC chip and QR code that opens your full digital presence. Tap it against any phone or scan the code — your portfolio, gallery, event page, or invitation opens instantly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Permanent hardware', desc: 'The solocard is printed once and lasts. Premium card stock, rounded-square format, your photo on front, QR on back, NFC chip embedded. Made to be kept in a wallet, pinned to a board, or handed to the right person.' },
            { title: 'Updatable destination', desc: 'The card resolves through solocard.app/open/{slug} — a smart redirect that logs the interaction and sends the visitor to your current solokit site. Change your site anytime. Every card you have ever given out stays current.' },
            { title: 'Interaction analytics', desc: 'Every tap and scan is logged with timestamp, device type, referrer, and location — privacy-first with IP hashing. See when and where your cards are being used.' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50">
              <h2 className="text-sm font-bold tracking-wider uppercase text-[#F47920] mb-3">{item.title}</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight mb-4">The bridge between worlds</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            A digital presence means nothing if people can't reach it at the right moment. A solocard puts your autonomous residence in someone's hand — at a meeting, a gallery opening, a conference, a job interview. The interaction is immediate and the destination is always current.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            This is what makes an autonomous residence different from a website. It has a physical distribution layer. The solocard is not a business card — it is a key that opens your full digital presence.
          </p>
        </div>

        <FAQSection items={FAQ_ITEMS} />

      </PageShell>
    </>
  );
}

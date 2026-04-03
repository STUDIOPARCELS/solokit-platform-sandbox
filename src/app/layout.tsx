import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'solokit | AI-readable personal sites, portfolios, event pages, and digital cards',
  description: 'Build an AI-readable personal site on your own solokit subdomain for portfolios, galleries, events, invitations, and QR/NFC sharing. Book, buy, view, and RSVP from one scan.',
  verification: {
    google: 'KXNpwStj4-cLYRof2xX6GUIMhe7sJXL2M0GQ4Xd9eGA',
    other: {
      'msvalidate.01': '02ACC50F6771EF4788DBEF767FB5730E',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://aawnkxnnrymqbysgimqj.supabase.co" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

'use client';

import { SoloKitIcon } from '@/components/SoloKitIcon';
import { WaitlistForm } from '@/components/WaitlistForm';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PageShellProps {
  children: React.ReactNode;
  breadcrumb?: { label: string; href: string }[];
}

const NAV_LINKS = [
  { label: 'For Creators', href: '/for-creators' },
  { label: 'For Brands', href: '/for-brands' },
  { label: 'For Events', href: '/for-events' },
  { label: 'Showcase', href: '/showcase' },
  { label: 'Docs', href: '/docs/schema' },
];

export function PageShell({ children, breadcrumb }: PageShellProps) {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-neutral-900">

      {/* ═══ HEADER ═══ */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <SoloKitIcon className="w-8 h-8" />
            <span className="text-sm font-bold tracking-wider uppercase text-neutral-900">solokit</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#join"
              className="text-xs tracking-widest uppercase px-4 py-2 bg-[#F47920] text-white rounded-lg hover:bg-[#e06a15] transition-colors duration-200"
            >
              Join Waitlist
            </a>
          </div>
        </nav>
      </header>

      {/* ═══ BREADCRUMB ═══ */}
      {breadcrumb && breadcrumb.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 pt-6">
          <nav aria-label="Breadcrumb" className="text-xs text-neutral-400 tracking-wide flex items-center gap-1.5">
            <a href="/" className="hover:text-neutral-700 transition-colors">solokit</a>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="text-neutral-300">/</span>
                {i === breadcrumb.length - 1 ? (
                  <span className="text-neutral-600">{crumb.label}</span>
                ) : (
                  <a href={crumb.href} className="hover:text-neutral-700 transition-colors">{crumb.label}</a>
                )}
              </span>
            ))}
          </nav>
        </div>
      )}

      {/* ═══ CONTENT ═══ */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-6 py-12 lg:py-20"
      >
        {children}
      </motion.main>

      {/* ═══ CROSS-LINKS ═══ */}
      <section className="bg-neutral-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#F47920] mb-6">Explore</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Autonomous Residence', desc: 'Persistent AI-readable digital presence', href: '/autonomous-residence' },
              { title: 'AI-Readable Portfolios', desc: 'Structured data for search and AI systems', href: '/what-is-an-ai-readable-portfolio' },
              { title: 'Schema & Structured Data', desc: 'JSON-LD, WebMCP, and entity metadata', href: '/docs/schema' },
              { title: 'MCP Integration', desc: 'Agent-native access to portfolio data', href: '/docs/mcp' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group p-5 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all duration-200 bg-white"
              >
                <h3 className="text-sm font-semibold mb-1 group-hover:text-[#F47920] transition-colors duration-200">{link.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{link.desc}</p>
                <ArrowRight size={12} className="mt-3 text-neutral-300 group-hover:text-[#F47920] group-hover:translate-x-1 transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#0A1C3E] py-16 px-6 text-center" id="join">
        <div className="max-w-lg mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#F47920] mb-4">Get Started</p>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-3">Build your autonomous residence</h2>
          <p className="text-white/40 leading-relaxed mb-8 text-sm">
            Portfolio platform with structured data, AI readability, and physical solocards. Join the waitlist.
          </p>
          <WaitlistForm dark />
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-zinc-950 text-zinc-500 py-12 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <SoloKitIcon className="w-7 h-7" />
              <span className="text-white font-bold tracking-wide uppercase text-sm">solokit</span>
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-sm">
              AI-friendly portfolio, gallery, event, and invitation platform. Create an indexable personal or brand site that search engines rank and AI systems read.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Platform</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/for-creators" className="hover:text-[#F47920] transition-colors">For Creators</a></li>
              <li><a href="/for-brands" className="hover:text-[#F47920] transition-colors">For Brands</a></li>
              <li><a href="/for-galleries" className="hover:text-[#F47920] transition-colors">For Galleries</a></li>
              <li><a href="/for-events" className="hover:text-[#F47920] transition-colors">For Events</a></li>
              <li><a href="/for-properties" className="hover:text-[#F47920] transition-colors">For Properties</a></li>
              <li><a href="/for-solopreneurs" className="hover:text-[#F47920] transition-colors">For Solopreneurs</a></li>
              <li><a href="/for-influencers" className="hover:text-[#F47920] transition-colors">For Influencers</a></li>
              <li><a href="/for-socialites" className="hover:text-[#F47920] transition-colors">For Socialites</a></li>
              <li><a href="/for-dog-walkers" className="hover:text-[#F47920] transition-colors">For Dog Walkers</a></li>
              <li><a href="/for-custom-crafters" className="hover:text-[#F47920] transition-colors">For Custom Crafters</a></li>
              <li><a href="/showcase" className="hover:text-[#F47920] transition-colors">Showcase</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">Learn</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/autonomous-residence" className="hover:text-[#F47920] transition-colors">Autonomous Residence</a></li>
              <li><a href="/what-is-an-ai-readable-portfolio" className="hover:text-[#F47920] transition-colors">AI-Readable Portfolios</a></li>
              <li><a href="/digital-physical-presence" className="hover:text-[#F47920] transition-colors">Digital-Physical Presence</a></li>
              <li><a href="/docs/schema" className="hover:text-[#F47920] transition-colors">Schema Docs</a></li>
              <li><a href="/docs/mcp" className="hover:text-[#F47920] transition-colors">MCP Docs</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-700">© 2026 Lisa Wood Studio</p>
          <p className="text-xs text-zinc-700">solokit · solocard</p>
        </div>
      </footer>
    </div>
  );
}

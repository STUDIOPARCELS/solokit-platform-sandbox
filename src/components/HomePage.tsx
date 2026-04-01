'use client';

import { SoloKitIcon } from '@/components/SoloKitIcon';
import { WaitlistForm } from '@/components/WaitlistForm';
import { ArrowRight } from 'lucide-react';

const DEMO = {
  portrait: '/demo/opt/walker.webp',
  service: '/demo/opt/dog-walking.webp',
  product: '/demo/opt/sweater.webp',
};

interface HomePageProps {
  variant: 'platform' | 'product';
}

export function HomePage({ variant }: HomePageProps) {
  const tagline = variant === 'product' ? 'The key to your kit' : 'The key to your card';

  return (
    <div className="min-h-screen w-full bg-white font-sans">

      {/* ═══════ HERO — WHITE, TILE LAYOUT ═══════ */}
      <section className="min-h-screen w-full bg-white flex flex-col items-center pt-8 pb-12 lg:pt-20 lg:pb-24 px-6 lg:px-16">
        <div className="w-full max-w-[96rem] flex flex-col mt-0">

          {/* Nav row */}
          <div className="flex justify-between items-start mb-12 lg:mb-20 animate-in fade-in duration-500">
            <SoloKitIcon className="w-10 h-10 lg:w-12 lg:h-12" />
            <a href="#join" className="text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors duration-300">
              Join Waitlist
            </a>
          </div>

          {/* SEO H1 — keyword aligned, visible */}
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 mb-2 animate-in fade-in duration-500">
            AI-friendly portfolio platform
          </h1>
          <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-xl animate-in fade-in duration-600">
            Create an indexable personal or brand site that search engines rank and AI systems read. Publish portfolios, galleries, events, and invitations with physical NFC + QR solocards.
          </p>

          {/* Demo persona label */}
          <div className="flex flex-col items-end text-neutral-900 mb-6 animate-in fade-in duration-500">
            <p className="text-2xl lg:text-3xl font-semibold tracking-wide uppercase">Your Name</p>
            <p className="text-sm lg:text-base font-semibold tracking-widest uppercase text-neutral-600 mt-1">
              DOG WALKING & CUSTOM KNITS
            </p>
          </div>

          {/* Three demo tiles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {[
              { img: DEMO.portrait, label: 'ABOUT' },
              { img: DEMO.service, label: 'SERVICES' },
              { img: DEMO.product, label: 'SHOP' },
            ].map((tile) => (
              <div
                key={tile.label}
                className="group block w-full aspect-square bg-neutral-100 rounded-2xl overflow-hidden relative cursor-default shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={tile.img}
                  alt={tile.label}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <div className="absolute bottom-4 w-full flex justify-center z-20">
                  <span className="text-white text-lg font-medium tracking-wider uppercase drop-shadow-md">
                    {tile.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tagline — hostname aware */}
          <p className="text-center text-sm text-neutral-400 tracking-wide mt-8 animate-in fade-in duration-700">
            {tagline}
          </p>

        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="bg-white py-20 lg:py-28 px-6 lg:px-16" id="how">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#F47920] mb-4">How It Works</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-16">
            Three steps. That&apos;s it.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Build your solokit', desc: 'Add projects, services, resume, contact info. Your portfolio lives at yourname.solokit.app — responsive and always on.' },
              { num: '02', title: 'Order solocards', desc: 'Rounded-square physical cards. Your photo on front, QR on back, NFC chip embedded. Premium stock. Made to be kept.' },
              { num: '03', title: 'Hand them out', desc: 'Tap or scan opens your full portfolio. Update anytime — every card you\'ve ever given out stays current.' },
            ].map((step) => (
              <div key={step.num} className="group">
                <span className="text-5xl font-black text-[#0A1C3E]/8 group-hover:text-[#F47920]/20 transition-colors duration-500 block mb-3">{step.num}</span>
                <h3 className="text-sm font-bold tracking-wide uppercase mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SOLOKIT / SOLOCARD SPLIT ═══════ */}
      <section className="bg-neutral-50 py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#0A1C3E] rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-lg">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#1a3562] blur-[80px] opacity-40 pointer-events-none" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#F47920] mb-4">The Platform</p>
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">solokit</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              Your portfolio lives at <strong className="text-white/80">yourname.solokit.app</strong>.
              Projects, resume, services, contact — all in one responsive site with SEO and structured data built in.
              AI agents can read it through WebMCP.
            </p>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#F47920]/80">
              <span>solokit.app</span>
              <ArrowRight size={12} />
            </div>
          </div>

          <div className="bg-[#2c0f38] rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-lg">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#7db0d3] blur-[80px] opacity-20 pointer-events-none" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#7db0d3] mb-4">The Card</p>
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">solocard</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              A physical card with NFC + QR that opens your solokit. Tap it against any phone or scan the code —
              your full portfolio opens instantly. Update your site anytime, the card stays the same forever.
            </p>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#7db0d3]/80">
              <span>solocard.app</span>
              <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WAITLIST CTA ═══════ */}
      <section className="bg-[#0A1C3E] py-20 lg:py-28 px-6 lg:px-16 text-center" id="join">
        <div className="max-w-lg mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#F47920] mb-4">Get Started</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">Build yours</h2>
          <p className="text-white/40 leading-relaxed mb-8">
            Engineers, designers, photographers, solopreneurs. Join the waitlist — we&apos;ll let you know when it&apos;s ready.
          </p>
          <WaitlistForm dark />
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="bg-zinc-950 text-zinc-500 py-16 lg:py-20 px-6 lg:px-16 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <SoloKitIcon className="w-8 h-8" />
              <span className="text-white font-bold text-lg tracking-wide uppercase">solokit</span>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm">
              Your portfolio. Your card. Your professional story in people&apos;s pockets.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how" className="hover:text-[#F47920] transition-colors">How It Works</a></li>
              <li><a href="#join" className="hover:text-[#F47920] transition-colors">Join Waitlist</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-700 tracking-wide">© 2026 Lisa Wood Studio</p>
          <p className="text-xs text-zinc-700 tracking-wide">solokit · solocard</p>
        </div>
      </footer>
    </div>
  );
}

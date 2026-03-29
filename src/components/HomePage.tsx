'use client';

import { SoloKitIcon } from '@/components/SoloKitIcon';
import { WaitlistForm } from '@/components/WaitlistForm';
import { ArrowRight, ArrowDown } from 'lucide-react';

const DEMO = {
  portrait: '/demo/opt/walker.webp',
  service: '/demo/opt/dog-walking.webp',
  product: '/demo/opt/sweater.webp',
};

const NAVY = '#0A1C3E';
const ORANGE = '#F47920';

export function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">

      {/* ═══════ HERO — DARK, FULL BLEED ═══════ */}
      <section className="relative bg-[#0A1C3E] text-white overflow-hidden">
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1C3E] via-[#12264a] to-[#1a3562] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-8 lg:pt-12 pb-16 lg:pb-24">
          
          {/* Nav */}
          <div className="flex justify-between items-center mb-16 lg:mb-24">
            <SoloKitIcon className="w-10 h-10 lg:w-11 lg:h-11" />
            <a href="#join" className="text-xs tracking-widest uppercase text-white/40 hover:text-[#F47920] transition-colors duration-300">
              Join Waitlist
            </a>
          </div>

          {/* Headline */}
          <div className="max-w-3xl mb-16 lg:mb-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
              Your work.
              <br />
              One link.
              <br />
              <span className="text-[#F47920]">One card.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-lg">
              Build your portfolio at <strong className="text-white/80">yourname.solokit.app</strong>. 
              Order a physical card with NFC + QR. Hand it out — your full story opens instantly.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <a href="#join" className="px-7 py-3.5 bg-[#F47920] text-white text-xs font-bold tracking-widest uppercase rounded-xl hover:bg-[#e06a15] transition-colors shadow-lg shadow-[#F47920]/20">
                Get Early Access
              </a>
              <a href="#how" className="flex items-center gap-2 text-xs tracking-widest uppercase text-white/30 hover:text-white/70 transition-colors">
                Learn more <ArrowDown size={14} />
              </a>
            </div>
          </div>

          {/* Demo Tiles */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-end">
            <div className="lg:col-span-3 grid grid-cols-3 gap-4">
              {[
                { img: DEMO.portrait, label: 'ABOUT' },
                { img: DEMO.service, label: 'SERVICES' },
                { img: DEMO.product, label: 'SHOP' },
              ].map((tile) => (
                <div key={tile.label} className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                  <img src={tile.img} alt={tile.label} loading="eager" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-semibold tracking-widest uppercase drop-shadow-lg">
                    {tile.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-end justify-end text-right pb-2">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-wide uppercase text-white">Your Name</h2>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mt-1">Dog Walking & Custom Knits</p>
              <p className="text-[10px] tracking-widest uppercase text-[#F47920]/60 mt-3">↑ this is a solokit</p>
            </div>
          </div>
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

      {/* ═══════ WHAT IS SOLOKIT / SOLOCARD — SPLIT ═══════ */}
      <section className="bg-neutral-50 py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* solokit */}
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

          {/* solocard */}
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

      {/* ═══════ LIVE PROOF ═══════ */}
      <section className="bg-white py-20 lg:py-28 px-6 lg:px-16 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#008f25] mb-4">Live Now</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">Kohler Wood built his in a day</h2>
          <p className="text-neutral-500 leading-relaxed mb-8">
            Mechanical engineer. Colorado School of Mines. Eight projects, three classical piano performances, full resume.
          </p>
          <a
            href="https://kohler.solokit.app"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#0A1C3E] text-white text-xs font-bold tracking-widest uppercase rounded-xl hover:bg-[#12264a] transition-colors shadow-lg"
          >
            View kohler.solokit.app
            <ArrowRight size={14} />
          </a>
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

      {/* ═══════ FOOTER — MICRON HOUSE STYLE ═══════ */}
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
              <li><a href="https://kohler.solokit.app" target="_blank" rel="noopener" className="hover:text-[#F47920] transition-colors">Live Example</a></li>
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

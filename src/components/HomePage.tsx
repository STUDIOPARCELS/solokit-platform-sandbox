'use client';

import Link from 'next/link';
import { SoloKitIcon } from '@/components/SoloKitIcon';
import { WaitlistForm } from '@/components/WaitlistForm';
import { ArrowRight, Smartphone, QrCode, RefreshCw, Bot } from 'lucide-react';

/* ─── Demo Persona Assets ─── */
const DEMO = {
  portrait: '/demo/opt/walker.webp',
  service: '/demo/opt/dog-walking.webp',
  product: '/demo/opt/sweater.webp',
};

/* ─── Tile (matches Kohler's TieDyeTile exactly) ─── */
function Tile({ image, label }: { image: string; label: string }) {
  return (
    <div className="group block w-full aspect-square bg-neutral-100 rounded-2xl overflow-hidden relative cursor-default shadow-sm hover:shadow-xl transition-all duration-300">
      <img
        src={image}
        alt={label}
        loading="eager"
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
      <div className="absolute bottom-4 w-full flex justify-center z-20">
        <span className="text-white text-lg font-medium tracking-wider uppercase drop-shadow-md">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ─── Feature Card ─── */
function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group bg-neutral-50 rounded-2xl p-6 lg:p-8 hover:bg-neutral-100 transition-colors duration-300">
      <div className="w-10 h-10 rounded-xl bg-neutral-200 flex items-center justify-center mb-4 text-neutral-600 group-hover:bg-neutral-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-sm font-semibold tracking-wide uppercase mb-2">{title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ─── Step ─── */
function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center mb-4 text-neutral-400 text-lg font-light">
        {num}
      </div>
      <h3 className="text-sm font-semibold tracking-wide uppercase mb-2">{title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">{desc}</p>
    </div>
  );
}

/* ─── Main Page ─── */
export function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white">

      {/* ─── HEADER ─── */}
      <div className="relative z-50 w-full px-6 lg:px-16 pt-8 lg:pt-16">
        <div className="w-full max-w-[96rem] mx-auto flex justify-between items-start">
          <SoloKitIcon className="w-10 h-10 lg:w-12 lg:h-12" />
          <a
            href="#join"
            className="text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </div>

      {/* ─── HERO: DEMO PERSONA (matches Kohler's ProfilePage) ─── */}
      <div className="w-full flex flex-col items-center pt-8 pb-12 lg:pt-20 lg:pb-24 px-6 lg:px-16">
        <div className="w-full max-w-[96rem] flex flex-col mt-0">

          {/* Name + Title — right-aligned, above tiles */}
          <div className="flex flex-col items-end text-neutral-900 mb-6 animate-in fade-in duration-500">
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-wide uppercase">Your Name</h1>
            <p className="text-sm lg:text-base font-semibold tracking-widest uppercase text-neutral-600 mt-1">
              DOG WALKING & CUSTOM KNITS
            </p>
          </div>

          {/* 3 Tiles — identical to Kohler */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            <Tile image={DEMO.portrait} label="ABOUT" />
            <Tile image={DEMO.service} label="SERVICES" />
            <Tile image={DEMO.product} label="SHOP" />
          </div>

          {/* Tagline beneath tiles */}
          <p className="text-center text-sm text-neutral-400 tracking-wide mt-8 animate-in fade-in duration-700 delay-300">
            This is a solokit — a portfolio that lives at yourname.solokit.app
          </p>
        </div>
      </div>

      {/* ─── DIVIDER ─── */}
      <div className="w-8 h-px bg-neutral-200 mx-auto" />

      {/* ─── HOW IT WORKS ─── */}
      <section className="px-6 lg:px-16 py-20 lg:py-28" id="how">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">How It Works</p>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide mb-12">
            Three steps from signup to someone holding your card
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <Step
              num="1"
              title="Build your solokit"
              desc="Add projects, services, resume, contact info. Your portfolio lives at yourname.solokit.app — responsive, agent-ready, always on."
            />
            <Step
              num="2"
              title="Order solocards"
              desc="Rounded-square cards. Your photo on front. QR on back. NFC chip embedded. Premium stock. Made to be kept."
            />
            <Step
              num="3"
              title="Hand them out"
              desc="Tap or scan opens your full portfolio. Update anytime — every card you've ever given out stays current."
            />
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="px-6 lg:px-16 py-20 lg:py-28 bg-neutral-50/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">What You Get</p>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide mb-12">
            A complete professional presence
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Feature
              icon={<Smartphone size={18} strokeWidth={1.5} />}
              title="Digital Portfolio"
              desc="Your own subdomain. Projects, resume, skills, contact — responsive, SEO-ready, structured data baked in."
            />
            <Feature
              icon={<QrCode size={18} strokeWidth={1.5} />}
              title="Physical Solocards"
              desc="NFC-enabled. Dynamic QR. Built tough. Eco-friendly stock. Rounded square. Your photo, name, credentials."
            />
            <Feature
              icon={<RefreshCw size={18} strokeWidth={1.5} />}
              title="Always Current"
              desc="Update your portfolio anytime. Every card ever handed out automatically reflects your latest work."
            />
            <Feature
              icon={<Bot size={18} strokeWidth={1.5} />}
              title="Agent-Ready"
              desc="Machine-readable via WebMCP. AI agents discover and query your professional data through structured tools."
            />
          </div>
        </div>
      </section>

      {/* ─── LIVE SHOWCASE ─── */}
      <section className="px-6 lg:px-16 py-20 lg:py-28 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">Live</p>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide mb-3">
            Kohler Wood built his in a day
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed mb-8">
            Mechanical engineer. Colorado School of Mines. Eight projects, three classical piano performances, full resume.
          </p>
          <a
            href="https://kohler.solokit.app"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-neutral-900 border border-neutral-200 rounded-xl px-6 py-3 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300"
          >
            View his solokit
            <ArrowRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="w-8 h-px bg-neutral-200 mx-auto" />

      {/* ─── WAITLIST CTA ─── */}
      <section className="px-6 lg:px-16 py-20 lg:py-28 text-center" id="join">
        <div className="max-w-lg mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">Get Started</p>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide mb-3">
            Build yours
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed mb-8">
            Engineers, designers, photographers, solopreneurs. One portfolio. One card. One link.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="text-center py-8 border-t border-neutral-100">
        <p className="text-xs text-neutral-300 tracking-wide">
          solokit · solocard ·{' '}
          <a href="https://lisawoodstudio.com" className="hover:text-neutral-500 transition-colors">
            Lisa Wood Studio
          </a>
        </p>
      </footer>
    </div>
  );
}

'use client';

import { useState } from 'react';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aawnkxnnrymqbysgimqj.supabase.co';
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState<'success' | 'error' | ''>('');
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setMsg('Please enter a valid email.');
      setMsgType('error');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/platform_waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON,
          Authorization: `Bearer ${SUPABASE_ANON}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ email: trimmed, source: typeof window !== 'undefined' ? window.location.hostname : 'unknown' }),
      });
      if (res.ok) { setMsg("You're on the list. We'll be in touch."); setMsgType('success'); setEmail(''); }
      else {
        const d = await res.json().catch(() => ({}));
        if (d.message?.includes('duplicate')) { setMsg("You're already on the list."); setMsgType('success'); }
        else { setMsg('Something went wrong. Try again.'); setMsgType('error'); }
      }
    } catch { setMsg('Connection error. Try again.'); setMsgType('error'); }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-md mx-auto">
      <div className="flex gap-3 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          className={`flex-1 px-5 py-3.5 rounded-xl text-sm outline-none transition-colors ${
            dark
              ? 'bg-white/10 border border-white/10 text-white placeholder-white/25 focus:border-[#F47920]/50'
              : 'bg-neutral-100 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-400'
          }`}
          placeholder="your@email.com"
          autoComplete="email"
        />
        <button
          onClick={submit}
          disabled={loading}
          className="px-6 py-3.5 bg-[#F47920] text-white text-xs font-bold tracking-widest uppercase rounded-xl hover:bg-[#e06a15] transition-colors disabled:opacity-50 shadow-lg shadow-[#F47920]/20"
        >
          {loading ? '...' : 'Join'}
        </button>
      </div>
      {msg && (
        <p className={`text-xs tracking-wide ${msgType === 'error' ? 'text-red-400' : dark ? 'text-white/50' : 'text-neutral-500'}`}>
          {msg}
        </p>
      )}
    </div>
  );
}

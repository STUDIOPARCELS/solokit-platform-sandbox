'use client';

import { useState } from 'react';
import styles from './WaitlistForm.module.css';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aawnkxnnrymqbysgimqj.supabase.co';
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export function WaitlistForm() {
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
        body: JSON.stringify({
          email: trimmed,
          source: typeof window !== 'undefined' ? window.location.hostname : 'unknown',
        }),
      });

      if (res.ok) {
        setMsg("You're on the list. We'll be in touch.");
        setMsgType('success');
        setEmail('');
      } else {
        const d = await res.json().catch(() => ({}));
        if (d.message?.includes('duplicate')) {
          setMsg("You're already on the list.");
          setMsgType('success');
        } else {
          setMsg('Something went wrong. Try again.');
          setMsgType('error');
        }
      }
    } catch {
      setMsg('Connection error. Try again.');
      setMsgType('error');
    }
    setLoading(false);
  };

  return (
    <>
      <div className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          className={styles.input}
          placeholder="your@email.com"
          autoComplete="email"
        />
        <button
          onClick={submit}
          disabled={loading}
          className={`${styles.btn} ${loading ? styles.loading : ''}`}
        >
          {loading ? 'Joining…' : 'Join Waitlist'}
        </button>
      </div>
      {msg && (
        <p className={`${styles.msg} ${msgType === 'error' ? styles.error : ''}`}>
          {msg}
        </p>
      )}
    </>
  );
}

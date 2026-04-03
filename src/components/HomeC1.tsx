'use client';

import { useEffect, useRef, useState } from 'react';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aawnkxnnrymqbysgimqj.supabase.co';
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export function HomeC1() {
  return (
    <>
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --dark: #444444;
          --mid: #777777;
          --light: #b6b6b6;
          --bg: #f4f4f4;
          --border: #e0e0e0;
          --muted: #999999;
          --faint: #cccccc;
        }
        .c1-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          color: var(--dark);
          -webkit-font-smoothing: antialiased;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .c1-container {
          max-width: 420px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.75rem;
        }
        .c1-lockup {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 0.75rem;
          opacity: 0;
          animation: c1fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        .c1-lockup img { width: 62px; height: 62px; }
        .c1-lockup h1 {
          font-size: 2.25rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #636363;
          margin-bottom: 1px;
        }
        .c1-divider {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          animation: c1fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.18s forwards;
        }
        .c1-divider-line {
          flex: 1;
          height: 1px;
          background: var(--border);
        }
        .c1-divider p {
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #b6b6b6;
          white-space: nowrap;
        }
        .c1-bento {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          width: 100%;
          opacity: 0;
          animation: c1fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.28s forwards;
        }
        .c1-tile {
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: flex-end;
          font-size: 0.9375rem;
          font-weight: 400;
          line-height: 1.45;
          color: rgba(255,255,255,0.92);
          box-shadow: none;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          user-select: none;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
        }
        .c1-tile:active { transform: scale(0.97); }
        .c1-tile:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        .c1-tile-wide {
          grid-column: 1 / -1;
          background: var(--light);
          min-height: 90px;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease, background 1.5s ease-in-out, color 1.5s ease-in-out;
        }
        .c1-tile-wide:hover { background: #7db0d3 !important; color: #fff !important; transition: background 0.3s ease, color 0.12s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease; }
        .c1-tile-wide.typing { background: #7db0d3; color: #fff; }
        .c1-tile-wide.fading { transition: background 6s cubic-bezier(0.4, 0, 0.2, 1), color 6s cubic-bezier(0.4, 0, 0.2, 1); }
        .c1-tile-wide.hover-lock { background: #7db0d3 !important; color: #fff !important; transition: background 0.3s ease, color 0.3s ease; }
        .c1-tile-dark {
          background: var(--dark);
          min-height: 140px;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease, background 1.5s ease-in-out;
        }
        .c1-tile-dark:hover { background: #f0be00 !important; transition: background 0.3s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease; }
        .c1-tile-dark.typing { background: #f0be00; }
        .c1-tile-dark.fading { transition: background 8s cubic-bezier(0.4, 0, 0.2, 1); }
        .c1-tile-dark.hover-lock { background: #f0be00 !important; transition: background 0.3s ease; }
        .c1-tile-mid {
          background: var(--mid);
          min-height: 140px;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease, background 1.5s ease-in-out;
        }
        .c1-tile-mid:hover { background: #008f25 !important; transition: background 0.3s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease; }
        .c1-tile-mid.typing { background: #008f25; }
        .c1-tile-mid.fading { transition: background 8s cubic-bezier(0.4, 0, 0.2, 1); }
        .c1-tile-mid.hover-lock { background: #008f25 !important; transition: background 0.3s ease; }
        .c1-signup {
          width: 100%;
          background: var(--border);
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          opacity: 0;
          animation: c1fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .c1-signup:hover { transform: translateY(-2px); }
        .c1-signup-label {
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #999999;
          margin-bottom: 0.75rem;
          font-weight: 500;
          text-align: center;
        }
        .c1-input-row { display: flex; gap: 8px; }
        .c1-input-row input {
          flex: 1;
          padding: 0.8rem 1rem;
          border: none;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.9rem;
          background: rgba(255,255,255,0.85);
          color: var(--dark);
          outline: none;
          transition: background 0.2s;
        }
        .c1-input-row input:focus { background: white; }
        .c1-input-row input::placeholder { color: var(--faint); }
        .c1-input-row button {
          padding: 0.8rem 1.5rem;
          background: #444444;
          color: white;
          border: none;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .c1-input-row button:hover { background: #a82222; }
        .c1-input-row button:active { transform: scale(0.97); }
        .c1-input-row button:disabled { opacity: 0.6; cursor: default; transform: none; }
        .c1-success {
          display: none;
          text-align: center;
          padding: 0.5rem 0 0;
          font-size: 0.9rem;
          color: var(--dark);
          animation: c1fadeUp 0.4s ease forwards;
        }
        .c1-error {
          display: none;
          font-size: 0.8rem;
          color: #c44;
          margin-top: 0.5rem;
        }
        @keyframes c1fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .c1-root { padding: 1.5rem; }
          .c1-lockup img { width: 52px; height: 52px; }
          .c1-lockup h1 { font-size: 1.875rem; }
          .c1-tile-wide { min-height: 80px; }
          .c1-tile-dark, .c1-tile-mid { min-height: 120px; }
        }
      `}</style>

      {/* Bot-readable content (visually hidden) */}
      <div style={{ position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',border:0 }}>
        <h2>solokit — AI-readable personal sites, portfolios, event pages, and digital cards</h2>
        <p>solokit is a platform by LISA WOOD STUDIO for building AI-readable personal sites on your own subdomain. Create portfolios, galleries, event pages, invitations, storefronts, and digital business cards — all optimized for Google search ranking and structured so AI agents can read and recommend you.</p>
        <p>Each solokit site lives on its own subdomain (e.g., kohler.solokit.app) with full SEO markup, JSON-LD structured data, and WebMCP integration for AI agent interoperability. One scan via QR or NFC — visitors book, buy, view, and RSVP directly.</p>
        <p>solokit connects the physical to the digital: a personal site platform, a digital business card, a portfolio builder, an event page creator, and an AI-readable profile — all in one.</p>
        <p>Join the beta at solokit.app. Free during the beta period. Created by LISA WOOD STUDIO. Founded by Lisa Wood.</p>
      </div>

      <div className="c1-root">
        <div className="c1-container">
          <div className="c1-lockup">
            <img src="https://acwgirrldntjpzrhqmdh.supabase.co/storage/v1/object/public/PORTFOLIO/solokit-logo-grayscale-512.png" alt="solokit logo" />
            <h1>solokit</h1>
          </div>

          <div className="c1-divider">
            <div className="c1-divider-line" />
            <p>THE KEY TO YOUR CARD</p>
            <div className="c1-divider-line" />
          </div>

          <BentoTiles />
          <SignupTile />
        </div>
      </div>
    </>
  );
}

function BentoTiles() {
  const tile1Ref = useRef<HTMLDivElement>(null);
  const tile2Ref = useRef<HTMLDivElement>(null);
  const tile3Ref = useRef<HTMLDivElement>(null);
  const t1Ref = useRef<HTMLSpanElement>(null);
  const t2Ref = useRef<HTMLSpanElement>(null);
  const t3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const speed = 160;
    const pauseBetweenLines = 500;
    const pauseBetweenTiles = 900;
    const colorLeadTime = 2000;

    const tiles = [
      { span: t1Ref, tile: tile1Ref, lines: ['Optimized so Google ranks you.', 'Structured so AI recommends you.'] },
      { span: t2Ref, tile: tile2Ref, lines: ['One scan — they book, buy, view, RSVP.'] },
      { span: t3Ref, tile: tile3Ref, lines: ['You and your kit, connected.'] },
    ];

    function typeLines(spanRef: React.RefObject<HTMLSpanElement | null>, tileRef: React.RefObject<HTMLDivElement | null>, textLines: string[], callback?: () => void) {
      const span = spanRef.current;
      const tile = tileRef.current;
      if (!span || !tile) return;
      tile.classList.add('typing');
      setTimeout(() => {
        let lineIdx = 0;
        function typeLine() {
          if (lineIdx >= textLines.length) {
            if (callback) setTimeout(callback, pauseBetweenTiles);
            return;
          }
          const text = textLines[lineIdx];
          let charIdx = 0;
          if (lineIdx > 0 && span) span.appendChild(document.createElement('br'));
          function tick() {
            if (charIdx < text.length && span) {
              span.appendChild(document.createTextNode(text[charIdx]));
              charIdx++;
              setTimeout(tick, speed);
            } else {
              lineIdx++;
              setTimeout(typeLine, pauseBetweenLines);
            }
          }
          tick();
        }
        typeLine();
      }, colorLeadTime);
    }

    function fadeAllOut() {
      [tile2Ref, tile1Ref, tile3Ref].forEach((ref, i) => {
        const el = ref.current;
        if (el) el.classList.add('fading');
      });
      setTimeout(() => tile2Ref.current?.classList.remove('typing'), 800);
      setTimeout(() => tile1Ref.current?.classList.remove('typing'), 2400);
      setTimeout(() => tile3Ref.current?.classList.remove('typing'), 4000);
    }

    const timer = setTimeout(() => {
      typeLines(tiles[0].span, tiles[0].tile, tiles[0].lines, () => {
        typeLines(tiles[1].span, tiles[1].tile, tiles[1].lines, () => {
          typeLines(tiles[2].span, tiles[2].tile, tiles[2].lines, () => {
            setTimeout(fadeAllOut, 1500);
          });
        });
      });
    }, 1200);

    // Hover-lock behavior
    const allTiles = [tile1Ref, tile2Ref, tile3Ref];
    const cleanups: (() => void)[] = [];
    allTiles.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      const onEnter = () => el.classList.add('hover-lock');
      const onLeave = () => setTimeout(() => el.classList.remove('hover-lock'), 600);
      const onTouchStart = () => el.classList.add('hover-lock');
      const onTouchEnd = () => setTimeout(() => el.classList.remove('hover-lock'), 800);
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      el.addEventListener('touchstart', onTouchStart, { passive: true });
      el.addEventListener('touchend', onTouchEnd, { passive: true });
      cleanups.push(() => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchend', onTouchEnd);
      });
    });

    return () => {
      clearTimeout(timer);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="c1-bento">
      <div className="c1-tile c1-tile-wide" ref={tile1Ref}><span ref={t1Ref}></span></div>
      <div className="c1-tile c1-tile-dark" ref={tile2Ref}><span ref={t2Ref}></span></div>
      <div className="c1-tile c1-tile-mid" ref={tile3Ref}><span ref={t3Ref}></span></div>
    </div>
  );
}

function SignupTile() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'already' | 'error'>('idle');

  const submit = async () => {
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setState('error');
      return;
    }
    setState('loading');
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/platform_waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON,
          Authorization: `Bearer ${SUPABASE_ANON}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ email: trimmed, source: 'solokit' }),
      });
      if (res.ok) {
        setState('success');
      } else {
        const data = await res.json().catch(() => ({}));
        if (res.status === 409 || data?.message?.includes('duplicate')) {
          setState('already');
        } else {
          setState('error');
        }
      }
    } catch {
      setState('error');
    }
  };

  return (
    <div className="c1-signup" data-nosnippet>
      <div className="c1-signup-label">JOIN THE BETA</div>
      {state === 'success' || state === 'already' ? (
        <div className="c1-success" style={{ display: 'block' }}>
          <span style={{ color: '#7db0d3' }}>{state === 'already' ? "You're already in." : "You're in."}</span>{' '}
          <span style={{ color: '#008f25', fontWeight: 500 }}>We'll be in touch.</span>
        </div>
      ) : (
        <>
          <div className="c1-input-row">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle'); }}
              onKeyDown={(e) => e.key === 'Enter' && submit()}
              placeholder="you@email.com"
              autoComplete="email"
            />
            <button onClick={submit} disabled={state === 'loading'}>
              {state === 'loading' ? '...' : 'Join'}
            </button>
          </div>
          {state === 'error' && (
            <div className="c1-error" style={{ display: 'block' }}>
              {!email.trim() || !email.includes('@') ? 'Enter a valid email address.' : 'Something went wrong. Try again.'}
            </div>
          )}
        </>
      )}
    </div>
  );
}

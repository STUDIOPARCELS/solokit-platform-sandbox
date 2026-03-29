'use client';

import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

interface NavProps {
  label: string;
  ctaHref: string;
  ctaLabel: string;
}

export function Nav({ label, ctaHref, ctaLabel }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.brand}>
        <div className={styles.tiles}>
          <span /><span /><span /><span />
        </div>
        <span className={styles.name}>{label}</span>
      </a>
      <a href={ctaHref} className={styles.cta}>
        <span>{ctaLabel}</span>
      </a>
    </nav>
  );
}

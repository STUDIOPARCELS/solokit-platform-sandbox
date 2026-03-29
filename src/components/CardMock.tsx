'use client';

import { useRef } from 'react';
import styles from './CardMock.module.css';

export function CardMock() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!wrapRef.current || !cardRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  };

  const onLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateY(-5deg) rotateX(3deg)';
    }
  };

  return (
    <div ref={wrapRef} className={styles.visual} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={cardRef} className={styles.card}>
        <div className={styles.nfc} />
        <div className={styles.qr}>
          <span /><span /><span /><span /><span /><span /><span /><span /><span />
        </div>
        <div className={styles.text}>
          <div className={styles.name}>Your Name</div>
          <div className={styles.role}>Your Title</div>
        </div>
      </div>
    </div>
  );
}

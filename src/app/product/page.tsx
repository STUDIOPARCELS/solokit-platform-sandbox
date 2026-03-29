import type { Metadata } from 'next';
import { BRAND } from '@/config/brandContext';
import { Nav } from '@/components/Nav';
import { ScrollReveal } from '@/components/ScrollReveal';
import { WaitlistForm } from '@/components/WaitlistForm';
import { CardMock } from '@/components/CardMock';
import styles from './page.module.css';

const b = BRAND.product;

export const metadata: Metadata = {
  title: b.metaTitle,
  description: b.metaDescription,
  openGraph: {
    title: b.metaTitle,
    description: b.metaDescription,
    url: b.canonicalBase,
    siteName: b.ogSiteName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: b.metaTitle,
    description: b.metaDescription,
  },
  alternates: { canonical: b.canonicalBase },
};

export default function ProductHome() {
  return (
    <>
      <ScrollReveal />
      <Nav label={b.navLabel} ctaHref="#order" ctaLabel="Order Cards" />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.heroLabel}>Physical · NFC · QR</div>
            <h1 className={styles.heroH1}>
              <span className={styles.line}>The card</span>
              <span className={`${styles.line} ${styles.line2}`}>is the <em>key.</em></span>
            </h1>
            <p className={styles.heroSub}>
              A physical card with NFC + QR that opens your full portfolio.
              Tap, scan, or hand it over. Your story opens instantly.
            </p>
            <div className={styles.heroActions}>
              <a href="#order" className={styles.heroBtn}>Design Your Card</a>
              <a href="https://kohler.solokit.app" target="_blank" rel="noopener" className={styles.heroLink}>See what it opens →</a>
            </div>
          </div>
          <CardMock />
        </div>
      </section>

      <div className={styles.divider} />

      {/* HOW IT WORKS */}
      <section className={`${styles.sect} ${styles.sectWide} sr`}>
        <div className={styles.sectLabel}>How It Works</div>
        <h2 className={styles.sectH2}>Three steps from card to connection</h2>
        <div className={styles.steps}>
          <div className={`${styles.step} sr sr-d1`}>
            <div className={styles.stepRing}><span>1</span></div>
            <h3>Choose a destination</h3>
            <p>Your solokit portfolio, a booking page, an event RSVP, a product page — whatever your card should open.</p>
          </div>
          <div className={`${styles.step} sr sr-d2`}>
            <div className={styles.stepRing}><span>2</span></div>
            <h3>Connect the card</h3>
            <p>Your solocard is linked to your destination. The QR and NFC chip both point to the same place.</p>
          </div>
          <div className={`${styles.step} sr sr-d3`}>
            <div className={styles.stepRing}><span>3</span></div>
            <h3>Tap or scan</h3>
            <p>Recipients tap the card to their phone or scan the QR code. Your full experience opens — instantly, on any device.</p>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className={`${styles.sect} ${styles.sectWide} sr`}>
        <div className={styles.sectLabel}>The Card</div>
        <h2 className={styles.sectH2}>Built to be kept</h2>
        <div className={styles.feats}>
          <div className={`${styles.feat} sr sr-d1`}>
            <div className={`${styles.featIcon} ${styles.navy}`}>⬡</div>
            <h3>NFC enabled</h3>
            <p>Embedded NFC chip. Recipients tap the card against their phone — your portfolio opens with zero friction.</p>
          </div>
          <div className={`${styles.feat} sr sr-d2`}>
            <div className={`${styles.featIcon} ${styles.red}`}>◳</div>
            <h3>Dynamic QR</h3>
            <p>High-contrast QR code on the back. Scans instantly from any camera app. Links to your scan resolver for analytics.</p>
          </div>
          <div className={`${styles.feat} sr sr-d3`}>
            <div className={`${styles.featIcon} ${styles.navy}`}>▣</div>
            <h3>Built tough</h3>
            <p>16pt premium stock. Soft-touch matte finish. Rounded square shape. Designed to survive wallets and pockets.</p>
          </div>
          <div className={`${styles.feat} sr sr-d4`}>
            <div className={`${styles.featIcon} ${styles.green}`}>◎</div>
            <h3>Eco-friendly</h3>
            <p>Recycled fiber stock. Soy-based inks. Minimal packaging. A card that looks premium and stays responsible.</p>
          </div>
        </div>
      </section>

      {/* LIVE SHOWCASE */}
      <section className={`${styles.live} sr`}>
        <div className={styles.sectLabel} style={{ justifyContent: 'center' }}>Live</div>
        <h2 className={styles.liveH2}>See what a solocard opens</h2>
        <p className={styles.liveSub}>Kohler Wood&apos;s card opens his full engineering portfolio — projects, resume, classical piano performances.</p>
        <a href="https://kohler.solokit.app" target="_blank" rel="noopener" className={styles.liveCta}>
          <span>View kohler.solokit.app →</span>
        </a>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} sr`} id="order">
        <div className={styles.sectLabel} style={{ justifyContent: 'center' }}>Get Started</div>
        <h2 className={styles.ctaH2}>Get your cards</h2>
        <p className={styles.ctaSub}>Join the waitlist. We&apos;ll notify you when card ordering is live.</p>
        <WaitlistForm />
      </section>

      <footer className={styles.footer}>
        solocard · solokit · <a href="https://lisawoodstudio.com">Lisa Wood Studio</a>
      </footer>
    </>
  );
}

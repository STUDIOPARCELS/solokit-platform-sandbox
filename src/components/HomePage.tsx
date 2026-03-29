'use client';

import { Nav } from '@/components/Nav';
import { ScrollReveal } from '@/components/ScrollReveal';
import { WaitlistForm } from '@/components/WaitlistForm';
import { CardMock } from '@/components/CardMock';
import styles from './HomePage.module.css';

interface HomePageProps {
  navLabel: string;
}

export function HomePage({ navLabel }: HomePageProps) {
  return (
    <>
      <ScrollReveal />
      <Nav label={navLabel} ctaHref="#join" ctaLabel="Join Waitlist" />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.heroLabel}>Portfolio + Card</div>
            <h1 className={styles.heroH1}>
              <span className={styles.line}>Your work.</span>
              <span className={`${styles.line} ${styles.line2}`}>One link.</span>
              <span className={`${styles.line} ${styles.line3}`}>One <em>card.</em></span>
            </h1>
            <p className={styles.heroSub}>
              Build your portfolio at yourname.solokit.app. Order physical solocards
              with NFC + QR. Hand them out — your full story opens instantly.
            </p>
            <div className={styles.heroActions}>
              <a href="#join" className={styles.heroBtn}>Get Early Access</a>
              <a href="#how" className={styles.heroLink}>See how it works ↓</a>
            </div>
          </div>
          <div className={styles.bento}>
            <div className={`${styles.bentoTile} ${styles.span2}`}>
              <img src="/demo/opt/walker.webp" alt="Portfolio portrait" loading="eager" width={800} height={1000} />
              <span className={styles.tileLabel}>About</span>
            </div>
            <div className={styles.bentoTile}>
              <img src="/demo/opt/dog-walking.webp" alt="Services showcase" loading="eager" width={600} height={600} />
              <span className={styles.tileLabel}>Services</span>
            </div>
            <div className={styles.bentoTile}>
              <img src="/demo/opt/sweater.webp" alt="Product showcase" loading="eager" width={600} height={600} />
              <span className={styles.tileLabel}>Shop</span>
            </div>
            <div className={styles.bentoPersona}>
              <h3>Your Name</h3>
              <span>Dog Walking · Custom Knits</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      <section className={`${styles.sect} ${styles.sectWide} sr`} id="how">
        <div className={styles.sectLabel}>How It Works</div>
        <h2 className={styles.sectH2}>Three steps from signup to someone holding your card</h2>
        <div className={styles.steps}>
          <div className={`${styles.step} sr sr-d1`}>
            <div className={styles.stepRing}><span>1</span></div>
            <h3>Build your solokit</h3>
            <p>Add projects, services, resume, contact info. Your portfolio lives at yourname.solokit.app — responsive, agent-ready, always on.</p>
          </div>
          <div className={`${styles.step} sr sr-d2`}>
            <div className={styles.stepRing}><span>2</span></div>
            <h3>Order solocards</h3>
            <p>Rounded-square cards. Your photo on front. QR on back. NFC chip embedded. Premium stock. Made to be kept.</p>
          </div>
          <div className={`${styles.step} sr sr-d3`}>
            <div className={styles.stepRing}><span>3</span></div>
            <h3>Hand them out</h3>
            <p>Tap or scan opens your full portfolio. Update anytime — every card you&apos;ve ever given out stays current.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.sect} ${styles.sectWide} sr`}>
        <div className={styles.sectLabel}>What You Get</div>
        <h2 className={styles.sectH2}>A complete professional presence</h2>
        <div className={styles.feats}>
          <div className={`${styles.feat} sr sr-d1`}>
            <div className={`${styles.featIcon} ${styles.green}`}>◎</div>
            <h3>Digital portfolio</h3>
            <p>Your own subdomain. Projects, resume, skills, contact — responsive, SEO-ready, structured data baked in.</p>
          </div>
          <div className={`${styles.feat} sr sr-d2`}>
            <div className={`${styles.featIcon} ${styles.red}`}>◈</div>
            <h3>Physical solocards</h3>
            <p>NFC-enabled. Dynamic QR. Built tough. Eco-friendly stock. Rounded square. Your photo, name, credentials.</p>
          </div>
          <div className={`${styles.feat} sr sr-d3`}>
            <div className={`${styles.featIcon} ${styles.green}`}>↻</div>
            <h3>Always current</h3>
            <p>Update your portfolio anytime. Every card ever handed out automatically reflects your latest work.</p>
          </div>
          <div className={`${styles.feat} sr sr-d4`}>
            <div className={`${styles.featIcon} ${styles.red}`}>⬡</div>
            <h3>Agent-ready</h3>
            <p>Machine-readable via WebMCP. AI agents discover and query your professional data through structured tools.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.live} sr`}>
        <div className={styles.sectLabel} style={{ justifyContent: 'center' }}>Live</div>
        <h2 className={styles.liveH2}>Kohler Wood built his in a day</h2>
        <p className={styles.liveSub}>Mechanical engineer. Colorado School of Mines. Eight projects, three classical piano performances, full resume.</p>
        <a href="https://kohler.solokit.app" target="_blank" rel="noopener" className={styles.liveCta}>
          <span>View his solokit →</span>
        </a>
      </section>

      <section className={`${styles.cardSect} sr`}>
        <CardMock />
        <div className={styles.cardInfo}>
          <div className={styles.sectLabel}>The solocard</div>
          <h2 className={styles.cardH2}>A card worth keeping</h2>
          <ul className={styles.cardSpecs}>
            <li>NFC chip — tap to open your full portfolio</li>
            <li>Dynamic QR code — scan from any camera app</li>
            <li>Premium rounded-square stock — 16pt, soft-touch</li>
            <li>Eco-friendly materials — recycled fiber, soy inks</li>
            <li>Your photo, name, and credentials on front</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.cta} sr`} id="join">
        <div className={styles.sectLabel} style={{ justifyContent: 'center' }}>Get Started</div>
        <h2 className={styles.ctaH2}>Build yours</h2>
        <p className={styles.ctaSub}>Engineers, designers, photographers, solopreneurs. One portfolio. One card. One link.</p>
        <WaitlistForm />
      </section>

      <footer className={styles.footer}>
        solokit · solocard · <a href="https://lisawoodstudio.com">Lisa Wood Studio</a>
      </footer>
    </>
  );
}

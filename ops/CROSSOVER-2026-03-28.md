# Crossover Document — SOLOKIT Session Continuation
**Date:** March 28, 2026  
**Purpose:** Pick up the next chat exactly where this one left off

---

## Operating Document

The full Operating Document v2 is stored at `ops/OPERATING-DOCUMENT.md` in both:
- `STUDIOPARCELS/solokit-platform`
- `STUDIOPARCELS/solokit-platform-sandbox`

Read it at the start of any new session. It governs all work.

---

## Project Map (4 projects)

| Project | Sandbox Repo | Review URL | Production |
|---|---|---|---|
| SOLOKIT (Kohler) | `Kohlersolokit-sandbox` | kohler-solokit-sandbox.vercel.app | kohler.solokit.app |
| Micron House | `FINAL-MICRON-HOUSE` | micron-house.vercel.app | micron-house.com |
| Kohler Outreach | `kohler-outreach-sandbox` | kohler-outreach-sandbox.vercel.app | kohler-outreach.vercel.app |
| solokit platform | `solokit-platform-sandbox` | solokit-platform-sandbox.vercel.app | solokit.app + solocard.app |

---

## Tagline Rules

- **solocard.app** meta tags: "The key to your kit" — appears in title, og:title, twitter:title, meta description ONLY. Not visible on the page itself.
- **solokit.app** meta tags: "The key to your card" — appears in title, og:title, twitter:title, meta description ONLY. Not visible on the page itself.
- These taglines do NOT appear as visible text on the homepage. The homepage is minimalist — the content speaks for itself.

---

## What Was Completed This Session

### Kohler SOLOKIT (sandbox → pushed to production)
- SEO: title "Kohler Wood — Mechanical Engineer | BSME, EIT | Denver, CO", meta description, canonical URL, OG tags, Twitter card
- JSON-LD: 3 structured data blocks — full profile (credentials, skills, 4 work experiences, 2 education entries, cultural hooks), 8 portfolio projects with specs, 3 classical piano performances with Vimeo links
- WebMCP: 6 tools via `navigator.modelContext.registerTool()` — get-profile, get-skills, get-experience, search-projects, get-contact-info, get-performances
- Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, Content-Security-Policy-Report-Only (via vercel.json)
- UI: Bento tile labels (RESUME, PROJECTS, STUDY) made persistently visible with bottom gradient overlay
- EIT certification: updated to "Received March 2026" in resume.ts
- Project order: Walnut Pedestal moved to position 5 (between Pinstripe and Zebrawood)
- All changes live at kohler.solokit.app

### Micron House (sandbox approved, pending production push)
- SEO: expanded meta description (43→155 chars), canonical URL, og:site_name, JSON-LD (RealEstateAgent schema)
- Security headers: REVERTED — broke video loading from Supabase storage. Needs Micron-specific CSP that whitelists `media-src https://*.supabase.co`
- Changes live in sandbox at micron-house.vercel.app, NOT yet pushed to micron-house.com

### Kohler Outreach (sandbox approved, pending production push)
- Security headers: CSP-Report-Only baseline applied and verified
- CRON_SECRET: generated and added to Vercel env vars (both production and sandbox). Cron route now returns 403 without correct Bearer token.
- Changes live in sandbox at kohler-outreach-sandbox.vercel.app, NOT yet pushed to kohler-outreach.vercel.app

### solokit Platform (new — created this session)
- GitHub repos: `solokit-platform` and `solokit-platform-sandbox` under STUDIOPARCELS
- Vercel projects: created, linked to repos, static deploy config
- Vercel domains: `solokit.app` and `solocard.app` both added and verified on `solokit-platform` project
- Supabase: `platform_waitlist` table and `SOLOKIT-PLATFORM` storage bucket created on project `aawnkxnnrymqbysgimqj`
- Demo images uploaded to `demo/` folder in sandbox repo (walker.webp, dog-walking.jpeg, sweater.png, hero-composite.png)
- Operating document stored in `ops/OPERATING-DOCUMENT.md` in both repos
- Landing page: in progress — current version at solokit-platform-sandbox.vercel.app needs redesign

### DNS (Lisa's action — not yet done)
- solokit.app: A record `@` → `76.76.21.21` (in GoDaddy). Subdomain kohler.solokit.app already works via existing CNAME.
- solocard.app: A record `@` → `76.76.21.21` (in GoDaddy)
- Both domains already added and verified in Vercel

---

## Immediate Next Actions (in order)

### 1. Redesign solokit platform landing page (PRIORITY — cards arrive Monday)
- Aesthetic: minimalist, invisible UI, warm palette from uploaded artwork (terracotta, cream, forest green, navy from sweater)
- Micro-interactions: scroll reveals, gentle hover transitions, Micron House quality
- Bento grid demo using uploaded artwork (dog walker / custom knits persona)
- Brand language from Kohler's repo: "The key to your kit" (solocard tagline), "The key to your card" (solokit tagline)
- Copy from SoloCardOrderPage.tsx: NFC Enabled, Dynamic QR, Built Tough, Eco-Friendly feature cards
- Existing design assets in BusinessCardGenerator.tsx and BrandAssetKit.tsx
- Waitlist form connects to Supabase `platform_waitlist` table on project `aawnkxnnrymqbysgimqj`
- Google Drive folder with additional artwork: https://drive.google.com/drive/folders/1MkcCkteNyCL1JQw2zvdeeYnuvrt53T1x (SOLOCARD-ARTWORK)
- **Meta tags only — not visible on page:** solocard.app gets "The key to your kit", solokit.app gets "The key to your card"

### 2. Push Micron House sandbox to production
- SEO changes approved. Security headers need Micron-specific CSP before pushing.

### 3. Push Kohler Outreach sandbox to production
- Security headers approved and verified.

### 4. Naming cleanup (3 PRs, sandbox-first)
**PR 1 — Pure rename + dead code:**
- TieDyeTile → PortfolioTile
- ProfilePage → HomePage
- ProductTemplate → ProjectDetailView
- DynamicProjectPage → ProjectPage
- archiveItems → performanceItems
- projectList → portfolioItems
- INITIAL_PROJECTS → keep (seeds mutable state)
- DEFAULT_CONTENT → DEFAULT_SITE_CONTENT
- SoloCardOrderPage → tag as platform-owned, add to extraction backlog
- bioText → remove (after grep for shape dependencies)
- useSiteContent.ts/.tsx pair → inspect exports, merge or split properly

**PR 2 — Bundle/performance:**
- Lazy-load SoloCardOrderPage, BusinessCardGenerator, BusinessCardGeneratorV2, BrandAssetKit, AdminPage

**PR 3 — Architecture extraction:**
- Move platform tools to solokit.app consumer repo
- Target monorepo: apps/portfolio, apps/solokit, packages/ui, packages/content-schema, packages/platform-tools

### 5. Implementation plan phases (from Operating Document)
- Phase 0: Protect sandbox review surfaces (Vercel Authentication)
- Phase 1: Credential governance and rotation (RocketReach, GitHub PAT, Vercel token)
- Phase 2: GSD execution layer
- Phase 3: Council decision layer
- Phase 4: Supabase CLI and migration discipline
- Phase 5: Paperclip baseline, Ollama experiment
- Phase 6: Security headers and CSP rollout (partially done)
- Phase 7: Pretext integration

---

## Supabase Projects

| Project ID | Purpose | Tables |
|---|---|---|
| `acwgirrldntjpzrhqmdh` | Kohler Outreach | contacts, companies, jobs, job_listings, tracking, reachout_company_inserts, reachout_template, candidate_profile, candidate_assets, + kv_stores |
| `aawnkxnnrymqbysgimqj` | SOLOKIT / Winterblue / Viceroy / Platform | viceroy_transcripts, viceroy_cross_reference, wb2_grid, wb2_images, wra_artworks, platform_waitlist |

Storage buckets on `aawnkxnnrymqbysgimqj`: PORTFOLIO, WINTERBLUE, VICEROY, SOLOKIT-PLATFORM

---

## Credentials (encrypted in Vercel, not retrievable)

- CRON_SECRET: added March 28, 2026 to kohler-outreach and kohler-outreach-sandbox. Cannot be retrieved from Vercel — regeneration instructions in operating document.
- All other credentials documented in Operating Document credential inventory section.
- GitHub PAT: `GITHUB_PAT (see password manager)` (STUDIOPARCELS, updated March 24 2026)
- Vercel token: `VERCEL_TOKEN (see password manager)`
- Git commits use: `317lrw@gmail.com`

---

## Decision Framework (apply to every significant decision)

Before answering any significant SOLOKIT/Micron House/Kohler Outreach question: apply first principles + load-bearing priority + structured disagreement. Surface competing perspectives and trade-offs internally. Identify what's load-bearing. Present the recommendation — not the deliberation process. Lisa does not need to see the council thinking, just the answer informed by it.

---

## Key References

- Operating Document: `ops/OPERATING-DOCUMENT.md` in solokit-platform repos
- Security audit: completed March 28, 2026 — all 33 Outreach API routes verified, CRON_SECRET gap fixed
- WebMCP spec: https://webmachinelearning.github.io/webmcp/
- Council of High Intelligence: github.com/0xNyk/council-of-high-intelligence
- GSD: github.com/gsd-build/get-shit-done
- Pretext: github.com/chenglou/pretext
- TurboQuant (Windows RTX 4090): github.com/spiritbuun/llama-cpp-turboquant-cuda branch feature/turboquant-kv-cache

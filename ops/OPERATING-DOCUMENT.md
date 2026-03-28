# Operating Document — Sandbox-First Delivery System

**Version 2**  
**Date:** March 28, 2026  
**Scope:** SOLOKIT · Micron House · Kohler Outreach · solokit-platform

> **Operating truth**
>
> Application code follows **sandbox → review → production**.  
> Account-level changes and workstation installs follow **maintenance → validation → ledger update**.  
> Every phase ends with **proof**, **rollback readiness**, and a **log entry**.

---

## Project map

| Project | Sandbox repo | Review URL | Production |
|---|---|---|---|
| SOLOKIT (Kohler instance) | `Kohlersolokit-sandbox` | `kohler-solokit-sandbox.vercel.app` | `kohler.solokit.app` |
| Micron House | `FINAL-MICRON-HOUSE` | `micron-house.vercel.app` | `micron-house.com` |
| Kohler Outreach | `kohler-outreach-sandbox` | `kohler-outreach-sandbox.vercel.app` | `kohler-outreach.vercel.app` |
| solokit platform | `solokit-platform-sandbox` | `solokit-platform-sandbox.vercel.app` | `solokit.app` + `solocard.app` |

**Rule:** stable sandbox URLs get protection before broad review.  
That step turns "sandbox-first" into a real boundary instead of a public duplicate site.

---

## Completed work (as of March 28, 2026)

### SOLOKIT sandbox → pushed to production

- **SEO foundation:** title, meta description, canonical URL, OG tags, Twitter card — all targeting Kohler as mechanical engineer (BSME, EIT, Denver CO)
- **JSON-LD structured data:** 3 blocks — full profile with credentials/skills/experience, 8 portfolio projects with specs, 3 classical piano performances with Vimeo links
- **WebMCP integration:** 6 tools registered via `navigator.modelContext.registerTool()` — get-profile, get-skills, get-experience, search-projects, get-contact-info, get-performances
- **Security headers:** X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, Content-Security-Policy-Report-Only
- **UI:** Bento tile labels (RESUME, PROJECTS, STUDY) made persistently visible with bottom gradient
- **EIT certification:** updated from "In Progress" to "Received March 2026"
- **Project order:** Walnut Pedestal moved to position 5 (between Pinstripe and Zebrawood)

### Micron House sandbox (approved, not yet pushed to production)

- **SEO:** expanded meta description from 43 chars to 155 chars, added canonical URL, og:site_name, JSON-LD structured data (RealEstateAgent schema)
- **Security headers:** reverted after video loading issues — needs Micron-specific CSP whitelisting Supabase storage video URLs

### Kohler Outreach sandbox (approved, not yet pushed to production)

- **Security headers:** applied and verified (CSP-Report-Only, nosniff, DENY, referrer, permissions)

### solokit platform (new)

- **Repos created:** `solokit-platform-sandbox` and `solokit-platform` under STUDIOPARCELS
- **Vercel projects created:** linked to repos, static deploy config
- **Architecture:** single codebase serves both `solokit.app` and `solocard.app` via Vercel multi-domain
- **DNS:** pending — Lisa points both GoDaddy domains to Vercel nameservers

---


---

## Completed work (as of March 28, 2026)

### SOLOKIT sandbox → pushed to production

- **SEO foundation:** title, meta description, canonical URL, OG tags, Twitter card — targeting Kohler as mechanical engineer (BSME, EIT, Denver CO)
- **JSON-LD structured data:** 3 blocks — full profile with credentials/skills/experience, 8 portfolio projects with specs, 3 classical piano performances with Vimeo links
- **WebMCP integration:** 6 tools via `navigator.modelContext.registerTool()` — get-profile, get-skills, get-experience, search-projects, get-contact-info, get-performances
- **Security headers:** X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, Content-Security-Policy-Report-Only
- **UI:** Bento tile labels (RESUME, PROJECTS, STUDY) persistently visible with bottom gradient
- **EIT certification:** updated to "Received March 2026"
- **Project order:** Walnut Pedestal moved to position 5

### Micron House sandbox (approved, pending production push)

- **SEO:** expanded meta description, canonical URL, og:site_name, JSON-LD structured data
- **Security headers:** reverted — needs Micron-specific CSP for Supabase video URLs

### Kohler Outreach sandbox (approved, pending production push)

- **Security headers:** CSP-Report-Only baseline applied and verified

### solokit platform (new — March 28, 2026)

- **Repos:** `solokit-platform-sandbox` and `solokit-platform` under STUDIOPARCELS
- **Vercel projects:** created and linked, static deploy config
- **Architecture:** single codebase serves both `solokit.app` and `solocard.app`
- **DNS:** pending — point both GoDaddy domains to Vercel nameservers

### Pending naming cleanup (3 passes)

- **Pass 1 — Semantic renames:** TieDyeTile→PortfolioTile, ProfilePage→HomePage, ProductTemplate→ProjectDetailPage, DynamicProjectPage→ProjectRoute, archiveItems→performanceItems, DEFAULT_CONTENT→DEFAULT_SITE_DATA, INITIAL_PROJECTS→STATIC_PROJECTS, projectList→portfolioItems, remove bioText, inspect useSiteContent.ts/.tsx pair
- **Pass 2 — Bundle/performance:** lazy-load SoloCardOrderPage, BusinessCardGenerator, BusinessCardGeneratorV2, BrandAssetKit, AdminPage
- **Pass 3 — Product boundary extraction:** move platform tools to solokit.app consumer repo

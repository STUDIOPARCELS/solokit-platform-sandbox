import type { MetadataRoute } from 'next';

const BASE = 'https://solokit.app';

// All static platform pages
const STATIC_PAGES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/autonomous-residence', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/autonomous-corporate-residence', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/what-is-an-ai-readable-portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/digital-physical-presence', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/for-creators', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/for-brands', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/for-galleries', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/for-events', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/for-properties', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/for-solopreneurs', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/for-socialites', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/for-influencers', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/for-dog-walkers', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/for-custom-crafters', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/showcase', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/docs/schema', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/docs/mcp', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/docs/ai-readability', priority: 0.7, changeFrequency: 'monthly' as const },
];

// Known profile subdomains — will eventually be dynamic from Supabase
const PROFILE_SUBDOMAINS = [
  { slug: 'kohler', lastModified: '2026-03-30' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${BASE}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Profile pages on subdomains
  const profiles: MetadataRoute.Sitemap = PROFILE_SUBDOMAINS.map((profile) => ({
    url: `https://${profile.slug}.solokit.app`,
    lastModified: profile.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...pages, ...profiles];
}

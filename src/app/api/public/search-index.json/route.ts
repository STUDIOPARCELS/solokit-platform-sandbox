import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aawnkxnnrymqbysgimqj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * GET /api/public/search-index.json
 *
 * Returns all public entities for search indexing and AI ingestion.
 * Lightweight entries — use /api/public/profiles/[slug] for full data.
 */
export async function GET() {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data: sites, error } = await supabase
    .from('sites')
    .select('slug, site_type, display_name, tagline, primary_domain, entity_type, summary_sentence, location, keywords')
    .eq('enabled', true)
    .order('display_name');

  if (error || !sites) {
    return NextResponse.json({ error: 'Failed to load index' }, { status: 500 });
  }

  const index = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'solokit Public Profiles',
    url: 'https://solokit.app/api/public/search-index.json',
    numberOfItems: sites.length,
    itemListElement: sites.map((site, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': site.entity_type || 'Person',
        name: site.display_name,
        description: site.summary_sentence || site.tagline,
        url: `https://${site.primary_domain}`,
        location: site.location || undefined,
        keywords: site.keywords || [],
        _solokit: {
          slug: site.slug,
          siteType: site.site_type,
          profileEndpoint: `https://solokit.app/api/public/profiles/${site.slug}`,
        },
      },
    })),
  };

  return NextResponse.json(index, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

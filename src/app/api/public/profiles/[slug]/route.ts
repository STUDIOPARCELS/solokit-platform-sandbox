import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aawnkxnnrymqbysgimqj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * GET /api/public/profiles/[slug]
 *
 * Returns public profile data as JSON for machine consumption.
 * Includes entity metadata, structured for AI systems and aggregators.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data: site, error } = await supabase
    .from('sites')
    .select('slug, site_type, display_name, tagline, primary_domain, primary_action, enabled_routes, meta_title, meta_description, summary_sentence, entity_type, og_image, location, same_as, faq, keywords, enabled')
    .eq('slug', slug)
    .eq('enabled', true)
    .single();

  if (error || !site) {
    return NextResponse.json(
      { error: 'Profile not found', slug },
      { status: 404 }
    );
  }

  const profile = {
    '@context': 'https://schema.org',
    '@type': site.entity_type || 'Person',
    name: site.display_name,
    url: `https://${site.primary_domain}`,
    description: site.summary_sentence || site.meta_description || site.tagline,
    jobTitle: site.tagline,
    location: site.location ? { '@type': 'Place', name: site.location } : undefined,
    sameAs: site.same_as || [],
    image: site.og_image || undefined,
    // Platform metadata
    _solokit: {
      slug: site.slug,
      siteType: site.site_type,
      domain: site.primary_domain,
      primaryAction: site.primary_action,
      enabledRoutes: site.enabled_routes,
      keywords: site.keywords || [],
      faq: site.faq || [],
    },
  };

  return NextResponse.json(profile, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

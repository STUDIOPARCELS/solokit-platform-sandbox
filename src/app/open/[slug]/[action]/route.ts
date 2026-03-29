import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aawnkxnnrymqbysgimqj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * GET /open/:slug/:action
 *
 * Deep card action resolver.
 *
 * Example: solocard.app/open/kohler/resume → kohler.solokit.app/resume
 * Example: solocard.app/open/galleryopening/rsvp → galleryopening.solokit.app/rsvp
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string; action: string }> }
) {
  const { slug, action } = await params;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // 1. Look up site
  const { data: site, error } = await supabase
    .from('sites')
    .select('slug, display_name, primary_domain, enabled_routes, enabled')
    .eq('slug', slug)
    .eq('enabled', true)
    .single();

  if (error || !site) {
    return NextResponse.redirect(new URL('https://solokit.app'), { status: 302 });
  }

  // 2. Validate the action is in enabled_routes
  const enabledRoutes: string[] = site.enabled_routes || [];
  const actionIsValid = enabledRoutes.includes(action);

  // 3. Log scan event
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  const forwarded = request.headers.get('x-forwarded-for') || '';
  const ip = forwarded.split(',')[0]?.trim() || 'unknown';
  const ipHash = await hashString(ip);

  supabase.from('scan_events').insert({
    site_slug: slug,
    action: action,
    source: 'qr_or_nfc',
    user_agent: userAgent.substring(0, 500),
    referer: referer.substring(0, 500),
    ip_hash: ipHash,
  }).then(() => {});

  // 4. Redirect — if action is valid, go to subdomain/action. Otherwise, go to root.
  const baseDomain = `https://${site.primary_domain}`;
  const destination = actionIsValid ? `${baseDomain}/${action}` : baseDomain;
  return NextResponse.redirect(destination, { status: 302 });
}

async function hashString(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str + 'solokit-salt');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 16);
}

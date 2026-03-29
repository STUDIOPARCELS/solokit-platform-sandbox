import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aawnkxnnrymqbysgimqj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * GET /open/:slug
 *
 * The card resolver. This is the most important route in the system.
 *
 * 1. Look up the site by slug
 * 2. Log the scan/tap event
 * 3. Redirect to the destination
 *
 * Example: solocard.app/open/kohler → kohler.solokit.app
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // 1. Look up site
  const { data: site, error } = await supabase
    .from('sites')
    .select('slug, display_name, primary_domain, default_redirect, enabled')
    .eq('slug', slug)
    .eq('enabled', true)
    .single();

  if (error || !site) {
    // Unknown slug — redirect to platform homepage
    return NextResponse.redirect(new URL('https://solokit.app'), { status: 302 });
  }

  // 2. Log scan event (fire and forget — don't block redirect)
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';

  // Hash IP for privacy (no raw IPs stored)
  const forwarded = request.headers.get('x-forwarded-for') || '';
  const ip = forwarded.split(',')[0]?.trim() || 'unknown';
  const ipHash = await hashString(ip);

  supabase.from('scan_events').insert({
    site_slug: slug,
    action: null,
    source: 'qr_or_nfc',
    user_agent: userAgent.substring(0, 500),
    referer: referer.substring(0, 500),
    ip_hash: ipHash,
  }).then(() => {}); // fire and forget

  // 3. Redirect
  const destination = site.default_redirect || `https://${site.primary_domain}`;
  return NextResponse.redirect(destination, { status: 302 });
}

async function hashString(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str + 'solokit-salt');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 16);
}

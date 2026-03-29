import { NextRequest, NextResponse } from 'next/server';
import { resolveDomainRole, SANDBOX_HOSTNAME, LOCALHOST } from '@/config/domains';

/**
 * Middleware: hostname-aware routing
 *
 * In production:
 *   solokit.app       → /(platform)/...
 *   solocard.app      → /(product)/...
 *   *.solokit.app     → /(kit)/...
 *
 * In sandbox/localhost:
 *   ?host=solocard.app       → /(product)/...
 *   ?host=kohler.solokit.app → /(kit)/...
 *   default                  → /(platform)/...
 *
 * The /open/:slug routes are always handled directly (no rewrite needed)
 * because they live at the top-level app directory.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const pathname = url.pathname;

  // Skip static assets, API routes, and _next
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/open') ||
    pathname.startsWith('/demo') ||
    pathname.includes('.') // static files
  ) {
    return NextResponse.next();
  }

  // In sandbox/localhost, allow ?host= override for testing
  const hostOverride = url.searchParams.get('host');
  const effectiveHost = hostOverride || hostname;

  const { role, slug } = resolveDomainRole(effectiveHost);

  // Set headers for downstream components to read
  const response = NextResponse.rewrite(
    new URL(`/${role}${pathname}`, request.url)
  );

  response.headers.set('x-domain-role', role);
  if (slug) {
    response.headers.set('x-kit-slug', slug);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next (Next.js internals)
     * - api (API routes)
     * - static files with extensions
     */
    '/((?!_next|api|open|demo|.*\\..*).*)',
  ],
};

/**
 * Domain Configuration — Source of Truth
 *
 * Three roles:
 *   solokit.app        → platform marketing + shared admin
 *   solocard.app       → product marketing + tap/scan entry
 *   *.solokit.app      → public kits (creator sites, service sites, event sites)
 */

export type DomainRole = 'platform' | 'product' | 'kit';

export interface DomainConfig {
  role: DomainRole;
  hostname: string;
  isWildcard: boolean;
  description: string;
}

export const DOMAINS: Record<DomainRole, DomainConfig> = {
  platform: {
    role: 'platform',
    hostname: 'solokit.app',
    isWildcard: false,
    description: 'Platform marketing, onboarding, shared admin',
  },
  product: {
    role: 'product',
    hostname: 'solocard.app',
    isWildcard: false,
    description: 'Product marketing, tap/scan entry, card ordering',
  },
  kit: {
    role: 'kit',
    hostname: '*.solokit.app',
    isWildcard: true,
    description: 'Public destination sites for creators, services, events',
  },
};

/**
 * Sandbox equivalents — used in development and preview deployments.
 * In sandbox, all three roles are served from a single hostname
 * with path-based simulation via query param ?host=
 */
export const SANDBOX_HOSTNAME = 'solokit-platform-sandbox.vercel.app';
export const LOCALHOST = 'localhost';

/**
 * Resolve the domain role from a hostname.
 */
export function resolveDomainRole(hostname: string): { role: DomainRole; slug?: string } {
  const host = hostname.replace(/:\d+$/, ''); // strip port

  // Exact match: solokit.app
  if (host === 'solokit.app' || host === 'www.solokit.app') {
    return { role: 'platform' };
  }

  // Exact match: solocard.app
  if (host === 'solocard.app' || host === 'www.solocard.app') {
    return { role: 'product' };
  }

  // Wildcard match: *.solokit.app
  if (host.endsWith('.solokit.app')) {
    const slug = host.replace('.solokit.app', '');
    if (slug && slug !== 'www' && slug !== 'sandbox') {
      return { role: 'kit', slug };
    }
    return { role: 'platform' };
  }

  // Sandbox and localhost: default to platform
  return { role: 'platform' };
}

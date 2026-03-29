/**
 * Route Contract — Source of Truth
 *
 * Every route in the system, its host ownership, and build status.
 * Reference this file before creating any new page.
 */

import type { DomainRole } from './domains';

export interface RouteEntry {
  path: string;
  host: DomainRole;
  title: string;
  description: string;
  status: 'live' | 'scaffold' | 'planned';
  dynamic?: boolean;
}

// ─── solokit.app routes ───

export const PLATFORM_ROUTES: RouteEntry[] = [
  {
    path: '/',
    host: 'platform',
    title: 'solokit — Your work. One link. One card.',
    description: 'Platform homepage. Explains what solokit is, who it\'s for, how solocard fits.',
    status: 'live',
  },
  {
    path: '/how-it-works',
    host: 'platform',
    title: 'How It Works',
    description: 'Three-step explanation: build the site, connect to a card, share.',
    status: 'planned',
  },
  {
    path: '/use-cases',
    host: 'platform',
    title: 'Use Cases',
    description: 'Parent page linking to creators, services, events, products.',
    status: 'planned',
  },
  {
    path: '/use-cases/creators',
    host: 'platform',
    title: 'For Creators',
    description: 'Résumé, portfolio, music, commissions, contact.',
    status: 'planned',
  },
  {
    path: '/use-cases/services',
    host: 'platform',
    title: 'For Services',
    description: 'Book, pay, contact, reviews, services.',
    status: 'planned',
  },
  {
    path: '/use-cases/events',
    host: 'platform',
    title: 'For Events',
    description: 'Openings, RSVP, VIP handouts, temporary event sites.',
    status: 'planned',
  },
  {
    path: '/use-cases/products',
    host: 'platform',
    title: 'For Products',
    description: 'Buy, learn more, reserve, inquire.',
    status: 'planned',
  },
  {
    path: '/examples',
    host: 'platform',
    title: 'Examples',
    description: 'Grid of real or demo kits linking to their subdomains.',
    status: 'planned',
  },
  {
    path: '/pricing',
    host: 'platform',
    title: 'Pricing',
    description: 'Platform + product pricing side by side.',
    status: 'planned',
  },
  {
    path: '/solocard',
    host: 'platform',
    title: 'The solocard',
    description: 'Product explainer page inside the platform site. Cross-links to solocard.app.',
    status: 'planned',
  },
  {
    path: '/start',
    host: 'platform',
    title: 'Get Started',
    description: 'Lead capture or onboarding entry point.',
    status: 'planned',
  },
  {
    path: '/login',
    host: 'platform',
    title: 'Login',
    description: 'Shared auth entry.',
    status: 'planned',
  },
  {
    path: '/admin',
    host: 'platform',
    title: 'Admin',
    description: 'Shared admin dashboard.',
    status: 'planned',
  },
  {
    path: '/privacy',
    host: 'platform',
    title: 'Privacy Policy',
    description: 'Shared legal.',
    status: 'planned',
  },
  {
    path: '/terms',
    host: 'platform',
    title: 'Terms of Service',
    description: 'Shared legal.',
    status: 'planned',
  },
];

// ─── solocard.app routes ───

export const PRODUCT_ROUTES: RouteEntry[] = [
  {
    path: '/',
    host: 'product',
    title: 'solocard — The key to your kit',
    description: 'Product homepage. The card is the key. Scan, tap, unlock.',
    status: 'live',
  },
  {
    path: '/how-it-works',
    host: 'product',
    title: 'How It Works',
    description: 'Choose a destination, connect the card, tap or scan.',
    status: 'planned',
  },
  {
    path: '/design',
    host: 'product',
    title: 'Design Your Card',
    description: 'Card configuration and design system page.',
    status: 'planned',
  },
  {
    path: '/materials',
    host: 'product',
    title: 'Materials',
    description: 'Card stock, finish, print feel, QR/NFC details.',
    status: 'planned',
  },
  {
    path: '/pricing',
    host: 'product',
    title: 'Pricing',
    description: 'Card pricing.',
    status: 'planned',
  },
  {
    path: '/order',
    host: 'product',
    title: 'Order',
    description: 'Checkout or order-request flow.',
    status: 'planned',
  },
  {
    path: '/faq',
    host: 'product',
    title: 'FAQ',
    description: 'Product questions.',
    status: 'planned',
  },
  {
    path: '/examples',
    host: 'product',
    title: 'Examples',
    description: 'Real examples of what a card opens.',
    status: 'planned',
  },
  {
    path: '/open/:slug',
    host: 'product',
    title: 'Card Resolver',
    description: 'Logs scan/tap event, resolves destination, redirects to public site.',
    status: 'live',
    dynamic: true,
  },
  {
    path: '/open/:slug/:action',
    host: 'product',
    title: 'Card Action Resolver',
    description: 'Deep card action. Resolves to subdomain + action path.',
    status: 'live',
    dynamic: true,
  },
  {
    path: '/login',
    host: 'product',
    title: 'Login',
    description: 'Shared auth entry.',
    status: 'planned',
  },
  {
    path: '/privacy',
    host: 'product',
    title: 'Privacy Policy',
    description: 'Shared legal.',
    status: 'planned',
  },
  {
    path: '/terms',
    host: 'product',
    title: 'Terms of Service',
    description: 'Shared legal.',
    status: 'planned',
  },
];

// ─── *.solokit.app routes ───

export const KIT_ROUTES: RouteEntry[] = [
  {
    path: '/',
    host: 'kit',
    title: 'Kit Home',
    description: 'Main public landing page for the person/business/event.',
    status: 'planned',
    dynamic: true,
  },
  {
    path: '/about',
    host: 'kit',
    title: 'About',
    description: 'Short profile, statement, intro.',
    status: 'planned',
  },
  {
    path: '/resume',
    host: 'kit',
    title: 'Resume',
    description: 'Resume page.',
    status: 'planned',
  },
  {
    path: '/projects',
    host: 'kit',
    title: 'Projects',
    description: 'Project index.',
    status: 'planned',
  },
  {
    path: '/project/:projectSlug',
    host: 'kit',
    title: 'Project Detail',
    description: 'Individual project page.',
    status: 'planned',
    dynamic: true,
  },
  {
    path: '/study',
    host: 'kit',
    title: 'Study',
    description: 'Study or practice page.',
    status: 'planned',
  },
  {
    path: '/contact',
    host: 'kit',
    title: 'Contact',
    description: 'Contact or inquiry page.',
    status: 'planned',
  },
  {
    path: '/links',
    host: 'kit',
    title: 'Links',
    description: 'Compact link set for mobile/quick handoff.',
    status: 'planned',
  },
  {
    path: '/book',
    host: 'kit',
    title: 'Book',
    description: 'Booking route for service use cases.',
    status: 'planned',
  },
  {
    path: '/buy',
    host: 'kit',
    title: 'Buy',
    description: 'Purchase route for product use cases.',
    status: 'planned',
  },
  {
    path: '/rsvp',
    host: 'kit',
    title: 'RSVP',
    description: 'RSVP route for event use cases.',
    status: 'planned',
  },
  {
    path: '/action/:actionKey',
    host: 'kit',
    title: 'Action',
    description: 'Scalable action route. /action/listen, /action/shop, etc.',
    status: 'planned',
    dynamic: true,
  },
];

// ─── All routes ───

export const ALL_ROUTES = [...PLATFORM_ROUTES, ...PRODUCT_ROUTES, ...KIT_ROUTES];

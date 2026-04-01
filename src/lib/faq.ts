/**
 * Generate FAQPage JSON-LD from FAQ items.
 * This file has no 'use client' directive — safe for server components.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQJsonLd(items: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

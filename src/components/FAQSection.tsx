'use client';

import { useState } from 'react';
import type { FAQItem } from '@/lib/faq';

interface FAQSectionProps {
  items: FAQItem[];
  heading?: string;
}

export function FAQSection({ items, heading = 'Frequently asked questions' }: FAQSectionProps) {
  return (
    <div className="max-w-3xl mt-20">
      <h2 className="text-2xl font-bold tracking-tight mb-6">{heading}</h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <FAQRow key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

function FAQRow({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-neutral-100 rounded-xl overflow-hidden hover:border-neutral-200 transition-colors duration-200"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
      >
        <span className="text-sm font-semibold pr-4">{question}</span>
        <span
          className="text-neutral-400 shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? '500px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}


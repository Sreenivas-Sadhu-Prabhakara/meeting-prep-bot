// ─────────────────────────────────────────────────────────────
// PER-PRODUCT CONFIG — each of the 5 sites customizes ONLY this file.
// Everything else (SEO head, sitemap, GA4, JSON-LD) reads from here.
// ─────────────────────────────────────────────────────────────
export const site = {
  // Identity
  name: 'Meeting Prep Bot',
  organization: 'Sreenivas Sadhu',
  tagline: 'Walk into every meeting fully prepped — automatically.',

  // Hosting (GitHub Pages project site)
  domain: 'https://sreenivas-sadhu-prabhakara.github.io',
  base: '/meeting-prep-bot', // MUST match the repo name

  // SEO
  title: 'Meeting Prep Bot — AI Meeting Preparation & Briefings',
  description:
    'Meeting Prep Bot reads your calendar, docs and email to auto-generate a sharp one-page brief before every meeting — attendees, context and talking points.',
  keywords: [
    'AI meeting prep',
    'meeting preparation tool',
    'meeting briefing',
    'calendar AI assistant',
    'pre-meeting brief',
  ],
  ogImage: '/og.png', // 1200x630, lives in /public
  twitter: '', // e.g. '@handle' (optional)

  // Analytics — real GA4 Measurement ID goes here (or leave placeholder)
  ga4Id: 'G-XXXXXXXXXX',

  // Structured data
  jsonLdType: 'SoftwareApplication', // or 'WebApplication'
  appCategory: 'BusinessApplication',
  price: '0', // '0' => free; used in Offer schema
};

// Absolute canonical URL for the homepage (used in <head> + JSON-LD)
export const canonicalRoot = `${site.domain}${site.base}`;

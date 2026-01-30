import { ProposalData } from '../types';

export const mageroProposal: ProposalData = {
  slug: 'magero',
  client: {
    name: 'Magero Consulting',
    tagline: 'Global Brand & Website for a Modern Quantity Surveying Business',
    industry: 'Commercial / Quantity Surveying / EOR',
  },
  date: 'January 2026',
  context: `Magero Consulting is launching as a global commercial quantity surveying business with operations across the UK, South Africa, and UAE. As an RICS-certified practice backed by Magna Group's established recruitment infrastructure, Magero sits at the intersection of traditional QS services and modern workforce solutions.

The business offers three distinct service models: traditional quantity surveying (price work), commercial support (day-rate personnel supply), and an innovative EOR (Employer of Record) platform providing UK clients with quality South African QS talent at significant cost savings.

This is a new venture requiring a complete brand identity and website that communicates professional credibility, global capability, and the unique value proposition of combining traditional expertise with modern delivery models.`,
  opportunity: {
    intro: 'Magero Consulting enters a market dominated by established QS practices while offering something genuinely different — the ability to deliver quality-assured work at competitive rates through its South African operations. The brand and website must:',
    points: [
      'Establish immediate credibility through RICS certification and Magna Group backing',
      'Communicate global reach (UK, SA, UAE) with a unified professional identity',
      'Clearly articulate the three service models without confusion',
      'Support Richard\'s relationship-driven sales approach with strong digital collateral',
      'Position the EOR offering as innovative, not cheap',
    ],
    conclusion: 'The goal is to launch Magero as a serious, credible player from day one — enabling confident networking while building the foundation for future digital lead generation.',
  },
  principles: [
    {
      title: 'Global consistency, local relevance',
      description: 'The brand must work across UK, South Africa, and UAE markets while feeling premium and internationally credible.',
    },
    {
      title: 'Professional credibility is non-negotiable',
      description: 'RICS certification and Magna Group backing should be front and centre. This is a serious business, not a startup experiment.',
    },
    {
      title: 'Clarity over complexity',
      description: 'Three service models can confuse. The website and messaging must make it simple for prospects to understand what they need.',
    },
    {
      title: 'Built for networking, ready for scale',
      description: 'The website supports face-to-face relationship building now, while being structured for SEO and lead generation later.',
    },
  ],
  packages: [
    {
      id: 'brand-only',
      name: 'Brand Identity Package',
      subtitle: 'Complete visual identity for global launch',
      price: 45000,
      currency: 'R',
      includes: [
        'Discovery workshop & brand brief',
        'Logo design (3 concepts, 2 revision rounds)',
        'Primary logo + icon/mark variant',
        'Colour palette (Pantone, CMYK, RGB, HEX)',
        'Typography system (headings, body, accent)',
        'Graphic elements & patterns',
        'Photography style direction',
        'Application examples (business cards, letterhead, email signature)',
        'Logo files (AI, EPS, SVG, PNG all sizes)',
      ],
      deliverable: 'Brand Guidelines Document (25–30 pages)',
    },
    {
      id: 'language',
      name: 'Language & Messaging Guidelines',
      subtitle: 'Critical for compliance-adjacent businesses',
      price: 18000,
      currency: 'R',
      includes: [
        'Brand voice & tone definition',
        'Key messaging framework',
        'Terminology standards',
        'Boilerplate descriptions (short, medium, long)',
        'Do\'s and don\'ts with examples',
        'Service line messaging for each model',
        'UK/SA/UAE regional adaptation notes',
      ],
      deliverable: 'Language Guidelines Document (15–20 pages)',
    },
    {
      id: 'website',
      name: 'Website Design & Development',
      subtitle: 'Custom-coded headless CMS — no templates',
      price: 85000,
      currency: 'R',
      includes: [
        'Custom website design (not template-based)',
        'Headless CMS architecture',
        'Mobile-first responsive development',
        'Full site structure (Home, About, Services, Industries, Locations, Insights, Careers, Contact)',
        'Contact forms with Zoho CRM integration',
        'SEO optimisation (meta, schema markup, sitemap)',
        'Google Analytics 4 integration',
        'SSL certificate',
        'Cookie consent (GDPR/POPIA compliant)',
        'Content management training',
        '30-day post-launch support',
      ],
      deliverable: 'Live website on your domain',
    },
  ],
  bundles: [
    {
      id: 'brand-bundle',
      name: 'Complete Brand Package',
      subtitle: 'Brand Identity + Language Guidelines',
      price: 63000,
      originalPrice: 63000,
      currency: 'R',
      savings: 0,
      includes: [
        'Full Brand Identity Package',
        'Language & Messaging Guidelines',
        'Cohesive visual and verbal identity',
        'Ready for website development or agency handoff',
      ],
    },
    {
      id: 'full-bundle',
      name: 'Brand + Website Launch Package',
      subtitle: 'Everything you need to launch Magero',
      price: 148000,
      originalPrice: 148000,
      currency: 'R',
      savings: 0,
      recommended: true,
      includes: [
        'Full Brand Identity Package',
        'Language & Messaging Guidelines',
        'Complete Website Design & Development',
        'Zoho CRM integration',
        'SEO foundation for future growth',
        'End-to-end launch support',
      ],
    },
  ],
  recommendation: {
    packageName: 'Brand + Website Launch Package',
    reason: 'For a new business launch, starting with a fragmented approach creates inefficiency and inconsistency. The Brand + Website Launch Package ensures Magero enters the market with complete, cohesive collateral — enabling confident networking from day one while building the foundation for digital lead generation as the business scales.',
  },
  phases: [
    {
      name: 'Phase 1: Brand Identity',
      description: 'Discovery, logo design, brand guidelines, and language framework.',
      timeline: '3–4 weeks',
    },
    {
      name: 'Phase 2: Website Design',
      description: 'UX/UI design, homepage, and key page layouts.',
      timeline: '2–3 weeks (after brand approval)',
    },
    {
      name: 'Phase 3: Website Development',
      description: 'Custom build, integrations, testing, and launch.',
      timeline: '3–4 weeks',
    },
  ],
  caseStudies: [
    {
      name: '2Data',
      description: 'UK B2B SaaS — full rebrand and custom headless website',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cc1b6c6c4162c862766d10/a03275261_2DataLogo.png',
    },
    {
      name: 'Retail Capital',
      description: 'Financial services brand & language system (acquired by TymeBank)',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cc1b6c6c4162c862766d10/ebc459996_Retail_Capital_with_TymeBank_logo_WHITE.png',
    },
    {
      name: 'FinGlobal',
      description: 'Complete rebrand for financial emigration specialists (acquired by Momentum)',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cc1b6c6c4162c862766d10/d240ec36e_22.png',
    },
  ],
  formFields: {
    packageOptions: [
      'Brand Identity Package Only',
      'Language & Messaging Guidelines Only',
      'Website Design & Development Only',
      'Complete Brand Package (Brand + Language)',
      'Brand + Website Launch Package (Recommended)',
    ],
  },
};

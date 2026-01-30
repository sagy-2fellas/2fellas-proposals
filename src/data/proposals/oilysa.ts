import { ProposalData } from '../types';

export const oilysaProposal: ProposalData = {
  slug: 'oilysa',
  client: {
    name: 'OILY SA',
    tagline: 'Strategic Brand & Marketing System for a B2B Industrial Business',
    industry: 'B2B Industrial / Lubricants',
  },
  date: 'February 2026',
  context: `OILY SA is an established B2B lubricant importer and distributor operating across agriculture, mining, construction, transport, and industrial sectors. With over 8 years in the market, the business has built strong product credibility, national distribution capability, and trusted customer relationships — primarily driven by sales-led growth and word-of-mouth.

However, OILY SA has never had a formalised marketing or brand system. As a result, messaging, visual identity, website, and social channels have evolved inconsistently over time.

This engagement is not about "rebranding for the sake of it." It is about creating cohesion, clarity, and credibility — aligning how the business looks, sounds, and presents itself with the quality and professionalism of the operation behind it.`,
  opportunity: {
    intro: 'OILY SA competes directly with global oil majors (Shell, BP, Castrol, Engen) while operating with a leaner, more personalised service model. The opportunity is to formalise this advantage into a clear, defensible brand and marketing system that:',
    points: [
      'Presents OILY SA as credible and premium next to global competitors',
      'Clearly articulates why customers choose OILY SA (consistency, service, responsiveness)',
      'Creates alignment across sales, website, social media, and customer communication',
      'Supports future lead generation via website and LinkedIn without disrupting current sales processes',
    ],
    conclusion: 'The goal is not to turn OILY SA into a corporate giant — but to ensure it looks and communicates like the serious operator it already is.',
  },
  principles: [
    {
      title: 'Brand supports sales — it doesn\'t replace it',
      description: 'The brand and marketing system must strengthen the existing sales-led model, not disrupt it. Clarity helps sales teams sell with confidence.',
    },
    {
      title: 'Consistency builds trust',
      description: 'In industrial and B2B environments, inconsistency signals risk. Every touchpoint should reinforce reliability and competence.',
    },
    {
      title: 'Practical over performative',
      description: 'No unnecessary complexity, heavy documentation, or corporate theatre. Only what is useful, usable, and sustainable.',
    },
    {
      title: 'Credibility beats creativity',
      description: 'The brand should feel deliberate, grounded, and professional — not flashy or trend-driven.',
    },
  ],
  packages: [
    {
      id: 'basic',
      name: 'Basic Brand Alignment',
      subtitle: 'For immediate consistency and credibility',
      price: 45000,
      currency: 'R',
      includes: [
        'Brand review & alignment workshop',
        'Core brand positioning summary (internal-facing)',
        'Logo usage cleanup & basic refinement (no full redesign)',
        'Core colour palette & typography selection',
        'Basic visual direction (imagery & graphic style)',
        'Simplified tone of voice guidance',
        'Email signature template',
        'Social media profile alignment (LinkedIn + Facebook)',
      ],
      deliverable: 'Brand Alignment Pack (10–15 pages)',
    },
    {
      id: 'standard',
      name: 'Standard Brand & Marketing Foundation',
      subtitle: 'For cohesion and professional alignment',
      price: 85000,
      currency: 'R',
      includes: [
        'Brand positioning & messaging framework',
        'Logo refinement or evolution (if required)',
        'Logo suite & usage rules',
        'Colour palette & typography system',
        'Visual style direction (imagery, graphics)',
        'Tone of voice & communication principles',
        'Website content structure & messaging outline',
        'Social media look & feel starter kit (LinkedIn + Facebook)',
        'Company profile content & layout guidance',
        'Email signature template',
      ],
      deliverable: 'Brand & Marketing Guidelines document (20–30 pages)',
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Brand, Marketing & Website Strategy System',
      subtitle: 'Designed for OILY SA\'s next growth phase',
      price: 125000,
      currency: 'R',
      recommended: true,
      includes: [
        'Everything in Standard, plus:',
        'Market & competitor analysis (local + international)',
        'Refined positioning against oil majors',
        'Advanced messaging system for sales, website, and LinkedIn',
        'Website UX & structure strategy (lead-focused, not eCommerce)',
        'SEO foundations & keyword strategy (industrial/B2B focused)',
        'LinkedIn content themes & posting framework',
        'Sales enablement messaging (what to say, what not to say)',
        'Photography & visual direction for on-site and operational imagery',
        'Extended applications: presentations, internal documents, templates',
      ],
      deliverable: 'Full brand & marketing system (30–45 pages), Website strategy & structure document, Competitor & positioning report',
    },
    {
      id: 'strategy-only',
      name: 'Communication Strategy & Messaging Framework',
      subtitle: 'Strategic foundation for growth',
      price: 65000,
      currency: 'R',
      strategyOnly: true,
      includes: [
        'Strategic Context — Market and competitive overview, key commercial challenges',
        'Brand Positioning — Category definition, target audience, positioning statement',
        'Value Proposition — Core brand promise, proof points, reasons to believe',
        'Brand Narrative & Messaging — Strategic brand story, messaging hierarchy, tone of voice',
        'Brand & Offer Structure — Product/service clarity, offer hierarchy and naming logic',
        'Website & Commercial Translation — Website role definition, user journeys, content priorities',
        'Strategic Recommendations — Immediate priorities, key risks, clear next steps',
      ],
      deliverable: 'Brand Strategy Document (PDF), Positioning and messaging framework, Execution roadmap',
    },
  ],
  bundles: [
    {
      id: 'foundation-bundle',
      name: 'Foundation Bundle',
      subtitle: 'Brand + Communication Strategy',
      price: 135000,
      originalPrice: 150000,
      currency: 'R',
      savings: 15000,
      includes: [
        'Standard Brand & Marketing Foundation',
        'Communication Strategy & Messaging Framework',
        'Integrated positioning and messaging system',
        'Sales-facing value propositions',
        'Website messaging outline',
        'LinkedIn content principles',
      ],
    },
    {
      id: 'complete-bundle',
      name: 'Complete System Bundle',
      subtitle: 'Everything you need for market leadership',
      price: 170000,
      originalPrice: 190000,
      currency: 'R',
      savings: 20000,
      recommended: true,
      includes: [
        'Comprehensive Brand, Marketing & Website Strategy System',
        'Communication Strategy & Messaging Framework',
        'Market & competitor analysis',
        'Complete positioning and messaging architecture',
        'Sales enablement & LinkedIn strategy',
        'Website UX & SEO strategy',
        'Full documentation',
      ],
    },
  ],
  recommendation: {
    packageName: 'Comprehensive Brand, Marketing & Website Strategy System',
    reason: 'Given OILY SA\'s maturity, competitive landscape, and desire for long-term cohesion, we recommend the Comprehensive Brand, Marketing & Website Strategy System. This ensures the fundamentals are correct before any website rebuild, SEO spend, or increased LinkedIn activity — preventing fragmented execution later.',
  },
  phases: [
    {
      name: 'Phase 1: Brand & Marketing System',
      description: 'Strategy, positioning, visual identity, messaging, and documentation.',
      timeline: '6–8 weeks (dependent on feedback cycles)',
    },
    {
      name: 'Phase 2: Website Design & Development (Quoted Separately)',
      description: 'Strategic website built to support credibility and inbound leads — not a brochure site.',
      timeline: '2–3 months',
    },
  ],
  caseStudies: [
    {
      name: 'Retail Capital',
      description: 'Financial services brand & language system',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cc1b6c6c4162c862766d10/ebc459996_Retail_Capital_with_TymeBank_logo_WHITE.png',
    },
    {
      name: 'FinGlobal',
      description: 'Complete rebrand. Acquired by Momentum.',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cc1b6c6c4162c862766d10/d240ec36e_22.png',
    },
    {
      name: '2Data',
      description: 'B2B SaaS rebrand and custom website',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cc1b6c6c4162c862766d10/a03275261_2DataLogo.png',
    },
    {
      name: 'Fairtrade Africa',
      description: 'Multi-country strategy-led campaign',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cc1b6c6c4162c862766d10/57345c1d5_fairtradeafricalogo.png',
    },
  ],
  formFields: {
    packageOptions: [
      'Communication Strategy Only',
      'Basic Brand Alignment',
      'Standard Brand & Marketing Foundation',
      'Comprehensive Brand, Marketing & Website Strategy System',
      'Foundation Bundle',
      'Complete System Bundle',
    ],
  },
};

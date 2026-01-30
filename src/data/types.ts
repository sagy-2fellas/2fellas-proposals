export interface ProposalData {
  slug: string;
  client: {
    name: string;
    tagline: string;
    industry: string;
  };
  date: string;
  context: string;
  opportunity: {
    intro: string;
    points: string[];
    conclusion: string;
  };
  principles: {
    title: string;
    description: string;
  }[];
  packages: Package[];
  bundles?: Bundle[];
  recommendation: {
    packageName: string;
    reason: string;
  };
  phases: {
    name: string;
    description: string;
    timeline: string;
  }[];
  caseStudies: {
    name: string;
    description: string;
    logo?: string;
  }[];
  formFields?: {
    packageOptions: string[];
  };
}

export interface Package {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  currency: string;
  recommended?: boolean;
  strategyOnly?: boolean;
  includes: string[];
  deliverable: string;
}

export interface Bundle {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  currency: string;
  savings: number;
  recommended?: boolean;
  includes: string[];
}

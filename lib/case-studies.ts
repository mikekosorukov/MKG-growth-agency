export interface StudyMeta {
  slug: string;
  headline: string;
  company: string;
  role: string;
  dateRange: string;
  cardDescription?: string;
  cardImage?: string;
  tags: string[];
  logo?: string;
  website?: string;
  companyType?: string;
  companyStage?: string;
  teamSize?: string;
  engagement?: string;
  funding?: string;
  skills?: string[];
}

const caseStudies: StudyMeta[] = [
  {
    slug: 'aqua-cloud',
    headline: '$1.2M in net-new qualified pipeline in under 3 months',
    company: 'aqua cloud',
    role: 'Growth Advisor',
    dateRange: '2024 – 2025',
    cardDescription:
      'aqua cloud is an early-stage B2B SaaS company with a strong product but an unoptimized go-to-market motion.',
    tags: ['B2B SaaS', 'Product-Led Sales', 'Pipeline Generation'],
    logo: '/case-studies/aqua-cloud/logo.png',
    website: 'aquacloud.io',
    companyType: 'B2B SaaS',
    companyStage: 'Early growth',
    teamSize: '10–50',
    engagement: 'Growth Advisor',
    skills: ['B2B SaaS', 'Product-Led Sales', 'Pipeline Generation'],
  },
  {
    slug: 'jet-marketplace',
    headline: 'Customer churn reduced by 30% in three months',
    company: 'Jet',
    role: 'Growth Advisor',
    dateRange: '2020–2022',
    cardDescription:
      'Jet is a growth-stage marketplace with ~110 employees experiencing high early customer churn.',
    tags: ['Marketplace', 'Churn Reduction', 'Customer Success'],
    logo: '/jetlogo2.png',
    website: 'jetadmin.io',
    companyType: 'AI & B2B SaaS',
    companyStage: '2019, US',
    teamSize: '8',
    engagement: 'Growth Lead',
    funding: 'Seed, Y Combinator',
    skills: ['Churn Reduction', 'Customer Success', 'Marketplace Growth'],
  },
  {
    slug: 'ai-product-activation',
    headline: '370% revenue growth Year-over-Year',
    company: 'B2B SaaS',
    role: 'Growth Advisor',
    dateRange: '2024 – 2025',
    cardDescription:
      'Growth-stage B2B SaaS: go-to-market and product experience work that compounded into 370% revenue growth year-over-year.',
    cardImage: '/outcomes_3.png',
    tags: ['B2B SaaS', 'Product-led', 'Activation'],
    logo: '/outcomes_3.png',
    companyType: 'B2B SaaS',
    companyStage: 'Growth stage',
    teamSize: '50–200',
    engagement: 'Product & growth',
    funding: 'Series A+',
    skills: ['Activation', 'Onboarding', 'Product-led growth'],
  },
];

export function getAllCaseStudies(): StudyMeta[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): StudyMeta {
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) throw new Error(`Case study not found: ${slug}`);
  return study;
}

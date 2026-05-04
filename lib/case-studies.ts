export interface StudyMeta {
  slug: string;
  headline: string;
  /** Comma-separated labels; rendered as chips matching the home Outcomes section. */
  homepageTagLine: string;
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
  /** Shown after “Founded” value (defaults to US in layout if omitted). */
  companyStageSuffix?: string;
  teamSize?: string;
  engagement?: string;
  funding?: string;
  skills?: string[];
}

const caseStudies: StudyMeta[] = [
  {
    slug: 'aqua-cloud',
    headline: '$1.2M in net-new qualified pipeline in under 3 months',
    homepageTagLine: 'Growth-stage, GTM, Engineering',
    company: 'aqua cloud',
    role: 'Growth Advisor',
    dateRange: '2024 – 2025',
    cardDescription:
      'An audit revealed the product delivered strong value for a specific segment, but GTM wasn\'t built around it. Refocusing positioning, the website, and sales workflows generated $1.2M in net-new qualified pipeline in 2.5 months.',
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
    slug: 'jet-admin',
    headline: '$150k to $2M ARR Growth in 18 Months',
    homepageTagLine: 'Early-stage, Product-led, PLS',
    company: 'Jet',
    role: 'Growth Advisor',
    dateRange: '2020–2022',
    cardDescription:
      'Revenue wasn\'t keeping pace with strong product signals — ICP, positioning, and the path from website to first value all needed work. Aligning GTM with product onboarding drove ARR growth from $150k to $2M in 1.5 years.',
    tags: ['Marketplace', 'Churn Reduction', 'Customer Success'],
    logo: '/jetlogo2.png',
    website: 'jetadmin.io',
    companyType: 'AI & B2B SaaS',
    companyStage: '2019, US',
    teamSize: '12',
    engagement: 'Growth Lead',
    funding: 'Seed, Y Combinator',
    skills: ['Churn Reduction', 'Customer Success', 'Marketplace Growth'],
  },
  {
    slug: 'rent-ready',
    headline: 'Customer churn reduced by 30%',
    homepageTagLine: 'Scale-up, Product-led',
    company: 'B2B SaaS',
    role: 'Growth Advisor',
    dateRange: '2024 – 2025',
    cardDescription:
      'High early churn traced back to inconsistent supplier quality degrading the customer experience. Rebuilding the quality loop improved the leading churn metric by 40× and reduced churn by 30% in three months.',
    cardImage: '/RRhome.png',
    tags: ['B2B SaaS', 'Product-led', 'Churn Reduction'],
    logo: '/rrlogo.png',
    companyType: 'B2B SaaS',
    companyStage: 'Growth stage',
    teamSize: '50–200',
    engagement: 'Product & growth',
    funding: 'Series A+',
    skills: ['Churn Reduction', 'Product-led growth', 'Customer Experience'],
  },
  {
    slug: 'noclick',
    headline: 'GTM clarity from in-depth diagnostic',
    homepageTagLine: 'B2B SaaS, GTM, Diagnostic',
    company: 'B2B SaaS',
    role: 'Growth Advisor',
    dateRange: '2024 – 2025',
    cardDescription:
      'An in-depth diagnostic surfaced the core GTM constraints holding growth back. The output was a clear, prioritized action plan ready to execute.',
    cardImage: '/noclickhome.png',
    tags: ['B2B SaaS', 'GTM', 'Diagnostic'],
    logo: '/noclickcolor.png',
    companyType: 'B2B SaaS',
    companyStage: 'Growth stage',
    teamSize: '50–200',
    engagement: 'GTM Diagnostic',
    funding: 'Series A+',
    skills: ['GTM Strategy', 'Positioning', 'Diagnostic'],
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

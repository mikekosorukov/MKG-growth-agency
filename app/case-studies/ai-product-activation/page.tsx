import type { Metadata } from 'next';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { getCaseStudyBySlug } from '@/lib/case-studies';

export const metadata: Metadata = {
  title: '370% revenue growth Year-over-Year',
  description:
    'How positioning, onboarding, and the path to first value compounded into 370% year-over-year revenue growth for a growth-stage B2B SaaS.',
};

export default function AIProductActivationCaseStudyPage() {
  const study = getCaseStudyBySlug('ai-product-activation');

  return (
    <CaseStudyLayout
      study={study}
      heroImage="/outcomes_3.png"
      nextCaseStudy={{
        href: '/case-studies/aqua-cloud',
        label: 'aqua cloud – $1.2M in net-new qualified pipeline in under 3 months',
      }}
    >
      <hr />

      <h2>Executive Summary</h2>
      <p>
        Through clearer positioning, a tighter journey from first touch to first value, and
        product-side improvements to onboarding and activation, revenue grew 370% year-over-year.
      </p>

      <p>
        <em>Additional sections and detail can be added here as the narrative is finalized.</em>
      </p>
    </CaseStudyLayout>
  );
}

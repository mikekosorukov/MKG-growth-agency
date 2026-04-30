import type { Metadata } from 'next';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { getCaseStudyBySlug } from '@/lib/case-studies';

export const metadata: Metadata = {
  title: 'GTM clarity from in-depth diagnostic',
  description:
    'An in-depth diagnostic that surfaced the core GTM constraints and delivered a clear, prioritized action plan.',
};

export default function GTMDiagnosticCaseStudyPage() {
  const study = getCaseStudyBySlug('gtm-diagnostic');

  return (
    <CaseStudyLayout
      study={study}
      heroImage="/noclickhome.png"
      nextCaseStudy={{
        href: '/case-studies/ai-product-activation',
        label: 'B2B SaaS – 370% revenue growth Year-over-Year',
      }}
    >
      <hr />

      <h2>Executive Summary</h2>
      <p>
        An in-depth diagnostic surfaced the core GTM constraints and delivered a clear, prioritized
        action plan that gave the team full clarity on where to focus.
      </p>

      <p>
        <em>Additional sections and detail can be added here as the narrative is finalized.</em>
      </p>
    </CaseStudyLayout>
  );
}

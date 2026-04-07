import type { Metadata } from 'next';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import Callout from '@/components/mdx/Callout';

export const metadata: Metadata = {
  title: 'aqua cloud – $1.2M in net-new qualified pipeline in under 3 months',
  description:
    'aqua cloud is an early-stage B2B SaaS company with a strong product but an unoptimized go-to-market motion. By refocusing positioning and restructuring sales workflows, we generated $1.2M in net-new qualified pipeline in 2.5 months.',
};

export default function AquaCloudCaseStudyPage() {
  const study = getCaseStudyBySlug('aqua-cloud');

  return (
    <CaseStudyLayout
      study={study}
      nextCaseStudy={{
        href: '/case-studies/jet-marketplace',
        label: 'Jet – Customer churn reduced by 30% in three months',
      }}
    >
      <hr />

      <h2>Executive Summary</h2>
      <p>
        aqua cloud is an early-stage B2B SaaS company with a strong product but an unoptimized
        go-to-market motion. By refocusing positioning on a high-fit customer segment, rebuilding
        the website conversion flow, and restructuring sales workflows, we generated $1.2M in
        net-new qualified pipeline in just 2.5 months.
      </p>

      <Callout type="insight">
        The core issue wasn&apos;t the product — it was that aqua cloud was selling to everyone
        and converting no one. Narrowing the ICP unlocked every other lever.
      </Callout>

      <h2>The Challenge</h2>
      <p>
        When we first engaged, aqua cloud had strong inbound interest but a leaky conversion
        funnel. Demos were being booked but few were converting to paid. The sales team was
        spending most of its time on low-fit leads with no clear qualification criteria.
      </p>
      <ul>
        <li>No clear ICP definition beyond firmographic data</li>
        <li>Website messaging too generic — speaking to everyone, resonating with no one</li>
        <li>Sales process unstructured, no qualification framework</li>
        <li>Marketing and sales working in silos with no shared language</li>
      </ul>

      <h2>The Approach</h2>

      <h3>1. ICP Sharpening</h3>
      <p>
        We ran a deep customer analysis across existing accounts to identify the highest-LTV
        segment. This revealed a tight cluster: Series A–B SaaS companies with a cloud security
        mandate but no dedicated SecOps headcount — teams that needed aqua cloud&apos;s automation
        most acutely and had budget authority to act quickly.
      </p>

      <h3>2. Website Conversion Rebuild</h3>
      <p>
        Repositioned the homepage around the sharpened ICP pain point. Rewrote the
        above-the-fold copy, restructured the demo CTA flow, and added social proof targeted
        at the segment. The goal was to make high-fit visitors feel immediately understood
        and low-fit visitors self-select out.
      </p>

      <h3>3. Sales Workflow Restructure</h3>
      <p>
        Introduced a qualification framework (adapted MEDDIC) to score inbound leads before
        investing demo time. Built a lightweight scoring layer in CRM that flagged high-fit
        leads automatically. This freed up roughly 40% of sales bandwidth previously lost
        to low-fit discovery calls.
      </p>

      <Callout type="quote">
        &ldquo;Within six weeks of the repositioning, our demo-to-proposal rate went from 18%
        to 41%.&rdquo; — Head of Sales, aqua cloud
      </Callout>

      <h2>Results</h2>
      <p>
        Over the 2.5-month engagement we tracked the following outcomes against the baseline
        from the 90 days prior:
      </p>
      <ul>
        <li><strong>$1.2M</strong> in net-new qualified pipeline generated</li>
        <li><strong>41%</strong> demo-to-proposal conversion rate (up from 18%)</li>
        <li><strong>3×</strong> increase in high-fit inbound leads month-over-month</li>
        <li>Average sales cycle shortened by 12 days</li>
        <li>Sales team capacity reclaimed: ~40% of time redirected to high-fit accounts</li>
      </ul>
    </CaseStudyLayout>
  );
}

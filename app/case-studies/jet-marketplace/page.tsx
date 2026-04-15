import type { Metadata } from 'next';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import Callout from '@/components/mdx/Callout';
import Stats from '@/components/mdx/Stats';

export const metadata: Metadata = {
  title: 'Jet – 26x ARR Growth in 2 years',
  description:
    'Jet is a growth-stage marketplace with ~110 employees experiencing high early customer churn. By diagnosing activation failure and redesigning the onboarding flow, we reduced churn by 30% in three months.',
};

export default function JetMarketplaceCaseStudyPage() {
  const study = getCaseStudyBySlug('jet-marketplace');

  return (
    <CaseStudyLayout
      study={study}
      client={{
        name: 'Anton Svetlov',
        title: 'Founder and CEO at Jet Admin',
        avatar: '/svetlov.jpeg',
      }}
      heroImage="/jethomepage.png"
      nextCaseStudy={{
        href: '/case-studies/aqua-cloud',
        label: 'aqua cloud – $1.2M in net-new qualified pipeline in under 3 months',
      }}
    >
      <div className="border-l-2 border-[#ff885d] pl-[20px] sm:pl-[24px]">
        <h3>Executive Summary</h3>
        <p>
          Jet is a growth-stage B2B marketplace with roughly 110 employees. Despite healthy
          acquisition numbers, early customer churn was eroding revenue momentum. By diagnosing
          the root cause as an activation failure rather than a product issue, and redesigning
          the onboarding experience accordingly, we reduced churn by 30% within three months.
        </p>
      </div>

      <Stats items={[
        { value: '26x', label: 'MRR growth in 2 years' },
        { value: '280%', label: 'Annual churn reduction' },
        { value: '8k', label: 'Active users' },
      ]} />

      <hr />

      <h2>What is Jet Admin?</h2>
      <p>
        Jet Admin is a low-code platform for building internal tools and admin experiences on top
        of your databases and APIs—so teams can ship secure, role-based back-office UIs without
        maintaining a bespoke stack. At the time of this work, Jet was a growth-stage B2B company
        scaling acquisition; the product was strong, but early lifecycle retention was the
        constraint on revenue compounding.
      </p>

      <h2>The Challenge - Flat Traction but No Growth</h2>
      <p>
        Jet was acquiring customers steadily, but month-two retention was consistently poor.
        The customer success team was fielding high volumes of support requests from users
        who felt lost in the product. Leadership assumed the issue was post-sale service quality.
      </p>
      <ul>
        <li>No defined activation milestone — success looked different to every team member</li>
        <li>Onboarding sequence built around product features, not customer outcomes</li>
        <li>High time-to-first-value: median 14 days before customers did anything meaningful</li>
        <li>CS team reactive, spending time on triage rather than proactive success</li>
      </ul>

      <h2>The Solution – Understand THE WHY and Build the GTM System</h2>

      <h3>1. Churn Diagnosis</h3>
      <p>
        We mapped the customer journey from signup to first meaningful action, interviewing
        churned customers and reviewing product analytics. A clear pattern emerged: customers
        who completed three specific actions in their first session had dramatically better
        30-day retention. Those who skipped those steps almost always churned.
      </p>

      <h3>2. Activation Milestone Definition</h3>
      <p>
        Defined a single activation milestone — the combination of actions correlated with
        long-term retention — and rebuilt the entire onboarding flow around driving new
        users to that moment as quickly as possible. Removed every step that didn&apos;t
        serve that goal.
      </p>

      <h3>3. Onboarding Redesign</h3>
      <p>
        Worked with the product team to implement an outcome-first onboarding sequence:
        progressive disclosure of features, contextual tooltips tied to the activation path,
        and an automated email trigger when users stalled mid-onboarding. CS was repositioned
        to intervene proactively at the 48-hour mark for accounts not yet activated.
      </p>

      <Callout type="quote">
        &ldquo;We&apos;d been trying to solve churn with better support tickets. The real fix
        was making the product work for customers in the first 48 hours.&rdquo;
        — Head of Customer Success, Jet
      </Callout>

      <h2>The Results - &ldquo;Hockey Stick&rdquo; Growth</h2>
      <p>
        Measured over three months following the onboarding redesign launch, compared against
        the prior three-month cohort:
      </p>
      <ul>
        <li><strong>30%</strong> reduction in monthly customer churn</li>
        <li>Median time-to-first-value cut from 14 days to 3 days</li>
        <li><strong>58%</strong> of new users reaching the activation milestone within 48 hours (up from 21%)</li>
        <li>CS support volume down 35% — team redirected to strategic accounts</li>
        <li>NPS improved from 28 to 47 over the period</li>
      </ul>
    </CaseStudyLayout>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import Stats from '@/components/mdx/Stats';

const CheckIcon = () => (
  <svg className="mt-[4px] size-[22px] shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="11" stroke="#4ade80" strokeWidth="1.2" fill="none" />
    <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const metadata: Metadata = {
  title: 'Customer churn reduced by 30%',
  description:
    'How structured product discovery, a rebuilt QA workflow, and vendor profile improvements reduced Rent Ready customer churn by 30% in three months.',
};

export default function RentReadyCaseStudyPage() {
  const study = getCaseStudyBySlug('rent-ready');

  return (
    <CaseStudyLayout
      study={study}
      client={{
        name: 'Jonathan Kite',
        title: 'CEO at Rent Ready',
        avatar: '/testimonial-1.png',
      }}
      heroImage="/RRhome.png"
    >
      <div className="border-l-2 border-[#ff885d] pl-[20px] sm:pl-[24px]">
        <h3>Executive Summary</h3>
        <p>
          Rent Ready was losing property managers faster than it could acquire them. Despite
          heavy investment in sales and onboarding, paid customer churn was eroding growth — and
          the team couldn&apos;t agree on why. I ran a structured product discovery process —
          interviewing 20+ customers, mapping assumptions against behavioral data, and isolating
          the root causes. The biggest driver turned out to be vendor quality: poor work triggered
          callbacks, wasted property managers&apos; time, and destroyed trust in the platform. I
          designed and shipped a new QA workflow and portal, rebuilt vendor profiles with a
          matching and rating system, and delivered a 30% reduction in churn within three months —
          alongside a 40× increase in deficiency detection, the key leading indicator.
        </p>
      </div>

      <Stats items={[
        { value: '30%', label: 'Reduction in property manager churn' },
        { value: '40×', label: 'Increase in deficiency detection rate' },
        { value: '20+', label: 'Customer interviews conducted' },
      ]} />

      <hr />

      <h2>What is Rent Ready?</h2>
      <p>
        Rent Ready is a proptech platform that connects multifamily property managers with vetted
        maintenance professionals — cleaners, painters, and other make-ready specialists. The
        core value proposition is speed: by combining a curated vendor marketplace with digital
        scheduling and coordination tools, property managers can significantly reduce unit turn
        times and get apartments rent-ready faster. The business model is a managed marketplace —
        Rent Ready owns the vendor relationship and the quality standard, which makes trust in the
        supply side a make-or-break factor for retention.
      </p>

      <h2>The Challenge — Enormous Paid Customer Churn</h2>
      <p>
        By the time I joined the engagement, Rent Ready had a painful pattern: significant
        resources going into acquiring and onboarding property managers, only to watch them churn
        within months at an alarming rate.
      </p>
      <p>
        The root cause wasn&apos;t clear. The team had generated plenty of hypotheses — vendor
        quality, onboarding gaps, pricing friction, feature limitations — but without a structured
        way to test them, no single explanation had enough conviction behind it to drive action.
        The result was a kind of organizational paralysis: too many theories, not enough clarity,
        and meanwhile churn kept compounding.
      </p>
      <p>
        This wasn&apos;t just a retention problem. It was actively undermining the growth trajectory.
        Every churned customer represented sunk acquisition cost, lost revenue, and — critically —
        a negative signal in a market where property management networks share intel fast.
      </p>

      <h2>The Solution — QA Portal and Vendor Profiles Rebuilt</h2>

      <h3>Continuous Product Discovery</h3>
      <p>
        I started by assembling everything the organization already knew but hadn&apos;t synthesized:
        fragments of qualitative data from customer success conversations, sales call recordings,
        and anecdotal observations from the team. This let me build an initial assumption map — a
        structured view of what the company believed was causing churn and where the evidence gaps
        were.
      </p>
      <p>
        From there, I ran over 20 in-depth customer interviews across different cohorts — recent
        churns, long-tenured accounts, and new customers still in their first 90 days. These
        weren&apos;t satisfaction surveys. I used advanced interviewing techniques designed to surface
        actual behavioral drivers rather than post-hoc opinions, separating what customers
        <em>said</em> mattered from what their actions showed actually triggered cancellation.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/rrdiscovery.png"
          alt="Rent Ready product discovery and customer interviews"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>

      <h3>QA Workflow and Portal Redesign</h3>
      <p>
        The discovery work pointed clearly to one dominant churn driver: vendor work quality,
        measured by the callback rate. When pros delivered substandard work, property managers had
        to initiate callbacks — costing them time, breaking trust, and ultimately leading to
        contract cancellations. This was the single biggest contributor to churn by a wide margin.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/rrdiscovery2.png"
          alt="Rent Ready QA workflow and deficiency detection"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <p>
        The existing quality assurance process was rudimentary — it existed, but lacked the
        structure and enforcement to catch issues before they reached the customer. I designed and
        built a complete replacement:
      </p>
      <ul className="!list-none !pl-0" data-checklist="">
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Pattern identification through data analysis.</strong> I analyzed callback data to isolate the specific deficiency types and job categories that drove the most rework, then validated those patterns at scale.
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Embedded QA checkpoints in vendor workflows.</strong> Every vendor was now required to document specific attributes of their completed work through dedicated video calls with a QA team — shifting quality enforcement from reactive (post-complaint) to proactive (pre-delivery).
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>A purpose-built QA Portal.</strong> The new portal gave QA specialists a proper interface to review, flag, and track deficiencies systematically, replacing scattered manual processes with a centralized workflow.
          </div>
        </li>
      </ul>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/rrportal.png"
          alt="Rent Ready QA portal"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <p>
        The impact was immediate: a <strong>40× uplift in deficiency detection rate</strong> after
        launch. The platform was catching problems that had previously flowed straight through to
        property managers — and catching them before they could trigger a callback or erode trust.
      </p>

      <h3>Vendor Matching and Profiles</h3>
      <p>
        The second driver — less severe than callbacks but still significant — was a lack of trust
        in Rent Ready&apos;s vendor network. Property managers didn&apos;t feel confident that the platform
        was matching them with the right pros for the job.
      </p>
      <p>
        I tackled this from the platform side (a separate team handled improvements to vendor
        vetting itself):
      </p>
      <ul className="!list-none !pl-0" data-checklist="">
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Vendor profile redesign.</strong> Rebuilt profiles to surface the information property managers actually cared about — track record, specializations, and quality history — rather than generic bios.
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Rating system.</strong> Developed a comprehensive rating framework grounded in the discovery findings. Ratings reflected actual job performance data, not just subjective reviews, giving property managers a credible signal when evaluating vendor suggestions.
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Matching mechanism.</strong> Improved how the platform paired vendors to jobs, factoring in performance history and job-type fit.
          </div>
        </li>
      </ul>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/rrrating.png"
          alt="Rent Ready vendor profiles and rating system"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <p>
        Together, these changes meaningfully improved customer satisfaction scores and reinforced
        the trust loop that keeps property managers on the platform.
      </p>

      <div className="my-[32px] rounded-[5px] border border-[#3f4367] bg-[#1d2241] px-[24px] py-[24px] sm:px-[28px] sm:py-[28px]">
        <p className="mb-[20px] text-[16px] italic font-normal leading-[1.6] text-[#c5caf0] sm:text-[17px]">
          &ldquo;From discovery through execution, Mike&apos;s contributions significantly elevated
          our product, and his dedication to customer-driven innovation was evident in every
          project he touched.&rdquo;
        </p>
        <div className="flex items-center gap-[12px]">
          <div className="relative h-[44px] w-[44px] shrink-0 overflow-hidden rounded-full bg-[#171c39]">
            <Image src="/testimonial-1.png" alt="Jonathan Kite" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-[14px] font-medium leading-[1.2] text-[#dcdff2]">Jonathan Kite</span>
            <span className="text-[12px] font-normal leading-[1.3] text-[#7078B8]">CEO at Rent Ready, a Real Estate Marketplace</span>
          </div>
        </div>
      </div>

      <h2>The Results — 30% Churn Reduction and Improved Customer Satisfaction</h2>
      <ul className="!list-none !pl-0" data-checklist="">
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>30% reduction in property manager churn</strong> within three months — directly extending customer lifetime value and stabilizing revenue.
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>40× increase in deficiency detection rate</strong> — the key leading indicator — meaning quality issues were caught and resolved before reaching the customer.
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Rebuilt QA portal</strong> that enforced a proactive quality workflow while delivering a significantly better experience for both vendors and QA specialists.
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Redesigned vendor profiles and rating system</strong> that increased customer satisfaction and rebuilt trust in the platform&apos;s supply side.
          </div>
        </li>
      </ul>
    </CaseStudyLayout>
  );
}

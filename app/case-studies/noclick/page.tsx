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
  title: 'GTM clarity from in-depth diagnostic',
  description:
    'A full go-to-market diagnostic for NoClick that mapped use cases, competitive positioning, activation and retention bottlenecks, and a 3-month execution roadmap.',
};

export default function NoclickCaseStudyPage() {
  const study = getCaseStudyBySlug('noclick');

  return (
    <CaseStudyLayout
      study={study}
      client={{
        name: 'Dhruv Yadav',
        title: 'Founder at NoClick',
        avatar: '/dhruv.png',
      }}
      heroImage="/noclickhome.png"
    >
      <div className="border-l-2 border-[#ff885d] pl-[20px] sm:pl-[24px]">
        <h3>Executive Summary</h3>
        <p>
          NoClick is a no-code automation builder taking on Zapier, Make, and n8n with a vision
          to make workflow automation accessible to non-technical users. Despite early sign-ups,
          the product was leaking users at every stage — no meaningful activation, rapid churn,
          and no clear GTM path forward. I ran a full go-to-market diagnostic: mapped use cases
          and competitive positioning, identified the highest-leverage bottlenecks in activation
          and retention, and delivered a comprehensive strategy with a 3-month execution roadmap.
          The founder walked away with full GTM clarity and the confidence to execute in-house.
        </p>
      </div>

      <Stats items={[
        { value: '7', label: 'Major opps identified' },
        { value: '18', label: 'GTM surfaces diagnosed' },
        { value: '1 wk', label: 'Time-to-delivery' },
      ]} />

      <hr />

      <h2>What is NoClick?</h2>
      <p>
        NoClick is a no-code automation builder with an ambitious goal: challenge the incumbents
        — Zapier, Make, and n8n — by making workflow automation genuinely accessible to
        non-technical users, regardless of vertical or technical background.
      </p>
      <p>
        The founder, Dhruv, has spent nearly a decade in the automation space. That experience
        gave him a deep understanding of the friction points builders face with existing tools —
        clunky interfaces, rigid integrations, steep learning curves for anyone outside of
        engineering. NoClick was built to solve those problems from the ground up.
      </p>

      <h2>The Challenge — Leaky Product and No Clear Path Forward</h2>
      <p>
        NoClick had a vision, and it had early traction in the form of sign-ups. What it didn&apos;t
        have was real usage. Users were bouncing at different steps in the product, churning
        within a few sessions, and never reaching the point where automation actually delivered
        value.
      </p>
      <p>
        The symptoms were visible, but the root causes weren&apos;t. As a technical founder, Dhruv had
        the product instincts to build — but not the GTM and growth expertise to diagnose why
        users weren&apos;t sticking around, or how to build a repeatable path from sign-up to retained
        customer. The product was leaking, and without a structured approach to finding and fixing
        the holes, there was no clear way forward.
      </p>

      <h2>The Solution — Full GTM Diagnostic and Execution Roadmap</h2>

      <h3>The Diagnostic</h3>
      <p>
        I started by going deep on three fronts: the product itself, the existing customer data,
        and the competitive landscape.
      </p>
      <p>
        Having significant hands-on experience with no-code automation tools, I was able to
        quickly map NoClick&apos;s key use cases — bucketing jobs to be done, unique advantages, and
        benefits to build a solid foundation for new positioning. I also mapped the competitor
        landscape to identify where NoClick could credibly win against specific alternatives.
      </p>
      <p>
        Dhruv provided customer data, which allowed me to zoom in on the most severe bottlenecks
        in the user journey. From there, I built a comprehensive teardown in Miro covering every
        major surface area:
      </p>
      <ul className="!list-none !pl-0" data-checklist="">
        {[
          'Go-to-market strategy and channel selection',
          'Product activation flow and onboarding friction',
          'Website messaging and conversion gaps',
          'Monetization and packaging structure',
          'Repositioned messaging built on actual use cases, not aspirational positioning',
        ].map((item) => (
          <li key={item} className="flex gap-[10px] !text-[#a5aee9]">
            <CheckIcon />
            <div className="flex-1">{item}</div>
          </li>
        ))}
      </ul>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/noclickteardown.png"
          alt="NoClick GTM diagnostic teardown"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>

      <h3>The Strategy</h3>
      <p>
        Within a week, I shipped a strategy document built entirely on customer and market
        insights — not assumptions. It used the gaps and bottlenecks surfaced in the diagnostic to
        focus NoClick&apos;s limited resources on the highest-leverage opportunities, rather than
        spreading thin across every possible initiative.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/noclickartefacts.png"
          alt="NoClick strategy artifacts"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>

      <h3>The Roadmap</h3>
      <p>
        On top of the Miro teardown and the strategy document, I mapped a 3-month execution
        blueprint — a step-by-step plan Dhruv could follow to execute the GTM strategy without
        hesitation or second-guessing. The roadmap translated strategic priorities into a
        sequenced set of actions, so nothing critical fell through the cracks.
      </p>

      <div className="my-[32px] rounded-[5px] border border-[#3f4367] bg-[#1d2241] px-[24px] py-[24px] sm:px-[28px] sm:py-[28px]">
        <p className="mb-[20px] text-[16px] italic font-normal leading-[1.6] text-[#c5caf0] sm:text-[17px]">
          &ldquo;The diagnostic gave us clarity we had been missing for months — a clear picture
          of where to focus and why. Mike&apos;s ability to cut through the noise and surface the
          highest-leverage GTM priorities was exactly what we needed.&rdquo;
        </p>
        <div className="flex items-center gap-[12px]">
          <div className="relative h-[44px] w-[44px] shrink-0 overflow-hidden rounded-full bg-[#171c39]">
            <Image src="/dhruv.png" alt="Dhruv Yadav" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-[14px] font-medium leading-[1.2] text-[#dcdff2]">Dhruv Yadav</span>
            <span className="text-[12px] font-normal leading-[1.3] text-[#7078B8]">Founder at NoClick</span>
          </div>
        </div>
      </div>

      <h2>The Results — Full GTM Clarity and Early Wins</h2>
      <p>
        The engagement gave Dhruv what he didn&apos;t have before: a clear, evidence-based picture of
        what was broken and exactly what to do about it.
      </p>
      <ul className="!list-none !pl-0" data-checklist="">
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>In-depth diagnostic</strong> with detailed commentary and actionable suggestions across every major GTM and growth surface
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Visual Miro document</strong> with annotated product and website adjustments
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>GTM strategy</strong> that clearly identified which levers to pull to maximize impact with limited resources
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>3-month execution roadmap</strong> that eliminated doubt and gave the founder confidence to run GTM in-house for the next two quarters
          </div>
        </li>
      </ul>
    </CaseStudyLayout>
  );
}

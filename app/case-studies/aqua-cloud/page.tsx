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
  title: 'Aqua Cloud – $1.2M in net-new qualified pipeline in 2.5 months',
  description:
    'Aqua Cloud had stalled after three years of flat revenue. Repositioning around regulated enterprise buyers, redesigning the website and onboarding, and launching an account-based motion generated $1.2M in net-new qualified pipeline.',
};

export default function AquaCloudCaseStudyPage() {
  const study = getCaseStudyBySlug('aqua-cloud');
  const jetStudy = getCaseStudyBySlug('jet-admin');

  return (
    <CaseStudyLayout
      study={study}
      client={{
        name: 'Kirill Chabanov',
        title: 'CMO & COO at aqua cloud',
        avatar: '/testimonial-icon-2.jpeg',
      }}
      heroImage="/aqua_screen.png"
      sidebarStudy={{
        ...jetStudy,
        logo: '/aqua.png',
        company: 'aqua cloud',
        website: 'aqua-cloud.io',
        companyStage: '2019, DE',
        companyStageSuffix: '🇩🇪',
        funding: 'Private equity',
        teamSize: '23',
        dateRange: '9 months, 2023',
      }}
      nextCaseStudy={{
        href: '/case-studies/jet-admin',
        label: 'Jet Admin - $150k to $2M ARR Growth in 18 Months',
      }}
    >
      <div className="border-l-2 border-[#ff885d] pl-[20px] sm:pl-[24px]">
        <h3>Executive Summary</h3>
        <p>
          Aqua Cloud had stalled. Three years of flat revenue, a scattered go-to-market motion,
          and a sales team that couldn&apos;t articulate why their best clients chose them. In a
          2.5-month engagement, I rebuilt the GTM foundation from the ground up — repositioning
          the product around high-fit regulated enterprise buyers, redesigning the website and
          onboarding experience, and standing up an account-based motion to capture high-value
          traffic that was already hitting the site. The result: $1.2M in net-new qualified
          pipeline.
        </p>
      </div>

      <Stats items={[
        { value: '$1.2M', label: 'Net new qualified pipeline' },
        { value: '50+', label: 'High-fit accounts identified per month' },
        { value: '30%', label: 'Sign-up-to-homepage conversion uplift' },
      ]} />

      <hr />

      <h2>What Is Aqua Cloud?</h2>
      <p>
        Aqua Cloud is a test management platform used by software teams to plan, execute, and
        track testing across the development lifecycle. Its strongest differentiators — robust
        data privacy controls, regulatory compliance capabilities, and deep integrations with
        enterprise toolchains — made it uniquely valuable to teams operating in highly regulated
        industries. But for years, that positioning was invisible in how the product was marketed
        and sold.
      </p>

      <h2>The Challenge</h2>
      <p>
        Aqua Cloud&apos;s revenue had flatlined for three consecutive years, and the response was to
        throw effort at everything without a clear thesis for what would work.
      </p>
      <p>
        The team had attempted a pivot to product-led growth, burning engineering and design
        resources on a motion that didn&apos;t match their buyer or deal structure. Meanwhile, the
        sales team was chasing anyone with a budget — no ICP definition, no use-case focus, no way
        to prioritize.
      </p>
      <p>
        Three related products targeting the same market were being marketed and sold completely
        independently, leaving cross-sell and upsell revenue on the table. Worst of all, the
        founders and the sales team couldn&apos;t explain why their best clients had chosen them —
        which meant they couldn&apos;t predictably replicate those wins.
      </p>

      <h2>The Solution — Clear GTM Strategy and an Efficient Growth Engine</h2>

      <h3>Investigating the Root Causes</h3>
      <p>
        I started by mining existing data: sales call recordings, support conversations, and
        customer success tickets. These surfaced a set of initial hypotheses that I then
        pressure-tested through focused customer interviews.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/aquainterv.png"
          alt="Aqua Cloud customer research and interviews"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <p>
        The pattern was clear. There was a fundamental mismatch between who was getting the most
        value from Aqua Cloud and how the product was being positioned. The top 20% of clients —
        the ones with the highest retention, expansion revenue, and satisfaction — shared a very
        specific profile: regulated enterprises looking for a test management solution with strong
        data privacy capabilities and specific integrations. The GTM motion was targeting none of
        this.
      </p>

      <h3>Defining High-Fit ICPs and Core Use Cases</h3>
      <p>
        From the research, I built a unified source of truth — a set of artifacts that mapped each
        ICP to its use cases, connecting the benefits the top 20% were buying for, the
        differentiators that made them pick Aqua Cloud over alternatives, and the channels through
        which these buyers typically acquired similar software. This became the strategic
        foundation that every downstream decision was built on.
      </p>

      <h3>Crafting the New Positioning and Messaging</h3>
      <p>
        With clear ICPs defined, I rebuilt the positioning from scratch — narrowing the focus to
        the specific segments and use cases where Aqua Cloud had a defensible right to win. I
        developed narratives around the jobs these buyers needed done, the unique capabilities
        that made Aqua Cloud the best fit, and the buyer journeys that led them to a decision.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/aquapos.png"
          alt="Aqua Cloud positioning and messaging framework"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <p>
        This messaging framework became the single source of truth across sales, product, and
        customer success — aligning every team around the same customer reality instead of each
        group operating off its own assumptions.
      </p>

      <h3>Designing an Account-Based Marketing Motion</h3>
      <p>
        Analysis of the website traffic revealed something surprising: despite modest overall
        volume, high-fit, high-ACV visitors from target accounts were already landing on the site
        — reading multiple pages, then bouncing without converting.
      </p>
      <p>
        To capture this traffic, I designed an ABM engine that identified visiting companies and
        scored them against our ICP criteria. High-priority matches triggered two parallel
        workflows:
      </p>
      <ul className="!list-none !pl-0" data-checklist="">
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Live conversion flows</strong> — floating chat prompts and instant demo offers surfaced while the visitor was still on-site.
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>High-touch outbound campaigns</strong> — for visitors who didn&apos;t convert immediately, a dedicated sales sequence targeted the right decision-makers at the identified account.
          </div>
        </li>
      </ul>
      <p>
        This motion surfaced 50+ high-profile accounts per month and gave sales a qualified,
        high-intent pipeline they&apos;d never had access to before.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/aquaabm.png"
          alt="Aqua Cloud account-based marketing motion"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>

      <h3>Website Redesign</h3>
      <p>
        Using the new positioning and messaging, I created and redesigned more than 10 pages to
        serve a dual purpose: convert website visitors and function as sales enablement assets
        throughout the deal cycle. New pages were built around specific ICPs and the concerns
        that mattered most in their buying process — regulatory compliance, integration depth,
        and data privacy — rather than generic feature lists.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/aquapages.png"
          alt="Aqua Cloud redesigned website pages"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>

      <h3>Onboarding and Product Dashboard Redesign</h3>
      <p>
        The failed PLG experiment was scrapped in favor of a sales-led strategy, but the early
        product experience still mattered. Poor onboarding had killed several deals in the past —
        prospects would sign up for a trial and churn before ever reaching value.
      </p>
      <p>
        Through usability interviews, I identified the highest-friction points in the dashboard
        and workspace setup flow, then redesigned them to reduce time-to-value. The goal was
        pragmatic: not a self-serve growth loop, but an onboarding experience that removed
        friction from sales-assisted deals.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/aquainterf.png"
          alt="Aqua Cloud onboarding and dashboard redesign"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>

      <h3>GTM Strategy for the Product Suite</h3>
      <p>
        Aqua Cloud didn&apos;t exist in isolation — two adjacent products targeted the same market but
        were marketed and sold as if they were unrelated. This siloed approach left significant
        revenue on the table.
      </p>
      <p>
        Using the market insights and new positioning, I redesigned the customer journey across
        all three products to work as a coordinated system — with cross-sell paths, shared
        messaging, and a unified buyer experience that converted users of one product into paying
        customers of the suite.
      </p>

      <h3>Sales Scripts and Marketing Collateral</h3>
      <p>
        The new messaging was adapted for frontline use. I co-created multi-touch outbound
        workflows for BDRs and sales managers alongside updated scripts — giving the team specific
        language for each ICP segment and a repeatable structure for converting leads into
        pipeline.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/salesscriptsaqua.png"
          alt="Aqua Cloud sales scripts and outbound workflows"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="my-[32px] rounded-[5px] border border-[#3f4367] bg-[#1d2241] px-[24px] py-[24px] sm:px-[28px] sm:py-[28px]">
        <p className="mb-[20px] text-[16px] italic font-normal leading-[1.6] text-[#c5caf0] sm:text-[17px]">
          &ldquo;Thanks to Mike&apos;s work, we had impressive positive changes in how we go to
          market and how our funnel works.&rdquo;
        </p>
        <div className="flex items-center gap-[12px]">
          <div className="relative h-[44px] w-[44px] shrink-0 overflow-hidden rounded-full bg-[#171c39]">
            <Image src="/testimonial-icon-2.jpeg" alt="Kirill Chabanov" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-[14px] font-medium leading-[1.2] text-[#dcdff2]">Kirill Chabanov</span>
            <span className="text-[12px] font-normal leading-[1.3] text-[#7078B8]">CMO &amp; COO at aqua cloud</span>
          </div>
        </div>
      </div>

      <h2>The Results — $1.2M of Net-New Pipeline</h2>
      <p>
        The engagement brought clarity to who Aqua Cloud should be selling to and how —
        redirecting the GTM motion away from individual test managers and toward regulated SMBs
        and enterprises where the product had a defensible competitive advantage.
      </p>
      <ul className="!list-none !pl-0" data-checklist="">
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>$1.2M in net-new qualified pipeline</strong> generated within 2.5 months
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>50+ high-fit accounts identified per month</strong> through the new ABM engine
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>30% uplift in sign-up-to-homepage conversion</strong> from the redesigned onboarding
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>10+ new website pages</strong> built as both conversion and sales enablement assets
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Redesigned onboarding</strong> with a high-converting dashboard and homepage experience
          </div>
        </li>
        <li className="flex gap-[10px] !text-[#a5aee9]">
          <CheckIcon />
          <div className="flex-1">
            <strong>Cross-team alignment</strong> — sales, customer success, and product operating from the same ICP definitions and messaging for the first time
          </div>
        </li>
      </ul>
    </CaseStudyLayout>
  );
}

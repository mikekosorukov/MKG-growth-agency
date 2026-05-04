import type { Metadata } from 'next';
import type { ReactNode } from 'react';
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

const CrossIcon = () => (
  <svg className="mt-[4px] size-[22px] shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="11" stroke="#f87171" strokeWidth="1.2" fill="none" />
    <path d="M9 9L15 15M15 9L9 15" stroke="#f87171" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function IconList({ items, variant }: { items: ReactNode[]; variant: 'check' | 'cross' }) {
  const Icon = variant === 'check' ? CheckIcon : CrossIcon;

  return (
    <ul className="!list-none !pl-0">
      {items.map((item, index) => (
        <li key={index} className="flex gap-[10px] !text-[#a5aee9]">
          <Icon />
          <div className="flex-1">{item}</div>
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = {
  title: 'Jet – $150k to $2M ARR Growth in 18 Months',
  description:
    'Jet is a growth-stage marketplace with ~110 employees experiencing high early customer churn. By diagnosing activation failure and redesigning the onboarding flow, we reduced churn by 30% in three months.',
};

export default function JetMarketplaceCaseStudyPage() {
  const study = getCaseStudyBySlug('jet-admin');

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
        label: 'aqua cloud – $1.2M in net-new qualified pipeline in 3 months',
      }}
    >
      <div className="border-l-2 border-[#ff885d] pl-[20px] sm:pl-[24px]">
        <h3>Executive Summary</h3>
        <p>
          Jet Admin had a functional product, few paying clients, and no clear path to growth.
          Users bounced, paid customers churned within a month, and every deal was a grind. I
          joined as the founding growth hire and diagnosed the root cause: a fundamental mismatch
          between the ICP we were targeting and the users who actually got value from the product.
          I rebuilt the GTM from the ground up — repositioning, JTBD messaging, website redesign,
          and a revamped activation flow that drove a 3.5× improvement in activation. From there,
          I layered on SEO, lifecycle campaigns, pricing restructuring, and product-led sales to
          build a self-reinforcing growth engine. MRR grew more than 10× over a year and a half.
        </p>
      </div>

      <Stats items={[
        { value: '12x', label: 'MRR growth in 18 months' },
        { value: '350%', label: 'Activation rate uplift' },
        { value: '8k', label: 'Active users' },
      ]} />

      <hr />

      <h2>What is Jet Admin?</h2>
      <p>
        Jet Admin started as a Django-based admin panel for back-office operations. Over time, it
        evolved into a no-code/low-code platform for building internal tools and admin panels on
        top of databases and APIs. The company grew steadily, driven by a product-led growth
        motion built from day one and clear positioning in the market.
      </p>
      <p>
        Today, Jet Admin is a hybrid AI/no-code app builder for creating custom business apps —
        vendor portals, internal tools, and CRMs — with a suite of embedded AI tools that let
        users build faster.
      </p>

      <h2>The Challenge — Flat Traction with No Growth</h2>
      <p>
        At the end of 2019, Jet Admin had a functional product and one paying client. Two
        technical co-founders struggled to bring the product to a global market.
      </p>
      <p>
        I joined in September 2019 as the founding generalist growth hire — tasked with building
        commercial traction for a product we all believed was ahead of its time.
      </p>
      <p>
        Despite ongoing sales and marketing effort, every deal felt like an uphill battle.
        Self-serve users churned within the first month. The core problems were clear:
      </p>
      <IconList
        variant="cross"
        items={[
          <><strong>No defined ICP.</strong> The team didn&apos;t know who to target or how to win against alternatives.</>,
          <><strong>Leaky product.</strong> Users bounced at every step. Even those who converted to paid churned quickly.</>,
          <><strong>No scalable acquisition channel.</strong> Multiple channels had been tested, but nothing broke through — it was spray and pray.</>,
          <><strong>Model confusion.</strong> No clarity on whether to invest in sales-led or product-led growth.</>,
          <><strong>Underoptimized monetization.</strong> Pricing and packaging weren&apos;t structured to maximize customer value.</>,
        ]}
      />
      <p>
        In early 2020, after <a href="https://www.ycombinator.com/companies/jet-admin" target="_blank" rel="noopener noreferrer">going through Y Combinator</a>, I found the working go-to-market and
        product growth approach. From there, I never looked back — growing MRR more than 10x
        over a year and a half.
      </p>

      <h2>The Solution — Clear GTM Strategy and an Efficient Growth Engine</h2>

      <h3>Discovery: Identifying What&apos;s Broken</h3>
      <p>
        I started with research. Talked to customers, prospects, and churned users. Analyzed
        target and adjacent markets to find the best way to position Jet Admin to win.
      </p>
      <p>
        What I found was a fundamental mismatch: the ICP that gets real value from the product
        wasn&apos;t the one we were targeting, and our messaging didn&apos;t resonate with the right
        audience. That insight reshaped everything that followed.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/jetaudit2.png"
          alt="Jet Admin audit findings"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>

      <h3>GTM Strategy and Positioning</h3>
      <p>
        I rebuilt Jet Admin&apos;s positioning from the ground up — repositioning from a generic
        &ldquo;admin and back-office&rdquo; tool to a no-code business app builder designed specifically
        for internal tools, custom CRMs, and client portals.
      </p>
      <p>
        Messaging shifted to anchor on jobs to be done. In an emerging no-code market without
        clear category boundaries, JTBD framing cut through the noise and made it immediately
        clear what the product does and who it&apos;s for. I also identified a strong pull from the
        market for customer portals — a use case that grew to account for nearly half of revenue
        by the end of the engagement.
      </p>
      <IconList
        variant="check"
        items={[
          'Rebuilt positioning around three high-value use cases: business web apps, internal tools, and client portals',
          <>
            <span>Anchored all messaging in JTBD to eliminate confusion in a blurry market category</span>
            <div className="mt-[16px] mb-[20px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
              <Image
                src="/jetpositioning.png"
                alt="Jet Admin positioning"
                width={1200}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
          </>,
          'Identified and validated the customer portal opportunity as a major revenue driver',
          'Mapped competitive differentiators against popular alternatives',
        ]}
      />

      <h3>Website Redesign</h3>
      <p>
        I redesigned the website&apos;s visuals, structure, and narrative around the new positioning.
        In an emerging market where no-code use cases blurred into each other, the site needed
        to do the heavy lifting of explaining what the product actually does — clearly and
        convincingly.
      </p>
      <p>
        The redesign improved sign-up conversion, but its bigger impact was upstream: it gave
        target users the conviction to actually try the product. That conviction translated into
        better activation rates before we even touched the activation flow itself.
      </p>
      <IconList
        variant="check"
        items={[
          <>
            <span>Redesigned homepage as a routing hub — generating interest and directing different ICPs to dedicated pages</span>
            <div className="mt-[16px] mb-[20px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
              <Image
                src="/jetpages.png"
                alt="Jet Admin pages"
                width={1200}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
          </>,
          'Created use case pages, feature pages, solution pages, and integration pages for different buyer angles',
          'Rebuilt the pricing page to reflect the new packaging structure',
          'Highlighted benefits and unique differentiators against alternatives',
        ]}
      />

      <h3>Activation Flow Redesign</h3>
      <p>
        I revamped the activation flow after experimenting with several approaches — starting
        from scratch, starting from templates, and starting with real customer data. The
        data-first approach won decisively.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
        <Image
          src="/jetonb.png"
          alt="Jet Admin onboarding flow"
          width={1200}
          height={720}
          className="h-auto w-full object-cover"
        />
      </div>
      <p>
        I redesigned the flow so new users picked an integration first, connecting their own
        data before building anything. For users without a data source ready, we added a built-in
        database with selectable default schemas.
      </p>
      <IconList
        variant="check"
        items={[
          'Tested multiple activation approaches to identify the highest-performing entry point',
          'Redesigned the onboarding flow around a data-first experience',
          'Implemented a built-in database with default schemas as a fallback path',
          <><strong>Result: 3.5× activation rate after full redesign, with 30-day retention following suit</strong></>,
        ]}
      />

      <h3>Content, Lifecycle, and SEO</h3>
      <p>
        I built the content engine across three layers: education to drive adoption, SEO to
        drive acquisition, and lifecycle campaigns to drive conversion and reactivation.
      </p>
      <IconList
        variant="check"
        items={[
          <>
            <span>Created an explainer video for the homepage and use-case-specific videos targeting high-relevance queries</span>
            <div className="mt-[16px] mb-[20px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/ktkbSKQkQq8"
                  title="Jet Admin explainer video"
                  className="absolute inset-0 size-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </>,
          <>Built and launched <a href="https://www.youtube.com/playlist?list=PLSkzi9eq0vBnUGMnwXrRRVo9TXUjZ7uSj" target="_blank" rel="noopener noreferrer">&ldquo;Jet University&rdquo;</a> — a video-based knowledge base for self-serve adoption</>,
          <>
            <span>Built a template library that doubled as conversion assets and SEO-ranked pages</span>
            <div className="mt-[16px] mb-[20px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
              <Image
                src="/templates.png"
                alt="Jet Admin template library"
                width={1200}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
          </>,
          <>
            <span>Created 20+ pages ranking for high-intent keywords, including bottom-of-funnel alternative and vs pages targeting competitor traffic</span>
            <div className="mt-[16px] mb-[20px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
              <Image
                src="/retool-alt2.png"
                alt="Jet Admin Retool alternative page"
                width={1200}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
          </>,
          'Built 40+ use case pages that showcased what can be built with Jet Admin while ranking for solution-unaware searches',
          'Created integration pages targeting specific database, API, and external app keywords',
          'Ran lifecycle email campaigns for activation, reactivation, and promotional triggers',
        ]}
      />

      <h3>Launching a Suite of AI Products</h3>
      <p>
        As the product developed AI capabilities — chat-based SQL generation, HTTP integration
        creation, custom UI component generation, and full app prototyping — I mapped the
        product flows for new users to discover and adopt these features.
      </p>
      <div className="mt-[16px] mb-[24px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39] inline-block">
        <Image
          src="/jetai.png"
          alt="Jet Admin AI capabilities"
          width={336}
          height={224}
          className="h-auto w-auto max-w-full"
        />
      </div>
      <IconList
        variant="check"
        items={[
          'Designed product flows for AI feature discovery and adoption within the existing user experience',
          'Created marketing narratives targeting the emerging AI-native audience',
          'Produced videos and marketing assets to explain and demonstrate the AI capabilities',
        ]}
      />

      <h3>Pricing, Packaging, and Product-Led Sales</h3>
      <p>
        I restructured monetization from pricing through to conversion mechanics. The goal:
        maximize customer value across segments while building a self-reinforcing upgrade path.
      </p>
      <IconList
        variant="check"
        items={[
          <>
            <span>Designed a new pricing structure serving both internal app builders and client portal users, eliminating pricing cannibalization</span>
            <div className="mt-[16px] mb-[20px] overflow-hidden rounded-[5px] border border-[#3f4367] bg-[#171c39]">
              <Image
                src="/jetpricing.png"
                alt="Jet Admin pricing structure"
                width={1200}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
          </>,
          'Ran pricing sensitivity research to optimize for average customer value',
          'Identified and orchestrated conversion triggers from free trial to paid to higher tiers',
          'Built an internal dashboard to identify PQLs and engage them through automated chats and lifecycle activities',
          'Implemented PQA trigger flows to detect team usage expansion and layer low-touch sales motions for team and company-wide upgrades',
          'For higher-tier prospects, mapped target use cases and created demo resources, marketing pages, and written narratives to guide the sales motion',
        ]}
      />

      <h3>Channel Experimentation</h3>
      <p>
        SEO and referrals became the primary acquisition channels, but several other channels
        delivered meaningful early traction.
      </p>
      <IconList
        variant="check"
        items={[
          'Built and launched an expert partner network — a program for no-code developers and agencies to build complex apps on Jet Admin, which brought in several large clients',
          'Ran Reddit targeted placements and social listening campaigns',
          'Executed category and integration injections, capitalizing on existing third-party networks',
          'Managed paid partnerships with thought leaders in the no-code space',
        ]}
      />

      <div className="my-[32px] rounded-[5px] border border-[#3f4367] bg-[#1d2241] px-[24px] py-[24px] sm:px-[28px] sm:py-[28px]">
        <p className="mb-[20px] text-[16px] italic font-normal leading-[1.6] text-[#c5caf0] sm:text-[17px]">
          &ldquo;Mike worked in the trenches with us, bringing a new product to a global market and helping turn Jet Admin into one of the niche leaders&rdquo;
        </p>
        <div className="flex items-center gap-[12px]">
          <div className="relative h-[44px] w-[44px] shrink-0 overflow-hidden rounded-full bg-[#171c39]">
            <Image src="/svetlov.jpeg" alt="Anton Svetlov" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-[14px] font-medium leading-[1.2] text-[#dcdff2]">Anton Svetlov</span>
            <span className="text-[12px] font-normal leading-[1.3] text-[#7078B8]">Founder and CEO at Jet Admin</span>
          </div>
        </div>
      </div>

      <h2>The Results - &ldquo;Hockey Stick&rdquo; Growth</h2>
      <p>
        After aligning positioning, product, acquisition channels, and monetization, the whole
        system started to click — driving compounding growth across every metric.
      </p>
      <p>Over the 18-month engagement:</p>
      <IconList
        variant="check"
        items={[
          <>MRR grew <strong>12×</strong> to $2M ARR</>,
          'New sign-ups scaled from tens to thousands per month',
          <>Activation rate increased <strong>3.5×</strong>, and free trial conversions more than doubled</>,
          'SEO pages ranking in the top 3–5 positions, driving high-intent traffic',
          'Users began escalating through pricing tiers faster, increasing average customer value',
        ]}
      />
    </CaseStudyLayout>
  );
}

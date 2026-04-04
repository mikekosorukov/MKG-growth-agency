'use client';

import Image from 'next/image';

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Yes">
    <circle cx="12" cy="12" r="11" stroke="#4ade80" strokeWidth="1.2" fill="none" />
    <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="No">
    <circle cx="12" cy="12" r="11" stroke="#f87171" strokeWidth="1.2" fill="none" />
    <path d="M9 9L15 15M15 9L9 15" stroke="#f87171" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type CellValue = 'yes' | 'no' | string;

interface Row {
  label: string;
  values: CellValue[];
}

const columns = ['MKG Lab', 'Full-time hire', 'Advisor', 'On my own'];

const rows: Row[] = [
  { label: 'Hands-on execution',           values: ['yes', 'yes',     'no',      'yes'] },
  { label: 'Expert judgement',        values: ['yes', 'no',      'yes',     'Serial founders'] },
  { label: 'Full-stack expertise',      values: ['yes', 'no',      'yes',     'no'] },
  { label: '"Has done it" before',  values: ['yes', 'no',      'yes',     'Serial founders'] },
  { label: 'Outcome-based pricing',          values: ['yes', 'no',      'no',      'N/A'] },
  { label: 'Weekly deep-dives',           values: ['yes', 'yes',     'no',      'N/A'] },
];

function CellContent({ value }: { value: CellValue }) {
  if (value === 'yes') return <CheckIcon />;
  if (value === 'no') return <CrossIcon />;
  return <span className="text-[13px] text-[#a5aee9] sm:text-[14px]">{value}</span>;
}

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative box-border flex w-full flex-col items-center gap-[40px] bg-[#1d2241] px-[20px] py-[40px] sm:gap-[48px] sm:px-[40px] sm:py-[60px] lg:gap-[64px] lg:px-[80px] lg:py-[80px] overflow-hidden"
      aria-label="Comparison"
    >
      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'url(/300-60-15-monochrome.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '350px 350px',
          mixBlendMode: 'soft-light',
          opacity: 0.65,
        }}
      />

      <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-center gap-[48px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[6px] text-center sm:gap-[8px]">
          <p className="text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
            WHY MIKE
          </p>
          <h2 className="text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]">
            A commercial brain for your tech startup
          </h2>
        </div>

        {/* Table card — dot-pattern container matching About section */}
        <div className="relative w-full max-w-[900px] overflow-hidden rounded-[5px] border border-solid border-[#3f4367] bg-[#1d2241] p-[24px]">
          {/* Dot pattern background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/Dots-Pattern-2.svg')",
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
              opacity: 0.15,
            }}
          />
          {/* Inner content box */}
          <div
            className="relative z-10 w-full overflow-hidden rounded-[5px] border border-solid border-[#3f4367] bg-[#171c39]"
            style={{ boxShadow: '0 0 6px 0 rgba(5, 9, 32, 0.9)' }}
          >
            <div className="w-full overflow-x-auto px-[20px] pt-[12px] pb-[20px] sm:px-[28px] sm:pt-[16px] sm:pb-[28px] lg:px-[32px] lg:pt-[20px] lg:pb-[32px]">
          <table className="w-full min-w-[700px] border-collapse">
            {/* Column headers */}
            <thead>
              <tr>
                {/* Empty cell for the row-label column */}
                <th className="pb-[20px]" />
                {columns.map((col, i) => (
                  <th
                    key={col}
                    className={`pb-[20px] text-center text-[14px] font-semibold leading-[1.3] sm:text-[15px] lg:text-[16px] ${
                      i === 0 ? 'text-[#dcdff2]' : 'text-[#a5aee9]'
                    }`}
                  >
                    {i === 0 ? (
                      <div className="flex items-center justify-center gap-[8px]">
                        <div className="relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full bg-[#a5aee9]/75">
                          <Image
                            src="/mike_avatar.svg"
                            alt="Mike Kosorukov"
                            fill
                            className="object-contain scale-[1.45] object-center translate-x-[-3%] translate-y-[2%]"
                          />
                        </div>
                        <span>Mike</span>
                      </div>
                    ) : (
                      col
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={row.label}
                  className={ri % 2 === 0 ? 'bg-[#1d2241]/60' : ''}
                >
                  {/* Row label */}
                  <td className="py-[14px] pl-[16px] pr-[32px] text-left text-[14px] font-normal leading-[1.4] text-[#dcdff2] whitespace-nowrap sm:text-[15px] w-0">
                    {row.label}
                  </td>

                  {/* Value cells */}
                  {row.values.map((val, ci) => (
                    <td
                      key={ci}
                      className={`py-[14px] text-center ${
                        ci === 0
                          ? 'bg-[#8c99eb]/[0.08]'
                          : ''
                      } ${
                        ci === 0 && ri === 0 ? 'rounded-tl-[12px] rounded-tr-[12px]' : ''
                      } ${
                        ci === 0 && ri === rows.length - 1 ? 'rounded-bl-[12px] rounded-br-[12px]' : ''
                      }`}
                    >
                      <span className="inline-flex items-center justify-center">
                        <CellContent value={val} />
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

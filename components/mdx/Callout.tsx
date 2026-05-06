import type { ReactNode } from 'react';

const icons: Record<string, string> = {
  insight: '💡',
  warning: '⚠️',
  quote: '💬',
};

const borderColors: Record<string, string> = {
  insight: 'border-[#ff885d]',
  warning: 'border-[#e8c547]',
  quote: 'border-[#8c99eb]',
};

export default function Callout({
  type = 'insight',
  noBorder = false,
  children,
}: {
  type?: 'insight' | 'warning' | 'quote';
  noBorder?: boolean;
  children: ReactNode;
}) {
  return (
    <aside
      className={`my-[24px] ${noBorder ? '' : `border-l ${borderColors[type] ?? borderColors.insight}`} bg-[#171c39]/60 px-[20px] py-[16px] sm:px-[24px] sm:py-[20px]`}
    >
      <div className="flex gap-[12px]">
        <span className="shrink-0 text-[18px] leading-[1.6]">
          {icons[type] ?? icons.insight}
        </span>
        <div className="text-[15px] font-normal leading-[1.6] text-[#c5caf0] sm:text-[16px] [&>p]:m-0">
          {children}
        </div>
      </div>
    </aside>
  );
}

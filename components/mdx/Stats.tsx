interface StatItem {
  value: string;
  label: string;
}

export default function Stats({ items }: { items: StatItem[] }) {
  return (
    <div className="my-[32px] grid grid-cols-1 gap-[24px] sm:grid-cols-3">
      {items.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center gap-[10px] rounded-[5px] border border-solid border-[#3f4367] bg-[#1d2241] px-[16px] py-[20px]"
        >
          <span className="hero-gradient-text text-[42px] font-bold leading-[1]">
            {stat.value}
          </span>
          <span className="text-center text-[14px] font-normal leading-[1.4] text-[#7078B8]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

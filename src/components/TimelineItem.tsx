type TimelineItemProps = {
  title: string;
  organization: string;
  detail: string;
  period: string;
};

export function TimelineItem({ title, organization, detail, period }: TimelineItemProps) {
  return (
    <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-subtle">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-charcoal">{title}</h3>
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {period}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-petrol">{organization}</p>
      <p className="mt-3 text-sm leading-6 text-slate-700">{detail}</p>
    </div>
  );
}

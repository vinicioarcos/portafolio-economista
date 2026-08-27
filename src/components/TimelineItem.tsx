import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";

type TimelineItemProps = {
  title: string;
  organization: string;
  detail?: string;
  period: string;
  url?: string;
};

export function TimelineItem({ title, organization, detail, period, url }: TimelineItemProps) {
  return (
    <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-subtle">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-charcoal">{title}</h3>
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {period}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-petrol">{organization}</p>
      {detail ? <p className="mt-3 text-sm leading-6 text-slate-700">{detail}</p> : null}
      {url ? (
        <a
          className="mt-3 inline-flex w-fit items-center gap-1.5 rounded text-sm font-semibold text-petrol underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          Ver tesis
          <ExternalLinkIcon className="h-3.5 w-3.5" />
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      ) : null}
    </div>
  );
}

import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";
import { researchStatusLabels, type Research } from "@/data/research";

const statusStyles: Record<Research["status"], string> = {
  published: "bg-petrol/10 text-petroldark",
  accepted: "bg-copper/15 text-copperdark",
  "in-review": "bg-amber-100 text-amber-800",
  "working-paper": "bg-slate-200/70 text-slate-700",
  "in-progress": "bg-slate-200/70 text-slate-700"
};

export function ResearchCard({ research: item }: { research: Research }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-copper/30 bg-gradient-to-br from-white/95 to-sand/50 p-6 shadow-accent transition duration-300 hover:-translate-y-1 hover:border-copper/60 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${statusStyles[item.status]}`}
        >
          {researchStatusLabels[item.status]}
        </span>
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {item.period}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold leading-6 tracking-tight text-charcoal">{item.title}</h3>
      <p className="mt-2 text-sm font-medium text-petrol">{item.institution}</p>

      <p className="mt-4 text-xs italic leading-5 text-slate-500">{item.sourceNote}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.topics.map((topic) => (
          <span
            className="rounded-full border border-slate-300/60 bg-slate-50/80 px-3 py-1 text-xs font-medium text-slate-600"
            key={topic}
          >
            {topic}
          </span>
        ))}
      </div>

      <a
        className="mt-5 inline-flex w-fit items-center gap-1.5 rounded text-sm font-semibold text-petrol underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
        href={item.url}
        rel="noreferrer"
        target="_blank"
      >
        Ver en OSF
        <ExternalLinkIcon className="h-3.5 w-3.5" />
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    </article>
  );
}

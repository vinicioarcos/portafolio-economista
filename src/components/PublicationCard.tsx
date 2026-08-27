import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";
import { publicationStatusLabels, type Publication } from "@/data/publications";

const statusStyles: Record<Publication["status"], string> = {
  published: "bg-petrol/10 text-petroldark",
  accepted: "bg-copper/15 text-copperdark",
  "in-review": "bg-amber-100 text-amber-800",
  "working-paper": "bg-slate-200/70 text-slate-700",
  "in-progress": "bg-slate-200/70 text-slate-700"
};

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-petrol/30 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${statusStyles[publication.status]}`}
        >
          {publicationStatusLabels[publication.status]}
        </span>
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {publication.year}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold leading-6 tracking-tight text-charcoal">
        {publication.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-petrol">{publication.journal}</p>

      <p className="mt-4 text-xs italic leading-5 text-slate-500">{publication.citation}</p>

      {publication.abstract ? (
        <p className="mt-3 text-sm leading-6 text-slate-700">{publication.abstract}</p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {publication.topics.map((topic) => (
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
        href={publication.url}
        rel="noreferrer"
        target="_blank"
      >
        {publication.doi ? "Ver DOI" : "Ver publicación"}
        <ExternalLinkIcon className="h-3.5 w-3.5" />
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    </article>
  );
}

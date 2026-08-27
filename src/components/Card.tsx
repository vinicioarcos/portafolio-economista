import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";

type CardProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  description: string;
  tags?: string[];
  href?: string;
  variant?: "default" | "featured" | "publication";
};

export function Card({
  title,
  subtitle,
  meta,
  description,
  tags = [],
  href,
  variant = "default"
}: CardProps) {
  const isInteractive = Boolean(href);
  const baseByVariant =
    variant === "featured"
      ? "border-copper/30 bg-gradient-to-br from-white/95 to-sand/50 p-6 shadow-accent"
      : variant === "publication"
        ? "border-slate-200/60 bg-white/70 p-6 shadow-panel"
        : "border-white/70 bg-white/80 p-6 shadow-panel backdrop-blur";
  const hoverByVariant = variant === "featured"
    ? "hover:shadow-lg hover:-translate-y-1 hover:border-copper/60"
    : variant === "publication"
      ? "hover:shadow-lg hover:-translate-y-1 hover:border-petrol/30"
      : "hover:shadow-lg hover:-translate-y-1 hover:border-petrol/20";

  const content = (
    <article
      className={`relative h-full overflow-hidden rounded-2xl border transition duration-300 ${baseByVariant} ${
        isInteractive ? `group ${hoverByVariant}` : ""
      }`}
    >
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-charcoal">
            {title}
            {isInteractive ? <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-slate-400" /> : null}
          </h3>
          {subtitle ? (
            <p className="mt-2 text-sm font-medium text-petrol">{subtitle}</p>
          ) : null}
        </div>
        {meta ? (
          <span className="shrink-0 rounded-full bg-copper/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-copperdark">
            {meta}
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">{description}</p>

      {tags.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              className="rounded-full border border-slate-300/60 bg-slate-50/80 px-3 py-1 text-xs font-medium text-slate-600 transition group-hover:border-petrol/40 group-hover:bg-accentSoft/20 group-hover:text-petrol"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );

  if (href) {
    return (
      <a
        className="block h-full rounded-2xl transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {content}
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    );
  }

  return content;
}

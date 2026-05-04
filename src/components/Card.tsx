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
  const content = (
    <article
      className={`group relative h-full overflow-hidden rounded-2xl border transition duration-300 ${
        variant === "featured"
          ? "border-copper/30 bg-gradient-to-br from-white/95 to-sand/50 p-6 shadow-accent hover:shadow-lg hover:-translate-y-1 hover:border-copper/60"
          : variant === "publication"
            ? "border-slate-200/60 bg-white/70 p-6 shadow-panel hover:shadow-lg hover:-translate-y-1 hover:border-petrol/30"
            : "border-white/70 bg-white/80 p-6 shadow-panel backdrop-blur hover:shadow-lg hover:-translate-y-1 hover:border-petrol/20"
      }`}
    >
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold tracking-tight text-charcoal">{title}</h3>
          {subtitle ? (
            <p className="mt-2 text-sm font-medium text-petrol">{subtitle}</p>
          ) : null}
        </div>
        {meta ? (
          <span className="shrink-0 rounded-full bg-copper/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-copper">
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
        className="block h-full transition-transform"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return content;
}

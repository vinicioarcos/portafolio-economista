type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-1 w-8 rounded-full bg-gradient-to-r from-copper to-petrol" />
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-copper">{eyebrow}</p>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-700">{description}</p>
    </div>
  );
}

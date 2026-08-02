type Metric = {
  value: string;
  label: string;
};

export function MetricsStats({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div
          className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white/60 to-sand/40 px-5 py-4 shadow-subtle"
          key={metric.label}
        >
          <p className="text-3xl font-bold text-charcoal">{metric.value}</p>
          <div aria-hidden="true" className="mt-2 h-1 w-8 rounded-full bg-gradient-to-r from-petrol to-copper" />
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-slate-600">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}

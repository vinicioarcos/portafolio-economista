import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="section-shell pt-10 md:pt-16" id="inicio">
      <div className="grid items-center gap-8 rounded-[2rem] border border-white/70 bg-gradient-to-br from-white/85 to-sand/50 px-8 py-10 shadow-panel backdrop-blur md:grid-cols-[1.3fr_0.7fr] md:px-12 md:py-14">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-copper">
              {profile.kicker}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
              {profile.credentials.degree}
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600">{profile.summary}</p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="inline-flex items-center rounded-full bg-petrol px-6 py-3 text-sm font-semibold text-white transition hover:bg-petroldark hover:shadow-accent"
              href="#contacto"
            >
              Agendar consulta
            </a>
            <a
              className="inline-flex items-center rounded-full border-2 border-copper px-6 py-3 text-sm font-semibold text-copper transition hover:bg-copper/5"
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
            >
              Ver CV
            </a>
            <a
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-ink"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-petroldark to-charcoal p-8 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(184,115,51,0.15),_transparent_40%)]" />
          <div className="relative space-y-6">
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-copper/20 text-3xl font-bold text-copper">
              VA
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{profile.titleShort}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">
                {profile.credentials.candidate}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{profile.role}</p>
            </div>
            <div className="grid gap-2 border-t border-white/10 pt-4 text-sm text-slate-200">
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                {profile.location}
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

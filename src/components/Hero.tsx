import Image from "next/image";

import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="section-shell pt-10 md:pt-16" id="inicio">
      <div className="grid items-center gap-8 rounded-[2rem] border border-white/70 bg-gradient-to-br from-white/85 to-sand/50 px-8 py-10 shadow-panel backdrop-blur md:grid-cols-[1.3fr_0.7fr] md:px-12 md:py-14">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-copperdark">
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
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            <a
              className="inline-flex items-center rounded-full bg-petrol px-6 py-3 text-sm font-semibold text-white transition hover:bg-petroldark hover:shadow-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              href="#contacto"
            >
              Agendar consulta
            </a>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
              <a
                className="underline-offset-4 transition hover:text-petrol hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                href={profile.cv}
                rel="noreferrer"
                target="_blank"
              >
                Ver CV
              </a>
              <span aria-hidden="true" className="text-slate-300">
                |
              </span>
              <a
                className="underline-offset-4 transition hover:text-petrol hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                href={profile.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-petroldark to-charcoal p-8 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(184,115,51,0.15),_transparent_40%)]" />
          <div className="relative space-y-6">
            <Image
              alt={`Foto de perfil de ${profile.titleShort}`}
              className="h-28 w-28 rounded-3xl object-cover ring-1 ring-white/10"
              height={112}
              priority
              src="/images/profile.jpg"
              width={112}
            />
            <div className="space-y-2">
              <p className="text-2xl font-bold">{profile.titleShort}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copperlight">
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

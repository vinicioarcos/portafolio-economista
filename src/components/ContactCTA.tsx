import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";
import { profile } from "@/data/profile";

export function ContactCTA() {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-petroldark to-charcoal px-8 py-12 text-white md:px-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-end">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-copperlight">Contacto</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Conversemos sobre análisis, estrategia y formación económica
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-300">
            Si necesitas una mirada económica rigurosa para un proyecto, una consultoría o
            un programa de capacitación, contáctame para explorar cómo puedo agregar valor a
            tu institución u organización.
          </p>
        </div>

        <div className="space-y-3 rounded-2xl border border-copper/20 bg-white/5 p-6 backdrop-blur-sm">
          <a
            className="block rounded text-sm font-semibold text-copperlight transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <a
            className="inline-flex items-center gap-1.5 rounded text-xs text-slate-400 transition hover:text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
            <ExternalLinkIcon className="h-3 w-3" />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
          <a
            className="mt-4 inline-flex rounded-full bg-copper px-5 py-3 text-sm font-bold text-charcoal transition hover:bg-copperlight hover:shadow-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href={`mailto:${profile.email}`}
          >
            Solicitar consulta
          </a>
        </div>
      </div>
    </div>
  );
}

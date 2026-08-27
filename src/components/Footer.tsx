import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="section-shell border-t border-slate-200/60 py-10 md:py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-copperdark">Sobre</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {profile.titleShort}, {profile.credentials.degree}. Especialista en economía laboral,
            educativa y análisis de políticas públicas.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-copperdark">Enlaces</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a
                className="rounded transition hover:text-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                href="/perfil"
              >
                Perfil profesional
              </a>
            </li>
            <li>
              <a
                className="rounded transition hover:text-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                href="/libros"
              >
                Libros
              </a>
            </li>
            <li>
              <a
                className="rounded transition hover:text-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1.5 rounded transition hover:text-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                href={profile.cv}
                rel="noreferrer"
                target="_blank"
              >
                Descargar CV
                <ExternalLinkIcon className="h-3 w-3" />
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1.5 rounded transition hover:text-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                href={profile.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
                <ExternalLinkIcon className="h-3 w-3" />
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-copperdark">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                className="rounded text-slate-600 transition hover:text-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                className="rounded text-slate-600 transition hover:text-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              >
                {profile.phone}
              </a>
            </li>
            <li className="text-slate-600">{profile.location}</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-200/40 pt-8 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.titleShort}. Portafolio profesional. Construido con
          Next.js, TypeScript y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

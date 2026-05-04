import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="section-shell border-t border-slate-200/60 py-10 md:py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">Sobre</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {profile.titleShort}, {profile.credentials.degree}. Especialista en economía laboral,
            educativa y análisis de políticas públicas.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">Enlaces</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a href="#sobre-mi" className="transition hover:text-petrol">
                Perfil profesional
              </a>
            </li>
            <li>
              <a href={profile.cv} target="_blank" rel="noreferrer" className="transition hover:text-petrol">
                Descargar CV
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-petrol">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="text-slate-600 transition hover:text-petrol"
              >
                {profile.email}
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

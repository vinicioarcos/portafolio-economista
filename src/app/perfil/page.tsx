import type { Metadata } from "next";

import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { TimelineItem } from "@/components/TimelineItem";
import { education } from "@/data/education";
import { professionalExperience, teachingExperience } from "@/data/experience";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Perfil",
  description:
    "Perfil profesional de Vinicio Arcos: formación académica, experiencia profesional y docente, y capacidades técnicas en econometría, ciencia de datos y políticas públicas.",
  alternates: { canonical: "/perfil" }
};

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Métodos", items: skills.methods },
  { label: "Software estadístico y de datos", items: skills.software },
  { label: "SIG y análisis espacial", items: skills.gis },
  { label: "Visualización", items: skills.visualization },
  { label: "Plataformas y sistemas", items: [...skills.platforms, ...skills.systems] },
  { label: "IA y desarrollo", items: skills.aiAndDev },
  { label: "Líneas de investigación", items: skills.researchLines }
];

export default function PerfilPage() {
  return (
    <main className="pb-10">
      <Navbar />

      <section className="section-shell section-spacing pt-10 md:pt-16">
        <SectionTitle eyebrow="Perfil" title={profile.titleShort} description={profile.about} />
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
          <a
            className="inline-flex items-center gap-1.5 rounded text-petrol underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            href={profile.cv}
            rel="noreferrer"
            target="_blank"
          >
            Descargar CV
            <ExternalLinkIcon className="h-3 w-3" />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
          <span aria-hidden="true" className="text-slate-300">
            |
          </span>
          <a
            className="inline-flex items-center gap-1.5 rounded text-petrol underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
            <ExternalLinkIcon className="h-3 w-3" />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </section>

      {/* Formación */}
      <section className="section-shell section-spacing" id="formacion">
        <SectionTitle
          eyebrow="Trayectoria académica"
          title="Formación"
          description="Formación de tercer y cuarto nivel. Los períodos se muestran únicamente cuando constan verificados en la hoja de vida."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item) => (
            <TimelineItem
              detail={item.detail}
              key={item.credential}
              organization={item.institution}
              period={item.period}
              title={item.credential}
              url={item.url}
            />
          ))}
        </div>
      </section>

      {/* Experiencia profesional */}
      <section className="section-shell section-spacing" id="experiencia-profesional">
        <SectionTitle
          eyebrow="Experiencia"
          title="Experiencia profesional"
          description="Cargos técnicos en instituciones públicas y organismos de cooperación."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {professionalExperience.map((item) => (
            <TimelineItem
              detail={item.detail}
              key={`${item.role}-${item.organization}`}
              organization={item.organization}
              period={item.period}
              title={item.role}
            />
          ))}
        </div>
      </section>

      {/* Experiencia docente */}
      <section className="section-shell section-spacing" id="experiencia-docente">
        <SectionTitle
          eyebrow="Docencia"
          title="Experiencia docente"
          description="Docencia universitaria de pregrado y posgrado en economía, econometría y políticas públicas."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teachingExperience.map((item) => (
            <TimelineItem
              detail={item.detail}
              key={`${item.role}-${item.organization}`}
              organization={item.organization}
              period={item.period}
              title={item.role}
            />
          ))}
        </div>
      </section>

      {/* Capacidades técnicas */}
      <section className="section-shell section-spacing" id="capacidades">
        <SectionTitle
          eyebrow="Capacidades técnicas"
          title="Herramientas y métodos"
          description="Herramientas y métodos aplicados en investigación, docencia y consultoría."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-subtle" key={group.label}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-copperdark">{group.label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";

import { Card } from "@/components/Card";
import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { TimelineItem } from "@/components/TimelineItem";
import { courses } from "@/data/courses";
import { training } from "@/data/training";

export const metadata: Metadata = {
  title: "Docencia | Vinicio Arcos",
  description:
    "Docencia universitaria y capacitación ejecutiva de Vinicio Arcos: cursos y talleres en econometría, ciencia de datos y evaluación de políticas, y formación docente continua."
};

export default function DocenciaPage() {
  return (
    <main className="pb-10">
      <Navbar />

      <section className="section-shell section-spacing pt-10 md:pt-16">
        <SectionTitle
          eyebrow="Docencia"
          title="Docencia y transferencia"
          description="Formación ejecutiva y académica en economía aplicada, econometría y políticas públicas. La experiencia docente universitaria completa, por institución, está en la página de perfil."
        />
        <a
          className="mt-4 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-petrol underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          href="/perfil#experiencia-docente"
        >
          Ver experiencia docente completa
        </a>
      </section>

      {/* Cursos y talleres */}
      <section className="section-shell section-spacing" id="cursos-talleres">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Cursos y talleres"
            title="Formación ejecutiva y académica"
            description="Programas diseñados para desarrollar criterio analítico, lectura de datos, métodos cuantitativos y capacidad de decisión estratégica."
          />
          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-petrol px-5 py-3 text-sm font-semibold text-petrol transition hover:bg-petrol/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            href="https://www.arcdataconsulting.com/app/campus/courses/"
            rel="noreferrer"
            target="_blank"
          >
            Catálogo completo en ARCDATA Campus
            <ExternalLinkIcon className="h-3.5 w-3.5" />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.title}
              description={course.description}
              meta={course.format}
              subtitle={course.audience}
              tags={course.modules}
              title={course.title}
            />
          ))}
        </div>
      </section>

      {/* Formación docente continua */}
      <section className="section-shell section-spacing" id="formacion-continua">
        <SectionTitle
          eyebrow="Formación continua"
          title="Capacitación docente y profesional recibida"
          description="Cursos y programas de formación docente y metodológica cursados por Vinicio Arcos, distintos de los cursos que él dicta."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {training.map((item) => (
            <TimelineItem
              key={item.title}
              organization={item.institution}
              period={item.duration}
              title={item.title}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

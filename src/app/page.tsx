import { Card } from "@/components/Card";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MetricsStats } from "@/components/MetricsStats";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { courses } from "@/data/courses";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { services } from "@/data/services";

export default function HomePage() {
  const tools = [
    { name: "Econometría", description: "Modelos avanzados con R y Python" },
    { name: "Ciencia de datos", description: "Análisis, visualización y ML" },
    { name: "Análisis político", description: "Evaluación de programas e impacto" },
    { name: "Python", description: "Scripting, automatización, análisis" },
    { name: "R", description: "Estadística avanzada y visualización" },
    { name: "SQL", description: "Gestión y consulta de bases de datos" },
    { name: "Tableau / Power BI", description: "Dashboards y reportería" },
    { name: "ArcGIS", description: "Análisis espacial y cartografía" },
  ];

  return (
    <main className="pb-10">
      <Navbar />
      <Hero />

      {/* Sección Sobre mí */}
      <section className="section-shell section-spacing" id="sobre-mi">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Perfil"
              title="Economía aplicada con enfoque en decisiones concretas"
              description={profile.about}
            />
            <MetricsStats metrics={profile.metrics} />
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-3xl bg-gradient-to-br from-petroldark to-charcoal p-8 text-white shadow-accent">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-copperlight">
                Áreas clave
              </p>
              <ul className="mt-5 space-y-2">
                {profile.focusAreas.slice(0, 4).map((item) => (
                  <li className="rounded-lg border border-copper/20 bg-white/5 px-4 py-3 text-sm leading-5 backdrop-blur-sm" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Especialidades */}
      <section className="section-shell section-spacing" id="especialidades">
        <SectionTitle
          eyebrow="Especialidades"
          title="Áreas de fortaleza"
          description="Combinación de rigor académico, experiencia práctica y capacidad analítica en temas económicos complejos."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {profile.specializations.map((spec) => (
            <div
              key={spec}
              className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-subtle"
            >
              <p className="text-sm font-semibold text-charcoal">{spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Servicios */}
      <section className="section-shell section-spacing" id="servicios">
        <SectionTitle
          eyebrow="Servicios"
          title="Acompañamiento económico integral"
          description="Una oferta organizada para traducir datos, evidencia y contexto en recomendaciones accionables para instituciones públicas, privadas y académicas."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              description={service.description}
              subtitle={service.subtitle}
              tags={service.deliverables}
              title={service.title}
              variant="featured"
            />
          ))}
        </div>
      </section>

      {/* Sección Publicaciones */}
      <section className="section-shell section-spacing" id="publicaciones">
        <SectionTitle
          eyebrow="Publicaciones"
          title="Investigación y pensamiento aplicado"
          description="Selección de trabajos, artículos y reportes orientados a debate técnico, evidencia académica y aporte a políticas públicas."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication) => (
            <Card
              key={publication.title}
              description={publication.summary}
              href={publication.href}
              meta={publication.year}
              subtitle={publication.publisher}
              tags={publication.topics}
              title={publication.title}
              variant="publication"
            />
          ))}
        </div>
      </section>

      {/* Sección Proyectos */}
      <section className="section-shell section-spacing" id="proyectos">
        <SectionTitle
          eyebrow="Proyectos"
          title="Experiencia construida sobre resultados"
          description="Casos de trabajo donde el análisis económico se conectó con decisiones de inversión, política pública y gestión institucional."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              description={project.summary}
              meta={project.period}
              subtitle={project.client}
              tags={project.outcomes}
              title={project.title}
            />
          ))}
        </div>
      </section>

      {/* Sección Cursos y Talleres */}
      <section className="section-shell section-spacing" id="cursos">
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
            Ver todos los cursos ↗
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

      {/* Sección Herramientas */}
      <section className="section-shell section-spacing" id="herramientas">
        <SectionTitle
          eyebrow="Herramientas"
          title="Tecnología y metodología"
          description="Conjunto de herramientas técnicas y metodologías aplicadas en investigación, consultoría, análisis y docencia."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-subtle"
            >
              <p className="font-semibold text-charcoal">{tool.name}</p>
              <p className="mt-2 text-xs text-slate-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Contacto */}
      <section className="section-shell section-spacing" id="contacto">
        <ContactCTA />
      </section>

      <Footer />
    </main>
  );
}

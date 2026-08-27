import { Card } from "@/components/Card";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PublicationCard } from "@/components/PublicationCard";
import { ResearchCard } from "@/components/ResearchCard";
import { SectionTitle } from "@/components/SectionTitle";
import { TimelineItem } from "@/components/TimelineItem";
import { courses } from "@/data/courses";
import { professionalExperience, teachingExperience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { research } from "@/data/research";
import { services } from "@/data/services";
import { skills } from "@/data/skills";

export default function HomePage() {
  const currentRole = teachingExperience.find((item) => item.period === "Actualidad") ?? teachingExperience[0];
  const highlightedExperience = [
    professionalExperience[0],
    teachingExperience.find((item) => item.organization === "FLACSO Ecuador")
  ].filter((item): item is (typeof professionalExperience)[number] => Boolean(item));

  const toolGroups = [
    { name: "Métodos", description: skills.methods.join(", ") },
    { name: "Software estadístico y de datos", description: skills.software.join(", ") },
    { name: "SIG y análisis espacial", description: skills.gis.join(", ") },
    { name: "Visualización", description: skills.visualization.join(", ") }
  ];

  return (
    <main className="pb-10">
      <Navbar />
      <Hero />

      {/* Sección Sobre mí */}
      <section className="section-shell section-spacing" id="perfil">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Perfil"
              title="Economía aplicada con enfoque en decisiones concretas"
              description={profile.about}
            />
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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 [&>*:last-child:nth-child(odd)]:col-span-full">
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

      {/* Sección Trayectoria */}
      <section className="section-shell section-spacing" id="trayectoria">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Trayectoria"
            title="Docencia, investigación y experiencia profesional"
            description="Cargo actual y experiencias representativas. La trayectoria completa, con formación, experiencia y capacidades técnicas, está en la página de perfil."
          />
          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-petrol px-5 py-3 text-sm font-semibold text-petrol transition hover:bg-petrol/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            href="/perfil"
          >
            Ver trayectoria completa
          </a>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <TimelineItem
            detail={currentRole.detail}
            organization={currentRole.organization}
            period={currentRole.period}
            title={currentRole.role}
          />
          {highlightedExperience.map((item) => (
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

      {/* Sección Investigación */}
      <section className="section-shell section-spacing" id="investigacion">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Investigación"
            title="Investigación en curso"
            description="Proyectos de investigación activos, registrados en el Open Science Framework (OSF). Metodología y resultados detallados se consultan en cada repositorio."
          />
          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-petrol px-5 py-3 text-sm font-semibold text-petrol transition hover:bg-petrol/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            href="/investigacion"
          >
            Ver investigación
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {research.map((item) => (
            <ResearchCard key={item.id} research={item} />
          ))}
        </div>
      </section>

      {/* Sección Publicaciones */}
      <section className="section-shell section-spacing" id="publicaciones">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Publicaciones"
            title="Publicaciones académicas"
            description={`Selección de las publicaciones más recientes, con revisión por pares y DOI verificable. En total hay ${publications.length} publicaciones académicas disponibles.`}
          />
          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-petrol px-5 py-3 text-sm font-semibold text-petrol transition hover:bg-petrol/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            href="/publicaciones"
          >
            Ver todas las publicaciones
          </a>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {[...publications]
            .sort((a, b) => b.year - a.year)
            .slice(0, 4)
            .map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 [&>*:last-child:nth-child(odd)]:col-span-full">
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

      {/* Sección Docencia */}
      <section className="section-shell section-spacing" id="docencia">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Docencia"
            title="Formación ejecutiva y académica"
            description="Programas diseñados para desarrollar criterio analítico, lectura de datos, métodos cuantitativos y capacidad de decisión estratégica."
          />
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full border-2 border-petrol px-5 py-3 text-sm font-semibold text-petrol transition hover:bg-petrol/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              href="/docencia"
            >
              Ver docencia completa
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border-2 border-petrol px-5 py-3 text-sm font-semibold text-petrol transition hover:bg-petrol/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              href="/libros"
            >
              Ver libros
            </a>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((course) => (
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
          {toolGroups.map((tool) => (
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

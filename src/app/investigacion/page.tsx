import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ResearchCard } from "@/components/ResearchCard";
import { SectionTitle } from "@/components/SectionTitle";
import { research } from "@/data/research";

export const metadata: Metadata = {
  title: "Investigación | Vinicio Arcos",
  description:
    "Proyectos de investigación en curso de Vinicio Arcos: mercado laboral con microdatos ENEMDU, Censo de Ecuador y sectores productivos de Latacunga, con enlace a los repositorios OSF."
};

export default function InvestigacionPage() {
  return (
    <main className="pb-10">
      <Navbar />

      <section className="section-shell section-spacing pt-10 md:pt-16">
        <SectionTitle
          eyebrow="Investigación"
          title="Investigación en curso"
          description="Proyectos de investigación activos, registrados en el Open Science Framework (OSF). La metodología y los resultados detallados de cada proyecto se publican progresivamente en su repositorio OSF."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {research.map((item) => (
            <ResearchCard key={item.id} research={item} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

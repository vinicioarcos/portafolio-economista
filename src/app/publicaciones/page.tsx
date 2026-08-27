import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionTitle } from "@/components/SectionTitle";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publicaciones",
  description:
    "Publicaciones académicas de Vinicio Arcos en economía laboral, educación, econometría y políticas públicas, con referencia bibliográfica, DOI y estado editorial.",
  alternates: { canonical: "/publicaciones" }
};

export default function PublicacionesPage() {
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

  return (
    <main className="pb-10">
      <Navbar />

      <section className="section-shell section-spacing pt-10 md:pt-16">
        <SectionTitle
          eyebrow="Publicaciones"
          title="Publicaciones académicas"
          description={`Listado completo de las ${sortedPublications.length} publicaciones académicas verificadas, con referencia bibliográfica normalizada, tema, estado editorial y enlace o DOI.`}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {sortedPublications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

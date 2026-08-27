import type { Metadata } from "next";

import { BookCard } from "@/components/BookCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Libros | Vinicio Arcos",
  description:
    "Libros de Vinicio Arcos sobre econometría, economía política y evaluación de impacto, con su estado editorial: publicado o en preparación."
};

export default function LibrosPage() {
  return (
    <main className="pb-10">
      <Navbar />

      <section className="section-shell section-spacing pt-10 md:pt-16">
        <SectionTitle
          eyebrow="Libros"
          title="Libros y recursos"
          description="Libros publicados y en preparación. El estado editorial se indica en cada ficha; ningún material en desarrollo se presenta como publicado."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

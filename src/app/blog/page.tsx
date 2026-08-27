import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Vinicio Arcos",
  description:
    "Artículos de Vinicio Arcos sobre economía laboral, economía de la educación, inteligencia artificial y políticas públicas."
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="pb-10">
      <Navbar />

      <section className="section-shell section-spacing pt-10 md:pt-16">
        <SectionTitle
          eyebrow="Blog"
          title="Artículos"
          description="Divulgación técnica sobre economía laboral, economía de la educación, econometría, ciencia de datos, inteligencia artificial y políticas públicas."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <Link
              className="group block h-full rounded-2xl transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <article className="flex h-full flex-col rounded-2xl border border-white/70 bg-white/80 p-6 shadow-panel backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-petrol/20">
                <span className="w-fit rounded-full bg-copper/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-copperdark">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-6 tracking-tight text-charcoal">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

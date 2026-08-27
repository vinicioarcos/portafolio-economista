import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { blogPostBodies } from "@/data/blogPostBodies";
import { blogPosts } from "@/data/blogPosts";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: "Artículo no encontrado" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` }
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  const body = blogPostBodies[params.slug];

  if (!post || !body) {
    notFound();
  }

  return (
    <main className="pb-10">
      <Navbar />

      <article className="section-shell section-spacing pt-10 md:pt-16">
        <Link
          className="text-sm font-semibold text-petrol underline-offset-4 hover:underline"
          href="/blog"
        >
          ← Volver al blog
        </Link>

        <div className="mt-6 max-w-3xl">
          <span className="w-fit rounded-full bg-copper/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-copperdark">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {post.date}
          </p>
        </div>

        <div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-slate-700 [&>h2]:mt-10 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-charcoal [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6 [&_strong]:font-semibold [&_strong]:text-charcoal">
          {body}
        </div>
      </article>

      <Footer />
    </main>
  );
}

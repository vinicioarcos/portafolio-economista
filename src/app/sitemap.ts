import type { MetadataRoute } from "next";

import { blogPosts } from "@/data/blogPosts";

const siteUrl = "https://www.vinicioarcos.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/perfil",
    "/investigacion",
    "/publicaciones",
    "/docencia",
    "/libros",
    "/blog"
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticRoutes, ...blogRoutes];
}

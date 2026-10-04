import type { MetadataRoute } from "next";

import { getAllProjects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/work", "/about", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}

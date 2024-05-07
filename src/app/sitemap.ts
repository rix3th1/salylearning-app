import { getAllPages } from "@/libs/sitemap";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all pages in the project
  const pages = await getAllPages();

  return pages.map((page) => ({
    url: page,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));
}

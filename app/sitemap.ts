import type { MetadataRoute } from "next"

import { Article } from "@/interfaces/article"

import { getServerSideURL } from "@/lib/utils"
import { getAllArticles } from "@/lib/articles"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getServerSideURL()

  const articles: Article[] = await getAllArticles()
  const sitemapArticles: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...sitemapArticles,
  ]
}

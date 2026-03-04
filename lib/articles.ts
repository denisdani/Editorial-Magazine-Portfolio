import fs from "fs/promises"
import path from "path"

import { cache } from "react"

const articlesDirectory = path.join(process.cwd(), "content/articles")

export const getArticleBySlug = cache(async (slug: string) => {
  try {
    const filePath = path.join(articlesDirectory, `${slug}.json`)
    const fileContents = await fs.readFile(filePath, "utf8")

    return JSON.parse(fileContents)
  } catch (error) {
    console.error(error)

    return null
  }
})

export const getAllArticles = cache(async () => {
  try {
    const fileNames = await fs.readdir(articlesDirectory)

    const jsonFiles = fileNames.filter((name) => name.endsWith(".json"))

    const articlesPromise = jsonFiles.map(async (fileName) => {
      const filePath = path.join(articlesDirectory, fileName)
      const fileContents = await fs.readFile(filePath, "utf8")
      return JSON.parse(fileContents)
    })

    const articles = await Promise.all(articlesPromise)

    return articles.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
  } catch (error) {
    console.error("Error fetching articles:", error)

    return []
  }
})

export const getArticlesByCategory = cache(async (category: string) => {
  const allArticles = await getAllArticles()

  return allArticles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase(),
  )
})

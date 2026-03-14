import { Article } from "@/interfaces/article"
import { getArticleBySlug } from "@/lib/articles"

import ArticleCard from "@/components/ArticleCard"

interface RelatedArticlesProps {
  slugs: string[]
}

export default async function RelatedArticles({ slugs }: RelatedArticlesProps) {
  const articlesPromises = slugs.map((slug) => getArticleBySlug(slug))
  const fetchedArticles = await Promise.all(articlesPromises)

  const articles: Article[] = fetchedArticles.filter(
    (article): article is Article => article !== null,
  )

  return (
    <div className="mx-auto mt-16 max-w-360 px-6">
      <h3 className="font-display mb-10 text-3xl font-bold">Read Next</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {articles.map(({ id, title, excerpt, category, slug, coverImage }) => (
          <ArticleCard
            key={id}
            title={title}
            subtitle={excerpt}
            category={category}
            slug={slug}
            bgUrl={coverImage.url}
          />
        ))}
      </div>
    </div>
  )
}

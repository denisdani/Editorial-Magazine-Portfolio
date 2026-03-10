import Link from "next/link"

import { FiArrowUpRight } from "react-icons/fi"

import { Article } from "@/interfaces/article"

import ArticleCard from "@/components/articleCard"
import QuoteCard from "@/components/quoteCard"

interface LatestStoriesProps {
  articles: Article[]
}

export default function LatestStories({ articles }: LatestStoriesProps) {
  return (
    <section>
      <div className="mt-8 flex flex-row items-end justify-between border-b border-gray-200 pb-4 md:mt-16">
        <h2 className="font-display text-4xl font-bold">Latest Stories</h2>

        <Link
          href={"#"}
          className="hover:text-primary hidden flex-row items-center gap-1 text-sm font-medium text-gray-500 transition-colors md:inline-flex"
        >
          View Archive <FiArrowUpRight size={16} />
        </Link>
      </div>

      <div className="mt-10 mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            subtitle={article.excerpt}
            category={article.category}
            slug={article.slug}
            aspect={article.aspect}
            bgUrl={article.coverImage.url}
          />
        ))}
        <QuoteCard
          text="Architecture should speak of its time and place, but yearn for timelessness."
          author="Frank Gehry"
        />
      </div>
    </section>
  )
}

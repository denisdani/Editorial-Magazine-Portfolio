import Link from "next/link"

import { FiArrowUpRight } from "react-icons/fi"

import { Article } from "@/interfaces/article"

import StoryCard from "@/components/storyCard"
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
          <StoryCard
            key={article.id}
            title={article.title}
            subtitle={article.excerpt}
            category={article.category}
            slug={article.slug}
            bgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA4EEzm_b0XENMkKF0sxtRLua3iePAs9igkWFG-MAxRDER7kMehySvRKayVWREySgfHWqkIMnGzLvjqJJTO02kgaupPwnHxGLbP7OmOHgku97f1w5mI1zrR6OA2ptxTWrJ5f2hZ9cJ9DjyQdyZCmrjg1iRMSkVm_iJ0yYuxZDZraS-Odo1BLhpuQth_Q3XGdD1FS79xMjQaYyyt7ypbqBgNnRtd4surDc2ZQTQQKt8Ajj-TS6SQ6G3SjqGO_HpwhFbwIad-NRyuytf-"
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

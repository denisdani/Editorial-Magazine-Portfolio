import Link from "next/link"

import { FaArrowRight } from "react-icons/fa"

import { Article } from "@/interfaces/article"

import Tag from "@/components/tag"
import Author from "@/components/author"

interface HeroStoryCardProps {
  article: Article
}

export default function HeroStoryCard({ article }: HeroStoryCardProps) {
  return (
    <section>
      <Link
        href={`/article/${article.slug}`}
        className="flex flex-col lg:flex-row"
      >
        <div className="group relative flex aspect-16/10 w-full flex-col justify-end overflow-hidden rounded p-6 md:p-10 lg:w-2/3">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwIh2tVrXtRsPyFEJLviQeqbCRJi4nUVSTpzDjurBH2TOj31ISVuGj2v4_tXQhr6nOHsX3iObjgMA6eT6O-bdijCu8UuzI76w7hPAwQjxzH5etkv0msVtp5s09izcpPp7s-CAyb3xCp6eevd0Hl-u3MIjEv48Pgpu86L0aVhit3YE1AOaedLUsdHMBbwL8GJdVFjRvI_b1sB_ZKUa4nr71sz1MbYLAohd3I5cOskQJGPKmUoKU1xs7cIfFGA3LxtBCmiUfbzTFO8rQ')",
            }}
          />
          <div className="relative">
            <Tag primary>Feature Story</Tag>
            <h2 className="font-display mt-6 text-3xl font-bold text-white md:text-5xl xl:text-6xl">
              {article.title}
            </h2>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center py-8 lg:w-1/3 lg:p-8">
          <h3 className="font-display text-2xl font-semibold tracking-wide">
            Concrete & Waves
          </h3>
          <p className="mt-4 mb-6 text-lg text-gray-600">{article.excerpt}</p>
          <div className="border-t border-gray-200">
            <Author name={article.author.name} role={article.author.role} />
          </div>
          <div>
            <button className="text-primary group inline-flex flex-row items-center justify-start gap-3 font-medium hover:cursor-pointer">
              <span className="transition-all group-hover:underline">
                Read Full Article
              </span>
              <FaArrowRight
                size={16}
                className="transition-all group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </Link>
    </section>
  )
}

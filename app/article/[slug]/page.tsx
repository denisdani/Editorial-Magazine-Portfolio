import { notFound } from "next/navigation"

import { getArticleBySlug } from "@/lib/articles"
import { Article } from "@/interfaces/article"

import { GoDotFill } from "react-icons/go"
import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa"

import Author from "@/components/author"
import Tag from "@/components/tag"
import ShareButton from "@/components/shareButton"
import TableOfContents from "@/components/tableOfContents"
import BlockRenderer from "@/components/blockRenderer"

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const article: Article = await getArticleBySlug(resolvedParams.slug)

  if (!article) {
    notFound()
  }

  const {
    category,
    title,
    author,
    publishedAt,
    readingTime,
    contentBlocks,
    tags,
  } = article

  return (
    <div>
      <section className="relative">
        <div>
          <div
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwIh2tVrXtRsPyFEJLviQeqbCRJi4nUVSTpzDjurBH2TOj31ISVuGj2v4_tXQhr6nOHsX3iObjgMA6eT6O-bdijCu8UuzI76w7hPAwQjxzH5etkv0msVtp5s09izcpPp7s-CAyb3xCp6eevd0Hl-u3MIjEv48Pgpu86L0aVhit3YE1AOaedLUsdHMBbwL8GJdVFjRvI_b1sB_ZKUa4nr71sz1MbYLAohd3I5cOskQJGPKmUoKU1xs7cIfFGA3LxtBCmiUfbzTFO8rQ')",
            }}
            className="h-[85vh] bg-cover bg-center bg-no-repeat"
          />

          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 text-white">
          <div>
            <Tag variant="primary">{category}</Tag>
          </div>
          <h1 className="font-display text-center text-5xl leading-[1.1] font-extrabold md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <Author name={author.name} role={author.role} white />
            <GoDotFill size={10} className="hidden md:inline" />
            <p className="text-sm">{new Date(publishedAt).toDateString()}</p>
            <GoDotFill size={10} className="hidden md:inline" />
            <p className="text-sm lowercase">{readingTime}</p>
          </div>
        </div>
      </section>

      <div className="relative mx-auto mt-16 grid max-w-360 grid-cols-12 px-6">
        <aside className="sticky top-20 col-span-3 hidden h-fit py-8 pr-6 lg:block">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            Contents
          </p>
          <TableOfContents content={contentBlocks} />
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            Share
          </p>
          <div className="mt-4 flex flex-row gap-4">
            <ShareButton href="">
              <FaTwitter className="text-gray-500" size={14} />
            </ShareButton>
            <ShareButton href="">
              <FaFacebook className="text-gray-500" size={14} />
            </ShareButton>
            <ShareButton href="">
              <FaLink className="text-gray-500" size={14} />
            </ShareButton>
          </div>
        </aside>
        <article className="relative col-span-12 lg:col-span-8 lg:pr-24">
          <BlockRenderer content={contentBlocks} />

          <div className="mt-16 mb-8 flex flex-row gap-4 border-t border-gray-200 pt-8">
            {tags.map((tag, i) => (
              <Tag key={i} variant="solid">
                {tag}
              </Tag>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}

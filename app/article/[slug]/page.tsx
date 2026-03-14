import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"

import { getArticleBySlug } from "@/lib/articles"
import { Article } from "@/interfaces/article"

import { GoDotFill } from "react-icons/go"
import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa"

import Author from "@/components/Author"
import Tag from "@/components/Tag"
import ShareButton from "@/components/ShareButton"
import TableOfContents from "@/components/TableOfContents"
import BlockRenderer from "@/components/BlockRenderer"
import RelatedArticles from "@/components/RelatedArticles"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolvedParams = await params
  const article: Article = await getArticleBySlug(resolvedParams.slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/article/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.coverImage.url,
          alt: article.coverImage.alt || article.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage.url],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params
  const article: Article = await getArticleBySlug(resolvedParams.slug)

  if (!article) {
    notFound()
  }

  const {
    coverImage,
    category,
    title,
    author,
    publishedAt,
    readingTime,
    contentBlocks,
    tags,
    relatedArticles,
  } = article

  return (
    <div>
      <section className="relative">
        <div className="h-[85vh]">
          <Image
            alt={coverImage.alt}
            src={coverImage.url}
            className="object-cover"
            fill
            priority
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

      <RelatedArticles slugs={relatedArticles} />
    </div>
  )
}

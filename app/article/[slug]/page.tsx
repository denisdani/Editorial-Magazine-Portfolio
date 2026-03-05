import { JSX } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"

import { cn } from "@/lib/utils"
import { getArticleBySlug } from "@/lib/articles"
import { Article } from "@/interfaces/article"

import { GoDotFill } from "react-icons/go"
import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa"

import Author from "@/components/author"
import Tag from "@/components/tag"
import ShareButton from "@/components/shareButton"
import TableOfContents from "@/components/tableOfContents"

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
            <Tag>{category}</Tag>
          </div>
          <h1 className="font-display text-center text-5xl leading-[1.1] font-extrabold md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <Author name={author.name} role={author.role} />
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
          {contentBlocks.map((block, i) => {
            switch (block.type) {
              case "paragraph":
                if (block.dropCap) {
                  return (
                    <p
                      key={i}
                      id="intro"
                      className="drop-cap font-display mb-10 scroll-mt-25 text-2xl leading-relaxed font-medium"
                    >
                      {block.text}
                    </p>
                  )
                }

                return (
                  <p key={i} className="mb-6 text-lg leading-relaxed">
                    {block.text}
                  </p>
                )

              case "image":
                return (
                  <div key={i} className="-mx-6 my-12 lg:-mx-16">
                    <figure>
                      <div className="relative aspect-video overflow-hidden rounded">
                        <Image
                          alt={block.alt!}
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4EEzm_b0XENMkKF0sxtRLua3iePAs9igkWFG-MAxRDER7kMehySvRKayVWREySgfHWqkIMnGzLvjqJJTO02kgaupPwnHxGLbP7OmOHgku97f1w5mI1zrR6OA2ptxTWrJ5f2hZ9cJ9DjyQdyZCmrjg1iRMSkVm_iJ0yYuxZDZraS-Odo1BLhpuQth_Q3XGdD1FS79xMjQaYyyt7ypbqBgNnRtd4surDc2ZQTQQKt8Ajj-TS6SQ6G3SjqGO_HpwhFbwIad-NRyuytf-"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-4 px-6 text-center text-sm font-medium text-gray-400">
                        {block.caption}
                      </figcaption>
                    </figure>
                  </div>
                )

              case "heading": {
                const Tag =
                  `h${block.level || 2}` as keyof JSX.IntrinsicElements

                return (
                  <Tag
                    key={i}
                    id={block.id}
                    className="font-display clear-both mb-6 scroll-mt-25 text-3xl font-bold"
                  >
                    {block.text}
                  </Tag>
                )
              }

              case "blockquote":
                return (
                  <div
                    key={i}
                    className="border-primary my-12 border-l-4 py-2 pl-8"
                  >
                    <blockquote className="font-display text-3xl leading-snug text-gray-400 italic">
                      {block.text}
                    </blockquote>
                  </div>
                )

              case "image_grid":
                return (
                  <div
                    key={i}
                    className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2"
                  >
                    {block.images?.map((image, i) => (
                      <figure
                        key={i}
                        className={cn("space-y-3", i % 2 !== 0 && "md:mt-12")}
                      >
                        <div className="relative aspect-3/4 overflow-hidden rounded">
                          <Image
                            fill
                            alt={image.alt}
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMJwEeGGT12KJJFzMggvD5q0Y7d91qFqoFULZQtSXKFdKHtTRgsuc_uTiI1Ugd6g19pMVB_aA2bC_vy4hXUKEqNdEeV2MxJMk3gMFCFkRZB6o1m6AFsYC0BIwDhMBWv_IN23s68FSN-BEj5GfAIULmK6XhPpzKRLSBdtTaN2MqAQtl7uSYhz8y5KlI09JuwrPOd26HuEICGCsiIF-BKFpmtRrE13TW1qnnkxEOAf3B16p3tvYnXY_v_328jauI-h8WZ1sNtpiy1STq"
                          />
                        </div>
                        <figcaption className="text-xs tracking-wide text-gray-500 uppercase">
                          {image.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )
            }

            return null
          })}

          <div className="mt-16 mb-8 flex flex-row gap-4 border-t border-gray-200 pt-8">
            {tags.map((tag, i) => (
              <Tag key={i} solid>
                {tag}
              </Tag>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"

import Tag from "@/components/Tag"

interface ArticleCardProps {
  title: string
  subtitle: string
  category: string
  bgUrl: string
  slug: string
  aspect?: string
}

export default function ArticleCard({
  title,
  subtitle,
  category,
  bgUrl,
  slug,
  aspect,
}: ArticleCardProps) {
  return (
    <article className={cn("group", aspect && "row-span-2")}>
      <Link href={`/article/${slug}`}>
        <div
          className={cn(
            "relative overflow-hidden rounded",
            aspect ? `aspect-${aspect}` : "aspect-video",
          )}
        >
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-105">
            <Image
              alt={title}
              src={bgUrl}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <Tag variant="transparent">{category}</Tag>
        </div>
        <h3 className="group-hover:text-primary font-display mt-4 text-2xl font-bold transition-colors md:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
      </Link>
    </article>
  )
}

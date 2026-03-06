import { JSX } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { ContentBlock } from "@/interfaces/article"

interface BlockRendererProps {
  content: ContentBlock[]
}

export default function BlockRenderer({ content }: BlockRendererProps) {
  return (
    <>
      {content.map((block, i) => {
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

          case "heading":
            const Tag = `h${block.level || 2}` as keyof JSX.IntrinsicElements

            return (
              <Tag
                key={i}
                id={block.id}
                className="font-display clear-both mb-6 scroll-mt-25 text-3xl font-bold"
              >
                {block.text}
              </Tag>
            )

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
    </>
  )
}

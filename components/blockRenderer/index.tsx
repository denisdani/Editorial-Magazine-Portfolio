import Image from "next/image"

import { cn } from "@/lib/utils"
import { ContentBlock } from "@/interfaces/article"

import ParagraphBlock from "@/components/blockRenderer/blocks/paragraphBlock"
import ImageBlock from "@/components/blockRenderer/blocks/imageBlock"
import HeadingBlock from "@/components/blockRenderer/blocks/headingBlock"
import BlockQuoteBlock from "@/components/blockRenderer/blocks/blockQuoteBlock"

interface BlockRendererProps {
  content: ContentBlock[]
}

export default function BlockRenderer({ content }: BlockRendererProps) {
  return (
    <>
      {content.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <ParagraphBlock
                key={i}
                dropCap={block.dropCap}
                text={block.text!}
              />
            )

          case "image":
            return (
              <ImageBlock
                key={i}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4EEzm_b0XENMkKF0sxtRLua3iePAs9igkWFG-MAxRDER7kMehySvRKayVWREySgfHWqkIMnGzLvjqJJTO02kgaupPwnHxGLbP7OmOHgku97f1w5mI1zrR6OA2ptxTWrJ5f2hZ9cJ9DjyQdyZCmrjg1iRMSkVm_iJ0yYuxZDZraS-Odo1BLhpuQth_Q3XGdD1FS79xMjQaYyyt7ypbqBgNnRtd4surDc2ZQTQQKt8Ajj-TS6SQ6G3SjqGO_HpwhFbwIad-NRyuytf-"
                alt={block.alt!}
                caption={block.caption!}
              />
            )

          case "heading":
            return (
              <HeadingBlock
                key={i}
                level={block.level!}
                id={block.id!}
                text={block.text!}
              />
            )

          case "blockquote":
            return <BlockQuoteBlock text={block.text!} />

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

import { ContentBlock } from "@/interfaces/article"

import ParagraphBlock from "@/components/blockRenderer/blocks/paragraphBlock"
import ImageBlock from "@/components/blockRenderer/blocks/imageBlock"
import HeadingBlock from "@/components/blockRenderer/blocks/headingBlock"
import BlockQuoteBlock from "@/components/blockRenderer/blocks/blockQuoteBlock"
import ImageGridBlock from "@/components/blockRenderer/blocks/imageGridBlock"

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
            return <BlockQuoteBlock key={i} text={block.text!} />

          case "image_grid":
            return <ImageGridBlock key={i} images={block.images!} />
        }

        return null
      })}
    </>
  )
}

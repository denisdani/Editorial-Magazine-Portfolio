import { ContentBlock } from "@/interfaces/article"

import ParagraphBlock from "@/components/BlockRenderer/blocks/ParagraphBlock"
import ImageBlock from "@/components/BlockRenderer/blocks/ImageBlock"
import HeadingBlock from "@/components/BlockRenderer/blocks/HeadingBlock"
import BlockQuoteBlock from "@/components/BlockRenderer/blocks/BlockQuoteBlock"
import ImageGridBlock from "@/components/BlockRenderer/blocks/ImageGridBlock"

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
                src={block.url!}
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

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

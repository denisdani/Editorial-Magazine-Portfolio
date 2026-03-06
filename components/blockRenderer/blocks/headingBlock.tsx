import { JSX } from "react"

interface HeadingBlockProps {
  level: number
  id: string
  text: string
}

export default function HeadingBlock({ level, id, text }: HeadingBlockProps) {
  const Tag = `h${level || 2}` as keyof JSX.IntrinsicElements

  return (
    <Tag
      id={id}
      className="font-display clear-both mb-6 scroll-mt-25 text-3xl font-bold"
    >
      {text}
    </Tag>
  )
}

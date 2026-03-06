interface ParagraphBlockProps {
  dropCap?: boolean
  text: string
}

export default function ParagraphBlock({ dropCap, text }: ParagraphBlockProps) {
  if (dropCap) {
    return (
      <p
        id="intro"
        className="drop-cap font-display mb-10 scroll-mt-25 text-2xl leading-relaxed font-medium"
      >
        {text}
      </p>
    )
  }

  return <p className="mb-6 text-lg leading-relaxed">{text}</p>
}

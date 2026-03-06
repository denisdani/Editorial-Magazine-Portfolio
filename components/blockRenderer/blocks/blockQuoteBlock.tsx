interface BlockQuoteBlockProps {
  text: string
}

export default function BlockQuoteBlock({ text }: BlockQuoteBlockProps) {
  return (
    <div className="border-primary my-12 border-l-4 py-2 pl-8">
      <blockquote className="font-display text-3xl leading-snug text-gray-400 italic">
        {text}
      </blockquote>
    </div>
  )
}

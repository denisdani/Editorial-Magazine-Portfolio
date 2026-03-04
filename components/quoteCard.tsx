import { RiDoubleQuotesR } from "react-icons/ri"

interface QuoteCardProps {
  text: string
  author: string
}

export default function QuoteCard({ text, author }: QuoteCardProps) {
  return (
    <div className="bg-primary/5 border-primary/10 flex flex-col items-center justify-center space-y-4 rounded border p-8 text-center">
      <span className="material-symbols-outlined text-primary text-4xl">
        <RiDoubleQuotesR />
      </span>
      <blockquote className="text-ink font-serif text-xl leading-relaxed font-medium italic md:text-2xl">
        &quot;{text}&quot;
      </blockquote>
      <cite className="text-sm font-semibold text-gray-500 not-italic">
        — {author}
      </cite>
    </div>
  )
}

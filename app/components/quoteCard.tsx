import { RiDoubleQuotesR } from "react-icons/ri"

interface QuoteCardProps {
  text: string
  author: string
}

export default function QuoteCard({ text, author }: QuoteCardProps) {
  return (
    <div className="p-8 bg-primary/5 rounded flex flex-col justify-center items-center text-center space-y-4 border border-primary/10">
      <span className="material-symbols-outlined text-primary text-4xl">
        <RiDoubleQuotesR />
      </span>
      <blockquote className="font-serif text-xl md:text-2xl font-medium text-ink italic leading-relaxed">
        &quot;{text}&quot;
      </blockquote>
      <cite className="text-sm font-semibold not-italic text-gray-500">
        — {author}
      </cite>
    </div>
  )
}

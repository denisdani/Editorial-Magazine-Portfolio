import Link from "next/link"

interface StoryCardProps {
  title: string
  subtitle: string
  category: string
  bgUrl: string
  aspect?: string
}

export default function StoryCard({
  title,
  subtitle,
  category,
  bgUrl,
  aspect = "aspect-16/9",
}: StoryCardProps) {
  const rowSpanClass = aspect === "aspect-3/4" ? "row-span-2" : ""

  return (
    <article className={`group ${rowSpanClass}`}>
      <Link href={"/article"}>
        <div className={`${aspect} relative overflow-hidden rounded`}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${bgUrl})` }}
          ></div>
          <span className="relative top-4 left-4 rounded-xs bg-white/90 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase">
            {category}
          </span>
        </div>
        <h3 className="group-hover:text-primary font-display mt-4 text-2xl font-bold transition-colors md:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
      </Link>
    </article>
  )
}

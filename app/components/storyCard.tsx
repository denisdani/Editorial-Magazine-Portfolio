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
    <article className={`group ${rowSpanClass} hover:cursor-pointer`}>
      <div className={`${aspect} relative rounded overflow-hidden`}>
        <div
          className="bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-all duration-700 absolute inset-0"
          style={{ backgroundImage: `url(${bgUrl})` }}
        ></div>
        <span className="relative top-4 left-4 bg-white/90 uppercase text-xs py-1.5 px-3 rounded-xs tracking-wider font-semibold">
          {category}
        </span>
      </div>
      <h3 className="group-hover:text-primary font-display font-bold text-2xl md:text-xl mt-4 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
    </article>
  )
}

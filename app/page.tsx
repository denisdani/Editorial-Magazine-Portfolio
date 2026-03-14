import { getAllArticles } from "@/lib/articles"

import HeroStoryCard from "@/components/HeroStoryCard"
import LatestStories from "@/components/LatestStories"

export default async function Home() {
  const articles = await getAllArticles()
  const latestStories = articles.slice(1)

  return (
    <div className="mx-auto my-12 max-w-360 px-6">
      <HeroStoryCard article={articles[0]} />
      <LatestStories articles={latestStories} />
    </div>
  )
}

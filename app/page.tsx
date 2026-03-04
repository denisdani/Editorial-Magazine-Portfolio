import HeroCard from "@/components/heroCard"
import LatestStories from "@/components/latestStories"

export default function Home() {
  return (
    <div className="mx-auto my-12 max-w-360 px-6">
      <HeroCard />
      <LatestStories />
    </div>
  )
}

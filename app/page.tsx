import Hero from "./components/hero"
import LatestStories from "./components/latestStories"

export default function Home() {
  return (
    <div className="mx-auto my-12 max-w-360 px-6">
      <Hero />
      <LatestStories />
    </div>
  )
}

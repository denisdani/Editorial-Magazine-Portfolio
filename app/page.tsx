import Hero from "./components/hero"
import LatestStories from "./components/latestStories"
import Newsletter from "./components/newsletter"

export default function Home() {
  return (
    <div className="my-12">
      <Hero />
      <LatestStories />
      <Newsletter />
    </div>
  )
}

import Hero from "./components/hero"
import LatestStories from "./components/latestStories"
import Newsletter from "./components/newsletter"

export default function Home() {
  return (
    <main className="mx-auto my-12 max-w-360 px-6">
      <Hero />
      <LatestStories />
      <Newsletter />
    </main>
  )
}

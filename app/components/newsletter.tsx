export default function Newsletter() {
  return (
    <section className="mb-12 rounded border border-stone-200 bg-white px-8 py-16">
      <div className="m-auto flex max-w-2xl flex-col items-center">
        <h3 className="font-display text-3xl font-bold md:text-4xl">
          Design Weekly
        </h3>
        <p className="my-8 text-center text-lg text-gray-500">
          Curated inspiration delivered to your inbox every Tuesday. Join
          45,000+ architects and designers.
        </p>
        <div className="mx-auto flex w-full max-w-md flex-col gap-3 md:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="bg-background focus:border-primary focus:ring-primary flex-1 rounded-xs border border-stone-200 px-4 py-3 focus:ring-1 focus:outline-none"
          />
          <input
            type="submit"
            value="Join"
            className="rounded-xs bg-black px-8 py-3 font-semibold text-white"
          />
        </div>
        <p className="mt-6 text-xs text-gray-400">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

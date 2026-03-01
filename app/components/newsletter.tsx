export default function Newsletter() {
  return (
    <section className="bg-white rounded py-16 px-8 mb-12 border border-stone-200">
      <div className="flex flex-col items-center max-w-2xl m-auto">
        <h3 className="font-display font-bold text-3xl md:text-4xl">
          Design Weekly
        </h3>
        <p className="my-8 text-lg text-gray-500 text-center">
          Curated inspiration delivered to your inbox every Tuesday. Join
          45,000+ architects and designers.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-background px-4 rounded-xs border border-stone-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary py-3"
          />
          <input
            type="submit"
            value="Join"
            className="bg-black text-white px-8 py-3 rounded-xs font-semibold"
          />
        </div>
        <p className="text-xs text-gray-400 mt-6">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

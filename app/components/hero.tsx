import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3 p-6 md:p-10 rounded flex flex-col justify-end aspect-16/10 relative overflow-hidden group">
        <div
          className="bg-cover bg-no-repeat bg-center group-hover:scale-105 transition-transform duration-700 absolute inset-0"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwIh2tVrXtRsPyFEJLviQeqbCRJi4nUVSTpzDjurBH2TOj31ISVuGj2v4_tXQhr6nOHsX3iObjgMA6eT6O-bdijCu8UuzI76w7hPAwQjxzH5etkv0msVtp5s09izcpPp7s-CAyb3xCp6eevd0Hl-u3MIjEv48Pgpu86L0aVhit3YE1AOaedLUsdHMBbwL8GJdVFjRvI_b1sB_ZKUa4nr71sz1MbYLAohd3I5cOskQJGPKmUoKU1xs7cIfFGA3LxtBCmiUfbzTFO8rQ')",
          }}
        />
        <div className="relative">
          <span className="bg-primary uppercase text-xs text-white py-1.5 px-3 rounded-xs tracking-wider font-semibold">
            Feature Story
          </span>
          <h2 className="font-display text-3xl md:text-5xl xl:text-6xl font-bold mt-6 text-white">
            The Brutalist Revival in Coastal Japan
          </h2>
        </div>
      </div>
      <div className="w-full lg:w-1/3 py-8 lg:p-8 flex flex-col justify-center">
        <h3 className="font-display font-semibold text-2xl tracking-wide">
          Concrete & Waves
        </h3>
        <p className="text-gray-600 text-lg mt-4 mb-6">
          Exploring how a new wave of architects in Kanagawa are reimagining raw
          concrete aesthetics to harmonize with the harsh, beautiful seaside
          environment.
        </p>
        <div className="flex flex-row items-center gap-3 py-4 border-t border-gray-200">
          <span className="rounded-full bg-amber-500 text-white text-sm aspect-square w-10 h-10 inline-flex justify-center items-center">
            TK
          </span>
          <div>
            <p className="text-sm font-medium">Takeshi Kovacs</p>
            <p className="text-gray-500 text-xs">Senior Editor</p>
          </div>
        </div>
        <div>
          <Link
            href={"#"}
            className="inline-flex flex-row items-center text-primary gap-3 font-medium group justify-start"
          >
            <span className="group-hover:underline transition-all">
              Read Full Article
            </span>
            <FaArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-all"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

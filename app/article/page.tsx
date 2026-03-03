import { GoDotFill } from "react-icons/go"

import Editor from "../components/editor"
import Tag from "../components/tag"
import ShareButton from "../components/shareButton"
import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa"
import Image from "next/image"

export default function ArticlePage() {
  return (
    <div>
      <section className="relative">
        <div>
          <div
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwIh2tVrXtRsPyFEJLviQeqbCRJi4nUVSTpzDjurBH2TOj31ISVuGj2v4_tXQhr6nOHsX3iObjgMA6eT6O-bdijCu8UuzI76w7hPAwQjxzH5etkv0msVtp5s09izcpPp7s-CAyb3xCp6eevd0Hl-u3MIjEv48Pgpu86L0aVhit3YE1AOaedLUsdHMBbwL8GJdVFjRvI_b1sB_ZKUa4nr71sz1MbYLAohd3I5cOskQJGPKmUoKU1xs7cIfFGA3LxtBCmiUfbzTFO8rQ')",
            }}
            className="h-[85vh] bg-cover bg-center bg-no-repeat"
          />

          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 text-white">
          <div>
            <Tag>Feature Story</Tag>
          </div>
          <h1 className="font-display text-center text-5xl leading-[1.1] font-extrabold md:text-7xl lg:text-8xl">
            The Brutalist Revival in Coastal Japan
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <Editor />
            <GoDotFill size={10} className="hidden md:inline" />
            <p className="text-sm">October 24, 2023</p>
            <GoDotFill size={10} className="hidden md:inline" />
            <p className="text-sm">12 min read</p>
          </div>
        </div>
      </section>

      <div className="relative mx-auto mt-16 grid max-w-360 grid-cols-12 px-6">
        <aside className="sticky top-20 col-span-3 hidden h-fit py-8 pr-6 lg:block">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            Contents
          </p>
          <nav className="mt-2 mr-16 mb-8 border-y border-gray-200 py-8">
            <div className="relative border-l border-gray-200 pl-4">
              <div className="bg-primary absolute top-0 -left-px h-8 w-0.5 transition-all duration-300 ease-out"></div>
              <ul className="space-y-6 text-sm font-medium text-gray-400/80">
                <li>
                  <a
                    className="hover:text-primary block font-bold text-gray-400 transition-colors"
                    href="#intro"
                  >
                    Intro
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary block transition-colors"
                    href="#materiality"
                  >
                    Materiality
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary block transition-colors"
                    href="#human-element"
                  >
                    The Human Element
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary block transition-colors"
                    href="#legacy"
                  >
                    Legacy
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            Share
          </p>
          <div className="mt-4 flex flex-row gap-4">
            <ShareButton href="">
              <FaTwitter className="text-gray-500" size={14} />
            </ShareButton>
            <ShareButton href="">
              <FaFacebook className="text-gray-500" size={14} />
            </ShareButton>
            <ShareButton href="">
              <FaLink className="text-gray-500" size={14} />
            </ShareButton>
          </div>
        </aside>
        <article className="relative col-span-12 lg:col-span-8 lg:pr-24">
          <section id="intro" className="scroll-mt-25">
            <p className="drop-cap font-display mb-10 text-2xl leading-relaxed font-medium">
              The salt air of Kanagawa has always been an enemy to the built
              environment. Wood rots, steel rusts, and paint peels in the
              relentless humidity of the Japanese summer. Yet, in this harsh
              coastal crucible, a new generation of architects is rediscovering
              the stoic beauty of raw concrete.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              This is not the brutalism of 1960s government housing or the
              imposing citadels of the post-war era. This is something softer,
              more attuned to the rhythms of nature—a &quot;Neo-Japandi
              Brutalism&quot; that seeks not to dominate the landscape, but to
              endure within it.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              We traveled along the Shonan coastline to document three private
              residences that embody this shift. These structures stand as
              monoliths against the crashing Pacific waves, their grey facades
              acting as canvases for the ever-changing light of the sea.
            </p>

            <div className="-mx-6 my-12 lg:-mx-16">
              <figure>
                <div className="relative aspect-video overflow-hidden rounded">
                  <Image
                    alt="The 'Kamakura Monolith' interior, utilizing
                light wells to soften the concrete walls."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4EEzm_b0XENMkKF0sxtRLua3iePAs9igkWFG-MAxRDER7kMehySvRKayVWREySgfHWqkIMnGzLvjqJJTO02kgaupPwnHxGLbP7OmOHgku97f1w5mI1zrR6OA2ptxTWrJ5f2hZ9cJ9DjyQdyZCmrjg1iRMSkVm_iJ0yYuxZDZraS-Odo1BLhpuQth_Q3XGdD1FS79xMjQaYyyt7ypbqBgNnRtd4surDc2ZQTQQKt8Ajj-TS6SQ6G3SjqGO_HpwhFbwIad-NRyuytf-"
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 px-6 text-center text-sm font-medium text-gray-400">
                  Figure 1: The &apos;Kamakura Monolith&apos; interior,
                  utilizing light wells to soften the concrete walls.
                </figcaption>
              </figure>
            </div>
          </section>
          <section id="materiality" className="scroll-mt-25">
            <div className="mt-12 mb-16">
              <h2 className="font-display mb-6 text-3xl font-bold">
                Materiality
              </h2>
              <p className="mb-6 text-lg leading-relaxed">
                The choice of concrete is pragmatic, but the execution is
                poetic. Architect Yumi Tanaka, whose &apos;House of
                Silence&apos; in Hayama has garnered international acclaim,
                explains that the texture is paramount. &quot;We use cedar
                formwork,&quot; she tells us, running a hand along a wall that
                bears the grain of timber long since removed. &quot;The concrete
                remembers the wood. It holds the memory of the forest even as it
                resists the ocean.&quot;
              </p>
              <div className="border-primary my-12 border-l-4 py-2 pl-8">
                <blockquote className="font-display text-3xl leading-snug text-gray-400 italic">
                  &quot;The concrete remembers the wood. It holds the memory of
                  the forest even as it resists the ocean.&quot;
                </blockquote>
              </div>
              <p className="mb-6 text-lg leading-relaxed">
                This textural interplay softens the acoustic harshness typically
                associated with minimalist spaces. The rough surfaces diffuse
                sound, creating an interior atmosphere that feels hushed and
                sacred, a stark contrast to the roar of the surf just meters
                away.
              </p>
            </div>

            <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              <figure className="space-y-3">
                <div className="relative aspect-3/4 overflow-hidden rounded">
                  <Image
                    fill
                    alt="Detail of wooden staircase against concrete"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMJwEeGGT12KJJFzMggvD5q0Y7d91qFqoFULZQtSXKFdKHtTRgsuc_uTiI1Ugd6g19pMVB_aA2bC_vy4hXUKEqNdEeV2MxJMk3gMFCFkRZB6o1m6AFsYC0BIwDhMBWv_IN23s68FSN-BEj5GfAIULmK6XhPpzKRLSBdtTaN2MqAQtl7uSYhz8y5KlI09JuwrPOd26HuEICGCsiIF-BKFpmtRrE13TW1qnnkxEOAf3B16p3tvYnXY_v_328jauI-h8WZ1sNtpiy1STq"
                  />
                </div>
                <figcaption className="text-xs tracking-wide text-gray-500 uppercase">
                  Detail: Joinery meets Cement
                </figcaption>
              </figure>
              <figure className="space-y-3 md:mt-12">
                <div className="relative aspect-3/4 overflow-hidden rounded">
                  <Image
                    fill
                    alt="Exterior facade showing weathering"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6lJXxhfef7FbLeOMdbukMRNp2ziEUHHcH7qt4uic5l97OlNRBnTliDXTS-e--cub4umrfeRmp8w1t1Tjli2_GpMkRoDsUucRv-RLHjZJw2zNkVutnIuNSs12dFnmI6Uudi6GOqFspEaecbgnHCyOrMx7aNBWkfzPX4fXmQXaHg0ucZND68DqT2nrmo949F-UPA82jSffBKuBJ_CrWsFW02lj1ANZbVsAgjAOuNADqq_DwWqlWwqvxCV1-RkBnpNlFdSxN2pXoA3OQ"
                  />
                </div>
                <figcaption className="text-xs tracking-wide text-gray-500 uppercase">
                  Detail: Weathered Patina
                </figcaption>
              </figure>
            </div>
          </section>
          <section id="human-element" className="mb-16 scroll-mt-25">
            <h2 className="font-display mb-6 text-3xl font-bold">
              The Human Element
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Critics of brutalism often cite its coldness, its lack of
              domesticity. However, these coastal homes are filled with warmth.
              The secret lies in the curation of furnishings and the
              manipulation of natural light.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              In the &apos;Enoshima Retreat&apos;, vintage Scandinavian teak
              furniture provides a necessary counterpoint to the grey shell.
              Rugs woven from natural fibers define living zones without the
              need for walls. The result is an open plan that feels intimate, a
              cave that looks out onto the world.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              The windows are not merely holes in the wall; they are carefully
              calibrated lenses. Some frame the horizon, others the sky, and
              some, placed low near the floor, capture the garden&apos;s moss,
              grounding the residents in the earth.
            </p>
          </section>

          <section id="legacy" className="mb-12 scroll-mt-25">
            <h2 className="mb-6 font-serif text-3xl font-bold">Legacy</h2>
            <p className="mb-6 text-lg leading-relaxed">
              As we depart Kanagawa, the sun begins to set, casting long shadows
              across the textured facades. These buildings will age. Moss will
              grow in the crevices of the concrete. The salt will eventually
              leave its mark. But that is the point. They are built to age
              gracefully, to become part of the coastline rather than an
              imposition upon it.
            </p>
            <p className="text-lg leading-relaxed">
              In a world obsessed with the new and the shiny, the brutalist
              revival in coastal Japan offers a different lesson: there is a
              profound elegance in durability, and a quiet beauty in strength.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}

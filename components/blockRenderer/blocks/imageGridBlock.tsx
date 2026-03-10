import Image from "next/image"

import { cn } from "@/lib/utils"
import { Image as ImageProp } from "@/interfaces/article"

interface ImageGridBlockProps {
  images: ImageProp[]
}

export default function ImageGridBlock({ images }: ImageGridBlockProps) {
  return (
    <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2">
      {images?.map((image, i) => (
        <figure key={i} className={cn("space-y-3", i % 2 !== 0 && "md:mt-12")}>
          <div className="relative aspect-3/4 overflow-hidden rounded">
            <Image
              fill
              alt={image.alt}
              className="object-cover transition-transform duration-700 hover:scale-105"
              src={image.url}
            />
          </div>
          <figcaption className="text-xs tracking-wide text-gray-500 uppercase">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

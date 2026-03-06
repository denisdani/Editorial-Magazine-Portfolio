import Image from "next/image"

interface ImageBlockProps {
  alt: string
  caption: string
  src: string
}

export default function ImageBlock({ alt, caption, src }: ImageBlockProps) {
  return (
    <div className="-mx-6 my-12 lg:-mx-16">
      <figure>
        <div className="relative aspect-video overflow-hidden rounded">
          <Image alt={alt} src={src} fill className="object-cover" />
        </div>
        <figcaption className="mt-4 px-6 text-center text-sm font-medium text-gray-400">
          {caption}
        </figcaption>
      </figure>
    </div>
  )
}

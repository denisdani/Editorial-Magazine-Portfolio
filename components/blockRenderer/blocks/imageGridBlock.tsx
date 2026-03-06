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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMJwEeGGT12KJJFzMggvD5q0Y7d91qFqoFULZQtSXKFdKHtTRgsuc_uTiI1Ugd6g19pMVB_aA2bC_vy4hXUKEqNdEeV2MxJMk3gMFCFkRZB6o1m6AFsYC0BIwDhMBWv_IN23s68FSN-BEj5GfAIULmK6XhPpzKRLSBdtTaN2MqAQtl7uSYhz8y5KlI09JuwrPOd26HuEICGCsiIF-BKFpmtRrE13TW1qnnkxEOAf3B16p3tvYnXY_v_328jauI-h8WZ1sNtpiy1STq"
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

export interface Article {
  id: string
  slug: string
  title: string
  category: string
  author: Author
  publishedAt: string
  readingTime: string
  excerpt: string
  coverImage: CoverImage
  aspect?: string
  tags: string[]
  contentBlocks: ContentBlock[]
  relatedArticles: string[]
}

export interface Author {
  name: string
  role: string
  avatarUrl: string
}

export interface CoverImage {
  url: string
  alt: string
}

export interface ContentBlock {
  type: string
  dropCap?: boolean
  text?: string
  url?: string
  alt?: string
  caption?: string
  level?: number
  id?: string
  author?: string
  layout?: string
  images?: Image[]
}

export interface Image {
  url: string
  alt: string
  caption: string
}

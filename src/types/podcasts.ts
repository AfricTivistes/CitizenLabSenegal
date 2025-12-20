export interface Podcast {
  id: number
  slug: string
  title: string
  category: string
  date: string
  episode: string
  description: string
  audioHtml: string
  coverImage?: string
  content: string
}

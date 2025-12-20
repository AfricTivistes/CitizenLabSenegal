export type ContentType = "podcast" | "actualite" | "video";

export interface RoutableContent {
  slug: string;
  type: ContentType;
}

export function getContentUrl({ slug, type }: RoutableContent): string {
  switch (type) {
    case "podcast":
      return `/podcasts/${slug}`;
    case "actualite":
      return `/news/${slug}`;
    case "video":
      return `/videos/${slug}`;
    default:
      return "/";
  }
}

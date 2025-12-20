import type { ContentType } from "~/utils/contentRouting.js";

export function resolveContentType(post: any): ContentType {
  if (post.categories?.nodes?.some((c) => c.slug === "podcasts")) {
    return "podcast";
  }

  if (post.categories?.nodes?.some((c) => c.slug === "videos")) {
    return "video";
  }

  return "actualite";
}

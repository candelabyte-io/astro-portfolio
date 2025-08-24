import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCollection } from "astro:content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getTagsWithCounts() {
  const allPosts = await getCollection("posts", ({ data }) => !data.draft);
  
  // Create a map to store tag counts
  const tagCountMap = new Map<string, number>();
  
  // Count occurrences of each tag
  allPosts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag: string) => {
        const currentCount = tagCountMap.get(tag) || 0;
        tagCountMap.set(tag, currentCount + 1);
      });
    }
  });
  
  // Convert map to array of objects with tag name and count
  const tagsWithCounts = Array.from(tagCountMap.entries()).map(([tag, count]) => ({
    tag,
    count
  }));
  
  // Sort by tag name alphabetically
  return tagsWithCounts.sort((a, b) => a.tag.localeCompare(b.tag));
}

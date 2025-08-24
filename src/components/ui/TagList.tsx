import React from "react";

interface Tag {
  tag: string;
  count: number;
}

interface TagListProps {
  tags: Tag[] | string[];
}

export function TagList({ tags }: TagListProps) {
  // Check if tags are in the new format (with counts)
  const hasCounts = tags.length > 0 && typeof tags[0] !== "string";
  
  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {tags.map((tagItem) => {
        // Handle both formats of tags
        const tag = hasCounts ? (tagItem as Tag).tag : (tagItem as string);
        const count = hasCounts ? (tagItem as Tag).count : null;
        
        return (
          <a
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
            className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {tag}
            {count !== null && (
              <span className="ml-1 px-1.5 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                {count}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}

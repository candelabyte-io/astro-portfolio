import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    image: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
  }),
});

export const collections = {
  posts,
  projects,
};

export const SiteConfig = {
  postsPerPage: 5,
  githubUrl: "https://github.com/candelabyte-io",
  githubProjectURL: "https://github.com/candelabyte-io/candela-template",
  xUrl: "https://x.com/candelabyte",
  linkedinUrl: "https://www.linkedin.com/in/candelabyte",
  instagramUrl: "https://www.instagram.com/candelabyte",
  siteTitle: "Candela Template",
  siteDescription:
    "Candela template build with Astro, TailwindCSS and shadcn/ui",
  showForkButton: true,
  defaultTheme: "dark",
};

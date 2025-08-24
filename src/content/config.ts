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
  postsPerPage: 10,
  githubUrl: "https://github.com/jcarloscandela",
  xUrl: "https://x.com/jcarloscandela",
  linkedinUrl: "https://www.linkedin.com/in/jcarloscandela/",
  instagramUrl: "",
  siteTitle: "Astro Portfolio",
  siteDescription: "A modern Astro template with Shadcn UI components.",
  defaultLanguage: "en",
  theme: "light",
};

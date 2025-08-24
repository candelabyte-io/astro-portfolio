// @ts-check
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

const site = process.env.VERCEL
  ? process.env.VERCEL_ENV === "production"
    ? "https://astro-shadcn-ui-template.vercel.app"
    : `https://${process.env.VERCEL_URL}`
  : process.env.GITHUB_PAGES
  ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${process.env.GITHUB_REPOSITORY_NAME}`
  : (process.env.SITE ?? "http://localhost:4321");
const base = process.env.BASE || (process.env.GITHUB_PAGES ? `/${process.env.GITHUB_REPOSITORY_NAME}/` : "/");

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [react(), mdx()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

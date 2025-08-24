# Astro shadcn/ui template

> **Note:** This project is based on the work of [area44/astro-shadcn-ui-template](https://github.com/area44/astro-shadcn-ui-template).

A modern starter template using [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/)—perfect for building fast, accessible, and themeable web apps.

---

## Getting Started

Before you begin, ensure that you have **Node.js** and **pnpm** installed.

### Setup

```bash
git clone https://github.com/jcarloscandela/astro-shadcn-ui-template
cd astro-shadcn-ui-template
pnpm install
pnpm dev
```

Open your browser and go to [http://localhost:4321](http://localhost:4321) to see the app running.

## Features

- Written in Markdown
- Styled with Tailwind CSS
- Beautiful UI components from shadcn/ui
- Fast and efficient with Astro
- Accessible and themeable design

## Deployment

This template comes pre-configured for deployment on **Vercel**, **Netlify**, and **GitHub Pages**.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjcarloscandela%2Fastro-shadcn-ui-template)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Select your repository
4. Vercel will automatically detect the Astro configuration and deploy your site

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fjcarloscandela%2Fastro-shadcn-ui-template)

1. Click the "Deploy to Netlify" button above
2. Connect your GitHub account
3. Select your repository
4. Netlify will automatically detect the Astro configuration and deploy your site

### Deploy to GitHub Pages

This template includes a GitHub Actions workflow that automatically deploys your site to GitHub Pages when you push to the main branch.

GitHub Pages offers two deployment options:

- **Repository Name**: Must be exactly `[your-username].github.io` (e.g., `jcarloscandela.github.io`)
- **Deployed URL**: `https://[your-username].github.io/` (root domain)
- **Setup**: 
  1. Rename your repository to `[your-username].github.io`
  2. Update the Astro configuration if needed (the template supports both options)

**Deployment Steps:**
1. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Click on "Settings" → "Pages"
   - Under "Build and deployment", select "GitHub Actions" as the source

2. Push your code to the main branch:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. The GitHub Actions workflow will automatically build and deploy your site

## Adding Components

shadcn/ui provides pre-built, accessible UI components. To add one:

1. Follow the official [Astro installation guide](https://ui.shadcn.com/docs/installation/astro).
2. Pick a component (e.g., [Accordion](https://ui.shadcn.com/docs/components/accordion), [Dialog](https://ui.shadcn.com/docs/components/dialog)) and follow the usage instructions.

> [!NOTE] 
> In Astro, an [island](https://docs.astro.build/en/concepts/islands/) is an interactive component rendered on the client. For complex or dynamic components, check [Add a Shadcn UI Component | Space Madness Stack](https://spacemadness.dev/docs/add-a-shadcn-ui-component)

If you're new to using React (or other frameworks) inside Astro, start with the [Framework Components guide](https://docs.astro.build/en/guides/framework-components/).

## License

This project is licensed under the [MIT License](LICENSE).

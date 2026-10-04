# Cinematic Portfolio

A film portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding your own content

Everything content-related lives in two files — no CMS, no other files need to change:

- **`src/data/site.ts`** — your name, bio, philosophy, education, experience, skills, achievements, contact details, and social links. Fields still carrying placeholder text are marked `// TODO`.
- **`src/data/projects.ts`** — one object per film. Add a new project by adding a new object to the `projects` array; it automatically appears in the Work archive, the home page (if `featured: true`), and gets its own `/work/[slug]` page.

### Replacing placeholder imagery

Every image referenced in those two files currently points at a generated placeholder under `public/images/...` (dark gradients with a recurring aperture-ring motif, one palette per category). To swap in a real photo or poster, either:

- overwrite the file at the same path, or
- add your new image under `public/images/` and update the path in `site.ts` / `projects.ts`.

`scripts/generate-placeholders.mjs` is what generated the current placeholder set — re-run it with `node scripts/generate-placeholders.mjs` if you ever want to regenerate or extend it (e.g. after adding a new project slug).

### Trailers / showreel

Project trailers (`trailerUrl` in `projects.ts`) and the homepage showreel accept a Vimeo or YouTube URL. Leave the field unset and the site shows an honest "Screener Available on Request" panel instead of a broken embed.

### Contact form

This is a static site with no backend, so the contact form opens the visitor's email client with the message prefilled (see `src/components/contact/ContactForm.tsx`). If you add a server later (a Route Handler + email provider, or a service like Formspree/Resend), only that file's submit handler needs to change.

## Deployment

Deploys to [Vercel](https://vercel.com/new) with zero config. Set the `NEXT_PUBLIC_SITE_URL` environment variable to your production domain (e.g. `https://yourname.com`) — it's used for canonical URLs, the sitemap, and Open Graph metadata.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React

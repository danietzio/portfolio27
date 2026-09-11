# Portfolio

A clean, single-column portfolio site: intro, a work-experience timeline,
a list of projects (each with its own case-study page), an about page,
and a "fun" page for side interests.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Make it yours

Almost everything lives in one file:

**`src/data/content.js`** — your name, tagline, resume link, social links,
work experience, and every project (title, summary, case-study body text).
Edit this file first; the rest of the site reads from it automatically.

To add a new project, just add another object to the `projects` array with
a unique `slug` — a page at `/projects/your-slug` is created automatically.

**Images**: drop files into `public/` (e.g. `public/projects/your-image.jpg`)
and reference them as `/projects/your-image.jpg` in `content.js`.

**Resume**: drop your PDF into `public/resume.pdf` (or update `resumeUrl`
in `content.js` to point elsewhere).

## Design system

Colors, fonts, and spacing are defined as CSS variables at the top of
`src/index.css` — change a value there and it updates across the whole site:

- `--paper` / `--ink` — background and text
- `--accent` — the one accent color, used sparingly
- `--font-display` / `--font-body` — headline and body typefaces (currently
  Newsreader + IBM Plex Sans, loaded from Google Fonts in `index.html`)

Each component has its own small `.css` file next to it in `src/components`
and `src/pages` if you want to adjust layout for a specific section.

## Deploy

This is a standard Vite + React app, so it deploys as-is to Vercel, Netlify,
or GitHub Pages:

```bash
npm run build
```

This outputs a static site to `dist/` that you can upload anywhere, or
connect the repo directly to Vercel/Netlify for automatic deploys.

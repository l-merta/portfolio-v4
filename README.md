# Lukáš Merta · portfolio v4

A minimal, black-and-white personal portfolio built with **Next.js**, **Tailwind CSS** and **shadcn/ui**.

## Editing the content

You don't need to touch any components to update the site. All the text lives in `data/`:

| File | What's in it |
| --- | --- |
| `data/profile.ts` | Name, role, intro, about paragraphs, links |
| `data/projects.ts` | Projects (`featured: true` shows them as cards) |
| `data/skills.ts` | Skill groups |
| `data/experience.ts` | Work, education, highlights and the testimonial |

## Running it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Or in Docker, same as SmartShark:

```bash
make up-dev        # dev server with live reload on http://localhost:3000
make down-dev
```

## Project structure

```
app/              Routes (Next.js App Router): layout, page, 404, robots, sitemap
pageComponents/   Whole pages, assembled from sections
sections/         Page sections: Hero, Projects, Skills, Experience, ...
components/       Shared pieces (Header, Footer, theme toggle)
components/ui/    shadcn/ui components (add more with `npx shadcn@latest add <name>`)
data/             All the site's content
lib/              Small helpers
```

## Colours

The palette is shadcn's neutral greys plus one accent, `--brand` (a soft green), defined in `app/globals.css`. Change that one variable to re-tint the whole site. Light and dark mode follow the visitor's system setting and can be toggled in the header.

## Deploying

Pushing to `main` runs `.github/workflows/upload.yml`, which works like SmartShark's:

1. Builds the image from `Dockerfile.prod` and pushes it to Docker Hub as `<DOCKER_USERNAME>/portfolio:latest`.
2. SSHes into `deploy@mertalukas.cz`, copies `docker-compose-prod.yml` + `Makefile` to `/www/deploy/portfolio`, pulls the image and runs `make up-prod`.

The container listens on `127.0.0.1:6010`, so point your reverse proxy / Cloudflare Tunnel at that port.

Repository secrets it needs: `DOCKER_USERNAME`, `DOCKER_PASSWORD`, `DEPLOY_SSH_KEY`, and optionally `NEXT_PUBLIC_SITE_URL` (defaults to `https://mertalukas.cz`).

Every pull request also runs `.github/workflows/ci.yml` (lint + build).

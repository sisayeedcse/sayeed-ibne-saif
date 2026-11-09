# Sayeed Ibne Saif — Portfolio

A formal, multi-page portfolio website for **Sayeed Ibne Saif** — final-year Computer Science & Engineering student at Premier University, building from software delivery toward cloud & infrastructure engineering.

The site is designed as an **"engineering report"**: a light paper theme, hairline rules, serif display headings, mono-spaced metadata, hand-coded blueprint-style line art in every section, and a navy cursor spotlight that follows the pointer on desktop. Every project and extracurricular activity has its own dedicated case-study page — the landing page only shows titles and summaries.

---

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [How to Edit the Content](#how-to-edit-the-content)
- [Deployment](#deployment)
- [Git Workflow](#git-workflow)

---

## Live Demo

| Environment | URL |
|---|---|
| Local development | `http://localhost:3000` (after running `npm run dev`) |
| Production preview | Deploy to Vercel (see [Deployment](#deployment)) — live URL goes here |

---

## Features

| Feature | Description |
|---|---|
| **10 static pages** | Home, `/projects`, 7 project case studies, `/activities`, 7 activity write-ups — all pre-rendered as static HTML (SSG) for instant loads and SEO. |
| **Engineering-report theme** | Light-only design system: paper background with a dot-grid texture, hairline borders, tabular numbers, and a single navy accent (`#1F4E79`). |
| **Hand-coded blueprint art** | Six custom SVG schematics (cloud topology, isometric roadmap, org tree, degree seal, chip grid, star network, terminal plate) — no image files, all code. |
| **Cursor spotlight** | A navy light wash trails the mouse on desktop (auto-disabled on touch devices and under `prefers-reduced-motion`). |
| **Fully responsive** | All decorations, grids and typography scale from phones (≥320px) through tablets to >XL wide screens. |
| **Data-driven content** | Every line of text, all skills, projects and activities come from plain TypeScript files in `src/data/` — no CMS required. |

---

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) | Static generation, file-based routing, built-in optimization |
| Language | TypeScript 5 | Type-safe data models and props |
| Styling | Tailwind CSS 4 | Utility-first styling with a small design-system layer on top |
| Animation | Motion (Framer Motion) | Scroll-reveal `FadeIn` wrapper used across sections |
| Icons | lucide-react + 2 inlined SVGs | Consistent 1.5px stroke icon language |
| Fonts | Source Serif 4 · Inter · JetBrains Mono · Playfair Display | Self-hosted via `next/font` — zero layout shift, no external requests |

---

## Getting Started

> **New to coding?** Follow these steps in order. You only need [Node.js](https://nodejs.org) v20 or newer and Git installed.

### 1. Clone the repository

```bash
git clone https://github.com/sisayeedcse/sayeed-ibne-saif.git
cd sayeed-ibne-saif
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads automatically whenever you edit any file.

### 4. Create a production build (optional, verifies everything)

```bash
npm run build
npm run start
```

This compiles the site into optimized static pages and serves them — the same way a hosting platform will.

---

## Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server at `localhost:3000` with hot reload. |
| `npm run build` | Produces an optimized production build (all pages pre-rendered). Fails loudly on type errors. |
| `npm run start` | Serves the production build created by `npm run build`. |
| `npm run lint` | Runs ESLint (Next.js config) over the codebase. |

---

## Project Structure

```
sayeed-ibne-saif/
├── public/                     # Static assets served at the site root
│   ├── activities/             # Activity photos (downloaded/hosted locally)
│   ├── projects/               # Project UI screenshots
│   ├── certs/                  # Certificate images
│   └── portrait.png            # Hero portrait
│
├── src/
│   ├── app/                    # Routes (Next.js App Router — folder = URL)
│   │   ├── layout.tsx          # Root layout: fonts, header/footer, spotlight
│   │   ├── globals.css         # Design tokens, helper classes, animations
│   │   ├── page.tsx            # "/" — the landing page
│   │   ├── projects/
│   │   │   ├── page.tsx        # "/projects" — index of all case studies
│   │   │   └── [slug]/         # "/projects/<slug>" — one case study
│   │   └── activities/
│   │       ├── page.tsx        # "/activities" — index
│   │       └── [slug]/         # "/activities/<slug>" — one activity
│   │
│   ├── components/
│   │   ├── home/               # Landing-page sections (Hero, Roadmap, ...)
│   │   ├── layout/             # Header, Footer (appear on every page)
│   │   └── ui/                 # Reusable pieces (Tag, FadeIn, Schematics, ...)
│   │
│   ├── data/                   # 👈 ALL the site content lives here
│   │   ├── profile.ts          # Name, tagline, email, social links, résumé URL
│   │   ├── projects.ts         # Projects: title, year, tech, case-study write-up
│   │   ├── activities.ts       # Activities: photos, outcomes, tags
│   │   ├── experience.ts       # Professional experience entries
│   │   ├── education.ts        # Degree + coursework
│   │   ├── certifications.ts   # Verified credentials + verify links
│   │   ├── skills.ts           # Skill categories used in the Stack section
│   │   └── cloudJourney.ts     # Learning-roadmap stages
│   │
│   └── lib/                    # Small utilities (e.g. the `cn` class helper)
│
├── .gitignore                  # Files Git should never track (builds, deps)
├── next.config.ts              # Next.js configuration
├── package.json                # Project metadata + npm scripts
└── tsconfig.json               # TypeScript configuration
```

**Rule of thumb:** content → `src/data/`, layout → `src/components/layout/`, new reusable blocks → `src/components/ui/`, new pages → `src/app/`.

---

## How to Edit the Content

This is a **data-driven** site — you update text by editing TypeScript files, never HTML.

| To change… | Open and edit |
|---|---|
| Name, email, social links, résumé link | `src/data/profile.ts` |
| A project (year, description, tech tags, case-study) | `src/data/projects.ts` |
| An activity (summary, photos, tags) | `src/data/activities.ts` |
| Skills shown in the Stack section | `src/data/skills.ts` |
| The photo in the hero | Replace `public/portrait.png` (600×600 recommended) |
| Theme colors (paper, ink, navy accent) | Design tokens at the top of `src/app/globals.css` |

When you change a data file, the dev server hot-reloads automatically. When you finish, run `npm run build` to confirm everything still compiles.

---

## Deployment

### Vercel (recommended — made by the Next.js team)

1. Push this repository to GitHub (see below).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import `sisayeedcse/sayeed-ibne-saif`.
3. Leave all build settings at their defaults (Vercel auto-detects Next.js).
4. Click **Deploy**. Every future push to `main` redeploys automatically.

### Self-hosted (Node server)

```bash
npm run build
npm run start   # serves on PORT, defaults to 3000
```

---

## Git Workflow

This repository is connected to GitHub:

```
remote: https://github.com/sisayeedcse/sayeed-ibne-saif.git
branch: main
```

Everyday commands:

```bash
git status                 # see what changed
git add -A                 # stage changes
git commit -m "Redesigned portfolio"
git push origin main       # publish to GitHub
```

<details>
<summary><strong>First-time setup on a new machine (click to expand)</strong></summary>

```bash
# 1. Configure your Git identity (once per machine)
git config --global user.name  "sisayeedcse"
git config --global user.email "tech.sisayeed@gmail.com"

# 2. Make sure Git remembers you, so you don't log in on every push
git config --global credential.helper store
```

Authentication happens with a **GitHub Personal Access Token (PAT)** instead of a password:
`GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic)` — tick the `repo` scope, then use it as the password when Git prompts.

</details>

---

## Credits

Designed and developed by **Sayeed Ibne Saif** · Chattogram, Bangladesh.

Design system: light engineering-report theme — Source Serif 4 headings, Inter body, JetBrains Mono metadata, single navy accent, hand-coded SVG schematics.

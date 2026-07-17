# CLAUDE.md

This file provides guidance for this project

## What this is

A blog for keeping track of llm developments. Written by Ari Saadon and AI, served by GitHub Pages at https://arisaadon.github.io, with domain name aallmoes.eu

## Stack and constraints

- Plain HTML, CSS, and JavaScript only — no framework, no static site generator, no build step.
- Deployment is automatic: anything pushed to `master` is served as-is by GitHub Pages. There is no build or deploy command.
- Shared elements (header, timeline sidebar) are injected client-side by `site.js` on every page — pages contain only their own content, never a copy of the header or timeline.
- The actual code for the blog has to be dead simple, no need for fancy things. just the basic. 
- We try to decouple an entry as much as possible from the rest of the blog

## Structure

- `index.html` — landing page: welcome text in `<main>` inside `.layout`.
- `posts/YYYY-MM-DD-slug.html` — one page per entry, same skeleton as index (`.layout` > `<main>` with the entry's content). All of an entry's content lives in its own file.
- `site.js` — holds the `posts` array (the single source of truth for the timeline) and injects the header and timeline sidebar into every page on load. Every page loads it with a `<script src>` at the end of `<body>`; it derives the path prefix (`""` vs `"../"`) from that script tag's `src`.
- `style.css` — the only stylesheet, shared by all pages. Layout is a flexbox (`.layout`) with the timeline sidebar (`nav.timeline`) on the left and `<main>` on the right; sidebar stacks on top below 40rem.

## Adding an entry

1. Copy the newest file in `posts/` to `posts/YYYY-MM-DD-slug.html`, replace its `<title>`, `<h2>`, date line, and content.
2. Add one line for the entry to the top of the `posts` array in `site.js` (newest first). The timeline everywhere updates from that.

## Development

Preview locally with `python -m http.server 8000` and open http://localhost:8000. There are no tests or linters.

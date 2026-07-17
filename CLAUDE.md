# CLAUDE.md

This file provides guidance for this project

## What this is

A blog for keeping track of llm developments. Written by Ari Saadon and AI, served by GitHub Pages at https://arisaadon.github.io, with domain name aallmoes.eu

## Stack and constraints

- Plain HTML, CSS, and JavaScript only — no framework, no static site generator, no build step.
- Deployment is automatic: anything pushed to `master` is served as-is by GitHub Pages. There is no build or deploy command.
- Because there is no build step, shared elements (header, footer, post listings) must be maintained by hand across pages — when adding or editing a page, keep it consistent with the others.
- The actual code for the blog has to be dead simple, no need for fancy things. just the basic. 
- We try to decouple an entry as much as possible from the rest of the blog

## Structure

- `index.html` — landing page: header, timeline sidebar, welcome text in `<main>`.
- `posts/YYYY-MM-DD-slug.html` — one standalone page per entry, same layout as index (header + timeline + content). All of an entry's content lives in its own file.
- `style.css` — the only stylesheet, shared by all pages. Layout is a flexbox (`.layout`) with the timeline sidebar (`nav.timeline`) on the left and `<main>` on the right; sidebar stacks on top below 40rem.

## Adding an entry

1. Copy the newest file in `posts/` to `posts/YYYY-MM-DD-slug.html`, replace its `<title>`, `<h2>`, date line, and content.
2. Add the entry's `<li>` (newest first) to the timeline `<ul>` on `index.html` **and on every post page** — the timeline is duplicated by hand across all pages. Note link paths differ: from `index.html` links are `posts/...`, from within `posts/` they are sibling-relative.

## Development

Preview locally with `python -m http.server 8000` and open http://localhost:8000. There are no tests or linters.

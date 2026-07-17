// Shared header + timeline, injected into every page.
// To add an entry: create its file in posts/ and add one line to this array (newest first).
const posts = [
  { date: "2026-07-17", file: "2026-07-17-kimi-k3.html", title: "Kimi K3: open frontier intelligence" },
  { date: "2026-07-17", file: "2026-07-17-second-entry.html", title: "Second entry" },
  { date: "2026-07-17", file: "2026-07-17-first-entry.html", title: "First entry" },
];

// "" on index.html, "../" on pages inside posts/, derived from this script tag's src.
const root = document.currentScript.getAttribute("src").replace("site.js", "");

document.body.insertAdjacentHTML(
  "afterbegin",
  `<header>
    <h1><a href="${root}index.html">Aallmoes</a> <span class="tagline">&mdash; llm knowledge, blog and timeline by Ari Saadon</span></h1>
    <a class="contact" href="mailto:ari._s@hotmail.com">Contact</a>
  </header>`
);

const items = posts
  .map(
    (p) => `<li>
      <span class="date">${p.date}</span>
      <a href="${root}posts/${p.file}">${p.title}</a>
    </li>`
  )
  .join("");

document.querySelector(".layout").insertAdjacentHTML(
  "afterbegin",
  `<nav class="timeline"><ul>${items}</ul></nav>`
);
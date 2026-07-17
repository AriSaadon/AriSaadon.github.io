// Shared header + timeline, injected into every page.
// To add an entry: create its file in posts/ and add one line to this array (newest first).
// "score" is the Artificial Analysis intelligence score (0-100); omit it for entries
// that aren't about a specific model and no bar is shown.
const posts = [
  { date: "2026-07-17", file: "2026-07-17-kimi-k3.html", title: "Kimi K3", score: 57 },
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
      <span class="track">${p.score == null
        ? `<a class="plain" href="${root}posts/${p.file}">${p.title}</a>`
        : `<a class="bar" style="width:${p.score}%" href="${root}posts/${p.file}">${p.title}<span class="num">${p.score}</span></a>`}</span>
    </li>`
  )
  .join("");

document.querySelector(".layout").insertAdjacentHTML(
  "afterbegin",
  `<nav class="timeline">
    <p class="chart-caption">Artificial Analysis intelligence score</p>
    <ul>${items}</ul>
  </nav>`
);
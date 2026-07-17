// Shared header + timeline, injected into every page.
// To add an entry: create its file in posts/ and add one line to this array
// (any order — the timeline sorts itself newest first).
// "score" is the Artificial Analysis intelligence score (0-100); omit it for entries
// that aren't about a specific model — those show their title on the gray track with no blue bar.
// "icon" is a filename in icons/ (the model's lab logo); omit it for no icon.
const posts = [
  { date: "2026-07-17", file: "2026-07-17-kimi-k3.html", title: "Kimi K3", score: 57, icon: "moonshot.ico" },
  { date: "2026-07-16", file: "2026-07-16-placeholder.html", title: "Placeholder" },
];

// "" on index.html, "../" on pages inside posts/, derived from this script tag's src.
const root = document.currentScript.getAttribute("src").replace("site.js", "");

document.body.insertAdjacentHTML(
  "afterbegin",
  `<header>
    <h1><a href="${root}index.html">Aallmoes.eu</a> <span class="tagline">&mdash; llm knowledge, blog and timeline by Ari Saadon</span></h1>
    <a class="contact" href="mailto:ari._s@hotmail.com">Contact</a>
  </header>`
);

// "2026-07-17" -> "17 Jul 2026"
const prettyDate = (d) => {
  const [y, m, day] = d.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${Number(day)} ${months[m - 1]} ${y}`;
};

const items = posts
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date))
  .map(
    (p) => `<li>
      <a class="date" href="${root}posts/${p.file}">${prettyDate(p.date)}</a>
      ${p.icon == null ? `<span class="lab-icon"></span>` : `<img class="lab-icon" src="${root}icons/${p.icon}" alt="">`}
      <span class="track has-bar">${p.score == null
        ? `<a class="bar no-score" href="${root}posts/${p.file}"><span class="label">${p.title}</span></a>`
        : `<a class="bar" style="width:${p.score}%" href="${root}posts/${p.file}"><span class="label">${p.title}</span><span class="num">${p.score}</span></a>`}</span>
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
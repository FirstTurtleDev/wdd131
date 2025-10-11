/* ===== footer year + last modified ===== */
const yearEl = document.getElementById("year");
const modEl = document.getElementById("lastModified");
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (modEl) modEl.textContent = document.lastModified;

/* ===== mobile hamburger ===== */
const menuBtn = document.getElementById("menu");
const nav = document.getElementById("primary-nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "✕" : "☰";
  });
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a && nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    }
  });
}

const IMG_BASE = "../Temples/images/";

const temples = [
  { name: "Brasil Temple", location: "Campinas, Brazil", dedicated: "2002-05-17", area: 59915, imageUrl: IMG_BASE + "Brasil-temple.jpg" },
  { name: "Honduras Temple", location: "Tegucigalpa, Honduras", dedicated: "2013-03-17", area: 29773, imageUrl: IMG_BASE + "Honduras.jpg" },
  { name: "Panama City Temple", location: "Panama City, Panama", dedicated: "2008-08-10", area: 36675, imageUrl: IMG_BASE + "lds-panama-temple.jpg" },
  { name: "Mexico City Temple", location: "Mexico City, Mexico", dedicated: "1983-12-02", area: 116642, imageUrl: IMG_BASE + "Mexico-city-temple.jpg" },
  { name: "Santo Domingo Temple", location: "Santo Domingo, Dominican Republic", dedicated: "2000-09-17", area: 67000, imageUrl: IMG_BASE + "Republica-dominicana-temple.jpg" },
  { name: "Salt Lake Temple", location: "Salt Lake City, Utah, USA", dedicated: "1893-04-06", area: 382207, imageUrl: IMG_BASE + "salt-lake-temple-15669-main.jpg" },
  { name: "Taipei Taiwan Temple", location: "Taipei, Taiwan", dedicated: "1984-11-17", area: 9245, imageUrl: IMG_BASE + "taiwan-temple.jpg" },
  { name: "Toronto Ontario Temple", location: "Brampton, Ontario, Canada", dedicated: "1990-08-25", area: 57000, imageUrl: IMG_BASE + "Toronto-temple.jpg" },
  { name: "Trujillo Peru Temple", location: "Trujillo, Peru", dedicated: "2015-06-21", area: 44960, imageUrl: IMG_BASE + "Trujillo-Peru-Temple-2.jpg" },
];
/* ===== DOM refs ===== */
const gallery = document.getElementById("gallery");
const title = document.getElementById("view-title");

/* ===== card factory (native lazy-loading) ===== */
function makeCard(t) {
  const fig = document.createElement("figure");

  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = t.imageUrl;
  img.alt = t.name;

  const cap = document.createElement("figcaption");
  cap.innerHTML = `
    <div style="font-weight:700">${t.name}</div>
    <div>${t.location}</div>
    <div>Dedicated: ${new Date(t.dedicated).toLocaleDateString()}</div>
    <div>Area: ${t.area.toLocaleString()} sq ft</div>
  `;

  fig.appendChild(img);
  fig.appendChild(cap);
  return fig;
}

/* ===== render + filters ===== */
function render(list) {
  gallery.innerHTML = "";
  list.forEach(t => gallery.appendChild(makeCard(t)));
}

const filters = {
  home: () => temples,
  old: () => temples.filter(t => new Date(t.dedicated).getFullYear() < 1900),
  new: () => temples.filter(t => new Date(t.dedicated).getFullYear() > 2000),
  large: () => temples.filter(t => t.area > 90000),
  small: () => temples.filter(t => t.area < 10000),
};

function applyFilter(name) {
  const key = name in filters ? name : "home";
  if (title) title.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  render(filters[key]());
}

/* nav clicks */
if (nav) {
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-filter]");
    if (!a) return;
    e.preventDefault();
    applyFilter(a.dataset.filter);
  });
}

/* initial load */
applyFilter("home");

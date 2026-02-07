// Array of temple objects (sample + added entries)
const temples = [
  {
    templeName: "Panama",
    location: "Panama City, Panama",
    dedicated: "2008, January, 20",
    area: 15000,
    imageUrl: "images/lds-panama-temple.jpg"
  },
  {
    templeName: "Honduras",
    location: "Tegucigalpa, Honduras",
    dedicated: "1983, January, 20",
    area: 12000,
    imageUrl: "images/honduras-temple.jpg"
  },
  {
    templeName: "Santo Domingo",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, June, 3",
    area: 22000,
    imageUrl: "images/santo-domingo-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/taiwan-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/temple-toronto.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/trujillo-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/temple-mexico-city.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    templeName: "Brasil",
    location: "Campinas, Brazil",
    dedicated: "2006, May, 22",
    area: 18000,
    imageUrl: "images/temple-brasil.jpg"
  },
  {
    templeName: "Toronto",
    location: "Toronto, Ontario, Canada",
    dedicated: "2019, March, 10",
    area: 93000,
    imageUrl: "images/temple-toronto.jpg"
  }
];

// Footer dynamic values
const yearSpan = document.getElementById("year");
const lastModSpan = document.getElementById("lastModified");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModSpan) lastModSpan.textContent = document.lastModified;

// Mobile hamburger toggle
const menuBtn = document.getElementById("menu");
const nav = document.getElementById("primary-nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "✕" : "☰";
  });

  nav.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    }
  });
}

// Helpers
function getYearFromDedicated(dedicated) {
  if (!dedicated) return NaN;
  const parts = dedicated.split(",");
  const maybeYear = parseInt(parts[0], 10);
  if (!Number.isNaN(maybeYear)) return maybeYear;
  const parsed = Date.parse(dedicated);
  if (!Number.isNaN(parsed)) return new Date(parsed).getFullYear();
  return NaN;
}

// Rendering
const gallery = document.getElementById("gallery");
const title = document.querySelector("main h1");

function createTempleCard(t) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = t.imageUrl;
  img.alt = t.templeName;
  img.loading = "lazy";

  const figcap = document.createElement("figcaption");
  figcap.textContent = t.templeName;

  const meta = document.createElement("div");
  meta.className = "meta";
  meta.innerHTML = `<div>${t.location}</div><div>Dedicated: ${t.dedicated}</div><div>Area: ${t.area.toLocaleString()} sq ft</div>`;

  figure.appendChild(img);
  figure.appendChild(figcap);
  figure.appendChild(meta);

  return figure;
}

function renderTemples(list) {
  if (!gallery) return;
  gallery.innerHTML = "";
  if (!list || list.length === 0) {
    gallery.innerHTML = "<p>No temples found.</p>";
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(t => frag.appendChild(createTempleCard(t)));
  gallery.appendChild(frag);
}

// Initial render (home = all)
renderTemples(temples);

// Filtering logic
const navLinks = document.querySelectorAll('#primary-nav a');
navLinks.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = a.dataset.filter || 'all';
    title.textContent = a.textContent.trim();
    applyFilter(filter);
  });
});

function applyFilter(filter) {
  let result = temples.slice();
  if (filter === 'old') {
    result = temples.filter(t => getYearFromDedicated(t.dedicated) < 1900);
  } else if (filter === 'new') {
    result = temples.filter(t => getYearFromDedicated(t.dedicated) > 2000);
  } else if (filter === 'large') {
    result = temples.filter(t => t.area > 90000);
  } else if (filter === 'small') {
    result = temples.filter(t => t.area < 10000);
  }
  renderTemples(result);
}

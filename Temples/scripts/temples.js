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

  // Optional: close menu when a link is clicked
  nav.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    }
  });
}

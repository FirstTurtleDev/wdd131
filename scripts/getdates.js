const yearSpan = document.querySelector('#currentyear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModP = document.querySelector('#lastModified');
if (lastModP) {
  lastModP.textContent = `Last Modification: ${document.lastModified}`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle
    const hamburger = document.getElementById('menu');
    const navUl = document.querySelector('nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('visible');
            hamburger.textContent = navUl.classList.contains('visible') ? 'X' : '☰';
        });
    }

    // Dynamic Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Dynamic Last Modified
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
    }
});

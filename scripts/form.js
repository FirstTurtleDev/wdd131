document.addEventListener('DOMContentLoaded', () => {
    // Array of products
    const products = [
        {
            id: "fc-1888",
            name: "Flux Capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "Power Laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "Time Circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "Low Voltage Reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "Warp Equalizer",
            averagerating: 5.0
        }
    ];

    // Populate Product Select
    const productSelect = document.getElementById('product');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id; // Use id as value
            option.textContent = product.name; // Use name as display text
            productSelect.appendChild(option);
        });
    }

    // Handle Review Count Display (for review.html)
    const reviewCountDisplay = document.getElementById('review-count');
    if (reviewCountDisplay) {
        let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;
        reviewCountDisplay.textContent = reviewCount;
    }

    // Handle Form Submission (Increment Count)
    const productForm = document.querySelector('form');
    if (productForm) {
        productForm.addEventListener('submit', () => {
            let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;
            reviewCount++;
            localStorage.setItem('reviewCount', reviewCount);
        });
    }

    // Set Footer Year and Last Modified
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        const lastModified = document.lastModified;
        lastModifiedSpan.textContent = lastModified;
    }
});

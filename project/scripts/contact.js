document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const messageStatus = document.getElementById('message-status');
    const messageCountSpan = document.getElementById('message-count');

    // Display current message count on load
    updateMessageCount();

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual submission for demo purposes

            // Simple Validation Feedback
            const name = document.getElementById('name').value;
            if (name.trim() === '') {
                alert('Please enter your name.');
                return;
            }

            // Update localStorage count
            let totalMessages = Number(localStorage.getItem('zavixoMessageCount')) || 0;
            totalMessages++;
            localStorage.setItem('zavixoMessageCount', totalMessages);

            // Update UI
            updateMessageCount();

            if (messageStatus) {
                messageStatus.textContent = `Thank you, ${name}! Your message has been sent.`;
                messageStatus.style.color = 'green';
            }

            contactForm.reset();
        });
    }

    function updateMessageCount() {
        if (messageCountSpan) {
            const count = Number(localStorage.getItem('zavixoMessageCount')) || 0;
            messageCountSpan.textContent = count;
        }
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple alert for contact form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting Giftly! We will get back to you soon.');
    this.reset();
});

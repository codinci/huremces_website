// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (
            !hamburger.contains(e.target) &&
            !navLinks.contains(e.target)
        ) {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
        }
    });
});

// Set current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

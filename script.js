document.addEventListener('DOMContentLoaded', () => {
    // Dynamically update copyright year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scroll back to hero section when logo is clicked
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Mobile Hamburger Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navContent = document.getElementById('nav-content');

    if (menuToggle && navContent) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navContent.classList.toggle('active');
        });

        // Close menu when clicking on any link inside the mobile drawer
        navContent.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navContent.classList.remove('active');
            });
        });
    }
});

const validHashes = ['#hero', '#about', '#features', '#faq'];
if (window.location.hash && !validHashes.includes(window.location.hash)) {
    // Cleanly rewrite URL back to base landing page without page reload
    history.replaceState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

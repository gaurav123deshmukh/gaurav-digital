document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Hamburger Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });
    }

    // 2. Scroll Events (Navbar & WhatsApp)
    const nav = document.querySelector('.navbar');
    const waButton = document.querySelector('.whatsapp-float');

    window.addEventListener('scroll', () => {
        // Navbar Background Logic
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.background = "rgba(10, 10, 10, 0.95)"; 
            } else {
                nav.style.background = "rgba(10, 10, 10, 0.45)"; 
            }
        }

        // WhatsApp Reveal Logic (Appears after 100px of scrolling)
        if (waButton) {
            if (window.scrollY > 100) {
                waButton.classList.add('show');
            } else {
                waButton.classList.remove('show');
            }
        }
    });
});

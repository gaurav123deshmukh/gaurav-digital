// Handle Watery Header Background and WhatsApp Float on Scroll
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    const waButton = document.querySelector('.whatsapp-float');

    // Header Background Logic (Safeguarded)
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(10, 10, 10, 0.9)"; 
        } else {
            nav.style.background = "rgba(10, 10, 10, 0.7)"; 
        }
    }

    // WhatsApp Reveal Logic (Safeguarded)
    if (waButton) {
        if (window.scrollY > 300) {
            waButton.classList.add('show');
        } else {
            waButton.classList.remove('show');
        }
    }
};

// Mobile Hamburger Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });
}

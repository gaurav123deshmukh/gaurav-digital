window.onscroll = function() {
    // 1. Watery Header Background Logic
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        nav.style.background = "rgba(10, 10, 10, 0.9)"; // Becomes darker as you scroll
    } else {
        nav.style.background = "rgba(10, 10, 10, 0.7)"; // More transparent at the top
    }

    // 2. WhatsApp Button Scroll Reveal Logic
    const waButton = document.querySelector('.whatsapp-float');
    if (waButton) {
        // Button appears after scrolling down 300 pixels
        if (window.pageYOffset > 300) { 
            waButton.classList.add('show');
        } else {
            waButton.classList.remove('show');
        }
    }
};

// 3. Mobile Hamburger Menu Toggle Logic
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });
}

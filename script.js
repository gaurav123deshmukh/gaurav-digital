window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        nav.style.background = "rgba(10, 10, 10, 0.9)"; // Becomes darker/more solid as you scroll down
    } else {
        nav.style.background = "rgba(10, 10, 10, 0.7)"; // More transparent at the very top
    }
};

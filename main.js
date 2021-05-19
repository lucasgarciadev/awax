const hamburger = document.querySelector('.menu-display');
const nav = document.querySelector('nav');

function menuToggle() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('opened');
}

hamburger.addEventListener('click', menuToggle);

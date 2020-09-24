let btnMenu = document.querySelector('.header__m-menu-btn'),
    btnClose = document.querySelector('.header__m-close-btn'),
    mobMenu = document.querySelector('.header_m-menu'),
    mobNavLink = document.querySelectorAll('.header__m-nav-link');

btnMenu.addEventListener('click', function(event) {
    toggleMenu();
});

btnClose.addEventListener('click', function(event) {
    toggleMenu();
});


function toggleMenu() {
    mobMenu.classList.toggle('header_m-menu-active');
}
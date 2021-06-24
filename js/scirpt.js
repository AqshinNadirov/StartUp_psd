window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__text'),
    menuItem = document.querySelectorAll('.header__text_active'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__text_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__text_active');
        })
    })
})